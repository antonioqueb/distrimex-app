import { NextResponse } from 'next/server';
import ExcelJS from 'exceljs';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(request) {
  try {
    const contentType = request.headers.get('content-type') || '';
    if (!contentType.startsWith('multipart/form-data')) {
      throw new Error("Unsupported content type");
    }

    const formData = await request.formData();
    const file = formData.get('file');
    if (!file) {
      throw new Error("No file found in the request");
    }

    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.load(buffer);

    const worksheet = workbook.getWorksheet(1); // Asumiendo que estás usando la primera hoja

    const data = [];
    worksheet.eachRow((row, rowNumber) => {
      if (rowNumber > 1) { // Suponiendo que la primera fila es el encabezado
        const item = {
          adlCode: row.getCell('A').value !== null ? String(row.getCell('A').value) : '',
          description: row.getCell('B').value !== null ? String(row.getCell('B').value) : '',
          odooCode: row.getCell('C').value !== null ? String(row.getCell('C').value) : '',
          category: row.getCell('D').value !== null ? String(row.getCell('D').value) : '',
          businessUnit: row.getCell('E').value !== null ? String(row.getCell('E').value) : '',
          pcam: row.getCell('F').value !== null ? parseFloat(row.getCell('F').value) : 0,
          lpz: row.getCell('G').value !== null ? parseFloat(row.getCell('G').value) : 0,
          nac: row.getCell('H').value !== null ? parseFloat(row.getCell('H').value) : 0,
          uni: row.getCell('I').value !== null ? parseFloat(row.getCell('I').value) : 0,
          pnc: row.getCell('J').value !== null ? parseFloat(row.getCell('J').value) : 0,
          inventarioCampeche: row.getCell('K').value !== null ? parseFloat(row.getCell('K').value) : 0,
          tol: row.getCell('L').value !== null ? parseFloat(row.getCell('L').value) : 0,
          inventarioAdl: row.getCell('M').value !== null ? parseFloat(row.getCell('M').value) : 0,
          uMeasure: row.getCell('N').value !== null ? String(row.getCell('N').value) : '',
          productPrice: row.getCell('O').value !== null ? parseFloat(row.getCell('O').value) : 0,
        };

        // Asegurarse de que todos los valores numéricos sean válidos
        Object.keys(item).forEach(key => {
          if (typeof item[key] === 'number' && isNaN(item[key])) {
            item[key] = 0;
          }
        });

        data.push(item);
      }
    });

    // Validar los datos antes de insertar
    for (const item of data) {
      if (isNaN(item.pcam) || isNaN(item.lpz) || isNaN(item.nac) || isNaN(item.uni) || isNaN(item.pnc) || isNaN(item.inventarioAdl)) {
        console.error("Invalid data format:", item);
        throw new Error('Invalid data format');
      }
    }

    // Inyectar en la base de datos con Prisma
    for (const item of data) {
      await prisma.inventory.upsert({
        where: { adlCode: item.adlCode },
        update: {
          description: item.description,
          odooCode: item.odooCode,
          category: item.category,
          businessUnit: item.businessUnit,
          pcam: item.pcam,
          lpz: item.lpz,
          nac: item.nac,
          uni: item.uni,
          pnc: item.pnc,
          inventarioCampeche: item.inventarioCampeche,
          tol: item.tol,
          inventarioAdl: item.inventarioAdl,
          uMeasure: item.uMeasure,
          productPrice: item.productPrice,
        },
        create: {
          adlCode: item.adlCode,
          description: item.description,
          odooCode: item.odooCode,
          category: item.category,
          businessUnit: item.businessUnit,
          pcam: item.pcam,
          lpz: item.lpz,
          nac: item.nac,
          uni: item.uni,
          pnc: item.pnc,
          inventarioCampeche: item.inventarioCampeche,
          tol: item.tol,
          inventarioAdl: item.inventarioAdl,
          uMeasure: item.uMeasure,
          productPrice: item.productPrice,
        },
      });
    }

    console.log("Data inserted/updated in the database");

    return NextResponse.json({ message: 'File processed successfully' });
  } catch (error) {
    console.error("Error processing the request:", error);
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
