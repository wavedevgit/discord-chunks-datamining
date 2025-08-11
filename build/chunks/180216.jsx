/** Chunk was on 49152 **/
/** chunk id: 180216, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk592125 = require("./592125.js"),
  Chunk430824 = require("./430824.js"),
  Chunk584825 = require("./584825.js"),
  Chunk406074 = require("./406074.js"),
  Chunk660196 = require("./660196.js"),
  Chunk36246 = require("./36246.jsx"),
  Chunk305342 = require("./305342.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk845230 = require("./845230.js");

function b(e) {
  let {
    guildId: t,
    channelId: n
  } = e, b = (0, u.C)({
    guildId: t,
    channelId: n
  }), y = (0, c.GG)(t), x = (0, c.YB)(t), _ = (0, l.e7)([o.Z], () => o.Z.getGuild(t), [t]), j = null == _ ? true : _.name, O = (0, l.e7)([s.Z], () => s.Z.getChannel(n)), v = i.useMemo(() => {
    let e = {};
    for (let t of y)
      for (let n of t.subscription_listings_ids) e[n] = t.id;
    return e
  }, [y]);
  return ((0, d.Z)({
    guildId: t,
    location: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL,
    relevantSubscriptionListingIds: b.map(e => e.id)
  }), null == _) ? <div className={m.__invalid_spinnerContainer}><a.$jN className={m.__invalid_spinner} /></div> : <a.w0Z className={m.pageContainer}>{<a.X6q variant={"heading-xl/semibold"} className={m.joinCtaTitle}>{g.intl.format(g.t.xHMpys, {
        serverName: j,
        channelName: null == O ? true : O.name
      })}</a.X6q>}{<a.Text className={m.joinCtaSubtitle} variant={"text-md/normal"} color={"header-secondary"}>{null == x ? true : x.description}</a.Text>}{<h.Z guildId={t}>{b.filter(e => null != v[e.id]).map(e => (0, r.jsx)(p.Z, {
        guildId: t,
        listingId: e.id,
        groupListingId: v[e.id],
        analyticsLocation: f.Sbl.ROLE_SUBSCRIPTION_GATED_CHANNEL
      }, e.id))}</h.Z>}</a.w0Z>
}