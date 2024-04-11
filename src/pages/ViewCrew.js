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
        <div>
            <h1>View Crewmates</h1>
            <h2>Here is where you can view all of your created crewmates!</h2>
        </div>
    )
}

export default ViewCrew;