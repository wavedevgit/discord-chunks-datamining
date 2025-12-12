/** Chunk was on 95546 **/
/** chunk id: 405701, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => y
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
  Chunk799567 = require("./799567.js");

function g(e) {
  let t, {
      isEnabled: n,
      rateLimitPerUser: o,
      isBypassSlowmode: s,
      slowmodeCooldownGuess: d
    } = e,
    [O, g] = r.useState(false);
  if (r.useEffect(() => {
      function e() {
        g(true), setTimeout(() => {
          g(false)
        }, 1e3)
      }
      return p.S.subscribe(b.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
        p.S.unsubscribe(b.CkL.EMPHASIZE_SLOWMODE_COOLDOWN, e)
      }
    }, []), !n) return null;
  let y = (0, u.k)(o);
  if (!s && d > 0) {
    let e = l().duration(d);
    if (d > f.Z.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        i = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(i)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = s ? h.intl.string(h.t["8+NidX"]) : h.intl.string(h.t.Icu3bf);
  let v = (0, i.jsxs)(c.Text, {
    className: m.cooldownText,
    variant: "text-xs/medium",
    color: O ? "text-feedback-critical" : "text-muted",
    tabularNumbers: true,
    children: [(0, i.jsx)(c.ANZ, {
      size: "xxs",
      color: "currentColor",
      className: m.slowModeIcon
    }), t]
  });
  return (0, i.jsx)(a.u, {
    text: y,
    children: (0, i.jsx)("div", {
      className: m.cooldownWrapper,
      children: v
    })
  })
}

function y(e) {
  let {
    channel: t,
    isThreadCreation: n = false
  } = e, r = (0, s.e7)([d.Z], () => d.Z.getSlowmodeCooldownGuess(t.id, n ? d.S.CreateThread : d.S.SendMessage)), o = (0, O.w)(t, n ? d.S.CreateThread : d.S.SendMessage), {
    rateLimitPerUser: l
  } = t;
  return (0, i.jsx)(g, {
    isEnabled: l > 0,
    rateLimitPerUser: l,
    isBypassSlowmode: o,
    slowmodeCooldownGuess: r
  })
}