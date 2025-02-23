/** Chunk was on 1272 (2c78ad33b01d1e4b.js) **/
n.d(t, {
  Z: () => m
}), n(653041), n(47120);
var r = n(243814),
  i = n(100527),
  l = n(208049),
  o = n(763296),
  a = n(697426),
  s = n(242291),
  c = n(641015),
  u = n(594174),
  d = n(996106),
  p = n(452426),
  h = n(736045),
  f = n(186901),
  g = n(231338);
let m = {
  [g.Et.GET_SOUNDBOARD_SOUNDS]: {
    scope: {
      [f.Gp.ANY]: [r.x.RPC, f.lH]
    },
    async handler() {
      await (0, l.w)();
      let e = o.Z.getSounds(),
        t = [];
      return e.forEach(e => e.forEach(e => t.push((0, a.QL)(e)))), t
    }
  },
  [g.Et.PLAY_SOUNDBOARD_SOUND]: {
    scope: {
      [f.Gp.ALL]: [r.x.RPC, r.x.RPC_VOICE_WRITE]
    },
    validation: e => (0, p.Z)(e).required().keys({
      guild_id: e.string(),
      sound_id: e.string()
    }),
    async handler(e) {
      let {
        args: {
          guild_id: t,
          sound_id: n
        }
      } = e;
      await (0, l.w)();
      let r = u.default.getCurrentUser(),
        a = o.Z.getSound(t, n),
        p = (0, h.Z)(),
        f = null != a && null != r && (0, s.Nq)(r, a, p);
      if (null == p) throw new d.Z({
        errorCode: g.lT.INVALID_CHANNEL
      }, "Invalid Channel.");
      if (f) {
        if ((0, c.Z)(p)) null != a && (0, s.GN)(a, p.id, [i.Z.RPC]);
        else throw new d.Z({
          errorCode: g.lT.INVALID_PERMISSIONS
        }, "Invalid Permissions.")
      } else throw new d.Z({
        errorCode: g.lT.INVALID_SOUND
      }, "Invalid Sound.")
    }
  }
}