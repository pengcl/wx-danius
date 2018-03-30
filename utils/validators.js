const createValidator = (control) => {
  let regex = null;

  if (control.inputRegex) {
    if (typeof control.inputRegex === 'string') {
      regex = new RegExp(`^${control.inputRegex}$`);
    } else {
      regex = control.inputRegex;
    }
  }

  if (control.inputtype) {
    switch (control.inputtype) {
      case 'number':
        regex = /^[0-9]+$/;
        break;
      case 'digit':
        regex = /^[.0-9]+$/;
        break;
      case 'tel':
        regex = /^[-.0-9]+$/;
        break;
      case 'email':
        regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        break;
      case 'mobile':
        regex = /^1[0-9]{10}$/;
        break;
      case 'idcard': // 身份证
        regex = /^[X0-9]{15,18}$/;
        break;
    }
  }
  return regex;
}

const validator = (control) => {
  let value = control.value;
  if (control.value == null || control.value.length === 0) {
    if (control.required !== undefined) {
      return false;
    }

    return true;
  }

  /*
  if (this.cleaner && value.includes(' ')) {
    value = value.replace(/ /g, '');
    control.setValue(value);
  }
  */

  return control.regex === null || control.regex.test(value) ? true : false;
};

module.exports = {
  validate: (control) => {
    control.regex = createValidator(control);
    return validator(control);
  },
  validates: (e) => {
    console.log(e);
    /*
    controls.forEach(control => {
      const regex = createValidator(control);
      if (!validator(control)) {
        return false;
      }
    });
    return true;
    */
  }
}