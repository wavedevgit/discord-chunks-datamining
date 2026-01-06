/** Chunk was on web.js **/
/** chunk id: 898188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => P
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk748780 = require("./748780.js"),
  Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk607070 = require("./607070.js"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk264783 = require("./264783.js"),
  Chunk592125 = require("./592125.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk526120 = require("./526120.js"),
  Chunk734893 = require("./734893.js"),
  Chunk655359 = require("./655359.js"),
  Chunk931261 = require("./931261.js"),
  Chunk216701 = require("./216701.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk388778 = require("./388778.js");
let T = {
  compact: 58,
  cozy: 74,
  default: 64
};

function C(e) {
  let {
    action: t
  } = e, n = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channelId)), i = (0, d.ZP)(n, true);
  return null == n ? (0, r.jsx)(c.Text, {
    variant: "text-xxs/normal",
    color: "text-default",
    children: S.intl.format(S.t.MkzlDL, {
      channelName: S.intl.string(S.t.J90oLW)
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-xxs/normal",
    color: "text-default",
    children: S.intl.format(S.t.MkzlDL, {
      channelName: i
    })
  })
}

function A(e) {
  var t;
  let {
    channelId: n,
    emojiId: i,
    emojiName: a
  } = e, o = (0, l.e7)([_.Z], () => _.Z.getChannel(n));
  if (null == o) return null;
  let s = null != (t = (0, f.KS)(o)) ? t : c.VL1;
  return (0, r.jsx)(O.Z, {
    emojiId: i,
    emojiName: a,
    size: O.R.MEDIUM,
    defaultComponent: (0, r.jsx)(s, {
      className: I.channelIcon
    })
  })
}

function N(e) {
  var t, n, a, d;
  let {
    guildId: f,
    channel: _,
    className: m
  } = e, {
    channelAction: h,
    completed: y
  } = (0, b.P3)(f, _), O = (0, b.K_)(f, null == h ? true : h.channelId), v = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), N = (null == h ? true : h.actionType) === E.NewMemberActionTypes.VIEW, P = (0, c.dQu)(c.TVs.colors.WHITE), R = T[(0, p.A)()], [w, D] = i.useState(false), [x] = i.useState(new s.Z.Value(0)), [L] = i.useState(new s.Z.Value(0));
  i.useEffect(() => {
    y ? s.Z.timing(x, {
      toValue: 0,
      duration: v ? 1 : 350,
      easing: s.Z.Easing.quad,
      delay: 500 * !N
    }).start(() => D(true)) : s.Z.timing(x, {
      toValue: 1,
      duration: v ? 1 : 350,
      easing: s.Z.Easing.quad,
      delay: 400
    }).start()
  }, [y, x, N, v]), i.useEffect(() => {
    y && w && s.Z.timing(L, {
      toValue: 1,
      duration: 350 * !v,
      easing: s.Z.Easing.quad,
      delay: 400
    }).start()
  }, [y, L, w, v]);
  let j = i.useCallback(() => {
    null != O && (0, g.gp)(f, O.channelId)
  }, [f, O]);
  return null == h || N && !w ? null : (0, r.jsx)("div", {
    className: o()(I.container, m),
    children: w && null != O ? (0, r.jsx)(s.Z.div, {
      style: {
        marginBottom: L.interpolate({
          inputRange: [0, 1],
          outputRange: [-R, 0]
        })
      },
      children: (0, r.jsxs)(c.P3F, {
        className: o()(I.banner, I.clickable, {
          [I.bannerForumChannel]: _.isForumChannel()
        }),
        onClick: j,
        children: [(0, r.jsx)(A, {
          channelId: O.channelId,
          emojiId: null == (t = O.emoji) ? true : t.id,
          emojiName: null == O || null == (n = O.emoji) ? true : n.name
        }), (0, r.jsxs)("div", {
          className: I.text,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "text-strong",
            children: S.intl.format(S.t["/beONw"], {
              step: O.title
            })
          }), (0, r.jsx)(C, {
            action: O
          })]
        }), (0, r.jsx)("div", {
          className: I.iconCircle,
          children: (0, r.jsx)(c.ZSh, {
            size: "xs",
            color: P.hex(),
            className: I.nextIcon
          })
        })]
      })
    }) : (0, r.jsxs)(s.Z.div, {
      className: o()(I.banner, {
        [I.bannerForumChannel]: _.isForumChannel()
      }),
      style: {
        marginBottom: x.interpolate({
          inputRange: [0, 1],
          outputRange: [-R, 0]
        })
      },
      children: [(0, r.jsx)(A, {
        channelId: h.channelId,
        emojiId: null == (a = h.emoji) ? true : a.id,
        emojiName: null == h || null == (d = h.emoji) ? true : d.name
      }), (0, r.jsxs)("div", {
        className: I.text,
        children: [(0, r.jsx)(c.Text, {
          variant: "text-md/semibold",
          color: "text-strong",
          children: h.title
        }), (0, r.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: S.intl.string(S.t["ElGg8+"])
        })]
      }), y ? (0, r.jsx)(c.owK, {
        size: "custom",
        color: "currentColor",
        className: I.completed,
        secondaryColor: P.hex(),
        width: 20,
        height: 20
      }) : null]
    })
  })
}

function P(e) {
  let {
    guildId: t,
    channel: n,
    className: i
  } = e, a = (0, y.g)(t), o = (0, l.e7)([m.ZP], () => {
    var e;
    return (null == (e = m.ZP.getSelfMember(t)) ? true : e.isPending) === true
  }), s = (0, b.PE)(t), c = (0, l.e7)([h.Z], () => {
    var e;
    return null == (e = h.Z.getGuild(t)) ? true : e.features.has(v.GuildFeatures.GUILD_SERVER_GUIDE)
  });
  return s || o || !a || !c ? null : (0, r.jsx)(N, {
    guildId: t,
    channel: n,
    className: i
  })
}