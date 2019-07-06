import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpResponse, HttpHeaders} from '@angular/common/http';

import {Observable} from 'rxjs';
import {User} from "../model/user";


@Injectable({
    providedIn: 'root'
})
export class MainService {
    open: EventEmitter<any> = new EventEmitter();
    readonly URL_API = 'http://localhost:3000/api/';
    professor: { id: number, name: string, description: string, image: string };
    public departments:
        {
            id: number,
            name: string,
            description: string,
            subdepartments:
                {
                    id: number, name: string, description: string,
                    professors: { id: number, name: string, description: string, image: string }[]
                }[]
        }[] = [
        {
            id: 1, name: 'Enginreeng', description: 'Enginreeng Enginreeng',
            subdepartments: [{
                id: 1,
                name: 'Computer Sience',
                description: 'Computer Sience',
                professors: [
                    {
                        id: 1,
                        name: 'mester jamal',
                        description: 'phd of computrer',
                        image: '../../assets/img/index12.png'
                    },
                    {
                        id: 2,
                        name: 'mester kamal',
                        description: 'phd of computrer',
                        image: '../../assets/images/index12.png'
                    },
                    {
                        id: 3,
                        name: 'mester hamed',
                        description: 'phd of computrer',
                        image: '../../assets/images/index12.png'
                    }]
            }, {
                id: 2,
                name: 'Power Sience',
                description: 'Power Sience',
                professors: [
                    {
                        id: 4,
                        name: 'mester jons',
                        description: 'phd of computrer',
                        image: '../../assets/images/index12.png'
                    },
                    {id: 5, name: 'mester wiliam', description: 'phd of VR', image: '../../assets/images/index12.png'},
                    {
                        id: 6,
                        name: 'mester herbert',
                        description: 'phd of art inteligent',
                        image: '../../assets/images/index12.png'
                    },
                    {
                        id: 7,
                        name: 'mester khar',
                        description: 'phd of programing in C++',
                        image: '../../assets/images/index12.png'
                    }]
            }]
        },
        {
            id: 2,
            name: 'Art', description: 'Art Art Art',
            subdepartments: [{
                id: 3,
                name: 'Paint',
                description: 'paint paint',
                professors: [
                    {
                        id: 8,
                        name: 'mester koman',
                        description: 'master in paint 1',
                        image: '../../assets/images/index12.png'
                    },
                    {
                        id: 9,
                        name: 'mester hazard',
                        description: 'master in paint 1',
                        image: '../../assets/images/index12.png'
                    },
                    {
                        id: 10,
                        name: 'mester ronaldo',
                        description: 'master in paint 2',
                        image: '../../assets/images/index12.png'
                    },
                    {
                        id: 11,
                        name: 'mester messi',
                        description: 'joniur in paint 1',
                        image: '../../assets/images/index12.png'
                    },
                    {
                        id: 12,
                        name: 'mester nani',
                        description: 'middle in ABrang',
                        image: '../../assets/images/index12.png'
                    },
                    {
                        id: 13,
                        name: 'mester zare',
                        description: 'phd of tamam',
                        image: '../../assets/images/index12.png'
                    }]
            }, {
                id: 4,
                name: 'Music',
                description: 'Music Music',
                professors: [
                    {
                        id: 14,
                        name: 'mester misha',
                        description: 'Rock Musisian',
                        image: '../../assets/images/index12.png'
                    },
                    {
                        id: 15,
                        name: 'mester kolom',
                        description: 'Opera singer',
                        image: '../../assets/images/index12.png'
                    }]
            }]
        },
    ];

    constructor(private http: HttpClient) {
    }

    register(user: User) {
        return this.http.post(this.URL_API+'register',user,{headers:{"content-type":"application/json"}});
    }
    login(user: User, callback){
        return this.http.post(this.URL_API+'authenticate', user,
        {headers:{"content-type":"application/json"}}).subscribe(
            (data) => {this.setToken(data); callback(null,data)},  //changed
               (err)=>{console.log(err); callback(err,null);},
               ()=>console.log("Done")
        );
    }
    logout(){        
        localStorage.removeItem('token');
        localStorage.removeItem('userType');
    }

    setToken(user)
    {
        localStorage.setItem('token', user.token);
        localStorage.setItem('userType', user.userType);
    }

    
    getToken()
    {
        return localStorage.getItem('token');
    }

    isLogin()
    {
        return localStorage.getItem('token')!= undefined;
    }

    getUserType()
    {
        return !localStorage.getItem('userType');
    }

    getProfessor(id): { id: number, name: string, description: string, image: string } {
        this.departments.forEach(value => {
            value.subdepartments.forEach(value1 => {
                value1.professors.forEach(value2 => {
                    if (value2.id === id) {
                        this.professor = value2;
                    }
                });
            });
        });
        return this.professor;
    }
}
