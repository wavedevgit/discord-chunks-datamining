/** Chunk was on 12416 **/
n.d(t, {
  Z: () => s
}), n(47120), n(301563), n(571269), n(298267);
var r = n(200651),
  i = n(192379),
  l = n(414910),
  a = n(226961),
  o = n(252262);

function s(e) {
  let {
    currentUserId: t,
    participant: n
  } = e, s = (0, l.Z)(n.type), [c, u] = i.useState(), [d, f] = i.useState(), [m, p] = i.useState(), h = n.id.split(":").at(-1), v = t === h, b = i.useCallback((e, t, n) => {
    var r, i, l;
    let o = n ? a.ZP.getOutboundStats(t) : a.ZP.getInboundStats(e, t);
    u(null !== (r = null == o ? void 0 : o.codec) && void 0 !== r ? r : "unknown"), f(void 0 === (i = null == o ? void 0 : o.resolution) || 0 === i.width && 0 === i.height ? "unknown" : i.width + " x " + i.height), p((null == o ? void 0 : o.bitrateEstimate) !== void 0 ? (l = o.bitrateEstimate, "".concat((l / 1e3).toFixed(2), " Kbps")) : "unknown")
  }, []);
  return i.useEffect(() => {
    let e = () => b(h, s, v);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [v, h, s, b]), (0, r.jsxs)("div", {
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
    }), v && (0, r.jsxs)("div", {
      className: o.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Bitrate Estimate: "
      }), (0, r.jsx)("strong", {
        children: m
      })]
    })]
  })
}