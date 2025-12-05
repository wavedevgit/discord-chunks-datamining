/** Chunk was on 77069 **/
/** chunk id: 74662, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => N
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk299886 = require("./299886.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk28682 = require("./28682.js"),
  Chunk313789 = require("./313789.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk55467 = require("./55467.jsx"),
  Chunk726985 = require("./726985.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk237396 = require("./237396.js");
let _ = (0, Chunk509613.x1)(Chunk313789.n.PRIVATE_BROWSING_PANE, {
    render: () => (0, Chunk54381.jsx)(Chunk55467.R, {}),
    buildLayout: () => []
  }),
  O = (0, Chunk509613.wf)(Chunk313789.n.PRIVATE_BROWSING_PANEL, {
    useTitle: () => Chunk388032.intl.string(Chunk237396.default.bU5ANm),
    useBadge: () => (0, Chunk54381.jsx)(Chunk688465.Z, {}),
    buildLayout: () => [_]
  }),
  N = (0, Chunk509613.m7)(Chunk313789.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
    useTitle: () => Chunk388032.intl.string(Chunk237396.default.bU5ANm),
    getLegacySearchKey: () => Chunk726985.s6.PRIVATE_BROWSING_PERK,
    icon: Chunk657707.enf,
    trailing: {
      type: Chunk28682.PU.BADGE_NEW,
      getDismissibleContentTypes: Chunk620163._x,
      badgeComponent: Chunk620163.ec
    },
    usePredicate: () => {
      let t = (0, Chunk612659.m)(),
        {
          isSupportedPrivateBrowsingPerkPlatform: e,
          isWeb: n,
          perkAvailableToUser: i
        } = (0, Chunk773275.xf)(),
        {
          enabled: l
        } = Chunk299886.H.useConfig({
          location: "private_browsing_perk_settings_page"
        });
      return Chunk657707 && (exports || require) && (!module || Chunk54381)
    },
    buildLayout: () => [O]
  })