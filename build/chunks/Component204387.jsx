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
      sourceAnalyticsLocations: h
    } = e,
    [f, u] = i.useState(1),
    [m, j] = i.useState(new Set),
    [_, g] = i.useState(new Map),
    {
      analyticsLocations: L
    } = (0, l.ZP)([...h, n.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (f) {
    case 1:
      t = (0, a.jsx)(d.ZP, {
        onShare: async e => {
          try {
            o.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: L
            });
            let t = await (0, C.jy)(e.map(e => e.id));
            u(2), j(new Set(e)), g(t)
          } catch (e) {}
        },
        onClose: p
      });
      break;
    case 2:
      t = (0, a.jsx)(c.Z, {
        selectedUsers: m,
        trialCreationResult: _,
        onClose: p
      });
      break;
    default:
      p()
  }
  return (0, a.jsx)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: r,
    parentComponent: "ReferralProgramShareModal",
    children: t
  })
}