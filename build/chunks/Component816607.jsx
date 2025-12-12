/** Chunk was on 86060 **/
/** chunk id: 816607, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  e = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk584825 = require("./584825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk712912 = require("./712912.js");

function p(t) {
  let {
    onClose: i,
    guildId: n,
    transitionState: s
  } = t, p = (0, c.YB)(n);
  return e()(null != p, "subscriptionsSettings cannot be null"), (0, r.jsx)(a.Modal, {
    onClose: i,
    title: l.intl.string(l.t.xPum5Q),
    transitionState: s,
    "aria-label": l.intl.string(l.t.D98gRz),
    actions: [{
      variant: "primary",
      text: l.intl.string(l.t.wdo1oB),
      onClick: i
    }],
    children: (0, r.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: d.description,
      children: p.description
    })
  })
}