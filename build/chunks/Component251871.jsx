/** Chunk was on 40390 **/
/** chunk id: 251871, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk399606 = require("./399606.js"),
  Chunk82659 = require("./82659.jsx"),
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

function E(t) {
  var i;
  let {
    onClose: n,
    transitionState: E,
    guildId: M
  } = t, O = (0, a.e7)([d.default], () => d.default.getId()), Z = (0, a.e7)([c.ZP], () => c.ZP.getMember(M, O), [M, O]), N = (0, a.e7)([_.Z], () => _.Z.getGuild(M), [M]), T = null != (i = null == N ? true : N.name) ? i : "", D = (0, g.no)(Z), {
    analyticsLocations: I
  } = (0, s.ZP)(u.Z.AUTOMOD_PROFILE_QUARANTINE_ALERT), [R, S] = (0, A.ww)({
    guildId: M,
    analyticsLocations: I,
    openWithoutBackstack: true
  }), U = D.has(h.q.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? p.intl.formatToPlainString(p.t.Oh20JS, {
    guildName: T
  }) : p.intl.formatToPlainString(p.t["+VAZ/f"], {
    guildName: T
  });
  S || (U = p.intl.formatToPlainString(p.t.tcrtMD, {
    guildName: T
  }));
  let m = S ? p.intl.string(p.t.Viksoq) : p.intl.string(p.t.WikgZ2);
  return ((0, o.ZP)(() => {
    f.default.track(k.rMx.OPEN_MODAL, {
      type: P.dc,
      guild_id: M,
      other_user_id: O
    })
  }), e.useEffect(() => {
    if (null == N) return void n()
  }, [N, n]), null == N) ? null : (0, l.jsx)(r.Modal, {
    transitionState: E,
    onClose: n,
    title: p.intl.string(p.t["P+6K9P"]),
    subtitle: U,
    actions: [{
      text: m,
      onClick: () => {
        R(), n()
      }
    }]
  })
}