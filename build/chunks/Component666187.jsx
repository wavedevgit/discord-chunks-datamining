/** Chunk was on web.js **/
/** chunk id: 666187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => T
}), require("./539854.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk84735 = require("./84735.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk766646 = require("./766646.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk179240 = require("./179240.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk352158 = require("./352158.js"),
  Chunk769255 = require("./769255.js"),
  Chunk951173 = require("./951173.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = (0, Chunk772848.Z)(),
  y = (0, Chunk772848.Z)(),
  O = (0, Chunk772848.Z)(),
  v = 10,
  I = 7.23;
class T extends(r = Chunk73800.Component) {
  getPaddingRight() {
    let {
      maxLength: e,
      showCharacterCountFullPadding: t
    } = this.props;
    if (null == module) return v;
    let n = "".concat(module).length;
    return exports && (n += "".concat(module, " / ").length), I * require + v
  }
  getCharsLeftLength() {
    let {
      maxLength: e,
      value: t
    } = this.props;
    return null == module ? null : module - (null != exports ? exports.length : 0)
  }
  getIsOverflowing() {
    let e = this.getCharsLeftLength();
    return null != module && module < 0
  }
  getIsUnderflowing() {
    let {
      minLength: e,
      value: t
    } = this.props;
    return null != module && (null != exports ? exports.length : 0) < module
  }
  renderCharacterCount() {
    if (this.props.showCharacterCount) {
      var e;
      let {
        value: t,
        maxLength: n
      } = this.props;
      return (0, Chunk255367.jsxs)("div", {
        className: s()(Chunk352158.maxLength, {
          [Chunk352158.errorOverflow]: this.hasError()
        }),
        "aria-hidden": "true",
        children: [null != (e = null == exports ? true : exports.length) ? module : 0, " ", null != require && "/ ".concat(require)]
      })
    }
    return null
  }
  renderMaxLength() {
    if (this.props.showCharacterCount || false === this.props.showRemainingCharacterCount) return null;
    let e = this.getCharsLeftLength();
    return null == module ? null : (0, Chunk255367.jsx)("div", {
      className: s()(Chunk352158.maxLength, {
        [Chunk352158.errorOverflow]: module < 0
      }),
      "aria-hidden": "true",
      children: module
    })
  }
  hasError() {
    return null != this.props.error || null != this.context.error || false !== this.state.dirty && (this.getIsOverflowing() || this.getIsUnderflowing() || false)
  }
  getErrorMessage() {
    let {
      error: e,
      maxLength: t,
      minLength: n
    } = this.props, r = this.getIsOverflowing() ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ICT5S0, {
      maxLength: exports
    }) : null, i = this.getIsUnderflowing() ? Chunk388032.intl.formatToPlainString(Chunk388032.t["62rk1N"], {
      minLength: require
    }) : null;
    return null != module && "" === module || null === module ? null : true !== module ? module : false === this.state.dirty ? null : null != r ? r : Chunk255367
  }
  renderErrorMessage() {
    let e = this.getErrorMessage();
    return null == module ? null : (0, Chunk255367.jsx)(Chunk993365.x, {
      id: b,
      variant: "text-xs/normal",
      color: "text-danger",
      className: Chunk352158.errorMessage,
      children: module
    })
  }
  render() {
    var e, t;
    let {
      disabled: n,
      value: r,
      placeholder: o,
      autoFocus: a,
      minLength: l,
      maxLength: u,
      allowOverflow: f,
      spellCheck: E,
      resizeable: b,
      className: v,
      id: I,
      rows: T,
      flex: S,
      autosize: A,
      required: N,
      onInvalid: C,
      inputRef: R
    } = this.props, P = A ? Chunk179240.l : "textarea", w = this.hasError(), D = null != (t = this.props["aria-labelledby"]) ? exports : null == (e = this.context) ? true : module.titleId, L = this.getAriaDescribedBy();
    return (0, Chunk255367.jsxs)("div", {
      className: s()(Chunk769255.inputWrapper, {
        [Chunk352158.flex]: S
      }),
      children: [(0, Chunk255367.jsxs)("div", {
        className: s()(Chunk352158.inputMaxLength, {
          [Chunk352158.flex]: S
        }),
        children: [(0, Chunk255367.jsx)(Chunk84735.t, {
          children: (0, Chunk255367.jsx)(P, {
            type: "text",
            className: s()(Chunk769255.input, Chunk352158.textArea, Chunk951173.scrollbarDefault, v, {
              [Chunk769255.error]: w,
              [Chunk769255.disabled]: require,
              [Chunk352158.resizeable]: b
            }),
            "aria-labelledby": D,
            "aria-describedby": L,
            "aria-invalid": w,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: I,
            disabled: require,
            placeholder: Chunk73800,
            value: r,
            autoFocus: Chunk120356,
            minLength: Chunk772848,
            maxLength: Chunk993365 ? true : Chunk15127,
            spellCheck: E,
            required: N,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: C,
            rows: T,
            ref: R
          })
        }), null != Chunk772848 && (0, Chunk255367.jsx)(Chunk766646.n, {
          id: y,
          children: Chunk388032.intl.format(Chunk388032.t["bmQU//"], {
            minLength: Chunk772848
          })
        }), null != Chunk15127 && (0, Chunk255367.jsx)(Chunk766646.n, {
          id: O,
          children: Chunk388032.intl.format(Chunk388032.t["+DFxLS"], {
            maxLength: Chunk15127
          })
        }), this.renderCharacterCount(), this.renderMaxLength()]
      }), this.renderErrorMessage()]
    })
  }
  constructor(e) {
    var t;
    super(e), E(this, "getAriaDescribedBy", () => {
      var e;
      let {
        maxLength: t,
        minLength: n,
        error: r
      } = this.props, i = [], o = null == (e = this.context) ? true : e.errorId;
      return null != o && i.push(o), null != r ? i.push(b) : (null != t && i.push(O), null != n && i.push(y)), i.length > 0 ? i.join(" ") : true
    }), E(this, "onChange", e => {
      let {
        onChange: t,
        name: n
      } = this.props;
      null == t || t(e.currentTarget.value, n), this.setState({
        dirty: true
      })
    }), E(this, "onFocus", e => {
      let {
        onFocus: t,
        name: n
      } = this.props;
      null == t || t(e, n)
    }), E(this, "onBlur", e => {
      let {
        onBlur: t,
        name: n
      } = this.props;
      null == t || t(e, n)
    }), E(this, "onKeyDown", e => {
      let {
        onKeyDown: t
      } = this.props;
      null == t || t(e)
    }), this.state = {
      dirty: null != (t = e.defaultDirty) && t
    }
  }
}
E(T, "contextType", Chunk15127.q3), E(T, "defaultProps", {
  name: "",
  disabled: false,
  placeholder: "",
  autoFocus: false,
  resizeable: false,
  flex: false,
  autosize: false,
  rows: 3,
  allowOverflow: false
})