/** Chunk was on 46653 **/
/** chunk id: 405701, original params: e,t,i (module,exports,require) **/
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

function O(e) {
  let t, {
      isEnabled: i,
      rateLimitPerUser: s,
      isBypassSlowmode: l,
      slowmodeCooldownGuess: u
    } = e,
    [h, O] = r.useState(false);
  r.useEffect(() => {
    function e() {
      O(true), setTimeout(() => {
        O(false)
      }, 1e3)
    }
    return p.S.subscribe(m.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
      p.S.unsubscribe(m.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e)
    }
  }, []);
  let b = (0, c.Z)("SlowmodeIndicator");
  if (!i) return null;
  let y = (0, d.k)(s);
  if (!l && u > 0) {
    let e = o().duration(u);
    if (u > g.Z.Millis.HOUR) {
      let i = "".concat(e.minutes()).padStart(2, "0"),
        n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(i, ":").concat(n)
    } else {
      let i = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(i)
    }
  } else t = l ? b ? f.intl.string(f.t["8+NidX"]) : f.intl.string(f.t.SSzXvb) : f.intl.string(f.t.Icu3bW);
  let S = b ? (0, n.jsxs)(a.Text, {
    className: v.cooldownText,
    variant: "text-xs/medium",
    color: h ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [(0, n.jsx)(a.ANZ, {
      size: "xxs",
      color: "currentColor",
      className: v.slowModeIcon
    }), t]
  }) : (0, n.jsxs)(a.Text, {
    className: v.cooldownText,
    variant: "text-sm/medium",
    color: h ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [t, (0, n.jsx)(a.ANZ, {
      size: "xs",
      color: "currentColor",
      className: v.slowModeIcon
    })]
  });
  return (0, n.jsx)(a.ua7, {
    text: y,
    children: e => {
      var t, i;
      return (0, n.jsx)("div", (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var i = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(i);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(i).filter(function(e) {
            return Object.getOwnPropertyDescriptor(i, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = i[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = n
          })
        }
        return e
      }({
        className: v.cooldownWrapper
      }, e), i = i = {
        children: S
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var i = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          i.push.apply(i, n)
        }
        return i
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
      }), t))
    }
  })
}

function b(e) {
  let {
    channel: t,
    isThreadCreation: i = false
  } = e, r = (0, l.e7)([h.Z], () => h.Z.getSlowmodeCooldownGuess(t.id, i ? h.S.CreateThread : h.S.SendMessage)), s = (0, l.e7)([u.Z], () => i ? u.Z.can(m.Plq.MANAGE_THREADS, t) : u.Z.can(m.Plq.MANAGE_CHANNELS, t) || u.Z.can(m.Plq.MANAGE_MESSAGES, t)), {
    rateLimitPerUser: o
  } = t;
  return (0, n.jsx)(O, {
    isEnabled: o > 0,
    rateLimitPerUser: o,
    isBypassSlowmode: s,
    slowmodeCooldownGuess: r
  })
}