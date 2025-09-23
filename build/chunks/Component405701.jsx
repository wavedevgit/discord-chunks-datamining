/** Chunk was on 95546 **/
/** chunk id: 405701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk11769 = require("./11769.js"),
  Chunk338390 = require("./338390.js"),
  Chunk300429 = require("./300429.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk923664 = require("./923664.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk917105 = require("./917105.js");

function v(e) {
  let t, {
      isEnabled: n,
      rateLimitPerUser: o,
      isBypassSlowmode: s,
      slowmodeCooldownGuess: d
    } = e,
    [b, v] = i.useState(false);
  i.useEffect(() => {
    function e() {
      v(true), setTimeout(() => {
        v(false)
      }, 1e3)
    }
    return f.S.subscribe(O.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
      f.S.unsubscribe(O.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e)
    }
  }, []);
  let y = (0, u.Z)("SlowmodeIndicator");
  if (!n) return null;
  let h = (0, c.k)(o);
  if (!s && d > 0) {
    let e = l().duration(d);
    if (d > p.Z.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        r = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(r)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = s ? y ? m.intl.string(m.t["8+NidX"]) : m.intl.string(m.t.SSzXvb) : m.intl.string(m.t.Icu3bW);
  let j = y ? (0, r.jsxs)(a.Text, {
    className: g.cooldownText,
    variant: "text-xs/medium",
    color: b ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [(0, r.jsx)(a.ANZ, {
      size: "xxs",
      color: "currentColor",
      className: g.slowModeIcon
    }), t]
  }) : (0, r.jsxs)(a.Text, {
    className: g.cooldownText,
    variant: "text-sm/medium",
    color: b ? "text-danger" : "text-muted",
    tabularNumbers: true,
    children: [t, (0, r.jsx)(a.ANZ, {
      size: "xs",
      color: "currentColor",
      className: g.slowModeIcon
    })]
  });
  return (0, r.jsx)(a.ua7, {
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
        className: g.cooldownWrapper
      }, e), n = n = {
        children: j
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

function y(e) {
  let {
    channel: t,
    isThreadCreation: n = false
  } = e, i = (0, s.e7)([d.Z], () => d.Z.getSlowmodeCooldownGuess(t.id, n ? d.S.CreateThread : d.S.SendMessage)), o = (0, b.w)(t, n ? d.S.CreateThread : d.S.SendMessage), {
    rateLimitPerUser: l
  } = t;
  return (0, r.jsx)(v, {
    isEnabled: l > 0,
    rateLimitPerUser: l,
    isBypassSlowmode: o,
    slowmodeCooldownGuess: i
  })
}