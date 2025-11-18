import { useEffect, useState } from "react"

function Nancy() {
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
        <div className="">

            <div className="absolute z-10">
                <nav className="px-14 py-5 ">

                    <div clas>
                        <a href="#" className="font-semibold text-xl text-white" >NANCY</a>
                    </div>

                </nav>
            </div>


            <div>
                <div className="flex flex-col items-center justify-center pt-14 bg-blue-500 ">

                    <div className="top-[4rem] text-center mb-8">
                        <h1 className="text-3xl md:text-4xl text-white font-bold w-60 md:w-fit">Cek Kondisi Kesehatan Keuangan Anda</h1>
                    </div>

                    <div className=" top-[148px] px-12 py-10 rounded-3xl bg-white shadow-lg h-[730px] md:h-[456px]">
                        <form action="" onSubmit={submitHandle}>

                            <div className=" flex flex-col md:flex-row items-center justify-center">

                                <div className="pr-0 md:pr-6">
                                    <div className="mb-3">
                                        <p>Pendapatan</p>
                                    </div>

                                    <label className="block text-gray-500">Pendapatan utama</label>
                                    <input
                                        type="text"
                                        name="mainIncome"
                                        value={income.mainIncome}
                                        onChange={incomeChange}
                                        className="border p-2 rounded-md mt-1" />

                                    <label className="block mt-3 text-gray-500">Pendapatan sampingan</label>
                                    <input
                                        type="text"
                                        name="sideIncome"
                                        value={income.sideIncome}
                                        onChange={incomeChange}
                                        className="border p-2 rounded-md mt-1" />

                                    <label className="block mt-3 text-gray-500">Investasi</label>
                                    <input
                                        type="text"
                                        name="passiveIncome"
                                        value={income.passiveIncome}
                                        onChange={incomeChange}
                                        className="border p-2 rounded-md mt-1" />
                                </div>

                                <div className="pl-0 md:pl-6 mt-6 md:mt-0">
                                    <div className="mb-3">
                                        <p>Pengeluaran</p>
                                    </div>

                                    <label className="block text-gray-500">Kebutuhan</label>
                                    <input
                                        type="text"
                                        name="kebutuhan"
                                        value={spending.kebutuhan}
                                        onChange={spendingChange}
                                        className="p-2 border rounded-md mt-1" />

                                    <label className="block mt-3 text-gray-500">Keinginan</label>
                                    <input
                                        type="text"
                                        name="keinginan"
                                        value={spending.keinginan}
                                        onChange={spendingChange}
                                        className="p-2 border rounded-md mt-1" />


                                    <label className="block mt-3 text-gray-500">Hutang/Cicilan</label>
                                    <input
                                        type="text"
                                        name="hutang"
                                        value={spending.hutang}
                                        onChange={spendingChange}
                                        className="p-2 border rounded-md mt-1" />

                                </div>

                            </div>

                            <div className="flex flex-col items-center justify-center mt-7">

                                <div >
                                    <button className="py-3 bg-blue-500 rounded-full w-48 text-white">Diagnosa</button>
                                </div>

                                <div className="mt-3">
                                    {message === "Sehat" && <p>Wow, kondisi keuangan kamu sehat</p>}
                                    {message === "Tidak sehat" && <p>Kondisi keuangan kamu belum sehat!</p>}
                                    {message === "Kosong" && <p>Kamu belum input apa - apa</p>}
                                </div>

                            </div>


                        </form>
                    </div>



                </div>
            </div>
        </div>

    )
}

export default Nancy