/** Chunk was on 39679 **/
/** chunk id: 212758, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => _
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk922529 = require("./922529.jsx"),
  Chunk89300 = require("./89300.js"),
  Chunk117816 = require("./117816.js");

function _(e) {
  let {
    headerText: t,
    descriptionText: n,
    infoRows: r,
    onDismissAndStay: _,
    onDismissAndLeave: m,
    leaveButtonText: f,
    stayButtonText: g,
    transitionState: x,
    impression: N
  } = e;
  return (0, s.jsx)(l.ExpressiveModal, {
    transitionState: x,
    onClose: () => (_(), Promise.resolve()),
    trackingProps: {
      impression: N
    },
    graphic: {
      type: "image",
      src: u.A
    },
    title: t,
    subtitle: null != n ? n : true,
    actions: [{
      text: g,
      onClick: _,
      variant: "secondary"
    }, {
      text: f,
      onClick: m
    }],
    children: (0, s.jsx)("div", {
      className: c.Cu,
      children: r.map((e, t) => (0, s.jsxs)(i.Fragment, {
        children: [(0, s.jsxs)("div", {
          className: a()(c.lj, e.className),
          children: [e.icon, (0, s.jsx)(o.Text, {
            variant: "text-md/medium",
            children: e.text
          })]
        }), t < r.length - 1 && (0, s.jsx)(d.A, {})]
      }, t))
    })
  })
}