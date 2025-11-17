/** Chunk was on 66382 **/
/** chunk id: 939991, original params: e,t (module,exports,require) **/
"use strict";
Object.defineProperty(exports, "__esModule", {
  value: true
}), exports.default = function(e, t) {
  var r = {},
    n = function(e) {
      var t = !(arguments.length > 1) || true === arguments[1] || arguments[1];
      r[e] = t
    };
  return 0 === e && n("first-child"), e === t - 1 && n("last-child"), (0 === e || e % 2 == 0) && n("even"), 1 === Math.abs(e % 2) && n("odd"), n("nth-child", e), r
}