/** Chunk was on 64581 **/
/** chunk id: 38884, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => c
});
var Chunk627968 = require("./627968.js"),
  Chunk158954 = require("./158954.js"),
  Chunk657331 = require("./657331.js"),
  Chunk287809 = require("./287809.js"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx");

function c(t) {
  let {
    onClose: i,
    graphic: n
  } = t, c = a.default.getCurrentUser();
  return (0, e.jsx)(r.ExpressiveModal, {
    transitionState: r.ip4.ENTERED,
    title: o.intl.string(o.t.L4Wg3B),
    subtitle: o.intl.string(o.t.SXb73A),
    graphic: n,
    onClose: i,
    actions: [{
      text: o.intl.string(o.t.TxBQzD),
      onClick: () => {
        null != c && (0, s.openUserProfileModal)({
          userId: c.id,
          tabSection: l.RP.WISHLIST
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