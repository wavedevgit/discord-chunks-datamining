/** Chunk was on 45432 (0424b60f071a12d1.js) **/
n.r(t), n.d(t, {
  default: () => _,
  useOverlayInitialFocus: () => E
}), n(47120);
var l = n(200651),
  i = n(192379),
  r = n(442837),
  u = n(13245),
  o = n(615287),
  a = n(493773),
  s = n(238246),
  c = n(355863),
  d = n(944486),
  p = n(358085);
n(606206);
var h = n(998502),
  f = n(145597);
n(371467);
var v = n(554370),
  g = n(371651),
  O = n(610394),
  y = n(501787),
  I = n(981631);

function E(e, t) {
  let n = (0, r.e7)([O.ZP], () => {
      let e = O.ZP.getFocusedPID();
      return !p.isPlatformEmbedded || null != e && e !== f.R2
    }),
    [l, s] = i.useState(n);
  (0, a.Ng)(() => {
    let e = e => {
      e.data === O.Il && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.parent.postMessage(O.A8, "*")
        })
      })
    };
    return window.addEventListener("message", e), () => {
      window.removeEventListener("message", e)
    }
  });
  let v = i.useCallback(() => {
    requestAnimationFrame(() => {
      try {
        u.Z.successfullyShown((0, f.QF)()), h.ZP.showInactive(e)
      } catch (t) {
        t.message.includes("IPC") && setTimeout(() => {
          h.ZP.showInactive(e)
        }, 100)
      }
    })
  }, [e]);
  return i.useEffect(() => {
    (n || l) && n && !l && (s(!0), v())
  }, [v, l, n, e]), (0, a.Ng)(() => {
    var e;
    l && v();
    let n = null !== (e = O.ZP.getFocusedPID()) && void 0 !== e ? e : (0, f.QF)(),
      i = null != d.Z.getVoiceChannelId();
    u.Z.track(I.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: i,
      text_widget_connected: O.ZP.isPinned(I.Odu.TEXT),
      overlay_render_method: o.gl[g.default.getOverlayMethod(n)],
      unpinned_widget_types: c.Z.getAllUnpinnedPinnedWidgets(t)
    })
  }), l
}

function _(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e;
  return E(n, y.OVERLAY_V3_LAYOUT_ID) ? (0, l.jsx)(s.Z, {
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    children: (0, l.jsx)(v.Z, {})
  }) : null
}