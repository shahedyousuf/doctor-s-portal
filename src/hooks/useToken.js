import { useState, useEffect } from 'react';

const useToken = user => {
    const [token, setToken] = useState('');

    useEffect(() => {
        console.log('User info', user);
        const email = user?.user?.email;
        const currentUser = { email: email };
        if (email) {
            fetch(`https://fierce-bastion-47234.herokuapp.com/user/${email}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('data inside useToken', data);
                    const accessToken = data.token;
                    localStorage.setItem('accessToken', accessToken);
                    setToken(accessToken);
                })
        }
    }, [user]);

    return [token, setToken];
}

export default useToken;