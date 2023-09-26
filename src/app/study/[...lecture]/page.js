'use client'

const Lecture = ({ params }) => {
    console.log(params)
    return (
        <div>

            <h1>
                Lecture Details
            </h1 >
            <h3>Day : {params.lecture[0]}</h3 >
            <h3>Lecture : {params.lecture[1]}</h3 >

        </div>

    )
}
export default Lecture;