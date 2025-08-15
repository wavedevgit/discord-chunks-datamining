/** Chunk was on 91584 **/
/** chunk id: 366885, original params: t,e,r (module,exports,require) **/
"use strict";
var Chunk169774 = require("./169774.js"),
  Chunk88408 = require("./88408.js"),
  o = Chunk169774.isPlatform("Mac OS X"),
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
    isSoftNewlineEvent: Chunk88408
  };
module.exports = a