/** Chunk was on web (https://canary.discord.comweb.a4687b32e07d48ae.js.js) **/
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