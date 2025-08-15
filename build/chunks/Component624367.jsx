/** Chunk was on 66866 **/
/** chunk id: 624367, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  } = (0, l.ZP)(i.Z.ACTIVITY_BOOKMARK), [f] = (0, s.Z)([t]), _ = null != f && (0, a.ye)(f), {
    data: g,
    error: h
  } = (0, c.h)(null == f ? true : f.id, p);
  return null == f || false === _ ? null : null != p && null == h && null != g ? (0, r.jsx)(l.Gt, {
    value: m,
    children: (0, r.jsx)(u.b, {
      application: f,
      customId: n,
      customLink: g,
      referrerId: d
    })
  }) : (0, r.jsx)(l.Gt, {
    value: m,
    children: (0, r.jsx)(o.O, {
      app: f,
      linkType: o.U.ACTIVITY,
      activityCustomId: n,
      activityReferrerId: d
    })
  })
}