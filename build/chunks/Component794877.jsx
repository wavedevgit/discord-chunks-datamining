/** Chunk was on 90946 **/
/** chunk id: 794877, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => a
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
let l = {
    anger: "#ef4444",
    calm: "#60a5fa",
    disgust: "#84cc16",
    fear: "#a78bfa",
    happy: "#fbbf24",
    neutral: "#94a3b8",
    sad: "#06b6d4",
    surprised: "#f472b6"
  },
  o = 490,
  r = 240;

function a(e) {
  var t, n;
  let {
    emotionHistory: a
  } = e;
  if (0 === a.length) return null;
  let s = Object.keys(null != (n = null == (t = a[0]) ? true : t.emotions) ? n : {}),
    c = a.map(e => e.timestamp),
    d = Math.min(...c),
    x = Math.max(...c),
    h = x - d != 0 ? x - d : 1,
    m = e => 60 + (e - d) / h * o,
    u = e => 20 + r - e * r,
    y = Math.min(5, a.length),
    f = Array.from({
      length: y
    }, (e, t) => {
      let n = Math.floor(t * (a.length - 1) / (y - 1)),
        i = a[n];
      if (null == i) return null;
      let l = ((i.timestamp - d) / 1e3).toFixed(1);
      return {
        x: m(i.timestamp),
        label: "".concat(l, "s")
      }
    }).filter(e => null !== e),
    b = [0, .25, .5, .75, 1].map(e => ({
      y: u(e),
      label: e.toFixed(2)
    }));
  return (0, i.jsx)("div", {
    style: {
      overflowX: "auto",
      marginTop: "12px"
    },
    children: (0, i.jsxs)("svg", {
      width: 700,
      height: 300,
      style: {
        display: "block"
      },
      children: [(0, i.jsx)("rect", {
        x: 60,
        y: 20,
        width: o,
        height: r,
        fill: "#18191c",
        stroke: "#2e3035",
        strokeWidth: 1
      }), b.map((e, t) => {
        let {
          y: n
        } = e;
        return (0, i.jsx)("line", {
          x1: 60,
          y1: n,
          x2: 60 + o,
          y2: n,
          stroke: "#2e3035",
          strokeWidth: 1
        }, "grid-y-".concat(t))
      }), s.map(e => {
        var t;
        return (0, i.jsx)("path", {
          d: (e => {
            let t = a.map(t => {
              var n;
              return {
                x: m(t.timestamp),
                y: u(null != (n = t.emotions[e]) ? n : 0)
              }
            });
            return 0 === t.length ? "" : t.map((e, t) => 0 === t ? "M ".concat(e.x, ",").concat(e.y) : "L ".concat(e.x, ",").concat(e.y)).join(" ")
          })(e),
          fill: "none",
          stroke: null != (t = l[e]) ? t : "#94a3b8",
          strokeWidth: 2,
          strokeLinejoin: "round",
          strokeLinecap: "round"
        }, e)
      }), (0, i.jsx)("line", {
        x1: 60,
        y1: 20,
        x2: 60,
        y2: 20 + r,
        stroke: "#b5bac1",
        strokeWidth: 2
      }), (0, i.jsx)("line", {
        x1: 60,
        y1: 20 + r,
        x2: 60 + o,
        y2: 20 + r,
        stroke: "#b5bac1",
        strokeWidth: 2
      }), b.map((e, t) => {
        let {
          y: n,
          label: l
        } = e;
        return (0, i.jsx)("text", {
          x: 50,
          y: n + 4,
          textAnchor: "end",
          fill: "#b5bac1",
          fontSize: 12,
          fontFamily: "monospace",
          children: l
        }, "y-label-".concat(t))
      }), f.map((e, t) => {
        let {
          x: n,
          label: l
        } = e;
        return (0, i.jsx)("text", {
          x: n,
          y: 20 + r + 20,
          textAnchor: "middle",
          fill: "#b5bac1",
          fontSize: 12,
          fontFamily: "monospace",
          children: l
        }, "x-label-".concat(t))
      }), (0, i.jsx)("text", {
        x: 15,
        y: 20 + r / 2,
        textAnchor: "middle",
        fill: "#b5bac1",
        fontSize: 12,
        fontFamily: "monospace",
        transform: "rotate(-90, ".concat(15, ", ").concat(20 + r / 2, ")"),
        children: "Probability"
      }), (0, i.jsx)("text", {
        x: 60 + o / 2,
        y: 295,
        textAnchor: "middle",
        fill: "#b5bac1",
        fontSize: 12,
        fontFamily: "monospace",
        children: "Time (seconds)"
      }), s.map((e, t) => {
        var n;
        let r = 60 + o + 10,
          a = 20 + 25 * t;
        return (0, i.jsxs)("g", {
          children: [(0, i.jsx)("line", {
            x1: r,
            y1: a,
            x2: r + 30,
            y2: a,
            stroke: null != (n = l[e]) ? n : "#94a3b8",
            strokeWidth: 2
          }), (0, i.jsx)("text", {
            x: r + 35,
            y: a + 4,
            fill: "#b5bac1",
            fontSize: 12,
            fontFamily: "monospace",
            children: e
          })]
        }, "legend-".concat(e))
      })]
    })
  })
}