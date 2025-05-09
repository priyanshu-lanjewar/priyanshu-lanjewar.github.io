var resumeBtn = document.getElementById('resume-btn');
var baseUrl = 'https://github.com/priyanshu-lanjewar/resume/releases/download/';

fetch('https://api.github.com/repos/priyanshu-lanjewar/resume/releases/latest')
  .then(response => response.json())
  .then(data => {
    var latestTag = data.tag_name; // e.g., "v2.0.0"
    var fileName = 'Priyanshu_Lanjewar.pdf';
    var downloadUrl = baseUrl + latestTag + '/' + fileName;

    resumeBtn.onclick = function() {
      location.assign(downloadUrl);
    };
  })
  .catch(error => {
    console.error('Error fetching latest release:', error);
    resumeBtn.disabled = true;
    resumeBtn.title = 'Resume unavailable';
  });
