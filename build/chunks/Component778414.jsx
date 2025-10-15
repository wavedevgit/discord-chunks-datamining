/** Chunk was on 56848 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => B,
  Z: () => M
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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
  Chunk747101 = require("./747101.js"),
  Chunk517157 = require("./517157.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk28671 = require("./28671.jsx"),
  Chunk430790 = require("./430790.jsx"),
  Chunk683881 = require("./683881.jsx"),
  Chunk190862 = require("./190862.jsx"),
  Chunk682085 = require("./682085.jsx"),
  Chunk996921 = require("./996921.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830202 = require("./830202.js");

function L(e) {
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

function G(e, t) {
  if (null == e) return {};
  var n, r, i = function(e, t) {
    if (null == e) return {};
    var n, r, i = {},
      l = Object.keys(e);
    for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i
  }(e, t);
  if (Object.getOwnPropertySymbols) {
    var l = Object.getOwnPropertySymbols(e);
    for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function M(e) {
  var {
    widget: t
  } = e, n = G(e, ["widget"]);
  return t instanceof v.q ? (0, r.jsx)(w.Z, L({
    widget: t
  }, n)) : t instanceof y.zy ? (0, r.jsx)(N.Z, L({
    widget: t
  }, n)) : null
}

function U() {
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

function W(e) {
  let {
    user: t
  } = e, {
    application: n
  } = (0, x.G)(), {
    token: i
  } = (0, d.o)(null == n ? true : n.id), l = (0, S.Z)(t.id), a = (0, j.k)({
    location: "ApplicationWidgetUpsell"
  }), s = l.some(e => e instanceof v.q && e.applicationId === (null == n ? true : n.id));
  return null == n || !a || null == i || s ? null : (0, r.jsx)(f.ZP, {
    contentTypes: [o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET],
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e;
      return i === o.z.APPLICATION_WIDGET_EMPTY_STATE_CARD_ADD_WIDGET ? (0, r.jsx)(E.Z, {
        user: t,
        application: n,
        onDismiss: l
      }) : null
    }
  })
}

function F(e) {
  let {
    user: t,
    guildId: n,
    channelId: l
  } = e, a = (0, S.Z)(t.id), o = (0, s.e7)([m.default], () => m.default.getId() === t.id), c = (() => {
    let [e, t] = (0, s.Wu)([h.Z], () => [h.Z.ipCountryCode, h.Z.ipCountryCodeRequest]), n = (0, g.U)();
    return i.useEffect(() => {
      null == e && null == t && n && (0, u.GE)()
    }, [e, t, n]), "GB" === e && n
  })(), d = (0, j.k)({
    location: "UserProfileModalV2Widgets"
  }), f = 0 === a.length && o, x = i.useMemo(() => a.filter(y.Wc), [a]), O = i.useMemo(() => a.filter(e => e instanceof v.q), [a]);
  (0, P.ZP)(x), (0, b.J)(o, x);
  var w = t.id;
  (0, I.s)(O);
  let {
    data: E,
    refetch: A
  } = (0, p.O)(w), N = i.useRef(E);
  if (N.current = E, i.useEffect(() => {
      null !== N.current && A()
    }, [A]), f)
    if (d) return (0, r.jsx)(C.Z, {});
    else return (0, r.jsx)(Z.Z, {});
  return (0, r.jsxs)(r.Fragment, {
    children: [o && c && (0, r.jsx)(U, {}), o && (0, r.jsx)(W, {
      user: t
    }), a.map((e, i) => (0, r.jsx)(M, {
      widget: e,
      user: t,
      guildId: n,
      channelId: l,
      index: i
    }, e.type)), o && (0, r.jsx)(T.Z, {})]
  })
}

function B(e) {
  var {
    user: t
  } = e, n = G(e, ["user"]);
  let l = i.useRef(null);
  (0, O.r)({
    container: l.current
  });
  let s = (0, D.h)(t.id);
  return (0, r.jsxs)(k.F, {
    "data-scroller": true,
    scrollerRef: l,
    className: a()(R.scroller, {
      [R.hasToolbar]: s
    }),
    fade: true,
    children: [(0, r.jsx)(A.Z, {
      scrollerRef: l
    }), (0, r.jsx)(F, L({
      user: t
    }, n))]
  })
}