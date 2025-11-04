/** Chunk was on 69283 **/
/** chunk id: 281200, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk619307 = require("./619307.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk308982 = require("./308982.js"),
  Chunk868530 = require("./868530.js");
let u = [{
    label: "No Timer",
    value: null
  }, {
    label: "30 seconds",
    value: 30
  }, {
    label: "60 seconds",
    value: 60
  }, {
    label: "90 seconds",
    value: 90
  }, {
    label: "2 minutes",
    value: 120
  }, {
    label: "3 minutes",
    value: 180
  }, {
    label: "4 minutes",
    value: 240
  }, {
    label: "5 minutes",
    value: 300
  }],
  s = Chunk308982.kg.getState();

function d(e) {
  let {
    channelId: t,
    showCountdown: n,
    shuffling: d = false
  } = e, {
    timerDuration: _
  } = (0, o.E1)(t), [m, f] = a.useState(null), h = a.useCallback(e => {
    s.setTimerDuration(t, e)
  }, [t]);
  a.useEffect(() => {
    n && null != _ && null == m && f(_)
  }, [n, _, m]);
  let g = a.useRef(d);
  return (a.useEffect(() => {
    d && !g.current && null != _ && f(_), g.current = d
  }, [d, _]), a.useEffect(() => {
    if (!n || d) return;
    let e = setInterval(() => {
      f(e => null == e || e <= 1 ? 0 : e - 1)
    }, 1e3);
    return () => clearInterval(e)
  }, [n, d]), n && null != _ && null != m) ? (0, r.jsx)("div", {
    className: c.container,
    children: (0, r.jsx)(l.Heading, {
      variant: "heading-xl/semibold",
      children: (e => {
        let t = Math.floor(e / 60);
        return "".concat(t, ":").concat((e % 60).toString().padStart(2, "0"))
      })(m)
    })
  }) : (0, r.jsx)("div", {
    className: c.container,
    children: !n && (0, r.jsx)(i.q4, {
      value: _,
      onChange: h,
      options: u,
      closeOnSelect: true
    })
  })
}