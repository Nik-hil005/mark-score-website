function StudentRow({ student, updateScore }) {
    const isPass = student.score >= 40;

    return (
        <tr>
            <td className='nameBlock'>{student.name}</td>
            <td className='scoreBlock'>
                <input
                    type= "number" value={student.score} onChange={(e) => updateScore(student.id, e.target.value)}
                />
            </td>
            <td className='statusBlock'>
                <span className={isPass ? "pass" : "fail"}>
                    {isPass ? "Pass" : "Fail"}
                </span>
            </td>
        </tr>
    );
}

export default StudentRow;