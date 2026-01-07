/** Chunk was on web.js **/
/** chunk id: 649724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => h,
  u: () => m
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk153066 = require("./153066.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk802869 = require("./802869.js");

function _(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let m = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class h extends(r = Chunk473749.PureComponent) {
  select() {
    var e;
    null == (e = this.inputRef.current) || e.select()
  }
  renderInput(e) {
    var t;
    let {
      value: n,
      mode: r,
      autoFocus: a,
      spellCheck: o,
      inputClassName: l,
      placeholder: c
    } = this.props, u = null == (t = this.context) ? true : t.titleId;
    return (0, i.jsx)("input", {
      className: s()((0, d.l)(p, "input", r), l, {
        [p.inputHidden]: e
      }),
      ref: this.inputRef,
      type: "text",
      value: n,
      onClick: this.handleInputClick,
      readOnly: true,
      "aria-labelledby": u,
      autoFocus: a,
      spellCheck: o,
      placeholder: c
    })
  }
  render() {
    let e, {
        text: t = f.intl.string(f.t.OpuAlK),
        mode: n,
        hideMessage: r,
        className: a,
        buttonLook: o,
        supportsCopy: _,
        disabled: h
      } = this.props,
      g = null != r;
    switch (n) {
      case m.SUCCESS:
        e = l.Tt.GREEN;
        break;
      case m.ERROR:
        e = l.Tt.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, i.jsx)(c.tEY, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, i.jsx)("div", {
        className: s()((0, d.l)(p, "copyInput", n), a),
        ref: this.containerRef,
        children: (0, i.jsxs)(u.Z, {
          className: p.layout,
          children: [(0, i.jsxs)(u.Z, {
            className: p.inputWrapper,
            children: [this.renderInput(g), g ? (0, i.jsx)("div", {
              className: p.hiddenMessage,
              children: r
            }) : null]
          }), _ ? (0, i.jsx)(u.Z, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, i.jsx)(l.zx, {
              "data-migration-pending": true,
              className: p.button,
              onClick: this.handleButtonClick,
              size: l.Ph.MIN,
              color: e,
              look: o,
              disabled: h,
              children: t
            })
          }) : null]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), _(this, "inputRef", a.createRef()), _(this, "containerRef", a.createRef()), _(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }), _(this, "handleInputClick", () => {
      this.select()
    })
  }
}
_(h, "contextType", Chunk481060.q3N), _(h, "defaultProps", {
  supportsCopy: true,
  buttonColor: Chunk755721.Tt.PRIMARY,
  buttonLook: Chunk755721.iL.FILLED,
  mode: m.DEFAULT
}), _(h, "Modes", m), _(h, "ButtonColors", Chunk755721.Tt), _(h, "ButtonLooks", Chunk755721.iL)