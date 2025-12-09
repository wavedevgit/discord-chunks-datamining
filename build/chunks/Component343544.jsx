/** Chunk was on 87337 **/
/** chunk id: 343544, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk511010 = require("./511010.jsx"),
  Chunk64515 = require("./64515.js"),
  Chunk892744 = require("./892744.js");

function _(e) {
  let {
    headerText: t,
    descriptionText: n,
    infoRows: r,
    onDismissAndStay: _,
    onDismissAndLeave: m,
    leaveButtonText: x,
    stayButtonText: f,
    transitionState: g,
    impression: h
  } = e;
  return (0, i.jsx)(l.ExpressiveModal, {
    transitionState: g,
    onClose: () => (_(), Promise.resolve()),
    trackingProps: {
      impression: h
    },
    graphic: {
      type: "image",
      src: u.Z
    },
    title: t,
    subtitle: null != n ? n : true,
    actions: [{
      text: f,
      onClick: _,
      variant: "secondary"
    }, {
      text: x,
      onClick: m
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