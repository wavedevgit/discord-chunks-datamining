/** Chunk was on 4756 **/
/** chunk id: 493544, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ID: () => b,
  NM: () => S,
  Xi: () => O,
  ZP: () => w,
  bT: () => E
});
var i, r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk803948 = require("./803948.js"),
  Chunk608863 = require("./608863.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk358085 = require("./358085.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk630016 = require("./630016.js");

function C(e, t, n) {
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
  y = Chunk647438.createContext(null);
class O extends(r = Chunk647438.PureComponent) {
  renderContent() {
    var e, t;
    let n = this.props,
      {
        scrollerRef: i
      } = require,
      r = function(e, t) {
        if (null == e) return {};
        var n, i, r = function(e, t) {
          if (null == e) return {};
          var n, i, r = {},
            s = Object.keys(e);
          for (i = 0; i < s.length; i++) n = s[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
          return r
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var s = Object.getOwnPropertySymbols(e);
          for (i = 0; i < s.length; i++) n = s[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n])
        }
        return r
      }(require, ["scrollerRef"]);
    return (0, Chunk951288.jsx)("div", {
      className: Chunk630016.customContainer,
      children: (0, Chunk951288.jsx)(Chunk481060._2F, (e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), i.forEach(function(t) {
            C(e, t, n[t])
          })
        }
        return e
      }({}, r), t = t = {
        className: a()(Chunk630016.customScroller, Chunk630016.contentRegionScroller),
        ref: i
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          n.push.apply(n, i)
        }
        return n
      })(Object(exports)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), module))
    })
  }
  render() {
    return (0, Chunk951288.jsx)("div", {
      className: Chunk630016.customColumn,
      children: this.renderContent()
    })
  }
}

function S(e) {
  let {
    children: t
  } = e;
  return (0, s.jsx)("div", {
    className: m.customColumn,
    children: (0, s.jsx)("div", {
      className: m.customContainer,
      children: (0, s.jsx)(p.w0Z, {
        className: a()(m.customScroller, m.contentRegionScroller),
        children: t
      })
    })
  })
}
C(O, "defaultProps", {
  paddingTop: 60,
  paddingBottom: 60
});
var E = ((i = {}).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide", i.SCROLLABLE_CUSTOM = "scrollableCustom", i);
let _ = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide",
  scrollableCustom: "contentColumnCustom"
});

function I(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, r = l.useRef(null);
  return null == i ? null : (0, s.jsx)("div", {
    className: a()(m.toolsContainer, {
      [m.mobileToolsContainer]: t,
      [m.mobileSidebarTools]: t,
      [m.closeIconOnly]: !n,
      [m.isMobileAndroid]: !n && true === (0, f.isAndroidWeb)()
    }),
    ref: r,
    children: (0, s.jsx)(p.JcV, {
      containerRef: r,
      children: (0, s.jsx)("div", {
        className: m.tools,
        children: (0, s.jsx)(v.Z, {
          className: a()({
            [m.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
          keybind: "ESC"
        })
      })
    })
  })
}
let w = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: i,
    section: r,
    closeAction: o,
    sidebarTheme: f,
    contentType: v,
    scrollerRef: C,
    mobileSidebarOpen: b,
    toggleSidebar: O,
    hideSidebar: S = false
  } = e, E = l.useRef(null), w = l.useRef(null), j = (0, g.Z)(r), P = (0, p.Yzy)(S, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: S,
    config: u.config.stiff
  }, "animate-always"), N = l.useCallback(e => {
    E.current = e, null != C && (C.current = e)
  }, [C]);
  l.useLayoutEffect(() => {
    null != E.current && j !== r && E.current.scrollTo({
      to: 0
    })
  }, [r, j, E]);
  let x = (0, s.jsx)(I, {
    isMobile: d.tq,
    mobileSidebarOpen: b,
    closeAction: o
  });

  function T() {
    return null == i ? null : (0, s.jsx)(p.oXn, {
      className: a()(m.noticeRegion, {
        [m.noticeRegionHiddenSidebar]: S
      }),
      children: i
    }, r)
  }
  return (0, s.jsx)(s.Fragment, {
    children: P((e, i) => (0, s.jsxs)(u.animated.div, {
      style: e,
      className: m.standardSidebarView,
      children: [!i && (null == t ? null : (0, s.jsx)(p.f6W, {
        theme: f,
        children: e => (0, s.jsx)("div", {
          className: a()(m.sidebarRegion, e, {
            [m.flexFullWidth]: d.tq,
            [m.hidden]: d.tq && false === b
          }),
          children: (0, s.jsx)(p.h21, {
            className: m.sidebarRegionScroller,
            fade: true,
            children: (0, s.jsxs)("nav", {
              className: a()(m.sidebar, {
                [m.mobileSidebar]: d.tq
              }),
              children: [d.tq && (0, s.jsx)("div", {
                className: m.mobileSidebarHeader,
                children: x
              }), t]
            })
          })
        })
      })), function() {
        let e = null != O && null != o && b,
          t = d.tq && (0, s.jsxs)("div", {
            className: a()(m.mobileContentHeader, {
              [m.hideHamburger]: !e
            }),
            children: [e && (0, s.jsx)(c.r, {
              onClick: O
            }), x]
          });
        if ("custom" === v) return (0, s.jsxs)(h.W, {
          component: "div",
          className: m.contentRegion,
          children: [t, n, !d.tq && x, T()]
        });
        if ("scrollableCustom" === v) return (0, s.jsxs)(h.W, {
          component: "div",
          className: m.contentRegion,
          children: [t, (0, s.jsxs)(p.yWw, {
            className: a()(m.contentRegionScroller, S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
            ref: N,
            children: [(0, s.jsx)(y.Provider, {
              value: E.current,
              children: (0, s.jsx)("div", {
                ref: w,
                className: m.contentColumnScrollable,
                children: (0, s.jsx)(p.JcV, {
                  containerRef: w,
                  children: n
                })
              })
            }), !d.tq && x]
          }), T()]
        });
        let i = _[null != v ? v : "default"];
        return (0, s.jsxs)(h.W, {
          component: "div",
          className: a()(m.contentRegion, {
            [m.hidden]: d.tq && true === b
          }),
          children: [(0, s.jsxs)("div", {
            className: m.contentTransitionWrap,
            children: [t, (0, s.jsxs)(p.yWw, {
              className: a()(m.contentRegionScroller, S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
              ref: N,
              children: [(0, s.jsx)(y.Provider, {
                value: E.current,
                children: (0, s.jsx)(p.njP.Panel, {
                  id: r,
                  className: a()(m.contentColumn, m[i], {
                    [m.mobileContent]: d.tq
                  }),
                  ref: w,
                  style: d.tq ? {
                    maxWidth: window.innerWidth
                  } : true,
                  children: S ? n : (0, s.jsx)(p.JcV, {
                    containerRef: w,
                    children: n
                  })
                })
              }), !d.tq && x]
            })]
          }), T()]
        })
      }()]
    }))
  })
}