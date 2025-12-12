/** Chunk was on 384 **/
/** chunk id: 640175, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  z: () => d
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk650774 = require("./650774.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    label: t,
    description: n,
    helperText: d,
    guildId: g,
    defaultSettings: m,
    canManageGuild: p
  } = e, f = (0, l.e7)([a.Z], () => a.Z.getMemberCount(g)), h = i.useMemo(() => [{
    name: u.intl.string(u.t["n/bTaY"]),
    value: c.bL.ALL_MESSAGES,
    desc: null != f && f >= c.qWG ? u.intl.string(u.t["L+P4t2"]) : null
  }, {
    name: u.intl.string(u.t["6fQPhu"]),
    value: c.bL.ONLY_MENTIONS
  }], [f]), x = i.useCallback(e => {
    o.Z.updateGuild({
      defaultMessageNotifications: e
    })
  }, []);
  return (0, r.jsx)(s.FXm, {
    label: t,
    description: n,
    helperText: d,
    options: h,
    value: m,
    disabled: !p,
    onChange: x
  })
}