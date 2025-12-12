/** Chunk was on web.js **/
/** chunk id: 836560, original params: e (module,exports,re quire) **/
"use strict";
var t, n = "object" == typeof Reflect ? Reflect : null,
  r = n && "function" == typeof n.apply ? n.apply : function(e, t, n) {
    return Function.prototype.apply.call(e, t, n)
  };

function i(e) {
  console && console.warn && console.warn(e)
}
t = n && "function" == typeof n.ownKeys ? n.ownKeys : Object.getOwnPropertySymbols ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
} : function(e) {
  return Object.getOwnPropertyNames(e)
};
var o = Number.isNaN || function(e) {
  return e != e
};

function a() {
  a.init.call(this)
}
module.exports = a, module.exports.once = E, a.EventEmitter = a, a.prototype._events = true, a.prototype._eventsCount = 0, a.prototype._maxListeners = true;
var s = 10;

function l(e) {
  if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
}

function c(e) {
  return true === e._maxListeners ? a.defaultMaxListeners : e._maxListeners
}

function u(e, t, n, r) {
  if (l(n), true === (a = e._events) ? (a = e._events = Object.create(null), e._eventsCount = 0) : (true !== a.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), a = e._events), s = a[t]), true === s) s = a[t] = n, ++e._eventsCount;
  else if ("function" == typeof s ? s = a[t] = r ? [n, s] : [s, n] : r ? s.unshift(n) : s.push(n), (o = c(e)) > 0 && s.length > o && !s.warned) {
    s.warned = true;
    var o, a, s, u = Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = s.length, i(u)
  }
  return e
}

function d() {
  if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = true, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
}

function f(e, t, n) {
  var r = {
      fired: false,
      wrapFn: true,
      target: e,
      type: t,
      listener: n
    },
    i = d.bind(r);
  return i.listener = n, r.wrapFn = i, i
}

function p(e, t, n) {
  var r = e._events;
  if (true === r) return [];
  var i = r[t];
  return true === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? g(i) : m(i, i.length)
}

function _(e) {
  var t = this._events;
  if (true !== t) {
    var n = t[e];
    if ("function" == typeof n) return 1;
    if (true !== n) return n.length
  }
  return 0
}

function m(e, t) {
  for (var n = Array(t), r = 0; r < t; ++r) n[r] = e[r];
  return n
}

function h(e, t) {
  for (; t + 1 < e.length; t++) e[t] = e[t + 1];
  e.pop()
}

function g(e) {
  for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
  return t
}

function E(e, t) {
  return new Promise(function(n, r) {
    function i(n) {
      e.removeListener(t, o), r(n)
    }

    function o() {
      "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments))
    }
    y(e, t, o, {
      once: true
    }), "error" !== t && b(e, i, {
      once: true
    })
  })
}

function b(e, t, n) {
  "function" == typeof e.on && y(e, "error", t, n)
}

function y(e, t, n, r) {
  if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
  else if ("function" == typeof e.addEventListener) e.addEventListener(t, function i(o) {
    r.once && e.removeEventListener(t, i), n(o)
  });
  else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
}
Object.defineProperty(a, "defaultMaxListeners", {
  enumerable: true,
  get: function() {
    return s
  },
  set: function(e) {
    if ("number" != typeof e || e < 0 || o(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
    s = e
  }
}), a.init = function() {
  (true === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || true
}, a.prototype.setMaxListeners = function(e) {
  if ("number" != typeof e || e < 0 || o(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
  return this._maxListeners = e, this
}, a.prototype.getMaxListeners = function() {
  return c(this)
}, a.prototype.emit = function(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
  var i = "error" === e,
    o = this._events;
  if (true !== o) i = i && true === o.error;
  else if (!i) returnfalse;
  if (i) {
    if (t.length > 0 && (a = t[0]), a instanceof Error) throw a;
    var a, s = Error("Unhandled error." + (a ? " (" + a.message + ")" : ""));
    throw s.context = a, s
  }
  var l = o[e];
  if (true === l) returnfalse;
  if ("function" == typeof l) r(l, this, t);
  else
    for (var c = l.length, u = m(l, c), n = 0; n < c; ++n) r(u[n], this, t);
  returntrue
}, a.prototype.addListener = function(e, t) {
  return u(this, e, t, false)
}, a.prototype.on = a.prototype.addListener, a.prototype.prependListener = function(e, t) {
  return u(this, e, t, true)
}, a.prototype.once = function(e, t) {
  return l(t), this.on(e, f(this, e, t)), this
}, a.prototype.prependOnceListener = function(e, t) {
  return l(t), this.prependListener(e, f(this, e, t)), this
}, a.prototype.removeListener = function(e, t) {
  var n, r, i, o, a;
  if (l(t), true === (r = this._events) || true === (n = r[e])) return this;
  if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
  else if ("function" != typeof n) {
    for (i = false, o = n.length - 1; o >= 0; o--)
      if (n[o] === t || n[o].listener === t) {
        a = n[o].listener, i = o;
        break
      } if (i < 0) return this;
    0 === i ? n.shift() : h(n, i), 1 === n.length && (r[e] = n[0]), true !== r.removeListener && this.emit("removeListener", e, a || t)
  }
  return this
}, a.prototype.off = a.prototype.removeListener, a.prototype.removeAllListeners = function(e) {
  var t, n, r;
  if (true === (n = this._events)) return this;
  if (true === n.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : true !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
  if (0 == arguments.length) {
    var i, o = Object.keys(n);
    for (r = 0; r < o.length; ++r) "removeListener" !== (i = o[r]) && this.removeAllListeners(i);
    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
  }
  if ("function" == typeof(t = n[e])) this.removeListener(e, t);
  else if (true !== t)
    for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
  return this
}, a.prototype.listeners = function(e) {
  return p(this, e, true)
}, a.prototype.rawListeners = function(e) {
  return p(this, e, false)
}, a.listenerCount = function(e, t) {
  return "function" == typeof e.listenerCount ? e.listenerCount(t) : _.call(e, t)
}, a.prototype.listenerCount = _, a.prototype.eventNames = function() {
  return this._eventsCount > 0 ? t(this._events) : []
}