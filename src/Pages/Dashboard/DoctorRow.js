import React from 'react';

const DoctorRow = ({ doctor, index, refetch, setDeleteDoctor }) => {
    const { name, specialty, img, email } = doctor;

    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-8 rounded">
                    <img src="https://api.lorem.space/image/face?hash=80245" alt="Tailwind-CSS-Avatar-component" />
                </div>
            </div></td>
            <td>{name}</td>
            <td>{specialty}</td>
            <td>
                <label onClick={() => setDeleteDoctor(doctor)} for="delete-confirm-modal" class="btn btn-xs"><span className='px-2'>Remove User</span><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg></label>
            </td>
        </tr>
    );
};

export default DoctorRow;