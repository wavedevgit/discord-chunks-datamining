/** Chunk was on 1272 **/
/** chunk id: 841710, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Y: () => u,
  Z: () => c
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk129861 = require("./129861.jsx"),
  Chunk25009 = require("./25009.js");

function c(e) {
  let {
    user: t,
    status: n,
    isFocused: i,
    guildId: l
  } = e;
  return (0, r.jsxs)("div", {
    className: o.memberItem,
    children: [(0, r.jsx)(a.qEK, {
      src: t.getAvatarURL(l, 24),
      className: o.avatar,
      "aria-label": t.username,
      size: a.EFr.SIZE_24,
      status: n,
      statusColor: i ? "currentColor" : true
    }), (0, r.jsx)(s.Z, {
      user: t,
      hideDiscriminator: true
    })]
  })
}

function u(e) {
  let {
    label: t
  } = e;
  return (0, r.jsxs)("div", {
    className: o.memberItem,
    children: [(0, r.jsx)("div", {
      className: l()(o.avatar, o.unknown)
    }), (0, r.jsx)("div", {
      children: t
    })]
  })
}