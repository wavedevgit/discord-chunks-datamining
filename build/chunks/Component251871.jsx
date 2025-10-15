/** Chunk was on 40390 **/
/** chunk id: 251871, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => Z
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk493773 = require("./493773.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk626135 = require("./626135.js"),
  Chunk715903 = require("./715903.js"),
  Chunk295474 = require("./295474.js"),
  Chunk273504 = require("./273504.js"),
  Chunk981631 = require("./981631.js"),
  Chunk372897 = require("./372897.js"),
  Chunk388032 = require("./388032.jsx");

function Z(t) {
  var i;
  let {
    onClose: n,
    transitionState: Z,
    guildId: h
  } = t, k = (0, a.e7)([d.default], () => d.default.getId()), p = (0, a.e7)([_.ZP], () => _.ZP.getMember(h, k), [h, k]), N = (0, a.e7)([c.Z], () => c.Z.getGuild(h), [h]), T = null != (i = null == N ? true : N.name) ? i : "", D = (0, g.no)(p), {
    analyticsLocations: I
  } = (0, s.ZP)(o.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [R, S] = (0, A.ww)({
    guildId: h,
    analyticsLocations: I
  }), U = D.has(M.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? O.intl.formatToPlainString(O.t.Oh20JS, {
    guildName: T
  }) : O.intl.formatToPlainString(O.t["+VAZ/f"], {
    guildName: T
  });
  S || (U = O.intl.formatToPlainString(O.t.tcrtMD, {
    guildName: T
  }));
  let m = S ? O.intl.string(O.t.Viksoq) : O.intl.string(O.t.WikgZ2);
  return ((0, u.ZP)(() => {
    f.default.track(E.rMx.OPEN_MODAL, {
      type: P.dc,
      guild_id: h,
      other_user_id: k
    })
  }), e.useEffect(() => {
    if (null == N) return void n()
  }, [N, n]), null == N) ? null : (0, l.jsx)(r.Modal, {
    transitionState: Z,
    onClose: n,
    title: O.intl.string(O.t["P+6K9P"]),
    subtitle: U,
    actions: [{
      text: m,
      onClick: () => {
        R(), n()
      }
    }]
  })
}