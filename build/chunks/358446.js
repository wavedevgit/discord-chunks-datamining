/** Chunk was on 45585 (b90461f187d1c1d2.js) **/
n.d(t, {
  K: () => g,
  Z: () => f
}), n(47120);
var i = n(200651);
n(192379);
var r = n(704215),
  s = n(481060),
  o = n(13245),
  l = n(312839),
  a = n(706140),
  c = n(809357),
  d = n(987650),
  u = n(921944),
  h = n(388032),
  p = n(884399);

function g() {
  let [e, t] = (0, a.cv)([r.z.OVERLAY_KEYBIND_NOTIFICATION]), n = (0, c.Z)({
    location: "Overlay",
    options: {
      autoTrackExposure: !1
    }
  });
  return {
    showKeybindIndicators: null != e && n,
    dismissKeybindNotification: t
  }
}

function f(e) {
  let {
    markAsDismissed: t
  } = e, {
    trackView: n,
    trackClick: r
  } = (0, l.R)(d.n0.KeybindIndicatorsNotification, {
    notif_type: d.n0.KeybindIndicatorsNotification
  });
  return {
    icon: null,
    body: (0, i.jsxs)("div", {
      className: p.notificationBody,
      children: [(0, i.jsx)("div", {
        className: p.iconContainer,
        children: (0, i.jsx)(s.S6n, {
          size: "custom",
          color: "currentColor",
          height: 28,
          width: 28
        })
      }), (0, i.jsx)(s.Text, {
        variant: "text-sm/normal",
        children: h.NW.string(h.t.EFRNtL)
      })]
    }),
    onDismissClick: (e, n) => {
      r("dismiss"), t(u.L.DISMISS), o.Z.updateNotificationStatus(n)
    },
    onNotificationShow: () => {
      t(u.L.AUTO_DISMISS), n()
    }
  }
}