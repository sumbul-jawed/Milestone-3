var _a;
// Get reference to the form and display area
(_a = document.getElementById('resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (e) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    e.preventDefault();
    // Get input values, safely check if elements exist
    var name = ((_a = document.getElementById('name')) === null || _a === void 0 ? void 0 : _a.value) || '';
    var email = ((_b = document.getElementById('email')) === null || _b === void 0 ? void 0 : _b.value) || '';
    var phone = ((_c = document.getElementById('phone')) === null || _c === void 0 ? void 0 : _c.value) || '';
    var objective = ((_d = document.getElementById('objective')) === null || _d === void 0 ? void 0 : _d.value) || '';
    var education = ((_e = document.getElementById('education')) === null || _e === void 0 ? void 0 : _e.value) || '';
    var experience = ((_f = document.getElementById('experience')) === null || _f === void 0 ? void 0 : _f.value) || '';
    var skills = ((_g = document.getElementById('skill')) === null || _g === void 0 ? void 0 : _g.value) || ''; // Fixed the ID to 'skill'
    var languages = ((_h = document.getElementById('languages')) === null || _h === void 0 ? void 0 : _h.value) || '';
    // Get the resume display container
    var resumeDisplay = document.getElementById('resume-display');
    // Generate and display the resume if the container exists
    if (resumeDisplay) {
        resumeDisplay.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(name, "</p>\n            <p><strong>Email:</strong> ").concat(email, "</p>\n            <p><strong>Phone Number:</strong> ").concat(phone, "</p>\n            <h3>Objective</h3>\n            <p>").concat(objective, "</p>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n            <h3>Languages</h3>\n            <p>").concat(languages, "</p>\n        ");
    }
    else {
        console.error('Resume display container not found');
    }
});
