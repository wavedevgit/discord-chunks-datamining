/** Chunk was on 27978 **/
/** chunk id: 230224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GB: () => N,
  JI: () => y,
  UM: () => T,
  V6: () => S,
  WT: () => E,
  X7: () => j,
  jq: () => C,
  mx: () => x
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk388905 = require("./388905.jsx"),
  Chunk925329 = require("./925329.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk768581 = require("./768581.js"),
  Chunk51144 = require("./51144.js"),
  Chunk245335 = require("./245335.js"),
  Chunk981631 = require("./981631.js"),
  Chunk888592 = require("./888592.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk215613 = require("./215613.js");
let x = 100,
  b = e => {
    var t, n;
    let r = {
      onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
      memberCount: null != (n = e.approximate_member_count) ? n : 0
    };
    return 0 === r.memberCount && 0 === r.memberCount ? null : r
  },
  v = e => e.target_type === p.Iq.STREAM && null != e.target_user,
  E = e => {
    var t;
    return (null == (t = e.channel) ? true : t.type) === m.d4z.GROUP_DM
  },
  j = e => null == e.channel && null == e.guild && null != e.inviter,
  I = e => e.state === m.r2o.ACCEPTED,
  y = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t
  },
  O = e => !y(e) && (!!j(e) || null != e.inviter && !I(e) && !(e => {
    var t;
    let n = b(e);
    return (null != (t = null == n ? true : n.memberCount) ? t : 0) > x
  })(e)),
  N = e => {
    let {
      guild: t,
      user: n,
      application: i
    } = e;
    return null != i ? (0, r.jsx)(c.Z, {
      className: _.appIcon,
      game: i,
      size: _.appIconSize
    }) : null != n ? (0, r.jsx)(o.qE, {
      src: n.getAvatarURL(true, 100),
      size: s.EFr.DEPRECATED_SIZE_100,
      className: _.avatar
    }) : null != t ? (0, r.jsx)(o.Vj, {
      guild: t,
      size: o.Vj.Sizes.LARGER,
      className: _.guildIcon,
      animate: true
    }) : null
  };

function S(e) {
  var t;
  let {
    invite: n,
    textClassName: i,
    className: l
  } = e, s = b(n);
  return null == s || O(n) || (null == n || null == (t = n.guild) ? true : t.id) === g.fQ ? null : (0, r.jsx)(o.EJ, {
    className: a()(_.activityCount, l),
    online: s.onlineCount,
    total: s.memberCount,
    textClassName: i,
    flat: true
  })
}

function C(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, l = i.useMemo(() => n ? null : v(t) && null != t.target_user ? d.ZP.getUserAvatarURL(t.target_user) : O(t) && null != t.inviter ? d.ZP.getUserAvatarURL(t.inviter) : null, [t, n]), a = f.intl.string(f.t["3rE1Pz"]);
  if (E(t)) {
    var c, u;
    a = (null == (c = t.channel) ? true : c.name) != null && (null == (u = t.inviter) ? true : u.username) != null ? f.intl.format(f.t.Lu4h19, {
      username: t.inviter.username
    }) : f.intl.string(f.t.OsdY8P)
  } else v(t) && null != t.target_user ? a = f.intl.formatToPlainString(f.t.x2L32d, {
    username: t.target_user.username
  }) : I(t) ? a = f.intl.string(f.t["FDsl+P"]) : O(t) && null != t.inviter && (a = f.intl.format(f.t.spU2mJ, {
    username: h.ZP.getFormattedName(t.inviter)
  }));
  return (0, r.jsxs)("div", {
    className: _.inviteJoinContainer,
    children: [null != l && (0, r.jsx)("div", {
      className: _.inviterIconWrapper,
      children: (0, r.jsx)(o.qE, {
        src: l,
        size: s.EFr.SIZE_24
      })
    }), (0, r.jsx)(o.DK, {
      className: _.__invalid_inviteJoinSubTitle,
      children: a
    })]
  })
}

function T(e) {
  let t, n, i, {
    user: l,
    guild: a,
    channel: c,
    application: d,
    showBigUserIcon: p
  } = e;
  if (null != a) p && null == d && (t = (0, r.jsx)(o.Vj, {
    guild: a,
    size: o.Vj.Sizes.SMALL
  })), n = a.name, null != d && (n = d.name, i = (0, r.jsxs)("div", {
    className: _.inviteJoinContainer,
    children: [(0, r.jsx)(o.DK, {
      className: _.appIn,
      children: f.intl.string(f.t["3gg9fH"])
    }), (0, r.jsxs)("div", {
      className: _.guildContainer,
      children: [(0, r.jsx)(o.Vj, {
        guild: a,
        size: o.Vj.Sizes.SMALL
      }), (0, r.jsx)(s.X6q, {
        color: "header-primary",
        variant: "heading-xl/semibold",
        children: a.name
      })]
    })]
  }));
  else if (null != c) {
    if (null == l) throw Error("no inviter in group DM invite");
    let e = h.ZP.getFormattedName(l);
    null != c.name && "" !== c.name ? (n = c.name, null != c.icon && (t = (0, r.jsx)(o.MC, {
      channel: c,
      size: s.EFr.SIZE_32
    }))) : n = e
  } else if (null != l) {
    let e = h.ZP.getFormattedName(l);
    n = f.intl.formatToPlainString(f.t["4aF92d"], {
      username: e
    }), i = (0, r.jsx)(o.DK, {
      className: _.directInviteSubTitle,
      children: f.intl.format(f.t.Quj7HR, {
        username: e
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.Dx, {
      className: _.title,
      children: [null != a ? (0, r.jsx)(u.Z, {
        guild: a,
        className: _.guildBadge,
        tooltipPosition: "left"
      }) : null, t, n]
    }), i]
  })
}