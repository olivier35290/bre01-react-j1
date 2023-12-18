const Recipe1 = (props) => {
const ingredients = ["Oeufs", "Lait", "Farine", "Beurre"];
const steps = [
"Faire un puits avec la farine et y verser les oeufs", 
"Battre les oeufs et la farine et y incorporer doucement le lait", 
"Faire fondre le beurre et l'ajouter au mélange"
];

return (
    <>

      <article>
        <h2>La recette de la pâte à crèpes</h2>
        <h3>Ingrédients</h3>
        <ul>
          {ingredients.map((ingredients, i) => <li key={i}>{ingredients}</li>)}
         /* <li>Oeufs</li>
          <li>Lait</li>
          <li>Farine</li>
          <li>Beurre</li>*/
        </ul>
        <h3>Étapes</h3>
        <ol>
        
          {steps.map((steps, i) => <li key={i}>{steps}</li>)}
          /*<li>Faire un puits avec la farine et y verser les oeufs</li>
          <li>Battre les oeufs et la farine et y incorporer doucement le lait</li>
          <li>Faire fondre le beurre et l'ajouter au mélange</li>*/
        </ol>
      </article>

    </>
)
}
export default Recipe1;