import React from 'react';
import './profile.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Block } from './components/block/Block';
import { Card } from './components/card/Card';


const Profile = () => {
    
    const history = useHistory();
    const userName = history.location.state;
    const [resume, setResume] = useState({});
    const api = "https://api.github.com/users/"+userName;

    const fetchResume = () => {
        axios.get(api)
        .then(res => {
            setResume(res.data);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchResume();
    },[])


    return (
        <div className="content">
            <header className="header">
                <div className="previous__header">
                    <img 
                        src="./arrow.png" 
                        alt="arrow" 
                        className="icon__header"
                        onClick={()=>{history.push('/')}}/>
                </div>

                {   resume.hireable &&
                    <button className="hire__header">
                        Hire Me    
                    </button>
                }                         
            </header>

            <section className="wrapper">
                <div className="profile__wrapper">
                    <img 
                        src={resume.avatar_url} 
                        className="picture__profile" alt="profile pic"/>

                    <h1 className="userName__profile">
                        {resume.name}
                    </h1>

                    <p className="logId__profile">
                        {"@"+resume.login}
                    </p>
                </div>

                <section className="status__wrapper">
                    <Block 
                        labelName="Followers" 
                        blockCount={resume.followers} 
                    />
                    
                    <Block 
                        labelName="Following" 
                        blockCount={resume.following} 
                    />

                    <Block 
                        labelName="Repositories" 
                        blockCount={resume.public_repos} 
                    />
                </section>

                <section className="details__wrapper">
                    <div className="info__details">
                        {/* <div className="card__info">
                            <p className="label__card">Email</p>

                            <h3 className="value__card">{resume.email}</h3>
                        </div> */}

                        <Card labelName="Email" cardValue={resume.email} />
                        <Card labelName="Organization" cardValue={resume.company} />
                        <Card labelName="Location" cardValue={resume.location} />


                        {/* <div className="card__info">
                            <p className="label__card">Organization</p>

                            <h3 className="value__card">{resume.company}</h3>
                        </div>

                        <div className="card__info">
                            <p className="label__card">Location</p>

                            <h3 className="value__card">{resume.location}</h3>
                        </div> */}

                        <Card labelName="Joined Date" cardValue={resume.created_at} />
                        <Card labelName="Twitter" cardValue={'@'+resume.twitter_username} />
                        <Card labelName="Website" cardValue={resume.html_url} />

                        {/* <div className="card__info">
                            <p className="label__card">Joined Date</p>

                            <h3 className="value__card">{resume.created_at}</h3>
                        </div>

                        <div className="card__info">
                            <p className="label__card">Twitter</p>

                            <h3 className="value__card">{'@'+resume.twitter_username}</h3>
                        </div>

                        <div className="card__info">
                            <p className="label__card">Website</p>

                            <h3 className="value__card">{resume.html_url}</h3>
                        </div> */}

                    </div>

                    <div className="bio__wrapper">
                        <article className="desc__bio">
                            <h3>Bio</h3>

                            <p>{resume.bio}</p>
                        </article>
                    </div>
                </section>
            </section>  
        </div>
    )
}

export default Profile;
