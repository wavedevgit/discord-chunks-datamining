/** Chunk was on 47435 **/
/** chunk id: 204387, original params: e,t,i (module,exports,require) **/
require.d(exports, {
  default: () => c
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk281494 = require("./281494.js"),
  Chunk687555 = require("./687555.jsx"),
  Chunk596583 = require("./596583.jsx"),
  Chunk981631 = require("./981631.js");
let c = e => {
  let t, {
      transitionState: i,
      onClose: c,
      sourceAnalyticsLocations: f
    } = e,
    [h, _] = C.useState(1),
    [u, j] = C.useState(new Set),
    [L, m] = C.useState(new Map),
    {
      analyticsLocations: y
    } = (0, l.ZP)([...f, a.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (h) {
    case 1:
      t = (0, r.jsx)(d.ZP, {
        onShare: async e => {
          try {
            n.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: y
            });
            let t = await (0, o.jy)(e.map(e => e.id));
            _(2), j(new Set(e)), m(t)
          } catch (e) {}
        },
        onClose: c
      });
      break;
    case 2:
      t = (0, r.jsx)(p.Z, {
        selectedUsers: u,
        trialCreationResult: L,
        onClose: c
      });
      break;
    default:
      c()
  }
  return (0, r.jsx)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: i,
    parentComponent: "ReferralProgramShareModal",
    children: t
  })
}