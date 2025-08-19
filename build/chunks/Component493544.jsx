/** Chunk was on 31930 **/
/** chunk id: 493544, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  ID: () => C,
  NM: () => O,
  Xi: () => y,
  ZP: () => I,
  bT: () => S
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

function v(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let C = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  _ = Chunk647438.createContext(null);
class y extends(r = Chunk647438.PureComponent) {
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
            v(e, t, n[t])
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

function O(e) {
  let {
    children: t
  } = e;
  return (0, s.jsx)("div", {
    className: b.customColumn,
    children: (0, s.jsx)("div", {
      className: b.customContainer,
      children: (0, s.jsx)(p.w0Z, {
        className: a()(b.customScroller, b.contentRegionScroller),
        children: t
      })
    })
  })
}
v(y, "defaultProps", {
  paddingTop: 60,
  paddingBottom: 60
});
var S = ((i = {}).MINIMAL = "minimal", i.CUSTOM = "custom", i.DEFAULT = "default", i.WIDE = "wide", i.SCROLLABLE_CUSTOM = "scrollableCustom", i);
let E = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide",
  scrollableCustom: "contentColumnCustom"
});

function w(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: i
  } = e, r = l.useRef(null);
  return null == i ? null : (0, s.jsx)("div", {
    className: a()(b.toolsContainer, {
      [b.mobileToolsContainer]: t,
      [b.mobileSidebarTools]: t,
      [b.closeIconOnly]: !n,
      [b.isMobileAndroid]: !n && true === (0, f.isAndroidWeb)()
    }),
    ref: r,
    children: (0, s.jsx)(p.JcV, {
      containerRef: r,
      children: (0, s.jsx)("div", {
        className: b.tools,
        children: (0, s.jsx)(m.Z, {
          className: a()({
            [b.mobileToolsCloseIcon]: t
          }),
          closeAction: i,
          keybind: "ESC"
        })
      })
    })
  })
}
let I = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: i,
    section: r,
    closeAction: o,
    sidebarTheme: f,
    contentType: m,
    scrollerRef: v,
    mobileSidebarOpen: C,
    toggleSidebar: y,
    hideSidebar: O = false
  } = e, S = l.useRef(null), I = l.useRef(null), j = (0, g.Z)(r), P = (0, p.Yzy)(O, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: O,
    config: c.config.stiff
  }, "animate-always"), N = l.useCallback(e => {
    S.current = e, null != v && (v.current = e)
  }, [v]);
  l.useLayoutEffect(() => {
    null != S.current && j !== r && S.current.scrollTo({
      to: 0
    })
  }, [r, j, S]);
  let x = (0, s.jsx)(w, {
    isMobile: d.tq,
    mobileSidebarOpen: C,
    closeAction: o
  });

  function T() {
    return null == i ? null : (0, s.jsx)(p.oXn, {
      className: a()(b.noticeRegion, {
        [b.noticeRegionHiddenSidebar]: O
      }),
      children: i
    }, r)
  }
  return (0, s.jsx)(s.Fragment, {
    children: P((e, i) => (0, s.jsxs)(c.animated.div, {
      style: e,
      className: b.standardSidebarView,
      children: [!i && (null == t ? null : (0, s.jsx)(p.f6W, {
        theme: f,
        children: e => (0, s.jsx)("div", {
          className: a()(b.sidebarRegion, e, {
            [b.flexFullWidth]: d.tq,
            [b.hidden]: d.tq && false === C
          }),
          children: (0, s.jsx)(p.h21, {
            className: b.sidebarRegionScroller,
            fade: true,
            children: (0, s.jsxs)("nav", {
              className: a()(b.sidebar, {
                [b.mobileSidebar]: d.tq
              }),
              children: [d.tq && (0, s.jsx)("div", {
                className: b.mobileSidebarHeader,
                children: x
              }), t]
            })
          })
        })
      })), function() {
        let e = null != y && null != o && C,
          t = d.tq && (0, s.jsxs)("div", {
            className: a()(b.mobileContentHeader, {
              [b.hideHamburger]: !e
            }),
            children: [e && (0, s.jsx)(u.r, {
              onClick: y
            }), x]
          });
        if ("custom" === m) return (0, s.jsxs)(h.W, {
          component: "div",
          className: b.contentRegion,
          children: [t, n, !d.tq && x, T()]
        });
        if ("scrollableCustom" === m) return (0, s.jsxs)(h.W, {
          component: "div",
          className: b.contentRegion,
          children: [t, (0, s.jsxs)(p.yWw, {
            className: a()(b.contentRegionScroller, O ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar),
            ref: N,
            children: [(0, s.jsx)(_.Provider, {
              value: S.current,
              children: (0, s.jsx)("div", {
                ref: I,
                className: b.contentColumnScrollable,
                children: (0, s.jsx)(p.JcV, {
                  containerRef: I,
                  children: n
                })
              })
            }), !d.tq && x]
          }), T()]
        });
        let i = E[null != m ? m : "default"];
        return (0, s.jsxs)(h.W, {
          component: "div",
          className: a()(b.contentRegion, {
            [b.hidden]: d.tq && true === C
          }),
          children: [(0, s.jsxs)("div", {
            className: b.contentTransitionWrap,
            children: [t, (0, s.jsxs)(p.yWw, {
              className: a()(b.contentRegionScroller, O ? b.contentRegionHiddenSidebar : b.contentRegionShownSidebar),
              ref: N,
              children: [(0, s.jsx)(_.Provider, {
                value: S.current,
                children: (0, s.jsx)(p.njP.Panel, {
                  id: r,
                  className: a()(b.contentColumn, b[i], {
                    [b.mobileContent]: d.tq
                  }),
                  ref: I,
                  style: d.tq ? {
                    maxWidth: window.innerWidth
                  } : true,
                  children: O ? n : (0, s.jsx)(p.JcV, {
                    containerRef: I,
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