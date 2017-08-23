class Skill {
  constructor() {
    this.setup()
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  setup() {
    this.skills = document.getElementsByClassName('skill-icon');
    this.skills.forEach(skill => skill.addEventListener("mouseover", this.handleMouseOver, false);)
    this.skills.forEach(skill => skill.addEventListener("mouseout", this.handleMouseOut, false);)
  }

  handleMouseOver() {
    classList.add("otherclass");
  }

  handleMouseOut() {
    classList.remove("otherclass");
  }




}

export default Skill;
