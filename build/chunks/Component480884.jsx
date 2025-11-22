/** Chunk was on 59385 **/
/** chunk id: 480884, original params: n,t,e (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk286379 = require("./286379.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk797614 = require("./797614.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk636749 = require("./636749.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk98201 = require("./98201.js");

function k(n) {
  let {
    transitionState: t,
    onClose: e,
    channelId: k,
    warningId: p,
    senderId: m,
    description: y,
    safetyTipRows: T,
    actionRows: j,
    learnMore: N
  } = n, f = (0, o.e7)([_.ZP], () => _.ZP.getChannelSafetyWarning(k, p));
  return s.useEffect(() => {
    (0, b.MC)(x.rMx.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: k,
      warningId: p,
      senderId: m,
      warningType: null == f ? true : f.type
    }), l.Z.increment({
      name: i.V.SAFETY_WARNING_MODAL_VIEW
    })
  }, [k, p, m, f]), (0, a.jsx)(c.ExpressiveModal, {
    onClose: e,
    transitionState: t,
    graphic: {
      type: "image",
      src: h.Z
    },
    gradientColor: "blue",
    title: v.intl.string(v.t.lyt43P),
    subtitle: y,
    actions: [],
    children: (0, a.jsxs)(r.Kqy, {
      gap: 24,
      children: [(0, a.jsxs)(r.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(d.z, {
          children: T
        }), null != N ? N : null]
      }), (0, a.jsxs)(r.Kqy, {
        gap: 4,
        children: [(0, a.jsx)(r.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: v.intl.string(v.t.K5FKtc)
        }), (0, a.jsx)(u.rT, {
          children: j
        })]
      }), (0, a.jsx)(g.Z, {
        channelId: k,
        warningId: p,
        senderId: m,
        safetyWarning: f
      })]
    })
  })
}