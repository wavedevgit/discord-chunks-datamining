/** Chunk was on 30355 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => k,
  Z: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk296009 = require("./296009.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk981312 = require("./981312.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351402 = require("./351402.js"),
  Chunk836197 = require("./836197.js"),
  Chunk206599 = require("./206599.js"),
  Chunk5136 = require("./5136.js"),
  Chunk747101 = require("./747101.js"),
  Chunk517157 = require("./517157.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk640078 = require("./640078.jsx"),
  Chunk190862 = require("./190862.jsx"),
  Chunk996921 = require("./996921.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830202 = require("./830202.js");

function w(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      var r;
      r = n[t], t in e ? Object.defineProperty(e, t, {
        value: r,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = r
    })
  }
  return e
}

function E(e, t) {
  if (null == e) return {};
  var n, r, l = function(e, t) {
    if (null == e) return {};
    var n, r, l = {},
      i = Object.keys(e);
    for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
    return l
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
  }
  return l
}

function Z(e) {
  var {
    widget: t
  } = e, n = E(e, ["widget"]);
  switch (t.type) {
    case s.l.FAVORITE_GAMES:
    case s.l.CURRENT_GAMES:
    case s.l.WANT_TO_PLAY_GAMES:
    case s.l.PLAYED_GAMES:
      return (0, r.jsx)(v.Z, w({
        widget: t
      }, n));
    case s.l.APPLICATION:
      return (0, r.jsx)(x.Z, w({
        widget: t
      }, n));
    default:
      return null
  }
}

function C() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk830202.ukTeenDisclaimer,
    children: [(0, Chunk951288.jsx)(Chunk481060.d3s, {
      size: "xs"
    }), (0, Chunk951288.jsx)(Chunk481060.Text, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t["7blcz8"]),
      variant: "text-xs/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t["7blcz8"])
    })]
  })
}

function T(e) {
  let {
    user: t,
    guildId: n,
    channelId: i
  } = e, a = (0, y.Z)(t.id), s = (0, o.e7)([f.default], () => f.default.getId() === t.id), c = (() => {
    let [e, t] = (0, o.Wu)([m.Z], () => [m.Z.ipCountryCode, m.Z.ipCountryCodeRequest]), n = (0, d.U)();
    return l.useEffect(() => {
      null == e && null == t && n && (0, u.GE)()
    }, [e, t, n]), "GB" === e && n
  })(), b = 0 === a.length && s;
  return ((0, j.ZP)(a.filter(g.W)), (0, p.J)(s, a), b) ? (0, r.jsx)(S.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [s && c && (0, r.jsx)(C, {}), a.map((e, l) => (0, r.jsx)(Z, {
      widget: e,
      user: t,
      guildId: n,
      channelId: i,
      index: l
    }, e.id)), s && (0, r.jsx)(h.Z, {})]
  })
}

function k(e) {
  var {
    user: t
  } = e, n = E(e, ["user"]);
  let i = l.useRef(null);
  (0, b.r)({
    container: i.current
  });
  let s = (0, P.h)(t.id);
  return (0, r.jsxs)(A.F, {
    "data-scroller": true,
    scrollerRef: i,
    className: a()(N.scroller, {
      [N.hasToolbar]: s
    }),
    fade: true,
    children: [(0, r.jsx)(O.Z, {
      scrollerRef: i
    }), (0, r.jsx)(T, w({
      user: t
    }, n))]
  })
}