/** Chunk was on 86142 **/
/** chunk id: 949155, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  B_: () => v,
  FC: () => A,
  Fk: () => j,
  IK: () => S,
  PX: () => b,
  TZ: () => C,
  ji: () => N,
  zN: () => O
}), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk397927 = require("./397927.js"),
  Chunk854378 = require("./854378.jsx"),
  Chunk769015 = require("./769015.jsx"),
  Chunk714991 = require("./714991.jsx"),
  Chunk486020 = require("./486020.js"),
  Chunk427262 = require("./427262.js"),
  Chunk172799 = require("./172799.js"),
  Chunk652215 = require("./652215.js"),
  Chunk330936 = require("./330936.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk779715 = require("./779715.js");
let A = 100,
  x = e => {
    var t, n;
    let r = {
      onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
      memberCount: null != (n = e.approximate_member_count) ? n : 0
    };
    return 0 === r.memberCount && 0 === r.memberCount ? null : r
  },
  E = e => e.target_type === p.yV.STREAM && null != e.target_user,
  v = e => {
    var t;
    return (null == (t = e.channel) ? true : t.type) === g.rbe.GROUP_DM
  },
  b = e => null == e.channel && null == e.guild && null != e.inviter,
  y = e => e.state === g.elq.ACCEPTED,
  j = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t
  },
  I = e => {
    var t;
    let n;
    return !j(e) && (!!b(e) || null != e.inviter && !y(e) && !((null != (t = null == (n = x(e)) ? true : n.memberCount) ? t : 0) > A))
  },
  O = e => {
    let {
      guild: t,
      user: n,
      application: i
    } = e;
    return null != i ? (0, r.jsx)(c.A, {
      className: m.Z2,
      game: i,
      size: m.q6
    }) : null != n ? (0, r.jsx)(o.eu, {
      src: n.getAvatarURL(true, 100),
      size: a._3J.DEPRECATED_SIZE_100,
      className: m.my
    }) : null != t ? (0, r.jsx)(o.$v, {
      guild: t,
      size: o.$v.Sizes.LARGER,
      className: m.$f,
      animate: true
    }) : null
  };

function S(e) {
  var t;
  let {
    invite: n,
    textClassName: i,
    className: s
  } = e, a = x(n);
  return null == a || I(n) || (null == n || null == (t = n.guild) ? true : t.id) === _.TA ? null : (0, r.jsx)(o.R1, {
    className: l()(m.He, s),
    online: a.onlineCount,
    total: a.memberCount,
    textClassName: i,
    flat: true
  })
}

function N(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, s = i.useMemo(() => n ? null : E(t) && null != t.target_user ? u.Ay.getUserAvatarURL(t.target_user) : I(t) && null != t.inviter ? u.Ay.getUserAvatarURL(t.inviter) : null, [t, n]), l = f.intl.string(f.t["3rE1P8"]);
  if (v(t)) {
    var c, d;
    l = (null == (c = t.channel) ? true : c.name) != null && (null == (d = t.inviter) ? true : d.username) != null ? f.intl.format(f.t.Lu4h18, {
      username: t.inviter.username
    }) : f.intl.string(f.t.OsdY8B)
  } else E(t) && null != t.target_user ? l = f.intl.formatToPlainString(f.t.x2L32Q, {
    username: t.target_user.username
  }) : y(t) ? l = f.intl.string(f.t["FDsl+J"]) : I(t) && null != t.inviter && (l = f.intl.format(f.t.spU2mI, {
    username: h.Ay.getFormattedName(t.inviter)
  }));
  return (0, r.jsxs)("div", {
    className: m.JB,
    children: [null != s && (0, r.jsx)("div", {
      className: m._t,
      children: (0, r.jsx)(o.eu, {
        src: s,
        size: a._3J.SIZE_24
      })
    }), (0, r.jsx)(o.tK, {
      className: m.__invalid_inviteJoinSubTitle,
      children: l
    })]
  })
}

function C(e) {
  let t, n, i, {
    user: s,
    guild: l,
    channel: c,
    application: u,
    showBigUserIcon: p
  } = e;
  if (null != l) p && null == u && (t = (0, r.jsx)(o.$v, {
    guild: l,
    size: o.$v.Sizes.SMALL
  })), n = l.name, null != u && (n = u.name, i = (0, r.jsxs)("div", {
    className: m.JB,
    children: [(0, r.jsx)(o.tK, {
      className: m.R9,
      children: f.intl.string(f.t["3gg9fF"])
    }), (0, r.jsxs)("div", {
      className: m.bo,
      children: [(0, r.jsx)(o.$v, {
        guild: l,
        size: o.$v.Sizes.SMALL
      }), (0, r.jsx)(a.Heading, {
        color: "text-strong",
        variant: "heading-xl/semibold",
        children: l.name
      })]
    })]
  }));
  else if (null != c) {
    if (null == s) throw Error("no inviter in group DM invite");
    let e = h.Ay.getFormattedName(s);
    null != c.name && "" !== c.name ? (n = c.name, null != c.icon && (t = (0, r.jsx)(o.F4, {
      channel: c,
      size: a._3J.SIZE_32
    }))) : n = e
  } else if (null != s) {
    let e = h.Ay.getFormattedName(s);
    n = f.intl.formatToPlainString(f.t["4aF92R"], {
      username: e
    }), i = (0, r.jsx)(o.tK, {
      className: m.b$,
      children: f.intl.format(f.t.Quj7HX, {
        username: e
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.hE, {
      className: m.DD,
      children: [null != l ? (0, r.jsx)(d.A, {
        guild: l,
        className: m.n2,
        tooltipPosition: "left"
      }) : null, t, n]
    }), i]
  })
}