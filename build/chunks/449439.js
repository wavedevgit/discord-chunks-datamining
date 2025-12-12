/** Chunk was on web.js **/
/** chunk id: 449439, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk169774 = require("./169774.js"),
  Chunk816731 = require("./816731.js"),
  a = Chunk169774.isPlatform("Mac OS X"),
  o = {
    isCtrlKeyCommand: function(e) {
      return !!e.ctrlKey && !e.altKey
    },
    isOptionKeyCommand: function(e) {
      return a && e.altKey
    },
    usesMacOSHeuristics: function() {
      return a
    },
    hasCommandModifier: function(e) {
      return a ? !!e.metaKey && !e.altKey : o.isCtrlKeyCommand(e)
    },
    isSoftNewlineEvent: Chunk816731
  };
module.exports = o