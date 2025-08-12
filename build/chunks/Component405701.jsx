/** Chunk was on web.js **/
/** chunk id: 405701, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk913527 = require("./913527.js"),
  a = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk11769 = require("./11769.js"),
  Chunk338390 = require("./338390.js"),
  Chunk496675 = require("./496675.js"),
  Chunk300429 = require("./300429.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk179893 = require("./179893.js");

function E(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function b(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      E(e, t, n[t])
    })
  }
  return e
}

function y(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function O(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : y(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function v(e) {
  let t, {
      isEnabled: n,
      rateLimitPerUser: o,
      isBypassSlowmode: s,
      slowmodeCooldownGuess: d
    } = e,
    [f, E] = i.useState(false);
  i.useEffect(() => {
    function e() {
      E(true), setTimeout(() => {
        E(false)
      }, 1e3)
    }
    return _.S.subscribe(h.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
      _.S.unsubscribe(h.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e)
    }
  }, []);
  let y = (0, u.Z)("SlowmodeIndicator");
  if (!n) return null;
  let v = (0, c.k)(o);
  if (!s && d > 0) {
    let e = a().duration(d);
    if (d > p.Z.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        r = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(r)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = s ? y ? m.intl.string(m.t["8+NidX"]) : m.intl.string(m.t.SSzXvb) : m.intl.string(m.t.Icu3bW);
  let I = y ? (0, r.jsxs)(l.Text, {
    className: g.cooldownText,
    variant: "text-xs/medium",
    color: f ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [(0, r.jsx)(l.ANZ, {
      size: "xxs",
      color: "currentColor",
      className: g.slowModeIcon
    }), t]
  }) : (0, r.jsxs)(l.Text, {
    className: g.cooldownText,
    variant: "text-sm/medium",
    color: f ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [t, (0, r.jsx)(l.ANZ, {
      size: "xs",
      color: "currentColor",
      className: g.slowModeIcon
    })]
  });
  return (0, r.jsx)(l.ua7, {
    text: v,
    children: e => (0, r.jsx)("div", O(b({
      className: g.cooldownWrapper
    }, e), {
      children: I
    }))
  })
}

function I(e) {
  let {
    channel: t,
    isThreadCreation: n = false
  } = e, i = (0, s.e7)([f.Z], () => f.Z.getSlowmodeCooldownGuess(t.id, n ? f.S.CreateThread : f.S.SendMessage)), o = (0, s.e7)([d.Z], () => n ? d.Z.can(h.Plq.MANAGE_THREADS, t) : d.Z.can(h.Plq.MANAGE_CHANNELS, t) || d.Z.can(h.Plq.MANAGE_MESSAGES, t)), {
    rateLimitPerUser: a
  } = t, l = a > 0;
  return (0, r.jsx)(v, {
    isEnabled: l,
    rateLimitPerUser: a,
    isBypassSlowmode: o,
    slowmodeCooldownGuess: i
  })
}