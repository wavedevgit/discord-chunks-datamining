/** Chunk was on 31748 **/
/** chunk id: 654820, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
}), require("./896048.js"), require("./747238.js"), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk520698 = require("./520698.js"),
  Chunk412780 = require("./412780.js"),
  Chunk412958 = require("./412958.js");

function o(e) {
  let {
    currentUserId: t,
    participant: n
  } = e, o = (0, i.A)(n.type), [c, u] = r.useState(), [d, f] = r.useState(), [p, b] = r.useState(), g = n.id.split(":").at(false), m = t === g, h = r.useCallback((e, t, n) => {
    var l, r, i;
    let s = n ? a.Ay.getOutboundStats(t) : a.Ay.getInboundStats(e, t);
    u(null != (l = null == s ? true : s.codec) ? l : "unknown"), f(true === (r = null == s ? true : s.resolution) || 0 === r.width && 0 === r.height ? "unknown" : r.width + " x " + r.height), b((null == s ? true : s.bitrateEstimate) !== true ? (i = s.bitrateEstimate, "".concat((i / 1e3).toFixed(2), " Kbps")) : "unknown")
  }, []);
  return r.useEffect(() => {
    let e = () => h(g, o, m);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [m, g, o, h]), (0, l.jsxs)("div", {
    className: s.w,
    children: [(0, l.jsx)("div", {
      children: (0, l.jsx)("strong", {
        children: "Stream Info"
      })
    }), (0, l.jsxs)("div", {
      className: s.l,
      children: [(0, l.jsx)("span", {
        children: "Video Codec: "
      }), (0, l.jsx)("strong", {
        children: c
      })]
    }), (0, l.jsxs)("div", {
      className: s.l,
      children: [(0, l.jsx)("span", {
        children: "Resolution: "
      }), (0, l.jsx)("strong", {
        children: d
      })]
    }), m && (0, l.jsxs)("div", {
      className: s.l,
      children: [(0, l.jsx)("span", {
        children: "Bitrate Estimate: "
      }), (0, l.jsx)("strong", {
        children: p
      })]
    })]
  })
}