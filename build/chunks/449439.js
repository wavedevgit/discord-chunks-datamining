/** Chunk was on web.js **/
/** chunk id: 449439, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk169774 = require("./169774.js"),
  Chunk816731 = require("./816731.js"),
  o = Chunk169774.isPlatform("Mac OS X"),
  a = {
    isCtrlKeyCommand: function(e) {
      return !!e.ctrlKey && !e.altKey
    },
    isOptionKeyCommand: function(e) {
      return o && e.altKey
    },
    usesMacOSHeuristics: function() {
      return o
    },
    hasCommandModifier: function(e) {
      return o ? !!e.metaKey && !e.altKey : a.isCtrlKeyCommand(e)
    },
    isSoftNewlineEvent: Chunk816731
  };
module.exports = a