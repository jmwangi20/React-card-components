function Students(props){
    return(
        <div className = "Student">
            <p>Name : {props.name}</p>
            <p>Age : {props.Age}</p>
            <p>Student : {props.isStudent ? "Yes,I am a student" : "I am working class"}</p>
        </div>
    )
}

export default Students