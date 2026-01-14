/** Chunk was on 91968 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => h
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk704215 = require("./704215.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk724757 = require("./724757.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk970013 = require("./970013.js"),
  Chunk996435 = require("./996435.js"),
  Chunk886880 = require("./886880.jsx"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk492860 = require("./492860.js");

function h(e) {
  let {
    root: t,
    footer: n,
    onClose: a,
    emptyState: s,
    searchQuery: O,
    onSearchChange: m
  } = e, h = g.Z.useField("showNavigationMobile"), P = o.useRef(null), C = o.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        layout: n
      } = t;
      n.forEach(t => {
        if (null != t.trailing) switch (t.trailing.type) {
          case p.W.BADGE_NEW:
          case p.W.STRONGLY_DISCOURAGED_CUSTOM:
            var n, r, o;
            null == (r = (o = t.trailing).getDismissibleContentTypes) || null == (n = r.call(o)) || n.forEach(t => {
              e.push(t)
            })
        }
      })
    }), e
  }, [t.layout]), [w, T] = o.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]), k = (0, y.Ll)(), N = (0, d.Z)("settings-sidebar", P), E = g.Z.useField("currentPanelKey");
  return o.useEffect(() => {
    var e;
    if (null == P.current || null == E) return;
    let t = g.Z.getField("navTransition"),
      n = null == t || t.animateScroll,
      r = null == (e = P.current.getScrollerNode()) ? true : e.querySelector('[data-settings-sidebar-item="'.concat(E, '"]'));
    null != r && P.current.scrollIntoViewNode({
      node: r,
      padding: 8,
      animate: !f.Z.useReducedMotion && n
    })
  }, [E]), (0, r.jsx)(u.f6W, {
    theme: k,
    children: e => (0, r.jsx)(b.ZP, {
      contentTypes: C,
      children: t => {
        let {
          visibleContent: o
        } = t;
        return (0, r.jsxs)("div", {
          className: i()(v.sidebar, e, {
            [v.mobile]: c.tq,
            [v.mobileNavigationOpen]: h
          }),
          children: [(0, r.jsxs)("div", {
            className: v.fixedContent,
            children: [c.tq && (0, r.jsx)("div", {
              className: v.mobileCloseButton,
              children: (0, r.jsx)(u.hU, {
                icon: u.Uz9,
                onClick: a,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t.cpT0Cq)
              })
            }), (0, r.jsx)("div", {
              children: w.map(e => (0, r.jsx)(x, {
                section: e,
                visibleContent: o,
                hoisted: true
              }, e.key))
            }), null != O && null != m && (0, r.jsx)(S, {
              searchQuery: O,
              onSearchChange: m
            }), null != s && 0 === T.length && (0, r.jsx)(s, {})]
          }), (0, r.jsx)(l.bG, {
            navigator: N,
            children: (0, r.jsx)(l.SJ, {
              children: e => {
                var t, a, {
                    ref: i
                  } = e,
                  l = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                      if (null == e) return {};
                      var n, r, o = {},
                        a = Object.keys(e);
                      for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                      return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var a = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                    return o
                  }(e, ["ref"]);
                return (0, r.jsxs)(u.h21, (t = function(e) {
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
                }({
                  ref: e => {
                    var t;
                    P.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
                  },
                  className: v.navScroller,
                  fade: true
                }, l), a = a = {
                  children: [(0, r.jsx)("nav", {
                    className: v.nav,
                    children: T.map(e => (0, r.jsx)(x, {
                      section: e,
                      visibleContent: o
                    }, e.key))
                  }), null != n && (0, r.jsx)(n, {})]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(a)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                }), t))
              }
            })
          })]
        })
      }
    })
  })
}

function x(e) {
  var t;
  let {
    section: n,
    visibleContent: o,
    hoisted: a = false
  } = e, i = null == (t = n.useTitle) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: v.section,
    "aria-label": i,
    children: [null != i && (0, r.jsx)("div", {
      className: v.sectionLabel,
      children: (0, r.jsx)(u.Heading, {
        className: v.label,
        variant: "heading-sm/medium",
        color: "text-muted",
        children: i
      })
    }), n.layout.map(e => (0, r.jsx)(m.y, {
      node: e,
      visibleContent: o,
      hoisted: a
    }, e.key))]
  })
}

function S(e) {
  let {
    searchQuery: t,
    onSearchChange: n
  } = e, a = o.useRef(null), [i, l] = (0, b.US)([s.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]), c = o.useCallback(() => {
    n("")
  }, [n]), f = o.useMemo(() => ({
    title: j.intl.string(j.t.Kv519a),
    body: j.intl.string(j.t.cTGJBZ),
    badge: "new",
    position: "right",
    align: "center",
    scrollBehavior: "sticky"
  }), []);
  return (0, r.jsxs)("div", {
    className: v.searchBarContainer,
    children: [(0, r.jsx)(u.E1j, {
      size: "md",
      query: t,
      onChange: n,
      onClear: c
    }), (0, r.jsx)("div", {
      className: v.popoverAnchor,
      ref: a
    }), (0, r.jsx)(O.Z, {
      dismissibleContentType: s.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
      targetElementRef: a,
      visibleContent: i,
      markAsDismissed: l,
      props: f
    })]
  })
}