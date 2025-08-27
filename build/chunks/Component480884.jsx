/** Chunk was on 59385 **/
/** chunk id: 480884, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk286379 = require("./286379.js"),
  Chunk399606 = require("./399606.js"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk797614 = require("./797614.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk636749 = require("./636749.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk308064 = require("./308064.js");

function x(t) {
  let {
    transitionState: n,
    onClose: e,
    channelId: x,
    warningId: h,
    senderId: k,
    description: m,
    safetyTipRows: y,
    actionRows: T,
    learnMore: j
  } = t, N = (0, i.e7)([b.ZP], () => b.ZP.getChannelSafetyWarning(x, h));
  return s.useEffect(() => {
    (0, _.MC)(f.rMx.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: x,
      warningId: h,
      senderId: k,
      warningType: null == N ? true : N.type
    }), l.Z.increment({
      name: c.V.SAFETY_WARNING_MODAL_VIEW
    })
  }, [x, h, k, N]), (0, a.jsx)(o.I, {
    onClose: e,
    transitionState: n,
    graphic: {
      type: "image",
      src: v.Z
    },
    gradientColor: "blue",
    title: p.intl.string(p.t.lyt43N),
    subtitle: m,
    actions: [],
    children: (0, a.jsxs)(r.Kqy, {
      gap: 24,
      children: [(0, a.jsxs)(r.Kqy, {
        gap: 8,
        children: [(0, a.jsx)(d.z, {
          children: y
        }), null != j ? j : null]
      }), (0, a.jsxs)(r.Kqy, {
        gap: 4,
        children: [(0, a.jsx)(r.Text, {
          variant: "eyebrow",
          color: "header-secondary",
          children: p.intl.string(p.t.K5FKtb)
        }), (0, a.jsx)(u.rT, {
          children: T
        })]
      }), (0, a.jsx)(g.Z, {
        channelId: x,
        warningId: h,
        senderId: k,
        safetyWarning: N
      })]
    })
  })
}