/** Chunk was on 2827 **/
/** chunk id: 641324, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => x
}), require("./65821.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk963935 = require("./963935.js"),
  Chunk347606 = require("./347606.jsx"),
  Chunk244242 = require("./244242.jsx"),
  Chunk578598 = require("./578598.jsx"),
  Chunk318903 = require("./318903.jsx"),
  Chunk44909 = require("./44909.jsx"),
  Chunk98254 = require("./98254.jsx"),
  Chunk915953 = require("./915953.jsx"),
  Chunk39216 = require("./39216.jsx"),
  Chunk43146 = require("./43146.jsx"),
  Chunk112715 = require("./112715.js"),
  Chunk39043 = require("./39043.jsx"),
  Chunk743961 = require("./743961.jsx"),
  Chunk896005 = require("./896005.jsx"),
  Chunk388773 = require("./388773.jsx"),
  Chunk353667 = require("./353667.jsx"),
  Chunk182884 = require("./182884.jsx"),
  Chunk115617 = require("./115617.jsx");

function C(e) {
  let {
    node: t
  } = e;
  switch ((0, m.Z)(t.initialize), t.type) {
    case i.Z6.ROOT:
    case i.Z6.SECTION:
    case i.Z6.SIDEBAR_ITEM:
    case i.Z6.TAB_ITEM:
      throw Error("".concat(t.type, " nodes should never be rendered directly"));
    case i.Z6.PANEL:
      return (0, r.jsx)(h.j, {
        node: t
      });
    case i.Z6.LIST:
      return (0, r.jsx)(b.A, {
        node: t
      });
    case i.Z6.FIELD_SET:
      return (0, r.jsx)(f.A, {
        node: t
      });
    case i.Z6.RELATED:
      return (0, r.jsx)(E.A, {
        node: t
      });
    case i.Z6.CATEGORY:
      return (0, r.jsx)(A.A, {
        node: t
      });
    case i.Z6.ACCORDION:
      return (0, r.jsx)(g.A, {
        node: t
      });
    case i.Z6.SPLIT:
      return (0, r.jsx)(O.A, {
        node: t
      });
    case i.Z6.TOGGLE:
      return (0, r.jsx)(p.v, {
        node: t
      });
    case i.Z6.STATIC:
      return (0, r.jsx)(_.A, {
        node: t
      });
    case i.Z6.BUTTON:
      return (0, r.jsx)(a.D, {
        node: t
      });
    case i.Z6.SELECT:
      return (0, r.jsx)(d.A, {
        node: t
      });
    case i.Z6.RADIO:
      return (0, r.jsx)(c.A, {
        node: t
      });
    case i.Z6.SLIDER:
      return (0, r.jsx)(u.A, {
        node: t
      });
    case i.Z6.NAVIGATOR:
      return (0, r.jsx)(o.A, {
        node: t
      });
    case i.Z6.CUSTOM:
      return (0, r.jsx)(s.L, {
        children: (0, r.jsx)(t.Component, {})
      })
  }
}

function x(e) {
  let {
    node: t
  } = e;
  return t.type === i.Z6.PANEL ? (0, r.jsx)(C, {
    node: t
  }) : (0, r.jsx)(l.A, {
    node: t,
    children: (0, r.jsx)(C, {
      node: t
    })
  })
}