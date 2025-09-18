/** Chunk was on 47129 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => p
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk873546 = require("./873546.js"),
  Chunk264418 = require("./264418.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk59662 = require("./59662.js"),
  Chunk28682 = require("./28682.js"),
  Chunk829210 = require("./829210.jsx"),
  Chunk854014 = require("./854014.jsx"),
  Chunk921944 = require("./921944.js"),
  Chunk845435 = require("./845435.js");

function v(e) {
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

function p(e) {
  let {
    root: t,
    header: n,
    footer: l
  } = e, {
    showNavigationMobile: a
  } = (0, g.t)(), c = i.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        trailing: n,
        layout: r
      } = t;
      null != n && n.type === f.PU.POPOVER && e.push(n.dismissibleContentType), r.forEach(t => {
        var n;
        t.type === f.Jq.PANEL && (null == (n = t.trailing) ? true : n.newIndicatorDismissibleContentTypes) != null && t.trailing.newIndicatorDismissibleContentTypes.forEach(t => {
          e.push(t)
        })
      })
    }), e
  }, [t.layout]), [y, O] = i.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]);
  return (0, r.jsx)(d.ZP, {
    contentTypes: c,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      return (0, r.jsxs)("div", {
        className: o()(b.sidebar, {
          [b.mobile]: s.tq,
          [b.mobileNavigationOpen]: a
        }),
        children: [(0, r.jsxs)("div", {
          className: b.fixedContent,
          children: [(0, r.jsx)("div", {
            children: y.map(e => (0, r.jsx)(N, {
              section: e,
              visibleContent: t,
              markAsDismissed: i
            }, e.key))
          }), null != n && (0, r.jsx)(n, {})]
        }), (0, r.jsxs)(u.zJl, {
          className: b.navScroller,
          fade: true,
          children: [(0, r.jsx)("nav", {
            className: b.nav,
            children: O.map(e => (0, r.jsx)(N, {
              section: e,
              visibleContent: t,
              markAsDismissed: i
            }, e.key))
          }), null != l && (0, r.jsx)(l, {})]
        })]
      })
    }
  })
}

function T(e) {
  let {
    dismissibleContentType: t,
    targetElementRef: n,
    visibleContent: l,
    markAsDismissed: o,
    props: s
  } = e, [u, d] = i.useState(false), g = i.useRef(null);
  (0, c.ZP)(() => (g.current = setTimeout(() => d(true), 250), () => {
    clearTimeout(g.current), o(E.L.AUTO_DISMISS)
  }));
  let f = i.useCallback(e => {
    o("user:explicit" === e ? E.L.USER_DISMISS : E.L.AUTO_DISMISS)
  }, [o]);
  return (0, r.jsx)(a.Z, v({
    targetElementRef: n,
    shouldShow: u && l === t,
    scrollBehavior: "close",
    onRequestClose: f
  }, s))
}

function m(e) {
  let {
    trailing: t,
    sectionRef: n,
    visibleContent: i,
    markAsDismissed: l
  } = e;
  if (t.type === f.PU.POPOVER) {
    var o, s;
    return (0, r.jsx)(T, (o = v({}, t), s = s = {
      targetElementRef: n,
      visibleContent: i,
      markAsDismissed: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(s)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(s)).forEach(function(e) {
      Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(s, e))
    }), o))
  }
}

function N(e) {
  var t;
  let {
    section: n,
    visibleContent: l,
    markAsDismissed: o
  } = e, s = i.useRef(null), a = null == (t = n.useLabel) ? true : t.call(n), c = n.trailing;
  return (0, r.jsxs)("ul", {
    className: b.section,
    children: [null != a && (0, r.jsxs)("div", {
      className: b.sectionLabel,
      ref: s,
      children: [(0, r.jsx)(u.X6q, {
        className: b.label,
        variant: "heading-sm/medium",
        color: "text-tertiary",
        children: a
      }), null != c && (0, r.jsx)(m, {
        trailing: c,
        sectionRef: s,
        visibleContent: l,
        markAsDismissed: o
      })]
    }), n.layout.map(e => (0, r.jsxs)("li", {
      children: [e.type === f.Jq.PANEL && (0, r.jsx)(y.Z, {
        node: e,
        visibleContent: l
      }), e.type === f.Jq.SIDEBAR_ITEM && ("render" in e ? (0, r.jsx)(O.Z, {
        render: e.render
      }) : (0, r.jsx)(O.Z, {
        icon: e.icon,
        title: e.useTitle(),
        onClick: e.onClick
      }))]
    }, e.key))]
  })
}