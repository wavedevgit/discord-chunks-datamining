/** Chunk was on 36415 **/
/** chunk id: 36361, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./415506.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk28682 = require("./28682.js"),
  Chunk30434 = require("./30434.jsx"),
  Chunk550964 = require("./550964.jsx"),
  Chunk558731 = require("./558731.jsx"),
  Chunk401250 = require("./401250.jsx"),
  Chunk976713 = require("./976713.jsx"),
  Chunk72704 = require("./72704.jsx"),
  Chunk555361 = require("./555361.jsx"),
  Chunk867694 = require("./867694.jsx"),
  Chunk4794 = require("./4794.jsx"),
  Chunk142118 = require("./142118.jsx"),
  Chunk149865 = require("./149865.jsx"),
  Chunk409322 = require("./409322.jsx"),
  Chunk670304 = require("./670304.jsx"),
  Chunk357660 = require("./357660.jsx"),
  Chunk166292 = require("./166292.jsx");

function x(e) {
  let {
    node: t
  } = e;
  switch (t.type) {
    case l.Jq.ROOT:
    case l.Jq.SECTION:
    case l.Jq.SIDEBAR_ITEM:
      throw Error("".concat(t.type, " nodes should never be rendered directly"));
    case l.Jq.PANEL:
      return (0, r.jsx)(v.T, {
        node: t
      });
    case l.Jq.PANE:
      return (0, r.jsx)(m.Z, {
        node: t
      });
    case l.Jq.LIST:
      return (0, r.jsx)(j.Z, {
        node: t
      });
    case l.Jq.FIELD_SET:
      return (0, r.jsx)(y.Z, {
        node: t
      });
    case l.Jq.CATEGORY:
      return (0, r.jsx)(p.Z, {
        node: t
      });
    case l.Jq.ACCORDION:
      return (0, r.jsx)(b.Z, {
        node: t
      });
    case l.Jq.SPLIT:
      return (0, r.jsx)(g.Z, {
        node: t
      });
    case l.Jq.TOGGLE:
      return (0, r.jsx)(f.I, {
        node: t
      });
    case l.Jq.BUTTON:
      return (0, r.jsx)(a.I, {
        node: t
      });
    case l.Jq.SELECT:
      return (0, r.jsx)(u.Z, {
        node: t
      });
    case l.Jq.RADIO:
      return (0, r.jsx)(s.Z, {
        node: t
      });
    case l.Jq.SLIDER:
      return (0, r.jsx)(d.Z, {
        node: t
      });
    case l.Jq.CUSTOM:
      return (0, r.jsx)(i.X, {
        children: (0, r.jsx)(t.render, {})
      });
    default:
      return (0, r.jsx)(c.W, {
        node: t
      })
  }
}

function h(e) {
  let {
    node: t
  } = e;
  return t.type === l.Jq.PANEL || t.type === l.Jq.PANE ? (0, r.jsx)(x, {
    node: t
  }) : (0, r.jsx)(o.Z, {
    node: t,
    children: (0, r.jsx)(x, {
      node: t
    })
  })
}