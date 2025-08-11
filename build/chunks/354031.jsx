/** Chunk was on 22988 **/
/** chunk id: 354031, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  P: () => u
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk63063 = require("./63063.js"),
  Chunk434404 = require("./434404.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk307906 = require("./307906.js");

function u(e) {
  let {
    features: t,
    canManageGuild: n
  } = e, u = i.useCallback(e => {
    let n = new Set(t);
    e ? n.add(o.oNc.SUMMARIES_ENABLED_BY_USER) : n.delete(o.oNc.SUMMARIES_ENABLED_BY_USER), s.Z.updateGuild({
      features: n
    })
  }, [t]);
  return <l.hjN>{<l.vwX className={d.subtitle}>{c.intl.string(c.t.FOYxgo)}{<l.IGR text={c.intl.string(c.t.oW0eUV)} color={l.TVs.unsafe_rawColors.BRAND_500.css} />}</l.vwX>}{<l.Text variant={"text-sm/medium"} color={"text-secondary"} className={d.description}>{c.intl.format(c.t["c6Cy/v"], {
        helpdeskArticle: a.Z.getArticleURL(o.BhN.CONVERSATION_SUMMARIES)
      })}</l.Text>}{<l.j7V className={d.switch} onChange={u} value={t.has(o.oNc.SUMMARIES_ENABLED_BY_USER)} hideBorder={true} disabled={!n}>{c.intl.string(c.t.vmEDQk)}</l.j7V>}</l.hjN>
}