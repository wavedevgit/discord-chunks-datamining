/** Chunk was on web.js **/
/** chunk id: 441014, original params: e,t (module,exports,re quire) **/
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
    for (var r = 0, i = e.length, s = i >>> 1; r < s;) {
      var o = 2 * (r + 1) - 1,
        l = e[o],
        c = o + 1,
        u = e[c];
      if (0 > a(l, n)) c < i && 0 > a(u, l) ? (e[r] = u, e[c] = n, r = c) : (e[r] = l, e[o] = n, r = o);
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
  var s, o = performance;
  exports.unstable_now = function() {
    return o.now()
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
  p = null,
  _ = 3,
  h = false,
  m = false,
  g = false,
  E = false,
  b = "function" == typeof setTimeout ? setTimeout : null,
  y = "function" == typeof clearTimeout ? clearTimeout : null,
  O = "u" > typeof setImmediate ? setImmediate : null;

function A(e) {
  for (var t = r(d); null !== t;) {
    if (null === t.callback) i(d);
    else if (t.startTime <= e) i(d), t.sortIndex = t.expirationTime, n(u, t);
    else break;
    t = r(d)
  }
}

function v(e) {
  if (g = false, A(e), !m)
    if (null !== r(u)) m = true, S || (S = true, s());
    else {
      var t = r(d);
      null !== t && D(v, t.startTime - e)
    }
}
var S = false,
  I = false,
  T = 5,
  C = false;

function N() {
  return !!E || !(t.unstable_now() - C < T)
}

function R() {
  if (E = false, S) {
    var e = t.unstable_now();
    C = e;
    var n = true;
    try {
      e: {
        m = false,
        g && (g = false, y(I), I = false),
        h = true;
        var a = _;
        try {
          a: {
            for (A(e), p = r(u); null !== p && !(p.expirationTime > e && N());) {
              var o = p.callback;
              if ("function" == typeof o) {
                p.callback = null, _ = p.priorityLevel;
                var l = o(p.expirationTime <= e);
                if (e = t.unstable_now(), "function" == typeof l) {
                  p.callback = l, A(e), n = true;
                  break a
                }
                p === r(u) && i(u), A(e)
              } else i(u);
              p = r(u)
            }
            if (null !== p) n = true;
            else {
              var c = r(d);
              null !== c && D(v, c.startTime - e), n = false
            }
          }
          break e
        }
        finally {
          p = null, _ = a, h = false
        }
      }
    }
    finally {
      n ? s() : S = false
    }
  }
}
if ("function" == typeof O) s = function() {
  O(R)
};
else if ("u" > typeof MessageChannel) {
  var w = new MessageChannel,
    P = w.port2;
  w.port1.onmessage = R, s = function() {
    P.postMessage(null)
  }
} else s = function() {
  b(R, 0)
};

function D(e, n) {
  I = b(function() {
    e(t.unstable_now())
  }, n)
}
exports.unstable_IdlePriority = 5, exports.unstable_ImmediatePriority = 1, exports.unstable_LowPriority = 4, exports.unstable_NormalPriority = 3, exports.unstable_Profiling = null, exports.unstable_UserBlockingPriority = 2, exports.unstable_cancelCallback = function(e) {
  e.callback = null
}, exports.unstable_forceFrameRate = function(e) {
  0 > e || 125 < e ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < e ? Math.floor(1e3 / e) : 5
}, exports.unstable_getCurrentPriorityLevel = function() {
  return _
}, exports.unstable_next = function(e) {
  switch (_) {
    case 1:
    case 2:
    case 3:
      var t = 3;
      break;
    default:
      t = _
  }
  var n = _;
  _ = t;
  try {
    return e()
  } finally {
    _ = n
  }
}, exports.unstable_requestPaint = function() {
  E = true
}, exports.unstable_runWithPriority = function(e, t) {
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
  var n = _;
  _ = e;
  try {
    return t()
  } finally {
    _ = n
  }
}, exports.unstable_scheduleCallback = function(e, i, a) {
  var o = t.unstable_now();
  switch (a = "object" == typeof a && null !== a && "number" == typeof(a = a.delay) && 0 < a ? o + a : o, e) {
    case 1:
      var l = false;
      break;
    case 2:
      l = 250;
      break;
    case 5:
      l = 0x3fffffff;
      break;
    case 4:
      l = 1e4;
      break;
    default:
      l = 5e3
  }
  return l = a + l, e = {
    id: f++,
    callback: i,
    priorityLevel: e,
    startTime: a,
    expirationTime: l,
    sortIndex: false
  }, a > o ? (e.sortIndex = a, n(d, e), null === r(u) && e === r(d) && (g ? (y(I), I = false) : g = true, D(v, a - o))) : (e.sortIndex = l, n(u, e), m || h || (m = true, S || (S = true, s()))), e
}, exports.unstable_shouldYield = N, exports.unstable_wrapCallback = function(e) {
  var t = _;
  return function() {
    var n = _;
    _ = t;
    try {
      return e.apply(this, arguments)
    } finally {
      _ = n
    }
  }
}