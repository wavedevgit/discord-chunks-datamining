/** Chunk was on 54030 **/
n.r(t), n.d(t, {
  default: () => O,
  useOverlayInitialFocus: () => h
}), n(47120);
var r = n(200651),
  o = n(192379),
  i = n(442837),
  a = n(13245),
  l = n(615287),
  c = n(493773),
  u = n(238246),
  s = n(355863),
  _ = n(944486),
  d = n(358085);
n(606206);
var f = n(998502),
  p = n(145597);
n(371467);
var b = n(554370),
  m = n(371651),
  g = n(610394),
  v = n(501787),
  y = n(981631);

function h(e, t) {
  let n = (0, i.e7)([g.ZP], () => {
      let e = g.ZP.getFocusedPID();
      return !d.isPlatformEmbedded || null != e && e !== p.UNSET_PID
    }),
    [r, u] = o.useState(n);
  (0, c.Ng)(() => {
    let e = e => {
      e.data === g.Il && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.parent.postMessage(g.A8, "*")
        })
      })
    };
    return window.addEventListener("message", e), () => {
      window.removeEventListener("message", e)
    }
  });
  let b = o.useCallback(() => {
    requestAnimationFrame(() => {
      try {
        a.Z.successfullyShown((0, p.getPID)()), f.ZP.showInactive(e)
      } catch (t) {
        t.message.includes("IPC") && setTimeout(() => {
          f.ZP.showInactive(e)
        }, 100)
      }
    })
  }, [e]);
  return o.useEffect(() => {
    !r && n && n && (u(!0), b())
  }, [b, r, n, e]), (0, c.Ng)(() => {
    var e;
    r && b();
    let n = null !== (e = g.ZP.getFocusedPID()) && void 0 !== e ? e : (0, p.getPID)(),
      o = null != _.Z.getVoiceChannelId();
    a.Z.track(y.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: o,
      text_widget_connected: g.ZP.isPinned(y.Odu.TEXT),
      overlay_render_method: l.gl[m.default.getOverlayMethod(n)],
      unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
    })
  }), r
}

function O(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e;
  return h(n, v.OVERLAY_V3_LAYOUT_ID) ? (0, r.jsx)(u.Z, {
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    children: (0, r.jsx)(b.Z, {})
  }) : null
}