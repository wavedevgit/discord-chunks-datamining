/** Chunk was on 86142 **/
/** chunk id: 949155, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  B_: () => b,
  FC: () => x,
  Fk: () => y,
  IK: () => O,
  PX: () => v,
  TZ: () => T,
  ji: () => I,
  zN: () => N
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
let x = 100,
  _ = e => {
    var t, n;
    let r = {
      onlineCount: null != (t = e.approximate_presence_count) ? t : 0,
      memberCount: null != (n = e.approximate_member_count) ? n : 0
    };
    return 0 === r.memberCount && 0 === r.memberCount ? null : r
  },
  E = e => e.target_type === f.yV.STREAM && null != e.target_user,
  b = e => {
    var t;
    return (null == (t = e.channel) ? true : t.type) === p.rbe.GROUP_DM
  },
  v = e => null == e.channel && null == e.guild && null != e.inviter,
  j = e => e.state === p.elq.ACCEPTED,
  y = e => {
    let {
      guild_scheduled_event: t
    } = e;
    return null != t
  },
  S = e => {
    var t;
    let n;
    return !y(e) && (!!v(e) || null != e.inviter && !j(e) && !((null != (t = null == (n = _(e)) ? true : n.memberCount) ? t : 0) > x))
  },
  N = e => {
    let {
      guild: t,
      user: n,
      application: i
    } = e;
    return null != i ? (0, r.jsx)(c.A, {
      className: A.Z2,
      game: i,
      size: A.q6
    }) : null != n ? (0, r.jsx)(o.eu, {
      src: n.getAvatarURL(true, 100),
      size: a._3J.DEPRECATED_SIZE_100,
      className: A.my
    }) : null != t ? (0, r.jsx)(o.$v, {
      guild: t,
      size: o.$v.Sizes.LARGER,
      className: A.$f,
      animate: true
    }) : null
  };

function O(e) {
  var t;
  let {
    invite: n,
    textClassName: i,
    className: s
  } = e, a = _(n);
  return null == a || S(n) || (null == n || null == (t = n.guild) ? true : t.id) === g.TA ? null : (0, r.jsx)(o.R1, {
    className: l()(A.He, s),
    online: a.onlineCount,
    total: a.memberCount,
    textClassName: i,
    flat: true
  })
}

function I(e) {
  let {
    invite: t,
    showBigUserIcon: n
  } = e, s = i.useMemo(() => n ? null : E(t) && null != t.target_user ? d.Ay.getUserAvatarURL(t.target_user) : S(t) && null != t.inviter ? d.Ay.getUserAvatarURL(t.inviter) : null, [t, n]), l = m.intl.string(m.t["3rE1P8"]);
  if (b(t)) {
    var c, u;
    l = (null == (c = t.channel) ? true : c.name) != null && (null == (u = t.inviter) ? true : u.username) != null ? m.intl.format(m.t.Lu4h18, {
      username: t.inviter.username
    }) : m.intl.string(m.t.OsdY8B)
  } else E(t) && null != t.target_user ? l = m.intl.formatToPlainString(m.t.x2L32Q, {
    username: t.target_user.username
  }) : j(t) ? l = m.intl.string(m.t["FDsl+J"]) : S(t) && null != t.inviter && (l = m.intl.format(m.t.spU2mI, {
    username: h.Ay.getFormattedName(t.inviter)
  }));
  return (0, r.jsxs)("div", {
    className: A.JB,
    children: [null != s && (0, r.jsx)("div", {
      className: A._t,
      children: (0, r.jsx)(o.eu, {
        src: s,
        size: a._3J.SIZE_24
      })
    }), (0, r.jsx)(o.tK, {
      className: A.__invalid_inviteJoinSubTitle,
      children: l
    })]
  })
}

function T(e) {
  let t, n, i, {
    user: s,
    guild: l,
    channel: c,
    application: d,
    showBigUserIcon: f
  } = e;
  if (null != l) f && null == d && (t = (0, r.jsx)(o.$v, {
    guild: l,
    size: o.$v.Sizes.SMALL
  })), n = l.name, null != d && (n = d.name, i = (0, r.jsxs)("div", {
    className: A.JB,
    children: [(0, r.jsx)(o.tK, {
      className: A.R9,
      children: m.intl.string(m.t["3gg9fF"])
    }), (0, r.jsxs)("div", {
      className: A.bo,
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
    n = m.intl.formatToPlainString(m.t["4aF92R"], {
      username: e
    }), i = (0, r.jsx)(o.tK, {
      className: A.b$,
      children: m.intl.format(m.t.Quj7HX, {
        username: e
      })
    })
  }
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)(o.hE, {
      className: A.DD,
      children: [null != l ? (0, r.jsx)(u.A, {
        guild: l,
        className: A.n2,
        tooltipPosition: "left"
      }) : null, t, n]
    }), i]
  })
}