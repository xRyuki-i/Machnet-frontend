import React from 'react';
import './profile.css';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useHistory } from 'react-router';
import { Block } from './components/block/Block';
import { Card } from './components/card/Card';
import { convertDate } from './convertDate';



const Profile = () => {
    
    const history = useHistory();
    const userName = history.location.state;
    const [resume, setResume] = useState({});
    const [date, setDate] = useState('');
    const api = "https://api.github.com/users/"+userName;

    const fetchResume = () => {
        axios.get(api)
        .then(res => {
            setResume(res.data);
            setDate(res.data.created_at);
        })
        .catch(err =>{
            console.log(err);
        })
    }

    useEffect(()=>{
        fetchResume();
    },[])

    let convertedDate = convertDate(date.substr(0,10));

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
                        <Card 
                            labelName="Email" 
                            cardValue={resume.email ? resume.email : "-"} 
                            iconUrl="./gmail.png"/>

                        <Card 
                            labelName="Organization" 
                            cardValue={resume.company ? resume.company: "-"} 
                            iconUrl="./company.png"/>

                        <Card 
                            labelName="Location" 
                            cardValue={resume.location ? resume.location : "-"}
                            iconUrl="./location.png" />

                        <Card 
                            labelName="Joined Date" 
                            cardValue={convertedDate}
                            iconUrl="./joined.png" />

                        <Card 
                            labelName="Twitter" 
                            cardValue={(resume.twitter_username == null) ? "-" : '@'+resume.twitter_username}
                            iconUrl="./twitter.png" />

                        <Card  
                            labelName="Website" 
                            cardValue={resume.html_url} 
                            iconUrl="./website.png"/>
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
