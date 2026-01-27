/** Chunk was on web.js **/
/** chunk id: 27192, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DO: () => y,
  Kj: () => O,
  Lc: () => A,
  Or: () => g,
  zI: () => E
}), require("./264879.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  l = require.n(Chunk284009),
  Chunk317097 = require("./317097.js"),
  Chunk827734 = require("./827734.js"),
  Chunk426333 = require("./426333.js"),
  Chunk934551 = require("./934551.js"),
  Chunk818348 = require("./818348.js"),
  Chunk127650 = require("./127650.js");

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
let y = {
    BOX: Chunk127650.aP,
    ROUND: Chunk127650.LI,
    SMALL_BOX: Chunk127650.tk
  },
  b = {
    top: Chunk127650.t8,
    center: Chunk127650.Hu
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
      onChange: f = p.tE,
      onClick: h,
      className: m,
      innerClassName: g,
      children: E,
      reverse: O = false,
      shape: v = y.BOX,
      checkboxColor: I
    } = e, S = i.useCallback(e => {
      null == f || f(e, e.currentTarget.checked)
    }, [f]), T = null != E ? (0, r.jsx)("div", {
      className: o()(_.Pf, t ? _.fR : _.ru, O ? _.dT : _.a5),
      style: {
        lineHeight: "".concat(l, "px")
      },
      children: E
    }) : null, C = a ? "span" : "label", N = t ? _.pR : n ? _.bB : _.qw;
    return (0, r.jsxs)(C, {
      "data-toggleable-component": "checkbox",
      className: o()(t ? _.Tc : _.TQ, b[u], m, {
        [_.nM]: "row" === c,
        [_.KD]: s
      }),
      children: [O ? T : null, !a && (0, r.jsx)(d.vN, {
        children: (0, r.jsx)("input", {
          className: o()(g, N),
          type: "checkbox",
          onClick: h,
          onChange: t || n ? p.tE : S,
          checked: s,
          style: {
            width: l,
            height: l
          }
        })
      }), (0, r.jsx)(A, {
        value: s,
        size: l,
        shape: v,
        checkboxColor: I,
        disabled: t
      }), O ? null : T]
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
      } else l()((0, c.qt)(i), "Checkbox: ".concat(i, " is not a valid hex color")), a.borderColor = (0, c.xp)(i, .15), a.backgroundColor = (0, c.xp)(i, .15);
      break;
    case "row":
    case "inverted":
      a.backgroundColor = i, a.borderColor = i
  }
  return a
}

function A(e) {
  let {
    indicatorClassName: t,
    value: n,
    size: a,
    shape: s,
    checkboxColor: l,
    disabled: c
  } = e, d = v(e), p = i.useMemo(() => n ? u.A.colors.WHITE.css : u.A.unsafe_rawColors.TRANSPARENT.css, [n]);
  return (0, r.jsx)("div", {
    className: o()(_.kv, s, t, {
      [_.KD]: n,
      [_.Ab]: c
    }),
    style: m({
      width: a,
      height: a,
      borderColor: l
    }, d),
    children: (0, r.jsx)(f.CheckmarkSmallBoldIcon, {
      size: "sm",
      color: p,
      "aria-hidden": true
    })
  })
}