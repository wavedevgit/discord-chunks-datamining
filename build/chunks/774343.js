/** Chunk was on 56650 **/
n.d(t, {
  Z: () => T
});
var l, r, i, a, o, s, c = n(442837),
  u = n(570140),
  d = n(592125),
  E = n(896797),
  f = n(430824),
  C = n(944486),
  _ = n(55589),
  h = n(981631);
let p = (null !== (o = null === (a = window) || void 0 === a ? void 0 : null === (i = a.location) || void 0 === i ? void 0 : i.pathname) && void 0 !== o ? o : "").startsWith(h.Z5c.ACTIVITIES) ? h.Z5c.ACTIVITIES : null;

function O(e) {
  let {
    link: t
  } = e;
  if (p === t) return !1;
  p = t
}
class g extends(s = c.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, _.Z, C.Z, f.Z, d.Z)
  }
  getHomeLink() {
    return null != p ? p : E.Z.fallbackRoute
  }
}
r = "AppViewStore", (l = "displayName") in g ? Object.defineProperty(g, l, {
  value: r,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : g[l] = r;
let T = new g(u.Z, {
  OVERLAY_INITIALIZE: function() {
    let e = _.Z.getPrivateChannelIds(),
      t = C.Z.getChannelId(h.ME);
    (null != t || null != e[0]) && (p = h.Z5c.CHANNEL(h.ME, null != t ? t : e[0]))
  },
  APP_VIEW_SET_HOME_LINK: O,
  APPLICATION_STORE_LOCATION_CHANGE: function(e) {
    let {
      location: t
    } = e;
    O({
      link: t.pathname,
      type: "APP_VIEW_SET_HOME_LINK"
    })
  },
  APPLICATION_STORE_RESET_NAVIGATION: function() {
    if (null == p || !p.startsWith(h.Z5c.APPLICATION_STORE)) return !1;
    p = h.Z5c.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = h.Z5c.CHANNEL(h.ME, n);
      if (e !== p) return p = e, !0
    }
    return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != p && p === h.Z5c.CHANNEL(h.ME, t.id) && (p = null)
  }
})