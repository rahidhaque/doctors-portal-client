import React from 'react';

const UsersRow = ({ user, refetch }) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    alert('You are forbidden to make someone an admin');
                }
                return res.json();
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    alert('Admin Added Successfully');
                }
            })
    }
    return (

        <tr>
            <td>{email}</td>
            <td>{role === 'admin' ? <button class="btn" disabled="disabled">Already Admin</button> : <button className="btn btn-xs" onClick={makeAdmin}><span className='px-2'>Make Admin</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg></button>}</td>
            <td><button className="btn btn-xs"><span className='px-2'>Remove User</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></button></td>
        </tr >

    );
};

export default UsersRow;