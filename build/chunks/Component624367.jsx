/** Chunk was on web.js **/
/** chunk id: 624367, original params: e,t,n (module,exports,re quire) **/
"use strict";
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
    linkId: f
  } = e, {
    analyticsLocations: _
  } = (0, o.ZP)(i.Z.ACTIVITY_BOOKMARK), [p] = (0, l.Z)([t]), h = null != p && (0, a.ye)(p), {
    data: m,
    error: g
  } = (0, c.h)(null == p ? true : p.id, f);
  return null == p || false === h ? null : null != f && null == g && null != m ? (0, r.jsx)(o.Gt, {
    value: _,
    children: (0, r.jsx)(u.b, {
      application: p,
      customId: n,
      customLink: m,
      referrerId: d
    })
  }) : (0, r.jsx)(o.Gt, {
    value: _,
    children: (0, r.jsx)(s.O, {
      app: p,
      linkType: s.U.ACTIVITY,
      activityCustomId: n,
      activityReferrerId: d
    })
  })
}