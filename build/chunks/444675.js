/** Chunk was on web.js **/
/** chunk id: 444675, original params: e (module,exports,re quire) **/
var t, n, r, i = module.exports = {};

function a() {
  throw Error("setTimeout has not been defined")
}

function o() {
  throw Error("clearTimeout has not been defined")
}

function s(e) {
  if (t === setTimeout) return setTimeout(e, 0);
  if ((t === a || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
  try {
    return t(e, 0)
  } catch (n) {
    try {
      return t.call(null, e, 0)
    } catch (n) {
      return t.call(this, e, 0)
    }
  }
}

function l(e) {
  if (n === clearTimeout) return clearTimeout(e);
  if ((n === o || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
  try {
    return n(e)
  } catch (t) {
    try {
      return n.call(null, e)
    } catch (t) {
      return n.call(this, e)
    }
  }
}! function() {
  try {
    t = "function" == typeof setTimeout ? setTimeout : a
  } catch (e) {
    t = a
  }
  try {
    n = "function" == typeof clearTimeout ? clearTimeout : o
  } catch (e) {
    n = o
  }
}();
var c = [],
  u = false,
  d = false;

function f() {
  u && r && (u = false, r.length ? c = r.concat(c) : d = false, c.length && p())
}

function p() {
  if (!u) {
    var e = s(f);
    u = true;
    for (var t = c.length; t;) {
      for (r = c, c = []; ++d < t;) r && r[d].run();
      d = false, t = c.length
    }
    r = null, u = false, l(e)
  }
}

function _(e, t) {
  this.fun = e, this.array = t
}

function h() {}
i.nextTick = function(e) {
  var t = Array(arguments.length - 1);
  if (arguments.length > 1)
    for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
  c.push(new _(e, t)), 1 !== c.length || u || s(p)
}, _.prototype.run = function() {
  this.fun.apply(null, this.array)
}, i.title = "browser", i.browser = true, i.env = {}, i.argv = [], i.version = "", i.versions = {}, i.on = h, i.addListener = h, i.once = h, i.off = h, i.removeListener = h, i.removeAllListeners = h, i.emit = h, i.prependListener = h, i.prependOnceListener = h, i.listeners = function(e) {
  return []
}, i.binding = function(e) {
  throw Error("process.binding is not supported")
}, i.cwd = function() {
  return "/"
}, i.chdir = function(e) {
  throw Error("process.chdir is not supported")
}, i.umask = function() {
  return 0
}