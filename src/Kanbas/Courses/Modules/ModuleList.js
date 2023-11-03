import { React, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { LuGripVertical, LuMoreVertical } from 'react-icons/lu';
import { AiFillCheckCircle, AiOutlinePlus, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import './index.css'
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <div>
        <div class="d-flex flex-row flex-wrap justify-content-end align-items-center">
        <button type="button" class="m-1 btn btn-light btn-outline-secondary menuButton" style={{ color:'#000000' }}>
          Collapse All
        </button>
        <button type="button" class="m-1 btn btn-light btn-outline-secondary menuButton" style={{ color:'#000000' }}>
          View Progress
        </button>
        <div class="dropdown">
          <button class="btn btn-light btn-outline-secondary dropdown-toggle menuButton" type="button" data-bs-toggle="dropdown" aria-expanded="false" style={{ color:'#000000' }}>
            <AiOutlineCheckCircle style={{ paddingRight: 5 + "px", fontSize: 20 + "px", color: "green" }}/>
            Publish All
          </button>
          <ul class="dropdown-menu">
            <li class="dropdown-item">
              Publish All
            </li>
          </ul>
        </div>
        <button type="button" class="m-1 btn btn-danger" style={{ color:'#FFFFFF' }}>
          <AiOutlinePlus style={{ paddingRight: 5 + "px", fontSize: 20 + "px", color:'#FFFFFF' }}/>
          Module
        </button>
      </div>
      <hr class="mt-2 mb-4 me-2" />
      <ul className="list-group" style={{ borderRadius:0, fontSize:16+'px' }}>
        <li className="list-group-item mb-3 d-flex">
          <div className="mb-3 flex-grow-1">
            <label for="moduleName" style={{fontWeight:500}}>Module name:</label>
            <input id="moduleName" className="d-inline form-control mb-2" value={module.name} onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))}
            />
            <label for="moduleDescription" style={{fontWeight:500}}>Module Description:</label>
            <textarea id="moduleDescription" className="d-block form-control mb-2" value={module.description}
              onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))}
            />
            {module.lessons.map(((lesson, index) => {
              return (
                <div className="mb-2">
                  <div className="d-flex flex-row">
                    <div className="w-50" >
                      <label for={"lessonName"+index} style={{fontWeight:500}}>Lesson {index+1} title:</label>
                      <input id={"lessonName"+index} className="form-control" value={lesson.title} onChange={(e) => {
                        const lessons = [...module.lessons]
                        lessons[index] = {...module.lessons[index], title: e.target.value}
                        dispatch(setModule({...module, lessons: lessons}))
                      }}
                      />
                    </div>
                    <div className="w-50 me-2 ms-2" >
                      <label for={"lessonLink"+index} style={{fontWeight:500}}>Lesson {index+1} link:</label>
                      <input id={"lessonLink"+index} className="form-control" value={lesson.link} onChange={(e) => {
                        const lessons = [...module.lessons]
                        lessons[index] = {...module.lessons[index], link: e.target.value}
                        dispatch(setModule({...module, lessons: lessons}))
                      }}
                      />
                    </div>
                    <button className="btn btn-danger ms-2 mt-2" onClick={() => dispatch(setModule({...module, lessons: [...module.lessons.filter((l, idx) => idx !== index)]}))} style={{width:180, fontSize:14+'px'}}>Remove Lesson</button>
                    <button className="btn btn-success ms-2 mt-2" style={{width:180, fontSize:14+'px'}} onClick={
                      () => {
                        const lessons = [...module.lessons]
                        lessons[index] = {...lessons[index], lessons: [...lessons[index].lessons, {title: "New sublesson", link: ""}]}
                        dispatch(setModule({...module, lessons: lessons}))
                      }
                    }>
                      Add Sublesson
                    </button>
                  </div>
                  {lesson.lessons.map((sublesson, idx) => {
                    return (
                      <div className="ms-4 mb-1">
                          <div className="d-flex flex-row align-items-end">
                            <div className="w-50" >
                              <label for={"sublessonName"+idx} style={{fontWeight:500}}>Sublesson {idx+1} title:</label>
                              <input id={"sublessonName"+idx} className="form-control" value={sublesson.title} onChange={(e) => {
                                const lessons = [...module.lessons]
                                const subLessons = [...lessons[index].lessons]
                                subLessons[idx] = {...subLessons[idx], title: e.target.value}
                                lessons[index] = {...module.lessons[index], lessons: subLessons}
                                dispatch(setModule({...module, lessons: lessons}))
                              }}
                              />
                            </div>
                            <div className="w-50 me-2 ms-2" >
                              <label for={"sublessonLink"+idx} style={{fontWeight:500}}>Sublesson {idx+1} link:</label>
                              <input id={"sublessonLink"+idx} className="form-control" value={sublesson.link} onChange={(e) => {
                                const lessons = [...module.lessons]
                                const subLessons = [...lessons[index].lessons]
                                subLessons[idx] = {...subLessons[idx], link: e.target.value}
                                lessons[index] = {...module.lessons[index], lessons: subLessons}
                                dispatch(setModule({...module, lessons: lessons}))
                              }}
                              />
                            </div>
                            <button className="btn btn-outline-danger ms-2 mt-2" onClick={
                              () => {
                                const lessons = [...module.lessons]
                                const subLessons = [...lessons[index].lessons]
                                lessons[index] = {...module.lessons[index], lessons: [...subLessons.filter((l, i) => i !== idx)]}
                                dispatch(setModule({...module, lessons: lessons}))
                              }
                            }
                            style={{width:180, height:40, fontSize:14+'px'}}
                            >
                              Remove Subesson
                            </button>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )
            }))}
            <button className="d-inline btn btn-secondary mt-2" onClick={() => dispatch(setModule({...module, lessons: [...module.lessons, {title: "New lesson", link: "", lessons: [] }]}))}>Add Lesson</button>
          </div>
          <div className="align-items-baseline col-2 ms-2">
            <button className="btn btn-primary mb-2 me-1" onClick={() => dispatch(updateModule(module))}>Update Module</button>
            <button className="btn btn-success mb-2" onClick={() => dispatch(addModule({ ...module, course: courseId }))}>Add Module</button>
            <button className="btn btn-secondary mb-2" onClick={() => dispatch(setModule({ name: "New Module 123", description: "New Description", lessons: [] }))}>Clear Form</button>
          </div>
        </li>
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item p-0 pb-5" style={{border:0}}>
              <div className="d-flex align-items-center ps-3" style={{ height:70+'px', border:"0.5px solid #CBCCCB", backgroundColor:'#D3D3D3' }}>
                <LuGripVertical style={{ fontSize:1+'em', color:'#000000', marginLeft:5+'px' }} />
                <div className="flex-grow-1">
                  <p style={{ fontWeight:600, margin:0, paddingLeft:10+'px' }}>{module.name}</p>
                  <p style={{ fontSize:12+'px', fontWeight:300, margin:0, marginTop:3, paddingLeft:10+'px' }}>{module.description}</p>
                </div>
                <button className="btn btn-warning me-2"
                  onClick={() => dispatch(setModule(module))}
                >
                  Edit
                </button>
                <button className="btn btn-danger me-2"
                  onClick={() => dispatch(deleteModule(module._id))}
                >
                  Delete
                </button>
                <div className="me-2">
                  <AiFillCheckCircle style={{ color:'green', fontSize:1+'em', marginRight:5+'px' }} />
                  <AiOutlinePlus style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }} />
                  <LuMoreVertical style={{ color:'#000000', fontSize:1+'em' }} />
                </div>
              </div>
              {module.lessons && (
                <ul className="list-group" style={{ borderRadius:0, fontSize:16+'px' }}>
                  {module.lessons.map((lesson, index) => {
                    const hasSubLessons = lesson.lessons.length > 0
                    const isLink = lesson.link !== '';
                    return (
                    <li key={index} className="list-group-item p-0" style={{ border:"0.5px solid #CBCCCB", borderTop:0, borderLeft:'5px solid green' }} >
                      <div className="d-flex align-items-center ps-3" style={{ height:50+'px' }}>
                        <LuGripVertical style={{ fontSize:1+'em', color:'#000000' }} />
                        <div className="w-100 d-flex" style={{ marginLeft: 10+'px' }}>
                          <p className="flex-grow-1" style={{ fontWeight:500, margin:0 }}>
                            {isLink && 
                              <div>
                                <BiLink style={{ fontSize:1+'em', color:'green' }} />
                                <a href={lesson.link} className='lessonLink'>
                                {lesson.title}
                                </a>
                              <FaArrowRightFromBracket style={{ fontSize:0.75+'em', color:'#D41A2D' }}/>
                              </div>
                            }
                            {!isLink && lesson.title}
                          </p>
                          <div className="me-2 align-self-center">
                            <AiFillCheckCircle style={{ color:'green', fontSize:1+'em', marginRight:5+'px' }} />
                            <LuMoreVertical style={{ color:'#000000', fontSize:1+'em' }} />
                          </div>
                        </div>
                      </div>
                      
                      {hasSubLessons && 
                        <ul className="list-group" style={{ borderRadius:0, fontSize:16+'px' }}>
                          {lesson.lessons.map((subLesson, idx) => {
                            const isLink = subLesson.link !== '';
                            return (
                              <li key={index} className="list-group-item p-0" style={{ border:0, borderTop:"0.5px solid #CBCCCB"}} >
                                <div className="d-flex align-items-center ps-3" style={{ height:50+'px' }}>
                                <LuGripVertical style={{ fontSize:1+'em', color:'#000000' }} />
                                  <p className="ps-4 flex-grow-1" style={{ fontWeight:300, margin:0 }}>
                                    {isLink && 
                                      <div>
                                        <BiLink style={{ fontSize:1+'em', color:'green' }} />
                                        <a href={subLesson.link} className='lessonLink'>
                                        {subLesson.title}
                                        </a>
                                      <FaArrowRightFromBracket style={{ fontSize:0.75+'em', color:'#D41A2D' }}/>
                                      </div>
                                    }
                                    {!isLink && subLesson.title}
                                  </p>
                                  <div className="me-2 align-self-center">
                                    <AiFillCheckCircle style={{ color:'green', fontSize:1+'em', marginRight:5+'px' }} />
                                    <LuMoreVertical style={{ color:'#000000', fontSize:1+'em' }} />
                                  </div>
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      }
                    </li>
                    )
                  })}
                </ul>
              )}
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;
