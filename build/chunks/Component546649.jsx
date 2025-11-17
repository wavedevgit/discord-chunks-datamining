/** Chunk was on 9573 **/
/** chunk id: 546649, original params: n,t,l (module,exports,require) **/
require.d(exports, {
  default: () => r
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk299206 = require("./299206.jsx"),
  Chunk461757 = require("./461757.jsx"),
  Chunk388032 = require("./388032.jsx");

function r(n) {
  let {
    channel: t,
    channelId: l,
    originalLink: r,
    messageId: u,
    onSelect: d
  } = n, h = (0, c.Z)(t, r, u), p = (0, a.Z)({
    id: l,
    label: o.intl.string(o.t.gFHI3k)
  });
  return (0, i.jsxs)(e.v2r, {
    navId: "channel-mention-context",
    onClose: s.Zy,
    onSelect: d,
    "aria-label": o.intl.string(o.t.feGACE),
    children: [(0, i.jsx)(e.kSQ, {
      children: h
    }, "channel-mention-actions"), (0, i.jsx)(e.kSQ, {
      children: p
    }, "developer-actions")]
  })
}