'use client'

import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Grid3x3Icon } from "@/components/Icons";

const GroupByDropdown = ({ groupByKey, setGroupByKey }) => {
  const options = ['ubicacion', 'category', 'description'];

  const handleSelect = (option) => {
    setGroupByKey(option);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2" variant="outline">
          <Grid3x3Icon className="h-4 w-4" />
          Agrupar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-72 p-2">
        <DropdownMenuLabel>Agrupar por:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map(option => (
          <DropdownMenuItem key={option} onSelect={() => handleSelect(option)}>
            <Checkbox id={`group-${option}`} checked={groupByKey === option} readOnly />
            <Label className="flex-1" htmlFor={`group-${option}`}>
              {option.charAt(0).toUpperCase() + option.slice(1)}
            </Label>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default GroupByDropdown;
