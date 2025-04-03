const execomMembers = [
    {
        name: "John Doe",
        role: "President",
        rollNo: "CLUB2022001",
        branch: "Computer Science",
        linkedin: "https://linkedin.com/in/johndoe",
        image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
        name: "Jane Smith",
        role: "Vice President",
        rollNo: "CLUB2022002",
        branch: "Electrical Engineering",
        linkedin: "https://linkedin.com/in/janesmith",
        image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
        name: "Robert Johnson",
        role: "Secretary",
        rollNo: "CLUB2022003",
        branch: "Mechanical Engineering",
        linkedin: "https://linkedin.com/in/robertjohnson",
        image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
        name: "Emily Davis",
        role: "Treasurer",
        rollNo: "CLUB2022004",
        branch: "Civil Engineering",
        linkedin: "https://linkedin.com/in/emilydavis",
        image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
        name: "Michael Wilson",
        role: "Event Coordinator",
        rollNo: "CLUB2022005",
        branch: "Electronics & Communication",
        linkedin: "https://linkedin.com/in/michaelwilson",
        image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
        name: "Sarah Brown",
        role: "Public Relations",
        rollNo: "CLUB2022006",
        branch: "Information Technology",
        linkedin: "https://linkedin.com/in/sarahbrown",
        image: "https://randomuser.me/api/portraits/women/3.jpg"
    },
    {
        name: "David Miller",
        role: "Content Head",
        rollNo: "CLUB2022007",
        branch: "Computer Science",
        linkedin: "https://linkedin.com/in/davidmiller",
        image: "https://randomuser.me/api/portraits/men/4.jpg"
    },
    {
        name: "Lisa Taylor",
        role: "Social Media Manager",
        rollNo: "CLUB2022008",
        branch: "Electrical Engineering",
        linkedin: "https://linkedin.com/in/lisataylor",
        image: "https://randomuser.me/api/portraits/women/4.jpg"
    },
    {
        name: "James Anderson",
        role: "Technical Head",
        rollNo: "CLUB2022009",
        branch: "Mechanical Engineering",
        linkedin: "https://linkedin.com/in/jamesanderson",
        image: "https://randomuser.me/api/portraits/men/5.jpg"
    },
    {
        name: "Emma Thomas",
        role: "Creative Director",
        rollNo: "CLUB2022010",
        branch: "Civil Engineering",
        linkedin: "https://linkedin.com/in/emmathomas",
        image: "https://randomuser.me/api/portraits/women/5.jpg"
    }
];

// DOM Elements
const carouselTrack = document.querySelector('.carousel-track');
const profileInfo = document.getElementById('profileInfo');
let currentProfile = null;

// Initialize profiles with duplicates for seamless looping
function initProfiles() {
    carouselTrack.innerHTML = '';
    
    // Create two identical sets for seamless looping
    const duplicatedMembers = [...execomMembers, ...execomMembers];
    
    duplicatedMembers.forEach((member, index) => {
        const profile = document.createElement('div');
        profile.className = 'profile-item';
        
        profile.innerHTML = `
            <img src="${member.image}" alt="${member.name}">
            <div class="profile-role">${member.role}</div>
        `;
        
        // Click event to show profile info
        profile.addEventListener('click', () => {
            showProfileInfo(member);
            setActiveProfile(profile);
        });
        
        carouselTrack.appendChild(profile);
    });
    
    // Set first profile as active
    if (execomMembers.length > 0) {
        showProfileInfo(execomMembers[0]);
    }
}

// Show profile info
function showProfileInfo(member) {
    profileInfo.innerHTML = `
        <div class="row align-items-center">
            <div class="col-md-4 text-center mb-4 mb-md-0">
                <img src="${member.image}" alt="${member.name}" 
                     class="rounded-circle w-50 h-auto max-w-100 border border-3 border-danger">
            </div>
            <div class="col-md-8">
                <h3 class="display-6 fw-bold mb-3">${member.name}</h3>
                <div class="mb-3">
                    <span class="badge bg-danger me-2">${member.role}</span>
                    <span class="badge bg-dark me-2">${member.rollNo}</span>
                    <span class="badge bg-dark">${member.branch}</span>
                </div>
                <a href="${member.linkedin}" target="_blank" 
                   class="btn btn-outline-light rounded-pill px-4">
                   <i class="fab fa-linkedin-in me-2"></i>Connect on LinkedIn
                </a>
            </div>
        </div>
    `;
}

// Reset animation when it completes (for seamless looping)
carouselTrack.addEventListener('animationiteration', () => {
    // This ensures smooth continuous looping
    carouselTrack.style.animation = 'none';
    carouselTrack.offsetHeight; /* trigger reflow */
    carouselTrack.style.animation = 'scroll 20s linear infinite';
});

// Initialize on load
document.addEventListener('DOMContentLoaded', initProfiles);