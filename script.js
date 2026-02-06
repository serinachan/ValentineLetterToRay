const message = `I don’t even know if you’ll ever read this.\nBut if you do…\n\n I always love you and love you and you only you. I admire you, aku happy banget bisa ngerayain valentine sama kamu, yang kedua kali ini hehe.\n\nI hope then we can still celebrate together.\n\nAnyway, I hope you're doing okay \n\nILY 224 ❤️‍🔥 `;

function showLetter() {
  document.getElementById("introText").style.opacity = 0;
  document.querySelector(".btn").style.display = "none";

  setTimeout(() => {
    const letterBox = document.getElementById("letterBox");
    const typedText = document.getElementById("typedText");
    letterBox.style.display = "block";
    let i = 0;

    function typeWriter() {
      if (i < message.length) {
        typedText.innerHTML += message.charAt(i);
        i++;
        setTimeout(typeWriter, 30);
      }
    }

    typeWriter();
  }, 600);
}
