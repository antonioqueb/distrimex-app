'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FilterIcon } from "./Icons";

const FilterDropdown = ({ options, selectedValues, handleSelect }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(prev => !prev);
  };

  const handleOptionSelect = (option) => {
    handleSelect(option);
    setMenuOpen(true); // Mantener el menú abierto
  };

  return (
    <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
      <DropdownMenuTrigger asChild>
        <Button className="flex items-center gap-2" variant="outline" onClick={handleMenuToggle}>
          <FilterIcon className="h-4 w-4" />
          Filtrar
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-85 p-2">
        <DropdownMenuLabel>Filtrar por:</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {options.map(option => (
          <DropdownMenuItem
            key={option}
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => handleOptionSelect(option)}
          >
            <Checkbox
              id={`filter-${option}`}
              checked={selectedValues.includes(option)}
              readOnly
              className="pointer-events-none"
            />
            <Label className="flex-1 cursor-pointer pointer-events-none" htmlFor={`filter-${option}`}>
              {option}
            </Label>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default FilterDropdown;
