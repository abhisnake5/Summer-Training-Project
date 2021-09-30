import React from 'react'
import './About.css'
export default function About() {
    return (
        <>
        <div className="container p-1">
                <h1 className="my-3">About TextUtils</h1>
                <div className="accordion" id="accordionExample">
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                            <button
                                className="accordion-button"
                                type="button"
                               
                                data-bs-toggle="collapse"
                                data-bs-target="#collapseOne"
                                aria-expanded="true"
                                aria-controls="collapseOne"
                            >
                                <strong> Analyze your Text</strong>
                            </button>
                        </h2>
                        <div
                            id="collapseOne"
                            className="accordion-collapse collapse show"
                            aria-labelledby="headingOne"
                            data-bs-parent="#accordionExample"
                        >
                            <div className="accordion-body">
                                <strong>Text Utils</strong> is a text based React App which is used to manipulate your text the way you want to.
                            </div>
                        </div>
                    </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header" id="headingThree">
                                <button
                                    className="accordion-button collapsed"
                                   
                                    type="button"
                                    data-bs-toggle="collapse"
                                    data-bs-target="#collapseThree"
                                    aria-expanded="false"
                                    aria-controls="collapseThree"
                                >
                                    <strong>Features and Themes</strong>
                                </button>
                            </h2>
                            <div
                                id="collapseThree"
                                className="accordion-collapse collapse"
                                aria-labelledby="headingThree"
                                data-bs-parent="#accordionExample"
                            >
                                <div className="accordion-body">
                                    <strong>Text Utils</strong> can be used to manipulate texts as:
                                    <ul>
                                        <li>Convert text to Upper Case</li>
                                        <li>Convert text to Lower Case</li>
                                        <li>Copy text to Clipboard</li>
                                        <li>Edit extra spaces</li>
                                        <li>Clear Text</li>
                                    </ul>
                                    It also comes with two themes:
                                    <ul>
                                        <li>Light Theme</li>
                                        <li>Dark Theme</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
    </>
    )
}
