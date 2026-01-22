/** Chunk was on 75710 **/
/** chunk id: 89805, original params: t,i,a (module,exports,require) **/
require.d(exports, {
  ActivityAgeGateModal: () => o
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk847599 = require("./847599.js"),
  Chunk985018 = require("./985018.jsx");

function o(t) {
  let {
    application: i,
    onAgree: a,
    onClose: o,
    onDisagree: c,
    channelId: E,
    transitionState: A
  } = t;
  e.useEffect(() => {
    (0, s.Bf)(s.A5.NSFW_EMBEDDED_ACTIVITY, E)
  }, [E]);
  let C = e.useCallback(() => {
      (0, s.mU)(s.IY.NSFW_CHANNEL_AGREE_CTA, s.A5.NSFW_EMBEDDED_ACTIVITY, E), a(), o()
    }, [a, o, E]),
    _ = e.useCallback(() => {
      (0, s.mU)(s.IY.NSFW_CHANNEL_DISAGREE_CTA, s.A5.NSFW_EMBEDDED_ACTIVITY, E), c(), o()
    }, [c, o, E]);
  return (0, n.jsx)(l.Modal, {
    transitionState: A,
    title: r.intl.string(r.t.SSDPOF),
    subtitle: r.intl.formatToPlainString(r.t.OgmIqy, {
      applicationName: i.name
    }),
    onClose: () => Promise.resolve(_()),
    actions: [{
      onClick: _,
      variant: "secondary",
      text: r.intl.string(r.t.hg1uxn)
    }, {
      onClick: C,
      variant: "critical-primary",
      text: r.intl.string(r.t.wVq7uo)
    }]
  })
}