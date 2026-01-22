/** Chunk was on 48898 **/
/** chunk id: 144945, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => A
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk989349 = require("./989349.js"),
  l = require.n(Chunk989349),
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

function b(e) {
  let t, {
      isEnabled: n,
      rateLimitPerUser: r,
      isBypassSlowmode: a,
      slowmodeCooldownGuess: u
    } = e,
    [m, b] = s.useState(false);
  if (s.useEffect(() => {
      function e() {
        b(true), setTimeout(() => {
          b(false)
        }, 1e3)
      }
      return h._.subscribe(p.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e), () => {
        h._.unsubscribe(p.jej.EMPHASIZE_SLOWMODE_COOLDOWN, e)
      }
    }, []), !n) return null;
  let A = (0, d.L)(r);
  if (!a && u > 0) {
    let e = l().duration(u);
    if (u > g.A.Millis.HOUR) {
      let n = "".concat(e.minutes()).padStart(2, "0"),
        i = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.hours(), ":").concat(n, ":").concat(i)
    } else {
      let n = "".concat(e.seconds()).padStart(2, "0");
      t = "".concat(e.minutes(), ":").concat(n)
    }
  } else t = a ? f.intl.string(f.t["8+NidX"]) : f.intl.string(f.t.Icu3bf);
  let O = (0, i.jsxs)(c.Text, {
    className: v.rk,
    variant: "text-xs/medium",
    color: m ? "text-feedback-critical" : "text-muted",
    tabularNumbers: true,
    children: [(0, i.jsx)(c.xbX, {
      size: "xxs",
      color: "currentColor",
      className: v.Eq
    }), t]
  });
  return (0, i.jsx)(o.m, {
    text: A,
    children: (0, i.jsx)("div", {
      className: v.ns,
      children: O
    })
  })
}

function A(e) {
  let {
    channel: t,
    isThreadCreation: n = false
  } = e, s = (0, a.bG)([u.A], () => u.A.getSlowmodeCooldownGuess(t.id, n ? u.R.CreateThread : u.R.SendMessage)), r = (0, m._)(t, n ? u.R.CreateThread : u.R.SendMessage), {
    rateLimitPerUser: l
  } = t;
  return (0, i.jsx)(b, {
    isEnabled: l > 0,
    rateLimitPerUser: l,
    isBypassSlowmode: r,
    slowmodeCooldownGuess: s
  })
}