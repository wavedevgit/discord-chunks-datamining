/** Chunk was on web.js **/
/** chunk id: 7782, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk873546 = require("./873546.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk194359 = require("./194359.js"),
  Chunk100527 = require("./100527.js"),
  Chunk686546 = require("./686546.js"),
  Chunk276506 = require("./276506.js"),
  Chunk333984 = require("./333984.js"),
  Chunk486622 = require("./486622.js"),
  Chunk488634 = require("./488634.js"),
  Chunk86203 = require("./86203.js"),
  Chunk6025 = require("./6025.js"),
  Chunk621853 = require("./621853.js"),
  Chunk892001 = require("./892001.js"),
  Chunk433355 = require("./433355.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk768581 = require("./768581.js"),
  Chunk525541 = require("./525541.js"),
  Chunk981631 = require("./981631.js"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.js"),
  Chunk882875 = require("./882875.js");
let R = 24,
  P = 3,
  w = e => {
    let {
      userId: t,
      channelId: n
    } = e, o = (0, a.e7)([E.Z], () => E.Z.getMutualGuilds(t), [t]), s = i.useMemo(() => null != o ? o.slice(0, P).map((e, t) => {
      let {
        guild: n
      } = e, i = null != n ? I.ZP.getGuildIconURL({
        id: n.id,
        icon: n.icon,
        size: R
      }) : null;
      if (null == i) return null;
      let a = t === (o.length > P ? P : o.length) - 1,
        s = <img src={i} alt={""} className={C.avatar} />;
      return a ? s : <d.ZP className={C.avatarMask} mask={d.ZP.Masks.VOICE_USER_SUMMARY_ITEM} width={R} height={R}>{s}</d.ZP>
    }).filter(e => null != e) : [], [o]);
    if (null == o || 0 === o.length) return <l.Text color={"header-secondary"} variant={"text-sm/normal"}>{N.intl.string(N.t.zjVh8v)}</l.Text>;
    let c = () => {
      (0, b.openUserProfileModal)({
        userId: t,
        channelId: n,
        section: A.oh.MUTUAL_GUILDS,
        sourceAnalyticsLocations: [u.Z.DM_CHANNEL]
      })
    };
    return <r.Fragment>{<div className={C.avatarContainer}>{s}</div>}{<l.P3F onClick={c}><l.Text className={C.mutualGuilds} variant={"text-sm/normal"}>{N.intl.format(N.t.eE3oen, {
            count: o.length
          })}</l.Text></l.P3F>}</r.Fragment>
  },
  D = e => {
    var t;
    let {
      relationshipType: n,
      userId: i,
      showingBanner: o
    } = e, a = null == (t = v.default.getUser(i)) ? true : t.bot, u = () => {
      c.Z.blockUser(i, {
        location: S.ZY5.DM_CHANNEL
      })
    }, d = () => {
      c.Z.removeFriend(i, {
        location: S.ZY5.DM_CHANNEL
      })
    }, _ = () => {
      c.Z.unblockUser(i, {
        location: S.ZY5.DM_CHANNEL
      })
    }, p = () => {
      c.Z.cancelFriendRequest(i, {
        location: S.ZY5.DM_CHANNEL
      })
    }, h = () => {
      c.Z.addRelationship({
        userId: i,
        context: {
          location: S.ZY5.DM_CHANNEL
        }
      })
    }, m = <s.zx className={C.action} size={s.zx.Sizes.TINY} color={s.zx.Colors.PRIMARY} onClick={u}>{N.intl.string(N.t.l4EmaW)}</s.zx>, g = (0, f.n)({
      userId: i
    });
    switch (n) {
      case S.OGo.NONE:
        return <r.Fragment>{!a && !o && <s.zx className={C.action} size={s.zx.Sizes.TINY} onClick={h}>{g}</s.zx>}{m}</r.Fragment>;
      case S.OGo.FRIEND:
        return <r.Fragment>{<s.zx className={C.action} size={s.zx.Sizes.TINY} onClick={d} color={s.zx.Colors.PRIMARY}>{N.intl.string(N.t.cvSt1N)}</s.zx>}{m}</r.Fragment>;
      case S.OGo.BLOCKED:
        return <s.zx className={C.action} size={s.zx.Sizes.TINY} onClick={_} color={s.zx.Colors.PRIMARY}>{N.intl.string(N.t.XyHpKC)}</s.zx>;
      case S.OGo.PENDING_INCOMING:
        return <r.Fragment>{<l.Text className={C.action} color={"header-secondary"} variant={"text-sm/normal"}>{N.intl.string(N.t.c2v5nJ)}</l.Text>}{<s.zx className={C.action} size={s.zx.Sizes.TINY} onClick={h}>{N.intl.string(N.t["+WbSn5"])}</s.zx>}{<s.zx className={C.action} size={s.zx.Sizes.TINY} color={s.zx.Colors.PRIMARY} onClick={p}>{N.intl.string(N.t.rQSndn)}</s.zx>}{m}</r.Fragment>;
      case S.OGo.PENDING_OUTGOING:
        return <r.Fragment>{<s.zx className={C.action} size={s.zx.Sizes.TINY} disabled={true}>{N.intl.string(N.t.xMH6vL)}</s.zx>}{m}</r.Fragment>;
      default:
        return null
    }
  },
  L = e => {
    let {
      channelId: t,
      otherUserId: n
    } = e, o = i.useCallback(() => {
      (0, l.showToast)((0, l.createToast)(N.intl.string(N.t.a2j0ho), l.ToastType.FAILURE))
    }, []), a = i.useCallback(() => {
      g.Z.closeChannelSidebar(y.uZ)
    }, []), s = i.useCallback(() => {
      g.Z.closeChannelSidebar(y.uZ)
    }, []), {
      acceptMessageRequest: c,
      rejectMessageRequest: u,
      isAcceptLoading: d,
      isRejectLoading: f,
      isOptimisticAccepted: _,
      isOptimisticRejected: h
    } = (0, p.m)({
      user: v.default.getUser(n),
      onError: o,
      onAcceptSuccess: s,
      onRejectSuccess: a
    }), m = _ || h, E = d || f || m;
    return <r.Fragment>{<l.zxk variant={"primary"} size={"sm"} disabled={E} onClick={() => c(t)} loading={d} text={N.intl.string(N.t.Kz8Pws)} />}{<l.zxk variant={"secondary"} size={"sm"} disabled={E} onClick={() => u(t)} loading={f} text={N.intl.string(N.t.B2nygY)} />}</r.Fragment>
  },
  x = e => {
    let {
      userId: t,
      channel: n,
      showingBanner: i
    } = e, {
      channelId: s
    } = (0, h._)(), l = (0, a.e7)([_.Z], () => null != s && _.Z.isSpam(s), [s]), c = (0, a.e7)([O.Z], () => O.Z.getRelationshipType(t), [t]), u = n.id === s, d = !o.tq && !u, f = !!o.tq || u || l, p = l || u ? <r.Fragment>{<L channelId={n.id} otherUserId={t} />}{<m.Z channel={n} />}</r.Fragment> : <r.Fragment>{<D relationshipType={c} userId={t} showingBanner={i} />}{!i && <T.Z otherUserId={t} channel={n} navigateAwayOnReportSuccess={d} />}</r.Fragment>;
    return <div className={f ? C.mobileContainer : C.container}>{<div className={C.inline}><w userId={t} channelId={n.id} /></div>}{!f && <div className={C.divider} />}{<div className={C.inline}>{p}</div>}</div>
  }