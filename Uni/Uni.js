var university = {
    name: "Isfahan University",
    type: "public university",
    address: {
        country: "Iran",
        City: "Isfahan"
    },
    phoneNumber: "0313600000",
    statistics: {
        facultyCount: 14,
        departmentCount: 50,
        professorCount: 650,
        studentCount: 18000,
    },
    faculties: [
        {
            name: "mathematics and statistics",
            departments: [
                {
                    name: "mathematics",
                    departmentHead: "Dr.Asadollahi",
                    professors: [
                        { 
                            name:"Dr.Azam",
                            course: "Algenra",
                            students: [
                                {
                                    name:"A",
                                    score: 9
                                }, 
                                {
                                    name:"B",
                                    score: 13
                                }, 
                                {
                                    name:"C",
                                    score: 17
                                }
                            ]
                        }, 
                        { 
                            name:"Dr.Khatami",
                            course: "Discrete mathematics",
                            students: [
                                {
                                    name:"E",
                                    score: 10
                                },
                                {
                                    name:"F",
                                    score: 14
                                },
                                {
                                    name:"G",
                                    score: 18
                                }
                            ]
                        },
                        { 
                            name:"Dr.Valizadeh",
                            course: "Logic",
                            students: [
                                {
                                    name:"H",
                                    score: 11
                                },
                                {
                                    name: "I",
                                    score: 15
                                }, 
                                {
                                    name:"J",
                                    score: 19
                                }
                            ]
                        },
                        { 
                            name:"Dr.Esmaeili",
                            course: "Differential clculus",
                            students: [
                                {
                                    name:"K",
                                    score: 12
                                },
                                {
                                    name: "L",
                                    score: 16
                                }, 
                                {
                                    name:"M",
                                    score: 20
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "Computer Science",
                    departmentHead: "Dr.Alambardar",
                    professors: [
                        { 
                            name:"Dr.Almasi",
                            course: "Algorithm",
                            students: [
                                {
                                    name:"a",
                                    score: 1
                                }, 
                                {
                                    name:"b",
                                    score: 2
                                }, 
                                {
                                    name:"c",
                                    score: 3
                                }
                            ]
                        }, 
                        { 
                            name:"Dr.Hoseini",
                            course: "Scientific Calculation",
                            students: [
                                {
                                    name:"e",
                                    score: 4
                                },
                                {
                                    name:"f",
                                    score: 5
                                },
                                {
                                    name:"g",
                                    score: 6
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}
// چاپ نمره دانشجو I:
console.log(university.faculties[0].departments[0].professors[2].students[1].score)
// چاپ درس ارائه شده توسط دکتر حسینی:
console.log(university.faculties[0].departments[1].professors[1].course)
