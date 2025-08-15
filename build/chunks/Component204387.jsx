/** Chunk was on 81369 **/
/** chunk id: 204387, original params: e,t,r (module,exports,require) **/
require.d(exports, {
  default: () => h
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
let h = e => {
  let t, {
      transitionState: r,
      onClose: h,
      sourceAnalyticsLocations: u
    } = e,
    [f, x] = i.useState(1),
    [_, g] = i.useState(new Set),
    [j, L] = i.useState(new Map),
    {
      analyticsLocations: m
    } = (0, n.ZP)([...u, l.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (f) {
    case 1:
      t = (0, a.jsx)(d.ZP, {
        onShare: async e => {
          try {
            o.default.track(c.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: m
            });
            let t = await (0, C.jy)(e.map(e => e.id));
            x(2), g(new Set(e)), L(t)
          } catch (e) {}
        },
        onClose: h
      });
      break;
    case 2:
      t = (0, a.jsx)(p.Z, {
        selectedUsers: _,
        trialCreationResult: j,
        onClose: h
      });
      break;
    default:
      h()
  }
  return (0, a.jsx)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: r,
    parentComponent: "ReferralProgramShareModal",
    children: t
  })
}