/** Chunk was on 3489 **/
/** chunk id: 225315, original params: e,t,_ (module,exports,require) **/
require.d(exports, {
  default: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk612479 = require("./612479.jsx"),
  Chunk521732 = require("./521732.js"),
  Chunk670455 = require("./670455.js"),
  Chunk985018 = require("./985018.jsx");
let n = [Chunk521732.tk.OTHER];

function b(e) {
  let {
    transitionState: t,
    startRating: _,
    onClose: b,
    onSubmit: s
  } = e;
  return (0, o.jsx)(c.A, {
    modalType: "summary",
    header: a.intl.string(a.t.hghcMh),
    body: a.intl.string(a.t.QFU785),
    problemTitle: a.intl.string(a.t.CtiHPm),
    onSubmit: s,
    onClose: b,
    ratingOptions: [r.P0.GOOD, r.P0.BAD],
    ratingEmojiKind: "thumb",
    transitionState: t,
    problems: (0, i.j0)(),
    freeformNeededProblems: n,
    otherKey: i.tk.OTHER,
    startRating: _,
    hideDontShowAgainCheckbox: true
  })
}