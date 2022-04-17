import React, {Component} from 'react';
import Navbar from "../LandingPage/Navbar";
import {NavLink} from "react-router-dom";
import axios from "axios";
import Footer from "../Footer/Footer";

class UpdateProfile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            street: "",
            city: "",
            state: "",
            country: "",
            zipcode: "",
            email: "",
            phoneNum: "",
            password: "",
            authFlag: false,
            errorMsg: null,
        };

        // this.submitSignup = this.submitSignup.bind(this);
        // this.passwordChangeHandler = this.passwordChangeHandler.bind(this);
        // this.emailChangeHandler = this.emailChangeHandler.bind(this);

    }

    submitSignup(e) {
        //prevent page from refresh
        e.preventDefault();
        const data = {
            // firstName: this.state.firstName,
            // LastName: this.state.LastName,
            // street: this.state.street,
            // city: this.state.city,
            // state: this.state.state,
            // country: this.state.country,
            // zipcode: this.state.zipcode,
            email: this.state.email,
            // phoneNum: this.state.phoneNum,
            password: this.state.password
        }
        //set the with credentials to true
        axios.defaults.withCredentials = true;
        //make a post request with the user data
        axios.post('http://localhost:3001/signup', data)
            .then(response => {
                console.log("Status Code : ", response.status);
                if (response.status === 200) {
                    this.setState({
                        authFlag: true
                    })
                } else {
                    this.setState({
                        authFlag: false
                    })
                }
            })
            .catch(err => {
                console.log(err);
                //set invalid message
                this.setState({
                    errorMsg: "Invalid."
                });
            });

    }

    render() {
        return (
            <div>
                {<Navbar/>}
                <div className="container">
                    {/*</div>*/}


                    <div className="profile" style={{
                        margin: "10px",
                        // height: "300px",
                        alignItems: 'center',
                        justifyContent: "space-between",
                        display: 'flex'
                    }}>
                        <div>
                            <h1>
                                Your Public Profile
                            </h1>
                            <p>
                                Everything on this page can be seen by anyone
                            </p>
                        </div>
                        <NavLink className="btn btn-light btn-outline-secondary" to="/profile">
                            View Profile
                        </NavLink>
                    </div>


                    <div style={{

                        // flex: "1",
                        margin: "10px",

                        // alignItems: 'center',
                        justifyContent: "space-between",
                        display: 'flex',
                        backgroundColor: "#f5fbfd",
                        // position: "relative",
                    }}>
                        <form onSubmit={this.submitLogin}>


                            <div className="container" style={{margin: "50px"}}>
                                <h6>
                                    Profile Picture
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={this.onChangeFileHandler}
                                        name="fileName"
                                        id="filename"
                                        multiple
                                        style={{
                                            marginLeft: "50px"
                                        }}
                                    />
                                </h6>


                                <img
                                    style={{width: '150px', height: '120px',}}
                                    alt=""
                                    // src={
                                    //     this.state.ProfileImg !== null &&
                                    //     this.state.ProfileImg.length > 0
                                    //         ? this.state.ProfileImg
                                    //         : "../images/defaultProfilePic.png"
                                    // }
                                    src="../images/defaultProfilePic.png"
                                />
                            </div>

                            <div className="profileUpdate" style={{

                                margin: "50px",

                            }}>


                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="Name"
                                        required/>
                                </div>


                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="address1"
                                        placeholder="Street"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="city"
                                        placeholder="City"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="state"
                                        placeholder="State"
                                    />
                                </div>
                                <div className="form-group">
                                    <select name="birth-month">
                                        <option value="">- Country -</option>
                                        <option value="1"
                                        >USA
                                        </option>
                                        <option value="2"
                                        >UK
                                        </option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="zipCode"
                                        placeholder="Zip Code"
                                    />
                                </div>

                                <div className="form-group">
                                    <input
                                        onChange={this.emailChangeHandler}
                                        type="text"
                                        className="form-control"
                                        name="email"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="phoneNumber"
                                        placeholder="Phone number"
                                    />
                                </div>

                                <div>
                                    <div>
                                        <label>Birthday</label>
                                    </div>
                                    <select name="birth-month">
                                        <option value="">- month -</option>
                                        <option value="1"
                                        >January
                                        </option>
                                        <option value="2"
                                        >February
                                        </option>
                                        <option value="3"
                                        >March
                                        </option>
                                        <option value="4"
                                        >April
                                        </option>
                                        <option value="5"
                                        >May
                                        </option>
                                        <option value="6"
                                        >June
                                        </option>
                                        <option value="7"
                                        >July
                                        </option>
                                        <option value="8"
                                        >August
                                        </option>
                                        <option value="9"
                                        >September
                                        </option>
                                        <option value="10"
                                        >October
                                        </option>
                                        <option value="11"
                                        >November
                                        </option>
                                        <option value="12"
                                        >December
                                        </option>
                                    </select>
                                    <select id="birth-day" name="birth-day" aria-label='Day'>*/}
                                        <option value="">- day -</option>
                                        <option value="1"
                                        >1
                                        </option>
                                        <option value="2"
                                        >2
                                        </option>
                                        <option value="3"
                                        >3
                                        </option>
                                        <option value="4"
                                        >4
                                        </option>
                                        <option value="5"
                                        >5
                                        </option>
                                        <option value="6"
                                        >6
                                        </option>
                                        <option value="7"
                                        >7
                                        </option>
                                        <option value="8"
                                        >8
                                        </option>
                                        <option value="9"
                                        >9
                                        </option>
                                        <option value="10"
                                        >10
                                        </option>
                                        <option value="11"
                                        >11
                                        </option>
                                        <option value="12"
                                        >12
                                        </option>
                                        <option value="13"
                                        >13
                                        </option>
                                        <option value="14"
                                        >14
                                        </option>
                                        <option value="15"
                                        >15
                                        </option>
                                        <option value="16"
                                        >16
                                        </option>
                                        <option value="17"
                                        >17
                                        </option>
                                        <option value="18"
                                        >18
                                        </option>
                                        <option value="19"
                                        >19
                                        </option>
                                        <option value="20"
                                        >20
                                        </option>
                                        <option value="21"
                                        >21
                                        </option>
                                        <option value="22"
                                        >22
                                        </option>
                                        <option value="23"
                                        >23
                                        </option>
                                        <option value="24"
                                        >24
                                        </option>
                                        <option value="25"
                                        >25
                                        </option>
                                        <option value="26"
                                        >26
                                        </option>
                                        <option value="27"
                                        >27
                                        </option>
                                        <option value="28"
                                        >28
                                        </option>
                                        <option value="29"
                                        >29
                                        </option>
                                        <option value="30"
                                        >30
                                        </option>
                                        <option value="31"
                                        >31
                                        </option>
                                    </select>
                                </div>


                                <button className="btn btn-primary" style={{marginTop: "10px"}}>Save Changes</button>
                                <p style={{color: "red", fontWeight: "bold"}}>
                                    <br/>
                                    {this.state.errorMsg}
                                </p>
                            </div>
                        </form>

                    </div>

                </div>
                {<Footer/>}
            </div>
        );
    };
};

export default UpdateProfile;