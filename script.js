
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(sec => {
        sec.classList.remove('visible');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('visible');

    // Update active sidebar link
    document.querySelectorAll('.sidebar a').forEach(link => {
        link.classList.remove('active');
    });

    event.target.classList.add('active');
}
