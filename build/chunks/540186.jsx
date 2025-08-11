/** Chunk was on 24231 **/
/** chunk id: 540186, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => j
}), require("./953529.js"), require("./539854.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk594174 = require("./594174.js"),
  Chunk311888 = require("./311888.jsx"),
  Chunk63063 = require("./63063.js"),
  Chunk5192 = require("./5192.js"),
  Chunk431328 = require("./431328.js"),
  Chunk501655 = require("./501655.js"),
  Chunk659972 = require("./659972.js"),
  Chunk981631 = require("./981631.js"),
  Chunk765305 = require("./765305.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk158170 = require("./158170.js");

function f(e) {
  let {
    icon: t
  } = e;
  return <div className={p.iconContainer}><t color={"currentColor"} size={"md"} /></div>
}

function v(e) {
  let {
    icon: t,
    text: n
  } = e;
  return <div className={p.listItemContainer}>{<div className={p.listItemIconContainer}>{t}</div>}{<a.Text className={p.listItemText} variant={"text-md/normal"} color={"header-secondary"}>{n}</a.Text>}</div>
}

function _(e) {
  var t;
  let {
    guild: n,
    channel: l,
    stageData: a
  } = e, s = (0, i.e7)([o.default], () => o.default.getCurrentUser(), []), c = {
    id: "1337",
    guild_id: n.id,
    channel_id: l.id,
    topic: a.topic,
    description: a.description,
    privacy_level: null != (t = a.privacyLevel) ? t : g.j8.PUBLIC
  }, h = (0, u.w8)(l.id, x.pV.SPEAKER), b = (0, u.Rk)(l.id, x.pV.AUDIENCE), f = h.slice(0, 5);
  return null == f.find(e => {
    var t;
    return (null == (t = e.user) ? true : t.id) === (null == s ? true : s.id)
  }) && f.push({
    user: s,
    userNick: d.ZP.getName(n.id, l.id, s)
  }), <div className={p.previewCardContainer}><div className={p.previewCard}><m.Z guild={n} stageInstance={c} showGuildPopout={false} setShowGuildPopout={() => {}} source={m.k.UNSPECIFIED} speakers={f} speakerCount={h.length} audienceCount={Math.max(1337, b)} channelName={l.name} /></div></div>
}

function j(e) {
  let {
    guild: t,
    channel: n,
    stageData: i,
    headerId: o,
    loading: d,
    onNext: u,
    onCancel: x,
    onBack: m
  } = e;
  return null == t || null == n || null == i ? null : <r.Fragment>{<_ guild={t} channel={n} stageData={i} />}{<a.hzk className={p.container}>{<div className={p.header}>{<a.X6q id={o} className={p.__invalid_title} variant={"heading-xl/semibold"}>{b.intl.string(b.t.GXpXTE)}</a.X6q>}{<a.Text className={p.subtitle} color={"header-secondary"} variant={"text-sm/normal"}>{b.intl.string(b.t.JaYMvL)}</a.Text>}</div>}{<div className={p.__invalid_list}>{<v icon={(0, r.jsx)(f, {
            icon: a.Jmo
          })} text={b.intl.string(b.t.u6oOcn)} />}{<v icon={(0, r.jsx)(f, {
            icon: a.iFz
          })} text={b.intl.string(b.t.QC8ymZ)} />}{<v icon={(0, r.jsx)(f, {
            icon: a.vdY
          })} text={b.intl.string(b.t.mgGOT0)} />}{<v icon={(0, r.jsx)(s.Z, {
            className: p.badgeIconBackground,
            foreground: p.badgeIconForeground,
            width: 40,
            height: 40
          })} text={b.intl.format(b.t.qLmNLC, {
            articleURL: c.Z.getArticleURL(h.BhN.STAGE_CHANNEL_GUIDELINES)
          })} />}</div>}</a.hzk>}{<a.mzw>{<a.zxk variant={"active"} text={b.intl.string(b.t.s8mM8P)} onClick={u} loading={d} />}{<div data-button-hoisted-classname-wrapper={true} className={p.cancelButton}><a.zxk variant={"secondary"} text={b.intl.string(b.t["ETE/oK"])} onClick={x} /></div>}{<l.zx look={l.zx.Looks.LINK} color={l.zx.Colors.LINK} className={p.backButton} onClick={m} size={l.zx.Sizes.MIN}>{b.intl.string(b.t["13/7kZ"])}</l.zx>}</a.mzw>}</r.Fragment>
}