import React from "react";
import "./ResumePage.css";

function ResumePage() {
    return (
        <section className="resume-section">
            <div className="resume-heading">
                <h1>Ronald Paul Nelson II</h1>
                <p>(209) 914-0243 | rpaulnelsonii@gmail.com</p>
                <p>2140 Mary Alice Way, Tracy, CA 95377</p>
            </div>

            <div className="resume-heading">
                <h2>Contact</h2>
                <p>(209) 914-0243</p>
                <p>rpaulnelsonii@gmail.com</p>
            </div>

            <div className="resume-heading">
                <h2>Work Experience</h2>
                <p>
                    <strong>Barista and Line Cook</strong><br />
                    Northtown Coffee, Arcata, CA<br />
                    August '21 - June '23<br />
                    - Made and served specialty espresso beverages on a daily basis
                </p>
                <p>
                    - Cooked food items by grilling, frying, sautéing, and using other cooking methods to specified recipes and standards
                </p>
                <p>
                    - Took orders and handled currency daily through Revel P.O.S. system
                </p>
            </div>

            <div className="resume-heading">
                <h2>Skills</h2>
                <p>
                    - Excellent Communication
                </p>
                <p>
                    - Teamwork and Collaboration
                </p>
                <p>
                    - Leadership
                </p>
                <p>
                    - Active Listening and Quick Learning
                </p>
                <p>
                    - Critical Thinking and Problem Solving
                </p>
            </div>

            <div className="resume-heading">
                <h2>Certificates</h2>
                <p>
                    - Truck Driver, Current Food Handlers License, Class A License
                </p>
                <p>
                    - Repaired cabinets, doors, frameworks, floors, and other wooden fixtures
                </p>
                <p>
                    - Applied various finishes to buildings, rooms, or other structures, including primers or sealers
                </p>
                <p>
                    - Installed and repaired basic plumbing
                </p>
            </div>

            <div className="resume-heading">
                <h2>Education</h2>
                <p>
                    - Associates in Science in Engineering Technology with Honors<br />
                    Las Positas College, Livermore, CA
                </p>
                <p>
                    - Coding Bootcamp for Web Development<br />
                    UC Berkeley Extension, Berkeley, CA
                </p>
            </div>

            <div className="resume-heading">
                <h2>References</h2>
                <p>
                    - Serg Mihaylo - Sunshine Unlimited, (707) 637-7277, humboldtlove@gmail.com
                </p>
                <p>
                    - Holly Ameline - Northtown Coffee, (707) 713-9088, owlspirit07@gmail.com
                </p>
            </div>
        </section>
    );
}

export default ResumePage;