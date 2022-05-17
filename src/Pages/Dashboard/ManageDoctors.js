import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import DoctorRow from '../Dashboard/DoctorRow';
import DeleteConfirmModal from '../Dashboard/DeleteConfirmModal';

const ManageDoctors = () => {
    const [deletingDoctors, setDeletingDoctors] = useState(null);

    const { data: doctors, isLoading, refetch } = useQuery('doctors', () => fetch('http://localhost:5000/doctor', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className="text-xl">Manage doctors: {doctors.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, index) => <DoctorRow
                                key={doctor?._key}
                                doctor={doctor}
                                index={index}
                                refetch={refetch}
                                setDeletingDoctors={setDeletingDoctors}
                            ></DoctorRow>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingDoctors && <DeleteConfirmModal
                    deletingDoctors={deletingDoctors}
                    refetch={refetch}
                    setDeletingDoctors={setDeletingDoctors}
                ></DeleteConfirmModal>
            }
        </div>
    );
};

export default ManageDoctors; 