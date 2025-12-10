/** Chunk was on web.js **/
/** chunk id: 666187, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => S
}), require("./539854.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk772848 = require("./772848.js"),
  Chunk793030 = require("./793030.js"),
  Chunk15127 = require("./15127.jsx"),
  Chunk993365 = require("./993365.js"),
  Chunk639317 = require("./639317.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk8542 = require("./8542.js"),
  Chunk979712 = require("./979712.js"),
  Chunk154257 = require("./154257.js");

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
class S extends(r = Chunk473749.Component) {
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
      return (0, Chunk54381.jsxs)("div", {
        className: s()(Chunk8542.maxLength, {
          [Chunk8542.errorOverflow]: this.hasError()
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
    return null == module ? null : (0, Chunk54381.jsx)("div", {
      className: s()(Chunk8542.maxLength, {
        [Chunk8542.errorOverflow]: module < 0
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
    return null != module && "" === module || null === module ? null : true !== module ? module : false === this.state.dirty ? null : null != r ? r : Chunk54381
  }
  renderErrorMessage() {
    let e = this.getErrorMessage();
    return null == module ? null : (0, Chunk54381.jsx)(Chunk993365.x, {
      id: E,
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: Chunk8542.errorMessage,
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
      rows: S,
      flex: I,
      autosize: T,
      required: C,
      onInvalid: A,
      inputRef: N
    } = this.props, P = T ? Chunk639317.g : "textarea", R = this.hasError(), D = null != (t = this.props["aria-labelledby"]) ? exports : null == (e = this.context) ? true : module.titleId, w = this.getAriaDescribedBy();
    return (0, Chunk54381.jsxs)("div", {
      className: s()(Chunk979712.inputWrapper, {
        [Chunk8542.flex]: I
      }),
      children: [(0, Chunk54381.jsxs)("div", {
        className: s()(Chunk8542.inputMaxLength, {
          [Chunk8542.flex]: I
        }),
        children: [(0, Chunk54381.jsx)(Chunk793030.tEY, {
          children: (0, Chunk54381.jsx)(P, {
            type: "text",
            className: s()(Chunk979712.input, Chunk8542.textArea, Chunk154257.scrollbarDefault, O, {
              [Chunk979712.error]: R,
              [Chunk979712.disabled]: require,
              [Chunk8542.resizeable]: E
            }),
            "aria-labelledby": D,
            "aria-describedby": w,
            "aria-invalid": R,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: v,
            disabled: require,
            placeholder: Chunk473749,
            value: r,
            autoFocus: Chunk120356,
            minLength: Chunk772848,
            maxLength: Chunk993365 ? true : Chunk15127,
            spellCheck: g,
            required: C,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: A,
            rows: S,
            ref: N
          })
        }), null != Chunk772848 && (0, Chunk54381.jsx)(Chunk793030.nn4, {
          id: b,
          children: Chunk388032.intl.format(Chunk388032.t["bmQU//"], {
            minLength: Chunk772848
          })
        }), null != Chunk15127 && (0, Chunk54381.jsx)(Chunk793030.nn4, {
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
g(S, "contextType", Chunk15127.q3), g(S, "defaultProps", {
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