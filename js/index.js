console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

window.addEventListener("DOMContentLoaded", () => {
  const commentList = document.querySelector(".comment-list");

  const commentInput = document.querySelector("#comment-input");
  document.querySelector("#comment-form").addEventListener("submit", (e) => {
    e.preventDefault();
    const comment = commentInput.value;
    commentInput.value = "";
    console.log(comment);
    const commentItem = createCommentItem();
    const commentAuthor = createCommentAuthor();
    const logo = createLogo();
    const nickname = createNickname();
    const commentContent = createComment(comment);
    commentAuthor.appendChild(logo);
    commentAuthor.appendChild(nickname);
    commentItem.appendChild(commentAuthor);
    commentItem.appendChild(commentContent);
    commentList.appendChild(commentItem);
  });
});

function createCommentItem() {
  const commentDom = document.createElement("div");
  commentDom.classList.add("comment-item");
  return commentDom;
}

function createCommentAuthor() {
  const commentAuthor = document.createElement("div");
  commentAuthor.classList.add("comment-author");
  return commentAuthor;
}

function createLogo() {
  const logoImg = document.createElement("img");
  logoImg.src = "./images/comment-author-icon.png";
  logoImg.classList.add("logo");
  logoImg.alt = "사용자 프로필 이미지";
  return logoImg;
}

function createNickname() {
  const nickname = document.createElement("span");
  nickname.textContent = "방문자";
  return nickname;
}

function createComment(content) {
  const comment = document.createElement("div");
  comment.classList.add("comment-content");
  comment.textContent = content;
  return comment;
}
