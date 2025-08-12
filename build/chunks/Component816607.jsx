/** Chunk was on 86060 **/
/** chunk id: 816607, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  s = require.n(Chunk512722),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk584825 = require("./584825.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk944534 = require("./944534.js");

function p(t) {
  let {
    onClose: i,
    guildId: n,
    transitionState: r
  } = t, p = (0, c.YB)(n);
  return s()(null != p, "subscriptionsSettings cannot be null"), (0, e.jsx)(a.Modal, {
    onClose: i,
    title: l.intl.string(l.t.xPum5e),
    transitionState: r,
    "aria-label": l.intl.string(l.t.D98gR0),
    actions: [{
      variant: "primary",
      text: l.intl.string(l.t.wdo1oK),
      onClick: i
    }],
    children: (0, e.jsx)(o.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: d.description,
      children: p.description
    })
  })
}