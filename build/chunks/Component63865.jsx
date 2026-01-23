/** Chunk was on 8546 **/
/** chunk id: 63865, original params: t,e,n (module,exports,require) **/
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

function h(t) {
  let {
    transitionState: e,
    onClose: n,
    channelId: h,
    warningId: v,
    senderId: b,
    description: f,
    safetyTipRows: y,
    actionRows: j,
    learnMore: A
  } = t, N = (0, c.bG)([_.Ay], () => _.Ay.getChannelSafetyWarning(h, v));
  return a.useEffect(() => {
    (0, x.mO)(p.HAw.SAFETY_WARNING_MODAL_VIEWED, {
      channelId: h,
      warningId: v,
      senderId: b,
      warningType: null == N ? true : N.type
    }), o.A.increment({
      name: i.K.SAFETY_WARNING_MODAL_VIEW
    })
  }, [h, v, b, N]), (0, s.jsx)(l.ExpressiveModal, {
    onClose: n,
    transitionState: e,
    graphic: {
      type: "image",
      src: T.A
    },
    gradientColor: "blue",
    title: g.intl.string(g.t.lyt43P),
    subtitle: f,
    actions: [],
    children: (0, s.jsxs)(r.BJc, {
      gap: 24,
      children: [(0, s.jsxs)(r.BJc, {
        gap: 8,
        children: [(0, s.jsx)(d.q, {
          children: y
        }), null != A ? A : null]
      }), (0, s.jsxs)(r.BJc, {
        gap: 4,
        children: [(0, s.jsx)(r.Text, {
          variant: "eyebrow",
          color: "text-default",
          children: g.intl.string(g.t.K5FKtc)
        }), (0, s.jsx)(u.Y0, {
          children: j
        })]
      }), (0, s.jsx)(m.A, {
        channelId: h,
        warningId: v,
        senderId: b,
        safetyWarning: N
      })]
    })
  })
}