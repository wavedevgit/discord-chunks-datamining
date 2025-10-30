/** Chunk was on web.js **/
/** chunk id: 666187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => I
}), require("./539854.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk639317 = require("./639317.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258422 = require("./258422.js"),
  Chunk219990 = require("./219990.js"),
  Chunk525685 = require("./525685.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = (0, Chunk772848.Z)(),
  b = (0, Chunk772848.Z)(),
  y = (0, Chunk772848.Z)(),
  O = 10,
  v = 7.23;
class I extends(r = Chunk647438.Component) {
  getPaddingRight() {
    let {
      maxLength: e,
      showCharacterCountFullPadding: t
    } = this.props;
    if (null == module) return O;
    let n = "".concat(module).length;
    return exports && (n += "".concat(module, " / ").length), v * require + O
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
      return (0, Chunk951288.jsxs)("div", {
        className: s()(Chunk258422.maxLength, {
          [Chunk258422.errorOverflow]: this.hasError()
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
    return null == module ? null : (0, Chunk951288.jsx)("div", {
      className: s()(Chunk258422.maxLength, {
        [Chunk258422.errorOverflow]: module < 0
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
    } = this.props, r = this.getIsOverflowing() ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ICT5S6, {
      maxLength: exports
    }) : null, i = this.getIsUnderflowing() ? Chunk388032.intl.formatToPlainString(Chunk388032.t["62rk1K"], {
      minLength: require
    }) : null;
    return null != module && "" === module || null === module ? null : true !== module ? module : false === this.state.dirty ? null : null != r ? r : Chunk951288
  }
  renderErrorMessage() {
    let e = this.getErrorMessage();
    return null == module ? null : (0, Chunk951288.jsx)(Chunk993365.x, {
      id: E,
      variant: "text-xs/normal",
      color: "text-danger",
      className: Chunk258422.errorMessage,
      children: module
    })
  }
  render() {
    var e, t;
    let {
      disabled: n,
      value: r,
      placeholder: a,
      autoFocus: o,
      minLength: l,
      maxLength: u,
      allowOverflow: d,
      spellCheck: g,
      resizeable: E,
      className: O,
      id: v,
      rows: I,
      flex: T,
      autosize: S,
      required: A,
      onInvalid: C,
      inputRef: N
    } = this.props, R = S ? Chunk639317.g : "textarea", P = this.hasError(), w = null != (t = this.props["aria-labelledby"]) ? exports : null == (e = this.context) ? true : module.titleId, D = this.getAriaDescribedBy();
    return (0, Chunk951288.jsxs)("div", {
      className: s()(Chunk219990.inputWrapper, {
        [Chunk258422.flex]: T
      }),
      children: [(0, Chunk951288.jsxs)("div", {
        className: s()(Chunk258422.inputMaxLength, {
          [Chunk258422.flex]: T
        }),
        children: [(0, Chunk951288.jsx)(Chunk793030.tEY, {
          children: (0, Chunk951288.jsx)(R, {
            type: "text",
            className: s()(Chunk219990.input, Chunk258422.textArea, Chunk525685.scrollbarDefault, O, {
              [Chunk219990.error]: P,
              [Chunk219990.disabled]: require,
              [Chunk258422.resizeable]: E
            }),
            "aria-labelledby": w,
            "aria-describedby": D,
            "aria-invalid": P,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: v,
            disabled: require,
            placeholder: Chunk647438,
            value: r,
            autoFocus: Chunk120356,
            minLength: Chunk772848,
            maxLength: Chunk993365 ? true : Chunk15127,
            spellCheck: g,
            required: A,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: C,
            rows: I,
            ref: N
          })
        }), null != Chunk772848 && (0, Chunk951288.jsx)(Chunk793030.nn4, {
          id: b,
          children: Chunk388032.intl.format(Chunk388032.t["bmQU//"], {
            minLength: Chunk772848
          })
        }), null != Chunk15127 && (0, Chunk951288.jsx)(Chunk793030.nn4, {
          id: y,
          children: Chunk388032.intl.format(Chunk388032.t["+DFxLc"], {
            maxLength: Chunk15127
          })
        }), this.renderCharacterCount(), this.renderMaxLength()]
      }), this.renderErrorMessage()]
    })
  }
  constructor(e) {
    var t;
    super(e), g(this, "getAriaDescribedBy", () => {
      var e;
      let {
        maxLength: t,
        minLength: n,
        error: r
      } = this.props, i = [], a = null == (e = this.context) ? true : e.errorId;
      return null != a && i.push(a), null != r ? i.push(E) : (null != t && i.push(y), null != n && i.push(b)), i.length > 0 ? i.join(" ") : true
    }), g(this, "onChange", e => {
      let {
        onChange: t,
        name: n
      } = this.props;
      null == t || t(e.currentTarget.value, n), this.setState({
        dirty: true
      })
    }), g(this, "onFocus", e => {
      let {
        onFocus: t,
        name: n
      } = this.props;
      null == t || t(e, n)
    }), g(this, "onBlur", e => {
      let {
        onBlur: t,
        name: n
      } = this.props;
      null == t || t(e, n)
    }), g(this, "onKeyDown", e => {
      let {
        onKeyDown: t
      } = this.props;
      null == t || t(e)
    }), this.state = {
      dirty: null != (t = e.defaultDirty) && t
    }
  }
}
g(I, "contextType", Chunk15127.q3), g(I, "defaultProps", {
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