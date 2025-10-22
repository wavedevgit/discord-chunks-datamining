/** Chunk was on 29679 **/
/** chunk id: 526717, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk768581 = require("./768581.js"),
  Chunk776155 = require("./776155.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  var s, o;
  let {
    isLoading: c,
    error: d,
    highlightedCreatorDetails: u
  } = (0, l.Z)(e), g = null == u ? true : u.store_page, m = r.useMemo(() => {
    var e, t;
    let n = function(e) {
        let t = new Set;
        return null == e || e.forEach(e => {
          var n;
          null == (n = e.subscription_listings) || n.forEach(e => {
            t.add(e.role_id)
          })
        }), t
      }(null == g || null == (e = g.role_subscription) ? true : e.group_listings),
      r = null == g || null == (t = g.role_subscription) ? true : t.benefit_emojis;
    return null == r ? true : r.filter(e => e.roles.some(e => n.has(e)))
  }, [null == g ? true : g.role_subscription]), p = null == g ? true : g.guild.icon_hash, f = i.ZP.getGuildIconURL({
    id: e,
    icon: p,
    size: n
  }), h = r.useMemo(() => null != m && m.length > t ? m.slice(0, t) : m, [m, t]), b = null != m && m.length > t ? m.length - t : null, x = null == u ? true : u.slug, j = null != x ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(x) : true, v = null == g || null == (s = g.guild) ? true : s.name, _ = null == g || null == (o = g.role_subscription) ? true : o.subscriber_count, C = !c && null != v && null != p && null != f;
  return C ? {
    hasAllImperativeDetails: C,
    isLoading: c,
    details: {
      guildName: v,
      guildIcon: p,
      guildAvatarUrl: f,
      storePageUrl: j,
      subscriberCount: _,
      emojisToShow: h,
      notShownEmojiCount: b
    }
  } : {
    hasAllImperativeDetails: C,
    isLoading: c,
    error: d
  }
}