/** Chunk was on web.js **/
/** chunk id: 923341, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  p: () => p,
  t: () => _
});
var Chunk697171 = require("./697171.js"),
  Chunk288930 = require("./288930.js"),
  Chunk568764 = require("./568764.js"),
  a = 0,
  s = function() {
    return !!a
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
        return module.schedule()
      }
    }
    return module.prototype.run = function(e) {
      var t = this;
      if (true === e && (e = l), !f) {
        f = true;
        var n = d(e);
        (0, o.p)(function() {
          var i = false;
          try {
            i = (0, r.N)()
          } finally {
            if (f = false, e = n - d(), !s()) return;
            i ? t.run(1e3) : e > 0 ? t.run(e) : t.start()
          }
        })
      }
    }, module.prototype.schedule = function() {
      this.stop(), this.run()
    }, module.prototype.observe = function() {
      var e = this,
        t = function() {
          return module.observer && module.observer.observe(document.body, c)
        };
      document.body ? exports() : Chunk288930.C.addEventListener("DOMContentLoaded", exports)
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
  _ = function(e) {
    !a && e > 0 && p.start(), (a += e) || p.stop()
  }