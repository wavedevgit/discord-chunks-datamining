/** Chunk was on 10778 **/
/** chunk id: 659900, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./388685.js"), require("./583741.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk866442 = require("./866442.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk893776 = require("./893776.js"),
  Chunk37234 = require("./37234.js"),
  Chunk232567 = require("./232567.js"),
  Chunk820160 = require("./820160.js"),
  Chunk471445 = require("./471445.js"),
  Chunk884902 = require("./884902.js"),
  Chunk131704 = require("./131704.js"),
  Chunk345162 = require("./345162.js"),
  Chunk594174 = require("./594174.js"),
  Chunk259580 = require("./259580.jsx"),
  Chunk539600 = require("./539600.js"),
  Chunk350566 = require("./350566.js"),
  Chunk837748 = require("./837748.js"),
  Chunk971401 = require("./971401.js"),
  Chunk306453 = require("./306453.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk697698 = require("./697698.js");

function b(e) {
  let t = !(arguments.length > 1) || true === arguments[1] || arguments[1],
    [n, s] = r.useState(""),
    [l, a] = r.useState(null),
    [c, d] = r.useState(null),
    u = (0, E.Z)(e.code);
  r.useEffect(() => {
    !async function() {
      let e = v.default.getCurrentUser();
      if (null == e) try {
        e = await (0, L.k)()
      } catch (e) {
        C.Z.verifySSOToken("accept_guild_template", null)
      }
      null != e && s(M.intl.formatToPlainString(u.defaultName, {
        username: e.username
      }))
    }()
  }, [u.defaultName]), (0, Z.Z)(e);
  let x = <i.Fragment>{t ? <T.Z guildTemplate={e} /> : null}{<div className={S.icon}><h.Z icon={l} onChange={a} /></div>}{<o.xJW title={u.nameLabel}><o.oil type={"text"} value={n} maxLength={100} onChange={s} error={null == c ? true : c.name} /></o.xJW>}{<o.Text variant={"text-xs/normal"} color={"text-muted"} className={S.guidelines}>{M.intl.format(u.terms, {
          guidelinesURL: _.EYA.GUIDELINES
        })}</o.Text>}</i.Fragment>,
    f = e.serializedSourceGuild.roles.map(t => N.wD(e.serializedSourceGuild.id, t)).filter(e => !(0, p.fI)(e));
  return {
    form: x,
    preview: <i.Fragment>{<div className={S.divider} />}{<o.xJW className={S.previewSection} title={M.intl.string(M.t.Zxk1OD)}>{<G channels={e.serializedSourceGuild.channels} />}{<o.Text variant={"text-xs/normal"} color={"header-secondary"} className={S.protip}>{<span className={S.protipText}>{M.intl.string(M.t["8tvIiI"])}{":"}</span>}{" "}{M.intl.string(M.t.de7DpK)}</o.Text>}</o.xJW>}{f.length > 0 ? <o.xJW className={S.previewSection} title={M.intl.string(M.t["RJ1e/v"])}><I guildId={e.serializedSourceGuild.id} roles={f} /></o.xJW> : null}</i.Fragment>,
    handleSubmit: () => {
      H.Z.acceptGuildTemplate(e.code, n, l).then(() => {
        (0, o.pTH)(), (0, m.Ou)()
      }).catch(e => d(e))
    }
  }
}

function G(e) {
  let {
    channels: t
  } = e, n = c()(t).sortBy(e => null == e.parent_id ? 1e4 * Number(e.id) : 1e4 * Number(e.parent_id) + e.id).map(e => {
    var t;
    let n = (t = e).type === _.d4z.GUILD_CATEGORY ? j.Z : (0, x.KS)((0, g.q_)(t));
    return <div className={l()(S.channel, {
        [S.category]: e.type === _.d4z.GUILD_CATEGORY
      })}>{null != n ? <n className={S.channelIcon} /> : null}{<o.Text className={S.channelText} variant={"text-sm/normal"}>{e.name}</o.Text>}</div>
  }).value();
  return <div className={S.channelsWrapper}>{n}</div>
}

function I(e) {
  let {
    guildId: t,
    roles: n
  } = e, r = n.slice().reverse().map(e => <R guildId={t} role={e} />);
  return <ul className={S.rolesWrapper}>{r}</ul>
}

function R(e) {
  var t, n;
  let {
    guildId: r,
    role: s
  } = e, l = (0, o.dQu)(u.Z.colors.BORDER_SUBTLE).hex(), a = null == s.color ? l : (0, d.Rf)(s.color), c = (0, f._f)(r, s, s.colorStrings);
  return <li className={S.role} style={{
      borderColor: null != (t = (0, d.wK)(a, .6)) ? t : true,
      backgroundColor: null != (n = (0, d.wK)(a, .075)) ? n : true
    }}>{<o.xko className={S.roleCircle} color={a} colors={c} />}{<o.Text variant={"text-xs/medium"}>{s.name}</o.Text>}</li>
}
require("./418757.js")