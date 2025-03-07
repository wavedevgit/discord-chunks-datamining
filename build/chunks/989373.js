/** Chunk was on 24491 **/
n.r(t), n.d(t, {
  default: () => v,
  useOverlayInitialFocus: () => I
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  u = n(13245),
  o = n(615287),
  c = n(493773),
  a = n(238246),
  s = n(355863),
  d = n(944486),
  f = n(358085);
n(606206);
var g = n(998502),
  O = n(145597);
n(371467);
var y = n(554370),
  p = n(371651),
  E = n(610394),
  h = n(757744),
  P = n(981631);

function I(e, t) {
  let n = (0, l.e7)([E.ZP], () => {
      let e = E.ZP.getFocusedPID();
      return !f.isPlatformEmbedded || null != e && e !== O.UNSET_PID
    }),
    [r, a] = i.useState(n);
  (0, c.Ng)(() => {
    let e = e => {
      e.data === E.Il && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.parent.postMessage(E.A8, "*")
        })
      })
    };
    return window.addEventListener("message", e), () => {
      window.removeEventListener("message", e)
    }
  });
  let y = i.useCallback(() => {
    requestAnimationFrame(() => {
      try {
        u.Z.successfullyShown((0, O.getPID)()), g.ZP.showInactive(e)
      } catch (t) {
        t.message.includes("IPC") && setTimeout(() => {
          g.ZP.showInactive(e)
        }, 100)
      }
    })
  }, [e]);
  return i.useEffect(() => {
    !r && n && n && (a(!0), y())
  }, [y, r, n, e]), (0, c.Ng)(() => {
    var e;
    r && y();
    let n = null !== (e = E.ZP.getFocusedPID()) && void 0 !== e ? e : (0, O.getPID)(),
      i = null != d.Z.getVoiceChannelId();
    u.Z.track(P.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: i,
      text_widget_connected: E.ZP.isPinned(P.Odu.TEXT),
      overlay_render_method: o.gl[p.default.getOverlayMethod(n)],
      unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
    })
  }), r
}

function v(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e;
  return I(n, h.$) ? (0, r.jsx)(a.Z, {
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    children: (0, r.jsx)(y.Z, {})
  }) : null
}