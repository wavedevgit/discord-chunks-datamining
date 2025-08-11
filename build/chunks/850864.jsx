/** Chunk was on 22988 **/
/** chunk id: 850864, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk399606 = require("./399606.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk210887 = require("./210887.js"),
  Chunk430824 = require("./430824.js"),
  Chunk999382 = require("./999382.js"),
  Chunk8426 = require("./8426.js"),
  Chunk969632 = require("./969632.js"),
  Chunk998164 = require("./998164.js"),
  Chunk340189 = require("./340189.jsx"),
  Chunk507317 = require("./507317.jsx"),
  Chunk399614 = require("./399614.jsx"),
  Chunk387960 = require("./387960.jsx"),
  Chunk806742 = require("./806742.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk773100 = require("./773100.js"),
  Chunk91716 = require("./91716.js"),
  Chunk470264 = require("./470264.js"),
  Chunk710043 = require("./710043.js"),
  Chunk847950 = require("./847950.js");

function N(e) {
  let {
    guild: t,
    saveOnClose: n
  } = e, [c, d] = i.useState("new"), N = i.useMemo(() => [{
    value: "new",
    name: j.intl.string(j.t["4e5u3t"])
  }, {
    value: "existing",
    name: j.intl.string(j.t.cmkOsb)
  }], []), I = (0, l.e7)([o.Z], () => o.Z.theme);
  i.useEffect(() => () => {
    let e = m.Z.getSettings();
    (0, u.oo)(t.id, e)
  }, [n, t.id]);
  let E = i.useMemo(() => (0, a.ap)(I) ? "existing" === c ? O : C : "existing" === c ? _ : y, [c, I]);
  return <div className={v.page}>{<div className={v.leftColumn}>{<s.X6q className={v.header} variant={"heading-lg/extrabold"}>{j.intl.string(j.t.tbUZVl)}</s.X6q>}{<div className={v.descriptionSection}><s.Text variant={"text-sm/medium"} color={"header-secondary"}>{j.intl.string(j.t.DvHCq6)}</s.Text></div>}{<div className={v.section}><x.Z guildId={t.id} /></div>}{<div className={v.sectionSeparator} />}{<s.X6q className={v.header} variant={"heading-lg/extrabold"}>{j.intl.string(j.t["roY/ws"])}</s.X6q>}{<div className={v.descriptionSection}><s.Text variant={"text-sm/medium"} color={"header-secondary"}>{j.intl.format(j.t["/lWYYW"], {})}</s.Text></div>}{<div className={v.section}><p.Z /></div>}{<g.Z guildId={t.id} />}{<div className={v.sectionSeparator} />}{<s.X6q className={v.header} variant={"heading-lg/extrabold"}>{j.intl.string(j.t.hEjHyM)}</s.X6q>}{<div className={v.descriptionSection}>{<s.Text variant={"text-sm/medium"} color={"header-secondary"}>{j.intl.string(j.t.YnvKVF)}</s.Text>}{<ul className={v.bulletList}>{<li><s.Text tag={"span"} variant={"text-sm/medium"} color={"header-secondary"}>{j.intl.string(j.t["6jEvRU"])}</s.Text></li>}{<li><s.Text tag={"span"} variant={"text-sm/medium"} color={"header-secondary"}>{j.intl.string(j.t["Fq+UsL"])}</s.Text></li>}{<li><s.Text tag={"span"} variant={"text-sm/medium"} color={"header-secondary"}>{j.intl.string(j.t.LeEPoK)}</s.Text></li>}</ul>}</div>}{<div className={v.section}>{<b.Z guildId={t.id} />}{<f.Z guildId={t.id} />}</div>}{<div className={v.sectionSeparator} />}{<h.Z guild={t} />}</div>}{<div className={v.rightColumn}>{<div className={v.centeredSection}><s.Text variant={"text-sm/medium"} color={"header-secondary"}>{j.intl.string(j.t.EVV6ub)}</s.Text></div>}{<img className={v.previewImage} src={E} alt={j.intl.string(j.t.ST4UOz)} />}{<s.sY7 options={N} value={c} onChange={e => d(e.value)} look={"pill"} />}</div>}</div>
}

function I(e) {
  let {
    saveOnClose: t
  } = e, n = (0, l.e7)([d.Z, c.Z], () => {
    let e = d.Z.getGuildId();
    return c.Z.getGuild(e)
  });
  return null == n ? null : <N guild={n} saveOnClose={t} />
}