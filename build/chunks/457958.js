/** Chunk was on web (https://canary.discord.comweb.38a06e56c3da3c7f.js.js) **/
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