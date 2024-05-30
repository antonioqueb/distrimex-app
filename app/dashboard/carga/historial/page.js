
import { Button } from "@/components/ui/button"
import { DropdownMenuTrigger, DropdownMenuRadioItem, DropdownMenuRadioGroup, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table"

export default function Component() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Historial de Cargas</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button className="shrink-0" variant="outline">
              <ArrowUpDownIcon className="w-4 h-4 mr-2" />
              Ordenar por
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-[200px]">
            <DropdownMenuRadioGroup value="name">
              <DropdownMenuRadioItem value="name">Nombre</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="date">Fecha</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="size">Tamaño</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Archivo</TableHead>
              <TableHead>Fecha</TableHead>
              <TableHead>Tamaño</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <FileIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
                  <div className="grid gap-0.5">
                    <p className="font-medium">report.pdf</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Uploaded on May 29, 2024</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>May 29, 2024 12:34 PM</TableCell>
              <TableCell>2.3 MB</TableCell>
              <TableCell className="text-right">
                <Button className="rounded-full" size="icon" variant="ghost">
                  <RedoIcon className="w-5 h-5" />
                  <span className="sr-only">Reload</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <FileIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
                  <div className="grid gap-0.5">
                    <p className="font-medium">invoice.xlsx</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Uploaded on May 25, 2024</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>May 25, 2024 9:45 AM</TableCell>
              <TableCell>1.7 MB</TableCell>
              <TableCell className="text-right">
                <Button className="rounded-full" size="icon" variant="ghost">
                  <RedoIcon className="w-5 h-5" />
                  <span className="sr-only">Reload</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <FileIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
                  <div className="grid gap-0.5">
                    <p className="font-medium">presentation.pptx</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Uploaded on May 20, 2024</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>May 20, 2024 3:12 PM</TableCell>
              <TableCell>4.5 MB</TableCell>
              <TableCell className="text-right">
                <Button className="rounded-full" size="icon" variant="ghost">
                  <RedoIcon className="w-5 h-5" />
                  <span className="sr-only">Reload</span>
                </Button>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <div className="flex items-center gap-3">
                  <FileIcon className="w-6 h-6 text-zinc-500 dark:text-zinc-400" />
                  <div className="grid gap-0.5">
                    <p className="font-medium">image.jpg</p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400">Uploaded on May 15, 2024</p>
                  </div>
                </div>
              </TableCell>
              <TableCell>May 15, 2024 11:23 AM</TableCell>
              <TableCell>850 KB</TableCell>
              <TableCell className="text-right">
                <Button className="rounded-full" size="icon" variant="ghost">
                  <RedoIcon className="w-5 h-5" />
                  <span className="sr-only">Reload</span>
                </Button>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

function ArrowUpDownIcon(props) {
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
      <path d="m21 16-4 4-4-4" />
      <path d="M17 20V4" />
      <path d="m3 8 4-4 4 4" />
      <path d="M7 4v16" />
    </svg>
  )
}


function FileIcon(props) {
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
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function RedoIcon(props) {
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
      <path d="M21 7v6h-6" />
      <path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3l3 2.7" />
    </svg>
  )
}