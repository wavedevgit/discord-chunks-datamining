/** Chunk was on 64523 **/
/** chunk id: 723914, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  q: () => d
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk479347 = require("./479347.js");

function d(e) {
  let {
    isInventoryFeedEnabled: t,
    canManageGuild: n,
    features: d
  } = e, u = i.useCallback(e => {
    let t = new Set(d);
    e ? (t.add(a.oNc.ACTIVITY_FEED_ENABLED_BY_USER), t.delete(a.oNc.ACTIVITY_FEED_DISABLED_BY_USER)) : (t.add(a.oNc.ACTIVITY_FEED_DISABLED_BY_USER), t.delete(a.oNc.ACTIVITY_FEED_ENABLED_BY_USER)), s.Z.updateGuild({
      features: t
    })
  }, [d]);
  return (0, r.jsxs)(l.hjN, {
    title: o.intl.string(o.t["oQ/7BQ"]),
    children: [(0, r.jsx)(l.Text, {
      variant: "text-sm/medium",
      color: "text-secondary",
      className: c.description,
      children: o.intl.string(o.t.fZ0qZW)
    }), (0, r.jsx)(l.j7V, {
      value: t,
      className: c.switch,
      hideBorder: true,
      disabled: !n,
      onChange: u,
      children: o.intl.string(o.t.WompT0)
    })]
  })
}