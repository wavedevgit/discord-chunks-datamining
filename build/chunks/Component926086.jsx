/** Chunk was on 46290 **/
/** chunk id: 926086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk803948 = require("./803948.js"),
  Chunk481060 = require("./481060.js"),
  Chunk667142 = require("./667142.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk388592 = require("./388592.js");
let h = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: true
};

function m(e) {
  let {
    locked: t,
    pinned: n
  } = e, [o, a] = r.useState(0), [m, g] = r.useState(0), [y, O] = r.useState(0), b = r.useRef(0), [v, E] = r.useState(0), {
    timeToLiveMs: _,
    reappearTimeMs: S
  } = d.ZP.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), s()), x = {
    timeToLiveMs: _,
    reappearTimeMs: S
  }, I = r.useRef(x);
  r.useEffect(() => {
    I.current = x
  }), r.useEffect(() => (b.current = setInterval(() => {
    let e = Date.now();
    g(e), O(t => {
      if (0 === t) return e;
      let n = e - t,
        i = I.current.timeToLiveMs,
        r = i + I.current.reappearTimeMs;
      return n > i ? t + r : t
    })
  }, 100), () => {
    clearInterval(b.current)
  }), []);
  let j = () => {
      a(Date.now()), E(e => e + 1)
    },
    C = o > 0 && m - o < 1e3,
    N = (0, u.Yzy)(y > 0 && y < m && m - y < _, {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      config: h
    }),
    [w, Z] = r.useState(false);
  if (r.useEffect(() => {
      v > 10 && Z(true)
    }, [v]), w) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: N((e, t) => t && (0, i.jsx)(c.animated.div, {
      style: e,
      className: f.clickZoneDebugContainer,
      children: (0, i.jsx)(p.Z, {
        className: l()(f.clickZone, C && f.clickBackground),
        children: (0, i.jsx)(u.P3F, {
          onClick: j,
          className: f.clickable,
          children: (0, i.jsxs)(u.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            children: ["Click Me (", v, ")"]
          })
        })
      })
    }))
  })
}