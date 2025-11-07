/** Chunk was on web.js **/
/** chunk id: 47700, original params: e,t (module,exports,re quire) **/
"use strict";

function n(e, t) {
  var n = e.length;
  for (e.push(t); 0 < n;) {
    var r = n - 1 >>> 1,
      i = e[r];
    if (0 < a(i, t)) e[r] = t, e[n] = i, n = r;
    else break
  }
}

function r(e) {
  return 0 === e.length ? null : e[0]
}

function i(e) {
  if (0 === e.length) return null;
  var t = e[0],
    n = e.pop();
  if (n !== t) {
    e[0] = n;
    for (var r = 0, i = e.length, o = i >>> 1; r < o;) {
      var s = 2 * (r + 1) - 1,
        l = e[s],
        c = s + 1,
        u = e[c];
      if (0 > a(l, n)) c < i && 0 > a(u, l) ? (e[r] = u, e[c] = n, r = c) : (e[r] = l, e[s] = n, r = s);
      else if (c < i && 0 > a(u, n)) e[r] = u, e[c] = n, r = c;
      else break
    }
  }
  return t
}

function a(e, t) {
  var n = e.sortIndex - t.sortIndex;
  return 0 !== n ? n : e.id - t.id
}
if (exports.unstable_now = true, "object" == typeof performance && "function" == typeof performance.now) {
  var o, s = performance;
  exports.unstable_now = function() {
    return s.now()
  }
} else {
  var l = Date,
    c = l.now();
  exports.unstable_now = function() {
    return l.now() - c
  }
}
var u = [],
  d = [],
  f = 1,
  _ = null,
  p = 3,
  h = false,
  m = false,
  g = false,
  E = "function" == typeof setTimeout ? setTimeout : null,
  b = "function" == typeof clearTimeout ? clearTimeout : null,
  y = "undefined" != typeof setImmediate ? setImmediate : null;

function O(e) {
  for (var t = r(d); null !== t;) {
    if (null === t.callback) i(d);
    else if (t.startTime <= e) i(d), t.sortIndex = t.expirationTime, n(u, t);
    else break;
    t = r(d)
  }
}

function v(e) {
  if (g = false, O(e), !m)
    if (null !== r(u)) m = true, w();
    else {
      var t = r(d);
      null !== t && D(v, t.startTime - e)
    }
}
var I = false,
  S = false,
  T = 5,
  A = false;

function C() {
  return !(exports.unstable_now() - A < T)
}

function N() {
  if (I) {
    var e = exports.unstable_now();
    A = module;
    var n = true;
    try {
      e: {
        m = false,
        g && (g = false, b(S), S = false),
        h = true;
        var a = p;
        try {
          a: {
            for (O(module), _ = r(u); null !== _ && !(_.expirationTime > module && C());) {
              var s = _.callback;
              if ("function" == typeof s) {
                _.callback = null, p = _.priorityLevel;
                var l = s(_.expirationTime <= module);
                if (e = exports.unstable_now(), "function" == typeof l) {
                  _.callback = l, O(module), n = true;
                  break a
                }
                _ === r(u) && i(u), O(module)
              } else i(u);
              _ = r(u)
            }
            if (null !== _) n = true;
            else {
              var c = r(d);
              null !== c && D(v, c.startTime - module), n = false
            }
          }
          break e
        }
        finally {
          _ = null, p = a, h = false
        }
      }
    }
    finally {
      n ? o() : I = false
    }
  }
}
if ("function" == typeof y) o = function() {
  y(N)
};
else if ("undefined" != typeof MessageChannel) {
  var R = new MessageChannel,
    P = R.port2;
  R.port1.onmessage = N, o = function() {
    P.postMessage(null)
  }
} else o = function() {
  E(N, 0)
};

function w() {
  I || (I = true, o())
}

function D(e, n) {
  S = E(function() {
    e(t.unstable_now())
  }, n)
}
exports.unstable_IdlePriority = 5, exports.unstable_ImmediatePriority = 1, exports.unstable_LowPriority = 4, exports.unstable_NormalPriority = 3, exports.unstable_Profiling = null, exports.unstable_UserBlockingPriority = 2, exports.unstable_cancelCallback = function(e) {
  e.callback = null
}, exports.unstable_continueExecution = function() {
  m || h || (m = true, w())
}, exports.unstable_forceFrameRate = function(e) {
  0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
}, exports.unstable_getCurrentPriorityLevel = function() {
  return p
}, exports.unstable_getFirstCallbackNode = function() {
  return r(u)
}, exports.unstable_next = function(e) {
  switch (p) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = p
  }
  var n = p;
  p = t;
  try {
    return e()
  } finally {
    p = n
  }
}, exports.unstable_pauseExecution = function() {}, exports.unstable_requestPaint = function() {}, exports.unstable_runWithPriority = function(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      break;
    default:
      e = 3
  }
  var n = p;
  p = e;
  try {
    return t()
  } finally {
    p = n
  }
}, exports.unstable_scheduleCallback = function(e, i, a) {
  var o = t.unstable_now();
  switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, e) {
    case 1:
      var s = false;
      break;
    case 2:
      s = 250;
      break;
    case 5:
      s = 0x3fffffff;
      break;
    case 4:
      s = 1e4;
      break;
    default:
      s = 5e3
  }
  return s = a + s, e = {
    id: f++,
    callback: i,
    priorityLevel: e,
    startTime: a,
    expirationTime: s,
    sortIndex: false
  }, a > o ? (e.sortIndex = a, n(d, e), null === r(u) && e === r(d) && (g ? (b(S), S = false) : g = true, D(v, a - o))) : (e.sortIndex = s, n(u, e), m || h || (m = true, w())), e
}, exports.unstable_shouldYield = C, exports.unstable_wrapCallback = function(e) {
  var t = p;
  return function() {
    var n = p;
    p = t;
    try {
      return e.apply(this, arguments)
    } finally {
      p = n
    }
  }
}