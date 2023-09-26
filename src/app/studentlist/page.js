import Link from "next/link";

const StudentList  =()=>
{
    return(
        <div>
            <h1>Student Lists</h1>
            <ul>
                <li>
                    <Link href='/studentlist/sumair'>Sumair</Link>
                </li>
                <li>
                    <Link href='/studentlist/umair'>Umair</Link>
                </li>
                <li>
                    <Link href='/studentlist/uzair'>Uzair</Link>
                </li>
                <li>
                    <Link href='/studentlist/hassan'>Hassan</Link>
                </li>
            </ul>
        </div>
    )
}
export default StudentList;