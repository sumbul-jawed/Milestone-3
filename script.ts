// Get reference to the form and display area
document.getElementById('resume-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
   
    // Get input values, safely check if elements exist
    const name = (document.getElementById('name') as HTMLInputElement)?.value || '';
    const email = (document.getElementById('email') as HTMLInputElement)?.value || '';
    const phone = (document.getElementById('phone') as HTMLInputElement)?.value || '';
    const objective = (document.getElementById('objective') as HTMLTextAreaElement)?.value || '';
    const education = (document.getElementById('education') as HTMLTextAreaElement)?.value || '';
    const experience = (document.getElementById('experience') as HTMLTextAreaElement)?.value || '';
    const skills = (document.getElementById('skill') as HTMLTextAreaElement)?.value || '';  // Fixed the ID to 'skill'
    const languages = (document.getElementById('languages') as HTMLTextAreaElement)?.value || '';

    // Get the resume display container
    const resumeDisplay = document.getElementById('resume-display');
   
    // Generate and display the resume if the container exists
    if (resumeDisplay) {
        resumeDisplay.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone Number:</strong> ${phone}</p>
            <h3>Objective</h3>
            <p>${objective}</p>
            <h3>Education</h3>
            <p>${education}</p>
            <h3>Experience</h3>
            <p>${experience}</p>
            <h3>Skills</h3>
            <p>${skills}</p>
            <h3>Languages</h3>
            <p>${languages}</p>
        `;
    } else {
        console.error('Resume display container not found');
    }
});
