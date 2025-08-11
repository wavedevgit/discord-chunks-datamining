/** Chunk was on 72762 **/
/** chunk id: 493544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  ID: () => j,
  NM: () => S,
  Xi: () => v,
  ZP: () => C,
  bT: () => E
});
var r, i, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk608863 = require("./608863.js"),
  Chunk873546 = require("./873546.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk358085 = require("./358085.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk319586 = require("./319586.js");

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
    return <div className={Chunk319586.customContainer}><Chunk481060._2F{...e = function(e) {
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
        className: a()(Chunk319586.customScroller, Chunk319586.contentRegionScroller),
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
      }), module} /></div>
  }
  render() {
    return <div className={Chunk319586.customColumn}>{this.renderContent()}</div>
  }
}

function S(e) {
  let {
    children: t
  } = e;
  return <div className={m.customColumn}><div className={m.customContainer}><p.w0Z className={a()(m.customScroller, m.contentRegionScroller)}>{t}</p.w0Z></div></div>
}
g(v, "defaultProps", {
  paddingTop: 60,
  paddingBottom: 60
});
var E = ((r = {}).MINIMAL = "minimal", r.CUSTOM = "custom", r.DEFAULT = "default", r.WIDE = "wide", r.SCROLLABLE_CUSTOM = "scrollableCustom", r);
let x = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide",
  scrollableCustom: "contentColumnCustom"
});

function P(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: r
  } = e, i = s.useRef(null);
  return null == r ? null : <div className={a()(m.toolsContainer, {
      [m.mobileToolsContainer]: t,
      [m.mobileSidebarTools]: t,
      [m.closeIconOnly]: !n,
      [m.isMobileAndroid]: !n && true === (0, O.isAndroidWeb)()
    })} ref={i}><p.JcV containerRef={i}><div className={m.tools}><h.Z className={a()({
            [m.mobileToolsCloseIcon]: t
          })} closeAction={r} keybind={"ESC"} /></div></p.JcV></div>
}
let C = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: r,
    section: i,
    closeAction: o,
    sidebarTheme: O,
    contentType: h,
    scrollerRef: g,
    mobileSidebarOpen: j,
    toggleSidebar: v,
    hideSidebar: S = false
  } = e, E = s.useRef(null), C = s.useRef(null), w = (0, b.Z)(i), N = (0, p.Yzy)(S, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: S,
    config: c.config.stiff
  }, "animate-always"), _ = s.useCallback(e => {
    E.current = e, null != g && (g.current = e)
  }, [g]);
  s.useLayoutEffect(() => {
    null != E.current && w !== i && E.current.scrollTo({
      to: 0
    })
  }, [i, w, E]);
  let T = <P isMobile={d.tq} mobileSidebarOpen={j} closeAction={o} />;

  function R() {
    return null == r ? null : <p.oXn className={a()(m.noticeRegion, {
        [m.noticeRegionHiddenSidebar]: S
      })}>{r}</p.oXn>
  }
  return <l.Fragment>{N((e, r) => (0, l.jsxs)(c.animated.div, {
      style: e,
      className: m.standardSidebarView,
      children: [!r && (null == t ? null : (0, l.jsx)(p.f6W, {
        theme: O,
        children: e => (0, l.jsx)("div", {
          className: a()(m.sidebarRegion, e, {
            [m.flexFullWidth]: d.tq,
            [m.hidden]: d.tq && false === j
          }),
          children: (0, l.jsx)(p.h21, {
            className: m.sidebarRegionScroller,
            fade: true,
            children: (0, l.jsxs)("nav", {
              className: a()(m.sidebar, {
                [m.mobileSidebar]: d.tq
              }),
              children: [d.tq && (0, l.jsx)("div", {
                className: m.mobileSidebarHeader,
                children: T
              }), t]
            })
          })
        })
      })), function() {
        let e = null != v && null != o && j,
          t = d.tq && (0, l.jsxs)("div", {
            className: a()(m.mobileContentHeader, {
              [m.hideHamburger]: !e
            }),
            children: [e && (0, l.jsx)(u.r, {
              onClick: v
            }), T]
          });
        if ("custom" === h) return (0, l.jsxs)(f.W, {
          component: "div",
          className: m.contentRegion,
          children: [t, n, !d.tq && T, R()]
        });
        if ("scrollableCustom" === h) return (0, l.jsxs)(f.W, {
          component: "div",
          className: m.contentRegion,
          children: [t, (0, l.jsxs)(p.yWw, {
            className: a()(m.contentRegionScroller, S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
            ref: _,
            children: [(0, l.jsx)(y.Provider, {
              value: E.current,
              children: (0, l.jsx)("div", {
                ref: C,
                className: m.contentColumnScrollable,
                children: (0, l.jsx)(p.JcV, {
                  containerRef: C,
                  children: n
                })
              })
            }), !d.tq && T]
          }), R()]
        });
        let r = x[null != h ? h : "default"];
        return (0, l.jsxs)(f.W, {
          component: "div",
          className: a()(m.contentRegion, {
            [m.hidden]: d.tq && true === j
          }),
          children: [(0, l.jsxs)("div", {
            className: m.contentTransitionWrap,
            children: [t, (0, l.jsxs)(p.yWw, {
              className: a()(m.contentRegionScroller, S ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
              ref: _,
              children: [(0, l.jsx)(y.Provider, {
                value: E.current,
                children: (0, l.jsx)(p.njP.Panel, {
                  id: i,
                  className: a()(m.contentColumn, m[r], {
                    [m.mobileContent]: d.tq
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
    }))}</l.Fragment>
}