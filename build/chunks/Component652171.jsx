/** Chunk was on 92795 **/
/** chunk id: 652171, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
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
  } = e, p = c.ZP.getDefaultChannel(t.id, true, s.Plq.CREATE_INSTANT_INVITE), b = (0, a.Z)(t.id), y = (0, o.Z)(t), f = (0, u.Z)({
    guild: t,
    source: s.t4x.GUILD_CONTEXT_MENU,
    channel: p
  });
  return (0, r.jsxs)(l.v2r, {
    navId: "guild-context",
    "aria-label": d.intl.string(d.t.HpQykZ),
    onClose: i.Zy,
    onSelect: n,
    children: [(0, r.jsx)(l.kSQ, {
      children: b
    }), (0, r.jsxs)(l.kSQ, {
      children: [y, f]
    })]
  })
}