/** Chunk was on web.js **/
/** chunk id: 391997, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => p,
  t: () => _
});
var Chunk608748 = require("./608748.js"),
  Chunk388388 = require("./388388.js"),
  Chunk203731 = require("./203731.js"),
  o = 0,
  s = function() {
    return !!o
  },
  l = 250,
  c = {
    attributes: true,
    characterData: true,
    childList: true,
    subtree: true
  },
  u = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"],
  d = function(e) {
    return true === e && (e = 0), Date.now() + e
  },
  f = false,
  p = new(function() {
    function e() {
      var e = this;
      this.stopped = true, this.listener = function() {
        return e.schedule()
      }
    }
    return e.prototype.run = function(e) {
      var t = this;
      if (true === e && (e = l), !f) {
        f = true;
        var n = d(e);
        (0, a.p)(function() {
          var i = false;
          try {
            i = (0, r.N)()
          } finally {
            if (f = false, e = n - d(), !s()) return;
            i ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
          }
        })
      }
    }, e.prototype.schedule = function() {
      this.stop(), this.run()
    }, e.prototype.observe = function() {
      var e = this,
        t = function() {
          return e.observer && e.observer.observe(document.body, c)
        };
      document.body ? t() : i.C.addEventListener("DOMContentLoaded", t)
    }, e.prototype.start = function() {
      var e = this;
      this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), u.forEach(function(t) {
        return i.C.addEventListener(t, e.listener, true)
      }))
    }, e.prototype.stop = function() {
      var e = this;
      this.stopped || (this.observer && this.observer.disconnect(), u.forEach(function(t) {
        return i.C.removeEventListener(t, e.listener, true)
      }), this.stopped = true)
    }, e
  }()),
  _ = function(e) {
    !o && e > 0 && p.start(), (o += e) || p.stop()
  }