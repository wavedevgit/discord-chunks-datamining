/** Chunk was on 87337 **/
/** chunk id: 343544, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk64515 = require("./64515.js");

function _(t) {
  let {
    headerText: e,
    descriptionText: n,
    infoRows: s,
    onDismissAndStay: _,
    onDismissAndLeave: d,
    leaveButtonText: A,
    stayButtonText: E,
    transitionState: I,
    impression: f
  } = t;
  return (0, i.jsx)(l.Modal, {
    transitionState: I,
    onClose: () => (_(), Promise.resolve()),
    trackingProps: {
      impression: f
    },
    title: e,
    subtitle: null != n ? n : true,
    actions: [{
      text: E,
      onClick: _,
      variant: "secondary"
    }, {
      text: A,
      onClick: d
    }],
    children: (0, i.jsx)("div", {
      className: c.infoGroup,
      children: s.map((t, e) => (0, i.jsxs)(r.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: a()(c.infoRow, t.className),
          children: [t.icon, (0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            children: t.text
          })]
        }), e < s.length - 1 && (0, i.jsx)(u.Z, {})]
      }, e))
    })
  })
}