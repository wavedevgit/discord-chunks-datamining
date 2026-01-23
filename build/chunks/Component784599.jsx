/** Chunk was on web.js **/
/** chunk id: 784599, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  U: () => A
}), require("./321073.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk158954 = require("./158954.js"),
  Chunk504345 = require("./504345.jsx"),
  Chunk571356 = require("./571356.js"),
  Chunk826745 = require("./826745.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk648359 = require("./648359.js"),
  Chunk713545 = require("./713545.js"),
  Chunk829681 = require("./829681.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let E = (0, Chunk835245.A)(),
  y = (0, Chunk835245.A)(),
  b = (0, Chunk835245.A)(),
  O = 10,
  v = 7.23;
class A extends(r = Chunk64700.Component) {
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
        className: o()(_.Ru, {
          [_.hz]: this.hasError()
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
      className: o()(_.Ru, {
        [_.hz]: e < 0
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
    return null == e ? null : (0, i.jsx)(d.E, {
      id: E,
      variant: "text-xs/normal",
      color: "text-feedback-critical",
      className: _.gJ,
      children: e
    })
  }
  render() {
    var e, t;
    let {
      disabled: n,
      value: r,
      placeholder: a,
      autoFocus: s,
      minLength: l,
      maxLength: u,
      allowOverflow: d,
      spellCheck: g,
      resizeable: E,
      className: O,
      id: v,
      rows: A,
      flex: I,
      autosize: S,
      required: T,
      onInvalid: C,
      inputRef: N
    } = this.props, w = S ? f.y : "textarea", R = this.hasError(), P = null != (e = this.props["aria-labelledby"]) ? e : null == (t = this.context) ? true : t.titleId, D = this.getAriaDescribedBy();
    return (0, i.jsxs)("div", {
      className: o()(h.I6, {
        [_.Uu]: I
      }),
      children: [(0, i.jsxs)("div", {
        className: o()(_.b4, {
          [_.Uu]: I
        }),
        children: [(0, i.jsx)(c.vN3, {
          children: (0, i.jsx)(w, {
            type: "text",
            className: o()(h.hF, _.Tg, m.qD, O, {
              [h.z3]: R,
              [h.r9]: n,
              [_.Xl]: E
            }),
            "aria-labelledby": P,
            "aria-describedby": D,
            "aria-invalid": R,
            style: {
              paddingRight: this.getPaddingRight()
            },
            id: v,
            disabled: n,
            placeholder: a,
            value: r,
            autoFocus: s,
            minLength: l,
            maxLength: d ? true : u,
            spellCheck: g,
            required: T,
            onChange: this.onChange,
            onBlur: this.onBlur,
            onFocus: this.onFocus,
            onKeyDown: this.onKeyDown,
            onInvalid: C,
            rows: A,
            ref: N
          })
        }), null != l && (0, i.jsx)(c.AC4, {
          id: y,
          children: p.intl.format(p.t["bmQU//"], {
            minLength: l
          })
        }), null != u && (0, i.jsx)(c.AC4, {
          id: b,
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
      return null != a && i.push(a), null != r ? i.push(E) : (null != t && i.push(b), null != n && i.push(y)), i.length > 0 ? i.join(" ") : true
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
g(A, "contextType", Chunk504345.cK), g(A, "defaultProps", {
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