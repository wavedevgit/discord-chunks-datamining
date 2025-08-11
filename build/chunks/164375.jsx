/** Chunk was on 87337 **/
/** chunk id: 164375, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => N
}), require("./388685.js"), require("./290780.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk785232 = require("./785232.js"),
  Chunk592125 = require("./592125.js"),
  Chunk626135 = require("./626135.js"),
  Chunk799352 = require("./799352.js"),
  Chunk343544 = require("./343544.js"),
  Chunk14251 = require("./14251.jsx"),
  Chunk110223 = require("./110223.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk193728 = require("./193728.js");
let g = e => {
    let {
      numOfBlockedUsers: n,
      numOfIgnoredUsers: t
    } = e, i = n > 0, r = t > 0;
    return i && r ? <s.Fragment>{_.intl.string(_.t.xbRNIy)}{<br />}{_.intl.string(_.t["Bp2/np"])}</s.Fragment> : i ? <s.Fragment>{_.intl.format(_.t.iKtixc, {
        n: n
      })}{<br />}{_.intl.string(_.t.SN1hrq)}</s.Fragment> : r ? <s.Fragment>{_.intl.format(_.t["6IRwub"], {
        n: t
      })}{<br />}{_.intl.string(_.t["6AKLRk"])}</s.Fragment> : null
  },
  j = e => {
    let {
      channelId: n,
      blockedUserIds: t,
      ignoredUserIds: i
    } = e, a = o.Z.getChannel(n), d = t.length > 0, c = i.length > 0, u = [{
      icon: <div className={f.icon}><r.owK /></div>,
      text: _.intl.string(_.t["RIMw5+"]),
      className: f.row
    }, {
      icon: <div className={f.icon}><r.d3s /></div>,
      text: _.intl.string(_.t.bejNWF),
      className: f.row
    }];
    if (d && c) {
      let e = [...t, ...i],
        o = e.slice(0, 2);
      u.unshift({
        icon: <div className={f.icon}><l.Z recipients={o} size={r.EFr.SIZE_32} /></div>,
        text: (0, m.a)(o, e.length, null == a ? true : a.guild_id, n),
        className: f.row
      })
    } else {
      let e = d ? [...t].slice(0, 2) : [...i].slice(0, 2),
        r = d ? t.length : i.length;
      u.unshift({
        icon: <div className={f.icon}>{(0, m.r)(e, null == a ? true : a.guild_id)}</div>,
        text: (0, m.a)(e, r, null == a ? true : a.guild_id, n),
        className: f.row
      })
    }
    return u
  };

function N(e) {
  let {
    channelId: n,
    blockedUserIds: t,
    ignoredUserIds: r = [],
    transitionState: l,
    onClose: o
  } = e;
  return i.useEffect(() => {
    d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_VIEWED, {
      channel_id: n,
      warning_medium: x.WR.MODAL,
      blocked_user_ids: t,
      ignored_user_ids: r
    })
  }, [n, t, r]), <u.Z headerText={_.intl.string(_.t["mwJJ+f"])} descriptionText={(0, s.jsx)(g, {
      numOfBlockedUsers: t.length,
      numOfIgnoredUsers: r.length
    })} infoRows={j({
      channelId: n,
      blockedUserIds: t,
      ignoredUserIds: r
    })} onDismissAndStay={() => {
      o(), (0, c.O)(n), d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: x.q.CLICK_TO_STAY,
        channel_id: n,
        warning_medium: x.WR.MODAL,
        blocked_user_ids: t,
        ignored_user_ids: r
      })
    }} onDismissAndLeave={() => {
      o(), (0, c.O)(n), a.Z.closePrivateChannel(n, true, true), d.default.track(h.rMx.GDM_BLOCKED_USER_WARNING_ENGAGEMENT, {
        action: x.q.CLICK_TO_LEAVE,
        channel_id: n,
        warning_medium: x.WR.MODAL,
        blocked_user_ids: t,
        ignored_user_ids: r
      })
    }} leaveButtonText={_.intl.string(_.t.I4q1kJ)} stayButtonText={_.intl.string(_.t.DRJhmZ)} transitionState={l} onClose={o} />
}