/** Chunk was on 470 **/
/** chunk id: 473545, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
    guildEventId: e,
    guildId: n,
    recurrenceId: f
  } = t, b = (0, r.e7)([o.Z], () => o.Z.isLurking(n), [n]), p = (0, r.e7)([u.default], () => u.default.getId()), {
    rsvped: v,
    baseRsvp: E,
    recurrenceRsvp: y
  } = (0, r.cj)([c.ZP], () => ({
    rsvped: c.ZP.isInterestedInEventRecurrence(e, f),
    baseRsvp: c.ZP.getRsvp(e, null, p),
    recurrenceRsvp: c.ZP.getRsvp(e, f, p)
  }), [f, e, p]), O = (0, s.Z)(f, e);
  if (b || (null == O ? true : O.is_canceled)) return null;
  let P = function() {
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      l = (null == E ? true : E.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
      r = t ? null : f;
    a.Z.updateRsvp(e, r, n, l)
  };
  return (0, l.jsxs)(i.sNh, {
    id: v ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
    label: v ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
    action: true,
    children: [(0, l.jsx)(i.sNh, {
      id: g.intl.string(g.t.lwZCFT),
      label: g.intl.string(g.t.lwZCFT),
      action: () => P(false)
    }), (0, l.jsx)(i.sNh, {
      id: g.intl.string(g.t.uoorxi),
      label: g.intl.string(g.t.uoorxi),
      action: () => P(true),
      disabled: null != y
    })]
  })
}