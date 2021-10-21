// Author: Felipe
// To add a link you must 


// All good
console.log("All good, JS Running");

function to_link (link) {
    
    //DEFINING THE LINKS
    //To define a new link, 
    // [1] type => let LINK_NAME = "url";
    // [2] add a new "case" to the switch statement => case "name" (this name has to be the one you set at the index.html to_link('name')
    // [3] save it and reupload to netlify
    let link_photoshoot = "https://docs.google.com/forms/d/e/1FAIpQLSfkk0oNvS2PQqxxB200_FYmM1aOq2cn-q-LwbXScfr1kxvXYA/viewform";
    let link_co_poison = "https://bit.ly/co_poison_awareness";
    let instagram = "https://www.instagram.com/isudebrecen/";
    let facebook = "https://www.facebook.com/isudebrecen/";
    let charityRun ="http://leukemiasgyermekekert.hu/termek/fuss-fotozz-mosolyogj-hortobagy-2021-oktober-24/";
    let neurotech = "https://t.co/HB0gRbH9P4";
    switch (link) {
        case "photoshoot":
            window.open(link_photoshoot, '_blank');
            console.log(`to link was clicked, target ${link_photoshoot}`);
            break;
        case "co_poison":
            window.open(link_co_poison, '_blank');
            console.log(`to link was clicked, target ${link_co_poison}`);
            break;
        case "instagram":
            window.open(instagram, "_blank");
            console.log(`Redirecting to instagram at ${instagram}`);
            break;
        case "facebook":
            window.open(facebook, "_blank");
            console.log(`Redirecting to facebook at ${facebook}`);
            break;
        case "charityRun":
            alert("The Charity Run for the Foundation for Children with leukemia website is in Hungarian, please use a translator to navigate.<br>Click on okay to be redirected")
            window.open(charityRun, "_blank")
            console.log(`Redirecting to Charity Run at ${charityRun}`);
        case "neurotech":
            window.open(neurotech, "_blank");
            console.log(`Redirecting to NeurotechEU 3mt`)
        default:
            console.log(`The function was called with ${link} argument`);
    }
}