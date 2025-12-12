/** Chunk was on 47435 **/
/** chunk id: 204387, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk281494 = require("./281494.js"),
  Chunk687555 = require("./687555.jsx"),
  Chunk258104 = require("./258104.jsx"),
  Chunk981631 = require("./981631.js");
let p = e => {
  let t, {
      transitionState: r,
      onClose: p,
      sourceAnalyticsLocations: f
    } = e,
    [h, u] = a.useState(1),
    [j, m] = a.useState(new Set),
    [_, g] = a.useState(new Map),
    {
      analyticsLocations: L
    } = (0, l.ZP)([...f, n.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (h) {
    case 1:
      t = (0, i.jsx)(d.ZP, {
        onShare: async e => {
          try {
            o.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: L
            });
            let t = await (0, C.jy)(e.map(e => e.id));
            u(2), m(new Set(e)), g(t)
          } catch (e) {}
        },
        onClose: p
      });
      break;
    case 2:
      t = (0, i.jsx)(c.Z, {
        selectedUsers: j,
        trialCreationResult: _,
        onClose: p
      });
      break;
    default:
      p()
  }
  return (0, i.jsx)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: r,
    parentComponent: "ReferralProgramShareModal",
    children: t
  })
}