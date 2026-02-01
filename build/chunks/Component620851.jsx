/** Chunk was on 71447 **/
/** chunk id: 620851, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => g
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk812729 = require("./812729.js"),
  o = require.n(Chunk812729),
  Chunk353709 = require("./353709.js"),
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

function g(e) {
  let {
    locked: t,
    pinned: n
  } = e, [l, s] = r.useState(0), [g, m] = r.useState(0), [y, A] = r.useState(0), v = r.useRef(0), [b, E] = r.useState(0), {
    timeToLiveMs: O,
    reappearTimeMs: x
  } = d.Ay.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), o()), _ = {
    timeToLiveMs: O,
    reappearTimeMs: x
  }, S = r.useRef(_);
  r.useEffect(() => {
    S.current = _
  }), r.useEffect(() => (v.current = setInterval(() => {
    let e = Date.now();
    m(e), A(t => {
      if (0 === t) return e;
      let n = e - t,
        i = S.current.timeToLiveMs,
        r = i + S.current.reappearTimeMs;
      return n > i ? t + r : t
    })
  }, 100), () => {
    clearInterval(v.current)
  }), []);
  let I = () => {
      s(Date.now()), E(e => e + 1)
    },
    j = l > 0 && g - l < 1e3,
    T = (0, c.pnh)(y > 0 && y < g && g - y < O, {
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
    [C, N] = r.useState(false);
  if (r.useEffect(() => {
      b > 10 && N(true)
    }, [b]), C) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: T((e, t) => t && (0, i.jsx)(u.animated.div, {
      style: e,
      className: p.r2,
      children: (0, i.jsx)(h.A, {
        className: a()(p.VC, j && p.Nd),
        children: (0, i.jsx)(c.DUT, {
          onClick: I,
          className: p.vk,
          children: (0, i.jsxs)(c.Text, {
            variant: "text-md/semibold",
            color: "always-white",
            children: ["Click Me (", b, ")"]
          })
        })
      })
    }))
  })
}