import img1 from "../src/images/p1.jpg";
import img2 from "../src/images/p2.jpg";
import img3 from "../src/images/p3.jpg";
import img4 from "../src/images/naas.png";
import img5 from "../src/images/3.jpg";
import img6 from "../src/images/4.jpg";
import img7 from "../src/images/2.jpg";
import img8 from "../src/images/1.jpg";
import f1 from "../src/images/empathy.jpg";
import f2 from "../src/images/security.jpg";
import f3 from "../src/images/lap.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlane,
  faBuildingColumns,
  faHeart,
  faUmbrella,
  faCartShopping,
  faLink,
  faSatelliteDish,
  faHeadset,
  faDollarSign,
  faScrewdriverWrench,
  faUser,
  faChartPie,
  faUserTie,
  faGear,
  faComments,
  faSackDollar,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
export const products = [
  {
    id: 1,
    img: img1,
    h1: "Assist",
    p: "A virtual workforce that complements human staff, improves productivity, enhances customer satisfaction and boosts employee morale.",
  },
  {
    id: 2,
    img: img2,
    h1: "Listen",
    p: "A Social Listening product to protect your reputation, strengthen the brand image and detect new sales opportunities.",
  },
  {
    id: 3,
    img: img3,
    h1: "Connect",
    p: "A Low-code / No-Code API Management framework to find, share, test, manage and connect APIs seamlessly and securely.",
  },
  {
    id: 4,
    img: img4,
    h1: "Discovery",
    p: "An Enterprise Semantic Search engine that surfaces answers and insights from your Business Documents and Data.",
  },
  {
    id: 5,
    img: img5,
    h1: "NAAS",
    p: "A suite of APIs to build practical AI solutions, turn your Organization into AI powerhouse and scale at speed.",
  },
  {
    id: 6,
    img: img6,
    h1: "Chat",
    p: "An omnichannel, live-chat platform that works in harmony with your existing apps and helps you engage with customers in real-time.",
  },
];

export const features = [
  {
    id: 1,
    img: f2,
    head: "Surety about Security",
    p: "Robust SAAS infrastructure with five layers of cloud security or on-premise hosting of Intelligent Virtual Assistant focused on privacy, stability, and flexibility.",
  },
  {
    id: 2,
    img: f1,
    head: "Empathetic and Human-centred",
    p: "Tracks customer emotion and sentiments for prompt automated customer service that helps deliver relevant, connected, and adaptable experiences.",
  },
  {
    id: 3,
    img: img8,
    head: "Trustworthy and Progressive",
    p: "Accurate data capture and Human-driven design with a digital dashboard consisting of real-time reports and monitoring capability.",
  },
  {
    id: 4,
    img: img1,
    head: "Readily Interoperable",
    p: "Embark on the road to AI-powered services with APIs that can be integrated quickly and efficiently along with a user-friendly interface.",
  },
];

export const industries = [
  {
    id: 1,
    img: (
      <FontAwesomeIcon
        icon={faPlane}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Airlines",
  },
  {
    id: 2,
    img: (
      <FontAwesomeIcon
        icon={faBuildingColumns}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Banking",
  },
  {
    id: 3,
    img: (
      <FontAwesomeIcon
        icon={faHeart}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Healthcare",
  },
  {
    id: 4,
    img: (
      <FontAwesomeIcon
        icon={faUmbrella}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Insurance",
  },
  {
    id: 5,
    img: (
      <FontAwesomeIcon
        icon={faCartShopping}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Retail",
  },
  {
    id: 6,
    img: (
      <FontAwesomeIcon
        icon={faLink}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Supply chain",
  },
  {
    id: 7,
    img: (
      <FontAwesomeIcon
        icon={faSatelliteDish}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Telecom",
  },
];
export const industries2 = [
  {
    id: 1,
    img: (
      <FontAwesomeIcon
        icon={faHeadset}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Support",
  },
  {
    id: 2,
    img: (
      <FontAwesomeIcon
        icon={faDollarSign}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Sales",
  },
  {
    id: 3,
    img: (
      <FontAwesomeIcon
        icon={faScrewdriverWrench}
        style={{ color: "#006dee" }}
        className="text-6xl"
      />
    ),
    p: "IT Help",
  },
  {
    id: 4,
    img: (
      <FontAwesomeIcon
        icon={faUser}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "HR",
  },
  {
    id: 5,
    img: (
      <FontAwesomeIcon
        icon={faChartPie}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Finance",
  },
  {
    id: 6,
    img: (
      <FontAwesomeIcon
        icon={faUserTie}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Marketing",
  },
  {
    id: 7,
    img: (
      <FontAwesomeIcon
        icon={faGear}
        className="text-6xl"
        style={{ color: "#006dee" }}
      />
    ),
    p: "Operation",
  },
];
export const kpi1 = [
  { id: 1, num: "90%", p: "Customer Conversations" },
  { id: 2, num: "76%", p: "Customer Satisfaction" },
  { id: 3, num: "84%", p: "Average Order Value" },
  { id: 4, num: "76%", p: "Employee productivity" },
  { id: 5, num: "28%", p: "Customer Care Costs" },
];
export const Rethink1 = [
  {
    id: 1,
    img: (
      <FontAwesomeIcon
        className="mt-[8px]"
        icon={faComments}
        style={{ color: "white" }}
      />
    ),
    h1: "CogniAssist for Customer Service",
    p: "Check how Cogniassist offers instant and pertinent customer recommendations and routes conversations to humans when required.",
  },
  {
    id: 2,
    img: (
      <FontAwesomeIcon
        className="mt-[8px]"
        icon={faSackDollar}
        style={{ color: "white" }}
      />
    ),
    h1: "CogniAssist for Customer Service",
    p: "Check how Cogniassist offers instant and pertinent customer recommendations and routes conversations to humans when required.",
  },
  {
    id: 3,
    img: (
      <FontAwesomeIcon
        className="mt-[8px]"
        icon={faPeopleGroup}
        style={{ color: "white" }}
      />
    ),
    h1: "CogniAssist for Customer Service",
    p: "Check how Cogniassist offers instant and pertinent customer recommendations and routes conversations to humans when required.",
  },
];
