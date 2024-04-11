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

    return (
        <div>
            <h1>Create a New Crewmate</h1>
            <form>
                <label for="name">Name</label> <br />
                <input type="text" id="name" name="name" onChange={handleChange} /><br />
                <br/>

                <label for="color">Color</label><br />
                <input type="text" id="color" name="color" onChange={handleChange} /><br />
                <br/>

                <label for="speed">Speed</label><br />
                <input type="text" id="speed" name="speed" onChange={handleChange} /><br />
                <br/>
                <input type="submit" value="Create" onClick={createCrew} />
            </form>
        </div>
    )

}

export default CreateCrew;