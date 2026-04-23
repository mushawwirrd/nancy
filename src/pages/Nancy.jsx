import { useEffect, useState } from "react"

export default function Nancy() {
    const [income, setIncome] = useState({
        mainIncome: "",
        sideIncome: "",
        passiveIncome: "",
    })
    const [spending, setSpending] = useState({
        kebutuhan: "",
        keinginan: "",
        hutang: "",
    })
    const [totalIncome, setTotIncome] = useState()
    const [totalSpending, setTotSpending] = useState()
    const [message, setMessage] = useState()

    function incomeChange(e) {
        const { name, value } = e.target

        setIncome(prev => {
            return { ...prev, [name]: Number(value) }
        })
    }

    function spendingChange(e) {
        const { name, value } = e.target

        setSpending(prev => {
            return { ...prev, [name]: Number(value) }
        })
    }

    function submitHandle(e) {
        e.preventDefault()

        if (totalIncome > totalSpending || totalIncome === totalSpending && totalIncome > 1 && totalSpending > 1) {
            setMessage("Sehat")
        } else if (totalIncome < totalSpending) {
            setMessage("Tidak sehat")
        } else {
            setMessage("Kosong")
        }
    }

    useEffect(() => {
        const totIncome = income.mainIncome + income.passiveIncome + income.sideIncome

        setTotIncome(() => totIncome)
    }, [income])


    useEffect(() => {
        const totSpending = spending.kebutuhan + spending.keinginan + spending.hutang

        setTotSpending(() => totSpending)
    }, [spending])

    return (
        <div>

            <div className="absolute z-10">
                <nav className="px-14 py-5 ">

                    <div>
                        <a href="#" className="font-semibold text-xl text-white" >NANCY</a>
                    </div>

                </nav>
            </div>

            <div
                className=" flex flex-col items-center justify-center pt-16 lg:pt-10 h-max lg:h-screen bg-cover bg-center"
                style={{ backgroundImage: "url(nncy.jpg)" }} >

                <div className="top-[4rem] text-center mb-4">
                    <h1 className="text-xl lg:text-4xl text-white font-bold w-56 lg:w-fit">Cek Kondisi Kesehatan Keuangan Anda</h1>
                </div>

                <div className=" px-10 py-6 rounded-2xl bg-white/30 backdrop-blur-lg shadow-lg h-[690px] md:h-[400px] w-[330px] lg:w-fit mb-3">
                    <form onSubmit={submitHandle}>

                        <div className="flex flex-col md:flex-row items-center justify-center gap-4">

                            <div className="flex flex-col  items-start justify-start w-full ">
                                <div className="mb-1">
                                    <p className="text-white text-lg">Pemasukan</p>
                                </div>

                                <label className="text-white text-sm block ">Pendapatan Utama</label>
                                <input
                                    type="text"
                                    name="mainIncome"
                                    value={income.mainIncome}
                                    onChange={incomeChange}
                                    className="p-2 border rounded-md mt-1 bg-transparent w-full text-white" />

                                <label className="text-white text-sm block mt-2">Pendapatan sampingan</label>
                                <input
                                    type="text"
                                    name="sideIncome"
                                    value={income.sideIncome}
                                    onChange={incomeChange}
                                    className="p-2 border rounded-md mt-1 w-full bg-transparent text-white" />

                                <label className="text-white text-sm block mt-2">Investasi</label>
                                <input
                                    type="text"
                                    name="passiveIncome"
                                    value={income.passiveIncome}
                                    onChange={incomeChange}
                                    className="p-2 border rounded-md mt-1 w-full bg-transparent text-white" />

                            </div>

                            <div className="flex flex-col items-start justify-start w-full  mt-6 md:mt-0">
                                <div className="mb-1">
                                    <p className="text-white text-lg">Pengeluaran</p>
                                </div>

                                <label className="block text-sm text-white">Kebutuhan</label>
                                <input
                                    type="text"
                                    name="kebutuhan"
                                    value={spending.kebutuhan}
                                    onChange={spendingChange}
                                    className="p-2 border rounded-md mt-1 w-full bg-transparent text-white" />

                                <label className="block mt-2 text-sm text-white">Keinginan</label>
                                <input
                                    type="text"
                                    name="keinginan"
                                    value={spending.keinginan}
                                    onChange={spendingChange}
                                    className="p-2 border rounded-md mt-1 w-full bg-transparent text-white" />


                                <label className="block mt-2 text-sm text-white">Hutang/Cicilan</label>
                                <input
                                    type="text"
                                    name="hutang"
                                    value={spending.hutang}
                                    onChange={spendingChange}
                                    className="p-2 border rounded-md mt-1 w-full bg-transparent text-white" />

                            </div>

                        </div>


                        <div className="flex items-center justify-center mt-6">
                            <button className="py-3 bg-blue-600 rounded-full w-48 text-white hover:bg-blue-700">Diagnosa</button>
                        </div>

                        <div className="flex items-center justify-center text-center mt-2">
                            {message === "Sehat" && <p className="text-green-700">Wow, kondisi keuangan kamu sehat</p>}
                            {message === "Tidak sehat" && <p className="text-red-700">Kondisi keuangan kamu belum sehat!</p>}
                            {message === "Kosong" && <p>Kamu belum input apa - apa</p>}
                        </div>

                    </form>
                </div>

            </div>



        </div>

    )
}