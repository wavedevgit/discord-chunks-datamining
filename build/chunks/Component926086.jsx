/** Chunk was on 50751 **/
/** chunk id: 926086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk467721 = require("./467721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk667142 = require("./667142.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk735837 = require("./735837.js");
let p = {
  mass: 1,
  tension: 600,
  friction: 60,
  clamp: true
};

function m(e) {
  let {
    locked: t,
    pinned: n
  } = e, [a, o] = r.useState(0), [m, g] = r.useState(0), [b, y] = r.useState(0), O = r.useRef(0), [v, E] = r.useState(0), {
    timeToLiveMs: S,
    reappearTimeMs: x
  } = d.ZP.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), s()), I = {
    timeToLiveMs: S,
    reappearTimeMs: x
  }, j = r.useRef(I);
  r.useEffect(() => {
    j.current = I
  }), r.useEffect(() => (O.current = setInterval(() => {
    let e = Date.now();
    g(e), y(t => {
      if (0 === t) return e;
      let n = e - t,
        i = j.current.timeToLiveMs,
        r = i + j.current.reappearTimeMs;
      return n > i ? t + r : t
    })
  }, 100), () => {
    clearInterval(O.current)
  }), []);
  let C = () => {
      o(Date.now()), E(e => e + 1)
    },
    _ = a > 0 && m - a < 1e3,
    Z = (0, u.Yzy)(b > 0 && b < m && m - b < S, {
      from: {
        opacity: 0
      },
      enter: {
        opacity: 1
      },
      leave: {
        opacity: 0
      },
      config: p
    }),
    [N, w] = r.useState(false);
  if (r.useEffect(() => {
      v > 10 && w(true)
    }, [v]), N) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: Z((e, t) => t && (0, i.jsx)(c.animated.div, {
      style: e,
      className: h.clickZoneDebugContainer,
      children: (0, i.jsx)(f.Z, {
        className: l()(h.clickZone, _ && h.clickBackground),
        children: (0, i.jsx)(u.P3F, {
          onClick: C,
          className: h.clickable,
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