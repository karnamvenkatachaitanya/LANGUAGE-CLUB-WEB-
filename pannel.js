document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("toggleButton");
  const tableContainer = document.getElementById("table-container");
  const toggleShowMoreButton = document.getElementById("showMoreButton");
  const memberCountText = document.getElementById("memberCount");
  const memberTableBody = document.getElementById("memberTableBody");
  const backToTopButton = document.getElementById("backToTop");

  const members = [
      { name: "XXXX", roll: "21KB5AXXXX", year: 4, branch: "CSE", email: "XXXX@ieee.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "AI&DS", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "AI&DS", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "21KB5AXXXX", year: 4, branch: "CSE", email: "XXXX@ieee.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "AI&DS", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "AI&DS", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "21KB5AXXXX", year: 4, branch: "CSE", email: "XXXX@ieee.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "21KB5AXXXX", year: 4, branch: "CSE", email: "XXXX@ieee.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "AI&DS", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "AI&DS", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" },
      { name: "XXXX", roll: "21KB5AXXXX", year: 4, branch: "CSE", email: "XXXX@ieee.org", linkedin: "#" },
      { name: "XXXX", roll: "22KB1AXXXX", year: 3, branch: "CSE", email: "22KB1AXXXX@nbkrist.org", linkedin: "#" }
  ];

  memberCountText.textContent = `Total Members: ${members.length}`;

  let visibleCount = 5;

  function renderMembers() {
      memberTableBody.innerHTML = "";
      members.slice(0, visibleCount).forEach(member => {
          const row = document.createElement("tr");
          row.innerHTML = `
              <td>${member.name}</td>
              <td>${member.roll}</td>
              <td>${member.year}</td>
              <td>${member.branch}</td>
              <td>${member.email}</td>
              <td><a href="${member.linkedin}" target="_blank">LinkedIn</a></td>
          `;
          memberTableBody.appendChild(row);
      });

      if (visibleCount >= members.length) {
          toggleShowMoreButton.textContent = "Show Less";
      } else {
          toggleShowMoreButton.textContent = "Show More";
      }
  }

  renderMembers();

  toggleButton.addEventListener("click", function () {
      tableContainer.style.display = tableContainer.style.display === "none" ? "block" : "none";
      this.textContent = tableContainer.style.display === "none" ? "Show Members" : "Hide Members";
  });

  toggleShowMoreButton.addEventListener("click", function () {
      if (visibleCount >= members.length) {
          visibleCount = 5;
      } else {
          visibleCount += 5;
      }
      renderMembers();
  });

  // Back to Top functionality
  window.addEventListener('scroll', () => {
      if (window.pageYOffset > 300) {
          backToTopButton.style.display = 'inline-flex';
      } else {
          backToTopButton.style.display = 'none';
      }
  });

  backToTopButton.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
