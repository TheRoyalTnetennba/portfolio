class Skill {
  constructor() {
    this.setup()
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  setup() {
    this.skills = document.getElementsByClassName('skill-icon');
    for (let i = 0; i < this.skills.length; i++) {
      this.skills[i].addEventListener("mouseover", e => this.handleMouseOver(e))
      this.skills[i].addEventListener("mouseout", e => this.handleMouseOut(e))
    }
  }

  handleMouseOver(e) {
    e.target.classList.add('skill-icon-active');
  }

  handleMouseOut(e) {
    e.target.classList.remove('skill-icon-active');
  }




}

export default Skill;
