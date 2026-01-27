/** Chunk was on 9407 **/
/** chunk id: 956450, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => p
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
let p = e => {
  let {
    transitionState: t,
    onClose: n,
    classificationId: p,
    source: m
  } = e, h = (0, o.A)(), f = () => {
    n(), (0, r.openUserSettings)(a.X.ACCOUNT_PANEL, {
      section: c.nc_.ACCOUNT,
      subsection: d.H.PRIVACY_AND_SAFETY_STANDING
    })
  };
  return (0, i.jsxs)(l.EOs, {
    className: u.CR,
    transitionState: t,
    parentComponent: "ClassificationDetailModal",
    "data-migration-pending": true,
    children: [(0, i.jsx)("div", {
      className: u.Hc,
      children: (0, i.jsx)(l.s_y, {
        "data-migration-pending": true,
        className: u.g8,
        onClick: n
      })
    }), (0, i.jsx)(l.$mQ, {
      "data-migration-pending": true,
      className: u.jE,
      children: h ? (0, i.jsx)(l.y$y, {}) : (0, i.jsx)(s.A, {
        classificationId: p,
        source: m,
        onError: f,
        onClose: f
      })
    })]
  })
}