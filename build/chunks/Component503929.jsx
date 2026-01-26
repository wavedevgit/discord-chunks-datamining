/** Chunk was on 39048 **/
/** chunk id: 503929, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  l: () => c
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function c(e) {
  let {
    isInventoryFeedEnabled: t,
    canManageGuild: n,
    features: c
  } = e, d = i.useCallback(e => {
    let t = new Set(c);
    e ? (t.add(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER), t.delete(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER)) : (t.add(a.GuildFeatures.ACTIVITY_FEED_DISABLED_BY_USER), t.delete(a.GuildFeatures.ACTIVITY_FEED_ENABLED_BY_USER)), s.A.updateGuild({
      features: t
    })
  }, [c]);
  return (0, r.jsx)(l.nVY, {
    label: o.intl.string(o.t["oQ/7Bc"]),
    description: o.intl.string(o.t.fZ0qZU),
    children: (0, r.jsx)(l.dOG, {
      label: o.intl.string(o.t.WompT5),
      checked: t,
      onChange: d,
      disabled: !n
    })
  })
}