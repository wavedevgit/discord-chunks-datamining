/** Chunk was on 50929 **/
/** chunk id: 595011, original params: e,l,n (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk931617 = require("./931617.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");
let h = (0, Chunk108843.Z)(function(e) {
  let {
    user: l,
    guildId: n,
    analyticsContext: s,
    onSelect: c
  } = e, h = (0, a.Z)({
    userId: l.id,
    guildId: n
  }), Z = (0, f.Z)(l.id, n), j = (0, u.Z)({
    id: l.id,
    label: g.intl.string(g.t["/AXYnE"])
  }), p = (0, d.Z)(l.id), v = l.isNonUserBot();
  return (0, t.jsx)(o.Z, {
    context: s,
    object: b.qAy.CONTEXT_MENU,
    children: (0, t.jsxs)(r.v2r, {
      navId: "user-context",
      onClose: i.Zy,
      "aria-label": g.intl.string(g.t.liqwPJ),
      onSelect: c,
      children: [(0, t.jsxs)(r.kSQ, {
        children: [!v && h, !v && p]
      }), (0, t.jsx)(r.kSQ, {
        children: !v && Z
      }), (0, t.jsx)(r.kSQ, {
        children: j
      })]
    })
  })
}, [Chunk100527.Z.CONTEXT_MENU, Chunk100527.Z.AUDIT_LOG_USER_MENU])