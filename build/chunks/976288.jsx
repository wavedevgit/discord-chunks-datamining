/** Chunk was on 22988 **/
/** chunk id: 976288, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  d: () => D
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk345074 = require("./345074.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk558324 = require("./558324.jsx"),
  Chunk456268 = require("./456268.js"),
  Chunk681460 = require("./681460.jsx"),
  Chunk345861 = require("./345861.jsx"),
  Chunk650774 = require("./650774.js"),
  Chunk434404 = require("./434404.js"),
  Chunk999382 = require("./999382.js"),
  Chunk718157 = require("./718157.jsx"),
  Chunk450474 = require("./450474.jsx"),
  Chunk166184 = require("./166184.jsx"),
  Chunk936735 = require("./936735.jsx"),
  Chunk654351 = require("./654351.js"),
  Chunk557359 = require("./557359.jsx"),
  Chunk386885 = require("./386885.js"),
  Chunk203377 = require("./203377.js"),
  Chunk929834 = require("./929834.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk356941 = require("./356941.js");

function E() {
  return <Chunk481060.Text tag={"span"} variant={"text-xs/bold"} color={"text-danger"} className={Chunk356941.required}>{"*"}</Chunk481060.Text>
}

function S(e) {
  var t;
  let {
    guild: n,
    requireDescription: c
  } = e, d = i.useCallback(e => {
    p.Z.updateGuild({
      discoverySplash: e
    })
  }, []), u = i.useCallback(() => {
    p.Z.updateGuild({
      discoverySplash: null
    })
  }, []), h = i.useCallback(e => {
    p.Z.updateGuild({
      description: e
    })
  }, []), {
    memberCount: f,
    onlineCount: b
  } = (0, a.cj)([g.Z], () => ({
    memberCount: g.Z.getMemberCount(n.id),
    onlineCount: g.Z.getOnlineCount(n.id)
  }));
  return <div className={I.twoColumns}>{<div className={I.sectionContainer}>{<div>{<o.X6q variant={"text-md/semibold"} color={"header-primary"} className={I.header}>{N.intl.string(N.t.LYju5O)}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t["53LhIy"])}</o.Text>}</div>}{<div>{<o.X6q variant={"text-xs/bold"} color={"text-muted"} className={I.subHeader}>{N.intl.string(N.t.JaecVF)}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t.VJMq8f)}</o.Text>}{<div className={I.buttonList}>{<m.Z size={s.zx.Sizes.SMALL} color={s.zx.Colors.PRIMARY} className={I.editableSection} buttonCTA={N.intl.string(N.t["3UB9aW"])} onChange={d} />}{null != n.discoverySplash ? <div data-button-hoisted-classname-wrapper={true} className={I.editableSection}><o.zxk variant={"critical-secondary"} size={"sm"} text={N.intl.string(N.t.N86XcH)} onClick={u} /></div> : null}</div>}</div>}{<div>{<o.X6q variant={"text-xs/bold"} color={"text-muted"} className={I.subHeader}>{N.intl.string(N.t["1Ts7QE"])}{c ? <E /> : null}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t["6Y9q8f"])}</o.Text>}{<s.iS className={I.editableSection} value={null != (t = n.description) ? t : ""} placeholder={N.intl.string(N.t.Nvfows)} onChange={h} maxLength={l.Us} />}</div>}</div>}{<x.Z className={I.preview} guild={n} memberCount={f} presenceCount={b} />}</div>
}

function T(e) {
  let {
    guild: t,
    guildMetadata: n,
    requirePrimaryCategory: i,
    error: l
  } = e;
  return <div className={I.sectionContainer}>{<div>{<o.X6q variant={"text-md/semibold"} color={"header-primary"} className={I.header}>{N.intl.string(N.t["5b4VCQ"])}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t.MMEJFB)}</o.Text>}</div>}{<div>{<o.X6q variant={"text-xs/bold"} color={"text-muted"} className={I.subHeader}>{N.intl.string(N.t.Rv9An5)}{i ? <E /> : null}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t.CE5Gyc)}</o.Text>}{<div className={I.editableSection}><f.E guildId={t.id} guildMetadata={n} /></div>}</div>}{<div>{<o.X6q variant={"text-xs/bold"} color={"text-muted"} className={I.subHeader}>{N.intl.string(N.t.oOPlPD)}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t["4jnzlZ"])}</o.Text>}{<div className={I.editableSection}><b.Z guild={t} guildMetadata={n} /></div>}{null != l ? <o.Text color={"text-danger"} variant={"text-sm/normal"} className={I.error}>{l}</o.Text> : null}</div>}</div>
}

function P(e) {
  let {
    guildId: t,
    guildMetadata: n,
    requireTag: l,
    error: a
  } = e, [s, m] = i.useState(null), g = i.useCallback(e => {
    let r = [...n.keywords];
    r.splice(e, 1), m(null), (0, d.zH)(t, r)
  }, [t, n]), p = i.useCallback(e => {
    let {
      keywords: r
    } = n;
    r.length >= y.G7 || (m(null), (0, d.zH)(t, [...r, e]))
  }, [t, n]), h = i.useMemo(() => (0, v.P5)(n.primaryCategoryId).filter(e => !n.keywords.includes(e)).map(e => {
    let t = n.keywords.length >= y.G7;
    return {
      text: e,
      onClick: () => p(e),
      disabled: t,
      tooltipText: t ? N.intl.string(N.t.Xx7XeH) : true
    }
  }), [n.keywords, n.primaryCategoryId, p]), f = null != a ? a : s;
  return <div className={I.sectionContainer}>{<div>{<o.X6q variant={"text-md/semibold"} color={"header-primary"} className={I.header}>{N.intl.string(N.t["0PJZXl"])}{l ? <E /> : null}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t.ztiTDA)}</o.Text>}{<c.Z className={I.editableSection} tags={n.keywords} onRemoveTag={g} onAddTag={p} onAddTagError={m} maxTags={y.G7} maxTaxLength={y._0} placeholder={n.keywords.length < 1 ? N.intl.string(N.t.EL4Lho) : true} />}{null != f ? <o.Text color={"text-danger"} variant={"text-sm/normal"} className={I.error}>{f}</o.Text> : null}</div>}{h.length > 0 ? <div>{<o.X6q variant={"text-xs/bold"} color={"text-muted"} className={I.subHeader}>{N.intl.string(N.t.sF28Oj)}</o.X6q>}{<div className={I.editableSection}><u.j pills={h} /></div>}</div> : null}</div>
}

function w(e) {
  let {
    guild: t,
    guildMetadata: n
  } = e, {
    emojiDiscoverabilityEnabled: l
  } = n, a = t.id, c = i.useCallback(() => {
    (0, d.J9)(a, !l)
  }, [a, l]);
  return <div className={I.twoColumns}>{<div>{<o.X6q variant={"text-md/semibold"} color={"header-primary"} className={I.header}>{N.intl.string(N.t.DhJ8ur)}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t["/RSSlZ"])}</o.Text>}{<s.zx className={I.editableSection} size={s.zx.Sizes.SMALL} color={l ? s.zx.Colors.PRIMARY : s.zx.Colors.GREEN} onClick={c}>{l ? N.intl.string(N.t.XnrNLi) : N.intl.string(N.t.bHbZLC)}</s.zx>}</div>}{<div><j.k guild={t} discoverableGuild={null} /></div>}</div>
}

function R(e) {
  let {
    preferredLocale: t
  } = e, n = i.useMemo(() => (0, C.jb)(), []), l = i.useCallback(e => {
    p.Z.updateGuild({
      preferredLocale: e
    })
  }, []);
  return <div className={I.twoColumns}>{<div>{<o.X6q variant={"text-md/semibold"} color={"header-primary"} className={I.header}>{N.intl.string(N.t.pO60f3)}</o.X6q>}{<o.Text variant={"text-sm/medium"} color={"text-secondary"}>{N.intl.string(N.t["SF/GRk"])}</o.Text>}</div>}{<div className={I.localeSelect}><o.q4e value={t} options={n} onChange={l} /></div>}</div>
}

function Z() {
  return <div className={Chunk356941.divider} />
}

function D(e) {
  let {
    requireTerms: t,
    rules: n,
    settingsView: i
  } = e, {
    errors: l,
    guildMetadata: s,
    guild: o
  } = (0, a.cj)([h.Z], () => {
    let {
      errors: e,
      guildMetadata: t,
      guild: n
    } = h.Z.getProps();
    return {
      errors: e,
      guildMetadata: t,
      guild: n
    }
  });
  if (null == o) return null;
  let c = i === O.U.ELIGIBLE_DISABLED;
  return <div className={I.settings}>{<S guild={o} requireDescription={c} />}{<Z />}{<T guild={o} guildMetadata={s} requirePrimaryCategory={c} error={l.discovery_splash} />}{<Z />}{<P guildId={o.id} guildMetadata={s} requireTag={c} error={l.keywords} />}{<Z />}{<w guild={o} guildMetadata={s} />}{<Z />}{<R preferredLocale={o.preferredLocale} />}{<Z />}{<div><_.A requireTerms={t} rules={n} /></div>}</div>
}