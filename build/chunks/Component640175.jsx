/** Chunk was on 21376 **/
/** chunk id: 640175, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk538534 = require("./538534.jsx"),
  Chunk650774 = require("./650774.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    guildId: t,
    defaultSettings: n,
    canManageGuild: u
  } = e, m = (0, l.e7)([a.Z], () => a.Z.getMemberCount(t)), g = i.useMemo(() => [{
    name: d.intl.string(d.t["n/bTaW"]),
    value: c.bL.ALL_MESSAGES,
    desc: null != m && m >= c.qWG ? d.intl.string(d.t["L+P4t7"]) : null
  }, {
    name: d.intl.string(d.t["6fQPho"]),
    value: c.bL.ONLY_MENTIONS
  }], [m]), p = i.useCallback(e => {
    o.Z.updateGuild({
      defaultMessageNotifications: e
    })
  }, []);
  return (0, r.jsx)(s.E, {
    options: g,
    value: n,
    disabled: !u,
    onChange: p
  })
}