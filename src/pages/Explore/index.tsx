import Card from "../../components/Card";
import DefaultLayout from "../../layouts/DefaultLayout";


const cards = [
    'red',
    'blue',
    'green',
]
function Explore() {
    return (<DefaultLayout>
            {cards.map((card, index) =><Card key={index} color={card} />)}


    </DefaultLayout>  );
}

export default Explore;