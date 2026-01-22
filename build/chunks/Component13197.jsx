/** Chunk was on 60222 **/
/** chunk id: 13197, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => u
}), require("./228524.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk284009 = require("./284009.js"),
  r = require.n(Chunk284009),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk599941 = require("./599941.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk257529 = require("./257529.js");

function u(t) {
  let {
    onClose: n,
    guildId: i,
    transitionState: e
  } = t, u = (0, o.Tq)(i);
  return r()(null != u, "subscriptionsSettings cannot be null"), (0, a.jsx)(s.Modal, {
    onClose: n,
    title: c.intl.string(c.t.xPum5Q),
    transitionState: e,
    "aria-label": c.intl.string(c.t.D98gRz),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t.wdo1oB),
      onClick: n
    }],
    children: (0, a.jsx)(l.Text, {
      variant: "text-md/normal",
      color: "text-muted",
      className: d.h,
      children: u.description
    })
  })
}