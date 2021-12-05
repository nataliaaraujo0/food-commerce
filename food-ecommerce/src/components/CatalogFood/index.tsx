import { CardFood } from '../CardFood'
import styles from '../CatalogFood/styles.module.scss'

interface IFood {
    imgUrl: string;
    title: string;
}

const foods: Array<IFood> = [
    {
        imgUrl: './images/comida_1.svg',
        title: 'Broccoli Salad with Bacon',

    },
    {
        imgUrl: './images/comida_2.svg',
        title: 'Classic Beef Burgers',

    },
    {
        imgUrl: './images/comida_3.svg',
        title: 'Classic Potato Salad',

    },
    {
        imgUrl: './images/comida_4.svg',
        title: 'Cherry Cobbler on the Grill',

    },

]


export function CatalogFood() {
    return (
        <>
            <div className={styles.ContentContainer}>
                <h1>Our Best Recipes</h1>
                <p>Far far away, behind the word mountains,
                    far from the countries Vokalia and Consonantia,
                    there live the blind texts.</p>

                <div className={styles.cardFoods}>
                    {foods.map(food => (<CardFood imgUrl={food.imgUrl} title={food.title} />))}

                </div>


            </div>
        </>

    )
}