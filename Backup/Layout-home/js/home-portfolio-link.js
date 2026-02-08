document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".card-btn[data-project]").forEach(button => {
        button.addEventListener("click", () => {
            const projectId = button.dataset.project;
            window.location.href =
                `/Layout-portfolio/html/index-portfolio.html?project=${projectId}`;
        });
    });
});
