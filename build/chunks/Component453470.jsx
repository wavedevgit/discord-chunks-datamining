/** Chunk was on web.js **/
/** chunk id: 453470, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  M: () => v
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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

function v(e) {
  let {
    channelId: t,
    warningId: v,
    senderId: I
  } = e, T = (0, E.E4)(), S = i.useCallback(() => {
    (0, f.T)(t, [v])
  }, [t, v]), A = (0, g.t)({
    location: y.zr
  }), N = () => {
    R(), (0, p.qc)({
      channelId: t,
      warningId: v,
      senderId: I,
      warningType: _.pj.LIKELY_ATO,
      cta: p.NM.OPEN_MORE_TIPS
    })
  }, C = e => {
    s.Z.updateChannelOverrideSettings(null, t, {
      muted: true
    }, m.ZB.Muted), c.Z.showMuteSuccessToast(I, t), (0, p.qc)({
      channelId: t,
      warningId: v,
      senderId: I,
      warningType: _.pj.LIKELY_ATO,
      cta: e
    }), S()
  }, R = () => {
    (0, a.ZDy)(async () => {
      let {
        default: e
      } = await n.e("59385").then(n.bind(n, 480884));
      return n => {
        let {
          transitionState: i,
          onClose: o
        } = n;
        return (0, r.jsx)(e, {
          transitionState: i,
          onClose: o,
          channelId: t,
          warningId: v,
          senderId: I,
          description: O.intl.string(O.t["/uid3t"]),
          safetyTipRows: T.map((e, t) => (0, r.jsx)(u.q, {
            listType: "numbered",
            index: t,
            title: e.title,
            description: e.description
          }, t)),
          actionRows: [(0, r.jsx)(d.JZ, {
            title: O.intl.string(O.t.ftIK2N),
            description: O.intl.string(O.t.w2ve0t),
            buttonText: O.intl.string(O.t.ftIK2N),
            onButtonPress: () => {
              C(p.NM.USER_MODAL_MUTE), o()
            }
          }, "likely-ato-mute")],
          learnMore: (0, r.jsx)(a.P3F, {
            onClick: () => (0, p.qc)({
              channelId: t,
              warningId: v,
              senderId: I,
              warningType: _.pj.LIKELY_ATO,
              cta: p.NM.USER_MODAL_LEARN_MORE
            }),
            children: (0, r.jsx)(a.X6q, {
              variant: "heading-sm/medium",
              color: "text-link",
              children: O.intl.format(O.t.UkH129, {
                learnMoreLink: E.D8
              })
            })
          })
        })
      }
    })
  };
  return (i.useEffect(() => {
    A && ((0, p.MC)(b.rMx.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: v,
      senderId: I,
      warningType: _.pj.LIKELY_ATO
    }), l.Z.increment({
      name: o.V.SAFETY_WARNING_VIEW
    }))
  }, [t, v, I, A]), A) ? (0, r.jsx)(h.Q, {
    channelId: t,
    warningId: v,
    senderId: I,
    warningType: _.pj.LIKELY_ATO,
    header: O.intl.string(O.t.R8UsiI),
    description: O.intl.string(O.t.lI8nQk),
    onDismiss: S,
    buttons: [{
      text: O.intl.string(O.t.tC1pvL),
      variant: "primary",
      onClick: N
    }, {
      text: O.intl.string(O.t.ftIK2N),
      onClick: () => C(p.NM.USER_BANNER_MUTE)
    }]
  }) : null
}