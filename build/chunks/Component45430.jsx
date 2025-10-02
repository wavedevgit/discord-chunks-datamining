/** Chunk was on 9665 **/
/** chunk id: 45430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk841397 = require("./841397.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427538 = require("./427538.js");

function u(e) {
  let {
    channelId: t
  } = e;
  return (0, r.jsxs)("div", {
    className: c.container,
    children: [(0, r.jsx)(o.Z, {}), (0, r.jsxs)("div", {
      className: c.content,
      children: [(0, r.jsx)(l.X6q, {
        variant: "heading-lg/normal",
        children: s.intl.format(s.t.ilLVLi, {})
      }), (0, r.jsx)(i.zx, {
        size: i.zx.Sizes.LARGE,
        color: i.zx.Colors.PRIMARY,
        onClick: e => {
          e.stopPropagation(), a.Z.toggleVoiceParticipantsHidden(t, false)
        },
        children: s.intl.string(s.t.kLQySE)
      })]
    })]
  })
}