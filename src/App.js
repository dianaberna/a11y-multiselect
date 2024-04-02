import Multiselect from "./Multiselect";

const subjects = [
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

function App() {
    return (
        <div className="text-left p-12">
            <h1 className="text-2xl py-2">Pagina di prova per select</h1>
            <h2 className="text-xl py-2">Select standard HTML</h2>
            <label htmlFor="selectMateria">Selezione materia scolastica:</label>
            <select
                id="selectMateria"
                className='class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
            >
                <option>Italiano</option>
                <option>Matematica</option>
                <option>Geogragia</option>
                <option>Musica</option>
                <option>Inglese</option>
                <option>Arte</option>
                <option>Informatica</option>
                <option>Disegno</option>
                <option>Scienze</option>
                <option>Biologia</option>
            </select>

            <hr className="my-4" />

            <h2 className="text-xl py-2">Multiselect custom</h2>
            <Multiselect
                label="Materia scolastica"
                options={subjects}
                optionKey={"id"}
                optionLabel={"name"}
                placeholder={"Seleziona materia"}
                summarySelectedAriaLabel={"Riepilogo materie selezionate"}
                summarySelectedLabel={"Materie selezionate:"}
            />
        </div>
    );
}

export default App;
