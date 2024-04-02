import React, { useState} from "react";
import { Listbox } from "@headlessui/react";



export default function Multiselect({label, options, optionKey, optionLabel, placeholder, summarySelectedAriaLabel, summarySelectedLabel}) {
    const [selectedOptions, setSelectedOptions] = useState([]);

    return (
        <div className="flex">
            <div className="w-full ">
                <Listbox
                    value={selectedOptions}
                    onChange={setSelectedOptions}
                    multiple
                >
                    <Listbox.Label
                        className="block text-sm text-left leading-5 font-medium text-gray-700"
                    >
                        {label}
                    </Listbox.Label>
                    <Listbox.Button
                        className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                    >
                        {selectedOptions.length < 1
                            ? placeholder
                            : `Selezionate (${selectedOptions.length})`}
                        <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                            <svg
                                className="h-5 w-5 text-gray-400"
                                viewBox="0 0 20 20"
                                fill="none"
                                stroke="currentColor"
                            >
                                <path
                                    d="M7 7l3-3 3 3m0 6l-3 3-3-3"
                                    strokeWidth="1.5"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </span>
                    </Listbox.Button>
                    <Listbox.Options className="absolute mt-1 w-full max-w-4xl rounded-md bg-white shadow-lg">
                        {options.map((subject) => (
                            <Listbox.Option key={subject[optionKey]} value={subject}>
                                {({ active, selected }) => (
                                    <div
                                        className={`${
                                            active ? "" : "text-gray-900"
                                        } cursor-default select-none relative py-2 pl-8 pr-4 hover:bg-blue-50`}
                                    >
                                        <span
                                            className={`${
                                                selected
                                                    ? "font-semibold"
                                                    : "font-normal"
                                            } block truncate`}
                                        >
                                            {subject[optionLabel]}
                                        </span>
                                        {selected && (
                                            <span
                                                className={`${
                                                    active
                                                        ? ""
                                                        : "text-blue-600"
                                                } absolute inset-y-0 left-0 flex items-center pl-1.5`}
                                            >
                                                <svg
                                                    className="h-5 w-5"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </span>
                                        )}
                                    </div>
                                )}
                            </Listbox.Option>
                        ))}
                    </Listbox.Options>
                    <div
                        className="pt-1 text-sm text-left"
                        tabIndex={0}
                        aria-label={summarySelectedAriaLabel}
                    >
                        {selectedOptions && selectedOptions.length > 0 && (
                            <>
                                <span aria-hidden="true">
                                    {summarySelectedLabel}
                                </span>{" "}
                                <span>
                                    {selectedOptions
                                        .map((s) => s[optionLabel])
                                        .join(", ")}
                                </span>
                            </>
                        )}
                    </div>
                </Listbox>
            </div>
        </div>
    );
}
