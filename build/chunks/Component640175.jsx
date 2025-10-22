/** Chunk was on 29679 **/
/** chunk id: 640175, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => u
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk650774 = require("./650774.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    label: t,
    description: n,
    helperText: u,
    guildId: g,
    defaultSettings: m,
    canManageGuild: p
  } = e, f = (0, l.e7)([s.Z], () => s.Z.getMemberCount(g)), h = i.useMemo(() => [{
    name: d.intl.string(d.t["n/bTaY"]),
    value: c.bL.ALL_MESSAGES,
    desc: null != f && f >= c.qWG ? d.intl.string(d.t["L+P4t2"]) : null
  }, {
    name: d.intl.string(d.t["6fQPhu"]),
    value: c.bL.ONLY_MENTIONS
  }], [f]), b = i.useCallback(e => {
    o.Z.updateGuild({
      defaultMessageNotifications: e
    })
  }, []);
  return (0, r.jsx)(a.FXm, {
    label: t,
    description: n,
    helperText: u,
    options: h,
    value: m,
    disabled: !p,
    onChange: b
  })
}