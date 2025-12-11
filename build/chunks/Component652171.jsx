/** Chunk was on 92795 **/
/** chunk id: 652171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk984933 = require("./984933.js"),
  Chunk904483 = require("./904483.jsx"),
  Chunk522762 = require("./522762.jsx"),
  Chunk466330 = require("./466330.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function p(e) {
  let {
    guild: t,
    onSelect: n
  } = e, p = c.ZP.getDefaultChannel(t.id, true, u.Plq.CREATE_INSTANT_INVITE), b = (0, o.Z)(t.id), y = (0, a.Z)(t), O = (0, s.Z)({
    guild: t,
    source: u.t4x.GUILD_CONTEXT_MENU,
    channel: p
  });
  return (0, r.jsxs)(i.v2r, {
    navId: "guild-context",
    "aria-label": d.intl.string(d.t.HpQykc),
    onClose: l.Zy,
    onSelect: n,
    children: [(0, r.jsx)(i.kSQ, {
      children: b
    }), (0, r.jsxs)(i.kSQ, {
      children: [y, O]
    })]
  })
}