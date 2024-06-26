"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

export default function Page() {
  const [file, setFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [isUploading, setIsUploading] = useState(false);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Por favor, selecciona un archivo primero");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      setIsUploading(true);
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          const percentCompleted = Math.round((loaded * 100) / total);
          setUploadProgress(percentCompleted);
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la respuesta del servidor: ${response.statusText}`);
      }

      const result = await response.json();
      console.log(result);
      alert("Archivo cargado y procesado exitosamente");
    } catch (error) {
      console.error("Error al cargar el archivo:", error);
      alert(`Error al cargar el archivo: ${error.message}`);
    } finally {
      setIsUploading(false);
    }
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/template/inventario/plantilla_inventario.xlsx";
    link.setAttribute("download", "plantilla_inventario.xlsx");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="bg-white dark:bg-zinc-950 rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Cargar archivo de Excel</h1>
          <p className="text-zinc-500 dark:text-zinc-400">
            Sube tus archivos de Excel para Distrimex
          </p>
        </div>
        <div className="border-2 border-zinc-200 dark:border-zinc-800 rounded-lg p-6 flex flex-col items-center justify-center space-y-4">
          <CloudUploadIcon className="w-12 h-12 text-zinc-500 dark:text-zinc-400" />
          <p className="text-zinc-500 dark:text-zinc-400">
            Arrastra y suelta tus archivos aquí o
          </p>
          <input type="file" onChange={handleFileChange} className="hidden" id="file-input" />
          <Button variant="outline" onClick={() => document.getElementById('file-input').click()}>Seleccionar archivos</Button>
        </div>
        <div className="space-y-4">
          <h2 className="text-lg font-bold">Archivos seleccionados</h2>
          {file && (
            <div className="bg-zinc-100 dark:bg-zinc-800 rounded-lg p-4 flex items-center gap-4">
              <img
                alt="Excel file"
                className="rounded"
                height={40}
                src="/placeholder.svg"
                style={{
                  aspectRatio: "40/40",
                  objectFit: "cover",
                }}
                width={40}
              />
              <div>
                <p className="font-medium">{file.name}</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  {(file.size / (1024 * 1024)).toFixed(2)} MB
                </p>
              </div>
            </div>
          )}
        </div>
        {isUploading && (
          <div className="space-y-4">
            <Label>Progreso de la carga:</Label>
            <div className="relative">
              <Progress value={uploadProgress} max="100" className="relative overflow-hidden" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-reflection"></div>
            </div>
          </div>
        )}
        <Button className="w-full" onClick={handleUpload}>Cargar</Button>
        <Button className="w-full mt-4" variant="outline" onClick={handleDownload}>
          Descargar Plantilla
        </Button>
      </div>
    </div>
  );
}

function CloudUploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
      <path d="M12 12v9" />
      <path d="m16 16-4-4-4 4" />
    </svg>
  );
}
