/** Chunk was on web.js **/
/** chunk id: 530472, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk824203 = require("./824203.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk303681 = require("./303681.js");

function c(e) {
  var t;
  let n, {
      message: c,
      onDeleteMessage: u,
      children: d
    } = e,
    f = null == (t = c.interactionMetadata) ? true : t.ephemerality_reason,
    _ = () => u(c, true);
  if (null != f) {
    let e = (0, a.i)(f);
    n = (0, r.jsx)("div", {
      className: l.userAppsBetaContent,
      children: s.intl.format(s.t.wx1tLQ, {
        handleDelete: _,
        reason: e
      })
    })
  } else n = c.type === o.uaV.STAGE_RAISE_HAND ? s.intl.format(s.t["qDAX++"], {
    handleDelete: _
  }) : s.intl.format(s.t.uX3ecL, {
    count: 1,
    countMessages: 1,
    handleDelete: _
  });
  return (0, r.jsxs)("div", {
    className: l.ephemeralMessage,
    onClick: e => e.stopPropagation(),
    children: [(0, r.jsx)(i.tEF, {
      size: "xs",
      color: "currentColor",
      className: l.icon
    }), n, d]
  })
}