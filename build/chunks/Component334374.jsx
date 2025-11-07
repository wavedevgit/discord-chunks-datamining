/** Chunk was on 86642 **/
/** chunk id: 334374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => s
}), require("./388685.js"), require("./35282.js"), require("./784620.js"), require("./973216.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk414910 = require("./414910.js"),
  Chunk226961 = require("./226961.js"),
  Chunk447661 = require("./447661.js");

function s(e) {
  let {
    currentUserId: t,
    participant: n
  } = e, s = (0, l.Z)(n.type), [c, u] = r.useState(), [d, p] = r.useState(), [f, h] = r.useState(), m = n.id.split(":").at(false), g = t === m, b = r.useCallback((e, t, n) => {
    var i, r, l;
    let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
    u(null != (i = null == o ? true : o.codec) ? i : "unknown"), p(true === (r = null == o ? true : o.resolution) || 0 === r.width && 0 === r.height ? "unknown" : r.width + " x " + r.height), h((null == o ? true : o.bitrateEstimate) !== true ? (l = o.bitrateEstimate, "".concat((l / 1e3).toFixed(2), " Kbps")) : "unknown")
  }, []);
  return r.useEffect(() => {
    let e = () => b(m, s, g);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [g, m, s, b]), (0, i.jsxs)("div", {
    className: o.streamInfoContainer,
    children: [(0, i.jsx)("div", {
      children: (0, i.jsx)("strong", {
        children: "Stream Info"
      })
    }), (0, i.jsxs)("div", {
      className: o.infoRow,
      children: [(0, i.jsx)("span", {
        children: "Video Codec: "
      }), (0, i.jsx)("strong", {
        children: c
      })]
    }), (0, i.jsxs)("div", {
      className: o.infoRow,
      children: [(0, i.jsx)("span", {
        children: "Resolution: "
      }), (0, i.jsx)("strong", {
        children: d
      })]
    }), g && (0, i.jsxs)("div", {
      className: o.infoRow,
      children: [(0, i.jsx)("span", {
        children: "Bitrate Estimate: "
      }), (0, i.jsx)("strong", {
        children: f
      })]
    })]
  })
}