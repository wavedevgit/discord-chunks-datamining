/** Chunk was on 47435 **/
/** chunk id: 204387, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk626135 = require("./626135.js"),
  Chunk281494 = require("./281494.js"),
  Chunk687555 = require("./687555.jsx"),
  Chunk596583 = require("./596583.jsx"),
  Chunk981631 = require("./981631.js");
let f = e => {
  let t, {
      transitionState: a,
      onClose: f,
      sourceAnalyticsLocations: p
    } = e,
    [h, u] = i.useState(1),
    [j, m] = i.useState(new Set),
    [_, g] = i.useState(new Map),
    {
      analyticsLocations: L
    } = (0, l.ZP)([...p, n.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (h) {
    case 1:
      t = (0, r.jsx)(C.ZP, {
        onShare: async e => {
          try {
            d.default.track(x.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: L
            });
            let t = await (0, o.jy)(e.map(e => e.id));
            u(2), m(new Set(e)), g(t)
          } catch (e) {}
        },
        onClose: f
      });
      break;
    case 2:
      t = (0, r.jsx)(c.Z, {
        selectedUsers: j,
        trialCreationResult: _,
        onClose: f
      });
      break;
    default:
      f()
  }
  return (0, r.jsx)(s.Y0X, {
    "data-migration-pending": true,
    transitionState: a,
    parentComponent: "ReferralProgramShareModal",
    children: t
  })
}