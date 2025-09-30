/** Chunk was on 95546 **/
/** chunk id: 405701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk11769 = require("./11769.js"),
  Chunk300429 = require("./300429.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk923664 = require("./923664.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk799567 = require("./799567.js");

function g(e) {
  let t, {
      isEnabled: n,
      rateLimitPerUser: o,
      isBypassSlowmode: s,
      slowmodeCooldownGuess: u
    } = e,
    [f, g] = i.useState(false);
  if (i.useEffect(() => {
      function e() {
        g(true), setTimeout(() => {
          g(false)
        }, 1e3)
      }
      return d.S.subscribe(O.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
        d.S.unsubscribe(O.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e)
      }
    }, []), !n) return null;
  let h = (0, a.k)(o);
  if (!s && u > 0) {
    let e = l().duration(u);
    if (u > p.Z.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        r = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(r)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = s ? b.intl.string(b.t["8+NidX"]) : b.intl.string(b.t.Icu3bW);
  let m = (0, r.jsxs)(c.Text, {
    className: y.cooldownText,
    variant: "text-xs/medium",
    color: f ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [(0, r.jsx)(c.ANZ, {
      size: "xxs",
      color: "currentColor",
      className: y.slowModeIcon
    }), t]
  });
  return (0, r.jsx)(c.ua7, {
    text: h,
    children: e => {
      var t, n;
      return (0, r.jsx)("div", (t = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({
        className: y.cooldownWrapper
      }, e), n = n = {
        children: m
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(n)).forEach(function(e) {
        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
      }), t))
    }
  })
}

function h(e) {
  let {
    channel: t,
    isThreadCreation: n = false
  } = e, i = (0, s.e7)([u.Z], () => u.Z.getSlowmodeCooldownGuess(t.id, n ? u.S.CreateThread : u.S.SendMessage)), o = (0, f.w)(t, n ? u.S.CreateThread : u.S.SendMessage), {
    rateLimitPerUser: l
  } = t;
  return (0, r.jsx)(g, {
    isEnabled: l > 0,
    rateLimitPerUser: l,
    isBypassSlowmode: o,
    slowmodeCooldownGuess: i
  })
}