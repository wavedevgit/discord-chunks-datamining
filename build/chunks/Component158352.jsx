/** Chunk was on 39048 **/
/** chunk id: 158352, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  c: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk975571 = require("./975571.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    features: t,
    canManageGuild: n
  } = e, d = i.useCallback(e => {
    let n = new Set(t);
    e ? n.add(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER) : n.delete(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER), a.A.updateGuild({
      features: n
    })
  }, [t]);
  return (0, r.jsx)(l.nVY, {
    label: c.intl.string(c.t.FOYxgr),
    description: c.intl.format(c.t["c6Cy/h"], {
      helpdeskArticle: s.A.getArticleURL(o.MVz.CONVERSATION_SUMMARIES)
    }),
    children: (0, r.jsx)(l.dOG, {
      label: c.intl.string(c.t.vmEDQs),
      badge: "beta",
      checked: t.has(o.GuildFeatures.SUMMARIES_ENABLED_BY_USER),
      onChange: d,
      disabled: !n
    })
  })
}