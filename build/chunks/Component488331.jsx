/** Chunk was on 92917 **/
/** chunk id: 488331, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => p
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

function p(e) {
  let {
    applicationId: t,
    customId: n,
    referrerId: p,
    linkId: m,
    message: f
  } = e, {
    analyticsLocations: g
  } = (0, l.Ay)(i.A.ACTIVITY_BOOKMARK), [h] = (0, o.A)([t]), _ = null != h && (0, a.Ag)(h), {
    data: b,
    error: A
  } = (0, c.K)(null == h ? true : h.id, m);
  return null == h || false === _ ? null : null != m && null == A && null != b ? (0, r.jsx)(l.f5, {
    value: g,
    children: (0, r.jsx)(u.W, {
      application: h,
      customId: n,
      customLink: b,
      referrerId: p,
      message: f
    })
  }) : (0, r.jsx)(l.f5, {
    value: g,
    children: (0, r.jsx)(s.W, {
      app: h,
      linkType: d.J.ACTIVITY,
      activityCustomId: n,
      activityReferrerId: p,
      message: f
    })
  })
}