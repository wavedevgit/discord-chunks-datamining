/** Chunk was on 70830 **/
/** chunk id: 526717, original params: e,t,n (module,exports,require) **/
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
  }, [null == m ? true : m.role_subscription]), p = null == m ? true : m.guild.icon_hash, h = i.ZP.getGuildIconURL({
    id: e,
    icon: p,
    size: n
  }), f = r.useMemo(() => null != g && g.length > t ? g.slice(0, t) : g, [g, t]), b = null != g && g.length > t ? g.length - t : null, x = null == u ? true : u.slug, j = null != x ? a.EYA.ROLE_SUBSCRIPTION_STORE_PAGE(x) : true, v = null == m || null == (s = m.guild) ? true : s.name, _ = null == m || null == (o = m.role_subscription) ? true : o.subscriber_count, O = !c && null != v && null != p && null != h;
  return O ? {
    hasAllImperativeDetails: O,
    isLoading: c,
    details: {
      guildName: v,
      guildIcon: p,
      guildAvatarUrl: h,
      storePageUrl: j,
      subscriberCount: _,
      emojisToShow: f,
      notShownEmojiCount: b
    }
  } : {
    hasAllImperativeDetails: O,
    isLoading: c,
    error: d
  }
}