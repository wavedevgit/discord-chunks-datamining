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
  Chunk132648 = require("./132648.js"),
  Chunk191228 = require("./191228.js"),
  Chunk164701 = require("./164701.js");

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
    if (null == e) return O;
    let n = "".concat(e).length;
    return t && (n += "".concat(e, " / ").length), v * n + O
  }
  getCharsLeftLength() {
    let {
      maxLength: e,
      value: t
    } = this.props;
    return null == e ? null : e - (null != t ? t.length : 0)
  }
  getIsOverflowing() {
    let e = this.getCharsLeftLength();
    return null != e && e < 0
  }
  getIsUnderflowing() {
    let {
      minLength: e,
      value: t
    } = this.props;
    return null != e && (null != t ? t.length : 0) < e
  }
  renderCharacterCount() {
    if (this.props.showCharacterCount) {
      var e;
      let {
        value: t,
        maxLength: n
      } = this.props;
      return (0, i.jsxs)("div", {
        className: s()(_.maxLength, {
          [_.errorOverflow]: this.hasError()
        }),
        "aria-hidden": "true",
        children: [null != (e = null == t ? true : t.length) ? e : 0, " ", null != n && "/ ".concat(n)]
      })
    }
    return null
  }
  renderMaxLength() {
    if (this.props.showCharacterCount || false === this.props.showRemainingCharacterCount) return null;
    let e = this.getCharsLeftLength();
    return null == e ? null : (0, i.jsx)("div", {
      className: s()(_.maxLength, {
        [_.errorOverflow]: e < 0
      }),
      "aria-hidden": "true",
      children: e
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
    } = this.props, r = this.getIsOverflowing() ? p.intl.formatToPlainString(p.t.ICT5S6, {
      maxLength: t
    }) : null, i = this.getIsUnderflowing() ? p.intl.formatToPlainString(p.t["62rk1K"], {
      minLength: n
    }) : null;
    return null != e && "" === e || null === e ? null : true !== e ? e : false === this.state.dirty ? null : null != r ? r : i
  }
  renderErrorMessage() {
    let e = this.getErrorMessage();
    return null == e ? null : (0, i.jsx)(d.x, {
      id: E,
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: _.errorMessage,
      children: e
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
    } = this.props, P = T ? f.g : "textarea", w = this.hasError(), R = null != (t = this.props["aria-labelledby"]) ? t : null == (e = this.context) ? true : e.titleId, D = this.getAriaDescribedBy();
    return (0, i.jsxs)("div", {
      className: s()(h.inputWrapper, {
        [_.flex]: I
      }),
      children: [(0, i.jsxs)("div", {
        className: s()(_.inputMaxLength, {
          [_.flex]: I
        }),
        children: [(0, i.jsx)(c.tEY, {
          children: (0, i.jsx)(P, {
            type: "text",
            className: s()(h.input, _.textArea, m.scrollbarDefault, O, {
              [h.error]: w,
              [h.disabled]: n,
              [_.resizeable]: E
            }),
            "aria-labelledby": R,
            "aria-describedby": D,
            "aria-invalid": w,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: v,
            disabled: n,
            placeholder: a,
            value: r,
            autoFocus: o,
            minLength: l,
            maxLength: d ? true : u,
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
        }), null != l && (0, i.jsx)(c.nn4, {
          id: b,
          children: p.intl.format(p.t["bmQU//"], {
            minLength: l
          })
        }), null != u && (0, i.jsx)(c.nn4, {
          id: y,
          children: p.intl.format(p.t["+DFxLc"], {
            maxLength: u
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