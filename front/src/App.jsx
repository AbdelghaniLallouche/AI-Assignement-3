import { useState } from "react"
function App() {
  const [ggg, setGgg] = useState([]) 

  // get data from the server
  const getSchedules = async () => {
  const response = await fetch("http://localhost:5000/API/TimeTable")
  const data = await response.json()
  setGgg(data)
  }



  const [schedule, setSchedule] = useState(false)
  const [grp, setGrp] = useState(1)

  //form of the data received from the server
  const gg = [
   { sunday : [
      {time : "10:10 - 11:40",
      subject : "RO",
      type : "Cours", 
      teacher : "Issadi"},

      {time : "11:45 - 13:15",
      subject : "Reseau",
      type : "lab",
      teacher : "Zaidi"
    },
    {
      time : "15:00 - 16:30",
      subject : "Methode Formelle",
      type : "Cours",
      teacher : "Zedek"
    }
    ]},
    { monday : [
      {time : "8:30 - 10:00",
      subject : "Dest Architecture",
      type : "Cours",
      teacher : "Djenadi"},
      {time : "10:10 - 11:40",
      subject : "AI",
      type : "Cours",
      teacher : "Lekehali"},
      {time : "13:20 - 14:50",
      subject : "Reseau",
      type : "TD",
      teacher : "Sahli"},
      {time : "15:00 - 16:30",
      subject : "Dest Architecture",
      type : "TD",
      teacher : "Djenadi"},
    ]},
     { tuesday : [
      {time : "8:30 - 10:00",
      subject : "Entrepreneurship",
      type : "Cours",
      teacher : "Kaci"},
      {time : "10:10 - 11:40",
      subject : "Analyse Numerique",
      type : "Cours",
      teacher : "Alkama"},
      {time : "11:45 - 13:15",
      subject : "AI",
      type : "TD",
      teacher : "Lekehali"},
    ]},
    {wednesday : [
      {time : "8:30 - 10:00",
      subject : "Reseau",
      type : "Cours",
      teacher : "Zenadji"},
      {time : "10:10 - 11:40",
      subject : "Methode Formelle",
      type : "TD",
      teacher : "Zedek"},
      {time : "11:45 - 13:15",
      subject : "RO",
      type : "TD",
      teacher : "Issadi"},
      {time : "15:00 - 16:30",
      subject : "AI",
      type : "lab",
      teacher : "Ladlani"},
    ]},
    {thursday : [
      {time : "8:30 - 10:00",
      subject : "Security",
      type : "Cours",
      teacher : "Djebari"},
      {time : "10:10 - 11:40",
      subject : "Analyse Numerique",
      type : "TD",
      teacher : "Alkama"},
      {time : "11:45 - 13:15",
      subject : "Security",
      type : "TD",
      teacher : "Djebari"},
    ]},
  ]
  return (
    <>
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/" className="navbar-item">1CS Schedule</a>
      </div>
      <div className="navbar-menu">
      </div>
    </nav>
    <button
    onClick={() => {
      getSchedules()
      setSchedule(true)
    }}
    className="but">
      Get Schedule !!!
    </button>

    {schedule && (
      <div>
        <div className="grps">
           {[1, 2, 3, 4, 5, 6].map((grp) => (
            <button
            onClick={() => {
              setGrp(grp)
            }}
            key={grp} className="butt">
              Group {grp}
            </button>
           ))} 
        </div>
      <div className="container">
        <table className="table">
          <thead>
            <tr className="tt">
              <th colSpan={5}>Schedule of Group {grp}</th>
            </tr>
            <tr className="tt">
              <th>Day</th>
              <th>Time</th>
              <th>Subject</th>
              <th>Type</th>
              <th>Teacher</th>
            </tr>
          </thead>
          <tbody>
            {gg.map((day) => {
              const dayName = Object.keys(day)[0]
              const lessons = day[dayName]
              return lessons.map((lesson, index) => (
                <tr key={index}>
                  {index === 0 && <td 
                  style={{
                    backgroundColor : "lightgray",
                    marginTop : "20px"
                  }}
                  rowSpan={lessons.length}>{dayName}</td>}
                  <td>{lesson.time}</td>
                  <td>{lesson.subject}</td>
                  <td>{lesson.type}</td>
                  <td>Mr/Mme {lesson.teacher}</td>
                </tr>
              )
              )
            })}
          </tbody>
        </table>
      </div>
      </div>
    )}

</>
  )
}

export default App
