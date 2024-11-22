const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');

// Open Sidebar
toggleBtn.addEventListener('click', () => {
    sidebar.style.left = '0'; 
    toggleBtn.style.display = 'none'; 
});

// Close Sidebar
closeBtn.addEventListener('click', () => {
    sidebar.style.left = '-250px'; 
    toggleBtn.style.display = 'block'; 
});
