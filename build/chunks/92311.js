/** Chunk was on 3115 **/
/** chunk id: 92311, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk647438 = require("./647438.js"),
  Chunk782497 = require("./782497.js"),
  Chunk557235 = require("./557235.js"),
  Chunk962438 = require("./962438.js");
let l = function(e) {
  var t = e.color,
    r = e.onClick,
    l = e.onSwatchHover,
    s = e.active,
    u = (0, o.default)({
      default: {
        color: {
          background: t,
          width: "15px",
          height: "15px",
          float: "left",
          marginRight: "5px",
          marginBottom: "5px",
          position: "relative",
          cursor: "pointer"
        },
        dot: {
          absolute: "5px 5px 5px 5px",
          background: a.Qg(t),
          borderRadius: "50%",
          opacity: "0"
        }
      },
      active: {
        dot: {
          opacity: "1"
        }
      },
      "color-#FFFFFF": {
        color: {
          boxShadow: "inset 0 0 0 1px #ddd"
        },
        dot: {
          background: "#000"
        }
      },
      transparent: {
        dot: {
          background: "#000"
        }
      }
    }, {
      active: s,
      "color-#FFFFFF": "#FFFFFF" === t,
      transparent: "transparent" === t
    });
  return n.createElement(i.m4, {
    style: u.color,
    color: t,
    onClick: true === r ? function() {} : r,
    onHover: l,
    focusStyle: {
      boxShadow: "0 0 4px " + t
    }
  }, n.createElement("div", {
    style: u.dot
  }))
}