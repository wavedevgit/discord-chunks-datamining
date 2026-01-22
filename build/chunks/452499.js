/** Chunk was on 47841 **/
/** chunk id: 452499, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => a
}), require("./896048.js");
var Chunk64700 = require("./64700.js"),
  Chunk486020 = require("./486020.js"),
  Chunk791275 = require("./791275.js"),
  Chunk652215 = require("./652215.js");

function a(e, t, n) {
  var a, c;
  let {
    isLoading: o,
    error: d,
    highlightedCreatorDetails: u
  } = (0, l.A)(e), f = null == u ? true : u.store_page, g = r.useMemo(() => {
    var e, t, n;
    let r, i = (n = null == f || null == (e = f.role_subscription) ? true : e.group_listings, r = new Set, null == n || n.forEach(e => {
        var t;
        null == (t = e.subscription_listings) || t.forEach(e => {
          r.add(e.role_id)
        })
      }), r),
      l = null == f || null == (t = f.role_subscription) ? true : t.benefit_emojis;
    return null == l ? true : l.filter(e => e.roles.some(e => i.has(e)))
  }, [null == f ? true : f.role_subscription]), b = null == f ? true : f.guild.icon_hash, m = i.Ay.getGuildIconURL({
    id: e,
    icon: b,
    size: n
  }), p = r.useMemo(() => null != g && g.length > t ? g.slice(0, t) : g, [g, t]), x = null != g && g.length > t ? g.length - t : null, h = null == u ? true : u.slug, j = null != h ? s.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(h) : true, O = null == f || null == (a = f.guild) ? true : a.name, y = null == f || null == (c = f.role_subscription) ? true : c.subscriber_count, v = !o && null != O && null != b && null != m;
  return v ? {
    hasAllImperativeDetails: v,
    isLoading: o,
    details: {
      guildName: O,
      guildIcon: b,
      guildAvatarUrl: m,
      storePageUrl: j,
      subscriberCount: y,
      emojisToShow: p,
      notShownEmojiCount: x
    }
  } : {
    hasAllImperativeDetails: v,
    isLoading: o,
    error: d
  }
}