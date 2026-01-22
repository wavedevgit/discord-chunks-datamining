/** Chunk was on web.js **/
/** chunk id: 898612, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk963027 = require("./963027.js"),
  Chunk713654 = require("./713654.js"),
  Chunk403362 = require("./403362.js"),
  Chunk739455 = require("./739455.js"),
  Chunk2242 = require("./2242.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk758382 = require("./758382.js");

function f(e) {
  let {
    channelId: t
  } = e, n = (0, l.fE)(t);
  if (null == n) return "[".concat(u.intl.string(u.t.bz1PZX), "]");
  let o = n.isMediaChannel() ? i.xfq : (0, s._U)(n.type);
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(i.AC4, {
      children: (0, a.Ay)({
        channel: n
      })
    }), (0, r.jsxs)("div", {
      "aria-hidden": true,
      children: [null != o && (0, r.jsx)(o, {
        className: d.K,
        "aria-hidden": true
      }), n.name]
    })]
  })
}

function p(e) {
  switch (e.ref_type) {
    case c.bN.CHANNEL:
      return (0, r.jsx)(f, {
        channelId: e.ref_id
      });
    case c.bN.INTANGIBLE:
      return e.name;
    default:
      (0, o.xb)(e)
  }
}