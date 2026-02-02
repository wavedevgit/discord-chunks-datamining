/** Chunk was on 51693 **/
/** chunk id: 463259, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => W,
  u: () => G
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk384904 = require("./384904.js"),
  Chunk395332 = require("./395332.js"),
  Chunk566605 = require("./566605.js"),
  Chunk429913 = require("./429913.js"),
  Chunk379848 = require("./379848.jsx"),
  Chunk840387 = require("./840387.js"),
  Chunk201718 = require("./201718.js"),
  Chunk961350 = require("./961350.js"),
  Chunk615405 = require("./615405.js"),
  Chunk633075 = require("./633075.js"),
  Chunk289173 = require("./289173.js"),
  Chunk958338 = require("./958338.js"),
  Chunk600761 = require("./600761.js"),
  Chunk667049 = require("./667049.js"),
  Chunk605694 = require("./605694.jsx"),
  Chunk357541 = require("./357541.jsx"),
  Chunk236599 = require("./236599.jsx"),
  Chunk192 = require("./192.jsx"),
  Chunk128988 = require("./128988.jsx"),
  Chunk795755 = require("./795755.jsx"),
  Chunk53977 = require("./53977.jsx"),
  Chunk982599 = require("./982599.jsx"),
  Chunk515054 = require("./515054.jsx"),
  Chunk266713 = require("./266713.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk368379 = require("./368379.js");

function D(e) {
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
  var n, r, l, i = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (l = 0, n = Reflect.ownKeys(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
    return i
  }
  if (i = function(e, t) {
      if (null == e) return {};
      var n, r, l = {},
        i = Object.getOwnPropertyNames(e);
      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n]);
      return l
    }(e, t), Object.getOwnPropertySymbols)
    for (l = 0, n = Object.getOwnPropertySymbols(e); l < n.length; l++) r = n[l], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (i[r] = e[r]);
  return i
}

function G(e) {
  let {
    widget: t
  } = e, n = L(e, ["widget"]);
  return t instanceof O.R ? (0, r.jsx)(_.A, D({
    widget: t
  }, n)) : t instanceof j.Yy ? (0, r.jsx)(E.A, D({
    widget: t
  }, n)) : null
}

function M() {
  return (0, r.jsxs)("div", {
    className: R.mJ,
    children: [(0, r.jsx)(s.mir, {
      size: "xs"
    }), (0, r.jsx)(s.Text, {
      "aria-label": k.intl.string(k.t["7blcz6"]),
      variant: "text-xs/normal",
      color: "text-muted",
      children: k.intl.string(k.t["7blcz6"])
    })]
  })
}

function U() {
  let {
    isLoading: e,
    suggestions: t,
    currentUser: n
  } = (0, d.A)({
    location: "ApplicationWidgetUpsell"
  });
  return e ? null : (0, r.jsx)(p.Ay, {
    contentTypes: t.map(e => e.dismissibleContent),
    bypassAutoDismiss: true,
    children: e => {
      let {
        visibleContent: l,
        markAsDismissed: i
      } = e, a = t.find(e => e.dismissibleContent === l);
      return null == a ? null : (0, r.jsx)(I.A, {
        user: n,
        application: a.application,
        onDismiss: i
      })
    }
  })
}

function F(e) {
  let {
    user: t,
    guildId: n,
    channelId: i
  } = e, a = (0, v.A)(t.id), s = (0, o.bG)([b.default], () => b.default.getId() === t.id), d = (() => {
    let [e, t] = (0, o.yK)([y.A], () => [y.A.ipCountryCode, y.A.ipCountryCodeRequest]), n = (0, g.Z)();
    return l.useEffect(() => {
      null == e && null == t && n && (0, c.xe)()
    }, [e, t, n]), "GB" === e && n
  })(), p = (0, u.JY)({
    location: "UserProfileModalV2Widgets"
  }), x = 0 === a.length && s, _ = l.useMemo(() => a.filter(j.fu), [a]), I = l.useMemo(() => a.filter(e => e instanceof O.R), [a]);
  (0, h.Y)(s, _), ((e, t) => {
    let n = l.useMemo(() => t.map(e => e.applicationId), [t]);
    (0, f.A)(n);
    let {
      data: r,
      refetch: i
    } = (0, m.P)(e), a = l.useRef(null !== r);
    l.useEffect(() => {
      a.current && (a.current = false, i())
    }, [i])
  })(t.id, I);
  let P = () => (0, r.jsxs)(r.Fragment, {
    children: [s && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(w.A, {
        className: R.cG
      }), d && (0, r.jsx)(M, {}), p && (0, r.jsx)(U, {})]
    }), a.map((e, l) => (0, r.jsx)(G, {
      widget: e,
      user: t,
      guildId: n,
      channelId: i,
      index: l
    }, e.getUniqueKey()))]
  });
  if (x)
    if (p) return (0, r.jsx)(S.A, {});
    else return (0, r.jsx)(N.A, {});
  return s ? (0, r.jsx)(A.D, {
    children: P()
  }) : P()
}

function W(e) {
  let {
    user: t
  } = e, n = L(e, ["user"]), i = l.useRef(null);
  (0, x.i)({
    containerRef: i
  });
  let o = (0, T.k)(t.id);
  return (0, r.jsxs)(C.K, {
    "data-scroller": true,
    scrollerRef: i,
    className: a()(R.XG, {
      [R.az]: o
    }),
    fade: true,
    children: [(0, r.jsx)(P.A, {
      scrollerRef: i
    }), (0, r.jsx)(F, D({
      user: t
    }, n))]
  })
}