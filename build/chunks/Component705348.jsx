/** Chunk was on 1272 **/
/** chunk id: 705348, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk82950 = require("./82950.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk921944 = require("./921944.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk157476 = require("./157476.js");

function u(e) {
  let {
    guild: t,
    markAsDismissed: n
  } = e;
  return (0, r.jsx)(i.Z, {
    image: c,
    guild: t,
    onDismissed: () => n(s.L.UNKNOWN),
    onClick: () => {
      open(l.Z.getArticleURL(a.BhN.CONNECTION_DETAILS)), n(s.L.UNKNOWN)
    },
    title: o.intl.string(o.t.YMgaJt),
    message: o.intl.string(o.t["AV/9eW"]),
    cta: o.intl.string(o.t.hvVgAZ),
    trackingSource: a.PsQ.LINKED_ROLES_ADMIN_NUX,
    type: a.vID.LINKED_ROLES_ADMIN
  })
}