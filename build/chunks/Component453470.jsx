/** Chunk was on 34740 **/
/** chunk id: 453470, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  M: () => v
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

function v(e) {
  let {
    channelId: t,
    warningId: v,
    senderId: _
  } = e, O = (0, b.E4)(), x = r.useCallback(() => {
    (0, p.T)(t, [v])
  }, [t, v]), E = e => {
    o.Z.updateChannelOverrideSettings(null, t, {
      muted: true
    }, g.ZB.Muted), c.Z.showMuteSuccessToast(_, t), (0, f.qc)({
      channelId: t,
      warningId: v,
      senderId: _,
      warningType: h.pj.LIKELY_ATO,
      cta: e
    }), x()
  };
  return r.useEffect(() => {
    (0, f.MC)(C.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: v,
      senderId: _,
      warningType: h.pj.LIKELY_ATO
    }), s.Z.increment({
      name: l.V.SAFETY_WARNING_VIEW
    })
  }, [t, v, _]), (0, i.jsx)(m.Q, {
    channelId: t,
    warningId: v,
    senderId: _,
    warningType: h.pj.LIKELY_ATO,
    header: y.intl.string(y.t.R8UsiI),
    description: y.intl.string(y.t.lI8nQl),
    onDismiss: x,
    buttons: [{
      text: y.intl.string(y.t.tC1pvL),
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
              warningId: v,
              senderId: _,
              description: y.intl.string(y.t["/uid3p"]),
              safetyTipRows: O.map((e, t) => (0, i.jsx)(u.q, {
                listType: "numbered",
                index: t,
                title: e.title,
                description: e.description
              }, t)),
              actionRows: [(0, i.jsx)(d.JZ, {
                title: y.intl.string(y.t.ftIK2A),
                description: y.intl.string(y.t.w2ve0t),
                buttonText: y.intl.string(y.t.ftIK2A),
                onButtonPress: () => {
                  E(f.NM.USER_MODAL_MUTE), l()
                }
              }, "likely-ato-mute")],
              learnMore: (0, i.jsx)(a.P3F, {
                onClick: () => (0, f.qc)({
                  channelId: t,
                  warningId: v,
                  senderId: _,
                  warningType: h.pj.LIKELY_ATO,
                  cta: f.NM.USER_MODAL_LEARN_MORE
                }),
                children: (0, i.jsx)(a.Heading, {
                  variant: "heading-sm/medium",
                  color: "text-link",
                  children: y.intl.format(y.t.UkH122, {
                    learnMoreLink: b.D8
                  })
                })
              })
            })
          }
        }), (0, f.qc)({
          channelId: t,
          warningId: v,
          senderId: _,
          warningType: h.pj.LIKELY_ATO,
          cta: f.NM.OPEN_MORE_TIPS
        })
      }
    }, {
      text: y.intl.string(y.t.ftIK2A),
      onClick: () => E(f.NM.USER_BANNER_MUTE)
    }]
  })
}