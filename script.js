const form = document.querySelector("form")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add)

function add() {
  const today = "01-13"

  const dayExists = nlwSetup.dayExists(today)

  if (dayExists) {
    alert("Dia já existe")
    return
  }

  alert("Adicionado com sucesso - "+ today)
  nlwSetup.addDay(today)
}

// const data = {
//   meditation: ["01-20", "01-21", "01-22", "01-23"],
//   sun: ["01-19", "01-22"],
//   food: ["01-08"],
// }

nlwSetup.setData(data)
nlwSetup.load()
