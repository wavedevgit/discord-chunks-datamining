/** Chunk was on web.js **/
/** chunk id: 910989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $q: () => O,
  Ik: () => S,
  Yk: () => g,
  fp: () => E,
  jw: () => b
}), require("./583741.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function m(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function h(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      m(e, t, n[t])
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
      onChange: f = p.dG,
      onClick: m,
      className: h,
      innerClassName: g,
      children: E,
      reverse: O = false,
      shape: v = b.BOX,
      checkboxColor: I
    } = e, T = i.useCallback(e => {
      null == f || f(e, e.currentTarget.checked)
    }, [f]), A = null != E ? (0, r.jsx)("div", {
      className: o()(_.label, t ? _.labelDisabled : _.labelClickable, O ? _.labelReversed : _.labelForward),
      style: {
        lineHeight: "".concat(l, "px")
      },
      children: E
    }) : null, C = a ? "span" : "label", N = t ? _.inputDisabled : n ? _.inputReadonly : _.inputDefault;
    return (0, r.jsxs)(C, {
      "data-toggleable-component": "checkbox",
      className: o()(t ? _.checkboxWrapperDisabled : _.checkboxWrapper, y[u], h, {
        [_.row]: "row" === c,
        [_.checked]: s
      }),
      children: [O ? A : null, !a && (0, r.jsx)(d.tE, {
        children: (0, r.jsx)("input", {
          className: o()(g, N),
          type: "checkbox",
          onClick: m,
          onChange: t || n ? p.dG : T,
          checked: s,
          style: {
            width: l,
            height: l
          }
        })
      }), (0, r.jsx)(S, {
        value: s,
        size: l,
        shape: v,
        checkboxColor: I,
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
  if (a = h({}, a), null != i) switch (r) {
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

function S(e) {
  let {
    indicatorClassName: t,
    value: n,
    size: a,
    shape: s,
    checkboxColor: l,
    disabled: c
  } = e, d = v(e), p = i.useMemo(() => n ? u.Z.colors.WHITE.css : u.Z.unsafe_rawColors.TRANSPARENT.css, [n]);
  return (0, r.jsx)("div", {
    className: o()(_.checkbox, s, t, {
      [_.checked]: n,
      [_.checkboxDisabled]: c
    }),
    style: h({
      width: a,
      height: a,
      borderColor: l
    }, d),
    children: (0, r.jsx)(f.kSu, {
      size: "sm",
      color: p,
      "aria-hidden": true
    })
  })
}