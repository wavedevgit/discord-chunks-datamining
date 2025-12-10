/** Chunk was on web.js **/
/** chunk id: 493544, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  ID: () => S,
  NM: () => C,
  Xi: () => T,
  ZP: () => R,
  bT: () => A
});
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk467721 = require("./467721.js"),
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
let S = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  I = Chunk473749.createContext(null);
class T extends(r = Chunk473749.PureComponent) {
  renderContent() {
    let e = this.props,
      {
        scrollerRef: t
      } = module,
      n = O(module, ["scrollerRef"]);
    return (0, Chunk54381.jsx)("div", {
      className: Chunk630016.customContainer,
      children: (0, Chunk54381.jsx)(Chunk481060._2F, y(E({}, require), {
        className: s()(Chunk630016.customScroller, Chunk630016.contentRegionScroller),
        ref: exports
      }))
    })
  }
  render() {
    return (0, Chunk54381.jsx)("div", {
      className: Chunk630016.customColumn,
      children: this.renderContent()
    })
  }
}

function C(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("div", {
    className: h.customColumn,
    children: (0, i.jsx)("div", {
      className: h.customContainer,
      children: (0, i.jsx)(f.w0Z, {
        className: s()(h.customScroller, h.contentRegionScroller),
        children: t
      })
    })
  })
}
g(T, "defaultProps", {
  paddingTop: 60,
  paddingBottom: 60
});
var A = function(e) {
  return e.MINIMAL = "minimal", e.CUSTOM = "custom", e.DEFAULT = "default", e.WIDE = "wide", e.SCROLLABLE_CUSTOM = "scrollableCustom", e
}({});
let N = Object.freeze({
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
  } = e, o = a.useRef(null);
  return null == r ? null : (0, i.jsx)("div", {
    className: s()(h.toolsContainer, {
      [h.mobileToolsContainer]: t,
      [h.mobileSidebarTools]: t,
      [h.closeIconOnly]: !n,
      [h.isMobileAndroid]: !n && true === (0, _.isAndroidWeb)()
    }),
    ref: o,
    children: (0, i.jsx)(f.JcV, {
      containerRef: o,
      children: (0, i.jsx)("div", {
        className: h.tools,
        children: (0, i.jsx)(m.Z, {
          className: s()({
            [h.mobileToolsCloseIcon]: t
          }),
          closeAction: r,
          keybind: "ESC"
        })
      })
    })
  })
}
let R = function(e) {
  let {
    sidebar: t,
    content: n,
    notice: r,
    section: o,
    closeAction: _,
    sidebarTheme: m,
    contentType: g,
    scrollerRef: E,
    mobileSidebarOpen: b,
    toggleSidebar: y,
    hideSidebar: O = false
  } = e, v = a.useRef(null), S = a.useRef(null), T = (0, p.Z)(o), C = (0, f.Yzy)(O, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: O,
    config: l.config.stiff
  }, "animate-always"), A = a.useCallback(e => {
    v.current = e, null != E && (E.current = e)
  }, [E]);
  a.useLayoutEffect(() => {
    null != v.current && T !== o && v.current.scrollTo({
      to: 0
    })
  }, [o, T, v]);
  let R = (0, i.jsx)(P, {
    isMobile: u.tq,
    mobileSidebarOpen: b,
    closeAction: _
  });

  function w() {
    return null == r ? null : (0, i.jsx)(f.oXn, {
      className: s()(h.noticeRegion, {
        [h.noticeRegionHiddenSidebar]: O
      }),
      children: r
    }, o)
  }

  function D() {
    let e = null != y && null != _ && b,
      t = u.tq && (0, i.jsxs)("div", {
        className: s()(h.mobileContentHeader, {
          [h.hideHamburger]: !e
        }),
        children: [e && (0, i.jsx)(c.r, {
          onClick: y
        }), R]
      });
    if ("custom" === g) return (0, i.jsxs)(d.W, {
      component: "div",
      className: h.contentRegion,
      children: [t, n, !u.tq && R, w()]
    });
    if ("scrollableCustom" === g) return (0, i.jsxs)(d.W, {
      component: "div",
      className: h.contentRegion,
      children: [t, (0, i.jsxs)(f.yWw, {
        className: s()(h.contentRegionScroller, O ? h.contentRegionHiddenSidebar : h.contentRegionShownSidebar),
        ref: A,
        children: [(0, i.jsx)(I.Provider, {
          value: v.current,
          children: (0, i.jsx)("div", {
            ref: S,
            className: h.contentColumnScrollable,
            children: (0, i.jsx)(f.JcV, {
              containerRef: S,
              children: n
            })
          })
        }), !u.tq && R]
      }), w()]
    });
    let r = N[null != g ? g : "default"];
    return (0, i.jsxs)(d.W, {
      component: "div",
      className: s()(h.contentRegion, {
        [h.hidden]: u.tq && true === b
      }),
      children: [(0, i.jsxs)("div", {
        className: h.contentTransitionWrap,
        children: [t, (0, i.jsxs)(f.yWw, {
          className: s()(h.contentRegionScroller, O ? h.contentRegionHiddenSidebar : h.contentRegionShownSidebar),
          ref: A,
          children: [(0, i.jsx)(I.Provider, {
            value: v.current,
            children: (0, i.jsx)(f.njP.Panel, {
              id: o,
              className: s()(h.contentColumn, h[r], {
                [h.mobileContent]: u.tq
              }),
              ref: S,
              style: u.tq ? {
                maxWidth: window.innerWidth
              } : true,
              children: O ? n : (0, i.jsx)(f.JcV, {
                containerRef: S,
                children: n
              })
            })
          }), !u.tq && R]
        })]
      }), w()]
    })
  }

  function x() {
    return null == t ? null : (0, i.jsx)(f.f6W, {
      theme: m,
      children: e => (0, i.jsx)("div", {
        className: s()(h.sidebarRegion, e, {
          [h.flexFullWidth]: u.tq,
          [h.hidden]: u.tq && false === b
        }),
        children: (0, i.jsx)(f.h21, {
          className: h.sidebarRegionScroller,
          fade: true,
          children: (0, i.jsxs)("nav", {
            className: s()(h.sidebar, {
              [h.mobileSidebar]: u.tq
            }),
            children: [u.tq && (0, i.jsx)("div", {
              className: h.mobileSidebarHeader,
              children: R
            }), t]
          })
        })
      })
    })
  }
  return (0, i.jsx)(i.Fragment, {
    children: C((e, t) => (0, i.jsxs)(l.animated.div, {
      style: e,
      className: h.standardSidebarView,
      children: [!t && x(), D()]
    }))
  })
}