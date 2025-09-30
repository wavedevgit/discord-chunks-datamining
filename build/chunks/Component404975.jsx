/** Chunk was on 59739 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => g
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
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

function g(e) {
  let {
    root: t,
    header: n,
    footer: l,
    onClose: s
  } = e, {
    showNavigationMobile: u
  } = (0, f.t)(), p = o.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        trailing: n,
        layout: r
      } = t;
      null != n && n.type === b.PU.POPOVER && e.push(n.dismissibleContentType), r.forEach(t => {
        if (t.type === b.Jq.PANEL && null != t.trailing) switch (t.trailing.type) {
          case b.PU.BADGE_NEW:
          case b.PU.STRONGLY_DISCOURAGED_CUSTOM:
            var n;
            null == (n = t.trailing.dismissibleContentTypes) || n.forEach(t => {
              e.push(t)
            })
        }
      })
    }), e
  }, [t.layout]), [m, j] = o.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]);
  return (0, r.jsx)(d.ZP, {
    contentTypes: p,
    children: e => {
      let {
        visibleContent: t,
        markAsDismissed: o
      } = e;
      return (0, r.jsxs)("div", {
        className: i()(x.sidebar, {
          [x.mobile]: a.tq,
          [x.mobileNavigationOpen]: u
        }),
        children: [(0, r.jsxs)("div", {
          className: x.fixedContent,
          children: [a.tq && (0, r.jsx)("div", {
            className: x.mobileCloseButton,
            children: (0, r.jsx)(c.hU, {
              icon: c.Uz9,
              onClick: s,
              variant: "icon-only",
              size: "sm",
              "aria-label": y.intl.string(y.t.cpT0Cg)
            })
          }), (0, r.jsx)("div", {
            children: m.map(e => (0, r.jsx)(C, {
              section: e,
              visibleContent: t,
              markAsDismissed: o
            }, e.key))
          }), null != n && (0, r.jsx)(n, {})]
        }), (0, r.jsxs)(c.zJl, {
          className: x.navScroller,
          fade: true,
          children: [(0, r.jsx)("nav", {
            className: x.nav,
            children: j.map(e => (0, r.jsx)(C, {
              section: e,
              visibleContent: t,
              markAsDismissed: o
            }, e.key))
          }), null != l && (0, r.jsx)(l, {})]
        })]
      })
    }
  })
}

function h(e) {
  let {
    dismissibleContentType: t,
    targetElementRef: n,
    visibleContent: l,
    markAsDismissed: i,
    props: a
  } = e, [c, d] = o.useState(false), f = o.useRef(null);
  (0, u.ZP)(() => (f.current = setTimeout(() => d(true), 250), () => {
    clearTimeout(f.current), i(j.L.AUTO_DISMISS)
  }));
  let b = o.useCallback(e => {
    i("user:explicit" === e ? j.L.USER_DISMISS : j.L.AUTO_DISMISS)
  }, [i]);
  return (0, r.jsx)(s.Z, v({
    targetElementRef: n,
    shouldShow: c && l === t,
    scrollBehavior: "close",
    onRequestClose: b
  }, a))
}

function O(e) {
  let {
    trailing: t,
    sectionRef: n,
    visibleContent: o,
    markAsDismissed: l
  } = e;
  if (t.type === b.PU.POPOVER) {
    var i, a;
    return (0, r.jsx)(h, (i = v({}, t), a = a = {
      targetElementRef: n,
      visibleContent: o,
      markAsDismissed: l
    }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
      var n = Object.keys(e);
      if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        n.push.apply(n, r)
      }
      return n
    })(Object(a)).forEach(function(e) {
      Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(a, e))
    }), i))
  }
}

function C(e) {
  var t;
  let {
    section: n,
    visibleContent: l,
    markAsDismissed: i
  } = e, a = o.useRef(null), s = null == (t = n.useLabel) ? true : t.call(n), u = n.trailing;
  return (0, r.jsxs)("ul", {
    className: x.section,
    children: [null != s && (0, r.jsxs)("div", {
      className: x.sectionLabel,
      ref: a,
      children: [(0, r.jsx)(c.X6q, {
        className: x.label,
        variant: "heading-sm/medium",
        color: "text-tertiary",
        children: s
      }), null != u && (0, r.jsx)(O, {
        trailing: u,
        sectionRef: a,
        visibleContent: l,
        markAsDismissed: i
      })]
    }), n.layout.map(e => (0, r.jsxs)("li", {
      children: [e.type === b.Jq.PANEL && (0, r.jsx)(p.Z, {
        node: e,
        visibleContent: l
      }), e.type === b.Jq.SIDEBAR_ITEM && ("render" in e ? (0, r.jsx)(m.Z, {
        render: e.render
      }) : (0, r.jsx)(m.Z, {
        icon: e.icon,
        title: e.useTitle(),
        onClick: e.onClick
      }))]
    }, e.key))]
  })
}