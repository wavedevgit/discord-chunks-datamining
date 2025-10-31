/** Chunk was on web.js **/
/** chunk id: 238246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => K,
  Z: () => X
}), require("./388685.js");
var r, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk512722 = require("./512722.js"),
  c = require.n(Chunk512722),
  Chunk799899 = require("./799899.js"),
  Chunk731965 = require("./731965.js"),
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
  Chunk168551 = require("./168551.js"),
  Chunk260035 = require("./260035.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk950796 = require("./950796.jsx"),
  Chunk587061 = require("./587061.js"),
  Chunk248687 = require("./248687.jsx"),
  Chunk280049 = require("./280049.js"),
  Chunk314910 = require("./314910.jsx"),
  Chunk728285 = require("./728285.jsx"),
  Chunk22205 = require("./22205.jsx"),
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

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function W(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : Y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function K(e) {
  let {
    withTitleBar: t,
    isFullScreen: n
  } = e;
  return t && M.isPlatformEmbedded && !n
}
class z extends(r = Chunk647438.Component) {
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
    this.unregisterPopoutGlobalKeybinds(), module.removeEventListener("blur", this.handleBlur), Chunk358085.isPlatformEmbedded ? exports.removeEventListener("contextmenu", Chunk62883.contextMenuCallbackNative) : exports.removeEventListener("contextmenu", Chunk62883.contextMenuCallbackWeb), (0, Chunk731965.j)(() => Chunk481060.s9z.setState(e => W(H({}, e), {
      [p.u1M]: []
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
    c()(null != Chunk951288, "Window document ".concat(r ? "body" : "head", " was null"));
    let a = Chunk951288.querySelector("style[".concat(Chunk168551.PQ, "]"));
    if (null != Chunk647438) {
      Chunk647438.textContent = module;
      return
    }
    let o = require.createElement("style");
    Chunk120356.setAttribute(Chunk168551.PQ, "true"), Chunk120356.textContent = module, Chunk951288.appendChild(Chunk120356)
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
      withTitleBar: a,
      guestWindow: o,
      clientThemesClassName: l,
      contentClassName: c,
      themeOverride: d,
      hideModals: _ = false,
      appContext: m
    } = this.props, g = K({
      withTitleBar: Chunk647438,
      isFullScreen: r
    }), E = require === Chunk501787.$J ? Chunk22205.Z : Chunk248687.Z;
    return (0, Chunk951288.jsx)(Chunk799899.VK, {
      children: (0, Chunk951288.jsx)(Chunk746106.w, {
        windowKey: require,
        themeOverride: Chunk731965,
        children: (0, Chunk951288.jsx)(Chunk899663.Z, {
          children: (0, Chunk951288.jsxs)(Chunk481060.JcV, {
            containerRef: this.rootRef,
            children: [(0, Chunk951288.jsx)(q, {
              guestWindow: Chunk120356,
              className: Chunk512722,
              children: (0, Chunk951288.jsxs)(Chunk607070, {
                children: [(0, Chunk951288.jsx)(Chunk686546.Co, {}), (0, Chunk951288.jsx)(Chunk728285.Wu, {
                  appContext: null != Chunk175724 ? Chunk175724 : Chunk981631.IlC.POPOUT,
                  renderWindow: Chunk120356,
                  children: (0, Chunk951288.jsx)(Chunk260035.m, {
                    children: (0, Chunk951288.jsxs)(Chunk314910.yP, {
                      children: [(0, Chunk951288.jsxs)("div", {
                        className: Chunk413943.popout,
                        children: [Chunk280492 && (0, Chunk951288.jsx)(Chunk950796.TF, {
                          windowKey: require
                        }), (0, Chunk951288.jsx)("div", {
                          className: s()(Chunk413943.content, c),
                          children: exports
                        })]
                      }), !Chunk442837 && (0, Chunk951288.jsx)(Chunk481060.nKe, {}), (0, Chunk951288.jsx)(Chunk490173.Z, {}), (0, Chunk951288.jsx)(Chunk314910.Un, {})]
                    })
                  })
                })]
              })
            }), (0, Chunk951288.jsx)(Chunk793030.OUJ, {})]
          })
        })
      }, module)
    })
  }
  constructor(...e) {
    super(...e), V(this, "rootRef", a.createRef()), V(this, "_cleanupWindowActionCreators", true), V(this, "_combokeys", null), V(this, "beforeUnload", e => {
      let {
        onBeforeUnload: t
      } = this.props, n = () => {
        G.Z.unmountWindow(this.props.windowKey), M.isPlatformEmbedded && k.ZP.close(this.props.windowKey)
      };
      null != t ? t({
        e,
        unmountWindow: n
      }) : n()
    }), V(this, "handleBlur", () => {
      var e, t;
      null == (e = (t = this.props).onBlur) || e.call(t)
    })
  }
}
V(z, "defaultProps", {
  withTitleBar: true
});
let q = Chunk647438.forwardRef(function(e, t) {
    let {
      guestWindow: n,
      className: r,
      children: o
    } = e, {
      lang: l,
      style: u,
      className: d
    } = (0, L.vP)();
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
  X = Chunk647438.forwardRef(function(e, t) {
    let {
      guestWindow: n,
      isFullScreen: r
    } = (0, _.cj)([G.Z], () => ({
      guestWindow: G.Z.getWindow(e.windowKey),
      isFullScreen: G.Z.isWindowFullScreen(e.windowKey)
    }));
    c()(null != n, "Missing guestWindow reference");
    let {
      forcedColors: a,
      connectedEmbeddedActivity: o
    } = (0, _.cj)([E.Z, y.ZP], () => ({
      forcedColors: E.Z.useForcedColors ? "yes" : "no",
      connectedEmbeddedActivity: y.ZP.getCurrentEmbeddedActivity()
    }));
    (0, C.Z)(n, false);
    let {
      analyticsLocations: s
    } = (0, v.ZP)(O.Z.POPOUT_WINDOW), {
      clientThemesClassName: l,
      clientThemesCSS: u
    } = (0, I.ZP)();
    return null == n ? null : (0, i.jsx)(p.Sle, {
      children: (0, i.jsx)(v.Gt, {
        value: s,
        children: (0, i.jsx)(z, W(H({
          ref: t
        }, e), {
          guestWindow: n,
          isFullScreen: r,
          forcedColors: a,
          connectedEmbeddedActivity: o,
          clientThemesClassName: l,
          clientThemesCSS: u
        }))
      })
    })
  })