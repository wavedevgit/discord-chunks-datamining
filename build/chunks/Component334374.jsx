/** Chunk was on 47387 **/
/** chunk id: 334374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./35282.js"), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk414910 = require("./414910.js"),
  Chunk226961 = require("./226961.js"),
  Chunk447661 = require("./447661.js");

function u(e) {
  let {
    currentUserId: t,
    participant: n
  } = e, u = (0, i.Z)(n.type), [s, c] = l.useState(), [d, f] = l.useState(), [p, m] = l.useState(), E = n.id.split(":").at(false), g = t === E, b = l.useCallback((e, t, n) => {
    var r, l, i;
    let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
    c(null != (r = null == o ? true : o.codec) ? r : "unknown"), f(true === (l = null == o ? true : o.resolution) || 0 === l.width && 0 === l.height ? "unknown" : l.width + " x " + l.height), m((null == o ? true : o.bitrateEstimate) !== true ? (i = o.bitrateEstimate, "".concat((i / 1e3).toFixed(2), " Kbps")) : "unknown")
  }, []);
  return l.useEffect(() => {
    let e = () => b(E, u, g);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [g, E, u, b]), (0, r.jsxs)("div", {
    className: o.streamInfoContainer,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("strong", {
        children: "Stream Info"
      })
    }), (0, r.jsxs)("div", {
      className: o.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Video Codec: "
      }), (0, r.jsx)("strong", {
        children: s
      })]
    }), (0, r.jsxs)("div", {
      className: o.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Resolution: "
      }), (0, r.jsx)("strong", {
        children: d
      })]
    }), g && (0, r.jsxs)("div", {
      className: o.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Bitrate Estimate: "
      }), (0, r.jsx)("strong", {
        children: p
      })]
    })]
  })
}