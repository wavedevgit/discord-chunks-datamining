/** Chunk was on 27978 **/
/** chunk id: 230224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GB: () => S,
  JI: () => N,
  UM: () => A,
  V6: () => y,
  WT: () => j,
  X7: () => b,
  jq: () => C,
  mx: () => x
}), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  s = require.n(Chunk120356),
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
  Chunk546488 = require("./546488.js");
let x = 100,
  E = e => {
    var t, n;
    let r = {
      onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
      memberCount: null != (n = e.approximate_member_count) ? n : 0
    };
    return 0 === r.memberCount && 0 === r.memberCount ? null : r
  },
  v = e => e.target_type === f.Iq.STREAM && null != e.target_user,
  j = e => {
    var t;
    return (null == (t = e.channel) ? true : t.type) === p.d4z.GROUP_DM
  },
  b = e => null == e.channel && null == e.guild && null != e.inviter,
  I = e => e.state === p.r2o.ACCEPTED,
  N = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t
  },
  O = e => !N(e) && (!!b(e) || null != e.inviter && !I(e) && !(e => {
    var t;
    let n = E(e);
    return (null != (t = null == n ? true : n.memberCount) ? t : 0) > x
  })(e)),
  S = e => {
    let {
      guild: t,
      user: n,
      application: i
    } = e;
    return null != i ? (0, r.jsx)(c.Z, {
      className: _.appIcon,
      game: i,
      size: _.appIconSize
    }) : null != n ? (0, r.jsx)(a.qE, {
      src: n.getAvatarURL(true, 100),
      size: o.EFr.DEPRECATED_SIZE_100,
      className: _.avatar
    }) : null != t ? (0, r.jsx)(a.Vj, {
      guild: t,
      size: a.Vj.Sizes.LARGER,
      className: _.guildIcon,
      animate: true
    }) : null
  };

function y(e) {
  var t;
  let {
    invite: n,
    textClassName: i,
    className: l
  } = e, o = E(n);
  return null == o || O(n) || (null == n || null == (t = n.guild) ? true : t.id) === g.fQ ? null : (0, r.jsx)(a.EJ, {
    className: s()(_.activityCount, l),
    online: o.onlineCount,
    total: o.memberCount,
    textClassName: i,
    flat: true
  })
}

function C(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, l = i.useMemo(() => n ? null : v(t) && null != t.target_user ? d.ZP.getUserAvatarURL(t.target_user) : O(t) && null != t.inviter ? d.ZP.getUserAvatarURL(t.inviter) : null, [t, n]), s = m.intl.string(m.t["3rE1Pz"]);
  if (j(t)) {
    var c, u;
    s = (null == (c = t.channel) ? true : c.name) != null && (null == (u = t.inviter) ? true : u.username) != null ? m.intl.format(m.t.Lu4h19, {
      username: t.inviter.username
    }) : m.intl.string(m.t.OsdY8P)
  } else v(t) && null != t.target_user ? s = m.intl.formatToPlainString(m.t.x2L32d, {
    username: t.target_user.username
  }) : I(t) ? s = m.intl.string(m.t["FDsl+P"]) : O(t) && null != t.inviter && (s = m.intl.format(m.t.spU2mJ, {
    username: h.ZP.getFormattedName(t.inviter)
  }));
  return (0, r.jsxs)("div", {
    className: _.inviteJoinContainer,
    children: [null != l && (0, r.jsx)("div", {
      className: _.inviterIconWrapper,
      children: (0, r.jsx)(a.qE, {
        src: l,
        size: o.EFr.SIZE_24
      })
    }), (0, r.jsx)(a.DK, {
      className: _.__invalid_inviteJoinSubTitle,
      children: s
    })]
  })
}

function A(e) {
  let t, n, i, {
    user: l,
    guild: s,
    channel: c,
    application: d,
    showBigUserIcon: f
  } = e;
  if (null != s) f && null == d && (t = (0, r.jsx)(a.Vj, {
    guild: s,
    size: a.Vj.Sizes.SMALL
  })), n = s.name, null != d && (n = d.name, i = (0, r.jsxs)("div", {
    className: _.inviteJoinContainer,
    children: [(0, r.jsx)(a.DK, {
      className: _.appIn,
      children: m.intl.string(m.t["3gg9fH"])
    }), (0, r.jsxs)("div", {
      className: _.guildContainer,
      children: [(0, r.jsx)(a.Vj, {
        guild: s,
        size: a.Vj.Sizes.SMALL
      }), (0, r.jsx)(o.X6q, {
        color: "header-primary",
        variant: "heading-xl/semibold",
        children: s.name
      })]
    })]
  }));
  else if (null != c) {
    if (null == l) throw Error("no inviter in group DM invite");
    let e = h.ZP.getFormattedName(l);
    null != c.name && "" !== c.name ? (n = c.name, null != c.icon && (t = (0, r.jsx)(a.MC, {
      channel: c,
      size: o.EFr.SIZE_32
    }))) : n = e
  } else if (null != l) {
    let e = h.ZP.getFormattedName(l);
    n = m.intl.formatToPlainString(m.t["4aF92d"], {
      username: e
    }), i = (0, r.jsx)(a.DK, {
      className: _.directInviteSubTitle,
      children: m.intl.format(m.t.Quj7HR, {
        username: e
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.Dx, {
      className: _.title,
      children: [null != s ? (0, r.jsx)(u.Z, {
        guild: s,
        className: _.guildBadge,
        tooltipPosition: "left"
      }) : null, t, n]
    }), i]
  })
}