/** Chunk was on 22988 **/
/** chunk id: 58909, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk204418 = require("./204418.js"),
  Chunk731722 = require("./731722.js"),
  Chunk172751 = require("./172751.js"),
  Chunk446094 = require("./446094.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk5192 = require("./5192.js"),
  Chunk742409 = require("./742409.js"),
  Chunk195196 = require("./195196.js"),
  Chunk388032 = require("./388032.js"),
  Chunk816123 = require("./816123.js");

function j(e) {
  var t, n;
  let {
    guildId: i
  } = e, j = (0, a.e7)([m.Z], () => m.Z.getGuild(i)), v = (0, a.e7)([g.default], () => g.default.getCurrentUser()), {
    onAdoptTag: _,
    isAdopting: O
  } = (0, u.Z)(i), y = (null == v || null == (t = v.primaryGuild) ? true : t.identityGuildId) === i && (null == v || null == (n = v.primaryGuild) ? true : n.identityEnabled) === true;
  if (null != v && null != j && (0, c.jq)(j)) return <div className={x.container}>{<s.Text className={x.section} variant={"text-xs/medium"} color={"text-muted"}>{y ? b.intl.string(f.default["6xBCpK"]) : b.intl.string(f.default.eSRKe3)}</s.Text>}{<div className={x.divider} />}{<div className={l()(x.section, x.body)}>{<h.l avatar={(0, r.jsx)(o.Z, {
          user: v,
          guildId: i,
          avatarSize: s.EFr.SIZE_40,
          "aria-hidden": true
        })} decorations={(0, r.jsx)(d.m0, {
          guildId: j.id,
          guildBadge: j.profile.badge,
          guildTag: j.profile.tag,
          inline: false
        })} username={p.ZP.getName(i, null, v)} message={b.intl.string(b.t["6OSasb"])} />}{<s.zxk variant={"primary"} text={b.intl.string(b.t.cQDYRk)} onClick={_} loading={O} disabled={y} fullWidth={true} />}</div>}</div>
}