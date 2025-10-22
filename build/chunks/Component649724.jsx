/** Chunk was on web.js **/
/** chunk id: 649724, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  k: () => m,
  u: () => h
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk153066 = require("./153066.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk326040 = require("./326040.js");

function p(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let h = {
  DEFAULT: "default",
  SUCCESS: "success",
  ERROR: "error"
};
class m extends(r = Chunk647438.PureComponent) {
  select() {
    var e;
    null == (e = this.inputRef.current) || module.select()
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
      className: s()((0, d.l)(_, "input", r), l, {
        [_.inputHidden]: e
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
        text: t = Chunk388032.intl.string(Chunk388032.t.OpuAlK),
        mode: n,
        hideMessage: r,
        className: a,
        buttonLook: o,
        supportsCopy: p,
        disabled: m
      } = this.props,
      g = null != r;
    switch (require) {
      case h.SUCCESS:
        e = Chunk755721.Tt.GREEN;
        break;
      case h.ERROR:
        e = Chunk755721.Tt.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, Chunk951288.jsx)(Chunk481060.tEY, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, Chunk951288.jsx)("div", {
        className: s()((0, Chunk153066.l)(Chunk326040, "copyInput", require), Chunk647438),
        ref: this.containerRef,
        children: (0, Chunk951288.jsxs)(Chunk600164.Z, {
          className: Chunk326040.layout,
          children: [(0, Chunk951288.jsxs)(Chunk600164.Z, {
            className: Chunk326040.inputWrapper,
            children: [this.renderInput(g), g ? (0, Chunk951288.jsx)("div", {
              className: Chunk326040.hiddenMessage,
              children: r
            }) : null]
          }), p ? (0, Chunk951288.jsx)(Chunk600164.Z, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, Chunk951288.jsx)(Chunk755721.zx, {
              "data-migration-pending": true,
              className: Chunk326040.button,
              onClick: this.handleButtonClick,
              size: Chunk755721.Ph.MIN,
              color: module,
              look: Chunk120356,
              disabled: m,
              children: exports
            })
          }) : null]
        })
      })
    })
  }
  constructor(...e) {
    super(...e), p(this, "inputRef", a.createRef()), p(this, "containerRef", a.createRef()), p(this, "handleButtonClick", () => {
      this.select();
      let {
        onCopy: e,
        value: t
      } = this.props;
      e(t)
    }), p(this, "handleInputClick", () => {
      this.select()
    })
  }
}
p(m, "contextType", Chunk481060.q3N), p(m, "defaultProps", {
  supportsCopy: true,
  buttonColor: Chunk755721.Tt.PRIMARY,
  buttonLook: Chunk755721.iL.FILLED,
  mode: h.DEFAULT
}), p(m, "Modes", h), p(m, "ButtonColors", Chunk755721.Tt), p(m, "ButtonLooks", Chunk755721.iL)