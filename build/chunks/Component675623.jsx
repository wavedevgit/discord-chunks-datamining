/** Chunk was on 7869 **/
/** chunk id: 675623, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk857071 = require("./857071.js"),
  Chunk961350 = require("./961350.js"),
  Chunk698441 = require("./698441.js"),
  Chunk496092 = require("./496092.js"),
  Chunk722260 = require("./722260.js"),
  Chunk988794 = require("./988794.js"),
  Chunk985018 = require("./985018.jsx");

function y(e) {
  let {
    guildEventId: t,
    guildId: n,
    recurrenceId: y
  } = e, f = (0, r.bG)([u.A], () => u.A.isLurking(n), [n]), b = (0, r.bG)([o.default], () => o.default.getId()), {
    rsvped: p,
    baseRsvp: A,
    recurrenceRsvp: v
  } = (0, r.cf)([a.Ay], () => ({
    rsvped: a.Ay.isInterestedInEventRecurrence(t, y),
    baseRsvp: a.Ay.getRsvp(t, null, b),
    recurrenceRsvp: a.Ay.getRsvp(t, y, b)
  }), [y, t, b]), E = (0, s.A)(y, t);
  if (f || (null == E ? true : E.is_canceled)) return null;
  let O = function() {
    let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
      l = (null == A ? true : A.response) === d.Qi.INTERESTED ? d.Qi.UNINTERESTED : d.Qi.INTERESTED,
      r = e ? null : y;
    c.A.updateRsvp(t, r, n, l)
  };
  return (0, l.jsxs)(i.Drp, {
    id: p ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
    label: p ? g.intl.string(g.t["7M5gaN"]) : g.intl.string(g.t.FXixvH),
    action: true,
    children: [(0, l.jsx)(i.Drp, {
      id: g.intl.string(g.t.lwZCFT),
      label: g.intl.string(g.t.lwZCFT),
      action: () => O(false)
    }), (0, l.jsx)(i.Drp, {
      id: g.intl.string(g.t.uoorxi),
      label: g.intl.string(g.t.uoorxi),
      action: () => O(true),
      disabled: null != v
    })]
  })
}