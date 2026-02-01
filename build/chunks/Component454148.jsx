/** Chunk was on 61344 **/
/** chunk id: 454148, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  L: () => y
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

function y(e) {
  let {
    channelId: t,
    warningId: y,
    senderId: v
  } = e, E = (0, A.CW)(), O = r.useCallback(() => {
    (0, h.xi)(t, [y])
  }, [t, y]), C = e => {
    s.A.updateChannelOverrideSettings(null, t, {
      muted: true
    }, g.fd.Muted), c.A.showMuteSuccessToast(v, t), (0, f._$)({
      channelId: t,
      warningId: y,
      senderId: v,
      warningType: p._j.LIKELY_ATO,
      cta: e
    }), O()
  };
  return r.useEffect(() => {
    (0, f.mO)(b.HAw.SAFETY_WARNING_VIEWED, {
      channelId: t,
      warningId: y,
      senderId: v,
      warningType: p._j.LIKELY_ATO
    }), o.A.increment({
      name: i.K.SAFETY_WARNING_VIEW
    })
  }, [t, y, v]), (0, l.jsx)(m.N, {
    channelId: t,
    warningId: y,
    senderId: v,
    warningType: p._j.LIKELY_ATO,
    header: _.intl.string(_.t.R8UsiI),
    description: _.intl.string(_.t.lI8nQl),
    onDismiss: O,
    buttons: [{
      text: _.intl.string(_.t.tC1pvL),
      variant: "primary",
      onClick: () => {
        (0, a.mMO)(async () => {
          let {
            default: e
          } = await n.e("8546").then(n.bind(n, 63865));
          return n => {
            let {
              transitionState: r,
              onClose: i
            } = n;
            return (0, l.jsx)(e, {
              transitionState: r,
              onClose: i,
              channelId: t,
              warningId: y,
              senderId: v,
              description: _.intl.string(_.t["/uid3p"]),
              safetyTipRows: E.map((e, t) => (0, l.jsx)(u.B, {
                listType: "numbered",
                index: t,
                title: e.title,
                description: e.description
              }, t)),
              actionRows: [(0, l.jsx)(d.PQ, {
                title: _.intl.string(_.t.ftIK2A),
                description: _.intl.string(_.t.w2ve0t),
                buttonText: _.intl.string(_.t.ftIK2A),
                onButtonPress: () => {
                  C(f.Wm.USER_MODAL_MUTE), i()
                }
              }, "likely-ato-mute")],
              learnMore: (0, l.jsx)(a.DUT, {
                onClick: () => (0, f._$)({
                  channelId: t,
                  warningId: y,
                  senderId: v,
                  warningType: p._j.LIKELY_ATO,
                  cta: f.Wm.USER_MODAL_LEARN_MORE
                }),
                children: (0, l.jsx)(a.Heading, {
                  variant: "heading-sm/medium",
                  color: "text-link",
                  children: _.intl.format(_.t.UkH122, {
                    learnMoreLink: A.u6
                  })
                })
              })
            })
          }
        }), (0, f._$)({
          channelId: t,
          warningId: y,
          senderId: v,
          warningType: p._j.LIKELY_ATO,
          cta: f.Wm.OPEN_MORE_TIPS
        })
      }
    }, {
      text: _.intl.string(_.t.ftIK2A),
      onClick: () => C(f.Wm.USER_BANNER_MUTE)
    }]
  })
}