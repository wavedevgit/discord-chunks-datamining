/** Chunk was on 11424 **/
/** chunk id: 405701, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
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
  Chunk799567 = require("./799567.js");

function O(t) {
  let e, {
      isEnabled: i,
      rateLimitPerUser: r,
      isBypassSlowmode: l,
      slowmodeCooldownGuess: u
    } = t,
    [h, O] = s.useState(false);
  s.useEffect(() => {
    function t() {
      O(true), setTimeout(() => {
        O(false)
      }, 1e3)
    }
    return g.S.subscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, t), () => {
      g.S.unsubscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, t)
    }
  }, []);
  let b = (0, c.Z)("SlowmodeIndicator");
  if (!i) return null;
  let S = (0, d.k)(r);
  if (!l && u > 0) {
    let t = o().duration(u);
    if (u > p.Z.Millis.HOUR) {
      let i = "".concat(t.minutes()).padStart(2, "0"),
        n = "".concat(t.seconds()).padStart(2, "0");
      e = "".concat(t.hours(), ":").concat(i, ":").concat(n)
    } else {
      let i = "".concat(t.seconds()).padStart(2, "0");
      e = "".concat(t.minutes(), ":").concat(i)
    }
  } else e = l ? b ? m.intl.string(m.t["8+NidX"]) : m.intl.string(m.t.SSzXvb) : m.intl.string(m.t.Icu3bW);
  let y = b ? (0, n.jsxs)(a.Text, {
    className: v.cooldownText,
    variant: "text-xs/medium",
    color: h ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [(0, n.jsx)(a.ANZ, {
      size: "xxs",
      color: "currentColor",
      className: v.slowModeIcon
    }), e]
  }) : (0, n.jsxs)(a.Text, {
    className: v.cooldownText,
    variant: "text-sm/medium",
    color: h ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [e, (0, n.jsx)(a.ANZ, {
      size: "xs",
      color: "currentColor",
      className: v.slowModeIcon
    })]
  });
  return (0, n.jsx)(a.ua7, {
    text: S,
    children: t => {
      var e, i;
      return (0, n.jsx)("div", (e = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(t) {
            return Object.getOwnPropertyDescriptor(i, t).enumerable
          }))), n.forEach(function(e) {
            var n;
            n = i[e], e in t ? Object.defineProperty(t, e, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = n
          })
        }
        return t
      }({
        className: v.cooldownWrapper
      }, t), i = i = {
        children: y
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : (function(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(t);
          i.push.apply(i, n)
        }
        return i
      })(Object(i)).forEach(function(t) {
        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
      }), e))
    }
  })
}

function b(t) {
  let {
    channel: e,
    isThreadCreation: i = false
  } = t, s = (0, l.e7)([h.Z], () => h.Z.getSlowmodeCooldownGuess(e.id, i ? h.S.CreateThread : h.S.SendMessage)), r = (0, l.e7)([u.Z], () => i ? u.Z.can(f.Plq.MANAGE_THREADS, e) : u.Z.can(f.Plq.MANAGE_CHANNELS, e) || u.Z.can(f.Plq.MANAGE_MESSAGES, e)), {
    rateLimitPerUser: o
  } = e;
  return (0, n.jsx)(O, {
    isEnabled: o > 0,
    rateLimitPerUser: o,
    isBypassSlowmode: r,
    slowmodeCooldownGuess: s
  })
}