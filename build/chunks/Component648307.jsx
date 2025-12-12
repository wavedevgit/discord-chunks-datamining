/** Chunk was on web.js **/
/** chunk id: 648307, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => f
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk284363 = require("./284363.js"),
  Chunk854218 = require("./854218.js"),
  Chunk666188 = require("./666188.js"),
  Chunk372769 = require("./372769.jsx"),
  Chunk523751 = require("./523751.jsx"),
  Chunk981631 = require("./981631.js");

function f(e) {
  let {
    guild: t,
    children: n
  } = e, f = (0, l.Z)(t);
  return i.useMemo(() => {
    if (f) {
      let e = (0, s.XX)(t);
      return (0, a.i)(e) !== a.Q.NONE
    }
    return t.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) || t.features.has(d.GuildFeatures.HUB) || t.features.has(d.GuildFeatures.VERIFIED) || t.features.has(d.GuildFeatures.PARTNERED)
  }, [t, f]) ? (0, r.jsx)(o.i_, {
    asset: f ? (0, r.jsx)(u.Z, {
      guild: t,
      size: 20
    }) : (0, r.jsx)(c.Z, {
      guild: t,
      size: 20
    }),
    assetSize: 20,
    position: "right",
    align: "center",
    body: t.name,
    children: n
  }) : (0, r.jsx)(o.u, {
    position: "right",
    align: "center",
    text: t.name,
    children: n
  })
}