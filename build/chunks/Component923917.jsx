/** Chunk was on web.js **/
/** chunk id: 923917, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => J,
  q: () => Z
}), require("./896048.js");
var r, Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk284009 = require("./284009.js"),
  c = require.n(Chunk284009),
  Chunk758879 = require("./758879.js"),
  Chunk121894 = require("./121894.js"),
  Chunk337836 = require("./337836.jsx"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk318009 = require("./318009.jsx"),
  Chunk92960 = require("./92960.js"),
  Chunk14214 = require("./14214.js"),
  Chunk775602 = require("./775602.js"),
  Chunk697138 = require("./697138.jsx"),
  Chunk933958 = require("./933958.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk590703 = require("./590703.js"),
  Chunk681582 = require("./681582.jsx"),
  Chunk573435 = require("./573435.jsx"),
  Chunk71855 = require("./71855.jsx"),
  Chunk203480 = require("./203480.js"),
  Chunk670735 = require("./670735.jsx"),
  Chunk549205 = require("./549205.js"),
  Chunk750506 = require("./750506.jsx"),
  Chunk267102 = require("./267102.jsx"),
  Chunk666347 = require("./666347.jsx"),
  Chunk97469 = require("./97469.js"),
  Chunk975616 = require("./975616.jsx"),
  Chunk611635 = require("./611635.jsx"),
  Chunk723702 = require("./723702.js"),
  Chunk677134 = require("./677134.jsx"),
  Chunk837921 = require("./837921.js"),
  Chunk913934 = require("./913934.js"),
  Chunk869146 = require("./869146.js"),
  Chunk652215 = require("./652215.js"),
  Chunk392164 = require("./392164.js"),
  Chunk32069 = require("./32069.js");

function W(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function K(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      W(e, t, n[t])
    })
  }
  return e
}

function z(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function q(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : z(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function Z(e) {
  let {
    withTitleBar: t,
    isFullScreen: n
  } = e;
  return t && k.isPlatformEmbedded && !n
}
class Q extends(r = Chunk64700.Component) {
  componentDidMount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")), this.updateTitle(), this.updateClientTheme(), (0, V.M)(e), e.addEventListener("blur", this.handleBlur), k.isPlatformEmbedded ? t.addEventListener("contextmenu", U.contextMenuCallbackNative, false) : t.addEventListener("contextmenu", U.contextMenuCallbackWeb, false), e.addEventListener("beforeunload", this.beforeUnload), this.registerPopoutGlobalKeybinds()
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
    this.unregisterPopoutGlobalKeybinds(), e.removeEventListener("blur", this.handleBlur), k.isPlatformEmbedded ? t.removeEventListener("contextmenu", U.contextMenuCallbackNative) : t.removeEventListener("contextmenu", U.contextMenuCallbackWeb), (0, d.r)(() => h.red.setState(e => q(K({}, e), {
      [h.KX8]: []
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
    let a = i.querySelector("style[".concat(I.Vg, "]"));
    if (null != a) {
      a.textContent = e;
      return
    }
    let o = n.createElement("style");
    o.setAttribute(I.Vg, "true"), o.textContent = e, i.appendChild(o)
  }
  registerPopoutGlobalKeybinds() {
    var e;
    let {
      guestWindow: t
    } = this.props, n = t.document;
    for (let t of (this._combokeys = (0, R.I)(n.documentElement), [E.VT, E.rR, g.D, ...null != (e = this.props.keybinds) ? e : []]))
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
    } = this.props, y = Z({
      withTitleBar: a,
      isFullScreen: r
    }), O = n === H.f ? L.A : w.A;
    return (0, i.jsx)(u.Kd, {
      children: (0, i.jsx)(M.e, {
        windowKey: n,
        themeOverride: d,
        children: (0, i.jsx)(b.A, {
          children: (0, i.jsxs)(h.xpW, {
            containerRef: this.rootRef,
            children: [(0, i.jsx)(X, {
              guestWindow: o,
              className: l,
              children: (0, i.jsxs)(O, {
                children: [(0, i.jsx)(T.Al, {}), (0, i.jsx)(D.Wr, {
                  appContext: null != E ? E : B.BRT.POPOUT,
                  renderWindow: o,
                  children: (0, i.jsx)(S.l, {
                    children: (0, i.jsxs)(P.Yf, {
                      children: [(0, i.jsxs)("div", {
                        className: Y.SW,
                        children: [y && (0, i.jsx)(p.NPJ, {
                          theme: _,
                          children: e => (0, i.jsx)(C.cq, {
                            windowKey: n,
                            className: s()(e, Y.uv)
                          })
                        }), (0, i.jsx)("div", {
                          className: s()(Y.Qs, c),
                          children: t
                        })]
                      }), !g && (0, i.jsx)(h.bM6, {}), (0, i.jsx)(m.A, {}), (0, i.jsx)(f.P, {}), (0, i.jsx)(P.C8, {})]
                    })
                  })
                })]
              })
            }), (0, i.jsx)(p.Utq, {})]
          })
        })
      }, e)
    })
  }
  constructor(...e) {
    super(...e), W(this, "rootRef", a.createRef()), W(this, "_cleanupWindowActionCreators", true), W(this, "_combokeys", null), W(this, "beforeUnload", e => {
      let {
        onBeforeUnload: t
      } = this.props, n = () => {
        F.A.unmountWindow(this.props.windowKey), k.isPlatformEmbedded && G.Ay.close(this.props.windowKey)
      };
      null != t ? t({
        e,
        unmountWindow: n
      }) : n()
    }), W(this, "handleBlur", () => {
      var e, t;
      null == (e = (t = this.props).onBlur) || e.call(t)
    })
  }
}
W(Q, "defaultProps", {
  withTitleBar: true
});
let X = Chunk64700.forwardRef(function(e, t) {
    let {
      guestWindow: n,
      className: r,
      children: o
    } = e, {
      lang: l,
      style: u,
      className: d
    } = (0, j.xb)();
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
  J = Chunk64700.forwardRef(function(e, t) {
    var n;
    let {
      guestWindow: r,
      isFullScreen: a
    } = (0, _.cf)([F.A], () => ({
      guestWindow: F.A.getWindow(e.windowKey),
      isFullScreen: F.A.isWindowFullScreen(e.windowKey)
    }));
    c()(null != r, "Missing guestWindow reference");
    let {
      forcedColors: o,
      connectedEmbeddedActivity: s
    } = (0, _.cf)([y.A, O.Ay], () => ({
      forcedColors: y.A.useForcedColors ? "yes" : "no",
      connectedEmbeddedActivity: O.Ay.getCurrentEmbeddedActivity()
    }));
    (0, N.A)(r, false);
    let {
      analyticsLocations: l
    } = (0, A.Ay)(v.A.POPOUT_WINDOW), {
      clientThemesClassName: u,
      clientThemesCSS: d
    } = (0, I.Ay)(), f = (0, x.NC)(), p = null != (n = e.themeOverride) ? n : f;
    return null == r ? null : (0, i.jsx)(h.WaV, {
      children: (0, i.jsx)(A.f5, {
        value: l,
        children: (0, i.jsx)(Q, q(K({
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