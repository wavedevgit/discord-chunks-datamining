/** Chunk was on 77069 **/
/** chunk id: 74662, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  U: () => I
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk657707 = require("./657707.js"),
  Chunk688465 = require("./688465.jsx"),
  Chunk612659 = require("./612659.js"),
  Chunk299886 = require("./299886.js"),
  Chunk773275 = require("./773275.jsx"),
  Chunk509613 = require("./509613.js"),
  Chunk970013 = require("./970013.js"),
  Chunk313789 = require("./313789.js"),
  Chunk620163 = require("./620163.jsx"),
  Chunk888645 = require("./888645.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk472057 = require("./472057.js");
let g = (0, Chunk509613.wf)(Chunk313789.n.PRIVATE_BROWSING_PANEL, {
    useTitle: () => d.intl.string(_.default.bU5ANm),
    useBadge: () => (0, i.jsx)(s.Z, {}),
    buildLayout: () => [E.m]
  }),
  I = (0, Chunk509613.m7)(Chunk313789.n.PRIVATE_BROWSING_SIDEBAR_ITEM, {
    useTitle: () => d.intl.string(_.default.bU5ANm),
    icon: Chunk657707.enf,
    usePredicate: () => {
      let t = (0, u.m)(),
        {
          isSupportedPrivateBrowsingPerkPlatform: e,
          isWeb: n,
          perkAvailableToUser: i
        } = (0, a.xf)(),
        {
          enabled: l
        } = r.H.useConfig({
          location: "private_browsing_perk_settings_page"
        });
      return l && (e || n) && (!t || i)
    },
    buildLayout: () => [g],
    trailing: {
      type: Chunk970013.W.BADGE_NEW,
      getDismissibleContentTypes: Chunk620163._x
    }
  })