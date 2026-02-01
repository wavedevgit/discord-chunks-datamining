/** Chunk was on 12907 **/
/** chunk id: 144945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  o = require.n(Chunk989349),
  Chunk311907 = require("./311907.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk943330 = require("./943330.js"),
  Chunk101392 = require("./101392.js"),
  Chunk203982 = require("./203982.js"),
  Chunk927813 = require("./927813.js"),
  Chunk960850 = require("./960850.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk244317 = require("./244317.js");

function g(e) {
  let t, {
      isEnabled: n,
      rateLimitPerUser: l,
      isBypassSlowmode: s,
      slowmodeCooldownGuess: d
    } = e,
    [b, g] = r.useState(false);
  if (r.useEffect(() => {
      function e() {
        g(true), setTimeout(() => {
          g(false)
        }, 1e3)
      }
      return p._.subscribe(O.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
        p._.unsubscribe(O.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e)
      }
    }, []), !n) return null;
  let y = (0, u.L)(l);
  if (!s && d > 0) {
    let e = o().duration(d);
    if (d > f.A.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        i = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(i)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = s ? h.intl.string(h.t["8+NidX"]) : h.intl.string(h.t.Icu3bf);
  let A = (0, i.jsxs)(c.Text, {
    className: m.rk,
    variant: "text-xs/medium",
    color: b ? "text-feedback-critical" : "text-muted",
    tabularNumbers: true,
    children: [(0, i.jsx)(c.xbX, {
      size: "xxs",
      color: "currentColor",
      className: m.Eq
    }), t]
  });
  return (0, i.jsx)(a.m, {
    text: y,
    children: (0, i.jsx)("div", {
      className: m.ns,
      children: A
    })
  })
}

function y(e) {
  let {
    channel: t,
    isThreadCreation: n = false
  } = e, r = (0, s.bG)([d.A], () => d.A.getSlowmodeCooldownGuess(t.id, n ? d.R.CreateThread : d.R.SendMessage)), l = (0, b._)(t, n ? d.R.CreateThread : d.R.SendMessage), {
    rateLimitPerUser: o
  } = t;
  return (0, i.jsx)(g, {
    isEnabled: o > 0,
    rateLimitPerUser: o,
    isBypassSlowmode: l,
    slowmodeCooldownGuess: r
  })
}