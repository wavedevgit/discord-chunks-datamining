/** Chunk was on web.js **/
/** chunk id: 712950, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => o,
  p: () => s
});
var Chunk399606 = require("./399606.js"),
  Chunk581883 = require("./581883.js"),
  Chunk592204 = require("./592204.js");
let o = () => {
    var e, t, n;
    let a = (0, Chunk399606.cj)([Chunk581883.Z], () => {
      var e, t;
      return null != (t = null == (e = Chunk581883.Z.settings.textAndImages) ? true : module.keywordFilterSettings) ? exports : {}
    });
    return {
      profanity: null == (e = Chunk592204.profanity) ? true : module.value,
      sexualContent: null == (t = Chunk592204.sexualContent) ? true : exports.value,
      slurs: null == (n = Chunk592204.slurs) ? true : require.value
    }
  },
  s = () => {
    var e;
    let {
      profanity: t,
      sexualContent: n,
      slurs: r
    } = o();
    return !!(0, Chunk592204.Xo)({
      location: "use-should-filter-keywords"
    }) && null != (e = exports || require || Chunk399606) && module
  }