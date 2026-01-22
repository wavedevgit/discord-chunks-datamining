/** Chunk was on 26489 **/
/** chunk id: 477088, original params: e,t,s (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk954571 = require("./954571.js"),
  Chunk326084 = require("./326084.js"),
  Chunk484217 = require("./484217.jsx"),
  Chunk353174 = require("./353174.jsx"),
  Chunk652215 = require("./652215.js");
let p = e => {
  let t, {
      transitionState: s,
      onClose: p,
      sourceAnalyticsLocations: h
    } = e,
    [f, u] = a.useState(1),
    [j, _] = a.useState(new Set),
    [m, g] = a.useState(new Map),
    {
      analyticsLocations: L
    } = (0, n.Ay)([...h, r.A.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (f) {
    case 1:
      t = (0, i.jsx)(o.Ay, {
        onShare: async e => {
          try {
            C.default.track(x.HAw.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: L
            });
            let t = await (0, d.xm)(e.map(e => e.id));
            u(2), _(new Set(e)), g(t)
          } catch (e) {}
        },
        onClose: p
      });
      break;
    case 2:
      t = (0, i.jsx)(c.A, {
        selectedUsers: j,
        trialCreationResult: m,
        onClose: p
      });
      break;
    default:
      p()
  }
  return (0, i.jsx)(l.EOs, {
    "data-migration-pending": true,
    transitionState: s,
    parentComponent: "ReferralProgramShareModal",
    children: t
  })
}