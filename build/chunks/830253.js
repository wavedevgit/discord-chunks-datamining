/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => p
}), n(47120);
var r, i = n(192379),
  o = n(442837),
  a = n(481060),
  s = n(386965),
  l = n(695346),
  c = n(763296),
  u = n(242291),
  d = n(22382),
  f = n(747071),
  _ = n(388032);

function p(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (() => {
      var e;
      return null !== (r = null === (e = l.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== r ? r : 100
    })(),
    {
      audioRef: p
    } = i.useContext(s.Z),
    [h, g] = i.useState(!1),
    m = (0, o.e7)([c.Z], () => c.Z.isPlayingSound(e.soundId), [e]),
    E = i.useCallback(n => {
      null != p.current && p.current.pause(), null != t && (0, u.GN)(e, t, n)
    }, [e, p, t]),
    v = i.useCallback(() => {
      let t = new Audio((0, d.Z)(e.soundId));
      null != p.current && p.current.pause(), p.current = t, t.currentTime = 0, t.volume = (0, f.Z)(e.volume, n), t.play().catch(() => {
        "Safari" === platform.name && (0, a.showToast)((0, a.createToast)(_.NW.string(_.t.qAsyjI), a.ToastType.FAILURE))
      }), g(!0), t.addEventListener("pause", () => g(!1), {
        once: !0
      })
    }, [e, n, p]);
  return i.useCallback(() => () => {
    var e;
    return null === (e = p.current) || void 0 === e ? void 0 : e.pause()
  }, [p]), {
    playSoundboardSound: E,
    isPlayingSound: m,
    previewSound: v,
    isPreviewingSound: h
  }
}