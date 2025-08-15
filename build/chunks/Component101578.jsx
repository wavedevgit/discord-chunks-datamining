/** Chunk was on 66866 **/
/** chunk id: 101578, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk627861 = require("./627861.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk728345 = require("./728345.js"),
  Chunk973616 = require("./973616.js"),
  Chunk789407 = require("./789407.js"),
  Chunk616922 = require("./616922.js");
let d = e => {
  var t;
  let {
    channel: n,
    message: d,
    hideParty: p
  } = e, {
    analyticsLocations: m
  } = (0, a.ZP)(l.Z.INVITE_EMBED), f = null != d.application ? s.ZP.createFromServer(d.application) : null != d.activity && null != d.activity.party_id && (0, u.Ps)(d.activity.party_id) ? c.r9 : true, {
    data: _
  } = (0, o.IX)(null == (t = d.application) ? true : t.id), g = null != _ ? _ : f;
  return null == g ? null : (0, r.jsx)(i.c, {
    app: g,
    channel: n,
    message: d,
    hideParty: p,
    analyticsLocations: m
  })
}