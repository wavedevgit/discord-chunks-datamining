/** Chunk was on 715 **/
/** chunk id: 204387, original params: e,r,t (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.js"),
  Chunk626135 = require("./626135.js"),
  Chunk281494 = require("./281494.js"),
  Chunk687555 = require("./687555.js"),
  Chunk596583 = require("./596583.js"),
  Chunk981631 = require("./981631.js");
let x = e => {
  let r, {
      transitionState: t,
      onClose: x,
      sourceAnalyticsLocations: f
    } = e,
    [_, h] = i.useState(1),
    [u, j] = i.useState(new Set),
    [L, m] = i.useState(new Map),
    {
      analyticsLocations: y
    } = (0, l.ZP)([...f, s.Z.PREMIUM_MARKETING_REFERALL_PROGRAM_SHARE_MODAL]);
  switch (_) {
    case 1:
      r = <d.ZP onShare={async e => {
          try {
            n.default.track(c.rMx.REFERRAL_PROGRAM_SHARE_CTA_CLICKED, {
              location_stack: y
            });
            let r = await (0, o.jy)(e.map(e => e.id));
            h(2), j(new Set(e)), m(r)
          } catch (e) {}
        }} onClose={x} />;
      break;
    case 2:
      r = <p.Z selectedUsers={u} trialCreationResult={L} onClose={x} />;
      break;
    default:
      x()
  }
  return <C.Y0X data-migration-pending={true} transitionState={t} parentComponent={"ReferralProgramShareModal"}>{r}</C.Y0X>
}