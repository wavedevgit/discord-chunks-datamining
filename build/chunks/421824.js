/** Chunk was on 50751 **/
n.d(t, {
  f: () => f,
  y: () => h
}), n(301563);
var i = n(200651);
n(192379);
var r = n(481060),
  l = n(522474),
  o = n(556296),
  a = n(13140),
  s = n(44359),
  u = n(620954),
  c = n(987650),
  d = n(981631),
  p = n(388032);

function h() {
  if (l.Z.getWindowOpen(d.KJ3.ACTIVITY_POPOUT)) return null;
  let {
    trackView: e,
    trackClick: t
  } = (0, u.R)(c.n0.ClipsReminderNotification, {
    notif_type: c.n0.ClipsReminderNotification
  }), n = o.ZP.getKeybindForAction(d.kg4.SAVE_CLIP);
  if (null == n) return null;
  let h = a.BB(n.shortcut, !0);
  return {
    title: p.NW.format(p.t.S5uhCA, {
      keybind: h,
      keybindHook: (e, t) => (0, i.jsx)(s.Z, {
        keybind: h.split("+")
      }, t)
    }),
    icon: (0, i.jsx)(r.AlX, {
      size: "lg",
      color: "currentColor"
    }),
    onNotificationShow: () => {
      e()
    },
    onDismissClick: () => {
      t("dismiss")
    }
  }
}

function f(e) {
  let {
    trackView: t,
    trackClick: n
  } = (0, u.R)(c.n0.ClipsNotification, {
    notif_type: c.n0.ClipsNotification
  });
  return {
    title: e,
    icon: (0, i.jsx)(r.AlX, {
      size: "lg",
      color: "currentColor"
    }),
    onNotificationShow: () => {
      t()
    },
    onDismissClick: () => {
      n("dismiss")
    }
  }
}