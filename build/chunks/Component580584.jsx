/** Chunk was on 64387 **/
/** chunk id: 580584, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk332664 = require("./332664.jsx"),
  Chunk814249 = require("./814249.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");
let r = [Chunk814249.R7.OTHER];

function b(e) {
  let {
    transitionState: t,
    startRating: o,
    onClose: b,
    onSubmit: s
  } = e;
  return (0, _.jsx)(c.Z, {
    modalType: "summary",
    header: i.intl.string(i.t.hghcMh),
    body: i.intl.string(i.t.QFU785),
    problemTitle: i.intl.string(i.t.CtiHPm),
    onSubmit: s,
    onClose: b,
    ratingOptions: [n.aZ.GOOD, n.aZ.BAD],
    ratingEmojiKind: "thumb",
    transitionState: t,
    problems: (0, a.iq)(),
    freeformNeededProblems: r,
    otherKey: a.R7.OTHER,
    startRating: o,
    hideDontShowAgainCheckbox: true
  })
}