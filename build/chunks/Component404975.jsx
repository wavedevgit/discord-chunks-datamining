/** Chunk was on 88569 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => m
}), require("./539854.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk724757 = require("./724757.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk28682 = require("./28682.js"),
  Chunk996435 = require("./996435.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845435 = require("./845435.js");

function m(e) {
  let {
    root: t,
    header: n,
    footer: i,
    onClose: g,
    emptyState: m
  } = e, j = y.Z.useField("showNavigationMobile"), O = l.useRef(null), C = l.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        layout: n
      } = t;
      n.forEach(t => {
        if (null != t.trailing) switch (t.trailing.type) {
          case b.PU.BADGE_NEW:
          case b.PU.STRONGLY_DISCOURAGED_CUSTOM:
            var n, r, l;
            null == (r = (l = t.trailing).getDismissibleContentTypes) || null == (n = r.call(l)) || n.forEach(t => {
              e.push(t)
            })
        }
      })
    }), e
  }, [t.layout]), [S, P] = l.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]), _ = (0, p.Ll)(), E = (0, d.Z)("settings-sidebar", O), w = y.Z.useField("currentPanelKey");
  return l.useEffect(() => {
    var e;
    if (null == O.current || null == w) return;
    let t = null == (e = O.current.getScrollerNode()) ? true : e.querySelector('[data-settings-sidebar-item="'.concat(w, '"]'));
    null != t && O.current.scrollIntoViewNode({
      node: t,
      padding: 8,
      animate: !u.Z.useReducedMotion
    })
  }, [w]), (0, r.jsx)(c.f6W, {
    theme: _,
    children: e => (0, r.jsx)(f.ZP, {
      contentTypes: C,
      children: t => {
        let {
          visibleContent: l
        } = t;
        return (0, r.jsxs)("div", {
          className: o()(h.sidebar, e, {
            [h.mobile]: s.tq,
            [h.mobileNavigationOpen]: j
          }),
          children: [(0, r.jsxs)("div", {
            className: h.fixedContent,
            children: [s.tq && (0, r.jsx)("div", {
              className: h.mobileCloseButton,
              children: (0, r.jsx)(c.hU, {
                icon: c.Uz9,
                onClick: g,
                variant: "icon-only",
                size: "sm",
                "aria-label": v.intl.string(v.t.cpT0Cq)
              })
            }), (0, r.jsx)("div", {
              children: S.map(e => (0, r.jsx)(x, {
                section: e,
                visibleContent: l,
                hoisted: true
              }, e.key))
            }), null != n && (0, r.jsx)(n, {}), null != m && 0 === P.length && (0, r.jsx)(m, {})]
          }), (0, r.jsx)(a.bG, {
            navigator: E,
            children: (0, r.jsx)(a.SJ, {
              children: e => {
                var t, n, {
                    ref: o
                  } = e,
                  a = function(e, t) {
                    if (null == e) return {};
                    var n, r, l = function(e, t) {
                      if (null == e) return {};
                      var n, r, l = {},
                        i = Object.keys(e);
                      for (r = 0; r < i.length; r++) n = i[r], t.indexOf(n) >= 0 || (l[n] = e[n]);
                      return l
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var i = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < i.length; r++) n = i[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (l[n] = e[n])
                    }
                    return l
                  }(e, ["ref"]);
                return (0, r.jsxs)(c.h21, (t = function(e) {
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
                    O.current = e, o.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
                  },
                  className: h.navScroller,
                  fade: true
                }, a), n = n = {
                  children: [(0, r.jsx)("nav", {
                    className: h.nav,
                    children: P.map(e => (0, r.jsx)(x, {
                      section: e,
                      visibleContent: l
                    }, e.key))
                  }), null != i && (0, r.jsx)(i, {})]
                }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
                  var n = Object.keys(e);
                  if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n.push.apply(n, r)
                  }
                  return n
                })(Object(n)).forEach(function(e) {
                  Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
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
    visibleContent: l,
    hoisted: i = false
  } = e, o = null == (t = n.useLabel) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: h.section,
    "aria-label": o,
    children: [null != o && (0, r.jsx)("div", {
      className: h.sectionLabel,
      children: (0, r.jsx)(c.Heading, {
        className: h.label,
        variant: "heading-sm/medium",
        color: "text-tertiary",
        children: o
      })
    }), n.layout.map(e => (0, r.jsx)(g.y, {
      node: e,
      visibleContent: l,
      hoisted: i
    }, e.key))]
  })
}