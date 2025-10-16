/** Chunk was on 75685 **/
/** chunk id: 36361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
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

function j(e) {
  let {
    node: t
  } = e;
  switch (t.type) {
    case o.Jq.ROOT:
    case o.Jq.SECTION:
    case o.Jq.SIDEBAR_ITEM:
      throw Error("".concat(t.type, " nodes should never be rendered directly"));
    case o.Jq.PANEL:
      return (0, r.jsx)(y.T, {
        node: t
      });
    case o.Jq.PANE:
      return (0, r.jsx)(p.Z, {
        node: t
      });
    case o.Jq.LIST:
      return (0, r.jsx)(b.Z, {
        node: t
      });
    case o.Jq.CATEGORY:
      return (0, r.jsx)(f.Z, {
        node: t
      });
    case o.Jq.ACCORDION:
      return (0, r.jsx)(d.Z, {
        node: t
      });
    case o.Jq.TOGGLE:
      return (0, r.jsx)(u.I, {
        node: t
      });
    case o.Jq.BUTTON:
      return (0, r.jsx)(i.I, {
        node: t
      });
    case o.Jq.SELECT:
      return (0, r.jsx)(s.Z, {
        node: t
      });
    case o.Jq.RADIO:
      return (0, r.jsx)(c.Z, {
        node: t
      });
    case o.Jq.CUSTOM:
    default:
      return (0, r.jsx)(a.W, {
        node: t
      })
  }
}

function m(e) {
  let {
    node: t
  } = e;
  return t.type === o.Jq.PANEL || t.type === o.Jq.PANE ? (0, r.jsx)(j, {
    node: t
  }) : (0, r.jsx)(l.Z, {
    node: t,
    children: (0, r.jsx)(j, {
      node: t
    })
  })
}