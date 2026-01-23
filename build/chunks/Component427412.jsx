/** Chunk was on 90037 **/
/** chunk id: 427412, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk849736 = require("./849736.js"),
  Chunk418208 = require("./418208.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk472230 = require("./472230.js"),
  Chunk973324 = require("./973324.js");

function u(t) {
  let {
    transitionState: e,
    onClose: i,
    channel: u
  } = t, g = t => {
    if (!t && (0, l.Cf)(u.id)) {
      a.A.showAgeVerificationGetStartedModal({
        entryPoint: o.q1.STAGE_CHANNEL_RAISE_HAND
      }), i();
      return
    }(0, c.e7)(u, t), i()
  };
  return (0, n.jsx)(r.ExpressiveModal, {
    transitionState: e,
    graphic: {
      type: "image",
      src: p.A
    },
    title: h.intl.string(h.t.Ul1RJQ),
    subtitle: h.intl.format(h.t["Z+3bWy"], {
      stageChannelHook: () => (0, n.jsxs)(n.Fragment, {
        children: [(0, n.jsx)(s.qux, {
          size: "custom",
          color: "currentColor",
          height: 14,
          width: 14,
          className: d.p
        }), u.name]
      })
    }),
    onClose: () => (g(true), Promise.resolve()),
    actions: [{
      text: h.intl.string(h.t.L5eIZ2),
      onClick: () => i(),
      variant: "secondary"
    }, {
      text: h.intl.string(h.t.MMlhsr),
      onClick: () => g(false),
      variant: "active"
    }]
  })
}