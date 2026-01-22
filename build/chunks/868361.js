/** Chunk was on web.js **/
/** chunk id: 868361, original params: e,t,n (module,exports,re quire) **/
"use strict";
var Chunk573750 = require("./573750.js"),
  Chunk696009 = require("./696009.js"),
  a = Chunk573750.isPlatform("Mac OS X"),
  s = {
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
      return a ? !!e.metaKey && !e.altKey : s.isCtrlKeyCommand(e)
    },
    isSoftNewlineEvent: Chunk696009
  };
module.exports = s