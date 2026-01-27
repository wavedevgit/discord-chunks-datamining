/** Chunk was on 38939 **/
/** chunk id: 868361, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk573750 = require("./573750.js"),
  Chunk696009 = require("./696009.js"),
  o = Chunk573750.isPlatform("Mac OS X"),
  a = {
    isCtrlKeyCommand: function(t) {
      return !!t.ctrlKey && !t.altKey
    },
    isOptionKeyCommand: function(t) {
      return o && t.altKey
    },
    usesMacOSHeuristics: function() {
      return o
    },
    hasCommandModifier: function(t) {
      return o ? !!t.metaKey && !t.altKey : a.isCtrlKeyCommand(t)
    },
    isSoftNewlineEvent: Chunk696009
  };
module.exports = a