/** Chunk was on 31748 **/
/** chunk id: 654820, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => s
}), require("./896048.js"), require("./747238.js"), require("./134528.js"), require("./947204.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk520698 = require("./520698.js"),
  Chunk412780 = require("./412780.js"),
  Chunk412958 = require("./412958.js");

function s(e) {
  let {
    currentUserId: t,
    participant: n
  } = e, s = (0, i.A)(n.type), [c, u] = l.useState(), [d, f] = l.useState(), [p, g] = l.useState(), m = n.id.split(":").at(false), _ = t === m, h = l.useCallback((e, t, n) => {
    var r, l, i;
    let o = n ? a.Ay.getOutboundStats(t) : a.Ay.getInboundStats(e, t);
    u(null != (r = null == o ? true : o.codec) ? r : "unknown"), f(true === (l = null == o ? true : o.resolution) || 0 === l.width && 0 === l.height ? "unknown" : l.width + " x " + l.height), g((null == o ? true : o.bitrateEstimate) !== true ? (i = o.bitrateEstimate, "".concat((i / 1e3).toFixed(2), " Kbps")) : "unknown")
  }, []);
  return l.useEffect(() => {
    let e = () => h(m, s, _);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [_, m, s, h]), (0, r.jsxs)("div", {
    className: o.w,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("strong", {
        children: "Stream Info"
      })
    }), (0, r.jsxs)("div", {
      className: o.l,
      children: [(0, r.jsx)("span", {
        children: "Video Codec: "
      }), (0, r.jsx)("strong", {
        children: c
      })]
    }), (0, r.jsxs)("div", {
      className: o.l,
      children: [(0, r.jsx)("span", {
        children: "Resolution: "
      }), (0, r.jsx)("strong", {
        children: d
      })]
    }), _ && (0, r.jsxs)("div", {
      className: o.l,
      children: [(0, r.jsx)("span", {
        children: "Bitrate Estimate: "
      }), (0, r.jsx)("strong", {
        children: p
      })]
    })]
  })
}