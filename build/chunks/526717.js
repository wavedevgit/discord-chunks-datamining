/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => l
}), n(47120);
var r = n(192379),
  i = n(768581),
  s = n(776155),
  a = n(981631);

function l(e, t, n) {
  var l, o;
  let {
    isLoading: c,
    error: A,
    highlightedCreatorDetails: d
  } = (0, s.Z)(e), u = null == d ? void 0 : d.store_page, g = r.useMemo(() => {
    var e, t;
    let n = function(e) {
        let t = new Set;
        return null == e || e.forEach(e => {
          var n;
          null === (n = e.subscription_listings) || void 0 === n || n.forEach(e => {
            t.add(e.role_id)
          })
        }), t
      }(null == u ? void 0 : null === (e = u.role_subscription) || void 0 === e ? void 0 : e.group_listings),
      r = null == u ? void 0 : null === (t = u.role_subscription) || void 0 === t ? void 0 : t.benefit_emojis;
    return null == r ? void 0 : r.filter(e => e.roles.some(e => n.has(e)))
  }, [null == u ? void 0 : u.role_subscription]), f = null == u ? void 0 : u.guild.icon_hash, m = i.ZP.getGuildIconURL({
    id: e,
    icon: f,
    size: n
  }), p = r.useMemo(() => null != g && g.length > t ? g.slice(0, t) : g, [g, t]), h = null != g && g.length > t ? g.length - t : null, C = null == d ? void 0 : d.slug, b = null != C ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(C) : void 0, v = null == u ? void 0 : null === (l = u.guild) || void 0 === l ? void 0 : l.name, x = null == u ? void 0 : null === (o = u.role_subscription) || void 0 === o ? void 0 : o.subscriber_count, N = !c && null != v && null != f && null != m;
  return N ? {
    hasAllImperativeDetails: N,
    isLoading: c,
    details: {
      guildName: v,
      guildIcon: f,
      guildAvatarUrl: m,
      storePageUrl: b,
      subscriberCount: x,
      emojisToShow: p,
      notShownEmojiCount: h
    }
  } : {
    hasAllImperativeDetails: N,
    isLoading: c,
    error: A
  }
}