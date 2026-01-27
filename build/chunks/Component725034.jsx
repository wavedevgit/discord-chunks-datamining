/** Chunk was on 74724 **/
/** chunk id: 725034, original params: t,l,n (module,exports,require) **/
require.d(exports, {
  default: () => M
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk964486 = require("./964486.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk961350 = require("./961350.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk954571 = require("./954571.js"),
  Chunk229527 = require("./229527.js"),
  Chunk81400 = require("./81400.js"),
  Chunk411335 = require("./411335.js"),
  Chunk652215 = require("./652215.js"),
  Chunk340837 = require("./340837.js"),
  Chunk985018 = require("./985018.jsx");

function M(t) {
  var l;
  let {
    onClose: n,
    transitionState: M,
    guildId: R
  } = t, T = (0, r.bG)([o.default], () => o.default.getId()), U = (0, r.bG)([f.Ay], () => f.Ay.getMember(R, T), [R, T]), b = (0, r.bG)([s.A], () => s.A.getGuild(R), [R]), D = null != (l = null == b ? true : b.name) ? l : "", G = (0, _.wj)(U), {
    analyticsLocations: C
  } = (0, d.Ay)(a.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [h, k] = (0, g.j8)({
    guildId: R,
    analyticsLocations: C
  }), P = G.has(I.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? O.intl.formatToPlainString(O.t.Oh20JS, {
    guildName: D
  }) : O.intl.formatToPlainString(O.t["+VAZ/Z"], {
    guildName: D
  });
  k || (P = O.intl.formatToPlainString(O.t.tcrtME, {
    guildName: D
  }));
  let m = k ? O.intl.string(O.t.Viksoo) : O.intl.string(O.t.WikgZ1);
  return ((0, A.Ay)(() => {
    E.default.track(N.HAw.OPEN_MODAL, {
      type: c.oN,
      guild_id: R,
      other_user_id: T
    })
  }), e.useEffect(() => {
    if (null == b) return void n()
  }, [b, n]), null == b) ? null : (0, i.jsx)(u.Modal, {
    transitionState: M,
    onClose: n,
    title: O.intl.string(O.t["P+6K9C"]),
    subtitle: P,
    actions: [{
      text: m,
      onClick: () => {
        h(), n()
      }
    }]
  })
}