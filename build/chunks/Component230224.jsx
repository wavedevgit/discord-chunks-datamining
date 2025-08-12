/** Chunk was on 27978 **/
/** chunk id: 230224, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  GB: () => y,
  JI: () => S,
  UM: () => T,
  V6: () => C,
  WT: () => v,
  X7: () => j,
  jq: () => A,
  mx: () => x
}), require("./415506.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
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
  Chunk97029 = require("./97029.js");
let x = 100,
  b = e => {
    var t, n;
    let r = {
      onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
      memberCount: null != (n = e.approximate_member_count) ? n : 0
    };
    return 0 === r.memberCount && 0 === r.memberCount ? null : r
  },
  E = e => e.target_type === p.Iq.STREAM && null != e.target_user,
  v = e => {
    var t;
    return (null == (t = e.channel) ? true : t.type) === f.d4z.GROUP_DM
  },
  j = e => null == e.channel && null == e.guild && null != e.inviter,
  I = e => {
    var t;
    let n = b(e);
    return (null != (t = null == n ? true : n.memberCount) ? t : 0) > x
  },
  O = e => e.state === f.r2o.ACCEPTED,
  S = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t
  },
  N = e => !S(e) && (!!j(e) || null != e.inviter && !O(e) && !I(e)),
  y = e => {
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
      size: s.EFr.DEPRECATED_SIZE_100,
      className: _.avatar
    }) : null != t ? (0, r.jsx)(a.Vj, {
      guild: t,
      size: a.Vj.Sizes.LARGER,
      className: _.guildIcon,
      animate: true
    }) : null
  };

function C(e) {
  var t;
  let {
    invite: n,
    textClassName: i,
    className: l
  } = e, s = b(n);
  return null == s || N(n) || (null == n || null == (t = n.guild) ? true : t.id) === m.fQ ? null : (0, r.jsx)(a.EJ, {
    className: o()(_.activityCount, l),
    online: s.onlineCount,
    total: s.memberCount,
    textClassName: i,
    flat: true
  })
}

function A(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, l = i.useMemo(() => n ? null : E(t) && null != t.target_user ? d.ZP.getUserAvatarURL(t.target_user) : N(t) && null != t.inviter ? d.ZP.getUserAvatarURL(t.inviter) : null, [t, n]), o = g.intl.string(g.t["3rE1Pz"]);
  if (v(t)) {
    var c, u;
    o = (null == (c = t.channel) ? true : c.name) != null && (null == (u = t.inviter) ? true : u.username) != null ? g.intl.format(g.t.Lu4h19, {
      username: t.inviter.username
    }) : g.intl.string(g.t.OsdY8P)
  } else E(t) && null != t.target_user ? o = g.intl.formatToPlainString(g.t.x2L32d, {
    username: t.target_user.username
  }) : O(t) ? o = g.intl.string(g.t["FDsl+P"]) : N(t) && null != t.inviter && (o = g.intl.format(g.t.spU2mJ, {
    username: h.ZP.getFormattedName(t.inviter)
  }));
  return (0, r.jsxs)("div", {
    className: _.inviteJoinContainer,
    children: [null != l && (0, r.jsx)("div", {
      className: _.inviterIconWrapper,
      children: (0, r.jsx)(a.qE, {
        src: l,
        size: s.EFr.SIZE_24
      })
    }), (0, r.jsx)(a.DK, {
      className: _.__invalid_inviteJoinSubTitle,
      children: o
    })]
  })
}

function T(e) {
  let t, n, i, {
    user: l,
    guild: o,
    channel: c,
    application: d,
    showBigUserIcon: p
  } = e;
  if (null != o) p && null == d && (t = (0, r.jsx)(a.Vj, {
    guild: o,
    size: a.Vj.Sizes.SMALL
  })), n = o.name, null != d && (n = d.name, i = (0, r.jsxs)("div", {
    className: _.inviteJoinContainer,
    children: [(0, r.jsx)(a.DK, {
      className: _.appIn,
      children: g.intl.string(g.t["3gg9fH"])
    }), (0, r.jsxs)("div", {
      className: _.guildContainer,
      children: [(0, r.jsx)(a.Vj, {
        guild: o,
        size: a.Vj.Sizes.SMALL
      }), (0, r.jsx)(s.X6q, {
        color: "header-primary",
        variant: "heading-xl/semibold",
        children: o.name
      })]
    })]
  }));
  else if (null != c) {
    if (null == l) throw Error("no inviter in group DM invite");
    let e = h.ZP.getFormattedName(l);
    null != c.name && "" !== c.name ? (n = c.name, null != c.icon && (t = (0, r.jsx)(a.MC, {
      channel: c,
      size: s.EFr.SIZE_32
    }))) : n = e
  } else if (null != l) {
    let e = h.ZP.getFormattedName(l);
    n = g.intl.formatToPlainString(g.t["4aF92d"], {
      username: e
    }), i = (0, r.jsx)(a.DK, {
      className: _.directInviteSubTitle,
      children: g.intl.format(g.t.Quj7HR, {
        username: e
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(a.Dx, {
      className: _.title,
      children: [null != o ? (0, r.jsx)(u.Z, {
        guild: o,
        className: _.guildBadge,
        tooltipPosition: "left"
      }) : null, t, n]
    }), i]
  })
}