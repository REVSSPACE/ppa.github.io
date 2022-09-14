import React from 'react'
import './approval.css'
export default function ApprovalDetails()
{
    return(
        <>
            <div id="Asec1">
                <div id="part1">
                        <div>
                            <label for="pattaext">Patta Extend<span style={{color:"#ff0000"}}>*</span></label><br />
                            <select id="pattaext" name="st" style={{width: "11rem",height:"2em"}}>
                                <option value="salem">salem</option>
                                <option value="erode">erode </option>
                                <option value="tiruppur">tiruppur </option>
                            </select>
                        </div>
                        <div>
                            <label for="Conversion">Conversion Type<span style={{color:"#ff0000"}}>*</span></label><br />
                            <select id="Conversion" name="st" style={{width: "11rem",height:"2em"}}>
                                <option value="salem">salem</option>
                                <option value="erode">erode </option>
                                <option value="tiruppur">tiruppur </option>
                            </select>
                        </div>
                        <div>
                            <label>Patta Extend in sq.m</label><br />
                            <input type="text" />
                        </div>
                </div>
                <div id="part2">
                        <div>
                            <label>Submission fees in Rs.</label><br />
                            <input type="text" />
                        </div>
                        <div>
                            <label>Other Fees in Rs.</label><br />
                            <input type="text" />
                        </div>
                        <div>
                            <label>Width of Access to Road in mtrs</label><br />
                            <input type="text" />
                        </div>
                </div>
                <div id="part3">
                <div>
                        <label>Extend As per in Document in sq.m</label><br />
                        <input type="text" />
                </div>
                <div>
                <label>Road Area in sq.m</label><br />
                        <input type="text" />
                </div>
                </div>
            </div>
            <h4>Approach Road Details for proposed Layout</h4>
            <div id="Asec2">
            
                <div class="Ainner">
                    <div>
                            <label>Name of the Road</label><br />
                            <input type="text" />
                    </div>
                    <div>
                            <label>Lead From - to</label><br />
                            <input type="text" />
                    </div>
                    <div>
                            <label>Road Area in sq.m</label><br />
                            <input type="text" />
                    </div>
                </div>
                <div class="Ainner">
                    <div>
                            <label>Name of the connecting major Road</label><br />
                            <input type="text" />
                    </div>
                    <div>
                            <label>Road Maintained by</label><br />
                            <input type="text" />
                    </div>
                    <div>
                            <label>Ownership of  Approach Road</label><br />
                            <input type="text" />
                    </div>
                </div>
                <div>
                            <label>Status of Abutting Road</label><br />
                            <input type="text" />
                    </div>
            </div>
            <div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </>
    );
}