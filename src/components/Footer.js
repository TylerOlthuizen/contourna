import React, {useState} from "react";
import { Link } from "gatsby";

import { RiFacebookCircleFill, RiInstagramFill } from 'react-icons/ri';

import logo from "img/logo-stacked-inverse.svg";
import addToMailchimp from 'gatsby-plugin-mailchimp'

const Footer = () => {


  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const result = await addToMailchimp(formValues.email, {
      NAME:formValues.name
    })
  }

  const [formValues, setFormValues] = useState({});

  console.log(formValues);

  const handleFormChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormValues({
      ...formValues,
      [`${name}`]: value
    })
  }
  

  return (
    <footer className="footer has-background-black has-text-white-ter">
      <div className="content has-background-black has-text-white-ter">
        <div className="container has-background-black has-text-white-ter mt-4 mb-4">
          <div style={{ maxWidth: "100vw" }} className="columns">
            <div className="column is-4">
              <img
                src={logo}
                alt="contourna"
                style={{ width: "100px" }} 
              />
              <div className="social">
                <a title="facebook" href="https://facebook.com">
                  <RiFacebookCircleFill color="#fdb913" size="2em" />
                </a>
                <a title="instagram" href="https://instagram.com">
                  <RiInstagramFill color="#fdb913" size="2em" />
                </a>
              </div>
            </div>
            <div className="column is-4">
              <section className="menu">
                <ul className="menu-list">
                  <li>
                    <Link to="/" className="navbar-item">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/about">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/blog">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link className="navbar-item" to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </section>
            </div>
            <div className="column is-4">
            <form onSubmit={handleFormChange}>
              <div className="field">
                <label className="label has-text-white" htmlFor={"name"}>
                  Your name
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"text"}
                    name={"name"}
                    onChange={handleFormChange}
                    id={"name"}
                    required={true}
                  />
                </div>
              </div>
              <div className="field">
                <label className="label has-text-white" htmlFor={"email"}>
                  Email
                </label>
                <div className="control">
                  <input
                    className="input"
                    type={"email"}
                    name={"email"}
                    onChange={handleFormChange}
                    id={"email"}
                    required={true}
                  />
                </div>
                <div className="field">
                  <button className="primary-cta" type="submit">
                    Send
                  </button>
                </div>
              </div>
            </form>
          </div>
          </div>
          <div className="has-text-right pt-2 pb-2 has-text-white">
            &copy; {new Date().getFullYear()} Copyright: <a className="has-text-white" href="https://contourna.com"> Contourna.com </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
