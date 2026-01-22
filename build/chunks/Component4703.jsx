/** Chunk was on web.js **/
/** chunk id: 4703, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => G
}), require("./896048.js"), require("./667532.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk735438 = require("./735438.js"),
  l = require.n(Chunk735438),
  Chunk432022 = require("./432022.js"),
  Chunk837381 = require("./837381.jsx"),
  Chunk838677 = require("./838677.js"),
  Chunk319060 = require("./319060.js"),
  Chunk397927 = require("./397927.js"),
  Chunk554375 = require("./554375.js"),
  Chunk82495 = require("./82495.js"),
  Chunk260762 = require("./260762.js"),
  Chunk915089 = require("./915089.js"),
  Chunk7584 = require("./7584.js"),
  Chunk690521 = require("./690521.js"),
  Chunk240248 = require("./240248.js"),
  Chunk650583 = require("./650583.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk580103 = require("./580103.js");

function S(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function I(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      S(e, t, n[t])
    })
  }
  return e
}

function T(e, t) {
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
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : T(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function N(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = R(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function R(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let w = 20,
  P = 125,
  D = (0, Chunk915089.Ld)(),
  x = Chunk838677.A.convert.fromCodePoint("1f44f"),
  L = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_EMOJI_CONTAINER_PADDING_VERTICAL),
  j = (0, Chunk240248.xI)(Chunk319060.A.EMOJI_PICKER_CONSTANTS_DIVERSITY_EMOJI_SIZE);

function M(e) {
  switch (d.A.convert.toCodePoint(e)) {
    case "1f3fb":
      return A.intl.string(A.t["BVK5b/"]);
    case "1f3fc":
      return A.intl.string(A.t.xJWOK8);
    case "1f3fd":
      return A.intl.string(A.t["MB+T5g"]);
    case "1f3fe":
      return A.intl.string(A.t.MODud2);
    case "1f3ff":
      return A.intl.string(A.t["0uzqsc"]);
    default:
      return A.intl.string(A.t.bGN1ow)
  }
}
let k = e => {
    let {
      fade: t,
      surrogate: n,
      onClick: i,
      delay: a,
      index: s
    } = e, o = (0, u.rm)("item-".concat(s)), l = b.Ay.getURL(x + n), d = (0, p.zhh)({
      opacity: 1,
      from: {
        opacity: +!t
      },
      delay: a
    }, "animate-always");
    return (0, r.jsx)(p.DUT, C(I({}, o), {
      role: "option",
      "aria-selected": 0 === s,
      onClick: () => i(n),
      className: v.B6,
      children: (0, r.jsx)(c.animated.div, {
        "aria-label": M(n),
        className: v.g4,
        style: I({
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
    } = e, s = (0, m.A)("diversity"), o = (0, p.zhh)({
      height: (j + 2 * L) * (E.W$.length + 1),
      from: {
        height: j
      },
      config: {
        duration: P
      }
    });
    i.useEffect(() => {
      s.focusFirstVisibleItem()
    }, [s]);
    let d = ["", ...E.W$];
    return l().remove(d, e => e === n), d.unshift(n), (0, r.jsx)(u.hD, {
      navigator: s,
      children: (0, r.jsx)(u.PR, {
        children: e => {
          let {
            ref: n
          } = e, i = N(e, ["ref"]);
          return (0, r.jsx)(c.animated.div, C(I({}, i), {
            id: t,
            ref: n,
            className: v.J6,
            style: o,
            role: "listbox",
            children: d.map((e, t) => (0, r.jsx)(k, {
              index: t,
              fade: 0 !== t,
              delay: t * w,
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
    } = e, o = b.Ay.getURL(x + n), [l, c] = i.useState(false), u = (0, h.A)(null, () => c(false)), d = i.useRef(null), f = () => {
      c(true)
    }, m = e => {
      e.key === O.dh.ESCAPE && (e.stopPropagation(), c(false), null != d.current && d.current.focus())
    }, g = e => {
      var n;
      (0, _.dK)(e), c(false), null == (n = t.current) || n.focus()
    };
    return (0, r.jsxs)("div", {
      ref: u,
      className: s()(v.fx, a),
      children: [(0, r.jsx)(p.DUT, {
        innerRef: d,
        className: v.Dj,
        onClick: f,
        "aria-label": A.intl.string(A.t.pAVHxa),
        "aria-haspopup": true,
        "aria-expanded": l,
        "aria-controls": D,
        tabIndex: l ? false : 0,
        children: (0, r.jsx)("div", {
          className: v.g4,
          style: {
            backgroundImage: 'url("'.concat(o, '")')
          }
        })
      }), l ? (0, r.jsx)("div", {
        onKeyDown: m,
        children: (0, r.jsx)(U, {
          id: D,
          selectedSurrogate: n,
          onClick: g
        })
      }) : null]
    })
  }