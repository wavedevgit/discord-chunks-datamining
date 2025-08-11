/** Chunk was on 13616 **/
/** chunk id: 37607, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
  Chunk481060 = require("./481060.js"),
  Chunk139387 = require("./139387.js"),
  Chunk835473 = require("./835473.js"),
  Chunk471445 = require("./471445.js"),
  Chunk925329 = require("./925329.js"),
  Chunk163400 = require("./163400.js"),
  Chunk63063 = require("./63063.js"),
  Chunk466070 = require("./466070.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk5692 = require("./5692.js");

function x(e) {
  let {
    applicationId: t,
    channels: n
  } = e, r = (0, c.q)(t);
  return 0 === n.length || null == r ? null : <div className={h.applicationGroup}>{<div className={h.header}>{<u.Z game={r} size={u.Z.Sizes.XSMALL} />}{<a.X6q variant={"heading-md/semibold"}>{null == r ? true : r.name}</a.X6q>}</div>}{n.map(e => {
      var t;
      return <b.t channel={e} application={r} name={e.name} icon={null != (t = (0, d.KS)(e)) ? t : true} iconWrapperClassName={h.iconwrapper} hasNextSection={true} trailing={(0, i.jsx)(a.vdY, {
          size: "xs"
        })} />
    })}</div>
}

function j(e) {
  let {
    guild: t
  } = e, n = (0, p.F)(t.id), l = o().groupBy(n, e => {
    var t;
    return null == (t = e.linkedLobby) ? true : t.application_id
  }), c = Object.keys(l);
  return r.useEffect(() => {
    0 === n.length && s.Z.setSection(g.b4C.OVERVIEW)
  }, [n]), <a.hjN>{<a.R94 type={a.geA.DESCRIPTION}>{f.intl.format(f.t["9gsSLi"], {
        helpdeskArticle: m.Z.getArticleURL(g.BhN.LINKED_LOBBIES)
      })}</a.R94>}{<a.$i$ className={h.headerDivider} />}{c.map(e => <x applicationId={e} channels={l[e]} />)}</a.hjN>
}