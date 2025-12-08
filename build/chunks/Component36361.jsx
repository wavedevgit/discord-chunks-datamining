/** Chunk was on web.js **/
/** chunk id: 36361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => S
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28682 = require("./28682.js"),
  Chunk30434 = require("./30434.jsx"),
  Chunk550964 = require("./550964.jsx"),
  Chunk558731 = require("./558731.jsx"),
  Chunk465315 = require("./465315.jsx"),
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
  Chunk706873 = require("./706873.jsx"),
  Chunk166292 = require("./166292.jsx");

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
      return (0, r.jsx)(b.T, {
        node: t
      });
    case i.J.PANE:
      return (0, r.jsx)(E.Z, {
        node: t
      });
    case i.J.LIST:
      return (0, r.jsx)(g.Z, {
        node: t
      });
    case i.J.FIELD_SET:
      return (0, r.jsx)(h.Z, {
        node: t
      });
    case i.J.RELATED:
      return (0, r.jsx)(y.Z, {
        node: t
      });
    case i.J.CATEGORY:
      return (0, r.jsx)(m.Z, {
        node: t
      });
    case i.J.ACCORDION:
      return (0, r.jsx)(_.Z, {
        node: t
      });
    case i.J.SPLIT:
      return (0, r.jsx)(O.Z, {
        node: t
      });
    case i.J.TOGGLE:
      return (0, r.jsx)(p.I, {
        node: t
      });
    case i.J.BUTTON:
      return (0, r.jsx)(s.I, {
        node: t
      });
    case i.J.SELECT:
      return (0, r.jsx)(d.Z, {
        node: t
      });
    case i.J.RADIO:
      return (0, r.jsx)(u.Z, {
        node: t
      });
    case i.J.SLIDER:
      return (0, r.jsx)(f.Z, {
        node: t
      });
    case i.J.NAVIGATOR:
      return (0, r.jsx)(l.Z, {
        node: t
      });
    case i.J.CUSTOM:
      return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(t.render, {})
      });
    default:
      return (0, r.jsx)(c.W, {
        node: t
      })
  }
}

function S(e) {
  let {
    node: t
  } = e;
  return t.type === i.J.PANEL || t.type === i.J.PANE ? (0, r.jsx)(v, {
    node: t
  }) : (0, r.jsx)(a.Z, {
    node: t,
    children: (0, r.jsx)(v, {
      node: t
    })
  })
}