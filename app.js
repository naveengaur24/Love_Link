document.addEventListener('DOMContentLoaded', () => {
    const sections = {
        home: document.getElementById('home'),
        about: document.getElementById('about'),
        features: document.getElementById('features'),
        registration: document.getElementById('registration'),
        profile: document.getElementById('profile'),
        matches: document.getElementById('matches'),
    };

    const forms = {
        registrationForm: document.getElementById('registrationForm'),
        profileForm: document.getElementById('profileForm'),
    };

    const matchResults = document.getElementById('matchResults');

    function showSection(sectionId) {
        Object.values(sections).forEach(section => section.classList.add('hidden'));
        sections[sectionId].classList.remove('hidden');
    }

    document.querySelectorAll('header nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', event => {
            event.preventDefault();
            const targetSection = anchor.getAttribute('href').substring(1); 
            showSection(targetSection);
        });
    });

    document.getElementById('getStartedBtn').addEventListener('click', () => {
        showSection('registration');
    });

    forms.registrationForm.addEventListener('submit', event => {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;

        console.log(`Registered with Username: ${username}, Email: ${email}`);
        alert('Registration Successful 🚀');

        showSection('profile');
    });

    forms.profileForm.addEventListener('submit', event => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        const location = document.getElementById('location').value;
        const interests = document.getElementById('interests').value;

        console.log(`Profile Created: Name: ${name}, Age: ${age}, Location: ${location}, Interests: ${interests}`);
        alert('Profile Created Successfully ✨');

        displayMatches();

        showSection('matches');
    });

    function displayMatches() {
        const matches = [
            { name: 'Alice', age: 25, location: 'New York', interests: 'Reading, Traveling' },
            { name: 'Bob', age: 28, location: 'San Francisco', interests: 'Cooking, Hiking' },
            { name: 'Charlie', age: 30, location: 'Chicago', interests: 'Movies, Music' },
        ];

        matchResults.innerHTML = ''; 

        matches.forEach(match => {
            const matchDiv = document.createElement('div');
            matchDiv.className = 'match';
            matchDiv.innerHTML = `
                <h3>${match.name} 💕</h3>
                <p>Age: ${match.age}</p>
                <p>Location: ${match.location}</p>
                <p>Interests: ${match.interests}</p>
            `;
            matchResults.appendChild(matchDiv);
        });
    }
});
