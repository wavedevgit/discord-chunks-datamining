/** Chunk was on 13878 **/
/** chunk id: 113140, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => p
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk471253 = require("./471253.js"),
  Chunk430104 = require("./430104.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk374378 = require("./374378.js"),
  Chunk768982 = require("./768982.js");

function p(t) {
  let {
    transitionState: n,
    onClose: e,
    channel: p
  } = t, f = t => {
    if (!t && (0, l.u1)()) {
      s.Z.showAgeVerificationGetStartedModal({
        entryPoint: o.cU.STAGE_CHANNEL_RAISE_HAND
      }), e();
      return
    }(0, c.RK)(p, t), e()
  };
  return (0, i.jsx)(r.ExpressiveModal, {
    transitionState: n,
    graphic: {
      type: "image",
      src: d.Z
    },
    title: h.intl.string(h.t.Ul1RJQ),
    subtitle: h.intl.format(h.t["Z+3bWy"], {
      stageChannelHook: () => (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.ewx, {
          size: "custom",
          color: "currentColor",
          height: 14,
          width: 14,
          className: u.channelIcon
        }), p.name]
      })
    }),
    onClose: () => (f(true), Promise.resolve()),
    actions: [{
      text: h.intl.string(h.t.L5eIZ2),
      onClick: () => e(),
      variant: "secondary"
    }, {
      text: h.intl.string(h.t.MMlhsr),
      onClick: () => f(false),
      variant: "active"
    }]
  })
}