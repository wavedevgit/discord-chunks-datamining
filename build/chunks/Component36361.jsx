/** Chunk was on 47129 **/
/** chunk id: 36361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28682 = require("./28682.js"),
  Chunk30434 = require("./30434.jsx"),
  Chunk211512 = require("./211512.jsx"),
  Chunk401250 = require("./401250.jsx"),
  Chunk976713 = require("./976713.jsx"),
  Chunk72704 = require("./72704.jsx"),
  Chunk867694 = require("./867694.jsx"),
  Chunk4794 = require("./4794.jsx"),
  Chunk142118 = require("./142118.jsx"),
  Chunk409322 = require("./409322.jsx"),
  Chunk670304 = require("./670304.jsx"),
  Chunk357660 = require("./357660.jsx");

function v(e) {
  let {
    node: t
  } = e;
  switch (t.type) {
    case i.J.ROOT:
    case i.J.SECTION:
    case i.J.SIDEBAR_ITEM:
      throw Error("".concat(t.type, " nodes should never be rendered directly"));
    case i.J.PANEL:
      return (0, r.jsx)(O.T, {
        node: t
      });
    case i.J.PANE:
      return (0, r.jsx)(y.Z, {
        node: t
      });
    case i.J.LIST:
      return (0, r.jsx)(f.Z, {
        node: t
      });
    case i.J.CATEGORY:
      return (0, r.jsx)(g.Z, {
        node: t
      });
    case i.J.ACCORDION:
      return (0, r.jsx)(d.Z, {
        node: t
      });
    case i.J.TOGGLE:
      return (0, r.jsx)(c.I, {
        node: t
      });
    case i.J.BUTTON:
      return (0, r.jsx)(o.I, {
        node: t
      });
    case i.J.SELECT:
      return (0, r.jsx)(u.Z, {
        node: t
      });
    case i.J.RADIO:
      return (0, r.jsx)(a.Z, {
        node: t
      });
    case i.J.CUSTOM:
    default:
      return (0, r.jsx)(s.W, {
        node: t
      })
  }
}

function E(e) {
  let {
    node: t
  } = e;
  return t.type === i.J.PANEL || t.type === i.J.PANE ? (0, r.jsx)(v, {
    node: t
  }) : (0, r.jsx)(l.Z, {
    node: t,
    children: (0, r.jsx)(v, {
      node: t
    })
  })
}