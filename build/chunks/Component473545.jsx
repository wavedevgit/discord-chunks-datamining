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
  } = t, v = (0, i.e7)([u.Z], () => u.Z.isLurking(n), [n]), b = (0, i.e7)([o.default], () => o.default.getId()), {
    rsvped: E,
    baseRsvp: p,
    recurrenceRsvp: Z
  } = (0, i.cj)([c.ZP], () => ({
    rsvped: c.ZP.isInterestedInEventRecurrence(e, f),
    baseRsvp: c.ZP.getRsvp(e, null, b),
    recurrenceRsvp: c.ZP.getRsvp(e, f, b)
  }), [f, e, b]), h = (0, s.Z)(f, e);
  if (v || (null == h ? true : h.is_canceled)) return null;
  let y = function() {
    let t = arguments.length > 0 && true !== arguments[0] && arguments[0],
      l = (null == p ? true : p.response) === d.gv.INTERESTED ? d.gv.UNINTERESTED : d.gv.INTERESTED,
      i = t ? null : f;
    a.Z.updateRsvp(e, i, n, l)
  };
  return (0, l.jsxs)(r.sNh, {
    id: E ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
    label: E ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
    action: true,
    children: [(0, l.jsx)(r.sNh, {
      id: g.intl.string(g.t.lwZCFT),
      label: g.intl.string(g.t.lwZCFT),
      action: () => y(false)
    }), (0, l.jsx)(r.sNh, {
      id: g.intl.string(g.t.uoorxi),
      label: g.intl.string(g.t.uoorxi),
      action: () => y(true),
      disabled: null != Z
    })]
  })
}