/** Chunk was on 21153 **/
/** chunk id: 29067, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => l
});
var Chunk73800 = require("./73800.js"),
  Chunk9196 = require("./9196.js"),
  Chunk442626 = require("./442626.js"),
  Chunk116850 = require("./116850.js");
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