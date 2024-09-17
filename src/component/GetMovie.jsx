import React, { useEffect, useState } from 'react'

export default function GetMovie() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    useEffect(() => {
        // ดึงข้อมูลจาก API
        fetch('https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((data) => {
                setData(data);  // เก็บข้อมูลใน state
                setLoading(false);

            })
            .catch((error) => {
                setError(error);
                setLoading(false);
                console.error('There was a problem with your fetch operation:', error);

            });
    }, []); // [] ทำให้ useEffect รันแค่ครั้งเดียวตอน component โหลด


    if (error) {
        return <p>Error: {error.message}</p>;
    }

    if (loading) {
        return <p>โหลด...</p>;
    }

    return (
        <>
            {/* Navbar */}
            <div className="navbar bg-base-200 mb-6 rounded-b-lg">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">Jay Movie</a>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text"
                            placeholder="ค้นหา"
                            onChange=""
                            className="input input-bordered w-24 md:w-auto"
                        />
                    </div>

                </div>
            </div>
            {/* Navbar */}

            {/* แสดงข้อมูล */}
            <div className='grid grid-cols-3 gap-5 card bg-base-200 px-60 py-5 justify-item-center'>
                <div class="col-span-3 font-bold text-xl ">รายการหนัง</div>
                {
                    data.map((data) => (
                        <div className="card card-compact bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={data.Images[0]}
                                    alt={data.Title}
                                    width={500}
                                    className="rounded-t-lg object-cover"
                                />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">{data.Title} <div className="badge badge-success gap-2">New</div> </h2>
                                
                                <p>{data.Plot}</p>
                                <div className="card-actions justify-end">
                                    <button className="btn btn-primary btn-sm">ดูหนัง</button>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
        </>
    );
};

