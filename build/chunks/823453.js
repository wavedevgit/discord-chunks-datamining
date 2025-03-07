/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => R
}), n(47120);
var r = n(200651),
  i = n(192379),
  o = n(120356),
  a = n.n(o),
  s = n(765053),
  l = n(512969),
  c = n(873546),
  u = n(442837),
  d = n(316792),
  f = n(481060),
  _ = n(168551),
  p = n(540059),
  h = n(19759),
  m = n(823961),
  g = n(706454),
  E = n(451478),
  v = n(597952),
  b = n(252618),
  y = n(80006),
  O = n(587061),
  I = n(392358),
  S = n(981631);
n(3692);
let T = new Set([S.Z5c.LOGIN, S.Z5c.REGISTER]);

function N(e) {
  let t = (0, u.e7)([g.default], () => g.default.locale),
    n = (0, u.e7)([E.Z], () => E.Z.isFocused(), []),
    {
      theme: o,
      density: s
    } = (0, f.TCT)(),
    {
      reducedMotion: d
    } = i.useContext(f.Sfi),
    {
      accessibilitySettings: _,
      appWrapperClassName: b
    } = (0, y.I)(),
    {
      fontScale: S,
      fontScaleClass: N,
      saturation: A,
      desaturateUserColors: C,
      useForcedColors: R,
      systemForcedColors: P
    } = _,
    w = (0, u.e7)([m.Z], () => m.Z.confettiMode),
    D = (0, l.TH)(),
    L = i.useMemo(() => T.has(D.pathname), [D.pathname]);
  (0, O.Z)(window, L);
  let x = (0, I.Z)(window, __OVERLAY__ || n),
    M = (0, u.e7)([h.Z], () => h.Z.sidebarWidth),
    k = (0, f.bWb)().enabled,
    j = (0, p.Q3)("AppHelmet"),
    U = (0, p.R6)("AppHelmet");
  return (0, r.jsx)("html", {
    lang: t,
    style: "font-size: ".concat(S, "%; --saturation-factor: ").concat(A, "; --devtools-sidebar-width: ").concat(M, "px;"),
    className: a()(e, b, {
      overlay: __OVERLAY__,
      "mouse-mode": x,
      "reduce-motion": d.enabled,
      "full-motion": !d.enabled,
      "is-mobile": c.tq,
      "app-focused": n,
      "desaturate-user-colors": C,
      "disable-forced-colors": !R && "active" === P,
      "enable-forced-colors": R,
      "show-redesigned-icons": k,
      "visual-refresh": j,
      "visual-refresh-chat-input": U,
      "confetti-mode": w
    }, (0, f.QeD)(o), "density-".concat(s), (0, v.Z)(), N)
  })
}

function A() {
  let [e, t] = i.useState([]);
  return i.useEffect(() => {
    Promise.all(d.L.map(e => n(959598)("./".concat(e, ".woff2")).then(e => {
      let {
        default: t
      } = e;
      return t
    }))).then(e => t(e))
  }, []), (0, r.jsx)(r.Fragment, {
    children: e.map((e, t) => (0, r.jsx)("link", {
      rel: "preload",
      href: e,
      as: "font",
      type: "font/woff2",
      crossOrigin: "anonymous"
    }, t))
  })
}

function C(e) {
  let {
    children: t,
    skipsSettingDefaultPageTitle: n
  } = e;
  (0, b.ZD)({
    skipsSettingDefaultPageTitle: n
  });
  let {
    clientThemesClassName: o,
    clientThemesCSS: a
  } = (0, _.ZP)(), l = i.createElement("style", {
    [_.PQ]: !0
  }, a);
  return (0, r.jsxs)(s.ql, {
    children: [N(o), A(), l, t]
  })
}
let R = i.memo(C)