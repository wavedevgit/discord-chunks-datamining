/** Chunk was on 99041 **/
/** chunk id: 612856, original params: n,t,l (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk50268 = require("./50268.jsx"),
  Chunk687279 = require("./687279.jsx"),
  Chunk985018 = require("./985018.jsx");

function o(n) {
  let {
    channel: t,
    channelId: l,
    originalLink: o,
    messageId: d,
    onSelect: u
  } = n, h = (0, s.A)(t, o, d), p = (0, r.A)({
    id: l,
    label: c.intl.string(c.t.gFHI3k)
  });
  return (0, i.jsxs)(e.W1t, {
    "data-menu-migrated-auto": true,
    navId: "channel-mention-context",
    onClose: a.Z_,
    onSelect: u,
    "aria-label": c.intl.string(c.t.feGACE),
    children: [(0, i.jsx)(e.rXV, {
      children: h
    }, "channel-mention-actions"), (0, i.jsx)(e.rXV, {
      children: p
    }, "developer-actions")]
  })
}