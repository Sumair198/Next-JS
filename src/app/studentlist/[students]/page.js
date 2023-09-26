'use client'

const Students  =({params})=>
{
    return(
        <div>
            <h1>Student Details</h1>
            <h3>Name : {params.students}</h3>
        </div>
    )
}
export default Students;