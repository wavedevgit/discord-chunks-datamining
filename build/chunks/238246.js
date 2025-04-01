/** Chunk was on 3589 **/
n.d(t, {
  Z: () => $
}), n(47120);
var i, r = n(200651),
  o = n(192379),
  l = n(120356),
  s = n.n(l),
  c = n(512722),
  a = n.n(c),
  u = n(568611),
  d = n(252258),
  h = n(731965),
  p = n(442837),
  m = n(481060),
  b = n(490173),
  f = n(280492),
  v = n(40851),
  g = n(607070),
  y = n(899663),
  O = n(636449),
  x = n(317381),
  C = n(496616),
  j = n(100527),
  w = n(906732),
  P = n(168551),
  k = n(260035),
  E = n(628123),
  N = n(686546),
  S = n(950796),
  Z = n(151851),
  z = n(587061),
  T = n(540059),
  W = n(280049),
  D = n(314910),
  M = n(22205),
  R = n(746106),
  L = n(892071),
  A = n(740492),
  I = n(358085),
  _ = n(62883),
  F = n(998502),
  K = n(473159),
  U = n(928518),
  q = n(981631),
  B = n(501787),
  H = n(388032),
  G = n(896065);

function V(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e
}

function J(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      i = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), i.forEach(function(t) {
      V(e, t, n[t])
    })
  }
  return e
}

function Y(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
class Q extends(i = o.Component) {
  componentDidMount() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    null == t.querySelector("title") && null != t.head && t.head.appendChild(t.createElement("title")), this.updateTitle(), this.updateClientTheme(), (0, K.O)(e), e.addEventListener("blur", this.handleBlur), I.isPlatformEmbedded ? t.addEventListener("contextmenu", _.contextMenuCallbackNative, !1) : t.addEventListener("contextmenu", _.contextMenuCallbackWeb, !1), e.addEventListener("beforeunload", this.beforeUnload), this.registerPopoutGlobalKeybinds()
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
    this.unregisterPopoutGlobalKeybinds(), e.removeEventListener("blur", this.handleBlur), I.isPlatformEmbedded ? t.removeEventListener("contextmenu", _.contextMenuCallbackNative) : t.removeEventListener("contextmenu", _.contextMenuCallbackWeb), (0, h.j)(() => m.s9z.setState(e => Y(J({}, e), {
      [m.u1M]: []
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
    } = this.props, n = t.document, i = n.head;
    a()(null != i, "Window document ".concat("head", " was null"));
    let r = i.querySelector("style[".concat(P.PQ, "]"));
    if (null != r) {
      r.textContent = e;
      return
    }
    let o = n.createElement("style");
    o.setAttribute(P.PQ, "true"), o.textContent = e, i.appendChild(o)
  }
  registerPopoutGlobalKeybinds() {
    let {
      guestWindow: e
    } = this.props, t = e.document;
    for (let e of (this._combokeys = (0, W.r)(t.documentElement), [f.iN, f.oV]))
      if (e.comboKeysBindGlobal)
        for (let t of e.binds) this._combokeys.bindGlobal(t, (t, n) => ("function" == typeof e.action && e.action(t, n), !1))
  }
  unregisterPopoutGlobalKeybinds() {
    null != this._combokeys && this._combokeys.reset()
  }
  render() {
    let {
      focused: e,
      forcedColors: t,
      children: n,
      windowKey: i,
      isFullScreen: o,
      isRefreshEnabled: l,
      withTitleBar: c,
      guestWindow: a,
      clientThemesClassName: d,
      contentClassName: h
    } = this.props, p = (0, I.getPlatform)(), f = c && !o, g = i === B.$J ? M.Z : E.Z;
    return (0, r.jsx)(u.VK, {
      children: (0, r.jsx)(R.w, {
        windowKey: i,
        children: (0, r.jsx)(y.Z, {
          children: (0, r.jsx)(X, {
            guestWindow: a,
            className: d,
            children: (0, r.jsx)(m.JcV, {
              containerRef: this.rootRef,
              children: (0, r.jsxs)(g, {
                children: [(0, r.jsx)(N.Co, {}), (0, r.jsx)(v.Wu, {
                  appContext: q.IlC.POPOUT,
                  renderWindow: a,
                  children: (0, r.jsx)(k.m, {
                    children: (0, r.jsxs)(D.yP, {
                      children: [(0, r.jsxs)("div", {
                        className: G.popout,
                        children: [l && f && (0, r.jsx)(S.T, {
                          windowKey: i,
                          short: !0
                        }), !l && f && null != p ? (0, r.jsx)(Z.Z, {
                          focused: e,
                          type: p,
                          windowKey: i,
                          macOSFrame: !0
                        }) : null, (0, r.jsx)("div", {
                          className: s()(G.content, h),
                          children: n
                        })]
                      }), (0, r.jsx)(m.nKe, {}), (0, r.jsx)(b.Z, {}), (0, r.jsx)(D.Un, {})]
                    })
                  })
                })]
              })
            })
          })
        })
      }, t)
    })
  }
  constructor(...e) {
    super(...e), V(this, "rootRef", o.createRef()), V(this, "_cleanupWindowActionCreators", void 0), V(this, "_combokeys", null), V(this, "beforeUnload", e => {
      let t = () => {
        U.Z.unmountWindow(this.props.windowKey), I.isPlatformEmbedded && F.ZP.close(this.props.windowKey)
      };
      if (null == this.props.connectedEmbeddedActivity || A.ZP.disableEmbeddedActivityPopOutAlert) t();
      else {
        if (!I.isPlatformEmbedded) return;
        (0, O.R)({
          isContextless: this.props.connectedEmbeddedActivity.location.kind === d.E.CONTEXTLESS
        }) ? t(): (e.returnValue = H.NW.string(H.t["bST/Y2"]), (0, C.Z)(() => {
          t()
        }))
      }
    }), V(this, "handleBlur", () => {
      var e, t;
      null === (e = (t = this.props).onBlur) || void 0 === e || e.call(t)
    })
  }
}
V(Q, "defaultProps", {
  withTitleBar: !0
});
let X = o.forwardRef(function(e, t) {
    let {
      guestWindow: n,
      className: i,
      children: l
    } = e, {
      lang: c,
      style: u,
      className: d
    } = (0, L.vP)();
    return o.useEffect(() => {
      let e = n.document.documentElement;
      a()(null != e, "Window document element was null"), e.setAttribute("style", u)
    }, [n, u]), o.useEffect(() => {
      let e = n.document.documentElement;
      a()(null != e, "Window document element was null"), e.setAttribute("lang", c)
    }, [n, c]), (0, r.jsx)("div", {
      "data-popout-root": !0,
      ref: t,
      className: s()(d, i),
      children: l
    })
  }),
  $ = o.forwardRef(function(e, t) {
    let {
      guestWindow: n,
      focused: i,
      isFullScreen: o
    } = (0, p.cj)([U.Z], () => ({
      guestWindow: U.Z.getWindow(e.windowKey),
      focused: U.Z.getWindowFocused(e.windowKey),
      isFullScreen: U.Z.isWindowFullScreen(e.windowKey)
    }));
    a()(null != n, "Missing guestWindow reference");
    let l = (0, T.Q3)("PopoutWindow"),
      {
        forcedColors: s,
        connectedEmbeddedActivity: c
      } = (0, p.cj)([g.Z, x.ZP], () => ({
        forcedColors: g.Z.useForcedColors ? "yes" : "no",
        connectedEmbeddedActivity: x.ZP.getCurrentEmbeddedActivity()
      }));
    (0, z.Z)(n, !1);
    let {
      analyticsLocations: u
    } = (0, w.ZP)(j.Z.POPOUT_WINDOW), {
      clientThemesClassName: d,
      clientThemesCSS: h
    } = (0, P.ZP)();
    return null == n ? null : (0, r.jsx)(m.Sle, {
      children: (0, r.jsx)(w.Gt, {
        value: u,
        children: (0, r.jsx)(Q, Y(J({
          ref: t
        }, e), {
          guestWindow: n,
          focused: i,
          isFullScreen: o,
          forcedColors: s,
          connectedEmbeddedActivity: c,
          clientThemesClassName: d,
          clientThemesCSS: h,
          isRefreshEnabled: l
        }))
      })
    })
  })