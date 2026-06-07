"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronDown, Package } from "lucide-react";

interface Option {
  value: string;
  label: string;
}

interface CustomSelectProps {
  options: Option[];
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export default function CustomSelect({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  required = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const selectedLabel = options.find((o) => o.value === value)?.label;

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div ref={ref} className="relative">
      {/* Hidden native select for form validation */}
      {required && (
        <select
          tabIndex={-1}
          value={value}
          required
          onChange={() => {}}
          className="absolute inset-0 opacity-0 pointer-events-none"
          aria-hidden="true"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
      )}

      {/* Custom trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full pl-11 pr-10 py-3.5 rounded-xl border text-sm text-left transition-all bg-white cursor-pointer flex items-center ${
          isOpen
            ? "border-mangrove ring-2 ring-mangrove/10"
            : "border-gray-200 hover:border-gray-300"
        } ${value ? "text-gray-900" : "text-gray-400"}`}
      >
        <Package className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <span className="truncate">{selectedLabel || placeholder}</span>
        <ChevronDown
          className={`absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-gray-200 rounded-xl shadow-xl overflow-hidden animate-in fade-in slide-in-from-top-1 duration-150">
          <div className="max-h-60 overflow-y-auto py-1">
            {options.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={`w-full px-4 py-2.5 text-sm text-left transition-colors cursor-pointer ${
                  value === option.value
                    ? "bg-mangrove text-white font-medium"
                    : "text-gray-700 hover:bg-mangrove/10 hover:text-mangrove"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
