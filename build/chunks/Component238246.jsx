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
  Chunk413943 = require("./413943.js");

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
    } = this.props, t = module.document;
    null == exports.querySelector("title") && null != exports.head && exports.head.appendChild(exports.createElement("title")), this.updateTitle(), this.updateClientTheme(), (0, Chunk473159.O)(module), module.addEventListener("blur", this.handleBlur), Chunk358085.isPlatformEmbedded ? exports.addEventListener("contextmenu", Chunk62883.contextMenuCallbackNative, false) : exports.addEventListener("contextmenu", Chunk62883.contextMenuCallbackWeb, false), module.addEventListener("beforeunload", this.beforeUnload), this.registerPopoutGlobalKeybinds()
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
    } = this.props, t = module.document;
    this.unregisterPopoutGlobalKeybinds(), module.removeEventListener("blur", this.handleBlur), Chunk358085.isPlatformEmbedded ? exports.removeEventListener("contextmenu", Chunk62883.contextMenuCallbackNative) : exports.removeEventListener("contextmenu", Chunk62883.contextMenuCallbackWeb), (0, Chunk731965.j)(() => Chunk481060.s9z.setState(e => z(W({}, e), {
      [m.u1M]: []
    }))), module.removeEventListener("beforeunload", this.beforeUnload)
  }
  updateTitle() {
    let {
      title: e,
      guestWindow: t
    } = this.props, n = exports.document.querySelector("title");
    null != require && (require.innerText = module)
  }
  updateClientTheme() {
    let {
      clientThemesCSS: e,
      guestWindow: t
    } = this.props, n = exports.document, r = false, i = require.head;
    c()(null != Chunk54381, "Window document ".concat(r ? "body" : "head", " was null"));
    let o = Chunk54381.querySelector("style[".concat(Chunk999203.PQ, "]"));
    if (null != Chunk473749) {
      Chunk473749.textContent = module;
      return
    }
    let a = require.createElement("style");
    Chunk120356.setAttribute(Chunk999203.PQ, "true"), Chunk120356.textContent = module, Chunk54381.appendChild(Chunk120356)
  }
  registerPopoutGlobalKeybinds() {
    var e;
    let {
      guestWindow: t
    } = this.props, n = exports.document;
    for (let t of (this._combokeys = (0, Chunk280049.r)(require.documentElement), [Chunk280492.iN, Chunk280492.oV, Chunk175724.f, ...null != (e = this.props.keybinds) ? module : []]))
      if (exports.comboKeysBindGlobal)
        for (let e of exports.binds) this._combokeys.bindGlobal(module, (e, n) => ("function" == typeof t.action && t.action(e, n), false))
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
      withTitleBar: o,
      guestWindow: a,
      clientThemesClassName: l,
      contentClassName: c,
      themeOverride: d,
      titleBarTheme: _,
      hideModals: g = false,
      appContext: E
    } = this.props, b = q({
      withTitleBar: Chunk473749,
      isFullScreen: r
    }), O = require === Chunk501787.$J ? Chunk22205.Z : Chunk248687.Z;
    return (0, Chunk54381.jsx)(Chunk319498.VK, {
      children: (0, Chunk54381.jsx)(Chunk746106.w, {
        windowKey: require,
        themeOverride: Chunk731965,
        children: (0, Chunk54381.jsx)(Chunk899663.Z, {
          children: (0, Chunk54381.jsxs)(Chunk481060.JcV, {
            containerRef: this.rootRef,
            children: [(0, Chunk54381.jsx)(X, {
              guestWindow: Chunk120356,
              className: Chunk512722,
              children: (0, Chunk54381.jsxs)(Chunk317381, {
                children: [(0, Chunk54381.jsx)(Chunk686546.Co, {}), (0, Chunk54381.jsx)(Chunk728285.Wu, {
                  appContext: null != Chunk280492 ? Chunk280492 : Chunk981631.IlC.POPOUT,
                  renderWindow: Chunk120356,
                  children: (0, Chunk54381.jsx)(Chunk260035.m, {
                    children: (0, Chunk54381.jsxs)(Chunk314910.yP, {
                      children: [(0, Chunk54381.jsxs)("div", {
                        className: Chunk413943.popout,
                        children: [Chunk607070 && (0, Chunk54381.jsx)(Chunk793030.f6W, {
                          theme: Chunk442837,
                          children: e => (0, i.jsx)(A.TF, {
                            windowKey: n,
                            className: s()(e, H.titleBar)
                          })
                        }), (0, Chunk54381.jsx)("div", {
                          className: s()(Chunk413943.content, c),
                          children: exports
                        })]
                      }), !Chunk175724 && (0, Chunk54381.jsx)(Chunk481060.nKe, {}), (0, Chunk54381.jsx)(Chunk490173.Z, {}), (0, Chunk54381.jsx)(Chunk966044.uZ, {}), (0, Chunk54381.jsx)(Chunk314910.Un, {})]
                    })
                  })
                })]
              })
            }), (0, Chunk54381.jsx)(Chunk793030.OUJ, {})]
          })
        })
      }, module)
    })
  }
  constructor(...e) {
    super(...e), Y(this, "rootRef", o.createRef()), Y(this, "_cleanupWindowActionCreators", true), Y(this, "_combokeys", null), Y(this, "beforeUnload", e => {
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
      children: a
    } = e, {
      lang: l,
      style: u,
      className: d
    } = (0, M.vP)();
    return o.useEffect(() => {
      let e = n.document.documentElement;
      c()(null != e, "Window document element was null"), e.setAttribute("style", u)
    }, [n, u]), o.useEffect(() => {
      let e = n.document.documentElement;
      c()(null != e, "Window document element was null"), e.setAttribute("lang", l)
    }, [n, l]), (0, i.jsx)("div", {
      "data-popout-root": true,
      ref: t,
      className: s()(d, r),
      children: a
    })
  }),
  J = Chunk473749.forwardRef(function(e, t) {
    var n;
    let {
      guestWindow: r,
      isFullScreen: o
    } = (0, _.cj)([F.Z], () => ({
      guestWindow: F.Z.getWindow(e.windowKey),
      isFullScreen: F.Z.isWindowFullScreen(e.windowKey)
    }));
    c()(null != r, "Missing guestWindow reference");
    let {
      forcedColors: a,
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
    return null == r ? null : (0, i.jsx)(m.Sle, {
      children: (0, i.jsx)(S.Gt, {
        value: l,
        children: (0, i.jsx)(Q, z(W({
          ref: t
        }, e), {
          titleBarTheme: p,
          guestWindow: r,
          isFullScreen: o,
          forcedColors: a,
          connectedEmbeddedActivity: s,
          clientThemesClassName: u,
          clientThemesCSS: d
        }))
      })
    })
  })