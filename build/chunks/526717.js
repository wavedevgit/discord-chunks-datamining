/** Chunk was on 384 **/
/** chunk id: 526717, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
}), require("./388685.js");
var Chunk473749 = require("./473749.js"),
  Chunk768581 = require("./768581.js"),
  Chunk776155 = require("./776155.js"),
  Chunk981631 = require("./981631.js");

function s(e, t, n) {
  var s, o;
  let {
    isLoading: c,
    error: u,
    highlightedCreatorDetails: d
  } = (0, l.Z)(e), g = null == d ? true : d.store_page, m = r.useMemo(() => {
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
  }), h = r.useMemo(() => null != m && m.length > t ? m.slice(0, t) : m, [m, t]), b = null != m && m.length > t ? m.length - t : null, x = null == d ? true : d.slug, j = null != x ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(x) : true, _ = null == g || null == (s = g.guild) ? true : s.name, v = null == g || null == (o = g.role_subscription) ? true : o.subscriber_count, O = !c && null != _ && null != p && null != f;
  return O ? {
    hasAllImperativeDetails: O,
    isLoading: c,
    details: {
      guildName: _,
      guildIcon: p,
      guildAvatarUrl: f,
      storePageUrl: j,
      subscriberCount: v,
      emojisToShow: h,
      notShownEmojiCount: b
    }
  } : {
    hasAllImperativeDetails: O,
    isLoading: c,
    error: u
  }
}