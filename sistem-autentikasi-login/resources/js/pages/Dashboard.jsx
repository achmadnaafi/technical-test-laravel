import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Dashboard() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            navigate('/login');
            return;
        }

        const fetchProfile = async () => {
            try {
                const response = await axios.get('/api/auth/profile', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        Accept: 'application/json'
                    }
                });
                setUser(response.data.data);
            } catch (error) {
                console.error("Gagal mengambil data profil", error);
                localStorage.removeItem('token');
                navigate('/login');
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate, token]);

    const handleLogout = async () => {
        try {
            await axios.post('/api/auth/logout', {}, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: 'application/json'
                }
            });
        } catch (error) {
            console.error("Gagal logout", error);
        } finally {
            localStorage.removeItem('token');
            navigate('/login');
        }
    };

    if (loading) {
        return (
            <div className="min-h-screen bg-slate-50 flex items-center justify-center">
                <div className="text-slate-500 font-medium">Memuat sistem...</div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-slate-50">
            {/* Top Navigation Bar */}
            <nav className="bg-white border-b border-slate-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center shadow-sm mr-3">
                                <span className="text-white font-bold">A</span>
                            </div>
                            <span className="text-xl font-bold text-slate-800 tracking-tight">AppTes</span>
                        </div>
                        <div className="flex items-center gap-6">
                            <div className="hidden sm:flex flex-col items-end">
                                <span className="text-sm font-semibold text-slate-700">{user?.name}</span>
                                <span className="text-xs text-slate-500">{user?.email}</span>
                            </div>
                            <button 
                                onClick={handleLogout}
                                className="text-sm font-medium text-slate-600 hover:text-red-600 px-3 py-2 rounded-md hover:bg-red-50 transition cursor-pointer"
                            >
                                Keluar
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="mb-8">
                    <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
                    <p className="mt-1 text-sm text-slate-500">
                        Selamat datang kembali, berikut adalah ringkasan akun Anda.
                    </p>
                </div>

                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-sm font-medium text-slate-500 mb-1">Terakhir Login</h3>
                        <p className="text-2xl font-bold text-slate-800">Hari ini</p>
                    </div>

                    <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                        <h3 className="text-sm font-medium text-slate-500 mb-1">Tipe Akun</h3>
                        <p className="text-2xl font-bold text-slate-800">Administrator</p>
                    </div>
                </div>
            </main>
        </div>
    );
}