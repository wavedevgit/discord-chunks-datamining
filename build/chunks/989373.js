/** Chunk was on 45432 **/
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
  I = n(610394),
  O = n(501787),
  y = n(981631);

function E(e, t) {
  let n = (0, r.e7)([I.ZP], () => {
      let e = I.ZP.getFocusedPID();
      return !p.isPlatformEmbedded || null != e && e !== f.UNSET_PID
    }),
    [l, s] = i.useState(n);
  (0, a.Ng)(() => {
    let e = e => {
      e.data === I.Il && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.parent.postMessage(I.A8, "*")
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
        u.Z.successfullyShown((0, f.getPID)()), h.ZP.showInactive(e)
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
    let n = null !== (e = I.ZP.getFocusedPID()) && void 0 !== e ? e : (0, f.getPID)(),
      i = null != d.Z.getVoiceChannelId();
    u.Z.track(y.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: i,
      text_widget_connected: I.ZP.isPinned(y.Odu.TEXT),
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
  return E(n, O.OVERLAY_V3_LAYOUT_ID) ? (0, l.jsx)(s.Z, {
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    children: (0, l.jsx)(v.Z, {})
  }) : null
}