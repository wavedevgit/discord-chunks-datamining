/** Chunk was on 83792 **/
/** chunk id: 212758, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk922529 = require("./922529.jsx"),
  Chunk89300 = require("./89300.js"),
  Chunk117816 = require("./117816.js");

function _(e) {
  let {
    headerText: t,
    descriptionText: r,
    infoRows: s,
    onDismissAndStay: _,
    onDismissAndLeave: I,
    leaveButtonText: f,
    stayButtonText: E,
    transitionState: p,
    impression: h
  } = e;
  return (0, n.jsx)(i.ExpressiveModal, {
    transitionState: p,
    onClose: () => (_(), Promise.resolve()),
    trackingProps: {
      impression: h
    },
    graphic: {
      type: "image",
      src: u.A
    },
    title: t,
    subtitle: null != r ? r : true,
    actions: [{
      text: E,
      onClick: _,
      variant: "secondary"
    }, {
      text: f,
      onClick: I
    }],
    children: (0, n.jsx)("div", {
      className: c.Cu,
      children: s.map((e, t) => (0, n.jsxs)(a.Fragment, {
        children: [(0, n.jsxs)("div", {
          className: l()(c.lj, e.className),
          children: [e.icon, (0, n.jsx)(o.Text, {
            variant: "text-md/medium",
            children: e.text
          })]
        }), t < s.length - 1 && (0, n.jsx)(A.A, {})]
      }, t))
    })
  })
}