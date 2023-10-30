import { Link, useLocation } from "react-router-dom";
import { BiSolidUserCircle, BiTimeFive, BiHelpCircle } from "react-icons/bi";
import { PiGaugeFill } from "react-icons/pi";
import { FaBook } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { BsFillInboxFill, BsDisplayFill, BsFillCalendarFill } from "react-icons/bs";

function KanbasNavigation() {
  const Account = {
    title: "Account",
    icon: (styling) => {
      return <BiSolidUserCircle style={{ ...styling, color: "#ABAAAA" }} />;
    },
  };
  const Dashboard = {
    title: "Dashboard",
    icon: (styling) => {
      return <PiGaugeFill style={{ ...styling }} />;
    },
  };
  const Courses = {
    title: "Courses",
    icon: (styling) => {
      return <FaBook style={{ ...styling }} />;
    },
  };
  const Calendar = {
    title: "Calendar",
    icon: (styling) => {
      return <BsFillCalendarFill style={{ ...styling }} />;
    },
  };
  const Inbox = {
    title: "Inbox",
    icon: (styling) => {
      return <BsFillInboxFill style={{ ...styling }} />;
    }
  }
  const History = {
    title: "History",
    icon: (styling) => {
      return <BiTimeFive style={{ ...styling }} />;
    }
  }
  const Studio = {
    title: "Studio",
    icon: (styling) => {
      return <BsDisplayFill style={{ ...styling }} />;
    }
  }
  const Commons = {
    title: "Commons",
    icon: (styling) => {
      return <FaArrowRightFromBracket style={{ ...styling }} />;
    }
  }
  const Help = {
    title: "Help",
    icon: (styling) => {
      return <BiHelpCircle style={{ ...styling }} />;
    }
  }

  const links = [Account, Dashboard, Courses, Calendar, Inbox, History, Studio, Commons, Help];

  const { pathname } = useLocation();

  return (
    <div
      className="list-group m-0 p-0"
      style={{
        width: 90,
        backgroundColor: "#000000",
        minHeight: 100 + "%",
        borderRadius: 0,
      }}
    >
      <Link
        key={0}
        to={"/Kanbas/Dashboard"}
        className={"list-group-item m-0 mb-2 p-2 border-0"}
        style={{
          display: "block",
          overflow: "hidden",
          height: 75 + "px",
          backgroundImage: `url(${"/northeasternLogo.png"})`,
          backgroundColor: "#000000",
          backgroundPosition: 50 + "%",
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
        }}
      ></Link>
      {links.map((item, index) => {
        const bgColor = pathname.includes(item.title) ? "#FFFFFF" : "#000000";
        const textColor = pathname.includes(item.title) ? "#D41A2D" : "#FFFFFF";
        return (
          <Link
            key={index + 1}
            to={`/Kanbas/${item.title}`}
            className={`list-group-item m-0 p-2 border-0`}
            style={{ backgroundColor: bgColor, textAlign: "center" }}
          >
            {item.icon({
              color: "#D41A2D",
              fontSize: 2 + "em",
              backgroundColor: bgColor,
            })}
            <p className="mb-2" style={{ fontSize:12+'px', color: textColor, fontWeight: 500 }}>
              {item.title}
            </p>
          </Link>
        );
      })}
    </div>
  );
}
export default KanbasNavigation;
