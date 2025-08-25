/** Chunk was on 36878 **/
/** chunk id: 36361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28682 = require("./28682.js"),
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
let b = function(e) {
  let {
    node: t
  } = e;
  switch (t.type) {
    case l.J.ROOT:
    case l.J.SECTION:
      throw Error("".concat(t.type, " nodes should never be rendered directly"));
    case l.J.PANEL:
      return (0, i.jsx)(v.T, {
        node: t
      });
    case l.J.PANE:
      return (0, i.jsx)(g.Z, {
        node: t
      });
    case l.J.LIST:
      return (0, i.jsx)(f.Z, {
        node: t
      });
    case l.J.CATEGORY:
      return (0, i.jsx)(d.Z, {
        node: t
      });
    case l.J.ACCORDION:
      return (0, i.jsx)(c.Z, {
        node: t
      });
    case l.J.TOGGLE:
      return (0, i.jsx)(u.I, {
        node: t
      });
    case l.J.BUTTON:
      return (0, i.jsx)(r.I, {
        node: t
      });
    case l.J.SELECT:
      return (0, i.jsx)(a.Z, {
        node: t
      });
    case l.J.RADIO:
      return (0, i.jsx)(s.Z, {
        node: t
      });
    case l.J.CUSTOM:
    default:
      return (0, i.jsx)(o.W, {
        node: t
      })
  }
}