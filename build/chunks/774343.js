/** Chunk was on 45847 **/
n.d(t, {
  Z: () => T
});
var r, l, i, o, a, s, c = n(442837),
  u = n(570140),
  d = n(592125),
  E = n(896797),
  f = n(430824),
  h = n(944486),
  _ = n(55589),
  C = n(981631);
let p = (null !== (a = null === (o = window) || void 0 === o ? void 0 : null === (i = o.location) || void 0 === i ? void 0 : i.pathname) && void 0 !== a ? a : "").startsWith(C.Z5c.ACTIVITIES) ? C.Z5c.ACTIVITIES : null;

function O(e) {
  let {
    link: t
  } = e;
  if (p === t) return !1;
  p = t
}
class g extends(s = c.ZP.Store) {
  initialize() {
    this.waitFor(E.Z, _.Z, h.Z, f.Z, d.Z)
  }
  getHomeLink() {
    return null != p ? p : E.Z.fallbackRoute
  }
}
l = "AppViewStore", (r = "displayName") in g ? Object.defineProperty(g, r, {
  value: l,
  enumerable: !0,
  configurable: !0,
  writable: !0
}) : g[r] = l;
let T = new g(u.Z, {
  OVERLAY_INITIALIZE: function() {
    let e = _.Z.getPrivateChannelIds(),
      t = h.Z.getChannelId(C.ME);
    (null != t || null != e[0]) && (p = C.Z5c.CHANNEL(C.ME, null != t ? t : e[0]))
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
    if (null == p || !p.startsWith(C.Z5c.APPLICATION_STORE)) return !1;
    p = C.Z5c.APPLICATION_STORE
  },
  CHANNEL_SELECT: function(e) {
    let {
      guildId: t,
      channelId: n
    } = e;
    if (null == t && null != n) {
      let e = C.Z5c.CHANNEL(C.ME, n);
      if (e !== p) return p = e, !0
    }
    return !1
  },
  CHANNEL_DELETE: function(e) {
    let {
      channel: t
    } = e;
    null == t.guild_id && null != t.id && null != p && p === C.Z5c.CHANNEL(C.ME, t.id) && (p = null)
  }
})