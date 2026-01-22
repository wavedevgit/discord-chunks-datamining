/** Chunk was on 97492 **/
/** chunk id: 713397, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk397927 = require("./397927.js"),
  Chunk367513 = require("./367513.js"),
  Chunk715989 = require("./715989.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk852887 = require("./852887.js");

function c(e) {
  let {
    channelId: t,
    allPoppedOut: n = false
  } = e;
  return (0, r.jsxs)("div", {
    className: o.kL,
    children: [(0, r.jsx)(a.A, {}), (0, r.jsxs)("div", {
      className: o.Qs,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-lg/normal",
        children: n ? s.intl.string(s.t.KIConm) : s.intl.format(s.t.ilLVLr, {})
      }), !n && (0, r.jsx)(l.Button, {
        variant: "secondary",
        size: "md",
        onClick: e => {
          e.stopPropagation(), i.A.toggleVoiceParticipantsHidden(t, false)
        },
        text: s.intl.string(s.t.kLQySL)
      })]
    })]
  })
}