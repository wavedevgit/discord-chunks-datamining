/** Chunk was on 57951 **/
/** chunk id: 252528, original params: t,i,a (module,exports,require) **/
require.d(exports, {
  ActivityAgeGateModal: () => o
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk480916 = require("./480916.js"),
  Chunk388032 = require("./388032.jsx");

function o(t) {
  let {
    application: i,
    onAgree: a,
    onClose: o,
    onDisagree: c,
    channelId: E,
    transitionState: C
  } = t;
  e.useEffect(() => {
    (0, s.YT)(s.it.NSFW_EMBEDDED_ACTIVITY, E)
  }, [E]);
  let _ = e.useCallback(() => {
      (0, s.qd)(s.iP.NSFW_CHANNEL_AGREE_CTA, s.it.NSFW_EMBEDDED_ACTIVITY, E), a(), o()
    }, [a, o, E]),
    u = e.useCallback(() => {
      (0, s.qd)(s.iP.NSFW_CHANNEL_DISAGREE_CTA, s.it.NSFW_EMBEDDED_ACTIVITY, E), c(), o()
    }, [c, o, E]);
  return (0, n.jsx)(l.Modal, {
    transitionState: C,
    title: r.intl.string(r.t.SSDPOF),
    subtitle: r.intl.formatToPlainString(r.t.OgmIqy, {
      applicationName: i.name
    }),
    onClose: () => Promise.resolve(u()),
    actions: [{
      onClick: u,
      variant: "secondary",
      text: r.intl.string(r.t.hg1uxn)
    }, {
      onClick: _,
      variant: "critical-primary",
      text: r.intl.string(r.t.wVq7uo)
    }]
  })
}