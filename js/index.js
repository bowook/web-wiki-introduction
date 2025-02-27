function getInput() {
  const typped = document.getElementById("input1").value;
  if (typped == '') {
    alert("댓글을 입력하셔야 합니다.");
    return;
  }
  alert("댓글이 등록되었습니다");

  const ul = document.querySelector(".comment-list");
  const li = document.querySelector("li").cloneNode(true);

  li.querySelector(".comment-content").innerText = typped;
  ul.appendChild(li);
}
