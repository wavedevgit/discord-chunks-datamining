/** Chunk was on web (https://canary.discord.comweb.6d4953f88f353958.js.js) **/
"use strict";
var t = {
  current: function(e, t) {
    if (!e.setNativeProps) return !1;
    e.setNativeProps(t)
  },
  transformStyles: function(e) {
    return e
  },
  inject: function(e, n) {
    t.current = e, t.transformStyles = n
  }
};
e.exports = t