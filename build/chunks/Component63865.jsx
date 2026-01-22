/** Chunk was on 8546 **/
/** chunk id: 63865, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk831062 = require("./831062.js"),
  Chunk754302 = require("./754302.jsx"),
  Chunk632738 = require("./632738.jsx"),
  Chunk349435 = require("./349435.js"),
  Chunk665909 = require("./665909.js"),
  Chunk299921 = require("./299921.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk546 = require("./546.js");

function h(e) {
  let {
    transitionState: t,
    onClose: n,
    channelId: h,
    warningId: g,
    senderId: v,
    description: y,
    safetyTipRows: j,
    actionRows: N,
    learnMore: A
  } = e, E = (0, c.bG)([u.Ay], () => u.Ay.getChannelSafetyWarning(h, g));
  return l.useEffect(() => {
    (0, x.mO)(m.HAw.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: h,
      warningId: g,
      senderId: v,
      warningType: null == E ? true : E.type
    }), d.A.increment({
      name: s.K.SAFETY_WARNING_MODAL_VIEW
    })
  }, [h, g, v, E]), (0, a.jsx)(i.ExpressiveModal, {
    onClose: n,
    transitionState: t,
    graphic: {
      type: "image",
      src: T.A
    },
    gradientColor: "blue",
    title: p.intl.string(p.t.lyt43P),
    subtitle: y,
    actions: [],
    children: (0, a.jsxs)(r.BJc, {
      gap: 24,
      children: [(0, a.jsxs)(r.BJc, {
        gap: 8,
        children: [(0, a.jsx)(o.q, {
          children: j
        }), null != A ? A : null]
      }), (0, a.jsxs)(r.BJc, {
        gap: 4,
        children: [(0, a.jsx)(r.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: p.intl.string(p.t.K5FKtc)
        }), (0, a.jsx)(f.Y0, {
          children: N
        })]
      }), (0, a.jsx)(_.A, {
        channelId: h,
        warningId: g,
        senderId: v,
        safetyWarning: E
      })]
    })
  })
}