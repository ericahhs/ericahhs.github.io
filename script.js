const titles = [
    "Software Engineer",
    "UIUX Designer",
    "Web Developer",
    "Graphic Designer",
    "Artist",
  ];
  
  let part = '';
  let i = 0;
  let isDeleting = false;
  const speed = 100;
  
  function type() {
    const current = titles[i % titles.length];
  
    if (isDeleting) {
      part = current.substring(0, part.length - 1);
    } else {
      part = current.substring(0, part.length + 1);
    }
  
    document.getElementById("typewriter").textContent = part; // Update the text content of #typewriter
  
    let delay = speed;
  
    if (!isDeleting && part === current) {
      delay = 1700;
      isDeleting = true;
    } else if (isDeleting && part === '') {
      isDeleting = false;
      i++;
      delay = 1000;
    }
  
    setTimeout(type, delay);
  }
  
  type();