/** Chunk was on 47950 **/
/** chunk id: 38579, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => s
});
var Chunk64700 = require("./64700.js"),
  Chunk205662 = require("./205662.js"),
  Chunk717519 = require("./717519.js"),
  Chunk708005 = require("./708005.js"),
  Chunk891751 = require("./891751.js");
let s = function(e) {
  var t = e.color,
    r = e.onClick,
    s = e.onSwatchHover,
    u = e.first,
    c = e.last,
    p = e.active,
    d = (0, o.default)({
      default: {
        color: {
          width: "40px",
          height: "24px",
          cursor: "pointer",
          background: t,
          marginBottom: "1px"
        },
        check: {
          color: a.OB(t),
          marginLeft: "8px",
          display: "none"
        }
      },
      first: {
        color: {
          overflow: "hidden",
          borderRadius: "2px 2px 0 0"
        }
      },
      last: {
        color: {
          overflow: "hidden",
          borderRadius: "0 0 2px 2px"
        }
      },
      active: {
        check: {
          display: "block"
        }
      },
      "color-#FFFFFF": {
        color: {
          boxShadow: "inset 0 0 0 1px #ddd"
        },
        check: {
          color: "#333"
        }
      },
      transparent: {
        check: {
          color: "#333"
        }
      }
    }, {
      first: u,
      last: c,
      active: p,
      "color-#FFFFFF": "#FFFFFF" === t,
      transparent: "transparent" === t
    });
  return n.createElement(i.rp, {
    color: t,
    style: d.color,
    onClick: true === r ? function() {} : r,
    onHover: s,
    focusStyle: {
      boxShadow: "0 0 4px " + t
    }
  }, n.createElement("div", {
    style: d.check
  }, n.createElement(l.default, null)))
}