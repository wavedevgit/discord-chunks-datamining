/** Chunk was on web.js **/
/** chunk id: 684342, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => f,
  t: () => p
});
var Chunk468343 = require("./468343.js"),
  Chunk559972 = require("./559972.js"),
  Chunk789741 = require("./789741.js"),
  a = 0,
  s = function() {
    return !!a
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
        return module.schedule()
      }
    }
    return module.prototype.run = function(e) {
      var t = this;
      d || (d = true, (0, o.p)(function() {
        var n = false;
        try {
          n = (0, r.N)()
        } finally {
          if (d = false, !s()) return;
          n ? t.run(60) : e ? t.run(e - 1) : t.start()
        }
      }))
    }, module.prototype.schedule = function() {
      this.stop(), this.run(l)
    }, module.prototype.observe = function() {
      var e = this,
        t = function() {
          return module.observer && module.observer.observe(document.body, c)
        };
      document.body ? exports() : Chunk559972.C.addEventListener("DOMContentLoaded", exports)
    }, module.prototype.start = function() {
      var e = this;
      this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), u.forEach(function(t) {
        return i.C.addEventListener(t, e.listener, true)
      }))
    }, module.prototype.stop = function() {
      var e = this;
      this.stopped || (this.observer && this.observer.disconnect(), u.forEach(function(t) {
        return i.C.removeEventListener(t, e.listener, true)
      }), this.stopped = true)
    }, module
  }()),
  p = function(e) {
    !a && e > 0 && f.start(), (a += e) || f.stop()
  }