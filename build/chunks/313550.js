/** Chunk was on web.js **/
/** chunk id: 313550, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./539854.js");
var Chunk647438 = require("./647438.js"),
  Chunk622545 = require("./622545.js"),
  Chunk817460 = require("./817460.js"),
  Chunk570533 = require("./570533.js"),
  Chunk388032 = require("./388032.jsx");

function l(e) {
  let {
    includeFlairAsBenefit: t,
    listing: n,
    guildId: l
  } = e, c = 0, u = 0;
  for (let e of n.role_benefits.benefits)(0, o.rC)(e) ? c += 1 : (0, o.lL)(e) && (u += 1);
  let d = n.role_id,
    f = (0, a.Z)(l).filter(e => e.roles.includes(d)).length;
  return r.useMemo(() => {
    let e = [];
    returntrue === t && e.push(s.intl.string(s.t.EhdV29)), 0 !== c && e.push(s.intl.formatToPlainString(s.t["p/l+BA"], {
      channelCount: c
    })), 0 !== u && e.push(s.intl.formatToPlainString(s.t.eXP5vr, {
      benefitCount: u
    })), 0 !== f && e.push(s.intl.formatToPlainString(s.t.YjmQwc, {
      emojiCount: f
    })), new i.Z(e)
  }, [c, u, f, t])
}