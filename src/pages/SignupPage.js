import { useState } from 'react'
import AlertMessage from '../components/AlertMessage'
import { Button, Form } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SignupPage = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')

    function handleUsernameChange (event) {
        setError('')
        setMessage('')
        setUsername(event.target.value)
    }

    function handlePasswordChange (event) {
        setError('')
        setMessage('')
        setPassword(event.target.value)
    }

    function handleConfirmPasswordChange (event) {
        setError('')
        setMessage('')
        setConfirmPassword(event.target.value)
    }

    function handleEmailChange (event) {
        setError('')
        setMessage('')
        setEmail(event.target.value)
    }
    
    function handleSubmit (event) {
        event.preventDefault()
        if (
            username === '' ||
            password === '' ||
            confirmPassword === '' ||
            email === ''
        ) {
            setError('All fields are required')
            return 
        }
        const localCredentials = localStorage.getItem('credentials')
        const credentials = localCredentials ? JSON.parse(localCredentials) : {}
        if (username in credentials) {
            setError('Username is not available')
            return
        }
        const passwordsMatch = password === confirmPassword
        if (!passwordsMatch) {
            setError('Passwords do not match')
            return
        }
        setError('')
        setMessage('Registration successful')
        const localUsers = localStorage.getItem('users')
        const users = localUsers ? JSON.parse(localUsers) : []
        const newUser = {
            username,
            password,
            email,
            isAdmin: false
        }
        users.push(newUser)
        const newUsers = JSON.stringify(users)
        localStorage.setItem('users', newUsers)
        credentials[username] = password
        const newCredentials = JSON.stringify(credentials)
        localStorage.setItem('credentials', newCredentials)
    }

    return (
        <>
            {error && <AlertMessage variant="danger" message={error} />}
            {message && <AlertMessage variant="success" message={message} />}
            <Form>
                <Form.Group>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type='text'
                        placeholder='Username'
                        value={username}
                        onChange={handleUsernameChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='email'
                        value={email}
                        onChange={handleEmailChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm Password'
                        value={confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                </Form.Group>
                <Button
                    type='submit'
                    onClick={handleSubmit}
                >
                    Signup
                </Button>
            </Form>
            <Link to='/login'>Login</Link>
        </>
    )
}

export default SignupPage;
