/** Chunk was on 85032 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => W,
  Z: () => M
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk491662 = require("./491662.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk981312 = require("./981312.js"),
  Chunk929677 = require("./929677.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351402 = require("./351402.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk880421 = require("./880421.js"),
  Chunk206599 = require("./206599.js"),
  Chunk50130 = require("./50130.js"),
  Chunk5136 = require("./5136.js"),
  Chunk690760 = require("./690760.js"),
  Chunk517157 = require("./517157.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk28671 = require("./28671.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk34335 = require("./34335.jsx"),
  Chunk683881 = require("./683881.jsx"),
  Chunk190862 = require("./190862.jsx"),
  Chunk682085 = require("./682085.jsx"),
  Chunk996921 = require("./996921.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk3083 = require("./3083.js");

function G(e) {
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

function L(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      a = Object.keys(e);
    for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function M(e) {
  var {
    widget: t
  } = e, n = L(e, ["widget"]);
  return t instanceof h.q ? (0, r.jsx)(w.Z, G({
    widget: t
  }, n)) : t instanceof y.zy ? (0, r.jsx)(C.Z, G({
    widget: t
  }, n)) : null
}

function B() {
  return (0, Chunk54381.jsxs)("div", {
    className: Chunk3083.ukTeenDisclaimer,
    children: [(0, Chunk54381.jsx)(Chunk481060.d3s, {
      size: "xs"
    }), (0, Chunk54381.jsx)(Chunk481060.Text, {
      "aria-label": Chunk388032.intl.string(Chunk388032.t["7blcz6"]),
      variant: "text-xs/normal",
      color: "text-muted",
      children: Chunk388032.intl.string(Chunk388032.t["7blcz6"])
    })]
  })
}

function F(e) {
  let {
    user: t
  } = e, {
    application: n
  } = (0, j.G)(), {
    token: i
  } = (0, d.o)(null == n ? true : n.id), a = (0, I.Z)(t.id), l = (0, v.k)({
    location: "ApplicationWidgetUpsell"
  }), o = a.some(e => e instanceof h.q && e.applicationId === (null == n ? true : n.id));
  return null == n || !l || null == i || o ? null : (0, r.jsx)(f.ZP, {
    contentTypes: [c.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: a
      } = e;
      return i === c.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET ? (0, r.jsx)(S.Z, {
        user: t,
        application: n,
        onDismiss: a
      }) : null
    }
  })
}

function U(e) {
  let {
    user: t,
    guildId: n,
    channelId: a
  } = e, l = (0, I.Z)(t.id), c = (0, o.e7)([b.default], () => b.default.getId() === t.id), s = (() => {
    let [e, t] = (0, o.Wu)([m.Z], () => [m.Z.ipCountryCode, m.Z.ipCountryCodeRequest]), n = (0, g.U)();
    return i.useEffect(() => {
      null == e && null == t && n && (0, u.GE)()
    }, [e, t, n]), "GB" === e && n
  })(), d = (0, v.k)({
    location: "UserProfileModalV2Widgets"
  }), f = 0 === l.length && c, j = i.useMemo(() => l.filter(y.Wc), [l]), x = i.useMemo(() => l.filter(e => e instanceof h.q), [l]);
  (0, O.J)(c, j);
  var w = t.id;
  (0, P.s)(x);
  let {
    data: S,
    refetch: T
  } = (0, p.O)(w), C = i.useRef(S);
  C.current = S, i.useEffect(() => {
    null !== C.current && T()
  }, [T]);
  let k = () => (0, r.jsxs)(r.Fragment, {
    children: [c && s && (0, r.jsx)(B, {}), c && (0, r.jsx)(F, {
      user: t
    }), l.map((e, i) => (0, r.jsx)(M, {
      widget: e,
      user: t,
      guildId: n,
      channelId: a,
      index: i
    }, e instanceof h.q ? "".concat(e.type, "-").concat(e.applicationId) : "".concat(e.type))), c && (0, r.jsx)(E.Z, {})]
  });
  if (f)
    if (d) return (0, r.jsx)(D.Z, {});
    else return (0, r.jsx)(A.Z, {});
  return c ? (0, r.jsx)(_.K, {
    children: k()
  }) : k()
}

function W(e) {
  var {
    user: t
  } = e, n = L(e, ["user"]);
  let a = i.useRef(null);
  (0, x.r)({
    containerRef: a
  });
  let o = (0, k.h)(t.id);
  return (0, r.jsxs)(N.F, {
    "data-scroller": true,
    scrollerRef: a,
    className: l()(R.scroller, {
      [R.hasToolbar]: o
    }),
    fade: true,
    children: [(0, r.jsx)(T.Z, {
      scrollerRef: a
    }), (0, r.jsx)(U, G({
      user: t
    }, n))]
  })
}