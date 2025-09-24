/** Chunk was on 47129 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => T
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
  Chunk388032 = require("./388032.jsx"),
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

function T(e) {
  let {
    root: t,
    header: n,
    footer: l,
    onClose: a
  } = e, {
    showNavigationMobile: c
  } = (0, f.t)(), y = i.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        trailing: n,
        layout: r
      } = t;
      null != n && n.type === g.PU.POPOVER && e.push(n.dismissibleContentType), r.forEach(t => {
        if (t.type === g.Jq.PANEL && null != t.trailing) switch (t.trailing.type) {
          case g.PU.BADGE_NEW:
          case g.PU.STRONGLY_DISCOURAGED_CUSTOM:
            var n;
            null == (n = t.trailing.dismissibleContentTypes) || n.forEach(t => {
              e.push(t)
            })
        }
      })
    }), e
  }, [t.layout]), [O, E] = i.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]);
  return (0, r.jsx)(d.ZP, {
    contentTypes: y,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: i
      } = e;
      return (0, r.jsxs)("div", {
        className: o()(p.sidebar, {
          [p.mobile]: s.tq,
          [p.mobileNavigationOpen]: c
        }),
        children: [(0, r.jsxs)("div", {
          className: p.fixedContent,
          children: [s.tq && (0, r.jsx)("div", {
            className: p.mobileCloseButton,
            children: (0, r.jsx)(u.hU, {
              icon: u.Uz9,
              onClick: a,
              variant: "icon-only",
              size: "sm",
              "aria-label": b.intl.string(b.t.cpT0Cg)
            })
          }), (0, r.jsx)("div", {
            children: O.map(e => (0, r.jsx)(N, {
              section: e,
              visibleContent: t,
              markAsDismissed: i
            }, e.key))
          }), null != n && (0, r.jsx)(n, {})]
        }), (0, r.jsxs)(u.zJl, {
          className: p.navScroller,
          fade: true,
          children: [(0, r.jsx)("nav", {
            className: p.nav,
            children: E.map(e => (0, r.jsx)(N, {
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

function j(e) {
  let {
    dismissibleContentType: t,
    targetElementRef: n,
    visibleContent: l,
    markAsDismissed: o,
    props: s
  } = e, [u, d] = i.useState(false), f = i.useRef(null);
  (0, c.ZP)(() => (f.current = setTimeout(() => d(true), 250), () => {
    clearTimeout(f.current), o(E.L.AUTO_DISMISS)
  }));
  let g = i.useCallback(e => {
    o("user:explicit" === e ? E.L.USER_DISMISS : E.L.AUTO_DISMISS)
  }, [o]);
  return (0, r.jsx)(a.Z, v({
    targetElementRef: n,
    shouldShow: u && l === t,
    scrollBehavior: "close",
    onRequestClose: g
  }, s))
}

function m(e) {
  let {
    trailing: t,
    sectionRef: n,
    visibleContent: i,
    markAsDismissed: l
  } = e;
  if (t.type === g.PU.POPOVER) {
    var o, s;
    return (0, r.jsx)(j, (o = v({}, t), s = s = {
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
    className: p.section,
    children: [null != a && (0, r.jsxs)("div", {
      className: p.sectionLabel,
      ref: s,
      children: [(0, r.jsx)(u.X6q, {
        className: p.label,
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
      children: [e.type === g.Jq.PANEL && (0, r.jsx)(y.Z, {
        node: e,
        visibleContent: l
      }), e.type === g.Jq.SIDEBAR_ITEM && ("render" in e ? (0, r.jsx)(O.Z, {
        render: e.render
      }) : (0, r.jsx)(O.Z, {
        icon: e.icon,
        title: e.useTitle(),
        onClick: e.onClick
      }))]
    }, e.key))]
  })
}