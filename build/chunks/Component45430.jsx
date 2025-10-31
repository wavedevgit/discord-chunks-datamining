/** Chunk was on 88647 **/
/** chunk id: 45430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk951288 = require("./951288.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk841397 = require("./841397.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk427538 = require("./427538.js");

function c(e) {
  let {
    channelId: t,
    allPoppedOut: n = false
  } = e;
  return (0, r.jsxs)("div", {
    className: s.container,
    children: [(0, r.jsx)(a.Z, {}), (0, r.jsxs)("div", {
      className: s.content,
      children: [(0, r.jsx)(i.Heading, {
        variant: "heading-lg/normal",
        children: n ? o.intl.string(o.t.KIConm) : o.intl.format(o.t.ilLVLr, {})
      }), !n && (0, r.jsx)(i.Button, {
        variant: "secondary",
        size: "md",
        onClick: e => {
          e.stopPropagation(), l.Z.toggleVoiceParticipantsHidden(t, false)
        },
        text: o.intl.string(o.t.kLQySL)
      })]
    })]
  })
}