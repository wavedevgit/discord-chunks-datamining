/** Chunk was on web.js **/
/** chunk id: 493544, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ID: () => I,
  NM: () => A,
  Xi: () => S,
  ZP: () => P,
  bT: () => C
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk636606 = require("./636606.js"),
  Chunk608863 = require("./608863.jsx"),
  Chunk873546 = require("./873546.js"),
  Chunk215569 = require("./215569.js"),
  Chunk481060 = require("./481060.js"),
  Chunk110924 = require("./110924.js"),
  Chunk358085 = require("./358085.js"),
  Chunk425493 = require("./425493.jsx"),
  Chunk551955 = require("./551955.js");

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
  var n, r, i = v(e, t);
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (r = 0; r < a.length; r++) n = a[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
  }
  return i
}

function v(e, t) {
  if (null == e) return {};
  var n, r, i = {},
    a = Object.keys(e);
  for (r = 0; r < a.length; r++) n = a[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
  return i
}
let I = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  T = Chunk473749.createContext(null);
class S extends(r = Chunk473749.PureComponent) {
  renderContent() {
    let e = this.props,
      {
        scrollerRef: t
      } = module,
      n = O(module, ["scrollerRef"]);
    return (0, Chunk54381.jsx)("div", {
      className: Chunk551955.customContainer,
      children: (0, Chunk54381.jsx)(Chunk481060._2F, y(E({}, require), {
        className: s()(Chunk551955.customScroller, Chunk551955.contentRegionScroller),
        ref: exports
      }))
    })
  }
  render() {
    return (0, Chunk54381.jsx)("div", {
      className: Chunk551955.customColumn,
      children: this.renderContent()
    })
  }
}

function A(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("div", {
    className: m.customColumn,
    children: (0, i.jsx)("div", {
      className: m.customContainer,
      children: (0, i.jsx)(f.w0Z, {
        className: s()(m.customScroller, m.contentRegionScroller),
        children: t
      })
    })
  })
}
g(S, "defaultProps", {
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
  } = e, o = a.useRef(null);
  return null == r ? null : (0, i.jsx)("div", {
    className: s()(m.toolsContainer, {
      [m.mobileToolsContainer]: t,
      [m.mobileSidebarTools]: t,
      [m.closeIconOnly]: !n,
      [m.isMobileAndroid]: !n && true === (0, p.isAndroidWeb)()
    }),
    ref: o,
    children: (0, i.jsx)(f.JcV, {
      containerRef: o,
      children: (0, i.jsx)("div", {
        className: m.tools,
        children: (0, i.jsx)(h.Z, {
          className: s()({
            [m.mobileToolsCloseIcon]: t
          }),
          closeAction: r,
          keybind: "ESC"
        })
      })
    })
  })
}
let P = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: r,
    section: o,
    closeAction: p,
    sidebarTheme: h,
    contentType: g,
    scrollerRef: E,
    mobileSidebarOpen: b,
    toggleSidebar: y,
    hideSidebar: O = false
  } = e, v = a.useRef(null), I = a.useRef(null), S = (0, _.Z)(o), A = (0, f.Yzy)(O, {
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
    v.current = e, null != E && (E.current = e)
  }, [E]);
  a.useLayoutEffect(() => {
    null != v.current && S !== o && v.current.scrollTo({
      to: 0
    })
  }, [o, S, v]);
  let P = (0, i.jsx)(R, {
    isMobile: u.tq,
    mobileSidebarOpen: b,
    closeAction: p
  });

  function D() {
    return null == r ? null : (0, i.jsx)(f.oXn, {
      className: s()(m.noticeRegion, {
        [m.noticeRegionHiddenSidebar]: O
      }),
      children: r
    }, o)
  }

  function w() {
    let e = null != y && null != p && b,
      t = u.tq && (0, i.jsxs)("div", {
        className: s()(m.mobileContentHeader, {
          [m.hideHamburger]: !e
        }),
        children: [e && (0, i.jsx)(c.r, {
          onClick: y
        }), P]
      });
    if ("custom" === g) return (0, i.jsxs)(d.W, {
      component: "div",
      className: m.contentRegion,
      children: [t, n, !u.tq && P, D()]
    });
    if ("scrollableCustom" === g) return (0, i.jsxs)(d.W, {
      component: "div",
      className: m.contentRegion,
      children: [t, (0, i.jsxs)(f.yWw, {
        className: s()(m.contentRegionScroller, O ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
        ref: C,
        children: [(0, i.jsx)(T.Provider, {
          value: v.current,
          children: (0, i.jsx)("div", {
            ref: I,
            className: m.contentColumnScrollable,
            children: (0, i.jsx)(f.JcV, {
              containerRef: I,
              children: n
            })
          })
        }), !u.tq && P]
      }), D()]
    });
    let r = N[null != g ? g : "default"];
    return (0, i.jsxs)(d.W, {
      component: "div",
      className: s()(m.contentRegion, {
        [m.hidden]: u.tq && true === b
      }),
      children: [(0, i.jsxs)("div", {
        className: m.contentTransitionWrap,
        children: [t, (0, i.jsxs)(f.yWw, {
          className: s()(m.contentRegionScroller, O ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
          ref: C,
          children: [(0, i.jsx)(T.Provider, {
            value: v.current,
            children: (0, i.jsx)(f.njP.Panel, {
              id: o,
              className: s()(m.contentColumn, m[r], {
                [m.mobileContent]: u.tq
              }),
              ref: I,
              style: u.tq ? {
                maxWidth: window.innerWidth
              } : true,
              children: O ? n : (0, i.jsx)(f.JcV, {
                containerRef: I,
                children: n
              })
            })
          }), !u.tq && P]
        })]
      }), D()]
    })
  }

  function L() {
    return null == t ? null : (0, i.jsx)(f.f6W, {
      theme: h,
      children: e => (0, i.jsx)("div", {
        className: s()(m.sidebarRegion, e, {
          [m.flexFullWidth]: u.tq,
          [m.hidden]: u.tq && false === b
        }),
        children: (0, i.jsx)(f.h21, {
          className: m.sidebarRegionScroller,
          fade: true,
          children: (0, i.jsxs)("nav", {
            className: s()(m.sidebar, {
              [m.mobileSidebar]: u.tq
            }),
            children: [u.tq && (0, i.jsx)("div", {
              className: m.mobileSidebarHeader,
              children: P
            }), t]
          })
        })
      })
    })
  }
  return (0, i.jsx)(i.Fragment, {
    children: A((e, t) => (0, i.jsxs)(l.animated.div, {
      style: e,
      className: m.standardSidebarView,
      children: [!t && L(), w()]
    }))
  })
}