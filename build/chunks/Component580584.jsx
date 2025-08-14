/** Chunk was on 64387 **/
/** chunk id: 580584, original params: e,t,o (module,exports,require) **/
require.d(exports, {
  default: () => s
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk332664 = require("./332664.jsx"),
  Chunk814249 = require("./814249.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");
let r = [Chunk814249.R7.OTHER];

function s(e) {
  let {
    transitionState: t,
    startRating: o,
    onClose: s,
    onSubmit: b
  } = e;
  return (0, _.jsx)(c.Z, {
    modalType: "summary",
    header: n.intl.string(n.t.hghcMj),
    body: n.intl.string(n.t["QFU78/"]),
    problemTitle: n.intl.string(n.t.CtiHPj),
    onSubmit: b,
    onClose: s,
    ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
    ratingEmojiKind: "thumb",
    transitionState: t,
    problems: (0, a.iq)(),
    freeformNeededProblems: r,
    otherKey: a.R7.OTHER,
    startRating: o,
    hideDontShowAgainCheckbox: true
  })
}