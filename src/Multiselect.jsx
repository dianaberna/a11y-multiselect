import React, { Fragment, useState, useRef, useEffect } from "react";
import { Listbox, Transition } from "@headlessui/react";

const people = [
    { id: 1, name: "Italiano" },
    { id: 2, name: "Matematica" },
    { id: 3, name: "Geografia" },
    { id: 4, name: "Musica" },
    { id: 5, name: "Inglese" },
    { id: 6, name: "Arte" },
    { id: 7, name: "Informatica" },
    { id: 8, name: "Disegno" },
    { id: 9, name: "Scienze" },
    { id: 10, name: "Biologia" },
];

export default function Multiselect() {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPersons, setSelectedPersons] = useState([]);
    const wrapperRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                wrapperRef.current &&
                !wrapperRef.current.contains(event.target)
            ) {
                console.log("outside");
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [wrapperRef]);

    function isSelected(value) {
        return selectedPersons.find((el) => el === value) ? true : false;
    }

    function handleSelect(value) {
        if (!isSelected(value)) {
            const selectedPersonsUpdated = [
                ...selectedPersons,
                people.find((el) => el === value),
            ];
            setSelectedPersons(selectedPersonsUpdated);
        } else {
            handleDeselect(value);
        }
        setIsOpen(true);
    }

    function handleDeselect(value) {
        const selectedPersonsUpdated = selectedPersons.filter(
            (el) => el !== value
        );
        setSelectedPersons(selectedPersonsUpdated);
        setIsOpen(true);
    }

    function handleEscapeKey(event) {
        if (event.code === "Escape") {
            console.log("chiudi da esc");
            setIsOpen(false);
        } else if (event.code === "ArrowDown") {
            console.log("apri da arrow down");
            setIsOpen(true);
        }
    }

    function handleArrowDown(event) {
        if (event.code === "ArrowDown") {
            console.log("apri da arrow down");
            setIsOpen(true);
        }
    }

    return (
        <div className="flex p-12">
            <div className="w-full max-w-xs mx-auto">
                <Listbox
                    className="space-y-1"
                    value={selectedPersons}
                    onChange={(value) => handleSelect(value)}
                    open={isOpen}
                >
                    {() => (
                        <>
                            <Listbox.Label
                                onKeyDown={handleArrowDown}
                                htmlFor="diana"
                                className="block text-sm text-left leading-5 font-medium text-gray-700"
                            >
                                Materia scolastica
                            </Listbox.Label>
                            <div className="relative">
                                <span className="inline-block w-full rounded-md shadow-sm">
                                    <Listbox.Button
                                        className="cursor-default relative w-full rounded-md border border-gray-300 bg-white pl-3 pr-10 py-2 text-left focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition ease-in-out duration-150 sm:text-sm sm:leading-5"
                                        onClick={() => setIsOpen(!isOpen)}
                                        onKeyDown={(event) => {
                                            handleEscapeKey(event);
                                            handleArrowDown(event);
                                        }}
                                        open={isOpen}
                                        id="diana"
                                    >
                                        <span className="block truncate">
                                            {selectedPersons.length < 1
                                                ? "Seleziona materia"
                                                : `Selezionate (${selectedPersons.length})`}
                                        </span>
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
                                </span>

                                <Transition
                                    show={isOpen}
                                    leave="transition ease-in duration-100"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                    className="absolute mt-1 w-full rounded-md bg-white shadow-lg"
                                >
                                    <Listbox.Options
                                        static
                                        className="max-h-60 rounded-md py-1 text-base text-left leading-6 shadow-xs overflow-auto focus:outline-none sm:text-sm sm:leading-5"
                                        onKeyDown={handleEscapeKey}
                                        ref={wrapperRef}
                                    >
                                        {people.map((person) => {
                                            const selected = isSelected(person);
                                            return (
                                                <Listbox.Option
                                                    key={person.id}
                                                    value={person}
                                                    as={Fragment}
                                                >
                                                    {({ active }) => (
                                                        <div
                                                            className={`${
                                                                active
                                                                    ? ""
                                                                    : "text-gray-900"
                                                            } cursor-default select-none relative py-2 pl-8 pr-4 hover:bg-blue-50`}
                                                        >
                                                            <span
                                                                className={`${
                                                                    selected
                                                                        ? "font-semibold"
                                                                        : "font-normal"
                                                                } block truncate`}
                                                            >
                                                                {person.name}
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
                                            );
                                        })}
                                    </Listbox.Options>
                                </Transition>
                            </div>
                        </>
                    )}
                </Listbox>
                <div
                    className="pt-1 text-sm text-left"
                    tabIndex={0}
                    aria-label={"Riepilogo materie selezionate"}
                >
                    {selectedPersons.length > 0 && (
                        <>
                            <span aria-hidden="true">Materie selezionate:</span>{" "}
                            <span>
                                {selectedPersons.map((s) => s.name).join(", ")}
                            </span>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
