/** Chunk was on web.js **/
/** chunk id: 336527, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  L: () => p,
  c: () => f
});
var Chunk947399 = require("./947399.js"),
  Chunk687567 = require("./687567.js"),
  Chunk756055 = require("./756055.js"),
  s = 0,
  o = function() {
    return !!s
  },
  l = 12,
  c = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  },
  u = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
  d = false,
  f = new(function() {
    function e() {
      var e = this;
      this.stopped = true, this.listener = function() {
        return e.schedule()
      }
    }
    return e.prototype.run = function(e) {
      var t = this;
      d || (d = true, (0, a.Y)(function() {
        var n = false;
        try {
          n = (0, r.e)()
        } finally {
          if (d = false, !o()) return;
          n ? t.run(60) : e ? t.run(e - 1) : t.start()
        }
      }))
    }, e.prototype.schedule = function() {
      this.stop(), this.run(l)
    }, e.prototype.observe = function() {
      var e = this,
        t = function() {
          return e.observer && e.observer.observe(document.body, c)
        };
      document.body ? t() : i.S.addEventListener("DOMContentLoaded", t)
    }, e.prototype.start = function() {
      var e = this;
      this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), u.forEach(function(t) {
        return i.S.addEventListener(t, e.listener, true)
      }))
    }, e.prototype.stop = function() {
      var e = this;
      this.stopped || (this.observer && this.observer.disconnect(), u.forEach(function(t) {
        return i.S.removeEventListener(t, e.listener, true)
      }), this.stopped = true)
    }, e
  }()),
  p = function(e) {
    !s && e > 0 && f.start(), (s += e) || f.stop()
  }