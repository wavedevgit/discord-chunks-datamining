/** Chunk was on web.js **/
/** chunk id: 36361, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => v
}), require("./415506.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk28682 = require("./28682.js"),
  Chunk30434 = require("./30434.jsx"),
  Chunk550964 = require("./550964.jsx"),
  Chunk558731 = require("./558731.jsx"),
  Chunk465315 = require("./465315.jsx"),
  Chunk976713 = require("./976713.jsx"),
  Chunk72704 = require("./72704.jsx"),
  Chunk555361 = require("./555361.jsx"),
  Chunk370100 = require("./370100.jsx"),
  Chunk867694 = require("./867694.jsx"),
  Chunk4794 = require("./4794.jsx"),
  Chunk142118 = require("./142118.jsx"),
  Chunk149865 = require("./149865.jsx"),
  Chunk409322 = require("./409322.jsx"),
  Chunk357660 = require("./357660.jsx"),
  Chunk706873 = require("./706873.jsx"),
  Chunk166292 = require("./166292.jsx");

function O(e) {
  let {
    node: t
  } = e;
  switch (t.type) {
    case i.Jq.ROOT:
    case i.Jq.SECTION:
    case i.Jq.SIDEBAR_ITEM:
    case i.Jq.TAB_ITEM:
      throw Error("".concat(t.type, " nodes should never be rendered directly"));
    case i.Jq.PANEL:
      return (0, r.jsx)(E.T, {
        node: t
      });
    case i.Jq.LIST:
      return (0, r.jsx)(g.Z, {
        node: t
      });
    case i.Jq.FIELD_SET:
      return (0, r.jsx)(h.Z, {
        node: t
      });
    case i.Jq.RELATED:
      return (0, r.jsx)(b.Z, {
        node: t
      });
    case i.Jq.CATEGORY:
      return (0, r.jsx)(m.Z, {
        node: t
      });
    case i.Jq.ACCORDION:
      return (0, r.jsx)(_.Z, {
        node: t
      });
    case i.Jq.SPLIT:
      return (0, r.jsx)(y.Z, {
        node: t
      });
    case i.Jq.TOGGLE:
      return (0, r.jsx)(p.I, {
        node: t
      });
    case i.Jq.STATIC:
      return (0, r.jsx)(f.Z, {
        node: t
      });
    case i.Jq.BUTTON:
      return (0, r.jsx)(s.I, {
        node: t
      });
    case i.Jq.SELECT:
      return (0, r.jsx)(u.Z, {
        node: t
      });
    case i.Jq.RADIO:
      return (0, r.jsx)(c.Z, {
        node: t
      });
    case i.Jq.SLIDER:
      return (0, r.jsx)(d.Z, {
        node: t
      });
    case i.Jq.NAVIGATOR:
      return (0, r.jsx)(l.Z, {
        node: t
      });
    case i.Jq.CUSTOM:
      return (0, r.jsx)(o.X, {
        children: (0, r.jsx)(t.Component, {})
      })
  }
}

function v(e) {
  let {
    node: t
  } = e;
  return t.type === i.Jq.PANEL ? (0, r.jsx)(O, {
    node: t
  }) : (0, r.jsx)(a.Z, {
    node: t,
    children: (0, r.jsx)(O, {
      node: t
    })
  })
}