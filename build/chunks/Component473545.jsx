/** Chunk was on 27434 **/
/** chunk id: 473545, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk41776 = require("./41776.js"),
  Chunk314897 = require("./314897.js"),
  Chunk924301 = require("./924301.js"),
  Chunk482241 = require("./482241.js"),
  Chunk894017 = require("./894017.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx");

function f(t) {
  let {
    guildEventId: n,
    guildId: e,
    recurrenceId: f
  } = t, b = (0, i.e7)([o.Z], () => o.Z.isLurking(e), [e]), p = (0, i.e7)([a.default], () => a.default.getId()), {
    rsvped: v,
    baseRsvp: h,
    recurrenceRsvp: y
  } = (0, i.cj)([c.ZP], () => ({
    rsvped: c.ZP.isInterestedInEventRecurrence(n, f),
    baseRsvp: c.ZP.getRsvp(n, null, p),
    recurrenceRsvp: c.ZP.getRsvp(n, f, p)
  }), [f, n, p]), E = (0, s.Z)(f, n);
  if (b || (null == E ? true : E.is_canceled)) return null;
  let O = function() {
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      l = (null == h ? true : h.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
      i = t ? null : f;
    u.Z.updateRsvp(n, i, e, l)
  };
  return (0, l.jsxs)(r.sNh, {
    id: v ? g.intl.string(g.t["7M5gaG"]) : g.intl.string(g.t.FXixvL),
    label: v ? g.intl.string(g.t["7M5gaG"]) : g.intl.string(g.t.FXixvL),
    action: true,
    children: [(0, l.jsx)(r.sNh, {
      id: g.intl.string(g.t.lwZCFR),
      label: g.intl.string(g.t.lwZCFR),
      action: () => O(false)
    }), (0, l.jsx)(r.sNh, {
      id: g.intl.string(g.t.uoorxs),
      label: g.intl.string(g.t.uoorxs),
      action: () => O(true),
      disabled: null != y
    })]
  })
}