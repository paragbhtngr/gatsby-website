import PropTypes from "prop-types"
import React from "react"

const Background = ({ theme }) => (
  <div className={theme} id="site-bg">
    { theme === "arty" ? 
      <>
      </> : theme === "designy" ? 
      <>
      </> : theme === "codey" ?
      <>
        <pre className="code-green">{`
let init = ({theme, user}) => {

  if(theme.name === "codey") {
    // Setting the theme to code-based theme now...
    console.log("Setting the global site theme to codey");

    if(user?.type) { 
      // omg if you are not using optional chaining what even are you bro? (lol kidding)
      // although if you haven't noticed already the entire point of this exercise is 
      // satire so if you need me to explain that to you, then you're kind of missing the
      // point. Okay, I'm going to stop getting upset at you for hypotheticals I'm assuming
      // you may have committed - that's not fair.

      if(user.type === "developer" && element.blur === 0) { 
        // Oooh someone is messing around with my css! Naughty naughty!
        
        console.log("Hello Developer, you have found the secret code");
      } 
      
      else if(user.type === "developer") {
        // Ah, I guess you must be a backend developer. Quick! How do you vertically align
        // an element? Hahahahahaha yessss.... feel it! Feel your incompetence!!! neyehehe

        console.log("Yes, this is why you need front-end developers");
      } 
      
      else {
        // too bad, looks like you don't know how to use the browser 
        // developer console. Sigh, oh well...
        console.log("Hello Pleb, too bad, you can't read this.");
      }
    }
    else {

    }
  }
}

document.ready(function(){
  // Lol this is a react site 
  init({"codey", user});
});
        `}
        </pre>
      </> : null 
    }
  </div>
)

Background.propTypes = {
  siteTitle: PropTypes.string,
  theme: PropTypes.string,
}

Background.defaultProps = {
  siteTitle: ``,
}

export default Background
