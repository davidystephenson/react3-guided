import products from '../products'
import { useParams, Navigate } from 'react-router';
import { Form, Image, Button } from 'react-bootstrap';
import { useState } from 'react'

const ProductPage = () => {
    const [quantity, setQuantity] = useState('0')
    const params = useParams()
    console.log('params', params)
    const product = products.find(product => product.id === Number(params.id))

    const localCategories = localStorage.getItem('categories')
    const categories = JSON.parse(localCategories)
    const category = categories.find(category => category.id === product.category)

    const available = product.quantity > 0
    const statusView = available ? 'Available' : 'Out of stock'

    const localLoggedInUser = localStorage.getItem('loggedInUser')
    const loggedInUser = JSON.parse(localLoggedInUser)
    console.log('loggedInUser', loggedInUser)
    if (!loggedInUser) {
        console.log('Redirecting back to home page...')
        return (
            <Navigate to='/' />
        )
    }
    function handleChange (event) {
        setQuantity(event.target.value)
    }
    const options = []
    for (let quantity = 1; quantity <= product.quantity; quantity++) {
        const optionView = (
            <option key={quantity} value={quantity}>
                {quantity}
            </option>
        )
        options.push(optionView)
    }
    const buyView = loggedInUser && available && (
        <Form>
            <Form.Group>
                <Form.Label>Quantity</Form.Label>
                <Form.Control
                    as='select'
                    value={quantity}
                    onChange={handleChange}
                >
                    {options}
                </Form.Control>
            </Form.Group>
            <Button>Add to Cart</Button>
        </Form>
    )
    return (
        <>
            <Image src={product.image} width={300} height={300} />
            <h3>{product.name}</h3>
            <h4>{product.description}</h4>
            <h4>{category.name}</h4>
            <h4>Price: ${product.price}</h4>
            <h4>Status: {statusView}</h4>
            {buyView}
        </>
    )
};

export default ProductPage;
