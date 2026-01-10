/** Chunk was on 81985 **/
/** chunk id: 45430, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk481060 = require("./481060.js"),
  Chunk475179 = require("./475179.js"),
  Chunk841397 = require("./841397.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk951840 = require("./951840.js");

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