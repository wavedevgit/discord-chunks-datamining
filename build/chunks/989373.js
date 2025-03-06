/** Chunk was on 18410 **/
n.r(t), n.d(t, {
  default: () => v,
  useOverlayInitialFocus: () => I
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(442837),
  u = n(13245),
  o = n(615287),
  a = n(493773),
  c = n(238246),
  s = n(355863),
  d = n(944486),
  f = n(358085);
n(606206);
var g = n(998502),
  O = n(145597);
n(371467);
var p = n(554370),
  y = n(371651),
  h = n(610394),
  _ = n(757744),
  E = n(981631);

function I(e, t) {
  let n = (0, l.e7)([h.ZP], () => {
      let e = h.ZP.getFocusedPID();
      return !f.isPlatformEmbedded || null != e && e !== O.UNSET_PID
    }),
    [r, c] = i.useState(n);
  (0, a.Ng)(() => {
    let e = e => {
      e.data === h.Il && requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.parent.postMessage(h.A8, "*")
        })
      })
    };
    return window.addEventListener("message", e), () => {
      window.removeEventListener("message", e)
    }
  });
  let p = i.useCallback(() => {
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
    !r && n && n && (c(!0), p())
  }, [p, r, n, e]), (0, a.Ng)(() => {
    var e;
    r && p();
    let n = null !== (e = h.ZP.getFocusedPID()) && void 0 !== e ? e : (0, O.getPID)(),
      i = null != d.Z.getVoiceChannelId();
    u.Z.track(E.rMx.OVERLAY_INITIALIZED, {
      voice_widget_connected: i,
      text_widget_connected: h.ZP.isPinned(E.Odu.TEXT),
      overlay_render_method: o.gl[y.default.getOverlayMethod(n)],
      unpinned_widget_types: s.Z.getAllUnpinnedPinnedWidgets(t)
    })
  }), r
}

function v(e) {
  let {
    withTitleBar: t,
    windowKey: n
  } = e;
  return I(n, _.$) ? (0, r.jsx)(c.Z, {
    withTitleBar: t,
    windowKey: n,
    title: "Discord Overlay",
    children: (0, r.jsx)(p.Z, {})
  }) : null
}