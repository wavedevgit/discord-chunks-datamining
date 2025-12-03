/** Chunk was on 59385 **/
/** chunk id: 480884, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => p
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

function p(t) {
  let {
    transitionState: n,
    onClose: e,
    channelId: p,
    warningId: h,
    senderId: m,
    description: y,
    safetyTipRows: T,
    actionRows: f,
    learnMore: j
  } = t, N = (0, o.e7)([_.ZP], () => _.ZP.getChannelSafetyWarning(p, h));
  return s.useEffect(() => {
    (0, b.MC)(x.rMx.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: p,
      warningId: h,
      senderId: m,
      warningType: null == N ? true : N.type
    }), l.Z.increment({
      name: i.V.SAFETY_WARNING_MODAL_VIEW
    })
  }, [p, h, m, N]), (0, a.jsx)(c.ExpressiveModal, {
    onClose: e,
    transitionState: n,
    graphic: {
      type: "image",
      src: k.Z
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
        }), null != j ? j : null]
      }), (0, a.jsxs)(r.Kqy, {
        gap: 4,
        children: [(0, a.jsx)(r.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: v.intl.string(v.t.K5FKtc)
        }), (0, a.jsx)(u.rT, {
          children: f
        })]
      }), (0, a.jsx)(g.Z, {
        channelId: p,
        warningId: h,
        senderId: m,
        safetyWarning: N
      })]
    })
  })
}