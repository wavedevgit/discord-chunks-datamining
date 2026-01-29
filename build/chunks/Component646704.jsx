/** Chunk was on 4670 **/
/** chunk id: 646704, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  i: () => I
});
var Chunk627968 = require("./627968.js"),
  Chunk934551 = require("./934551.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk155984 = require("./155984.js"),
  Chunk682829 = require("./682829.jsx"),
  Chunk419954 = require("./419954.js"),
  Chunk933297 = require("./933297.js"),
  Chunk780964 = require("./780964.js"),
  Chunk358776 = require("./358776.js"),
  Chunk616415 = require("./616415.js"),
  Chunk531525 = require("./531525.js"),
  Chunk985018 = require("./985018.jsx");
let E = (0, Chunk419954.t_)(Chunk780964.X.SUBSCRIPTIONS_PANEL, {
    useTitle: () => _.intl.string(_.t.trSpHX),
    StronglyDiscouragedCustomComponent: Chunk682829.A,
    buildLayout: () => []
  }),
  g = (0, Chunk419954.t_)(Chunk780964.X.SUBSCRIPTIONS_PANEL, {
    useTitle: () => _.intl.string(_.t.trSpHX),
    buildLayout: () => [A.J]
  }),
  I = (0, Chunk419954.i4)(Chunk780964.X.SUBSCRIPTIONS_SIDEBAR_ITEM, {
    useTitle: () => _.intl.string(_.t.trSpHX),
    getLegacySearchKey: () => (0, c.WJ)("SubscriptionsPanel") ? true : S.H.SUBSCRIPTIONS,
    icon: Chunk934551.SubscriptionIcon,
    trailing: {
      type: Chunk933297.S.STRONGLY_DISCOURAGED_CUSTOM,
      useCustomDecoration: () => (0, a.l)() ? (0, n.jsx)(s.EpV, {
        size: "xs",
        color: r.A.unsafe_rawColors.YELLOW_300
      }) : null
    },
    buildLayout: () => (0, c.WJ)("SubscriptionsPanel") ? [g] : [E]
  })