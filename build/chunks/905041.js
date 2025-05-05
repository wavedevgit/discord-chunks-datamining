/** Chunk was on 96473 **/
e.d(n, {
  Z: () => O
}), e(35282), e(539854), e(388685);
var l = e(255367);
e(73800);
var i = e(481060),
  r = e(296182),
  a = e(976853),
  o = e(902676),
  u = e(626135),
  c = e(49012),
  s = e(358085),
  d = e(998502),
  v = e(36998),
  f = e(981631),
  h = e(388032);

function p(t) {
  for (var n = 1; n < arguments.length; n++) {
    var e = null != arguments[n] ? arguments[n] : {},
      l = Object.keys(e);
    "function" == typeof Object.getOwnPropertySymbols && (l = l.concat(Object.getOwnPropertySymbols(e).filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    }))), l.forEach(function(n) {
      var l;
      l = e[n], n in t ? Object.defineProperty(t, n, {
        value: l,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = l
    })
  }
  return t
}
let b = /^(tel|sms|mailto):([^?;]+)/;

function O(t, n, e, O) {
  let g = (0, a.Z)(null == e ? void 0 : e.getChannelId());
  if (!s.isPlatformEmbedded || null == t || "" === t || g || (null == O ? void 0 : O.shouldHideMediaOptions) === !0 || !(0, r.Jj)(t)) return null;
  let y = (0, o.F)(t),
    _ = t => {
      u.default.track(f.rMx.CONTEXT_MENU_LINK_COPIED, p({
        hostname: y
      }, (0, v.v)())), d.ZP.copy(t), (0, i.showToast)((0, i.createToast)(h.intl.string(h.t["L/PwZW"]), i.ToastType.SUCCESS))
    },
    m = e => {
      u.default.track(f.rMx.CONTEXT_MENU_LINK_OPENED, p({
        hostname: y
      }, (0, v.v)())), (0, c.q)({
        href: t,
        trusted: (0, c.r)(t, n),
        shouldConfirm: !0
      }, e)
    },
    Z = [],
    C = t.match(b);
  if (null != C) {
    let t = h.intl.string("mailto" === C[1] ? h.t.ZYLVKi : h.t["3zozoa"]);
    Z.push((0, l.jsx)(i.sNh, {
      id: "copy-native-contact",
      label: t,
      action: () => {
        _(C[2])
      }
    }, "copy-native-contact"))
  }
  return [(0, l.jsx)(i.sNh, {
    id: "copy-native-link",
    label: h.intl.string(h.t.WqhZsr),
    action: () => {
      _(t)
    }
  }, "copy-native-link"), ...Z, (0, l.jsx)(i.sNh, {
    id: "open-native-link",
    label: h.intl.string(h.t.wuRE8P),
    action: t => m(t)
  }, "open-native-link")]
}