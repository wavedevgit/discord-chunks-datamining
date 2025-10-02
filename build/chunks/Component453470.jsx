/** Chunk was on 9665 **/
/** chunk id: 453470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => x
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk286379 = require("./286379.js"),
  Chunk481060 = require("./481060.js"),
  Chunk87051 = require("./87051.js"),
  Chunk797614 = require("./797614.js"),
  Chunk681678 = require("./681678.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk378298 = require("./378298.js"),
  Chunk359119 = require("./359119.js"),
  Chunk473092 = require("./473092.js"),
  Chunk177342 = require("./177342.jsx"),
  Chunk621600 = require("./621600.js"),
  Chunk276060 = require("./276060.js"),
  Chunk870991 = require("./870991.js"),
  Chunk981631 = require("./981631.js"),
  Chunk134612 = require("./134612.js"),
  Chunk388032 = require("./388032.jsx");

function x(e) {
  let {
    channelId: t,
    warningId: x,
    senderId: O
  } = e, j = (0, y.E4)(), E = i.useCallback(() => {
    (0, p.T)(t, [x])
  }, [t, x]), S = (0, b.t)({
    location: _.zr
  }), P = e => {
    o.Z.updateChannelOverrideSettings(null, t, {
      muted: true
    }, g.ZB.Muted), c.Z.showMuteSuccessToast(O, t), (0, f.qc)({
      channelId: t,
      warningId: x,
      senderId: O,
      warningType: h.pj.LIKELY_ATO,
      cta: e
    }), E()
  };
  return (i.useEffect(() => {
    S && ((0, f.MC)(C.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: x,
      senderId: O,
      warningType: h.pj.LIKELY_ATO
    }), s.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    }))
  }, [t, x, O, S]), S) ? (0, r.jsx)(m.Q, {
    channelId: t,
    warningId: x,
    senderId: O,
    warningType: h.pj.LIKELY_ATO,
    header: v.intl.string(v.t.R8UsiI),
    description: v.intl.string(v.t.lI8nQk),
    onDismiss: E,
    buttons: [{
      text: v.intl.string(v.t.tC1pvL),
      variant: "primary",
      onClick: () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("59385").then(n.bind(n, 480884));
          return n => {
            let {
              transitionState: i,
              onClose: l
            } = n;
            return (0, r.jsx)(e, {
              transitionState: i,
              onClose: l,
              channelId: t,
              warningId: x,
              senderId: O,
              description: v.intl.string(v.t["/uid3t"]),
              safetyTipRows: j.map((e, t) => (0, r.jsx)(u.q, {
                listType: "numbered",
                index: t,
                title: e.title,
                description: e.description
              }, t)),
              actionRows: [(0, r.jsx)(d.JZ, {
                title: v.intl.string(v.t.ftIK2N),
                description: v.intl.string(v.t.w2ve0t),
                buttonText: v.intl.string(v.t.ftIK2N),
                onButtonPress: () => {
                  P(f.NM.USER_MODAL_MUTE), l()
                }
              }, "likely-ato-mute")],
              learnMore: (0, r.jsx)(a.P3F, {
                onClick: () => (0, f.qc)({
                  channelId: t,
                  warningId: x,
                  senderId: O,
                  warningType: h.pj.LIKELY_ATO,
                  cta: f.NM.USER_MODAL_LEARN_MORE
                }),
                children: (0, r.jsx)(a.X6q, {
                  variant: "heading-sm/medium",
                  color: "text-link",
                  children: v.intl.format(v.t.UkH129, {
                    learnMoreLink: y.D8
                  })
                })
              })
            })
          }
        }), (0, f.qc)({
          channelId: t,
          warningId: x,
          senderId: O,
          warningType: h.pj.LIKELY_ATO,
          cta: f.NM.OPEN_MORE_TIPS
        })
      }
    }, {
      text: v.intl.string(v.t.ftIK2N),
      onClick: () => P(f.NM.USER_BANNER_MUTE)
    }]
  }) : null
}