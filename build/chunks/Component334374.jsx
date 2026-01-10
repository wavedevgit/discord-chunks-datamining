/** Chunk was on 69813 **/
/** chunk id: 334374, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./35282.js"), require("./784620.js"), require("./973216.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk414910 = require("./414910.js"),
  Chunk226961 = require("./226961.js"),
  Chunk973994 = require("./973994.js");

function c(e) {
  let {
    currentUserId: t,
    participant: n
  } = e, c = (0, i.Z)(n.type), [s, u] = l.useState(), [d, f] = l.useState(), [p, g] = l.useState(), b = n.id.split(":").at(false), m = t === b, h = l.useCallback((e, t, n) => {
    var r, l, i;
    let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
    u(null != (r = null == o ? true : o.codec) ? r : "unknown"), f(true === (l = null == o ? true : o.resolution) || 0 === l.width && 0 === l.height ? "unknown" : l.width + " x " + l.height), g((null == o ? true : o.bitrateEstimate) !== true ? (i = o.bitrateEstimate, "".concat((i / 1e3).toFixed(2), " Kbps")) : "unknown")
  }, []);
  return l.useEffect(() => {
    let e = () => h(b, c, m);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [m, b, c, h]), (0, r.jsxs)("div", {
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
    }), m && (0, r.jsxs)("div", {
      className: o.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Bitrate Estimate: "
      }), (0, r.jsx)("strong", {
        children: p
      })]
    })]
  })
}