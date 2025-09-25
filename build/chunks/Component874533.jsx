/** Chunk was on 36340 **/
/** chunk id: 874533, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => u
});
var Chunk951288 = require("./951288.js"),
  Chunk979554 = require("./979554.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk667202 = require("./667202.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function u(t) {
  let {
    onClose: e,
    product: i
  } = t, u = l.default.getCurrentUser(), E = "6/4";
  switch (i.type) {
    case a.Z.NAMEPLATE:
    case a.Z.AVATAR_DECORATION:
      E = "16/9";
      break;
    case a.Z.BUNDLE:
    case a.Z.PROFILE_EFFECT:
    default:
      E = "6/4"
  }
  return (0, n.jsx)(r.I, {
    transitionState: s.Dv.ENTERED,
    title: d.intl.string(d.t.L4Wg3N),
    subtitle: d.intl.string(d.t.SXb73N),
    graphic: {
      type: "dynamic",
      component: o.AX$.COLLECTIBLES_PREVIEW,
      aspectRatio: E,
      props: {
        product: i,
        forCollectedModal: true
      }
    },
    onClose: e,
    actions: [{
      text: d.intl.string(d.t.TxBQzM),
      onClick: () => {
        null != u && (0, c.openUserProfileModal)({
          userId: u.id,
          section: p.oh.WISHLIST
        }), e()
      },
      variant: "secondary"
    }, {
      variant: "primary",
      text: d.intl.string(d.t.tM4PUl),
      onClick: e
    }]
  })
}