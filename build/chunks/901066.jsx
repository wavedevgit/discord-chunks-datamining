/** Chunk was on 9924 **/
/** chunk id: 901066, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => A
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk913527 = require("./913527.js"),
  o = require.n(Chunk913527),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk906732 = require("./906732.js"),
  Chunk252618 = require("./252618.js"),
  Chunk693546 = require("./693546.js"),
  Chunk246364 = require("./246364.js"),
  Chunk328977 = require("./328977.js"),
  Chunk666233 = require("./666233.jsx"),
  Chunk360328 = require("./360328.jsx"),
  Chunk172751 = require("./172751.jsx"),
  Chunk892001 = require("./892001.js"),
  Chunk598077 = require("./598077.js"),
  Chunk430824 = require("./430824.js"),
  Chunk709054 = require("./709054.js"),
  Chunk51144 = require("./51144.js"),
  Chunk981631 = require("./981631.js"),
  Chunk131085 = require("./131085.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk145870 = require("./145870.js"),
  Chunk157092 = require("./157092.js");

function I(e) {
  let {
    icon: t,
    label: n,
    onClick: r,
    disabled: a
  } = e;
  return <d.P3F className={i()(P.actionButton, {
      [P.disabled]: a
    })} onClick={a ? E.dG4 : r} aria-label={n}>{<t size={"custom"} color={"currentColor"} width={20} height={20} />}{<d.Text variant={"text-sm/normal"} color={"none"}>{n}</d.Text>}</d.P3F>
}

function Z(e) {
  let {
    user: t,
    guildId: n,
    joinRequest: r
  } = e, {
    analyticsLocations: a
  } = (0, u.ZP)(), s = () => {
    (0, v.openUserProfileModal)({
      userId: t.id,
      joinRequestId: r.joinRequestId,
      sourceAnalyticsLocations: a
    })
  };
  return <div className={P.infoContainer}>{<div className={R.memberNameContainer}>{<d.P3F onClick={s} className={i()(P.clickable, R.memberAvatar)}><d.qEK src={t.getAvatarURL(n, 48)} aria-label={t.username} size={d.EFr.SIZE_48} /></d.P3F>}{<div className={R.memberNameAndTagContainer}>{<div className={R.memberNameTextContainer}>{<d.P3F onClick={s} className={P.clickable}><d.Text variant={"text-lg/medium"}>{null == t ? true : t.globalName}</d.Text></d.P3F>}{<p.ZP primaryGuild={null == t ? true : t.primaryGuild} userId={null == t ? true : t.id} contextGuildId={n} badgeSize={N.Gg.SIZE_16} textVariant={"heading-md/semibold"} className={R.memberClanTag} containerClassName={R.memberClanTagContainer} />}</div>}{<d.P3F onClick={s} className={P.clickable}><d.Text variant={"text-md/medium"} color={"text-default"}>{T.ZP.getUserTag(t)}</d.Text></d.P3F>}</div>}</div>}{<d.P3F className={R.closeAction} onClick={() => x.Z.setSelectedGuildJoinRequest(n, null)}><d.Dio size={"md"} color={"currentColor"} /></d.P3F>}</div>
}

function w(e) {
  let {
    user: t,
    guildId: n,
    joinRequest: r
  } = e, {
    approveRequest: a,
    rejectRequest: i,
    handleOpenInterview: s,
    submitting: o
  } = (0, f.s)(n, t.id, r.joinRequestId, r.interviewChannelId);
  return <div className={P.actionRow}>{<I icon={d.owK} label={S.intl.string(S.t.BzjDQE)} onClick={a} disabled={o} />}{<I icon={d.k$p} label={S.intl.string(S.t.hDtbs7)} onClick={i} disabled={o} />}{<I icon={d.kBi} label={S.intl.string(S.t.KQeYoK)} onClick={s} disabled={o} />}</div>
}

function y(e) {
  var t;
  let {
    joinRequest: n
  } = e, {
    actionedAt: r,
    actionedByUser: a,
    rejectionReason: i
  } = n;
  return <div className={P.actionContainer}>{<d.k$p size={"lg"} color={d.TVs.colors.BACKGROUND_BASE_LOWER} secondaryColor={d.TVs.colors.INTERACTIVE_NORMAL} />}{<div>{<d.Text variant={"text-md/medium"} color={"header-primary"}>{S.intl.string(S.t.bSZklZ)}</d.Text>}{null != a && null != r ? <div className={P.actionedInfo}>{<d.Text variant={"text-sm/normal"} color={"text-muted"}>{S.intl.formatToPlainString(S.t.qnimbG, {
            username: null != (t = a.global_name) ? t : a.username
          })}</d.Text>}{<div className={P.dot} />}{<d.Text variant={"text-sm/normal"} color={"text-muted"}>{o()(_.default.extractTimestamp(r)).format("ll")}</d.Text>}</div> : null}{null != i && <d.Text variant={"text-sm/normal"} color={"text-muted"}>{S.intl.formatToPlainString(S.t.fU5PPD, {
          rejectionReason: i
        })}</d.Text>}</div>}</div>
}

function M(e) {
  var t;
  let {
    joinRequest: n
  } = e, {
    actionedAt: r,
    actionedByUser: a
  } = n;
  return <div className={P.actionContainer}>{<d.owK size={"lg"} color={d.TVs.colors.STATUS_POSITIVE_BACKGROUND} secondaryColor={d.TVs.colors.STATUS_POSITIVE_TEXT} />}{<div>{<d.Text variant={"text-md/medium"} color={"header-primary"}>{S.intl.string(S.t.aURgY2)}</d.Text>}{null != a && null != r ? <div className={P.actionedInfo}>{<d.Text variant={"text-sm/normal"} color={"text-muted"}>{S.intl.formatToPlainString(S.t.qnimbG, {
            username: null != (t = a.global_name) ? t : a.username
          })}</d.Text>}{<div className={P.dot} />}{<d.Text variant={"text-sm/normal"} color={"text-muted"}>{o()(_.default.extractTimestamp(r)).format("ll")}</d.Text>}</div> : null}</div>}</div>
}

function O(e) {
  let {
    user: t,
    joinRequest: n
  } = e;
  return <l.Fragment>{<d.Text className={P.accountLabel} variant={"text-sm/medium"} color={"text-muted"}>{S.intl.string(S.t["ldCE/v"])}</d.Text>}{<div className={P.userInfoContainer}>{<div className={P.infoRow}>{<d.Text variant={"text-sm/normal"} color={"text-default"}>{S.intl.string(S.t.SaDIpK)}</d.Text>}{<d.Text variant={"text-sm/normal"} color={"text-default"}>{o()(_.default.extractTimestamp(t.id)).format("ll")}</d.Text>}</div>}{<div className={P.infoRow}>{<d.Text variant={"text-sm/normal"} color={"text-default"}>{S.intl.string(S.t.Vt4cn5)}</d.Text>}{<d.Text variant={"text-sm/normal"} color={"text-default"}>{o()(n.createdAt).format("ll")}</d.Text>}</div>}</div>}</l.Fragment>
}

function A(e) {
  let {
    guildId: t
  } = e, n = (0, j.L)({
    guildId: t
  }), {
    user: a
  } = null != n ? n : {}, s = r.useMemo(() => {
    var e;
    return null != (e = null == n ? true : n.formResponses) ? e : []
  }, [null == n ? true : n.formResponses]), o = r.useMemo(() => null != a ? new g.Z(a) : null, [a]), u = (0, c.e7)([C.Z], () => C.Z.getGuild(t), [t]);
  return ((0, m.Tt)({
    subsection: S.intl.string(S.t.nqrK8f),
    location: null == u ? true : u.name
  }), null == n || null == u || null == o || null == a) ? null : <section className={P.sidebar}><d.Ttm><div className={P.innerContainer}>{<div className={P.cardContainer}>{<Z user={o} guildId={t} joinRequest={n} />}{n.applicationStatus === h.wB.SUBMITTED && <w user={o} guildId={t} joinRequest={n} />}{n.applicationStatus === h.wB.REJECTED && <y joinRequest={n} />}{n.applicationStatus === h.wB.APPROVED && <M joinRequest={n} />}</div>}{<div className={i()(P.cardContainer, P.responsesContainer)}>{<b.Z guildId={u.id} formFields={s} user={o} showRequirements={false} />}{<O guildId={t} user={o} joinRequest={n} />}</div>}</div></d.Ttm></section>
}