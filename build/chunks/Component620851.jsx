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
  s = require.n(Chunk812729),
  Chunk92674 = require("./92674.js"),
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
  } = e, [l, o] = r.useState(0), [g, m] = r.useState(0), [A, y] = r.useState(0), O = r.useRef(0), [v, b] = r.useState(0), {
    timeToLiveMs: E,
    reappearTimeMs: _
  } = d.Ay.useState(e => ({
    timeToLiveMs: e.timeToLiveMs,
    reappearTimeMs: e.reappearTimeMs
  }), s()), S = {
    timeToLiveMs: E,
    reappearTimeMs: _
  }, x = r.useRef(S);
  r.useEffect(() => {
    x.current = S
  }), r.useEffect(() => (O.current = setInterval(() => {
    let e = Date.now();
    m(e), y(t => {
      if (0 === t) return e;
      let n = e - t,
        i = x.current.timeToLiveMs,
        r = i + x.current.reappearTimeMs;
      return n > i ? t + r : t
    })
  }, 100), () => {
    clearInterval(O.current)
  }), []);
  let I = () => {
      o(Date.now()), b(e => e + 1)
    },
    j = l > 0 && g - l < 1e3,
    C = (0, c.pnh)(A > 0 && A < g && g - A < E, {
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
    [T, w] = r.useState(false);
  if (r.useEffect(() => {
      v > 10 && w(true)
    }, [v]), T) throw Error("ClickZoneDebugWidget crashed, too many clicks");
  return t && !n ? null : (0, i.jsx)(i.Fragment, {
    children: C((e, t) => t && (0, i.jsx)(u.animated.div, {
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
            children: ["Click Me (", v, ")"]
          })
        })
      })
    }))
  })
}