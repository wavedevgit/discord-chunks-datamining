/** Chunk was on 77512 **/
/** chunk id: 493544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ID: () => j,
  NM: () => S,
  Xi: () => v,
  ZP: () => C,
  bT: () => x
});
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  c = require.n(Chunk120356),
  Chunk717976 = require("./717976.js"),
  Chunk608863 = require("./608863.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk358085 = require("./358085.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk630016 = require("./630016.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
let j = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  y = Chunk73800.createContext(null);
class v extends(i = Chunk73800.PureComponent) {
  renderContent() {
    var e, t;
    let n = this.props,
      {
        scrollerRef: r
      } = require,
      i = function(e, t) {
        if (null == e) return {};
        var n, r, i = function(e, t) {
          if (null == e) return {};
          var n, r, i = {},
            l = Object.keys(e);
          for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
          return i
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
        }
        return i
      }(require, ["scrollerRef"]);
    return (0, Chunk255367.jsx)("div", {
      className: Chunk630016.customContainer,
      children: (0, Chunk255367.jsx)(Chunk481060._2F, (e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            g(e, t, n[t])
          })
        }
        return e
      }({}, i), t = t = {
        className: c()(Chunk630016.customScroller, Chunk630016.contentRegionScroller),
        ref: r
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(module, Object.getOwnPropertyDescriptors(exports)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(exports)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), module))
    })
  }
  render() {
    return (0, Chunk255367.jsx)("div", {
      className: Chunk630016.customColumn,
      children: this.renderContent()
    })
  }
}

function S(e) {
  let {
    children: t
  } = e;
  return (0, l.jsx)("div", {
    className: h.customColumn,
    children: (0, l.jsx)("div", {
      className: h.customContainer,
      children: (0, l.jsx)(p.w0Z, {
        className: c()(h.customScroller, h.contentRegionScroller),
        children: t
      })
    })
  })
}
g(v, "defaultProps", {
  paddingTop: 60,
  paddingBottom: 60
});
var x = ((r = {}).MINIMAL = "minimal", r.CUSTOM = "custom", r.DEFAULT = "default", r.WIDE = "wide", r.SCROLLABLE_CUSTOM = "scrollableCustom", r);
let P = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide",
  scrollableCustom: "contentColumnCustom"
});

function E(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: r
  } = e, i = o.useRef(null);
  return null == r ? null : (0, l.jsx)("div", {
    className: c()(h.toolsContainer, {
      [h.mobileToolsContainer]: t,
      [h.mobileSidebarTools]: t,
      [h.closeIconOnly]: !n,
      [h.isMobileAndroid]: !n && true === (0, O.isAndroidWeb)()
    }),
    ref: i,
    children: (0, l.jsx)(p.JcV, {
      containerRef: i,
      children: (0, l.jsx)("div", {
        className: h.tools,
        children: (0, l.jsx)(m.Z, {
          className: c()({
            [h.mobileToolsCloseIcon]: t
          }),
          closeAction: r,
          keybind: "ESC"
        })
      })
    })
  })
}
let C = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: r,
    section: i,
    closeAction: s,
    sidebarTheme: O,
    contentType: m,
    scrollerRef: g,
    mobileSidebarOpen: j,
    toggleSidebar: v,
    hideSidebar: S = false
  } = e, x = o.useRef(null), C = o.useRef(null), w = (0, b.Z)(i), _ = (0, p.Yzy)(S, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: S,
    config: a.config.stiff
  }, "animate-always"), N = o.useCallback(e => {
    x.current = e, null != g && (g.current = e)
  }, [g]);
  o.useLayoutEffect(() => {
    null != x.current && w !== i && x.current.scrollTo({
      to: 0
    })
  }, [i, w, x]);
  let T = (0, l.jsx)(E, {
    isMobile: d.tq,
    mobileSidebarOpen: j,
    closeAction: s
  });

  function R() {
    return null == r ? null : (0, l.jsx)(p.oXn, {
      className: c()(h.noticeRegion, {
        [h.noticeRegionHiddenSidebar]: S
      }),
      children: r
    }, i)
  }
  return (0, l.jsx)(l.Fragment, {
    children: _((e, r) => (0, l.jsxs)(a.animated.div, {
      style: e,
      className: h.standardSidebarView,
      children: [!r && (null == t ? null : (0, l.jsx)(p.f6W, {
        theme: O,
        children: e => (0, l.jsx)("div", {
          className: c()(h.sidebarRegion, e, {
            [h.flexFullWidth]: d.tq,
            [h.hidden]: d.tq && false === j
          }),
          children: (0, l.jsx)(p.h21, {
            className: h.sidebarRegionScroller,
            fade: true,
            children: (0, l.jsxs)("nav", {
              className: c()(h.sidebar, {
                [h.mobileSidebar]: d.tq
              }),
              children: [d.tq && (0, l.jsx)("div", {
                className: h.mobileSidebarHeader,
                children: T
              }), t]
            })
          })
        })
      })), function() {
        let e = null != v && null != s && j,
          t = d.tq && (0, l.jsxs)("div", {
            className: c()(h.mobileContentHeader, {
              [h.hideHamburger]: !e
            }),
            children: [e && (0, l.jsx)(u.r, {
              onClick: v
            }), T]
          });
        if ("custom" === m) return (0, l.jsxs)(f.W, {
          component: "div",
          className: h.contentRegion,
          children: [t, n, !d.tq && T, R()]
        });
        if ("scrollableCustom" === m) return (0, l.jsxs)(f.W, {
          component: "div",
          className: h.contentRegion,
          children: [t, (0, l.jsxs)(p.yWw, {
            className: c()(h.contentRegionScroller, S ? h.contentRegionHiddenSidebar : h.contentRegionShownSidebar),
            ref: N,
            children: [(0, l.jsx)(y.Provider, {
              value: x.current,
              children: (0, l.jsx)("div", {
                ref: C,
                className: h.contentColumnScrollable,
                children: (0, l.jsx)(p.JcV, {
                  containerRef: C,
                  children: n
                })
              })
            }), !d.tq && T]
          }), R()]
        });
        let r = P[null != m ? m : "default"];
        return (0, l.jsxs)(f.W, {
          component: "div",
          className: c()(h.contentRegion, {
            [h.hidden]: d.tq && true === j
          }),
          children: [(0, l.jsxs)("div", {
            className: h.contentTransitionWrap,
            children: [t, (0, l.jsxs)(p.yWw, {
              className: c()(h.contentRegionScroller, S ? h.contentRegionHiddenSidebar : h.contentRegionShownSidebar),
              ref: N,
              children: [(0, l.jsx)(y.Provider, {
                value: x.current,
                children: (0, l.jsx)(p.njP.Panel, {
                  id: i,
                  className: c()(h.contentColumn, h[r], {
                    [h.mobileContent]: d.tq
                  }),
                  ref: C,
                  style: d.tq ? {
                    maxWidth: window.innerWidth
                  } : true,
                  children: S ? n : (0, l.jsx)(p.JcV, {
                    containerRef: C,
                    children: n
                  })
                })
              }), !d.tq && T]
            })]
          }), R()]
        })
      }()]
    }))
  })
}