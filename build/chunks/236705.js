/** Chunk was on web.js **/
/** chunk id: 236705, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => u
});
var Chunk143236 = require("./143236.js");
let i = 160,
  a = 500;
var s = function(e) {
  return e.VERTICAL = "vertical", e.HORIZONTAL = "horizontal", e
}(s || {});
let o = {
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
class u extends Chunk143236.EventEmitter {
  get orientations() {
    return Object.values(s)
  }
  get state() {
    return o
  }
  check() {
    let e = l() > i,
      t = c() > i,
      n = e ? "vertical" : "horizontal";
    if (!(t && e) && (e || t)) {
      let e = o.open;
      o = {
        open: true,
        orientation: n
      }, e && o.orientation === n || this.emit("changed", o)
    } else o.open && (o.open = false, this.emit("changed", o))
  }
  constructor() {
    super(), setInterval(() => this.check(), a)
  }
}