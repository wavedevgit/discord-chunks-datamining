/** Chunk was on web.js **/
/** chunk id: 695407, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  n: () => m
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk1561 = require("./1561.jsx"),
  Chunk84735 = require("./84735.js"),
  Chunk670596 = require("./670596.js"),
  Chunk922770 = require("./922770.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk150576 = require("./150576.js");
let p = 18;

function h(e, t, n) {
  return t ? (0, r.jsx)("div", {
    className: _.iconContainer,
    children: (0, r.jsx)(u.$, {
      type: u.$.Type.SPINNING_CIRCLE,
      className: _.icon
    })
  }) : e.length > 0 ? (0, r.jsx)(s.P, {
    "aria-label": f.intl.string(f.t["78fJND"]),
    className: o()(_.iconContainer, _.iconClickable),
    onClick: e => {
      e.stopPropagation(), n("")
    },
    onMouseDown: e => {
      e.preventDefault(), e.stopPropagation()
    },
    focusProps: {
      offset: {
        top: false,
        right: false,
        bottom: false,
        left: false
      }
    },
    children: (0, r.jsx)(d.Dio, {
      size: "custom",
      color: "currentColor",
      width: p,
      height: p,
      className: _.icon,
      "aria-label": f.intl.string(f.t.cpT0Cg)
    })
  }) : (0, r.jsx)("div", {
    className: _.iconContainer,
    children: (0, r.jsx)(d._Ve, {
      size: "custom",
      color: "currentColor",
      width: p,
      height: p,
      className: _.icon,
      "aria-label": f.intl.string(f.t["5h0QOD"])
    })
  })
}
let m = Chunk647438.forwardRef(function(e, t) {
  let {
    query: n,
    onChange: a,
    loading: o = false,
    disabled: s = false,
    placeholder: u = f.intl.string(f.t["5h0QOD"]),
    "aria-label": d,
    onInteraction: p
  } = e, m = i.useRef(null), g = i.useRef(null);
  i.useImperativeHandle(t, () => ({
    focus: () => {
      var e;
      return null == (e = g.current) ? true : e.focus()
    },
    blur: () => {
      var e;
      return null == (e = g.current) ? true : e.blur()
    },
    activate: () => false
  }), []);
  let E = h(n, o, a),
    b = e => {
      a(e.currentTarget.value), null == p || p(c.U.SEARCH)
    };
  return (0, r.jsx)(l.t, {
    focusTarget: g,
    ringTarget: m,
    offset: {
      top: 2,
      bottom: 2,
      left: 4,
      right: 4
    },
    children: (0, r.jsxs)("div", {
      className: _.container,
      ref: m,
      children: [(0, r.jsx)("input", {
        role: "searchbox",
        "aria-busy": o,
        ref: g,
        className: _.input,
        value: n,
        onChange: b,
        "aria-label": d,
        placeholder: u,
        disabled: s
      }), E]
    })
  })
})