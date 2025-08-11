/** Chunk was on 22988 **/
/** chunk id: 708510, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  O: () => T
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk456268 = require("./456268.js"),
  Chunk863249 = require("./863249.js"),
  Chunk981312 = require("./981312.js"),
  Chunk430824 = require("./430824.js"),
  Chunk63063 = require("./63063.js"),
  Chunk500496 = require("./500496.js"),
  Chunk999382 = require("./999382.js"),
  Chunk209054 = require("./209054.js"),
  Chunk96788 = require("./96788.js"),
  Chunk217472 = require("./217472.js"),
  Chunk202905 = require("./202905.jsx"),
  Chunk44867 = require("./44867.jsx"),
  Chunk557359 = require("./557359.jsx"),
  Chunk658666 = require("./658666.js"),
  Chunk307375 = require("./307375.jsx"),
  Chunk384632 = require("./384632.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk162193 = require("./162193.js");

function I(e) {
  let {
    pendingState: t
  } = e, n = i.useRef(false), l = i.useCallback(async e => {
    if (!n.current) try {
      await (0, p.k)(e), (0, h.V)(e), (0, s.le)(), (0, s.aC)(e)
    } finally {
      n.current = true
    }
  }, [n]);
  switch (t.joinType) {
    case O.A.INVITE:
      return <j.A requireTerms={t.requireTerms} rules={t.termRules} />;
    case O.A.APPLY:
      return <b.r pendingFields={t.pendingVerificationFields} />;
    case O.A.DISCOVERABLE:
      return <x.c fetchDiscoveryData={l} settingsView={t.settingsView} requireTerms={t.requireTerms} rules={t.termRules} />
  }
}

function E(e) {
  let {
    guildId: t
  } = e, {
    nsfwLevel: n,
    ownerConfiguredContentLevel: s
  } = (0, l.cj)([d.Z], () => {
    var e, n;
    return {
      nsfwLevel: null == (e = d.Z.getGuild(t)) ? true : e.nsfwLevel,
      ownerConfiguredContentLevel: null == (n = d.Z.getGuild(t)) ? true : n.ownerConfiguredContentLevel
    }
  }), o = (0, l.e7)([v.Z], () => {
    var e;
    return null == (e = v.Z.pendingState) ? true : e.isAgeRestricted
  }), c = i.useCallback(e => {
    f.Z.setIsAgeRestricted(t, e)
  }, [t]), m = n === y.V_K.AGE_RESTRICTED && s !== y.V_K.AGE_RESTRICTED;
  return <a.hjN><a.j7V onChange={c} value={o} hideBorder={true} disabled={m} note={C.intl.format(C.t["iyQQ6+"], {
        helpArticleLink: u.Z.getArticleURL(y.BhN.NSFW_SERVER_AGE_RESTRICTION)
      })}>{C.intl.string(C.t.N9xEJC)}</a.j7V></a.hjN>
}

function S(e) {
  let {
    guildId: t
  } = e, n = (0, c.U)();
  return !(0, m.j0)({
    guildId: t,
    location: "guild-settings"
  }) || n ? null : <r.Fragment>{<div className={N.divider} />}{<E guildId={t} />}</r.Fragment>
}

function T() {
  let e = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps().guild),
    t = (0, Chunk442837.e7)([Chunk658666.Z], () => Chunk658666.Z.pendingState);
  Chunk73800.useEffect(() => {
    (null == module ? true : module.id) != null && Chunk863249.ZP.fetchVerificationForm(module.id)
  }, [null == module ? true : module.id]);
  let n = Chunk73800.useCallback(t => {
    (null == e ? true : e.id) != null && f.Z.setSelectedJoinType(e.id, t)
  }, [null == module ? true : module.id]);
  if (null == module || null == exports) return null;
  let {
    joinType: s
  } = exports;
  return <Chunk481060.Kqy gap={32}>{<Chunk481060.X6q color={"header-primary"} variant={"heading-lg/semibold"}>{Chunk388032.intl.string(Chunk388032.t.YJlvBA)}</Chunk481060.X6q>}{<Chunk307375.h onTypePicked={require} activeType={Chunk456268} guild={module} />}{<div className={Chunk162193.divider} />}{<div><I pendingState={exports} /></div>}{null != module && <S guildId={module.id} />}</Chunk481060.Kqy>
}