/** Chunk was on 57951 **/
/** chunk id: 252528, original params: t,i,a (module,exports,require) **/
require.d(exports, {
  ActivityAgeGateModal: () => c
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    application: i,
    onAgree: a,
    onClose: c,
    onDisagree: o,
    channelId: E,
    transitionState: C
  } = t;
  e.useEffect(() => {
    (0, l.YT)(l.it.NSFW_EMBEDDED_ACTIVITY, E)
  }, [E]);
  let _ = e.useCallback(() => {
      (0, l.qd)(l.iP.NSFW_CHANNEL_AGREE_CTA, l.it.NSFW_EMBEDDED_ACTIVITY, E), a(), c()
    }, [a, c, E]),
    u = e.useCallback(() => {
      (0, l.qd)(l.iP.NSFW_CHANNEL_DISAGREE_CTA, l.it.NSFW_EMBEDDED_ACTIVITY, E), o(), c()
    }, [o, c, E]);
  return (0, n.jsx)(s.Modal, {
    transitionState: C,
    title: r.intl.string(r.t.SSDPOD),
    subtitle: r.intl.formatToPlainString(r.t.OgmIq6, {
      applicationName: i.name
    }),
    onClose: () => Promise.resolve(u()),
    actions: [{
      onClick: u,
      variant: "secondary",
      text: r.intl.string(r.t.hg1uxs)
    }, {
      onClick: _,
      variant: "critical-primary",
      text: r.intl.string(r.t.wVq7ur)
    }]
  })
}