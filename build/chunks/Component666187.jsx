/** Chunk was on web.js **/
/** chunk id: 666187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => T
}), require("./539854.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk766646 = require("./766646.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk639317 = require("./639317.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk258422 = require("./258422.js"),
  Chunk219990 = require("./219990.js"),
  Chunk525685 = require("./525685.js");

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
class T extends(r = Chunk647438.Component) {
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
    } = this.props, r = this.getIsOverflowing() ? Chunk388032.intl.formatToPlainString(Chunk388032.t.ICT5S0, {
      maxLength: exports
    }) : null, i = this.getIsUnderflowing() ? Chunk388032.intl.formatToPlainString(Chunk388032.t["62rk1N"], {
      minLength: require
    }) : null;
    return null != module && "" === module || null === module ? null : true !== module ? module : false === this.state.dirty ? null : null != r ? r : Chunk951288
  }
  renderErrorMessage() {
    let e = this.getErrorMessage();
    return null == module ? null : (0, Chunk951288.jsx)(Chunk993365.x, {
      id: b,
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
      allowOverflow: f,
      spellCheck: E,
      resizeable: b,
      className: v,
      id: I,
      rows: T,
      flex: S,
      autosize: A,
      required: C,
      onInvalid: N,
      inputRef: R
    } = this.props, P = A ? Chunk639317.g : "textarea", w = this.hasError(), D = null != (t = this.props["aria-labelledby"]) ? exports : null == (e = this.context) ? true : module.titleId, x = this.getAriaDescribedBy();
    return (0, Chunk951288.jsxs)("div", {
      className: s()(Chunk219990.inputWrapper, {
        [Chunk258422.flex]: S
      }),
      children: [(0, Chunk951288.jsxs)("div", {
        className: s()(Chunk258422.inputMaxLength, {
          [Chunk258422.flex]: S
        }),
        children: [(0, Chunk951288.jsx)(Chunk793030.tEY, {
          children: (0, Chunk951288.jsx)(P, {
            type: "text",
            className: s()(Chunk219990.input, Chunk258422.textArea, Chunk525685.scrollbarDefault, v, {
              [Chunk219990.error]: w,
              [Chunk219990.disabled]: require,
              [Chunk258422.resizeable]: b
            }),
            "aria-labelledby": D,
            "aria-describedby": x,
            "aria-invalid": w,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: I,
            disabled: require,
            placeholder: Chunk647438,
            value: r,
            autoFocus: Chunk120356,
            minLength: Chunk772848,
            maxLength: Chunk993365 ? true : Chunk15127,
            spellCheck: E,
            required: C,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: N,
            rows: T,
            ref: R
          })
        }), null != Chunk772848 && (0, Chunk951288.jsx)(Chunk766646.n, {
          id: y,
          children: Chunk388032.intl.format(Chunk388032.t["bmQU//"], {
            minLength: Chunk772848
          })
        }), null != Chunk15127 && (0, Chunk951288.jsx)(Chunk766646.n, {
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
      } = this.props, i = [], a = null == (e = this.context) ? true : e.errorId;
      return null != a && i.push(a), null != r ? i.push(b) : (null != t && i.push(O), null != n && i.push(y)), i.length > 0 ? i.join(" ") : true
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