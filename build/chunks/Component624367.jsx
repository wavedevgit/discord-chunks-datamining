/** Chunk was on web.js **/
/** chunk id: 624367, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk783097 = require("./783097.js"),
  Chunk230171 = require("./230171.jsx"),
  Chunk835473 = require("./835473.js"),
  Chunk365415 = require("./365415.js"),
  Chunk50523 = require("./50523.jsx"),
  Chunk967249 = require("./967249.js");

function f(e) {
  let {
    applicationId: t,
    customId: n,
    referrerId: f,
    linkId: p,
    message: _
  } = e, {
    analyticsLocations: m
  } = (0, a.ZP)(i.Z.ACTIVITY_BOOKMARK), [h] = (0, l.Z)([t]), g = null != h && (0, o.ye)(h), {
    data: E,
    error: b
  } = (0, c.h)(null == h ? true : h.id, p);
  return null == h || false === g ? null : null != p && null == b && null != E ? (0, r.jsx)(a.Gt, {
    value: m,
    children: (0, r.jsx)(u.b, {
      application: h,
      customId: n,
      customLink: E,
      referrerId: f,
      message: _
    })
  }) : (0, r.jsx)(a.Gt, {
    value: m,
    children: (0, r.jsx)(s.O, {
      app: h,
      linkType: d.U.ACTIVITY,
      activityCustomId: n,
      activityReferrerId: f,
      message: _
    })
  })
}