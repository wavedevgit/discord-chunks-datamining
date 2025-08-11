/** Chunk was on web.js **/
/** chunk id: 334374, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => l
}), require("./388685.js"), require("./35282.js"), require("./784620.js"), require("./973216.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk414910 = require("./414910.js"),
  Chunk226961 = require("./226961.js"),
  Chunk422636 = require("./422636.js");

function l(e) {
  let {
    currentUserId: t,
    participant: n
  } = e, l = (0, o.Z)(n.type), [c, u] = i.useState(), [d, f] = i.useState(), [_, p] = i.useState(), h = n.id.split(":").at(false), m = t === h;

  function g(e) {
    return "".concat((e / 1e3).toFixed(2), " Kbps")
  }

  function E(e) {
    return true === e || 0 === e.width && 0 === e.height ? "unknown" : e.width + " x " + e.height
  }
  let b = i.useCallback((e, t, n) => {
    var r;
    let i = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
    u(null != (r = null == i ? true : i.codec) ? r : "unknown"), f(E(null == i ? true : i.resolution)), p((null == i ? true : i.bitrateEstimate) !== true ? g(i.bitrateEstimate) : "unknown")
  }, []);
  return i.useEffect(() => {
    let e = () => b(h, l, m);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [m, h, l, b]), (0, r.jsxs)("div", {
    className: s.streamInfoContainer,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("strong", {
        children: "Stream Info"
      })
    }), (0, r.jsxs)("div", {
      className: s.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Video Codec: "
      }), (0, r.jsx)("strong", {
        children: c
      })]
    }), (0, r.jsxs)("div", {
      className: s.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Resolution: "
      }), (0, r.jsx)("strong", {
        children: d
      })]
    }), m && (0, r.jsxs)("div", {
      className: s.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Bitrate Estimate: "
      }), (0, r.jsx)("strong", {
        children: _
      })]
    })]
  })
}