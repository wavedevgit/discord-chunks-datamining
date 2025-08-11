/** Chunk was on 21153 **/
/** chunk id: 59788, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk73800 = require("./73800.js"),
  Chunk9196 = require("./9196.js");
let a = function() {
  var e = (0, Chunk9196.default)({
    default: {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "4px 0 4px 6px",
        borderColor: "transparent transparent transparent #fff",
        position: "absolute",
        top: "1px",
        left: "1px"
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: "solid",
        borderWidth: "5px 0 5px 8px",
        borderColor: "transparent transparent transparent #555"
      },
      left: {
        Extend: "triangleBorder",
        transform: "translate(-13px, -4px)"
      },
      leftInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      },
      right: {
        Extend: "triangleBorder",
        transform: "translate(20px, -14px) rotate(180deg)"
      },
      rightInside: {
        Extend: "triangle",
        transform: "translate(-8px, -5px)"
      }
    }
  });
  return Chunk73800.createElement("div", {
    style: module.pointer
  }, Chunk73800.createElement("div", {
    style: module.left
  }, Chunk73800.createElement("div", {
    style: module.leftInside
  })), Chunk73800.createElement("div", {
    style: module.right
  }, Chunk73800.createElement("div", {
    style: module.rightInside
  })))
}