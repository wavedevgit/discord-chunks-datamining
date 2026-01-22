/** Chunk was on 97492 **/
/** chunk id: 454148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => O
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk731738 = require("./731738.js"),
  Chunk397927 = require("./397927.js"),
  Chunk832712 = require("./832712.js"),
  Chunk831062 = require("./831062.js"),
  Chunk662502 = require("./662502.js"),
  Chunk754302 = require("./754302.jsx"),
  Chunk632738 = require("./632738.jsx"),
  Chunk544231 = require("./544231.js"),
  Chunk349435 = require("./349435.js"),
  Chunk665909 = require("./665909.js"),
  Chunk576045 = require("./576045.jsx"),
  Chunk477427 = require("./477427.js"),
  Chunk56462 = require("./56462.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function O(e) {
  let {
    channelId: t,
    warningId: O,
    senderId: j
  } = e, v = (0, m.CW)(), x = l.useCallback(() => {
    (0, f.xi)(t, [O])
  }, [t, O]), E = e => {
    s.A.updateChannelOverrideSettings(null, t, {
      muted: true
    }, g.fd.Muted), c.A.showMuteSuccessToast(j, t), (0, h._$)({
      channelId: t,
      warningId: O,
      senderId: j,
      warningType: p._j.LIKELY_ATO,
      cta: e
    }), x()
  };
  return l.useEffect(() => {
    (0, h.mO)(A.HAw.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: O,
      senderId: j,
      warningType: p._j.LIKELY_ATO
    }), o.A.increment({
      name: i.K.SAFETY_WARNING_VIEW
    })
  }, [t, O, j]), (0, r.jsx)(b.N, {
    channelId: t,
    warningId: O,
    senderId: j,
    warningType: p._j.LIKELY_ATO,
    header: y.intl.string(y.t.R8UsiI),
    description: y.intl.string(y.t.lI8nQl),
    onDismiss: x,
    buttons: [{
      text: y.intl.string(y.t.tC1pvL),
      variant: "primary",
      onClick: () => {
        (0, a.mMO)(async () => {
          let {
            default: e
          } = await n.e("8546").then(n.bind(n, 63865));
          return n => {
            let {
              transitionState: l,
              onClose: i
            } = n;
            return (0, r.jsx)(e, {
              transitionState: l,
              onClose: i,
              channelId: t,
              warningId: O,
              senderId: j,
              description: y.intl.string(y.t["/uid3p"]),
              safetyTipRows: v.map((e, t) => (0, r.jsx)(u.B, {
                listType: "numbered",
                index: t,
                title: e.title,
                description: e.description
              }, t)),
              actionRows: [(0, r.jsx)(d.PQ, {
                title: y.intl.string(y.t.ftIK2A),
                description: y.intl.string(y.t.w2ve0t),
                buttonText: y.intl.string(y.t.ftIK2A),
                onButtonPress: () => {
                  E(h.Wm.USER_MODAL_MUTE), i()
                }
              }, "likely-ato-mute")],
              learnMore: (0, r.jsx)(a.DUT, {
                onClick: () => (0, h._$)({
                  channelId: t,
                  warningId: O,
                  senderId: j,
                  warningType: p._j.LIKELY_ATO,
                  cta: h.Wm.USER_MODAL_LEARN_MORE
                }),
                children: (0, r.jsx)(a.Heading, {
                  variant: "heading-sm/medium",
                  color: "text-link",
                  children: y.intl.format(y.t.UkH122, {
                    learnMoreLink: m.u6
                  })
                })
              })
            })
          }
        }), (0, h._$)({
          channelId: t,
          warningId: O,
          senderId: j,
          warningType: p._j.LIKELY_ATO,
          cta: h.Wm.OPEN_MORE_TIPS
        })
      }
    }, {
      text: y.intl.string(y.t.ftIK2A),
      onClick: () => E(h.Wm.USER_BANNER_MUTE)
    }]
  })
}