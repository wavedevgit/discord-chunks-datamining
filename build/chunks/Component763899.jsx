/** Chunk was on 9753 **/
/** chunk id: 763899, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk351405 = require("./351405.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk627363 = require("./627363.js"),
  Chunk611010 = require("./611010.js"),
  Chunk443795 = require("./443795.js"),
  Chunk272984 = require("./272984.js");
let d = e => {
  var t;
  let {
    channel: n,
    message: d,
    hideParty: p
  } = e, {
    analyticsLocations: m
  } = (0, a.Ay)(l.A.INVITE_EMBED), f = null != d.application ? o.Ay.createFromServer(d.application) : null != d.activity && null != d.activity.party_id && (0, u.pH)(d.activity.party_id) ? c.HT : true, {
    data: g
  } = (0, s.YY)(null == (t = d.application) ? true : t.id), _ = null != g ? g : f;
  return null == _ ? null : (0, r.jsx)(i.P, {
    app: _,
    channel: n,
    message: d,
    hideParty: p,
    analyticsLocations: m
  })
}