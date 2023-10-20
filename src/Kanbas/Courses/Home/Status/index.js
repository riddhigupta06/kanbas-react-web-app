import { AiFillCheckCircle, AiOutlineBell } from 'react-icons/ai' ;
import { BsBoxArrowInRight, BsBarChartLineFill, BsFillMegaphoneFill } from 'react-icons/bs';
import { CiGps } from 'react-icons/ci';

function Status() {

    const buttons = [
        {
            title:'Import Existing Content',
            icon:<BsBoxArrowInRight style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }}/>
        },
        {
            title:'Import From Commons',
            icon:<BsBoxArrowInRight style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }}/>
        },
        {
            title:'Choose Home Page',
            icon:<CiGps style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }}/>
        },
        {
            title:'View Course Stream',
            icon:<BsBarChartLineFill style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }}/>
        },
        {
            title:'New Announcement',
            icon:<BsFillMegaphoneFill style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }}/>
        },
        {
            title:'New Analytics',
            icon:<BsBarChartLineFill style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }}/>
        },
        {
            title:'View Notifications',
            icon:<AiOutlineBell style={{ color:'#000000', fontSize:1+'em', marginRight:5+'px' }}/>
        }
    ]

    return (
        <div class="col">
          <p class="lead">Course Status</p>
          <div class="btn-group" role="group" aria-label="Basic example">
            <button
              type="button"
              class="btn btn-light btn-outline-secondary"
              style={{ fontSize:14+'px', color:'#000000' }}
            >
              Unpublish
            </button>
            <button type="button" class="btn btn-success" style={{fontSize:14+'px'}} disabled>
                <AiFillCheckCircle style={{ fontSize:1+'em', color:'#FFFFFF', paddingRight:5+'px' }} />
                Published
            </button>
          </div>

          <div class="d-flex flex-column mt-3">
            {buttons.map((btn, index) => {
                return (
                    <button
                    type="button"
                    class="btn btn-light btn-outline-secondary mt-1"
                    style={{fontSize:14+'px', textAlign:'left', textDecoration:'none', color:'#000000' }}
                    >
                    {btn.icon}
                    {btn.title}
                    </button>
                )
            })}

            <div class="mt-4">
              <p class="lead">To Do</p>
              <hr />
              <p>Nothing for now</p>
            </div>

            <div class="mt-4">
              <p class="lead">Coming Up</p>
              <hr />
              <p>Nothing for now</p>
            </div>
          </div>
      </div>
    )

}

export default Status;