/** Chunk was on web.js **/
/** chunk id: 361739, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Ay: () => w,
  Fq: () => v,
  Py: () => C,
  gJ: () => T,
  ic: () => I
});
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  o = require.n(Chunk503698),
  Chunk108531 = require("./108531.js"),
  Chunk359459 = require("./359459.jsx"),
  Chunk607399 = require("./607399.js"),
  Chunk73939 = require("./73939.js"),
  Chunk397927 = require("./397927.js"),
  Chunk475743 = require("./475743.js"),
  Chunk723702 = require("./723702.js"),
  Chunk684136 = require("./684136.jsx"),
  Chunk63135 = require("./63135.js");

function g(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function E(e) {
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
}

function b(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : b(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function O(e, t) {
  if (null == e) return {};
  var n, r, i, a = {};
  if ("u" > typeof Reflect && Reflect.ownKeys) {
    for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a
  }
  if (a = A(e, t), Object.getOwnPropertySymbols)
    for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++) r = n[i], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
  return a
}

function A(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.getOwnPropertyNames(e);
  for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
  return i
}
let v = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  S = Chunk64700.createContext(null);
class I extends(r = Chunk64700.PureComponent) {
  renderContent() {
    let e = this.props,
      {
        scrollerRef: t
      } = e,
      n = O(e, ["scrollerRef"]);
    return (0, i.jsx)("div", {
      className: m.customContainer,
      children: (0, i.jsx)(f.Eie, y(E({}, n), {
        className: o()(m.customScroller, m.contentRegionScroller),
        ref: t
      }))
    })
  }
  render() {
    return (0, i.jsx)("div", {
      className: m.customColumn,
      children: this.renderContent()
    })
  }
}

function T(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("div", {
    className: m.customColumn,
    children: (0, i.jsx)("div", {
      className: m.customContainer,
      children: (0, i.jsx)(f.ArX, {
        className: o()(m.customScroller, m.contentRegionScroller),
        children: t
      })
    })
  })
}
g(I, "defaultProps", {
  paddingTop: 60,
  paddingBottom: 60
});
var C = function(e) {
  return e.MINIMAL = "minimal", e.CUSTOM = "custom", e.DEFAULT = "default", e.WIDE = "wide", e.SCROLLABLE_CUSTOM = "scrollableCustom", e
}({});
let N = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide",
  scrollableCustom: "contentColumnCustom"
});

function R(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: n,
    closeAction: r
  } = e, s = a.useRef(null);
  return null == r ? null : (0, i.jsx)("div", {
    className: o()(m.toolsContainer, {
      [m.mobileToolsContainer]: t,
      [m.mobileSidebarTools]: t,
      [m.closeIconOnly]: !n,
      [m.isMobileAndroid]: !n && true === (0, _.isAndroidWeb)()
    }),
    ref: s,
    children: (0, i.jsx)(f.xpW, {
      containerRef: s,
      children: (0, i.jsx)("div", {
        className: m.tools,
        children: (0, i.jsx)(h.A, {
          className: o()({
            [m.mobileToolsCloseIcon]: t
          }),
          closeAction: r,
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
    notice: r,
    section: s,
    closeAction: _,
    sidebarTheme: h,
    contentType: g,
    scrollerRef: E,
    mobileSidebarOpen: b,
    toggleSidebar: y,
    hideSidebar: O = false
  } = e, A = a.useRef(null), v = a.useRef(null), I = (0, p.A)(s), T = (0, f.pnh)(O, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: O,
    config: l.config.stiff
  }, "animate-always"), C = a.useCallback(e => {
    A.current = e, null != E && (E.current = e)
  }, [E]);
  a.useLayoutEffect(() => {
    null != A.current && I !== s && A.current.scrollTo({
      to: 0
    })
  }, [s, I, A]);
  let w = (0, i.jsx)(R, {
    isMobile: u.Fr,
    mobileSidebarOpen: b,
    closeAction: _
  });

  function P() {
    return null == r ? null : (0, i.jsx)(f.FQk, {
      className: o()(m.noticeRegion, {
        [m.noticeRegionHiddenSidebar]: O
      }),
      children: r
    }, s)
  }

  function D() {
    let e = null != y && null != _ && b,
      t = u.Fr && (0, i.jsxs)("div", {
        className: o()(m.mobileContentHeader, {
          [m.hideHamburger]: !e
        }),
        children: [e && (0, i.jsx)(c._, {
          onClick: y
        }), w]
      });
    if ("custom" === g) return (0, i.jsxs)(d.F, {
      component: "div",
      className: m.contentRegion,
      children: [t, n, !u.Fr && w, P()]
    });
    if ("scrollableCustom" === g) return (0, i.jsxs)(d.F, {
      component: "div",
      className: m.contentRegion,
      children: [t, (0, i.jsxs)(f.GtU, {
        className: o()(m.contentRegionScroller, O ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
        ref: C,
        children: [(0, i.jsx)(S.Provider, {
          value: A.current,
          children: (0, i.jsx)("div", {
            ref: v,
            className: m.contentColumnScrollable,
            children: (0, i.jsx)(f.xpW, {
              containerRef: v,
              children: n
            })
          })
        }), !u.Fr && w]
      }), P()]
    });
    let r = N[null != g ? g : "default"];
    return (0, i.jsxs)(d.F, {
      component: "div",
      className: o()(m.contentRegion, {
        [m.hidden]: u.Fr && true === b
      }),
      children: [(0, i.jsxs)("div", {
        className: m.contentTransitionWrap,
        children: [t, (0, i.jsxs)(f.GtU, {
          className: o()(m.contentRegionScroller, O ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
          ref: C,
          children: [(0, i.jsx)(S.Provider, {
            value: A.current,
            children: (0, i.jsx)(f.VQ0.Panel, {
              id: s,
              className: o()(m.contentColumn, m[r], {
                [m.mobileContent]: u.Fr
              }),
              ref: v,
              style: u.Fr ? {
                maxWidth: window.innerWidth
              } : true,
              children: O ? n : (0, i.jsx)(f.xpW, {
                containerRef: v,
                children: n
              })
            })
          }), !u.Fr && w]
        })]
      }), P()]
    })
  }

  function x() {
    return null == t ? null : (0, i.jsx)(f.NPJ, {
      theme: h,
      children: e => (0, i.jsx)("div", {
        className: o()(m.sidebarRegion, e, {
          [m.flexFullWidth]: u.Fr,
          [m.hidden]: u.Fr && false === b
        }),
        children: (0, i.jsx)(f.ChK, {
          className: m.sidebarRegionScroller,
          fade: true,
          children: (0, i.jsxs)("nav", {
            className: o()(m.sidebar, {
              [m.mobileSidebar]: u.Fr
            }),
            children: [u.Fr && (0, i.jsx)("div", {
              className: m.mobileSidebarHeader,
              children: w
            }), t]
          })
        })
      })
    })
  }
  return (0, i.jsx)(i.Fragment, {
    children: T((e, t) => (0, i.jsxs)(l.animated.div, {
      style: e,
      className: m.standardSidebarView,
      children: [!t && x(), D()]
    }))
  })
}