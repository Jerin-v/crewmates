import React, {useState, useEffect} from "react";
import { supabase } from '../client';

const ViewCrew = () => {
    const [crew, setCrew] = useState([]);

    useEffect(() => {
        const fetchCrew = async() => {
            const {data} = await supabase
                .from('Crew')
                .select()
            setCrew(data);
        }
        fetchCrew()
    }, [])
    return (
        <div className="viewCrew">
            <h1>View Crewmates</h1>
            <h2>Here is where you can view all of your created crewmates!</h2>
            <div className="card">
                {
                    crew && crew.length > 0 ?
                    crew.map((crewmate, index) => 
                        <div key={index}>
                            <h3>{crewmate.name}</h3>
                            <p>Color: {crewmate.color}</p>
                            <p>Speed: {crewmate.speed}</p>
                        </div>
                    ) : <h2>{'No Crewmates Yet 😞'}</h2>
                }
            </div>
        </div>
    )
}

export default ViewCrew;