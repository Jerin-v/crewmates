import React, {useState } from "react";
import { supabase } from '../client';

const CreateCrew = () => {
    const [crew, setCrew] = useState({name: "", color: "", speed: ""})

    const createCrew = async (event) => {
        event.preventDefault();

        await supabase
            .from('Crew')
            .insert({name: crew.name, color: crew.color, speed: crew.speed})
            .select()

            window.location = "/view"
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setCrew( (prev) => {
            return {
                ...prev,
                [name]:value,
            }
        })
    }

}

export default CreateCrew;