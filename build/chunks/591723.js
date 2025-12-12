/** Chunk was on web.js **/
/** chunk id: 591723, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => O
});
var Chunk573654 = require("./573654.js"),
  Chunk40284 = require("./40284.js"),
  Chunk481732 = require("./481732.js"),
  Chunk478413 = require("./478413.js"),
  Chunk919513 = require("./919513.js"),
  Chunk158851 = require("./158851.js");

function c(e, t) {
  if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
}

function u(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || false, r.configurable = true, "value" in r && (r.writable = true), Object.defineProperty(e, r.key, r)
  }
}

function d(e, t, n) {
  return t && u(e.prototype, t), n && u(e, n), e
}

function f(e, t) {
  return g(e) || h(e, t) || _(e, t) || p()
}

function p() {
  throw TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
}

function _(e, t) {
  if (e) {
    if ("string" == typeof e) return m(e, t);
    var n = Object.prototype.toString.call(e).slice(8, false);
    if ("Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n) return Array.from(e);
    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return m(e, t)
  }
}

function m(e, t) {
  (null == t || t > e.length) && (t = e.length);
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n];
  return r
}

function h(e, t) {
  if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
    var n = [],
      r = true,
      i = false,
      o = true;
    try {
      for (var a, s = e[Symbol.iterator](); !(r = (a = s.next()).done) && (n.push(a.value), !t || n.length !== t); r = true);
    } catch (e) {
      i = true, o = e
    } finally {
      try {
        r || null == s.return || s.return()
      } finally {
        if (i) throw o
      }
    }
    return n
  }
}

function g(e) {
  if (Array.isArray(e)) return e
}

function E(e) {
  var t = (0, o.p)().toString();
  switch (e) {
    case a.t.SOURCE:
      return "S".concat(t);
    case a.t.TARGET:
      return "T".concat(t);
    default:
      throw Error("Unknown Handler Role: ".concat(e))
  }
}

function b(e) {
  switch (e[0]) {
    case "S":
      return a.t.SOURCE;
    case "T":
      return a.t.TARGET;
    default:
      (0, r.k)(false, "Cannot parse handler ID: ".concat(e))
  }
}

function y(e, t) {
  var n = e.entries(),
    r = false;
  do {
    var i = n.next(),
      o = i.done;
    if (f(i.value, 2)[1] === t) returntrue;
    r = !!o
  } while (!r);
  returnfalse
}
var O = function() {
  function e(t) {
    c(this, e), this.types = new Map, this.dragSources = new Map, this.dropTargets = new Map, this.pinnedSourceId = null, this.pinnedSource = null, this.store = t
  }
  return d(module, [{
    key: "addSource",
    value: function(e, t) {
      (0, s.sM)(e), (0, s.up)(t);
      var n = this.addHandler(a.t.SOURCE, e, t);
      return this.store.dispatch((0, i.j1)(n)), n
    }
  }, {
    key: "addTarget",
    value: function(e, t) {
      (0, s.sM)(e, true), (0, s.JP)(t);
      var n = this.addHandler(a.t.TARGET, e, t);
      return this.store.dispatch((0, i.jn)(n)), n
    }
  }, {
    key: "containsHandler",
    value: function(e) {
      return y(this.dragSources, e) || y(this.dropTargets, e)
    }
  }, {
    key: "getSource",
    value: function(e) {
      var t = arguments.length > 1 && true !== arguments[1] && arguments[1];
      return (0, r.k)(this.isSourceId(e), "Expected a valid source ID."), t && e === this.pinnedSourceId ? this.pinnedSource : this.dragSources.get(e)
    }
  }, {
    key: "getTarget",
    value: function(e) {
      return (0, r.k)(this.isTargetId(e), "Expected a valid target ID."), this.dropTargets.get(e)
    }
  }, {
    key: "getSourceType",
    value: function(e) {
      return (0, r.k)(this.isSourceId(e), "Expected a valid source ID."), this.types.get(e)
    }
  }, {
    key: "getTargetType",
    value: function(e) {
      return (0, r.k)(this.isTargetId(e), "Expected a valid target ID."), this.types.get(e)
    }
  }, {
    key: "isSourceId",
    value: function(e) {
      return b(e) === a.t.SOURCE
    }
  }, {
    key: "isTargetId",
    value: function(e) {
      return b(e) === a.t.TARGET
    }
  }, {
    key: "removeSource",
    value: function(e) {
      var t = this;
      (0, r.k)(this.getSource(e), "Expected an existing source."), this.store.dispatch((0, i.wZ)(e)), (0, l.eM)(function() {
        t.dragSources.delete(e), t.types.delete(e)
      })
    }
  }, {
    key: "removeTarget",
    value: function(e) {
      (0, r.k)(this.getTarget(e), "Expected an existing target."), this.store.dispatch((0, i.BT)(e)), this.dropTargets.delete(e), this.types.delete(e)
    }
  }, {
    key: "pinSource",
    value: function(e) {
      var t = this.getSource(e);
      (0, r.k)(t, "Expected an existing source."), this.pinnedSourceId = e, this.pinnedSource = t
    }
  }, {
    key: "unpinSource",
    value: function() {
      (0, Chunk573654.k)(this.pinnedSource, "No source is pinned at the time."), this.pinnedSourceId = null, this.pinnedSource = null
    }
  }, {
    key: "addHandler",
    value: function(e, t, n) {
      var r = E(e);
      return this.types.set(r, t), e === a.t.SOURCE ? this.dragSources.set(r, n) : e === a.t.TARGET && this.dropTargets.set(r, n), r
    }
  }]), module
}()