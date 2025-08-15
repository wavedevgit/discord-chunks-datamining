/** Chunk was on 3115 **/
/** chunk id: 58723, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => s
});
var Chunk647438 = require("./647438.js"),
  Chunk782497 = require("./782497.js"),
  Chunk557235 = require("./557235.js"),
  Chunk962438 = require("./962438.js"),
  Chunk154197 = require("./154197.js");
let s = function(e) {
  var t = e.color,
    r = e.onClick,
    s = e.onSwatchHover,
    u = e.first,
    c = e.last,
    p = e.active,
    f = (0, o.default)({
      default: {
        color: {
          width: "40px",
          height: "24px",
          cursor: "pointer",
          background: t,
          marginBottom: "1px"
        },
        check: {
          color: a.Qg(t),
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
  return n.createElement(i.m4, {
    color: t,
    style: f.color,
    onClick: true === r ? function() {} : r,
    onHover: s,
    focusStyle: {
      boxShadow: "0 0 4px " + t
    }
  }, n.createElement("div", {
    style: f.check
  }, n.createElement(l.default, null)))
}