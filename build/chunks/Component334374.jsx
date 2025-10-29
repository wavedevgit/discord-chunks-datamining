/** Chunk was on 73726 **/
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
  } = e, s = (0, l.Z)(n.type), [c, u] = i.useState(), [d, p] = i.useState(), [f, h] = i.useState(), m = n.id.split(":").at(false), g = t === m, b = i.useCallback((e, t, n) => {
    var r, i, l;
    let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
    u(null != (r = null == o ? true : o.codec) ? r : "unknown"), p(true === (i = null == o ? true : o.resolution) || 0 === i.width && 0 === i.height ? "unknown" : i.width + " x " + i.height), h((null == o ? true : o.bitrateEstimate) !== true ? (l = o.bitrateEstimate, "".concat((l / 1e3).toFixed(2), " Kbps")) : "unknown")
  }, []);
  return i.useEffect(() => {
    let e = () => b(m, s, g);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [g, m, s, b]), (0, r.jsxs)("div", {
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
        children: c
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
        children: f
      })]
    })]
  })
}