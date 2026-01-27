/** Chunk was on web.js **/
/** chunk id: 407698, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Q: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk435371 = require("./435371.js"),
  Chunk426983 = require("./426983.js"),
  Chunk176128 = require("./176128.js"),
  Chunk454938 = require("./454938.js"),
  Chunk714991 = require("./714991.jsx"),
  Chunk57991 = require("./57991.jsx"),
  Chunk652215 = require("./652215.js");

function f(e) {
  let {
    guild: t,
    children: n
  } = e, f = (0, l.A)(t);
  return i.useMemo(() => {
    if (f) {
      let e = (0, s.Jp)(t);
      return (0, o.K)(e) !== o._.NONE
    }
    return t.features.has(d.GuildFeatures.INTERNAL_EMPLOYEE_ONLY) || t.features.has(d.GuildFeatures.HUB) || t.features.has(d.GuildFeatures.VERIFIED) || t.features.has(d.GuildFeatures.PARTNERED)
  }, [t, f]) ? (0, r.jsx)(a.un, {
    asset: f ? (0, r.jsx)(u.A, {
      guild: t,
      size: 20
    }) : (0, r.jsx)(c.A, {
      guild: t,
      size: 20
    }),
    assetSize: 20,
    position: "right",
    align: "center",
    body: t.name,
    children: n
  }) : (0, r.jsx)(a.m_, {
    position: "right",
    align: "center",
    text: t.name,
    children: n
  })
}