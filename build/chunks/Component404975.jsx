/** Chunk was on 88569 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => h
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
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
  Chunk845435 = require("./845435.js");

function h(e) {
  let {
    root: t,
    footer: n,
    onClose: i,
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
  }, [t.layout]), [_, w] = o.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]), T = (0, y.Ll)(), k = (0, f.Z)("settings-sidebar", P), E = g.Z.useField("currentPanelKey");
  return o.useEffect(() => {
    var e;
    if (null == P.current || null == E) return;
    let t = g.Z.getField("navTransition"),
      n = null == t || t.animateScroll,
      r = null == (e = P.current.getScrollerNode()) ? true : e.querySelector('[data-settings-sidebar-item="'.concat(E, '"]'));
    null != r && P.current.scrollIntoViewNode({
      node: r,
      padding: 8,
      animate: !b.Z.useReducedMotion && n
    })
  }, [E]), (0, r.jsx)(u.f6W, {
    theme: T,
    children: e => (0, r.jsx)(d.ZP, {
      contentTypes: C,
      children: t => {
        let {
          visibleContent: o
        } = t;
        return (0, r.jsxs)("div", {
          className: l()(v.sidebar, e, {
            [v.mobile]: c.tq,
            [v.mobileNavigationOpen]: h
          }),
          children: [(0, r.jsxs)("div", {
            className: v.fixedContent,
            children: [c.tq && (0, r.jsx)("div", {
              className: v.mobileCloseButton,
              children: (0, r.jsx)(u.hU, {
                icon: u.Uz9,
                onClick: i,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t.cpT0Cq)
              })
            }), (0, r.jsx)("div", {
              children: _.map(e => (0, r.jsx)(x, {
                section: e,
                visibleContent: o,
                hoisted: true
              }, e.key))
            }), null != O && null != m && (0, r.jsx)(S, {
              searchQuery: O,
              onSearchChange: m
            }), null != s && 0 === w.length && (0, r.jsx)(s, {})]
          }), (0, r.jsx)(a.bG, {
            navigator: k,
            children: (0, r.jsx)(a.SJ, {
              children: e => {
                var t, i, {
                    ref: l
                  } = e,
                  a = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                      if (null == e) return {};
                      var n, r, o = {},
                        i = Object.keys(e);
                      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                      return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
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
                    P.current = e, l.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
                  },
                  className: v.navScroller,
                  fade: true
                }, a), i = i = {
                  children: [(0, r.jsx)("nav", {
                    className: v.nav,
                    children: w.map(e => (0, r.jsx)(x, {
                      section: e,
                      visibleContent: o
                    }, e.key))
                  }), null != n && (0, r.jsx)(n, {})]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(i)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
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
    hoisted: i = false
  } = e, l = null == (t = n.useTitle) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: v.section,
    "aria-label": l,
    children: [null != l && (0, r.jsx)("div", {
      className: v.sectionLabel,
      children: (0, r.jsx)(u.Heading, {
        className: v.label,
        variant: "heading-sm/medium",
        color: "text-muted",
        children: l
      })
    }), n.layout.map(e => (0, r.jsx)(m.y, {
      node: e,
      visibleContent: o,
      hoisted: i
    }, e.key))]
  })
}

function S(e) {
  let {
    searchQuery: t,
    onSearchChange: n
  } = e, i = o.useRef(null), [l, a] = (0, d.US)([s.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER]), c = o.useCallback(() => {
    n("")
  }, [n]), b = o.useMemo(() => ({
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
      ref: i
    }), (0, r.jsx)(O.Z, {
      dismissibleContentType: s.z.USER_SETTINGS_REDESIGN_EDUCATION_POPOVER,
      targetElementRef: i,
      visibleContent: l,
      markAsDismissed: a,
      props: b
    })]
  })
}