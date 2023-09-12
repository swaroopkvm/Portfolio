import VDEM from '../Assets/VDEM.png'
import Elibrary from '../Assets/Elibrary.png'
import VLTD from '../Assets/VLTD.png'

const projectCardData = [
    {
        ID:1,
        imgsrc: VDEM,
        title: "VDEM WEB APPLICTION",
        text: "Vehicle defect Entry management application trackes the vehicle Inspection details from end to end and provides data and reports for faster and accurate information.",
        view: "/VDEMScreen.xlsx",
        source:"/Contact/VDEM WEB APPLICTION"
    },
    {
         ID:2,
        imgsrc: Elibrary,
        title: "E-LIBRARY APPLICATION",
        text:"E-LIBRARY Application provides information about various books that can be accessed and managed through online and track the status of the users book renewal process.",
        view: "/Elibrary.xlsx",
        source:"/Contact/E-LIBRARY APPLICATION"
    },
    {
          ID:3,
        imgsrc: VLTD,
        title: "VLTD ANDRIOD APP",
        text:"Vehicle Location tracking App provides the information of the vehicle location ,that are halted in different areas in the plant for better functioning of production process.",
        view: "/VehicleTrackingDevice.xlsx",
        source:"/Contact/VLTD ANDRIOD APP"
    },
    {
        ID:4,
        imgsrc: VLTD,
        title: "COVID TRACKER",
        text:"Covid Tracker Application provides the information about the total no of infected cases, recovered cases and other parameters based on the search of Country.",
        view: "/CovidTracker.xlsx",
        source:"/Contact/COVID TRACKER"
    },
    {
        ID:5,
        imgsrc: VLTD,
        title: "OVERFLOW INVENTORY",
        text:"OVERFLOW INVENTORY SYSTEM enables users to scan the different Parts that comes to Plant Area and also has functionality to move the part from Overflow Area to shop.",
        view: "/OVERFLOWINVENTORY.xls",
        source:"/Contact/OVERFLOW INVENTORY"
    },
    {
        ID:6,
        imgsrc: VLTD,
        title: "POKOYOKE SERVICE",
        text:"Pokyoke service is a windows service that runs every 5 sec and sends vehicle certificate details to respective entities for each vehicle in a Batch.",
        view: "/PESOBIS.xlsx",
        source:"/Contact/POKOYOKE SERVICE"
    },
]

export default projectCardData;