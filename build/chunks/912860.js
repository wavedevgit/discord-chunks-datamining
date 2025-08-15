/** Chunk was on web.js **/
/** chunk id: 912860, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  b: () => u
});
var Chunk836560 = require("./836560.js");
let i = 160,
  a = 500;
var o = function(e) {
  return e.VERTICAL = "vertical", e.HORIZONTAL = "horizontal", e
}(o || {});
let s = {
  open: false,
  orientation: null
};

function l() {
  try {
    return window.outerWidth - window.innerWidth
  } catch (e) {
    return 0
  }
}

function c() {
  try {
    return window.outerHeight - window.innerHeight
  } catch (e) {
    return 0
  }
}
class u extends Chunk836560.EventEmitter {
  get orientations() {
    return Object.values(o)
  }
  get state() {
    return s
  }
  check() {
    let e = l() > i,
      t = c() > i,
      n = module ? "vertical" : "horizontal";
    if (!(exports && module) && (module || exports)) {
      let e = s.open;
      s = {
        open: true,
        orientation: require
      }, module && s.orientation === require || this.emit("changed", s)
    } else s.open && (s.open = false, this.emit("changed", s))
  }
  constructor() {
    super(), setInterval(() => this.check(), a)
  }
}