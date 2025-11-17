/** Chunk was on 384 **/
/** chunk id: 723914, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  q: () => c
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    isInventoryFeedEnabled: t,
    canManageGuild: n,
    features: c
  } = e, d = i.useCallback(e => {
    let t = new Set(c);
    e ? (t.add(s.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER), t.delete(s.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER)) : (t.add(s.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER), t.delete(s.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER)), a.Z.updateGuild({
      features: t
    })
  }, [c]);
  return (0, r.jsx)(l.C3N, {
    label: o.intl.string(o.t["oQ/7Bc"]),
    description: o.intl.string(o.t.fZ0qZU),
    children: (0, r.jsx)(l.rsf, {
      label: o.intl.string(o.t.WompT5),
      checked: t,
      onChange: d,
      disabled: !n
    })
  })
}