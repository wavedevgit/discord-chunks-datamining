/** Chunk was on 12416 **/
n.d(t, {
  Z: () => s
}), n(47120), n(301563), n(571269), n(298267);
var r = n(200651),
  l = n(192379),
  i = n(414910),
  o = n(226961),
  a = n(380609);

function s(e) {
  let {
    currentUserId: t,
    participant: n
  } = e, s = (0, i.Z)(n.type), [c, u] = l.useState(), [d, f] = l.useState(), [m, p] = l.useState(), h = n.id.split(":").at(-1), v = t === h, b = l.useCallback((e, t, n) => {
    var r, l, i;
    let a = n ? o.ZP.getOutboundStats(t) : o.ZP.getInboundStats(e, t);
    u(null !== (r = null == a ? void 0 : a.codec) && void 0 !== r ? r : "unknown"), f(void 0 === (l = null == a ? void 0 : a.resolution) || 0 === l.width && 0 === l.height ? "unknown" : l.width + " x " + l.height), p((null == a ? void 0 : a.bitrateEstimate) !== void 0 ? (i = a.bitrateEstimate, "".concat((i / 1e3).toFixed(2), " Kbps")) : "unknown")
  }, []);
  return l.useEffect(() => {
    let e = () => b(h, s, v);
    e();
    let t = setInterval(e, 1e3);
    return () => clearInterval(t)
  }, [v, h, s, b]), (0, r.jsxs)("div", {
    className: a.streamInfoContainer,
    children: [(0, r.jsx)("div", {
      children: (0, r.jsx)("strong", {
        children: "Stream Info"
      })
    }), (0, r.jsxs)("div", {
      className: a.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Video Codec: "
      }), (0, r.jsx)("strong", {
        children: c
      })]
    }), (0, r.jsxs)("div", {
      className: a.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Resolution: "
      }), (0, r.jsx)("strong", {
        children: d
      })]
    }), v && (0, r.jsxs)("div", {
      className: a.infoRow,
      children: [(0, r.jsx)("span", {
        children: "Bitrate Estimate: "
      }), (0, r.jsx)("strong", {
        children: m
      })]
    })]
  })
}