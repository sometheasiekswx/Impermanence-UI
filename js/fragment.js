class ElementFragmenter {
  isFramentable(element) {
    return element.hasAttribute && element.hasAttribute('data-include');
  }

  constructor(element) {
    if (this.isFramentable(element)) {
      this.element = element;
    } else {
      throw new Error('Invalid Argument. Element must be framentable.');
    }

    this.path = element.getAttribute('data-include');
    this.localTest = /^(?:file):/;
    this.xmlhttp = new XMLHttpRequest();
    this.status = 0;
  }

  fragment() {
    this.setXmlhttpOnreadystatechange();
    this.sendXmlhttpPath();
  }

  setXmlhttpOnreadystatechange() {
    this.xmlhttp.onreadystatechange = () => {
      this.status = this.checkReadyState();

      if (this.xmlhttp.readyState == 4 && this.status == 200) {
        this.element.outerHTML = this.xmlhttp.responseText;
      }
    };
  }

  sendXmlhttpPath() {
    try {
      this.xmlhttp.open('GET', this.path, true);
      this.xmlhttp.send();
    } catch (error) {
      console.log(error);
    }
  }

  checkReadyState() {
    if (this.xmlhttp.readyState == 4) {
      return this.xmlhttp.status;
    }
    if (this.localTest.test(location.href) && this.xmlhttp.responseText) {
      return 200;
    }
  }
}

window.onload = () => {
  const elements = document.getElementsByTagName('*');
  for (let i in elements) {
    try {
      const fragmenter = new ElementFragmenter(elements[i]);
      fragmenter.fragment();
    } catch (error) {}
  }
};
