/** Chunk was on 3489 **/
/** chunk id: 225315, original params: a,e,d (module,exports,require) **/
require.d(exports, {
  default: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk612479 = require("./612479.jsx"),
  Chunk521732 = require("./521732.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx");
let i = [Chunk521732.tk.OTHER];

function o(a) {
  let {
    transitionState: e,
    startRating: d,
    onClose: o,
    onSubmit: n
  } = a;
  return (0, t.jsx)(f.A, {
    modalType: "summary",
    header: r.intl.string(r.t.hghcMh),
    body: r.intl.string(r.t.QFU785),
    problemTitle: r.intl.string(r.t.CtiHPm),
    onSubmit: n,
    onClose: o,
    ratingOptions: [c.P0.GOOD, c.P0.BAD],
    ratingEmojiKind: "thumb",
    transitionState: e,
    problems: (0, b.j0)(),
    freeformNeededProblems: i,
    otherKey: b.tk.OTHER,
    startRating: d,
    hideDontShowAgainCheckbox: true
  })
}