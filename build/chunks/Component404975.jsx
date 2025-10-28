/** Chunk was on 75685 **/
/** chunk id: 404975, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => v
}), require("./539854.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk91192 = require("./91192.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk481060 = require("./481060.js"),
  Chunk724757 = require("./724757.js"),
  Chunk243778 = require("./243778.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk28682 = require("./28682.js"),
  Chunk996435 = require("./996435.js"),
  Chunk854014 = require("./854014.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845435 = require("./845435.js");

function v(e) {
  let {
    root: t,
    header: n,
    footer: l,
    onClose: y,
    emptyState: v
  } = e, h = p.Z.useField("showNavigationMobile"), O = o.useRef(null), x = o.useMemo(() => {
    let e = [];
    return t.layout.forEach(t => {
      let {
        layout: n
      } = t;
      n.forEach(t => {
        if (null != t.trailing) switch (t.trailing.type) {
          case b.PU.BADGE_NEW:
          case b.PU.STRONGLY_DISCOURAGED_CUSTOM:
            var n, r, o;
            null == (r = (o = t.trailing).getDismissibleContentTypes) || null == (n = r.call(o)) || n.forEach(t => {
              e.push(t)
            })
        }
      })
    }), e
  }, [t.layout]), [P, S] = o.useMemo(() => {
    let e = [],
      n = [];
    return t.layout.forEach(t => {
      t.hoisted ? e.push(t) : n.push(t)
    }), [e, n]
  }, [t.layout]), C = (0, f.Ll)(), _ = (0, u.Z)("settings-sidebar", O);
  return (0, r.jsx)(s.f6W, {
    theme: C,
    children: e => (0, r.jsx)(d.ZP, {
      contentTypes: x,
      children: t => {
        let {
          visibleContent: o
        } = t;
        return (0, r.jsxs)("div", {
          className: i()(m.sidebar, e, {
            [m.mobile]: c.tq,
            [m.mobileNavigationOpen]: h
          }),
          children: [(0, r.jsxs)("div", {
            className: m.fixedContent,
            children: [c.tq && (0, r.jsx)("div", {
              className: m.mobileCloseButton,
              children: (0, r.jsx)(s.hU, {
                icon: s.Uz9,
                onClick: y,
                variant: "icon-only",
                size: "sm",
                "aria-label": j.intl.string(j.t.cpT0Cq)
              })
            }), (0, r.jsx)("div", {
              children: P.map(e => (0, r.jsx)(g, {
                section: e,
                visibleContent: o,
                hoisted: true
              }, e.key))
            }), null != n && (0, r.jsx)(n, {}), null != v && 0 === S.length && (0, r.jsx)(v, {})]
          }), (0, r.jsx)(a.bG, {
            navigator: _,
            children: (0, r.jsx)(a.SJ, {
              children: e => {
                var t, n, {
                    ref: i
                  } = e,
                  a = function(e, t) {
                    if (null == e) return {};
                    var n, r, o = function(e, t) {
                      if (null == e) return {};
                      var n, r, o = {},
                        l = Object.keys(e);
                      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (o[n] = e[n]);
                      return o
                    }(e, t);
                    if (Object.getOwnPropertySymbols) {
                      var l = Object.getOwnPropertySymbols(e);
                      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                    }
                    return o
                  }(e, ["ref"]);
                return (0, r.jsxs)(s.h21, (t = function(e) {
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
                    O.current = e, i.current = null != (t = null == e ? true : e.getScrollerNode()) ? t : null
                  },
                  className: m.navScroller,
                  fade: true
                }, a), n = n = {
                  children: [(0, r.jsx)("nav", {
                    className: m.nav,
                    children: S.map(e => (0, r.jsx)(g, {
                      section: e,
                      visibleContent: o
                    }, e.key))
                  }), null != l && (0, r.jsx)(l, {})]
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

function g(e) {
  var t;
  let {
    section: n,
    visibleContent: o,
    hoisted: l = false
  } = e, i = null == (t = n.useLabel) ? true : t.call(n);
  return (0, r.jsxs)("ul", {
    className: m.section,
    "aria-label": i,
    children: [null != i && (0, r.jsx)("div", {
      className: m.sectionLabel,
      children: (0, r.jsx)(s.Heading, {
        className: m.label,
        variant: "heading-sm/medium",
        color: "text-tertiary",
        children: i
      })
    }), n.layout.map(e => (0, r.jsx)(y.y, {
      node: e,
      visibleContent: o,
      hoisted: l
    }, e.key))]
  })
}