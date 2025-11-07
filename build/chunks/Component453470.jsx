/** Chunk was on 86642 **/
/** chunk id: 453470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => _
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
  Chunk870991 = require("./870991.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function _(e) {
  let {
    channelId: t,
    warningId: _,
    senderId: v
  } = e, x = (0, b.E4)(), O = r.useCallback(() => {
    (0, p.T)(t, [_])
  }, [t, _]), E = e => {
    o.Z.updateChannelOverrideSettings(null, t, {
      muted: true
    }, g.ZB.Muted), c.Z.showMuteSuccessToast(v, t), (0, h.qc)({
      channelId: t,
      warningId: _,
      senderId: v,
      warningType: f.pj.LIKELY_ATO,
      cta: e
    }), O()
  };
  return r.useEffect(() => {
    (0, h.MC)(y.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: _,
      senderId: v,
      warningType: f.pj.LIKELY_ATO
    }), s.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, [t, _, v]), (0, i.jsx)(m.Q, {
    channelId: t,
    warningId: _,
    senderId: v,
    warningType: f.pj.LIKELY_ATO,
    header: C.intl.string(C.t.R8UsiI),
    description: C.intl.string(C.t.lI8nQl),
    onDismiss: O,
    buttons: [{
      text: C.intl.string(C.t.tC1pvL),
      variant: "primary",
      onClick: () => {
        (0, a.ZDy)(async () => {
          let {
            default: e
          } = await n.e("59385").then(n.bind(n, 480884));
          return n => {
            let {
              transitionState: r,
              onClose: l
            } = n;
            return (0, i.jsx)(e, {
              transitionState: r,
              onClose: l,
              channelId: t,
              warningId: _,
              senderId: v,
              description: C.intl.string(C.t["/uid3p"]),
              safetyTipRows: x.map((e, t) => (0, i.jsx)(u.q, {
                listType: "numbered",
                index: t,
                title: e.title,
                description: e.description
              }, t)),
              actionRows: [(0, i.jsx)(d.JZ, {
                title: C.intl.string(C.t.ftIK2A),
                description: C.intl.string(C.t.w2ve0t),
                buttonText: C.intl.string(C.t.ftIK2A),
                onButtonPress: () => {
                  E(h.NM.USER_MODAL_MUTE), l()
                }
              }, "likely-ato-mute")],
              learnMore: (0, i.jsx)(a.P3F, {
                onClick: () => (0, h.qc)({
                  channelId: t,
                  warningId: _,
                  senderId: v,
                  warningType: f.pj.LIKELY_ATO,
                  cta: h.NM.USER_MODAL_LEARN_MORE
                }),
                children: (0, i.jsx)(a.Heading, {
                  variant: "heading-sm/medium",
                  color: "text-link",
                  children: C.intl.format(C.t.UkH122, {
                    learnMoreLink: b.D8
                  })
                })
              })
            })
          }
        }), (0, h.qc)({
          channelId: t,
          warningId: _,
          senderId: v,
          warningType: f.pj.LIKELY_ATO,
          cta: h.NM.OPEN_MORE_TIPS
        })
      }
    }, {
      text: C.intl.string(C.t.ftIK2A),
      onClick: () => E(h.NM.USER_BANNER_MUTE)
    }]
  })
}