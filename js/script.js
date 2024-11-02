let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}


let cursor1 = document.querySelector('.cursor-1');
let cursor2 = document.querySelector('.cursor-2');

window.onmousemove = (e) =>{
    cursor1.style.top = e.pageY + 'px';
    cursor1.style.left = e.pageX + 'px';
    cursor2.style.top = e.pageY + 'px';
    cursor2.style.left = e.pageX + 'px';
}

document.querySelectorAll('a').forEach(links =>{

    links.onmouseenter = () =>{
        cursor1.classList.add('active');
        cursor2.classList.add('active');
    }

    links.onmouseleave = () =>{
        cursor1.classList.remove('active');
        cursor2.classList.remove('active');
    }

});

function calculateAge(dob) {
    const birthDate = new Date(dob);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDifference = today.getMonth() - birthDate.getMonth();

    // Adjust if birthday hasn't occurred yet this year
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

// Assuming date of birth is already set (e.g., '1999-10-31')
const dob = '2000-04-25';
document.getElementById('age').textContent = calculateAge(dob);

document.addEventListener('contextmenu', function(e) {
    e.preventDefault(); // This prevents the default context menu from appearing
});


document.addEventListener('keydown', function(e) {
    // For macOS: Command + Option + C
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.code === 'KeyC') {
        e.preventDefault();
    }

    // For Windows/Linux: Ctrl + Shift + C
    if (e.ctrlKey && e.shiftKey && e.code === 'KeyC') {
        e.preventDefault();
    }
});




