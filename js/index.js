function getInput() {
  const typped = document.getElementById("input1").value;
  alert("댓글이 등록되었습니다");

  const ul = document.querySelector(".comment-list");
  const li = document.querySelector("li").cloneNode(true);

  li.querySelector(".comment-content").innerText = typped;
  ul.appendChild(li);
}
