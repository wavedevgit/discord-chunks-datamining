/** Chunk was on 37082 **/
/** chunk id: 69439, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk823379 = require("./823379.js"),
  Chunk617136 = require("./617136.js"),
  Chunk509212 = require("./509212.js"),
  Chunk113434 = require("./113434.js"),
  Chunk569984 = require("./569984.js"),
  Chunk497505 = require("./497505.js"),
  Chunk530691 = require("./530691.js"),
  Chunk110560 = require("./110560.js"),
  Chunk667105 = require("./667105.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.js"),
  Chunk142468 = require("./142468.js");
let v = [{
  value: Chunk46140.cd.DESKTOP,
  get label() {
    return Chunk388032.intl.string(Chunk388032.t.QXc019)
  }
}, {
  value: Chunk46140.cd.CONSOLE,
  get label() {
    return Chunk388032.intl.string(Chunk388032.t["8lAfuL"])
  }
}];

function C(e) {
  let t, n, {
    value: s
  } = e;
  switch (s) {
    case j.cd.DESKTOP:
      n = <i.pzj />, t = _.intl.string(_.t.QXc019);
      break;
    case j.cd.CONSOLE:
      n = <i.iWm />, t = _.intl.string(_.t["8lAfuL"]);
      break;
    default:
      return null
  }
  return <div className={b.platformSelectorPrimaryLabel}>{n}{t}</div>
}

function y(e) {
  if (0 === e.length) return null;
  switch (e[0].value) {
    case j.cd.DESKTOP:
      return <span className={b.platformSelectorPrimaryLabel}>{<i.pzj />}{_.intl.string(_.t["g6Dr4+"])}</span>;
    case j.cd.CONSOLE:
      return <span className={b.platformSelectorPrimaryLabel}>{<i.iWm />}{_.intl.string(_.t.iyNbj4)}</span>;
    default:
      return (0, c.vE)(e[0].value)
  }
}

function O(e) {
  var t, n, O, E;
  let {
    quest: S,
    questContent: T,
    onReceiveErrorHints: w,
    contentPosition: P,
    rowIndex: N,
    sourceQuestContent: A
  } = e, R = (0, o.e7)([l.Z], () => l.Z.useReducedMotion), B = (0, h.g2)({
    useReducedMotion: R
  }), k = (0, u.O5)(), I = (0, p._s)({
    quest: S
  }), q = (0, p.z)(S), D = (0, p.B6)(S.config.expiresAt, {
    month: "numeric",
    day: "numeric"
  }), {
    isClaiming: Q,
    isEnrolling: V,
    isQuestEnrollmentBlocked: L
  } = (0, o.cj)([m.Z], () => ({
    isClaiming: m.Z.isClaimingReward(S.id) || m.Z.isFetchingRewardCode(S.id),
    isEnrolling: m.Z.isEnrolling(S.id),
    isQuestEnrollmentBlocked: null != m.Z.questEnrollmentBlockedUntil
  })), M = (null == (t = S.userStatus) ? true : t.enrolledAt) != null, Z = (null == (n = S.userStatus) ? true : n.completedAt) != null, W = Z && (null == (O = S.userStatus) ? true : O.claimedAt) == null, U = (0, d.iQ)(S), H = !(0, d.zi)(S), z = (0, p._Q)(S), F = (0, d.Xv)(S.config), X = (0, d.PB)(S), K = (0, d.HJ)(S), Y = (0, d.Vl)(S), G = (0, p.Rf)(S), [J, $, ee] = (0, p.me)(S, G), et = H && z === p.OH.ACCEPTED, en = et && J === g.LI.SELECT, er = et && !en && $.length > 1, es = s.useCallback(e => {
    ee(e), e === j.cd.DESKTOP && w([])
  }, [ee, w]), {
    text: eo,
    onClick: ea
  } = (0, h.Ks)({
    progressState: z,
    quest: S,
    questContent: T,
    isCollectibleQuest: F,
    questContentPosition: P,
    questContentRowIndex: N,
    inGiftInventory: true,
    isVideoQuest: X,
    inGameQuest: Y,
    sourceQuestContent: A
  }), {
    startingConsoleQuest: ei,
    startConsoleQuest: el
  } = (0, p.GI)({
    questId: S.id,
    beforeRequest: () => {
      B.startAnimation(), k({
        questId: S.id,
        questContent: T,
        questContentCTA: u.jZ.DEFIBRILLATOR,
        questContentPosition: P,
        questContentRowIndex: N,
        sourceQuestContent: A
      })
    },
    afterRequest: e => {
      B.stopAnimation(), w(e)
    }
  }), ec = (0, f.f)({
    location: j.dr.QUEST_HOME_DESKTOP,
    questFeatures: S.config.features
  }), eu = (null == (E = S.userStatus) ? true : E.claimedAt) != null, ed = null;
  return (U && W ? ed = <a.zx color={a.Tt.BRAND} submitting={Q} onClick={null != ea ? ea : true} className={b.button}>{eo}</a.zx> : Z ? ed = X ? <r.Fragment>{<a.zx color={a.Tt.PRIMARY} className={b.button} style={{
        flex: 1
      }} onClick={() => {
        (0, x.openVideoQuestModal)({
          quest: S,
          questContent: T,
          sourceQuestContent: A,
          sourceQuestContentCTA: u.jZ.WATCH_VIDEO,
          skipEnrollmentCheck: true
        })
      }}><div className={b.ctaInner}>{<i.Oe7 className={b.videoQuestPlayIcon} />}{<span>{_.intl.string(_.t.YsCuyM)}</span>}</div></a.zx>}{<a.zx color={a.Tt.BRAND} className={b.button} onClick={null != ea ? ea : true}>{eo}</a.zx>}</r.Fragment> : <a.zx color={a.Tt.BRAND} className={b.button} onClick={null != ea ? ea : true}>{eo}</a.zx> : H ? H && W ? ed = <a.zx color={a.Tt.BRAND} submitting={Q} onClick={null != ea ? ea : true} className={b.button}>{eo}</a.zx> : K ? ed = ec ? <a.zx color={a.Tt.BRAND} submitting={V} onClick={null != ea ? ea : true} className={b.button}>{eo}</a.zx> : <a.zx color={a.Tt.PRIMARY} disabled={true} className={b.button}>{_.intl.string(_.t.BkZhUF)}</a.zx> : H && M && !eu ? ed = en ? <i.PhF className={b.platformSelectorPrimary} isSelected={() => false} options={v} placeholder={_.intl.string(_.t.drVw4e)} renderOptionLabel={C} renderOptionValue={y} select={es} serialize={e => {
      switch (e) {
        case j.cd.DESKTOP:
          return _.intl.string(_.t.QXc019);
        case j.cd.CONSOLE:
          return _.intl.string(_.t["8lAfuL"]);
        default:
          return (0, c.vE)(e)
      }
    }} /> : (0, d.$J)(S) && !q && J !== g.LI.DESKTOP ? I ? <a.zx color={a.Tt.PRIMARY} className={b.button} onClick={null != ea ? ea : true}>{eo}</a.zx> : <a.zx color={a.Tt.PRIMARY} onClick={el} disabled={ei} className={b.button}><div className={b.ctaInner}>{B.render()}{_.intl.string(_.t.nPThNT)}</div></a.zx> : X || Y && S.config.features.includes(j.S7.START_QUEST_CTA) ? <a.zx color={a.Tt.BRAND} onClick={null != ea ? ea : true} className={b.button}>{eo}</a.zx> : <a.zx color={a.Tt.PRIMARY} disabled={true} className={b.button}>{_.intl.string(_.t["9KoPyM"])}</a.zx> : H && !M && (ed = L ? <r.Fragment>{<a.zx color={a.Tt.PRIMARY} className={b.button} disabled={true}>{_.intl.string(_.t.V293qq)}</a.zx>}{<a.zx color={a.Tt.BRAND} className={b.button} onClick={() => (0, x.openQuestMinorEnrollmentBlockModal)(S, T, A)}>{_.intl.string(_.t.vY9GgI)}</a.zx>}</r.Fragment> : <a.zx submitting={V} color={a.Tt.BRAND} onClick={null != ea ? ea : true} className={b.button}>{eo}</a.zx>) : ed = <a.zx color={a.Tt.PRIMARY} disabled={true} className={b.button}>{_.intl.format(_.t["14o6QU"], {
      expiryDate: D
    })}</a.zx>, null == ed) ? null : <div className={b.container}>{<div className={b.ctaItem}>{ed}</div>}{er && <div className={b.ctaItem}><i.PhF className={b.platformSelectorSecondary} isSelected={e => {
          switch (J) {
            case g.LI.DESKTOP:
              return e === j.cd.DESKTOP;
            case g.LI.CONSOLE:
              return e === j.cd.CONSOLE;
            default:
              returnfalse
          }
        }} options={v} placeholder={_.intl.string(_.t.drVw4e)} renderOptionLabel={C} renderOptionValue={y} select={es} serialize={e => {
          switch (e) {
            case j.cd.DESKTOP:
              return _.intl.string(_.t.QXc019);
            case j.cd.CONSOLE:
              return _.intl.string(_.t["8lAfuL"])
          }
        }} /></div>}</div>
}