/** Chunk was on 50751 **/
/** chunk id: 926086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk358458 = require("./358458.js"),
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
  } = e, [l, a] = r.useState(0), [m, g] = r.useState(0), [y, O] = r.useState(0), E = r.useRef(0), [v, S] = r.useState(0), {
    timeToLiveMs: b,
    reappearTimeMs: x
  } = d.ZP.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), s()), j = {
    timeToLiveMs: b,
    reappearTimeMs: x
  }, I = r.useRef(j);
  r.useEffect(() => {
    I.current = j
  }), r.useEffect(() => (E.current = setInterval(() => {
    let e = Date.now();
    g(e), O(t => {
      if (0 === t) return e;
      let n = e - t,
        i = I.current.timeToLiveMs,
        r = i + I.current.reappearTimeMs;
      return n > i ? t + r : t
    })
  }, 100), () => {
    clearInterval(E.current)
  }), []);
  let C = () => {
      a(Date.now()), S(e => e + 1)
    },
    Z = l > 0 && m - l < 1e3,
    N = (0, c.Yzy)(y > 0 && y < m && m - y < b, {
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
    [w, T] = r.useState(false);
  if (r.useEffect(() => {
      v > 10 && T(true)
    }, [v]), w) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: N((e, t) => t && (0, i.jsx)(u.animated.div, {
      style: e,
      className: h.clickZoneDebugContainer,
      children: (0, i.jsx)(p.Z, {
        className: o()(h.clickZone, Z && h.clickBackground),
        children: (0, i.jsx)(c.P3F, {
          onClick: C,
          className: h.clickable,
          children: (0, i.jsxs)(c.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            children: ["Click Me (", v, ")"]
          })
        })
      })
    }))
  })
}