/** Chunk was on 52343 **/
/** chunk id: 725034, original params: t,i,l (module,exports,require) **/
require.d(exports, {
  default: () => k
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

function k(t) {
  var i;
  let {
    onClose: l,
    transitionState: k,
    guildId: p
  } = t, M = (0, a.bG)([A.default], () => A.default.getId()), T = (0, a.bG)([d.Ay], () => d.Ay.getMember(p, M), [p, M]), b = (0, a.bG)([_.A], () => _.A.getGuild(p), [p]), C = null != (i = null == b ? true : b.name) ? i : "", D = (0, f.wj)(T), {
    analyticsLocations: I
  } = (0, s.Ay)(u.A.AUTOMOD_PROFILE_QUARANTINE_ALERT), [P, R] = (0, g.j8)({
    guildId: p,
    analyticsLocations: I
  }), S = D.has(O.D.AUTOMOD_QUARANTINED_USERNAME_OR_GUILD_NICKNAME) ? h.intl.formatToPlainString(h.t.Oh20JS, {
    guildName: C
  }) : h.intl.formatToPlainString(h.t["+VAZ/Z"], {
    guildName: C
  });
  R || (S = h.intl.formatToPlainString(h.t.tcrtME, {
    guildName: C
  }));
  let U = R ? h.intl.string(h.t.Viksoo) : h.intl.string(h.t.WikgZ1);
  return ((0, o.Ay)(() => {
    c.default.track(N.HAw.OPEN_MODAL, {
      type: E.oN,
      guild_id: p,
      other_user_id: M
    })
  }), e.useEffect(() => {
    if (null == b) return void l()
  }, [b, l]), null == b) ? null : (0, n.jsx)(r.Modal, {
    transitionState: k,
    onClose: l,
    title: h.intl.string(h.t["P+6K9C"]),
    subtitle: S,
    actions: [{
      text: U,
      onClick: () => {
        P(), l()
      }
    }]
  })
}