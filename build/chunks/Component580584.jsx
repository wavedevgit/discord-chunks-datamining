/** Chunk was on 15222 **/
/** chunk id: 580584, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk332664 = require("./332664.jsx"),
  Chunk814249 = require("./814249.js"),
  Chunk531578 = require("./531578.js"),
  Chunk388032 = require("./388032.jsx");
let r = [Chunk814249.R7.OTHER];

function b(a) {
  let {
    transitionState: e,
    startRating: t,
    onClose: b,
    onSubmit: m
  } = a;
  return (0, c.jsx)(o.Z, {
    modalType: "summary",
    header: n.intl.string(n.t.hghcMh),
    body: n.intl.string(n.t.QFU785),
    problemTitle: n.intl.string(n.t.CtiHPm),
    onSubmit: m,
    onClose: b,
    ratingOptions: [i.aZ.GOOD, i.aZ.BAD],
    ratingEmojiKind: "thumb",
    transitionState: e,
    problems: (0, d.iq)(),
    freeformNeededProblems: r,
    otherKey: d.R7.OTHER,
    startRating: t,
    hideDontShowAgainCheckbox: true
  })
}