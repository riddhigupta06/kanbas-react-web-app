import React from "react";
import { useParams } from "react-router-dom";
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { LuGripVertical, LuMoreVertical } from 'react-icons/lu';
import { AiFillCheckCircle, AiOutlinePlus, AiOutlineCheckCircle } from 'react-icons/ai';
import { BiLink } from 'react-icons/bi';
import db from "../../Database";
import './index.css'

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;
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
        {modules
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item p-0 pb-5" style={{border:0}}>
              <div className="d-flex align-items-center ps-3" style={{ height:50+'px', border:"0.5px solid #CBCCCB", backgroundColor:'#D3D3D3' }}>
                <LuGripVertical style={{ fontSize:1+'em', color:'#000000', marginLeft:5+'px' }} />
                <p className="flex-grow-1" style={{ fontWeight:600, margin:0, paddingLeft:5+'px' }}>{module.name}</p>
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
