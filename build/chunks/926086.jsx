/** Chunk was on 89298 **/
/** chunk id: 926086, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./388685.js"), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk348327 = require("./348327.js"),
  s = require.n(Chunk348327),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk667142 = require("./667142.js"),
  Chunk333031 = require("./333031.jsx"),
  Chunk86654 = require("./86654.js");
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
    reappearTimeMs: x
  } = d.ZP.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), s()), S = {
    timeToLiveMs: _,
    reappearTimeMs: x
  }, I = r.useRef(S);
  r.useEffect(() => {
    I.current = S
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
  return t && !n ? null : <i.Fragment>{N((e, t) => t && (0, i.jsx)(c.animated.div, {
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
    }))}</i.Fragment>
}