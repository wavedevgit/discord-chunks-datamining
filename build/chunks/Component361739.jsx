/** Chunk was on 3911 **/
/** chunk id: 361739, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Ay: () => _,
  Fq: () => b,
  Py: () => E,
  gJ: () => A,
  ic: () => m
});
var i, s, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk359459 = require("./359459.jsx"),
  Chunk607399 = require("./607399.js"),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk723702 = require("./723702.js"),
  Chunk684136 = require("./684136.jsx"),
  Chunk63135 = require("./63135.js");

function y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let b = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  S = Chunk64700.createContext(null);
class m extends(s = Chunk64700.PureComponent) {
  renderContent() {
    var e, t;
    let n = this.props,
      {
        scrollerRef: i
      } = n,
      s = function(e, t) {
        if (null == e) return {};
        var n, i, s, r = {};
        if ("u" > typeof Reflect && Reflect.ownKeys) {
          for (s = 0, n = Reflect.ownKeys(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
          return r
        }
        if (r = function(e, t) {
            if (null == e) return {};
            var n, i, s = {},
              r = Object.getOwnPropertyNames(e);
            for (i = 0; i < r.length; i++) n = r[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (s[n] = e[n]);
            return s
          }(e, t), Object.getOwnPropertySymbols)
          for (s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++) i = n[s], !(t.indexOf(i) >= 0) && Object.prototype.propertyIsEnumerable.call(e, i) && (r[i] = e[i]);
        return r
      }(n, ["scrollerRef"]);
    return (0, r.jsx)("div", {
      className: v.customContainer,
      children: (0, r.jsx)(g.Eie, (e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            y(e, t, n[t])
          })
        }
        return e
      }({}, s), t = t = {
        className: a()(v.customScroller, v.contentRegionScroller),
        ref: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e))
    })
  }
  render() {
    return (0, r.jsx)("div", {
      className: v.customColumn,
      children: this.renderContent()
    })
  }
}

function A(e) {
  let {
    children: t
  } = e;
  return (0, r.jsx)("div", {
    className: v.customColumn,
    children: (0, r.jsx)("div", {
      className: v.customContainer,
      children: (0, r.jsx)(g.ArX, {
        className: a()(v.customScroller, v.contentRegionScroller),
        children: t
      })
    })
  })
}
y(m, "defaultProps", {
  paddingTop: 60,
  paddingBottom: 60
});
var E = ((i = {}).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide", i.SCROLLABLE_CUSTOM = "scrollableCustom", i);
let I = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide",
  scrollableCustom: "contentColumnCustom"
});

function O(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, s = l.useRef(null);
  return null == i ? null : (0, r.jsx)("div", {
    className: a()(v.toolsContainer, {
      [v.mobileToolsContainer]: t,
      [v.mobileSidebarTools]: t,
      [v.closeIconOnly]: !n,
      [v.isMobileAndroid]: !n && true === (0, f.isAndroidWeb)()
    }),
    ref: s,
    children: (0, r.jsx)(g.xpW, {
      containerRef: s,
      children: (0, r.jsx)("div", {
        className: v.tools,
        children: (0, r.jsx)(C.A, {
          className: a()({
            [v.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
          keybind: "ESC"
        })
      })
    })
  })
}
let _ = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: i,
    section: s,
    closeAction: o,
    sidebarTheme: f,
    contentType: C,
    scrollerRef: y,
    mobileSidebarOpen: b,
    toggleSidebar: m,
    hideSidebar: A = false
  } = e, E = l.useRef(null), _ = l.useRef(null), w = (0, p.A)(s), N = (0, g.pnh)(A, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: A,
    config: d.config.stiff
  }, "animate-always"), R = l.useCallback(e => {
    E.current = e, null != y && (y.current = e)
  }, [y]);
  l.useLayoutEffect(() => {
    null != E.current && w !== s && E.current.scrollTo({
      to: 0
    })
  }, [s, w, E]);
  let j = (0, r.jsx)(O, {
    isMobile: c.Fr,
    mobileSidebarOpen: b,
    closeAction: o
  });

  function x() {
    return null == i ? null : (0, r.jsx)(g.FQk, {
      className: a()(v.noticeRegion, {
        [v.noticeRegionHiddenSidebar]: A
      }),
      children: i
    }, s)
  }
  return (0, r.jsx)(r.Fragment, {
    children: N((e, i) => (0, r.jsxs)(d.animated.div, {
      style: e,
      className: v.standardSidebarView,
      children: [!i && (null == t ? null : (0, r.jsx)(g.NPJ, {
        theme: f,
        children: e => (0, r.jsx)("div", {
          className: a()(v.sidebarRegion, e, {
            [v.flexFullWidth]: c.Fr,
            [v.hidden]: c.Fr && false === b
          }),
          children: (0, r.jsx)(g.ChK, {
            className: v.sidebarRegionScroller,
            fade: true,
            children: (0, r.jsxs)("nav", {
              className: a()(v.sidebar, {
                [v.mobileSidebar]: c.Fr
              }),
              children: [c.Fr && (0, r.jsx)("div", {
                className: v.mobileSidebarHeader,
                children: j
              }), t]
            })
          })
        })
      })), function() {
        let e = null != m && null != o && b,
          t = c.Fr && (0, r.jsxs)("div", {
            className: a()(v.mobileContentHeader, {
              [v.hideHamburger]: !e
            }),
            children: [e && (0, r.jsx)(u._, {
              onClick: m
            }), j]
          });
        if ("custom" === C) return (0, r.jsxs)(h.F, {
          component: "div",
          className: v.contentRegion,
          children: [t, n, !c.Fr && j, x()]
        });
        if ("scrollableCustom" === C) return (0, r.jsxs)(h.F, {
          component: "div",
          className: v.contentRegion,
          children: [t, (0, r.jsxs)(g.GtU, {
            className: a()(v.contentRegionScroller, A ? v.contentRegionHiddenSidebar : v.contentRegionShownSidebar),
            ref: R,
            children: [(0, r.jsx)(S.Provider, {
              value: E.current,
              children: (0, r.jsx)("div", {
                ref: _,
                className: v.contentColumnScrollable,
                children: (0, r.jsx)(g.xpW, {
                  containerRef: _,
                  children: n
                })
              })
            }), !c.Fr && j]
          }), x()]
        });
        let i = I[null != C ? C : "default"];
        return (0, r.jsxs)(h.F, {
          component: "div",
          className: a()(v.contentRegion, {
            [v.hidden]: c.Fr && true === b
          }),
          children: [(0, r.jsxs)("div", {
            className: v.contentTransitionWrap,
            children: [t, (0, r.jsxs)(g.GtU, {
              className: a()(v.contentRegionScroller, A ? v.contentRegionHiddenSidebar : v.contentRegionShownSidebar),
              ref: R,
              children: [(0, r.jsx)(S.Provider, {
                value: E.current,
                children: (0, r.jsx)(g.VQ0.Panel, {
                  id: s,
                  className: a()(v.contentColumn, v[i], {
                    [v.mobileContent]: c.Fr
                  }),
                  ref: _,
                  style: c.Fr ? {
                    maxWidth: window.innerWidth
                  } : true,
                  children: A ? n : (0, r.jsx)(g.xpW, {
                    containerRef: _,
                    children: n
                  })
                })
              }), !c.Fr && j]
            })]
          }), x()]
        })
      }()]
    }))
  })
}