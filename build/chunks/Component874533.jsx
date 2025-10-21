/** Chunk was on 36340 **/
/** chunk id: 874533, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => d
});
var Chunk951288 = require("./951288.js"),
  Chunk979554 = require("./979554.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  let {
    onClose: e,
    product: i
  } = t, d = c.default.getCurrentUser(), u = "6/4";
  switch (i.type) {
    case s.Z.NAMEPLATE:
    case s.Z.AVATAR_DECORATION:
      u = "16/9";
      break;
    case s.Z.BUNDLE:
    case s.Z.PROFILE_EFFECT:
    default:
      u = "6/4"
  }
  return (0, n.jsx)(a.ExpressiveModal, {
    transitionState: a.Dvm.ENTERED,
    title: p.intl.string(p.t.L4Wg3B),
    subtitle: p.intl.string(p.t.SXb73A),
    graphic: {
      type: "dynamic",
      component: r.AX$.COLLECTIBLES_PREVIEW,
      aspectRatio: u,
      props: {
        product: i,
        forCollectedModal: true
      }
    },
    onClose: e,
    actions: [{
      text: p.intl.string(p.t.TxBQzD),
      onClick: () => {
        null != d && (0, o.openUserProfileModal)({
          userId: d.id,
          section: l.oh.WISHLIST
        }), e()
      },
      variant: "secondary"
    }, {
      variant: "primary",
      text: p.intl.string(p.t.tM4PUv),
      onClick: e
    }]
  })
}