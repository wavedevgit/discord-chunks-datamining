/** Chunk was on 90882 **/
/** chunk id: 778414, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  C: () => F,
  Z: () => L
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk355467 = require("./355467.js"),
  Chunk251296 = require("./251296.js"),
  Chunk513417 = require("./513417.js"),
  Chunk835473 = require("./835473.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk981312 = require("./981312.js"),
  Chunk929677 = require("./929677.js"),
  Chunk314897 = require("./314897.js"),
  Chunk351402 = require("./351402.js"),
  Chunk931847 = require("./931847.js"),
  Chunk836197 = require("./836197.js"),
  Chunk206599 = require("./206599.js"),
  Chunk5136 = require("./5136.js"),
  Chunk517157 = require("./517157.js"),
  Chunk860717 = require("./860717.jsx"),
  Chunk28671 = require("./28671.jsx"),
  Chunk729424 = require("./729424.jsx"),
  Chunk34335 = require("./34335.jsx"),
  Chunk683881 = require("./683881.jsx"),
  Chunk190862 = require("./190862.jsx"),
  Chunk682085 = require("./682085.jsx"),
  Chunk996921 = require("./996921.jsx"),
  Chunk661462 = require("./661462.jsx"),
  Chunk795990 = require("./795990.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk3083 = require("./3083.js");

function k(e) {
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

function R(e, t) {
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

function L(e) {
  var {
    widget: t
  } = e, n = R(e, ["widget"]);
  return t instanceof h.q ? (0, r.jsx)(P.Z, k({
    widget: t
  }, n)) : t instanceof j.zy ? (0, r.jsx)(T.Z, k({
    widget: t
  }, n)) : null
}

function G() {
  return (0, r.jsxs)("div", {
    className: D.ukTeenDisclaimer,
    children: [(0, r.jsx)(c.d3s, {
      size: "xs"
    }), (0, r.jsx)(c.Text, {
      "aria-label": A.intl.string(A.t["7blcz6"]),
      variant: "text-xs/normal",
      color: "text-muted",
      children: A.intl.string(A.t["7blcz6"])
    })]
  })
}

function B() {
  let {
    isLoading: e,
    suggestions: t,
    currentUser: n
  } = (0, d.Z)({
    location: "ApplicationWidgetUpsell"
  });
  return e ? null : (0, r.jsx)(g.ZP, {
    contentTypes: t.map(e => e.dismissibleContent),
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: i,
        markAsDismissed: l
      } = e, a = t.find(e => e.dismissibleContent === i);
      return null == a ? null : (0, r.jsx)(I.Z, {
        user: n,
        application: a.application,
        onDismiss: l
      })
    }
  })
}

function M(e) {
  let {
    user: t,
    guildId: n,
    channelId: l
  } = e, a = (0, v.Z)(t.id), c = (0, o.e7)([b.default], () => b.default.getId() === t.id), d = (() => {
    let [e, t] = (0, o.Wu)([y.Z], () => [y.Z.ipCountryCode, y.Z.ipCountryCodeRequest]), n = (0, p.U)();
    return i.useEffect(() => {
      null == e && null == t && n && (0, s.GE)()
    }, [e, t, n]), "GB" === e && n
  })(), g = (0, u.q5)({
    location: "UserProfileModalV2Widgets"
  }), x = 0 === a.length && c, P = i.useMemo(() => a.filter(j.Wc), [a]), I = i.useMemo(() => a.filter(e => e instanceof h.q), [a]);
  (0, O.J)(c, P), ((e, t) => {
    let n = i.useMemo(() => t.map(e => e.applicationId), [t]);
    (0, f.Z)(n);
    let {
      data: r,
      refetch: l
    } = (0, m.O)(e), a = i.useRef(null !== r);
    i.useEffect(() => {
      a.current && (a.current = false, l())
    }, [l])
  })(t.id, I);
  let S = () => (0, r.jsxs)(r.Fragment, {
    children: [c && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(w.Z, {
        className: D.editingHeader
      }), d && (0, r.jsx)(G, {}), g && (0, r.jsx)(B, {})]
    }), a.map((e, i) => (0, r.jsx)(L, {
      widget: e,
      user: t,
      guildId: n,
      channelId: l,
      index: i
    }, e.getUniqueKey()))]
  });
  if (x)
    if (g) return (0, r.jsx)(_.Z, {});
    else return (0, r.jsx)(Z.Z, {});
  return c ? (0, r.jsx)(E.K, {
    children: S()
  }) : S()
}

function F(e) {
  var {
    user: t
  } = e, n = R(e, ["user"]);
  let l = i.useRef(null);
  (0, x.r)({
    containerRef: l
  });
  let o = (0, C.h)(t.id);
  return (0, r.jsxs)(N.F, {
    "data-scroller": true,
    scrollerRef: l,
    className: a()(D.scroller, {
      [D.hasToolbar]: o
    }),
    fade: true,
    children: [(0, r.jsx)(S.Z, {
      scrollerRef: l
    }), (0, r.jsx)(M, k({
      user: t
    }, n))]
  })
}