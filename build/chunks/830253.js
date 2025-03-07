/** Chunk was on web.js **/
"use strict";
n.d(t, {
  Z: () => _
}), n(47120);
var r, i = n(192379),
  o = n(442837),
  a = n(545511),
  s = n(386965),
  l = n(695346),
  c = n(763296),
  u = n(242291),
  d = n(22382),
  f = n(747071);

function _(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : (() => {
      var e;
      return null !== (r = null === (e = l.kU.getSetting()) || void 0 === e ? void 0 : e.volume) && void 0 !== r ? r : 100
    })(),
    {
      audioRef: _
    } = i.useContext(s.Z),
    [p, h] = i.useState(!1),
    m = (0, o.e7)([c.Z], () => c.Z.isPlayingSound(e.soundId), [e]);
  return {
    playSoundboardSound: i.useCallback(n => {
      null != _.current && _.current.pause(), null != t && (0, u.GN)(e, t, n)
    }, [e, _, t]),
    isPlayingSound: m,
    previewSound: i.useCallback(async () => {
      let t = (0, d.Z)(e.soundId),
        r = new(await (0, a.Z)(t));
      r.src = t, null != _.current && _.current.pause(), _.current = r, r.currentTime = 0, r.volume = (0, f.Z)(e.volume, n), r.play(), h(!0), r.addEventListener("pause", () => h(!1), {
        once: !0
      })
    }, [e, n, _]),
    isPreviewingSound: p
  }
}