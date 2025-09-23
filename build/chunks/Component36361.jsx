/** Chunk was on 47129 **/
/** chunk id: 36361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28682 = require("./28682.js"),
  Chunk30434 = require("./30434.jsx"),
  Chunk558731 = require("./558731.jsx"),
  Chunk401250 = require("./401250.jsx"),
  Chunk976713 = require("./976713.jsx"),
  Chunk72704 = require("./72704.jsx"),
  Chunk867694 = require("./867694.jsx"),
  Chunk4794 = require("./4794.jsx"),
  Chunk142118 = require("./142118.jsx"),
  Chunk409322 = require("./409322.jsx"),
  Chunk670304 = require("./670304.jsx"),
  Chunk357660 = require("./357660.jsx");

function E(e) {
  let {
    node: t
  } = e;
  switch (t.type) {
    case i.Jq.ROOT:
    case i.Jq.SECTION:
    case i.Jq.SIDEBAR_ITEM:
      throw Error("".concat(t.type, " nodes should never be rendered directly"));
    case i.Jq.PANEL:
      return (0, r.jsx)(O.T, {
        node: t
      });
    case i.Jq.PANE:
      return (0, r.jsx)(y.Z, {
        node: t
      });
    case i.Jq.LIST:
      return (0, r.jsx)(g.Z, {
        node: t
      });
    case i.Jq.CATEGORY:
      return (0, r.jsx)(f.Z, {
        node: t
      });
    case i.Jq.ACCORDION:
      return (0, r.jsx)(d.Z, {
        node: t
      });
    case i.Jq.TOGGLE:
      return (0, r.jsx)(c.I, {
        node: t
      });
    case i.Jq.BUTTON:
      return (0, r.jsx)(o.I, {
        node: t
      });
    case i.Jq.SELECT:
      return (0, r.jsx)(u.Z, {
        node: t
      });
    case i.Jq.RADIO:
      return (0, r.jsx)(a.Z, {
        node: t
      });
    case i.Jq.CUSTOM:
    default:
      return (0, r.jsx)(s.W, {
        node: t
      })
  }
}

function b(e) {
  let {
    node: t
  } = e;
  return t.type === i.Jq.PANEL || t.type === i.Jq.PANE ? (0, r.jsx)(E, {
    node: t
  }) : (0, r.jsx)(l.Z, {
    node: t,
    children: (0, r.jsx)(E, {
      node: t
    })
  })
}