/** Chunk was on 23835 **/
/** chunk id: 768079, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk410575 = require("./410575.jsx"),
  Chunk108843 = require("./108843.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk88966 = require("./88966.jsx"),
  Chunk37258 = require("./37258.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let p = (0, Chunk108843.Z)(function(e) {
  let {
    user: t,
    analyticsContext: n,
    onSelect: o
  } = e, a = (0, d.Z)({
    userId: t.id
  }), p = (0, s.Z)({
    id: t.id,
    label: b.intl.string(b.t["/AXYnE"])
  }), O = (0, u.Z)(t.id), h = t.isNonUserBot();
  return (0, r.jsx)(c.Z, {
    context: n,
    object: f.qAy.CONTEXT_MENU,
    children: (0, r.jsxs)(i.v2r, {
      navId: "user-context",
      onClose: l.Zy,
      "aria-label": b.intl.string(b.t.liqwPJ),
      onSelect: o,
      children: [(0, r.jsxs)(i.kSQ, {
        children: [!h && a, !h && O]
      }), (0, r.jsx)(i.kSQ, {
        children: p
      })]
    })
  })
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.BANNED_USER_MENU])