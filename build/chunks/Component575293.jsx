/** Chunk was on web.js **/
/** chunk id: 575293, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk615300 = require("./615300.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk775602 = require("./775602.js"),
  Chunk47167 = require("./47167.js"),
  Chunk713654 = require("./713654.js"),
  Chunk418842 = require("./418842.js"),
  Chunk734057 = require("./734057.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk225142 = require("./225142.js"),
  Chunk374084 = require("./374084.js"),
  Chunk101611 = require("./101611.js"),
  Chunk473529 = require("./473529.js"),
  Chunk111487 = require("./111487.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk392605 = require("./392605.js");
let S = {
  compact: 58,
  cozy: 74,
  default: 64
};

function T(e) {
  let {
    action: t
  } = e, n = (0, l.bG)([_.A], () => _.A.getChannel(t.channelId)), i = (0, d.Ay)(n, true);
  return null == n ? (0, r.jsx)(c.Text, {
    variant: "text-xxs/normal",
    color: "text-default",
    children: A.intl.format(A.t.MkzlDL, {
      channelName: A.intl.string(A.t.J90oLW)
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-xxs/normal",
    color: "text-default",
    children: A.intl.format(A.t.MkzlDL, {
      channelName: i
    })
  })
}

function C(e) {
  var t;
  let {
    channelId: n,
    emojiId: i,
    emojiName: a
  } = e, s = (0, l.bG)([_.A], () => _.A.getChannel(n));
  if (null == s) return null;
  let o = null != (t = (0, f.gU)(s)) ? t : c.N$i;
  return (0, r.jsx)(O.A, {
    emojiId: i,
    emojiName: a,
    size: O.g.MEDIUM,
    defaultComponent: (0, r.jsx)(o, {
      className: I.p
    })
  })
}

function N(e) {
  var t, n, a, d;
  let {
    guildId: f,
    channel: _,
    className: h
  } = e, {
    channelAction: m,
    completed: b
  } = (0, y.j4)(f, _), O = (0, y.Lr)(f, null == m ? true : m.channelId), v = (0, l.bG)([u.A], () => u.A.useReducedMotion), N = (null == m ? true : m.actionType) === E.NewMemberActionTypes.VIEW, w = (0, c.rdh)(c.LU0.colors.WHITE), R = S[(0, p.C)()], [P, D] = i.useState(false), [x] = i.useState(new o.A.Value(0)), [L] = i.useState(new o.A.Value(0));
  i.useEffect(() => {
    b ? o.A.timing(x, {
      toValue: 0,
      duration: v ? 1 : 350,
      easing: o.A.Easing.quad,
      delay: 500 * !N
    }).start(() => D(true)) : o.A.timing(x, {
      toValue: 1,
      duration: v ? 1 : 350,
      easing: o.A.Easing.quad,
      delay: 400
    }).start()
  }, [b, x, N, v]), i.useEffect(() => {
    b && P && o.A.timing(L, {
      toValue: 1,
      duration: 350 * !v,
      easing: o.A.Easing.quad,
      delay: 400
    }).start()
  }, [b, L, P, v]);
  let j = i.useCallback(() => {
    null != O && (0, g.qo)(f, O.channelId)
  }, [f, O]);
  return null == m || N && !P ? null : (0, r.jsx)("div", {
    className: s()(I.kL, h),
    children: P && null != O ? (0, r.jsx)(o.A.div, {
      style: {
        marginBottom: L.interpolate({
          inputRange: [0, 1],
          outputRange: [-R, 0]
        })
      },
      children: (0, r.jsxs)(c.DUT, {
        className: s()(I.vK, I.vk, {
          [I.pJ]: _.isForumChannel()
        }),
        onClick: j,
        children: [(0, r.jsx)(C, {
          channelId: O.channelId,
          emojiId: null == (t = O.emoji) ? true : t.id,
          emojiName: null == O || null == (n = O.emoji) ? true : n.name
        }), (0, r.jsxs)("div", {
          className: I.Qq,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: A.intl.format(A.t["/beONw"], {
              step: O.title
            })
          }), (0, r.jsx)(T, {
            action: O
          })]
        }), (0, r.jsx)("div", {
          className: I.kJ,
          children: (0, r.jsx)(c.EdP, {
            size: "xs",
            color: w.hex(),
            className: I.fz
          })
        })]
      })
    }) : (0, r.jsxs)(o.A.div, {
      className: s()(I.vK, {
        [I.pJ]: _.isForumChannel()
      }),
      style: {
        marginBottom: x.interpolate({
          inputRange: [0, 1],
          outputRange: [-R, 0]
        })
      },
      children: [(0, r.jsx)(C, {
        channelId: m.channelId,
        emojiId: null == (a = m.emoji) ? true : a.id,
        emojiName: null == m || null == (d = m.emoji) ? true : d.name
      }), (0, r.jsxs)("div", {
        className: I.Qq,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: m.title
        }), (0, r.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: A.intl.string(A.t["ElGg8+"])
        })]
      }), b ? (0, r.jsx)(c.yr3, {
        size: "custom",
        color: "currentColor",
        className: I.so,
        secondaryColor: w.hex(),
        width: 20,
        height: 20
      }) : null]
    })
  })
}

function w(e) {
  let {
    guildId: t,
    channel: n,
    className: i
  } = e, a = (0, b.d)(t), s = (0, l.bG)([h.Ay], () => {
    var e;
    return (null == (e = h.Ay.getSelfMember(t)) ? true : e.isPending) === true
  }), o = (0, y.jY)(t), c = (0, l.bG)([m.A], () => {
    var e;
    return null == (e = m.A.getGuild(t)) ? true : e.features.has(v.GuildFeatures.GUILD_SERVER_GUIDE)
  });
  return o || s || !a || !c ? null : (0, r.jsx)(N, {
    guildId: t,
    channel: n,
    className: i
  })
}