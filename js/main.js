// text anime
const txtAnim= document.querySelector('.txtAnim')

new Typewriter(txtAnim,{
  // deley
  loop:true

})
.changeDelay(50)
.typeString("<h1 style=font-family:'hillshort';font-size:3rem;>Tongasoa eto amin'ny <span style=color:red>E</span>tic-<span style=color:red>G</span>ame </h1>")
.pauseFor(300)
.typeString("<span style=color:red>Mampiditra</span><span style=color:black>film</span>")
.pauseFor(1000)
.deleteChars(4)
.typeString("<span style=color:black>serie</span>")
.pauseFor(1000)
.deleteChars(5)
.typeString("<span style=color:black>jeux et logiciel</span>")
.start()
