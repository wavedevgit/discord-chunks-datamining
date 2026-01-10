/** Chunk was on 87646 **/
/** chunk id: 405701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk913527 = require("./913527.js"),
  l = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk11769 = require("./11769.js"),
  Chunk300429 = require("./300429.js"),
  Chunk585483 = require("./585483.js"),
  Chunk70956 = require("./70956.js"),
  Chunk923664 = require("./923664.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk45038 = require("./45038.js");

function b(e) {
  let t, {
      isEnabled: n,
      rateLimitPerUser: r,
      isBypassSlowmode: a,
      slowmodeCooldownGuess: d
    } = e,
    [m, b] = s.useState(false);
  if (s.useEffect(() => {
      function e() {
        b(true), setTimeout(() => {
          b(false)
        }, 1e3)
      }
      return h.S.subscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
        h.S.unsubscribe(f.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e)
      }
    }, []), !n) return null;
  let x = (0, u.k)(r);
  if (!a && d > 0) {
    let e = l().duration(d);
    if (d > g.Z.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        i = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(i)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = a ? p.intl.string(p.t["8+NidX"]) : p.intl.string(p.t.Icu3bf);
  let O = (0, i.jsxs)(c.Text, {
    className: v.cooldownText,
    variant: "text-xs/medium",
    color: m ? "text-feedback-critical" : "text-muted",
    tabularNumbers: true,
    children: [(0, i.jsx)(c.ANZ, {
      size: "xxs",
      color: "currentColor",
      className: v.slowModeIcon
    }), t]
  });
  return (0, i.jsx)(o.u, {
    text: x,
    children: (0, i.jsx)("div", {
      className: v.cooldownWrapper,
      children: O
    })
  })
}

function x(e) {
  let {
    channel: t,
    isThreadCreation: n = false
  } = e, s = (0, a.e7)([d.Z], () => d.Z.getSlowmodeCooldownGuess(t.id, n ? d.S.CreateThread : d.S.SendMessage)), r = (0, m.w)(t, n ? d.S.CreateThread : d.S.SendMessage), {
    rateLimitPerUser: l
  } = t;
  return (0, i.jsx)(b, {
    isEnabled: l > 0,
    rateLimitPerUser: l,
    isBypassSlowmode: r,
    slowmodeCooldownGuess: s
  })
}