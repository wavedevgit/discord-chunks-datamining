/** Chunk was on web.js **/
/** chunk id: 488331, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./896048.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk735991 = require("./735991.js"),
  Chunk485724 = require("./485724.jsx"),
  Chunk429913 = require("./429913.js"),
  Chunk246097 = require("./246097.js"),
  Chunk96440 = require("./96440.jsx"),
  Chunk768349 = require("./768349.js");

function f(e) {
  let {
    applicationId: t,
    customId: n,
    referrerId: f,
    linkId: p,
    message: _
  } = e, {
    analyticsLocations: h
  } = (0, a.Ay)(i.A.ACTIVITY_BOOKMARK), [m] = (0, l.A)([t]), g = null != m && (0, s.Ag)(m), {
    data: E,
    error: b
  } = (0, c.K)(null == m ? true : m.id, p);
  return null == m || false === g ? null : null != p && null == b && null != E ? (0, r.jsx)(a.f5, {
    value: h,
    children: (0, r.jsx)(u.W, {
      application: m,
      customId: n,
      customLink: E,
      referrerId: f,
      message: _
    })
  }) : (0, r.jsx)(a.f5, {
    value: h,
    children: (0, r.jsx)(o.W, {
      app: m,
      linkType: d.J.ACTIVITY,
      activityCustomId: n,
      activityReferrerId: f,
      message: _
    })
  })
}