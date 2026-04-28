import StudentRow from './StudentRow';

function StudentTable({ students, updateScore }) {
    return (
        <div className='card'>
        <table>
            <thead>
                <tr>
                    <th className='nameBlock'>Name</th>
                    <th className='scoreBlock'>Score</th>
                    <th className='statusBlock'>Status</th>
                </tr>
            </thead>
            <tbody>
                {students.map((student) => (
                    <StudentRow 
                        key={student.id}
                        student={student}
                        updateScore={updateScore}
                    />
                ))}
            </tbody>
        </table>
        </div>
    );
}

export default StudentTable;