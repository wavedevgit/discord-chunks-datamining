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
  } = e, x = (0, b.E4)(), j = r.useCallback(() => {
    (0, p.T)(t, [v])
  }, [t, v]), O = e => {
    o.Z.updateChannelOverrideSettings(null, t, {
      muted: true
    }, g.ZB.Muted), c.Z.showMuteSuccessToast(_, t), (0, f.qc)({
      channelId: t,
      warningId: v,
      senderId: _,
      warningType: h.pj.LIKELY_ATO,
      cta: e
    }), j()
  };
  return r.useEffect(() => {
    (0, f.MC)(y.rMx.SAFETY_WARNING_VIEWED, {
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
    header: C.intl.string(C.t.R8UsiI),
    description: C.intl.string(C.t.lI8nQl),
    onDismiss: j,
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
              warningId: v,
              senderId: _,
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
                  O(f.NM.USER_MODAL_MUTE), l()
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
                  children: C.intl.format(C.t.UkH122, {
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
      text: C.intl.string(C.t.ftIK2A),
      onClick: () => O(f.NM.USER_BANNER_MUTE)
    }]
  })
}