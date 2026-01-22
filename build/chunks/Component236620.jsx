/** Chunk was on 47841 **/
/** chunk id: 236620, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  y: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk498642 = require("./498642.js"),
  Chunk997509 = require("./997509.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    label: t,
    description: n,
    helperText: u,
    guildId: f,
    defaultSettings: g,
    canManageGuild: b
  } = e, m = (0, l.bG)([a.A], () => a.A.getMemberCount(f)), p = i.useMemo(() => [{
    name: d.intl.string(d.t["n/bTaY"]),
    value: o.orn.ALL_MESSAGES,
    desc: null != m && m >= o._4N ? d.intl.string(d.t["L+P4t2"]) : null
  }, {
    name: d.intl.string(d.t["6fQPhu"]),
    value: o.orn.ONLY_MENTIONS
  }], [m]), x = i.useCallback(e => {
    c.A.updateGuild({
      defaultMessageNotifications: e
    })
  }, []);
  return (0, r.jsx)(s.z6M, {
    label: t,
    description: n,
    helperText: u,
    options: p,
    value: g,
    disabled: !b,
    onChange: x
  })
}