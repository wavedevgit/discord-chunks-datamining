/** Chunk was on 30355 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => D,
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk981312 = require("./981312.js"),
  Chunk929677 = require("./929677.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351402 = require("./351402.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk206599 = require("./206599.js"),
  Chunk5136 = require("./5136.js"),
  Chunk690760 = require("./690760.js"),
  Chunk747101 = require("./747101.js"),
  Chunk517157 = require("./517157.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk640078 = require("./640078.jsx"),
  Chunk190862 = require("./190862.jsx"),
  Chunk996921 = require("./996921.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830202 = require("./830202.js");

function Z(e) {
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

function C(e, t) {
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

function k(e) {
  var {
    widget: t
  } = e, n = C(e, ["widget"]);
  return t instanceof g.q ? (0, r.jsx)(O.Z, Z({
    widget: t
  }, n)) : t instanceof p.zy ? (0, r.jsx)(I.Z, Z({
    widget: t
  }, n)) : null
}

function _() {
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

function L(e) {
  let {
    user: t,
    guildId: n,
    channelId: i
  } = e, a = (0, v.Z)(t.id), o = (0, s.e7)([f.default], () => f.default.getId() === t.id), j = (() => {
    let [e, t] = (0, s.Wu)([m.Z], () => [m.Z.ipCountryCode, m.Z.ipCountryCodeRequest]), n = (0, u.U)();
    return l.useEffect(() => {
      null == e && null == t && n && (0, c.GE)()
    }, [e, t, n]), "GB" === e && n
  })(), O = 0 === a.length && o, P = l.useMemo(() => a.filter(p.Wc), [a]), I = l.useMemo(() => a.filter(e => e instanceof g.q), [a]);
  (0, h.ZP)(P), (0, b.J)(o, P);
  var S = t.id;
  (0, y.s)(I);
  let {
    data: A
  } = (0, d.O)(S), w = l.useRef(A);
  return (w.current = A, l.useEffect(() => {
    null !== w.current && (0, s.Xf)(N.McO.USER_APPLICATION_IDENTITIES(S))
  }, [S]), O) ? (0, r.jsx)(E.Z, {}) : (0, r.jsxs)(r.Fragment, {
    children: [o && j && (0, r.jsx)(_, {}), a.map((e, l) => (0, r.jsx)(k, {
      widget: e,
      user: t,
      guildId: n,
      channelId: i,
      index: l
    }, e.type)), o && (0, r.jsx)(x.Z, {})]
  })
}

function D(e) {
  var {
    user: t
  } = e, n = C(e, ["user"]);
  let i = l.useRef(null);
  (0, j.r)({
    container: i.current
  });
  let s = (0, S.h)(t.id);
  return (0, r.jsxs)(A.F, {
    "data-scroller": true,
    scrollerRef: i,
    className: a()(T.scroller, {
      [T.hasToolbar]: s
    }),
    fade: true,
    children: [(0, r.jsx)(P.Z, {
      scrollerRef: i
    }), (0, r.jsx)(L, Z({
      user: t
    }, n))]
  })
}