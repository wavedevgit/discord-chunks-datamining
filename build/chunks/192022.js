/** Chunk was on 3115 **/
/** chunk id: 192022, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => a
});
var Chunk647438 = require("./647438.js"),
  Chunk782497 = require("./782497.js");
let a = function() {
  var e = (0, Chunk782497.default)({
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
  return Chunk647438.createElement("div", {
    style: module.pointer
  }, Chunk647438.createElement("div", {
    style: module.left
  }, Chunk647438.createElement("div", {
    style: module.leftInside
  })), Chunk647438.createElement("div", {
    style: module.right
  }, Chunk647438.createElement("div", {
    style: module.rightInside
  })))
}