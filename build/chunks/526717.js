/** Chunk was on 64982 **/
/** chunk id: 526717, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk647438 = require("./647438.js"),
  Chunk768581 = require("./768581.js"),
  Chunk776155 = require("./776155.js"),
  Chunk981631 = require("./981631.js");

function a(e, t, n) {
  var a, o;
  let {
    isLoading: c,
    error: d,
    highlightedCreatorDetails: u
  } = (0, l.Z)(e), m = null == u ? true : u.store_page, g = r.useMemo(() => {
    var e, t;
    let n = function(e) {
        let t = new Set;
        return null == e || e.forEach(e => {
          var n;
          null == (n = e.subscription_listings) || n.forEach(e => {
            t.add(e.role_id)
          })
        }), t
      }(null == m || null == (e = m.role_subscription) ? true : e.group_listings),
      r = null == m || null == (t = m.role_subscription) ? true : t.benefit_emojis;
    return null == r ? true : r.filter(e => e.roles.some(e => n.has(e)))
  }, [null == m ? true : m.role_subscription]), p = null == m ? true : m.guild.icon_hash, f = i.ZP.getGuildIconURL({
    id: e,
    icon: p,
    size: n
  }), h = r.useMemo(() => null != g && g.length > t ? g.slice(0, t) : g, [g, t]), x = null != g && g.length > t ? g.length - t : null, b = null == u ? true : u.slug, j = null != b ? s.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(b) : true, _ = null == m || null == (a = m.guild) ? true : a.name, v = null == m || null == (o = m.role_subscription) ? true : o.subscriber_count, C = !c && null != _ && null != p && null != f;
  return C ? {
    hasAllImperativeDetails: C,
    isLoading: c,
    details: {
      guildName: _,
      guildIcon: p,
      guildAvatarUrl: f,
      storePageUrl: j,
      subscriberCount: v,
      emojisToShow: h,
      notShownEmojiCount: x
    }
  } : {
    hasAllImperativeDetails: C,
    isLoading: c,
    error: d
  }
}