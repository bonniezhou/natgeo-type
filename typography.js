const cssClasses = {
  xShort: 'mdc-typography--headline1-char-responsive--x-short',
  short: 'mdc-typography--headline1-char-responsive--short',
  medium: 'mdc-typography--headline1-char-responsive--medium',
  long: 'mdc-typography--headline1-char-responsive--long',
};

export default class MDCTypography {
  static get cssClasses() {
    return cssClasses;
  }

  constructor(root) {
    this.root_ = root;
    this.xShortMax_ = 20;
    this.shortMax_ = 40;
    this.mediumMax_ = 60;

    this.sizeTitle(this.root_);
  }

  set text(text) {
    this.root_.textContent = text;
    this.sizeTitle(this.root_);
  }

  set xShortMax(xShortMax) {
    this.xShortMax_ = xShortMax;
  }

  set shortMax(shortMax) {
    this.shortMax_ = shortMax;
  }

  set mediumMax(mediumMax) {
    this.mediumMax_ = mediumMax;
  }

  sizeTitle(headline) {
    for (var key in cssClasses) {
      headline.classList.remove(cssClasses[key]);
    }
  
    const title = headline.innerText;
    if (title.length <= this.xShortMax_) {
      headline.classList.add(cssClasses.xShort);
    } else if (title.length <= this.shortMax_) {
      headline.classList.add(cssClasses.short);
    } else if (title.length <= this.mediumMax_) {
      headline.classList.add(cssClasses.medium);
    } else {
      headline.classList.add(cssClasses.long);
    }
  }
}
