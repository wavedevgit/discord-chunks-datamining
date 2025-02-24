/** Chunk was on web (https://canary.discord.comweb.767fb3b3f685bfe8.js.js) **/
"use strict";
e.exports = function(e) {
  var t = e.stateHandler.getState;
  return {
    isDetectable: function(e) {
      var n = t(e);
      return n && !!n.isDetectable
    },
    markAsDetectable: function(e) {
      t(e).isDetectable = !0
    },
    isBusy: function(e) {
      return !!t(e).busy
    },
    markBusy: function(e, n) {
      t(e).busy = !!n
    }
  }
}