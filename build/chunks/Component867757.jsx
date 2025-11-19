/** Chunk was on 95307 **/
/** chunk id: 867757, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk416977 = require("./416977.jsx"),
  Chunk778123 = require("./778123.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function o(e) {
  let {
    guildId: t,
    analyticsContext: n,
    onSelect: o
  } = e, v = (0, c.Z)(t), h = (0, a.Z)(t);
  return (0, i.jsx)(r.Z, {
    context: n,
    object: u.qAy.CONTEXT_MENU,
    children: (0, i.jsxs)(s.v2r, {
      navId: "user-context",
      onClose: d.Zy,
      "aria-label": l.intl.string(l.t.liqwPJ),
      onSelect: o,
      children: [(0, i.jsx)(s.kSQ, {
        children: v
      }), (0, i.jsx)(s.kSQ, {
        children: h
      })]
    })
  })
}