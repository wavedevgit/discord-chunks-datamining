/** Chunk was on 60222 **/
/** chunk id: 13197, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  s = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk599941 = require("./599941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk257529 = require("./257529.js");

function p(t) {
  let {
    onClose: i,
    guildId: n,
    transitionState: r
  } = t, p = (0, o.Tq)(n);
  return s()(null != p, "subscriptionsSettings cannot be null"), (0, a.jsx)(e.Modal, {
    onClose: i,
    title: c.intl.string(c.t.xPum5Q),
    transitionState: r,
    "aria-label": c.intl.string(c.t.D98gRz),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t.wdo1oB),
      onClick: i
    }],
    children: (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: d.h,
      children: p.description
    })
  })
}