/** Chunk was on web.js **/
/** chunk id: 910989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $q: () => O,
  Ik: () => I,
  Yk: () => g,
  fp: () => E,
  jw: () => b
}), require("./583741.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk155127 = require("./155127.js"),
  Chunk657707 = require("./657707.js"),
  Chunk231338 = require("./231338.js"),
  Chunk254478 = require("./254478.js");

function h(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function m(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      h(e, t, n[t])
    })
  }
  return e
}
var g = function(e) {
    return e.DEFAULT = "default", e.INVERTED = "inverted", e.GHOST = "ghost", e.ROW = "row", e
  }(g || {}),
  E = function(e) {
    return e.TOP = "top", e.CENTER = "center", e
  }(E || {});
let b = {
    BOX: Chunk254478.box,
    ROUND: Chunk254478.round,
    SMALL_BOX: Chunk254478.smallBox
  },
  y = {
    top: Chunk254478.alignTop,
    center: Chunk254478.alignCenter
  },
  O = e => {
    let {
      disabled: t = false,
      readOnly: n = false,
      displayOnly: a = false,
      value: s = false,
      size: l = 24,
      type: c = "default",
      align: u = "center",
      onChange: f = _.dG,
      onClick: h,
      className: m,
      innerClassName: g,
      children: E,
      reverse: O = false,
      shape: v = b.BOX,
      checkboxColor: T
    } = e, S = i.useCallback(e => {
      null == f || f(e, e.currentTarget.checked)
    }, [f]), A = null != E ? (0, r.jsx)("div", {
      className: o()(p.label, t ? p.labelDisabled : p.labelClickable, O ? p.labelReversed : p.labelForward),
      style: {
        lineHeight: "".concat(l, "px")
      },
      children: E
    }) : null, C = a ? "span" : "label", N = t ? p.inputDisabled : n ? p.inputReadonly : p.inputDefault;
    return (0, r.jsxs)(C, {
      "data-toggleable-component": "checkbox",
      className: o()(t ? p.checkboxWrapperDisabled : p.checkboxWrapper, y[u], m, {
        [p.row]: "row" === c,
        [p.checked]: s
      }),
      children: [O ? A : null, !a && (0, r.jsx)(d.tE, {
        children: (0, r.jsx)("input", {
          className: o()(g, N),
          type: "checkbox",
          onClick: h,
          onChange: t || n ? _.dG : S,
          checked: s,
          style: {
            width: l,
            height: l
          }
        })
      }), (0, r.jsx)(I, {
        value: s,
        size: l,
        shape: v,
        checkboxColor: T,
        disabled: t
      }), O ? null : A]
    })
  };

function v(e) {
  var t;
  let {
    value: n,
    type: r,
    color: i
  } = e, a = null != (t = e.style) ? t : {};
  if (false === n) return a;
  if (a = m({}, a), null != i) switch (r) {
    case "default":
      a.borderColor = i;
      break;
    case "ghost":
      if (i.startsWith("var(--")) {
        let e = "".concat(i.slice(0, false), "-hsl)");
        a.borderColor = "rgba(".concat(e, ", 0.15)"), a.backgroundColor = "rgba(".concat(e, ", 0.15)")
      } else l()((0, c.FX)(i), "Checkbox: ".concat(i, " is not a valid hex color")), a.borderColor = (0, c.wK)(i, .15), a.backgroundColor = (0, c.wK)(i, .15);
      break;
    case "row":
    case "inverted":
      a.backgroundColor = i, a.borderColor = i
  }
  return a
}

function I(e) {
  let {
    indicatorClassName: t,
    value: n,
    size: a,
    shape: s,
    checkboxColor: l,
    disabled: c
  } = e, d = v(e), _ = i.useMemo(() => n ? u.Z.colors.WHITE.css : u.Z.unsafe_rawColors.TRANSPARENT.css, [n]);
  return (0, r.jsx)("div", {
    className: o()(p.checkbox, s, t, {
      [p.checked]: n,
      [p.checkboxDisabled]: c
    }),
    style: m({
      width: a,
      height: a,
      borderColor: l
    }, d),
    children: (0, r.jsx)(f.kSu, {
      size: "sm",
      color: _,
      "aria-hidden": true
    })
  })
}