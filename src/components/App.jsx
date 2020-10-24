import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";


function App(props) {
    return (<div>
       <Header />
            {notes.map(info =>
                <Note
                    key={info.id}
                    titleContent={info.title}
                    subtitle={info.sub}
                />
                )
            }
        <Footer />
    </div>);
    
}

export default App;