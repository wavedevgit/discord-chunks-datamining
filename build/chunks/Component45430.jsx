/** Chunk was on web.js **/
/** chunk id: 45430, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk841397 = require("./841397.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk203435 = require("./203435.js");

function u(e) {
  let {
    channelId: t
  } = e;
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)(s.Z, {}), (0, r.jsxs)("div", {
      className: c.content,
      children: [(0, r.jsx)(o.X6q, {
        variant: "heading-lg/normal",
        children: l.intl.format(l.t.ilLVLi, {})
      }), (0, r.jsx)(i.zx, {
        size: i.zx.Sizes.LARGE,
        color: i.zx.Colors.PRIMARY,
        onClick: e => {
          e.stopPropagation(), a.Z.toggleVoiceParticipantsHidden(t, false)
        },
        children: l.intl.string(l.t.kLQySE)
      })]
    })]
  })
}