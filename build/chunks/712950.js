/** Chunk was on 31978 **/
/** chunk id: 712950, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  g: () => i,
  p: () => a
});
var Chunk399606 = require("./399606.js"),
  Chunk581883 = require("./581883.js"),
  Chunk592204 = require("./592204.js");
let i = () => {
    var e, t, n;
    let o = (0, Chunk399606.cj)([Chunk581883.Z], () => {
      var e, t;
      return null != (t = null == (e = Chunk581883.Z.settings.textAndImages) ? true : module.keywordFilterSettings) ? exports : {}
    });
    return {
      profanity: null == (e = Chunk592204.profanity) ? true : module.value,
      sexualContent: null == (t = Chunk592204.sexualContent) ? true : exports.value,
      slurs: null == (n = Chunk592204.slurs) ? true : require.value
    }
  },
  a = () => {
    var e;
    let {
      profanity: t,
      sexualContent: n,
      slurs: r
    } = i();
    return !!(0, Chunk592204.Xo)({
      location: "use-should-filter-keywords"
    }) && null != (e = exports || require || Chunk399606) && module
  }