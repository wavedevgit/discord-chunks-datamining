/** Chunk was on 58023 **/
/** chunk id: 530436, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  W: () => m
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk434404 = require("./434404.js"),
  Chunk496675 = require("./496675.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk821022 = require("./821022.js");

function m(e) {
  let {
    guild: t,
    error: n,
    onClose: m
  } = e, x = t.id, g = l.useCallback(() => {
    m(), s.Z.open(x, c.pNK.INVITES)
  }, [x, m]), h = l.useCallback(e => <i.P3F className={d.errorLink} onClick={g}><i.Text variant={"text-xs/normal"} color={"text-link"} tag={"span"}>{e}</i.Text></i.P3F>, [g]), v = l.useCallback(e => <i.eee href={c.EYA.INVITES_HELP} target={"_blank"}><i.Text variant={"text-xs/normal"} color={"text-link"} tag={"span"}>{e}</i.Text></i.eee>, []), p = n instanceof a.Z ? n.code !== c.evJ.TOO_MANY_INVITES ? n.getAnyErrorMessage() : o.Z.can(c.Plq.MANAGE_GUILD, t) ? u.intl.format(u.t["H/RUY2"], {
    inviteListHook: h,
    inviteHelpHook: v
  }) : u.intl.string(u.t["/FxH6O"]) : "message" in n ? n.message : u.intl.string(u.t.eAn6z8);
  return <i.Text className={d.errorMessage} variant={"text-xs/normal"} color={"text-danger"}>{p}</i.Text>
}