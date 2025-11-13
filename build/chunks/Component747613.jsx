/** Chunk was on web.js **/
/** chunk id: 747613, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => G
}), require("./388685.js"), require("./290780.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  l = require.n(Chunk392711),
  Chunk203463 = require("./203463.js"),
  Chunk91192 = require("./91192.jsx"),
  Chunk336317 = require("./336317.js"),
  Chunk477690 = require("./477690.js"),
  Chunk481060 = require("./481060.js"),
  Chunk80932 = require("./80932.js"),
  Chunk351773 = require("./351773.js"),
  Chunk209613 = require("./209613.js"),
  Chunk313201 = require("./313201.js"),
  Chunk633302 = require("./633302.js"),
  Chunk176354 = require("./176354.js"),
  Chunk624138 = require("./624138.js"),
  Chunk295907 = require("./295907.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk330580 = require("./330580.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function S(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      T(e, t, n[t])
    })
  }
  return e
}

function A(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function C(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : A(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i = R(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let P = 20,
  D = 125,
  w = (0, Chunk313201.hQ)(),
  x = Chunk336317.Z.convert.fromCodePoint("1f44f"),
  L = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  M = (0, Chunk624138.Mg)(Chunk477690.Z.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);

function j(e) {
  switch (d.Z.convert.toCodePoint(e)) {
    case "1f3fb":
      return v.intl.string(v.t["BVK5b/"]);
    case "1f3fc":
      return v.intl.string(v.t.xJWOK8);
    case "1f3fd":
      return v.intl.string(v.t["MB+T5g"]);
    case "1f3fe":
      return v.intl.string(v.t.MODud2);
    case "1f3ff":
      return v.intl.string(v.t["0uzqsc"]);
    default:
      return v.intl.string(v.t.bGN1ow)
  }
}
let k = e => {
    let {
      fade: t,
      surrogate: n,
      onClick: i,
      delay: a,
      index: o
    } = e, s = (0, u.JA)("item-".concat(o)), l = b.ZP.getURL(x + n), d = (0, _.q_F)({
      opacity: 1,
      from: {
        opacity: +!t
      },
      delay: a
    }, "animate-always");
    return (0, r.jsx)(_.P3F, C(S({}, s), {
      role: "option",
      "aria-selected": 0 === o,
      onClick: () => i(n),
      className: I.diversityEmojiItem,
      children: (0, r.jsx)(c.animated.div, {
        "aria-label": j(n),
        className: I.diversityEmojiItemImage,
        style: S({
          backgroundImage: 'url("'.concat(l, '")')
        }, d)
      })
    }))
  },
  U = e => {
    let {
      id: t,
      selectedSurrogate: n,
      onClick: a
    } = e, o = (0, m.Z)("diversity"), s = (0, _.q_F)({
      height: (M + 2 * L) * (E.gw.length + 1),
      from: {
        height: M
      },
      config: {
        duration: D
      }
    });
    i.useEffect(() => {
      o.focusFirstVisibleItem()
    }, [o]);
    let d = ["", ...E.gw];
    return l().remove(d, e => e === n), d.unshift(n), (0, r.jsx)(u.bG, {
      navigator: o,
      children: (0, r.jsx)(u.SJ, {
        children: e => {
          var {
            ref: n
          } = e, i = N(e, ["ref"]);
          return (0, r.jsx)(c.animated.div, C(S({}, i), {
            id: t,
            ref: n,
            className: I.diversitySelectorOptions,
            style: s,
            role: "listbox",
            children: d.map((e, t) => (0, r.jsx)(k, {
              index: t,
              fade: 0 !== t,
              delay: t * P,
              surrogate: e,
              onClick: a
            }, t))
          }))
        }
      })
    })
  },
  G = e => {
    let {
      searchBarRef: t,
      selectedSurrogate: n,
      className: a
    } = e, s = b.ZP.getURL(x + n), [l, c] = i.useState(false), u = (0, h.Z)(null, () => c(false)), d = i.useRef(null), f = () => {
      c(true)
    }, m = e => {
      e.key === O.vn.ESCAPE && (e.stopPropagation(), c(false), null != d.current && d.current.focus())
    }, g = e => {
      var n;
      (0, p.t0)(e), c(false), null == (n = t.current) || n.focus()
    };
    return (0, r.jsxs)("div", {
      ref: u,
      className: o()(I.diversitySelector, a),
      children: [(0, r.jsx)(_.P3F, {
        innerRef: d,
        className: I.diversitySelectorButton,
        onClick: f,
        "aria-label": v.intl.string(v.t.pAVHxa),
        "aria-haspopup": true,
        "aria-expanded": l,
        "aria-controls": w,
        tabIndex: l ? false : 0,
        children: (0, r.jsx)("div", {
          className: I.diversityEmojiItemImage,
          style: {
            backgroundImage: 'url("'.concat(s, '")')
          }
        })
      }), l ? (0, r.jsx)("div", {
        onKeyDown: m,
        children: (0, r.jsx)(U, {
          id: w,
          selectedSurrogate: n,
          onClick: g
        })
      }) : null]
    })
  }