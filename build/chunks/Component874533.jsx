/** Chunk was on 36340 **/
/** chunk id: 874533, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk892001 = require("./892001.js"),
  Chunk594174 = require("./594174.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx");

function c(t) {
  let {
    onClose: i,
    graphic: n
  } = t, c = a.default.getCurrentUser();
  return (0, e.jsx)(r.ExpressiveModal, {
    transitionState: r.Dvm.ENTERED,
    title: o.intl.string(o.t.L4Wg3B),
    subtitle: o.intl.string(o.t.SXb73A),
    graphic: n,
    onClose: i,
    actions: [{
      text: o.intl.string(o.t.TxBQzD),
      onClick: () => {
        null != c && (0, s.openUserProfileModal)({
          userId: c.id,
          section: l.oh.WISHLIST
        }), i()
      },
      variant: "secondary"
    }, {
      variant: "primary",
      text: o.intl.string(o.t.tM4PUv),
      onClick: i
    }]
  })
}