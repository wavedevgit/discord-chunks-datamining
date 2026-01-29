/** Chunk was on 9407 **/
/** chunk id: 956450, original params: E,_,I (module,exports,require) **/
require.d(exports, {
  default: () => n
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk780964 = require("./780964.js"),
  Chunk840065 = require("./840065.jsx"),
  Chunk257110 = require("./257110.js"),
  Chunk706069 = require("./706069.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk531525 = require("./531525.js"),
  Chunk524988 = require("./524988.js");
let n = E => {
  let {
    transitionState: _,
    onClose: I,
    classificationId: n,
    source: P
  } = E, i = (0, C.A)(), L = () => {
    I(), (0, O.openUserSettings)(T.X.ACCOUNT_PANEL, {
      section: t.nc_.ACCOUNT,
      subsection: N.H.PRIVACY_AND_SAFETY_STANDING
    })
  };
  return (0, A.jsxs)(S.EOs, {
    className: R.CR,
    transitionState: _,
    parentComponent: "ClassificationDetailModal",
    "data-migration-pending": true,
    children: [(0, A.jsx)("div", {
      className: R.Hc,
      children: (0, A.jsx)(S.s_y, {
        "data-migration-pending": true,
        className: R.g8,
        onClick: I
      })
    }), (0, A.jsx)(S.$mQ, {
      "data-migration-pending": true,
      className: R.jE,
      children: i ? (0, A.jsx)(S.y$y, {}) : (0, A.jsx)(e.A, {
        classificationId: n,
        source: P,
        onError: L,
        onClose: L
      })
    })]
  })
}