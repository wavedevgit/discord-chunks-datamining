/** Chunk was on 87337 **/
/** chunk id: 343544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk886097 = require("./886097.js");

function u(e) {
  let {
    headerText: t,
    descriptionText: n,
    infoRows: r,
    onDismissAndStay: u,
    onDismissAndLeave: _,
    leaveButtonText: m,
    stayButtonText: x,
    transitionState: f,
    impression: h
  } = e;
  return (0, i.jsx)(l.Modal, {
    transitionState: f,
    onClose: () => (u(), Promise.resolve()),
    trackingProps: {
      impression: h
    },
    title: t,
    subtitle: null != n ? n : true,
    actions: [{
      text: x,
      onClick: u,
      variant: "secondary"
    }, {
      text: m,
      onClick: _
    }],
    children: (0, i.jsx)("div", {
      className: c.infoGroup,
      children: r.map((e, t) => (0, i.jsxs)(s.Fragment, {
        children: [(0, i.jsxs)("div", {
          className: a()(c.infoRow, e.className),
          children: [e.icon, (0, i.jsx)(o.Text, {
            variant: "text-md/medium",
            children: e.text
          })]
        }), t < r.length - 1 && (0, i.jsx)(d.Z, {})]
      }, t))
    })
  })
}