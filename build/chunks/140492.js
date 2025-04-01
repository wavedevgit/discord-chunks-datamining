/** Chunk was on 13323 **/
n.d(t, {
  Z: () => b
}), n(47120), n(733860);
var r = n(358230),
  i = n(931261),
  s = n(355298),
  a = n(333984),
  o = n(905423),
  l = n(695346),
  c = n(283595),
  d = n(923834),
  u = n(55589),
  m = n(823379),
  g = n(475468),
  p = n(981631),
  h = n(176505);
let f = () => {
  let e = s.Z.getMessageRequestsCount() > 0 || a.Z.getSpamChannelsCount() > 0;
  return [p.Z5c.FRIENDS, c.Z.hasLibraryApplication() && !l.bm.getSetting() ? p.Z5c.APPLICATION_LIBRARY : null, p.Z5c.APPLICATION_STORE, e ? p.Z5c.MESSAGE_REQUESTS : null, p.Z5c.COLLECTIBLES_SHOP, l.Ex.getSetting() ? p.Z5c.FAMILY_CENTER : null].filter(m.lm)
};

function b() {
  let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1,
    t = o.Z.getState().guildId;
  null == t ? function(e) {
    var t, n;
    let {
      channelId: r,
      path: i,
      basePath: s
    } = o.Z.getState(), a = u.Z.getPrivateChannelIds(), l = __OVERLAY__ ? a : [...f(), ...a], c = (null == r ? (t = null != i ? i : s, f().findIndex(e => t.startsWith(e))) : null != r ? l.indexOf(r) : 0) + e;
    c >= l.length ? c = 0 : c < 0 && (c = l.length - 1);
    let m = l[c];
    f().includes(m) ? ! function(e) {
      let t = d.Z.getCurrentRoute();
      e === p.Z5c.APPLICATION_STORE && null != t ? (0, g.z)(t) : (0, g.z)(e)
    }(m) : (n = p.ME, (0, g.K)(n, m))
  }(e) : function(e, t) {
    var n, s, a;
    let l = o.Z.getState().channelId,
      c = (0, r.Z)(t, {
        withCurrentVoiceChannel: !0
      }).map(e => e.id);
    (0, i.s)(t) && c.unshift(h.oC.GUILD_HOME);
    let d = (n = (null != l ? c.indexOf(l) : -1) + e, s = c.length, n < 0 ? s - 1 : n >= s ? 0 : n);
    a = c[d], (0, g.K)(t, a)
  }(e, t)
}