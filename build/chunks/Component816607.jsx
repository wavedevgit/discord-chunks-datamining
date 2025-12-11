/** Chunk was on 86060 **/
/** chunk id: 816607, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk512722 = require("./512722.js"),
  r = require.n(Chunk512722),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk584825 = require("./584825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk595986 = require("./595986.js");

function p(t) {
  let {
    onClose: i,
    guildId: n,
    transitionState: a
  } = t, p = (0, c.YB)(n);
  return r()(null != p, "subscriptionsSettings cannot be null"), (0, e.jsx)(s.Modal, {
    onClose: i,
    title: d.intl.string(d.t.xPum5Q),
    transitionState: a,
    "aria-label": d.intl.string(d.t.D98gRz),
    actions: [{
      variant: "primary",
      text: d.intl.string(d.t.wdo1oB),
      onClick: i
    }],
    children: (0, e.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: l.description,
      children: p.description
    })
  })
}