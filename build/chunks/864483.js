/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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