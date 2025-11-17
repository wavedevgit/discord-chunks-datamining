/** Chunk was on 384 **/
/** chunk id: 354031, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    features: t,
    canManageGuild: n
  } = e, d = i.useCallback(e => {
    let n = new Set(t);
    e ? n.add(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER) : n.delete(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER), s.Z.updateGuild({
      features: n
    })
  }, [t]);
  return (0, r.jsx)(l.C3N, {
    label: c.intl.string(c.t.FOYxgr),
    description: c.intl.format(c.t["c6Cy/h"], {
      helpdeskArticle: a.Z.getArticleURL(o.BhN.CONVERSATION_SUMMARIES)
    }),
    children: (0, r.jsx)(l.rsf, {
      label: c.intl.string(c.t.vmEDQs),
      badge: "beta",
      checked: t.has(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
      onChange: d,
      disabled: !n
    })
  })
}