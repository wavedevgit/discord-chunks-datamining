/** Chunk was on web.js **/
/** chunk id: 238246, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => K,
  Z: () => X
}), require("./388685.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
  Chunk670481 = require("./670481.js"),
  Chunk512722 = require("./512722.js"),
  u = require.n(Chunk512722),
  Chunk688642 = require("./688642.js"),
  Chunk731965 = require("./731965.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk490173 = require("./490173.jsx"),
  Chunk175724 = require("./175724.js"),
  Chunk280492 = require("./280492.js"),
  Chunk40851 = require("./40851.jsx"),
  Chunk607070 = require("./607070.js"),
  Chunk899663 = require("./899663.jsx"),
  Chunk317381 = require("./317381.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk168551 = require("./168551.js"),
  Chunk260035 = require("./260035.jsx"),
  Chunk628123 = require("./628123.jsx"),
  Chunk686546 = require("./686546.jsx"),
  Chunk950796 = require("./950796.jsx");
require("./151851.jsx");
var Chunk587061 = require("./587061.js"),
  Chunk280049 = require("./280049.js"),
  Chunk314910 = require("./314910.jsx"),
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
class z extends(r = Chunk73800.Component) {
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
    u()(null != Chunk255367, "Window document ".concat(r ? "body" : "head", " was null"));
    let o = Chunk255367.querySelector("style[".concat(Chunk168551.PQ, "]"));
    if (null != Chunk73800) {
      Chunk73800.textContent = module;
      return
    }
    let a = require.createElement("style");
    Chunk120356.setAttribute(Chunk168551.PQ, "true"), Chunk120356.textContent = module, Chunk255367.appendChild(Chunk120356)
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
      focused: e,
      forcedColors: t,
      children: n,
      windowKey: r,
      isFullScreen: o,
      withTitleBar: a,
      guestWindow: c,
      clientThemesClassName: u,
      contentClassName: f,
      hideModals: _ = false
    } = this.props;
    (0, Chunk358085.getPlatform)();
    let m = K({
        withTitleBar: Chunk120356,
        isFullScreen: Chunk73800
      }),
      g = r === Chunk501787.$J ? Chunk22205.Z : Chunk628123.Z;
    return (0, Chunk255367.jsx)(Chunk688642.VK, {
      children: (0, Chunk255367.jsx)(Chunk746106.w, {
        windowKey: r,
        children: (0, Chunk255367.jsx)(Chunk899663.Z, {
          children: (0, Chunk255367.jsxs)(Chunk481060.JcV, {
            containerRef: this.rootRef,
            children: [(0, Chunk255367.jsx)(q, {
              guestWindow: Chunk512722,
              className: u,
              children: (0, Chunk255367.jsxs)(Chunk280492, {
                children: [(0, Chunk255367.jsx)(Chunk686546.Co, {}), (0, Chunk255367.jsx)(Chunk40851.Wu, {
                  appContext: Chunk981631.IlC.POPOUT,
                  renderWindow: Chunk512722,
                  children: (0, Chunk255367.jsx)(Chunk260035.m, {
                    children: (0, Chunk255367.jsxs)(Chunk314910.yP, {
                      children: [(0, Chunk255367.jsxs)("div", {
                        className: Chunk413943.popout,
                        children: [Chunk175724 && (0, Chunk255367.jsx)(Chunk950796.TF, {
                          windowKey: r,
                          short: true
                        }), null, (0, Chunk255367.jsx)("div", {
                          className: s()(Chunk413943.content, Chunk731965),
                          children: require
                        })]
                      }), !Chunk442837 && (0, Chunk255367.jsx)(Chunk481060.nKe, {}), (0, Chunk255367.jsx)(Chunk490173.Z, {}), (0, Chunk255367.jsx)(Chunk314910.Un, {})]
                    })
                  })
                })]
              })
            }), (0, Chunk255367.jsx)(Chunk670481.OU, {})]
          })
        })
      }, exports)
    })
  }
  constructor(...e) {
    super(...e), V(this, "rootRef", o.createRef()), V(this, "_cleanupWindowActionCreators", true), V(this, "_combokeys", null), V(this, "beforeUnload", e => {
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
let q = Chunk73800.forwardRef(function(e, t) {
    let {
      guestWindow: n,
      className: r,
      children: a
    } = e, {
      lang: l,
      style: c,
      className: d
    } = (0, x.vP)();
    return o.useEffect(() => {
      let e = n.document.documentElement;
      u()(null != e, "Window document element was null"), e.setAttribute("style", c)
    }, [n, c]), o.useEffect(() => {
      let e = n.document.documentElement;
      u()(null != e, "Window document element was null"), e.setAttribute("lang", l)
    }, [n, l]), (0, i.jsx)("div", {
      "data-popout-root": true,
      ref: t,
      className: s()(d, r),
      children: a
    })
  }),
  X = Chunk73800.forwardRef(function(e, t) {
    let {
      guestWindow: n,
      focused: r,
      isFullScreen: o
    } = (0, _.cj)([G.Z], () => ({
      guestWindow: G.Z.getWindow(e.windowKey),
      focused: G.Z.getWindowFocused(e.windowKey),
      isFullScreen: G.Z.isWindowFullScreen(e.windowKey)
    }));
    u()(null != n, "Missing guestWindow reference");
    let {
      forcedColors: a,
      connectedEmbeddedActivity: s
    } = (0, _.cj)([b.Z, O.ZP], () => ({
      forcedColors: b.Z.useForcedColors ? "yes" : "no",
      connectedEmbeddedActivity: O.ZP.getCurrentEmbeddedActivity()
    }));
    (0, R.Z)(n, false);
    let {
      analyticsLocations: l
    } = (0, I.ZP)(v.Z.POPOUT_WINDOW), {
      clientThemesClassName: c,
      clientThemesCSS: d
    } = (0, T.ZP)();
    return null == n ? null : (0, i.jsx)(p.Sle, {
      children: (0, i.jsx)(I.Gt, {
        value: l,
        children: (0, i.jsx)(z, W(H({
          ref: t
        }, e), {
          guestWindow: n,
          focused: r,
          isFullScreen: o,
          forcedColors: a,
          connectedEmbeddedActivity: s,
          clientThemesClassName: c,
          clientThemesCSS: d
        }))
      })
    })
  })