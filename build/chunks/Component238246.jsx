/** Chunk was on web.js **/
/** chunk id: 238246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => q,
  Z: () => J
}), require("./388685.js");
var r, Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk319498 = require("./319498.js"),
  Chunk731965 = require("./731965.js"),
  Chunk966044 = require("./966044.jsx"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk490173 = require("./490173.jsx"),
  Chunk175724 = require("./175724.js"),
  Chunk280492 = require("./280492.js"),
  Chunk607070 = require("./607070.js"),
  Chunk899663 = require("./899663.jsx"),
  Chunk317381 = require("./317381.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk999203 = require("./999203.js"),
  Chunk260035 = require("./260035.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk950796 = require("./950796.jsx"),
  Chunk587061 = require("./587061.js"),
  Chunk248687 = require("./248687.jsx"),
  Chunk280049 = require("./280049.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk22205 = require("./22205.jsx"),
  Chunk984802 = require("./984802.js"),
  Chunk746106 = require("./746106.jsx"),
  Chunk892071 = require("./892071.jsx"),
  Chunk358085 = require("./358085.js"),
  Chunk62883 = require("./62883.jsx"),
  Chunk998502 = require("./998502.js"),
  Chunk473159 = require("./473159.js"),
  Chunk928518 = require("./928518.js"),
  Chunk981631 = require("./981631.js"),
  Chunk501787 = require("./501787.js"),
  Chunk294863 = require("./294863.js");

function Y(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function W(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      Y(e, t, n[t])
    })
  }
  return e
}

function K(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function z(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : K(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function q(e) {
  let {
    withTitleBar: t,
    isFullScreen: n
  } = e;
  return t && k.isPlatformEmbedded && !n
}
class Q extends(r = Chunk473749.Component) {
  componentDidMount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")), this.updateTitle(), this.updateClientTheme(), (0, Z.O)(e), e.addEventListener("blur", this.handleBlur), k.isPlatformEmbedded ? t.addEventListener("contextmenu", U.contextMenuCallbackNative, false) : t.addEventListener("contextmenu", U.contextMenuCallbackWeb, false), e.addEventListener("beforeunload", this.beforeUnload), this.registerPopoutGlobalKeybinds()
  }
  componentDidUpdate(e) {
    let {
      title: t,
      clientThemesCSS: n
    } = this.props;
    e.title !== t && this.updateTitle(), e.clientThemesCSS !== n && this.updateClientTheme()
  }
  componentWillUnmount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    this.unregisterPopoutGlobalKeybinds(), e.removeEventListener("blur", this.handleBlur), k.isPlatformEmbedded ? t.removeEventListener("contextmenu", U.contextMenuCallbackNative) : t.removeEventListener("contextmenu", U.contextMenuCallbackWeb), (0, d.j)(() => h.s9z.setState(e => z(W({}, e), {
      [h.u1M]: []
    }))), e.removeEventListener("beforeunload", this.beforeUnload)
  }
  updateTitle() {
    let {
      title: e,
      guestWindow: t
    } = this.props, n = t.document.querySelector("title");
    null != n && (n.innerText = e)
  }
  updateClientTheme() {
    let {
      clientThemesCSS: e,
      guestWindow: t
    } = this.props, n = t.document, r = false, i = n.head;
    c()(null != i, "Window document ".concat(r ? "body" : "head", " was null"));
    let a = i.querySelector("style[".concat(I.PQ, "]"));
    if (null != a) {
      a.textContent = e;
      return
    }
    let o = n.createElement("style");
    o.setAttribute(I.PQ, "true"), o.textContent = e, i.appendChild(o)
  }
  registerPopoutGlobalKeybinds() {
    var e;
    let {
      guestWindow: t
    } = this.props, n = t.document;
    for (let t of (this._combokeys = (0, w.r)(n.documentElement), [E.iN, E.oV, g.f, ...null != (e = this.props.keybinds) ? e : []]))
      if (t.comboKeysBindGlobal)
        for (let e of t.binds) this._combokeys.bindGlobal(e, (e, n) => ("function" == typeof t.action && t.action(e, n), false))
  }
  unregisterPopoutGlobalKeybinds() {
    null != this._combokeys && this._combokeys.reset()
  }
  render() {
    let {
      forcedColors: e,
      children: t,
      windowKey: n,
      isFullScreen: r,
      withTitleBar: a,
      guestWindow: o,
      clientThemesClassName: l,
      contentClassName: c,
      themeOverride: d,
      titleBarTheme: _,
      hideModals: g = false,
      appContext: E
    } = this.props, b = q({
      withTitleBar: a,
      isFullScreen: r
    }), O = n === V.$J ? x.Z : P.Z;
    return (0, i.jsx)(u.VK, {
      children: (0, i.jsx)(j.w, {
        windowKey: n,
        themeOverride: d,
        children: (0, i.jsx)(y.Z, {
          children: (0, i.jsxs)(h.JcV, {
            containerRef: this.rootRef,
            children: [(0, i.jsx)(X, {
              guestWindow: o,
              className: l,
              children: (0, i.jsxs)(O, {
                children: [(0, i.jsx)(C.Co, {}), (0, i.jsx)(D.Wu, {
                  appContext: null != E ? E : B.IlC.POPOUT,
                  renderWindow: o,
                  children: (0, i.jsx)(T.m, {
                    children: (0, i.jsxs)(R.yP, {
                      children: [(0, i.jsxs)("div", {
                        className: H.popout,
                        children: [b && (0, i.jsx)(p.f6W, {
                          theme: _,
                          children: e => (0, i.jsx)(A.TF, {
                            windowKey: n,
                            className: s()(e, H.titleBar)
                          })
                        }), (0, i.jsx)("div", {
                          className: s()(H.content, c),
                          children: t
                        })]
                      }), !g && (0, i.jsx)(h.nKe, {}), (0, i.jsx)(m.Z, {}), (0, i.jsx)(f.uZ, {}), (0, i.jsx)(R.Un, {})]
                    })
                  })
                })]
              })
            }), (0, i.jsx)(p.OUJ, {})]
          })
        })
      }, e)
    })
  }
  constructor(...e) {
    super(...e), Y(this, "rootRef", a.createRef()), Y(this, "_cleanupWindowActionCreators", true), Y(this, "_combokeys", null), Y(this, "beforeUnload", e => {
      let {
        onBeforeUnload: t
      } = this.props, n = () => {
        F.Z.unmountWindow(this.props.windowKey), k.isPlatformEmbedded && G.ZP.close(this.props.windowKey)
      };
      null != t ? t({
        e,
        unmountWindow: n
      }) : n()
    }), Y(this, "handleBlur", () => {
      var e, t;
      null == (e = (t = this.props).onBlur) || e.call(t)
    })
  }
}
Y(Q, "defaultProps", {
  withTitleBar: true
});
let X = Chunk473749.forwardRef(function(e, t) {
    let {
      guestWindow: n,
      className: r,
      children: o
    } = e, {
      lang: l,
      style: u,
      className: d
    } = (0, M.vP)();
    return a.useEffect(() => {
      let e = n.document.documentElement;
      c()(null != e, "Window document element was null"), e.setAttribute("style", u)
    }, [n, u]), a.useEffect(() => {
      let e = n.document.documentElement;
      c()(null != e, "Window document element was null"), e.setAttribute("lang", l)
    }, [n, l]), (0, i.jsx)("div", {
      "data-popout-root": true,
      ref: t,
      className: s()(d, r),
      children: o
    })
  }),
  J = Chunk473749.forwardRef(function(e, t) {
    var n;
    let {
      guestWindow: r,
      isFullScreen: a
    } = (0, _.cj)([F.Z], () => ({
      guestWindow: F.Z.getWindow(e.windowKey),
      isFullScreen: F.Z.isWindowFullScreen(e.windowKey)
    }));
    c()(null != r, "Missing guestWindow reference");
    let {
      forcedColors: o,
      connectedEmbeddedActivity: s
    } = (0, _.cj)([b.Z, O.ZP], () => ({
      forcedColors: b.Z.useForcedColors ? "yes" : "no",
      connectedEmbeddedActivity: O.ZP.getCurrentEmbeddedActivity()
    }));
    (0, N.Z)(r, false);
    let {
      analyticsLocations: l
    } = (0, S.ZP)(v.Z.POPOUT_WINDOW), {
      clientThemesClassName: u,
      clientThemesCSS: d
    } = (0, I.ZP)(), f = (0, L.Ll)(), p = null != (n = e.themeOverride) ? n : f;
    return null == r ? null : (0, i.jsx)(h.Sle, {
      children: (0, i.jsx)(S.Gt, {
        value: l,
        children: (0, i.jsx)(Q, z(W({
          ref: t
        }, e), {
          titleBarTheme: p,
          guestWindow: r,
          isFullScreen: a,
          forcedColors: o,
          connectedEmbeddedActivity: s,
          clientThemesClassName: u,
          clientThemesCSS: d
        }))
      })
    })
  })