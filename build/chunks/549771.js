/** Chunk was on web (https://canary.discord.comweb.895a2488cd77ea6e.js.js) **/
"use strict";
n.d(t, {
  h: () => d
}), n(733860);
var r = n(192379),
  i = n(399606),
  o = n(496675),
  a = n(771845),
  s = n(594174),
  l = n(74538),
  c = n(981631),
  u = n(231338);

function d(e, t) {
  var n;
  let d = (0, i.e7)([s.default], () => s.default.getCurrentUser()),
    f = null !== (n = null == e ? void 0 : e.guild_id) && void 0 !== n ? n : c.lds,
    p = (0, i.e7)([a.ZP], () => a.ZP.getFlattenedGuildIds()),
    _ = (0, i.e7)([o.Z], () => null == e || null == e.guild_id || o.Z.can(u.Pl.USE_EXTERNAL_SOUNDS, e));
  return r.useMemo(() => {
    if ((l.ZP.canUseSoundboardEverywhere(d) || !t) && _) {
      let e = "" !== f,
        t = e ? p.filter(e => e !== f) : p;
      return e && t.unshift(f), t
    }
    return [f]
  }, [d, t, f, p, _])
}