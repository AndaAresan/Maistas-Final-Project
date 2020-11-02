import React from 'react';
import {Link, useParams, useHistory} from "react-router-dom";

const detailsList = [

        {
          "id": 1,
          "name": "Clasic Burger",
          "description": "Chiflă, maioneză, salată, carne de vită, cașcaval, bacon, castraveți murați, roșie, sos Barbeque - 370g",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/758383.jpg",
          "restaurantId": 1,
          "price": 22
        },
        {
          "id": 2,
          "name": "Hot or Not Burger",
          "description": "Chiflă, maioneză, salată, bacon crocant, carne de vită, ceapă, jalapenos, sos foarte picant - 360g",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/758389.jpg",
          "restaurantId": 1,
          "price": 24
        },
        {
          "id": 3,
          "name": "Be French Burger",
          "description": "Chiflă, maioneză, salată de valeriană, carne de vită, brie, nuci pecan, dulceață de ceapă - 370g",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/758386.jpg",
          "restaurantId": 1,
          "price": 23
        },
        {
          "id": 4,
          "name": "Old and Tasty Burger",
          "description": "Chiflă, maioneză, rucola, carne de vită gătită sous vide, cheddar, ciuperci, ceapă murată, sos Jack Daniel`s - 360g",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/758385",
          "restaurantId": 1,
          "price": 22
        },
        {
          "id": 5,
          "name": "Quattro Formaggi Pasta",
          "description": "La pasta ai quattro formaggi è un piatto molto conosciuto nella tradizione culinaria italiana",
          "picture": "https://web-development.s3.eu-central-1.amazonaws.com/food/pasta/4formaggi-pasta.jpg",
          "restaurantId": 2,
          "price": 25
        },
        {
          "id": 6,
          "name": "Pesto Pasta",
          "description": "Bucatini pasta coated in rich, peppery arugula pesto and topped with creamy mozzarella pearls,",
          "picture": "https://web-development.s3.eu-central-1.amazonaws.com/food/pasta/pesto.jpg",
          "restaurantId": 2,
          "price": 28
        },
        {
          "id": 7,
          "name": "Amatriciana Pasta",
          "description": "Amatriciana is a pasta sauce is made with guanciale and pecorino cheese, with white wine and tomato ",
          "picture": "https://web-development.s3.eu-central-1.amazonaws.com/food/pasta/amatriciana.jpg",
          "restaurantId": 2,
          "price": 28
        },
        {
          "id": 8,
          "name": "Salmon Pasta",
          "description": "Seared salmon in creamy dill sauce on pasta.",
          "picture": "https://web-development.s3.eu-central-1.amazonaws.com/food/pasta/salmon-pasta.jpg",
          "restaurantId": 2,
          "price": 32
        },
        {
          "id": 9,
          "name": "Pizza Tonno e Cipolla",
          "description": "Aluat cu maia, sos de roșii, mozzarella fior di latte, ceapă, ton, măsline",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/914309.jpg",
          "restaurantId": 3,
          "price": 28
        },
        {
          "id": 10,
          "name": "Pizza Ungherese",
          "description": "Aluat cu maia, sos de roșii, mozzarella fior di latte, salam ventricina, ardei gras, ceapă",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/914305.jpg",
          "restaurantId": 3,
          "price": 26
        },
        {
          "id": 11,
          "name": "Pizza Margherita D.O.P.",
          "description": "Aluat cu maia, sos de roșii, burrata, roșii cherry, busuioc proaspăt. (Poza este cu titlu de prezentare, burrata se împarte pe toată pizza)",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/914316.jpg",
          "restaurantId": 3,
          "price": 35
        },
        {
          "id": 12,
          "name": "Pizza Capriciosa",
          "description": "Aluat cu maia, sos de roșii, mozzarella fior di latte, prosciutto cotto, salam Napoli, ciuperci proaspete, anghinare, măsline",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/914319.jpg",
          "restaurantId": 3,
          "price": 30
        },
        {
          "id": 13,
          "name": "Salată Green Box",
          "description": "Salată verde, măr, țelină, morcov, porumb, ananas, brânză Feta, pui grill, dressing - 440g",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/278437.jpg",
          "restaurantId": 4,
          "price": 22
        },
        {
          "id": 14,
          "name": "Salată Caesar",
          "description": "Salată verde, castravete verde, mozzarella, ou, pui grill, crutoane, dressing - 420g",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/278441.jpg",
          "restaurantId": 4,
          "price": 23
        },
        {
          "id": 15,
          "name": "Salată Most Wanted",
          "description": "Salată verde, castravete verde, roșii, porumb, brânză sărată, pui grill, dressing - 400g",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/278445.jpg",
          "restaurantId": 4,
          "price": 24
        },
        {
          "id": 16,
          "name": "Salată Tuna",
          "description": "Salată verde, morcov, ceapă roșie, măsline negre, porumb, lămâie, ton, dressing - 420g",
          "picture": "https://images.deliveryhero.io/image/fd-ro/Products/278444.jpg",
          "restaurantId": 4,
          "price": 22
        }

];

export const Details = () => {
    const {id} = useParams();
    const history = useHistory();

    const handleClick= () => {
        history.push('/');
    }

    return (
        <div>
            <button type="button" onClick={handleClick}>Go Home</button>
            
            <h2>Restaurant {id} </h2>
            <ul>
                {detailsList.map(details => (
                    <li key={details.id}>
                        <Link to={`/details/${details.id}`}>Details {details.id}</Link>
                    </li>
                ))}
                
                <li>
                    <Link to="/details/3">Restaurant 3</Link>
                </li>
                <li>
                    <Link to="/details/4">Restaurant 4</Link>
                </li>
            </ul>
        </div>
    );}