/** Chunk was on web.js **/
/** chunk id: 109802, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  e: () => m,
  q: () => h
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk821589 = require("./821589.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk705848 = require("./705848.js");

function _(e, t, n) {
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
class m extends(r = Chunk64700.PureComponent) {
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
      className: s()((0, d.t)(p, "input", r), l, {
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
        disabled: m
      } = this.props,
      g = null != r;
    switch (n) {
      case h.SUCCESS:
        e = l.XD.GREEN;
        break;
      case h.ERROR:
        e = l.XD.RED;
        break;
      default:
        e = this.props.buttonColor
    }
    return (0, i.jsx)(c.vN3, {
      focusTarget: this.inputRef,
      ringTarget: this.containerRef,
      children: (0, i.jsx)("div", {
        className: s()((0, d.t)(p, "copyInput", n), a),
        ref: this.containerRef,
        children: (0, i.jsxs)(u.A, {
          className: p.layout,
          children: [(0, i.jsxs)(u.A, {
            className: p.inputWrapper,
            children: [this.renderInput(g), g ? (0, i.jsx)("div", {
              className: p.hiddenMessage,
              children: r
            }) : null]
          }), _ ? (0, i.jsx)(u.A, {
            shrink: 1,
            grow: 0,
            style: {
              margin: 0
            },
            children: (0, i.jsx)(l.$n, {
              "data-migration-pending": true,
              className: p.button,
              onClick: this.handleButtonClick,
              size: l.lO.MIN,
              color: e,
              look: o,
              disabled: m,
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
_(m, "contextType", Chunk397927.cKB), _(m, "defaultProps", {
  supportsCopy: true,
  buttonColor: Chunk421380.XD.PRIMARY,
  buttonLook: Chunk421380.pR.FILLED,
  mode: h.DEFAULT
}), _(m, "Modes", h), _(m, "ButtonColors", Chunk421380.XD), _(m, "ButtonLooks", Chunk421380.pR)