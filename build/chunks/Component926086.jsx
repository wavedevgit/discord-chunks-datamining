/** Chunk was on 50751 **/
/** chunk id: 926086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk667142 = require("./667142.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk388592 = require("./388592.js");
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
  } = e, [l, a] = r.useState(0), [m, g] = r.useState(0), [y, O] = r.useState(0), v = r.useRef(0), [E, b] = r.useState(0), {
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
  }), r.useEffect(() => (v.current = setInterval(() => {
    let e = Date.now();
    g(e), O(t => {
      if (0 === t) return e;
      let n = e - t,
        i = I.current.timeToLiveMs,
        r = i + I.current.reappearTimeMs;
      return n > i ? t + r : t
    })
  }, 100), () => {
    clearInterval(v.current)
  }), []);
  let j = () => {
      a(Date.now()), b(e => e + 1)
    },
    C = l > 0 && m - l < 1e3,
    Z = (0, u.Yzy)(y > 0 && y < m && m - y < _, {
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
    [N, w] = r.useState(false);
  if (r.useEffect(() => {
      E > 10 && w(true)
    }, [E]), N) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: Z((e, t) => t && (0, i.jsx)(c.animated.div, {
      style: e,
      className: p.clickZoneDebugContainer,
      children: (0, i.jsx)(h.Z, {
        className: o()(p.clickZone, C && p.clickBackground),
        children: (0, i.jsx)(u.P3F, {
          onClick: j,
          className: p.clickable,
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