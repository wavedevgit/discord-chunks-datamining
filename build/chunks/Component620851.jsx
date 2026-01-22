/** Chunk was on 71447 **/
/** chunk id: 620851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => m
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk812729 = require("./812729.js"),
  s = require.n(Chunk812729),
  Chunk432022 = require("./432022.js"),
  Chunk397927 = require("./397927.js"),
  Chunk259788 = require("./259788.js"),
  Chunk302614 = require("./302614.jsx"),
  Chunk751747 = require("./751747.js");
let f = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: true
};

function m(e) {
  let {
    locked: t,
    pinned: n
  } = e, [l, o] = r.useState(0), [m, g] = r.useState(0), [y, A] = r.useState(0), O = r.useRef(0), [E, v] = r.useState(0), {
    timeToLiveMs: b,
    reappearTimeMs: S
  } = d.Ay.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), s()), x = {
    timeToLiveMs: b,
    reappearTimeMs: S
  }, j = r.useRef(x);
  r.useEffect(() => {
    j.current = x
  }), r.useEffect(() => (O.current = setInterval(() => {
    let e = Date.now();
    g(e), A(t => {
      if (0 === t) return e;
      let n = e - t,
        i = j.current.timeToLiveMs,
        r = i + j.current.reappearTimeMs;
      return n > i ? t + r : t
    })
  }, 100), () => {
    clearInterval(O.current)
  }), []);
  let I = () => {
      o(Date.now()), v(e => e + 1)
    },
    N = l > 0 && m - l < 1e3,
    w = (0, u.pnh)(y > 0 && y < m && m - y < b, {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      config: f
    }),
    [T, C] = r.useState(false);
  if (r.useEffect(() => {
      E > 10 && C(true)
    }, [E]), T) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: w((e, t) => t && (0, i.jsx)(c.animated.div, {
      style: e,
      className: h.r2,
      children: (0, i.jsx)(p.A, {
        className: a()(h.VC, N && h.Nd),
        children: (0, i.jsx)(u.DUT, {
          onClick: I,
          className: h.vk,
          children: (0, i.jsxs)(u.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            children: ["Click Me (", E, ")"]
          })
        })
      })
    }))
  })
}