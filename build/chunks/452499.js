/** Chunk was on 39048 **/
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
  var a, o;
  let {
    isLoading: c,
    error: d,
    highlightedCreatorDetails: u
  } = (0, l.A)(e), g = null == u ? true : u.store_page, m = r.useMemo(() => {
    var e, t, n;
    let r, i = (n = null == g || null == (e = g.role_subscription) ? true : e.group_listings, r = new Set, null == n || n.forEach(e => {
        var t;
        null == (t = e.subscription_listings) || t.forEach(e => {
          r.add(e.role_id)
        })
      }), r),
      l = null == g || null == (t = g.role_subscription) ? true : t.benefit_emojis;
    return null == l ? true : l.filter(e => e.roles.some(e => i.has(e)))
  }, [null == g ? true : g.role_subscription]), p = null == g ? true : g.guild.icon_hash, f = i.Ay.getGuildIconURL({
    id: e,
    icon: p,
    size: n
  }), h = r.useMemo(() => null != m && m.length > t ? m.slice(0, t) : m, [m, t]), b = null != m && m.length > t ? m.length - t : null, x = null == u ? true : u.slug, j = null != x ? s.X7G.ROLE_SUBSCRIPTION_STORE_PAGE(x) : true, _ = null == g || null == (a = g.guild) ? true : a.name, O = null == g || null == (o = g.role_subscription) ? true : o.subscriber_count, v = !c && null != _ && null != p && null != f;
  return v ? {
    hasAllImperativeDetails: v,
    isLoading: c,
    details: {
      guildName: _,
      guildIcon: p,
      guildAvatarUrl: f,
      storePageUrl: j,
      subscriberCount: O,
      emojisToShow: h,
      notShownEmojiCount: b
    }
  } : {
    hasAllImperativeDetails: v,
    isLoading: c,
    error: d
  }
}