import React, { useState, useEffect } from "react";
import { TypingTest } from "../Components/TypingTest";
import { LearnComputerBasics } from "./LearnComputerBasics";

export const HomePage = () => {

  return (
    <>
      <div className="card text-center m-5 fullHeightDiv border-primary">
        <div className="card-header">
          <ul className="nav nav-tabs" id="myTab" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="true" >Learn Computer Basics</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="typing-tab" data-bs-toggle="tab" data-bs-target="#typing-tab-pane" type="button" role="tab" aria-controls="typing-tab-pane" aria-selected="false">Typing</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="ai-tab" data-bs-toggle="tab" data-bs-target="#ai-tab-pane" type="button" role="tab" aria-controls="ai-tab-pane" aria-selected="false">Ask an AI</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link" id="disabled-tab" data-bs-toggle="tab" data-bs-target="#disabled-tab-pane" type="button" role="tab" aria-controls="disabled-tab-pane" aria-selected="false" disabled>In progress</button>
            </li>
          </ul>
        </div>
        <div className="tab-content" id="myTabContent">
                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab">
                      <div className="container-fluid mt-5 d-flex m-0 djustify-content-center align-items-center">
                        <div className="row w-100 mx-auto">
                         <LearnComputerBasics />
                        </div>
                      </div>
                      <div >
                      </div>
                    </div>
          <div className="tab-pane fade " id="typing-tab-pane" role="tabpanel" aria-labelledby="typing-tab">
            <TypingTest />
          </div>
          <div className="tab-pane fade" id="ai-tab-pane" role="tabpanel" aria-labelledby="ai-tab">
            {/* {ViewPublicNodes()} */}
            <div className="row w-100 mx-auto">
              {/* Proportion is currently 4:7 (left: right column size) */}
              <div id="user-nodes-analytics" className="container-fluid col-md-4 border border-danger mx-auto mh-c" aira-label='left-column'>Ai chat bot in progress</div>
              <div id="user-nodes-container" className="container-fluid col-md-7 border border-danger mx-auto mh-c p-4" aria-label='right-column'>

              </div>
            </div>
          </div>
          <div className="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabIndex={0}>in construction</div>
        </div>
      </div>
    </>
  );
}
