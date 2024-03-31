var url = 'https://github.com/priyanshu-lanjewar/resume/releases/download/v2.0.0/Priyanshu_Lanjewar.pdf';
var resumeBtn = document.getElementById('resume-btn');
resumeBtn.onclick = function() {
    location.assign(url);
}
