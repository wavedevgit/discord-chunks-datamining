/** Chunk was on web.js **/
/** chunk id: 763899, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
});
var Chunk627968 = require("./627968.js"),
  Chunk351405 = require("./351405.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk627363 = require("./627363.js"),
  Chunk611010 = require("./611010.js"),
  Chunk443795 = require("./443795.js"),
  Chunk272984 = require("./272984.js");

function d(e) {
  return null != e.application ? l.Ay.createFromServer(e.application) : null != e.activity && null != e.activity.party_id && (0, u.pH)(e.activity.party_id) ? c.HT : true
}
let f = e => {
  var t;
  let {
    channel: n,
    message: l,
    hideParty: c
  } = e, {
    analyticsLocations: u
  } = (0, s.Ay)(a.A.INVITE_EMBED), f = d(l), {
    data: p
  } = (0, o.YY)(null == (t = l.application) ? true : t.id), _ = null != p ? p : f;
  return null == _ ? null : (0, r.jsx)(i.P, {
    app: _,
    channel: n,
    message: l,
    hideParty: c,
    analyticsLocations: u
  })
}