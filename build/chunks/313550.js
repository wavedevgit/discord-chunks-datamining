/** Chunk was on 48091 **/
/** chunk id: 313550, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
}), require("./388685.js"), require("./539854.js");
var Chunk73800 = require("./73800.js"),
  Chunk622545 = require("./622545.js"),
  Chunk817460 = require("./817460.js"),
  Chunk570533 = require("./570533.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    includeFlairAsBenefit: t,
    listing: n,
    guildId: o
  } = e, c = 0, d = 0;
  for (let e of n.role_benefits.benefits)(0, l.rC)(e) ? c += 1 : (0, l.lL)(e) && (d += 1);
  let u = n.role_id,
    m = (0, a.Z)(o).filter(e => e.roles.includes(u)).length;
  return r.useMemo(() => {
    let e = [];
    returntrue === t && e.push(s.intl.string(s.t.EhdV29)), 0 !== c && e.push(s.intl.formatToPlainString(s.t["p/l+BA"], {
      channelCount: c
    })), 0 !== d && e.push(s.intl.formatToPlainString(s.t.eXP5vr, {
      benefitCount: d
    })), 0 !== m && e.push(s.intl.formatToPlainString(s.t.YjmQwc, {
      emojiCount: m
    })), new i.Z(e)
  }, [c, d, m, t])
}