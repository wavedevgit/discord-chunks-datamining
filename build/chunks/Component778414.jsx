/** Chunk was on 56848 **/
/** chunk id: 778414, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  C: () => L,
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk479283 = require("./479283.js");

function k(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = null != arguments[t] ? arguments[t] : {},
      n = Object.keys(r);
    "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
      return Object.getOwnPropertyDescriptor(r, e).enumerable
    }))), n.forEach(function(t) {
      var n;
      n = r[t], t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: true,
        configurable: true,
        writable: true
      }) : e[t] = n
    })
  }
  return e
}

function Z(e, t) {
  if (null == e) return {};
  var r, n, i = function(e, t) {
    if (null == e) return {};
    var r, n, i = {},
      a = Object.keys(e);
    for (n = 0; n < a.length; n++) r = a[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (n = 0; n < a.length; n++) r = a[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r])
  }
  return i
}

function N(e) {
  var {
    widget: t
  } = e, r = Z(e, ["widget"]);
  return t instanceof h.q ? (0, n.jsx)(j.Z, k({
    widget: t
  }, r)) : t instanceof p.zy ? (0, n.jsx)(I.Z, k({
    widget: t
  }, r)) : null
}

function D() {
  return (0, Chunk951288.jsxs)("div", {
    className: Chunk479283.ukTeenDisclaimer,
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

function _(e) {
  let {
    user: t,
    guildId: r,
    channelId: a
  } = e, l = (0, O.Z)(t.id), o = (0, s.e7)([f.default], () => f.default.getId() === t.id), v = (() => {
    let [e, t] = (0, s.Wu)([g.Z], () => [g.Z.ipCountryCode, g.Z.ipCountryCodeRequest]), r = (0, u.U)();
    return i.useEffect(() => {
      null == e && null == t && r && (0, c.GE)()
    }, [e, t, r]), "GB" === e && r
  })(), j = 0 === l.length && o, P = i.useMemo(() => l.filter(p.Wc), [l]), I = i.useMemo(() => l.filter(e => e instanceof h.q), [l]);
  (0, y.ZP)(P), (0, m.J)(o, P);
  var x = t.id;
  (0, b.s)(I);
  let {
    data: w
  } = (0, d.O)(x), T = i.useRef(w);
  return (T.current = w, i.useEffect(() => {
    null !== T.current && (0, s.Xf)(C.McO.USER_APPLICATION_IDENTITIES(x))
  }, [x]), j) ? (0, n.jsx)(E.Z, {}) : (0, n.jsxs)(n.Fragment, {
    children: [o && v && (0, n.jsx)(D, {}), l.map((e, i) => (0, n.jsx)(N, {
      widget: e,
      user: t,
      guildId: r,
      channelId: a,
      index: i
    }, e.type)), o && (0, n.jsx)(S.Z, {})]
  })
}

function L(e) {
  var {
    user: t
  } = e, r = Z(e, ["user"]);
  let a = i.useRef(null);
  (0, v.r)({
    container: a.current
  });
  let s = (0, x.h)(t.id);
  return (0, n.jsxs)(w.F, {
    "data-scroller": true,
    scrollerRef: a,
    className: l()(A.scroller, {
      [A.hasToolbar]: s
    }),
    fade: true,
    children: [(0, n.jsx)(P.Z, {
      scrollerRef: a
    }), (0, n.jsx)(_, k({
      user: t
    }, r))]
  })
}