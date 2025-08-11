/** Chunk was on 27434 **/
/** chunk id: 473545, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => v
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk41776 = require("./41776.js"),
  Chunk314897 = require("./314897.js"),
  Chunk924301 = require("./924301.js"),
  Chunk482241 = require("./482241.js"),
  Chunk894017 = require("./894017.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function v(t) {
  let {
    guildEventId: n,
    guildId: e,
    recurrenceId: v
  } = t, b = (0, i.e7)([o.Z], () => o.Z.isLurking(e), [e]), f = (0, i.e7)([a.default], () => a.default.getId()), {
    rsvped: p,
    baseRsvp: j,
    recurrenceRsvp: h
  } = (0, i.cj)([c.ZP], () => ({
    rsvped: c.ZP.isInterestedInEventRecurrence(n, v),
    baseRsvp: c.ZP.getRsvp(n, null, f),
    recurrenceRsvp: c.ZP.getRsvp(n, v, f)
  }), [v, n, f]), y = (0, u.Z)(v, n);
  if (b || (null == y ? true : y.is_canceled)) return null;
  let Z = function() {
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      l = (null == j ? true : j.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
      i = t ? null : v;
    s.Z.updateRsvp(n, i, e, l)
  };
  return <r.sNh id={p ? g.intl.string(g.t["7M5gaG"]) : g.intl.string(g.t.FXixvL)} label={p ? g.intl.string(g.t["7M5gaG"]) : g.intl.string(g.t.FXixvL)} action={true}>{<r.sNh id={g.intl.string(g.t.lwZCFR)} label={g.intl.string(g.t.lwZCFR)} action={() => Z(false)} />}{<r.sNh id={g.intl.string(g.t.uoorxs)} label={g.intl.string(g.t.uoorxs)} action={() => Z(true)} disabled={null != h} />}</r.sNh>
}