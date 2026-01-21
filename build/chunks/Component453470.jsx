/** Chunk was on 82124 **/
/** chunk id: 453470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => O
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function O(e) {
  let {
    channelId: t,
    warningId: O,
    senderId: j
  } = e, x = (0, b.E4)(), C = i.useCallback(() => {
    (0, p.T)(t, [O])
  }, [t, O]), E = e => {
    o.Z.updateChannelOverrideSettings(null, t, {
      muted: true
    }, m.ZB.Muted), c.Z.showMuteSuccessToast(j, t), (0, h.qc)({
      channelId: t,
      warningId: O,
      senderId: j,
      warningType: f.pj.LIKELY_ATO,
      cta: e
    }), C()
  };
  return i.useEffect(() => {
    (0, h.MC)(y.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: O,
      senderId: j,
      warningType: f.pj.LIKELY_ATO
    }), s.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, [t, O, j]), (0, r.jsx)(g.Q, {
    channelId: t,
    warningId: O,
    senderId: j,
    warningType: f.pj.LIKELY_ATO,
    header: v.intl.string(v.t.R8UsiI),
    description: v.intl.string(v.t.lI8nQl),
    onDismiss: C,
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
              warningId: O,
              senderId: j,
              description: v.intl.string(v.t["/uid3p"]),
              safetyTipRows: x.map((e, t) => (0, r.jsx)(u.q, {
                listType: "numbered",
                index: t,
                title: e.title,
                description: e.description
              }, t)),
              actionRows: [(0, r.jsx)(d.JZ, {
                title: v.intl.string(v.t.ftIK2A),
                description: v.intl.string(v.t.w2ve0t),
                buttonText: v.intl.string(v.t.ftIK2A),
                onButtonPress: () => {
                  E(h.NM.USER_MODAL_MUTE), l()
                }
              }, "likely-ato-mute")],
              learnMore: (0, r.jsx)(a.P3F, {
                onClick: () => (0, h.qc)({
                  channelId: t,
                  warningId: O,
                  senderId: j,
                  warningType: f.pj.LIKELY_ATO,
                  cta: h.NM.USER_MODAL_LEARN_MORE
                }),
                children: (0, r.jsx)(a.Heading, {
                  variant: "heading-sm/medium",
                  color: "text-link",
                  children: v.intl.format(v.t.UkH122, {
                    learnMoreLink: b.D8
                  })
                })
              })
            })
          }
        }), (0, h.qc)({
          channelId: t,
          warningId: O,
          senderId: j,
          warningType: f.pj.LIKELY_ATO,
          cta: h.NM.OPEN_MORE_TIPS
        })
      }
    }, {
      text: v.intl.string(v.t.ftIK2A),
      onClick: () => E(h.NM.USER_BANNER_MUTE)
    }]
  })
}