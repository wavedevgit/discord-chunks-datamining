/** Chunk was on 40580 **/
"use strict";
r.d(t, {
  ID: () => x,
  NM: () => C,
  Xi: () => y,
  ZP: () => _,
  bT: () => v
});
var n, s, i = r(200651),
  o = r(192379),
  l = r(120356),
  a = r.n(l),
  c = r(642128),
  u = r(608863),
  d = r(873546),
  p = r(215569),
  f = r(481060),
  b = r(110924),
  g = r(358085),
  O = r(425493),
  m = r(599662);

function h(e, t, r) {
  return t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e
}
let x = {
    HEADER: "HEADER",
    DIVIDER: "DIVIDER",
    CUSTOM: "CUSTOM"
  },
  j = o.createContext(null);
class y extends(s = o.PureComponent) {
  renderContent() {
    var e, t;
    let r = this.props,
      {
        scrollerRef: n
      } = r,
      s = function(e, t) {
        if (null == e) return {};
        var r, n, s = function(e, t) {
          if (null == e) return {};
          var r, n, s = {},
            i = Object.keys(e);
          for (n = 0; n < i.length; n++) r = i[n], t.indexOf(r) >= 0 || (s[r] = e[r]);
          return s
        }(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (n = 0; n < i.length; n++) r = i[n], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (s[r] = e[r])
        }
        return s
      }(r, ["scrollerRef"]);
    return (0, i.jsx)("div", {
      className: m.customContainer,
      children: (0, i.jsx)(f._2F, (e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            h(e, t, r[t])
          })
        }
        return e
      }({}, s), t = t = {
        className: a()(m.customScroller, m.contentRegionScroller),
        ref: n
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(t)).forEach(function(r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
      }), e))
    })
  }
  render() {
    return (0, i.jsx)("div", {
      className: m.customColumn,
      children: this.renderContent()
    })
  }
}

function C(e) {
  let {
    children: t
  } = e;
  return (0, i.jsx)("div", {
    className: m.customColumn,
    children: (0, i.jsx)("div", {
      className: m.customContainer,
      children: (0, i.jsx)(f.w0Z, {
        className: a()(m.customScroller, m.contentRegionScroller),
        children: t
      })
    })
  })
}
h(y, "defaultProps", {
  paddingTop: 60,
  paddingBottom: 60
});
var v = ((n = {}).MINIMAL = "minimal", n.CUSTOM = "custom", n.DEFAULT = "default", n.WIDE = "wide", n.SCROLLABLE_CUSTOM = "scrollableCustom", n);
let P = Object.freeze({
  minimal: "contentColumnMinimal",
  custom: "contentColumnCustom",
  default: "contentColumnDefault",
  wide: "contentColumnWide",
  scrollableCustom: "contentColumnCustom"
});

function S(e) {
  let {
    isMobile: t,
    mobileSidebarOpen: r,
    closeAction: n
  } = e, s = o.useRef(null);
  return null == n ? null : (0, i.jsx)("div", {
    className: a()(m.toolsContainer, {
      [m.mobileToolsContainer]: t,
      [m.mobileSidebarTools]: t,
      [m.closeIconOnly]: !r,
      [m.isMobileAndroid]: !r && !0 === (0, g.isAndroidWeb)()
    }),
    ref: s,
    children: (0, i.jsx)(f.JcV, {
      containerRef: s,
      children: (0, i.jsx)("div", {
        className: m.tools,
        children: (0, i.jsx)(O.Z, {
          className: a()({
            [m.mobileToolsCloseIcon]: t
          }),
          closeAction: n,
          keybind: "ESC"
        })
      })
    })
  })
}
let _ = function(e) {
  let {
    sidebar: t,
    content: r,
    notice: n,
    section: s,
    closeAction: l,
    sidebarTheme: g,
    contentType: O,
    scrollerRef: h,
    mobileSidebarOpen: x,
    toggleSidebar: y,
    hideSidebar: C = !1
  } = e, v = o.useRef(null), _ = o.useRef(null), N = (0, b.Z)(s), E = (0, f.Yzy)(C, {
    from: {
      position: "absolute",
      opacity: 0
    },
    enter: {
      opacity: 1
    },
    reverse: C,
    config: c.config.stiff
  }, "animate-always"), w = o.useCallback(e => {
    v.current = e, null != h && (h.current = e)
  }, [h]);
  o.useLayoutEffect(() => {
    null != v.current && N !== s && v.current.scrollTo({
      to: 0
    })
  }, [s, N, v]);
  let T = (0, i.jsx)(S, {
    isMobile: d.tq,
    mobileSidebarOpen: x,
    closeAction: l
  });

  function R() {
    return null == n ? null : (0, i.jsx)(f.oXn, {
      className: a()(m.noticeRegion, {
        [m.noticeRegionHiddenSidebar]: C
      }),
      children: n
    }, s)
  }
  return (0, i.jsx)(i.Fragment, {
    children: E((e, n) => (0, i.jsxs)(c.animated.div, {
      style: e,
      className: m.standardSidebarView,
      children: [!n && (null == t ? null : (0, i.jsx)(f.f6W, {
        theme: g,
        children: e => (0, i.jsx)("div", {
          className: a()(m.sidebarRegion, e, {
            [m.flexFullWidth]: d.tq,
            [m.hidden]: d.tq && !1 === x
          }),
          children: (0, i.jsx)(f.h21, {
            className: m.sidebarRegionScroller,
            fade: !0,
            children: (0, i.jsxs)("nav", {
              className: a()(m.sidebar, {
                [m.mobileSidebar]: d.tq
              }),
              children: [d.tq && (0, i.jsx)("div", {
                className: m.mobileSidebarHeader,
                children: T
              }), t]
            })
          })
        })
      })), function() {
        let e = null != y && null != l && x,
          t = d.tq && (0, i.jsxs)("div", {
            className: a()(m.mobileContentHeader, {
              [m.hideHamburger]: !e
            }),
            children: [e && (0, i.jsx)(u.r, {
              onClick: y
            }), T]
          });
        if ("custom" === O) return (0, i.jsxs)(p.W, {
          component: "div",
          className: m.contentRegion,
          children: [t, r, !d.tq && T, R()]
        });
        if ("scrollableCustom" === O) return (0, i.jsxs)(p.W, {
          component: "div",
          className: m.contentRegion,
          children: [t, (0, i.jsxs)(f.yWw, {
            className: a()(m.contentRegionScroller, C ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
            ref: w,
            children: [(0, i.jsx)(j.Provider, {
              value: v.current,
              children: (0, i.jsx)("div", {
                ref: _,
                className: m.contentColumnScrollable,
                children: (0, i.jsx)(f.JcV, {
                  containerRef: _,
                  children: r
                })
              })
            }), !d.tq && T]
          }), R()]
        });
        let n = P[null != O ? O : "default"];
        return (0, i.jsxs)(p.W, {
          component: "div",
          className: a()(m.contentRegion, {
            [m.hidden]: d.tq && !0 === x
          }),
          children: [(0, i.jsxs)("div", {
            className: m.contentTransitionWrap,
            children: [t, (0, i.jsxs)(f.yWw, {
              className: a()(m.contentRegionScroller, C ? m.contentRegionHiddenSidebar : m.contentRegionShownSidebar),
              ref: w,
              children: [(0, i.jsx)(j.Provider, {
                value: v.current,
                children: (0, i.jsx)(f.njP.Panel, {
                  id: s,
                  className: a()(m.contentColumn, m[n], {
                    [m.mobileContent]: d.tq
                  }),
                  ref: _,
                  style: d.tq ? {
                    maxWidth: window.innerWidth
                  } : void 0,
                  children: C ? r : (0, i.jsx)(f.JcV, {
                    containerRef: _,
                    children: r
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