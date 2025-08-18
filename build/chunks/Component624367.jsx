/** Chunk was on 91173 **/
/** chunk id: 624367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk783097 = require("./783097.js"),
  Chunk230171 = require("./230171.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk365415 = require("./365415.js"),
  Chunk50523 = require("./50523.jsx");

function d(e) {
  let {
    applicationId: t,
    customId: n,
    referrerId: d,
    linkId: p
  } = e, {
    analyticsLocations: m
  } = (0, l.ZP)(i.Z.ACTIVITY_BOOKMARK), [f] = (0, s.Z)([t]), g = null != f && (0, o.ye)(f), {
    data: _,
    error: h
  } = (0, c.h)(null == f ? true : f.id, p);
  return null == f || false === g ? null : null != p && null == h && null != _ ? (0, r.jsx)(l.Gt, {
    value: m,
    children: (0, r.jsx)(u.b, {
      application: f,
      customId: n,
      customLink: _,
      referrerId: d
    })
  }) : (0, r.jsx)(l.Gt, {
    value: m,
    children: (0, r.jsx)(a.O, {
      app: f,
      linkType: a.U.ACTIVITY,
      activityCustomId: n,
      activityReferrerId: d
    })
  })
}