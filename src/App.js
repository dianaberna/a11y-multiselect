import Multiselect from './Multiselect';

function App() {
  return (
    <div>
      <h1>Pagina di prova per select</h1>
      <h2>Select standard HTML</h2>
      <label htmlFor="selectMateria">Selezione materia scolastica:</label>
      <select id="selectMateria">
        <option>Italiano</option>
        <option>Matematica</option>
        <option>Geogragia</option>
        <option>Musica</option>
        <option>Inglese</option>
        <option>Arte</option>
      </select>

      <hr/>
      <h2>Multiselect custom</h2>
      <Multiselect/>
    </div>
  );
}

export default App;
