const papers = [
    {
        title: "Digital Literacy In Rural Area",
        authors: "~ Subhasish Rath",
        date: "2024-01-15",
        link: "https://docs.google.com/document/d/1eVl4_htS9bn8mItS8nxbUv5GVYNpy7Kf/"
    },
    {
        title: "Use of TELE-MEDS in Rural Area",
        authors: "~ Subhankar Mohapatra,Shreyansh Sahoo",
        date: "2024-06-10",
        link: "https://docs.google.com/document/d/1n_jBCmsP4KhvknYpGTkNSrhOcTjA_03gCaggx5cgPYk"
    },
    // Add more papers as needed
    {
        title: "Developement of Youths &Sports In India",
        authors: "~ Subhankar Mohapatra,Subhasish Rath",
        date: "2024-10-05",
        link: "https://docs.google.com/document/d/1r7O03guCAVnlZI_GCVMRtp6xoT_mhHRD"
    },
    {
        title: "Women Safety In India",
        authors: "~Suman Dey",
        date: "2024-04-16",
        link: "https://docs.google.com/document/d/1fazOWOaxXu2-noF3kpGIu5csMqJGSZ3_"
    },






];


function displayPapers() {
    const paperList = document.getElementById('paper-list');
    papers.forEach(paper => {
        const paperItem = document.createElement('div');
        paperItem.className = 'paper-item';
        paperItem.innerHTML = `
            <h3>${paper.title}</h3>
            <p><strong>Authors:</strong> ${paper.authors}</p>
            <p><strong>Published on:</strong> ${paper.date}</p>
            <a href="${paper.link}" target="_blank">Read Paper</a>
        `;
        paperList.appendChild(paperItem);
    });
}

document.addEventListener('DOMContentLoaded', displayPapers);
