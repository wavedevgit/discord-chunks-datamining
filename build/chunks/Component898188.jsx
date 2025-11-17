/** Chunk was on web.js **/
/** chunk id: 898188, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
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
  Chunk530815 = require("./530815.js");
let T = 60;

function S(e) {
  let {
    action: t
  } = e, n = (0, l.e7)([_.Z], () => _.Z.getChannel(t.channelId)), i = (0, d.ZP)(n, true);
  return null == n ? (0, r.jsx)(c.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: v.intl.format(v.t.MkzlDL, {
      channelName: v.intl.string(v.t.J90oLW)
    })
  }) : (0, r.jsx)(c.Text, {
    variant: "text-xxs/normal",
    color: "header-secondary",
    children: v.intl.format(v.t.MkzlDL, {
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
  return (0, r.jsx)(y.Z, {
    emojiId: i,
    emojiName: a,
    size: y.R.MEDIUM,
    defaultComponent: (0, r.jsx)(s, {
      className: I.channelIcon
    })
  })
}

function C(e) {
  var t, n, a, d;
  let {
    guildId: f,
    channel: _,
    className: p
  } = e, {
    channelAction: h,
    completed: b
  } = (0, E.P3)(f, _), y = (0, E.K_)(f, null == h ? true : h.channelId), O = (0, l.e7)([u.Z], () => u.Z.useReducedMotion), C = (null == h ? true : h.actionType) === g.NewMemberActionTypes.VIEW, N = (0, c.dQu)(c.TVs.colors.WHITE), [R, P] = i.useState(false), [D] = i.useState(new s.Z.Value(0)), [w] = i.useState(new s.Z.Value(0));
  i.useEffect(() => {
    b ? s.Z.timing(D, {
      toValue: 0,
      duration: O ? 1 : 350,
      easing: s.Z.Easing.quad,
      delay: 500 * !C
    }).start(() => P(true)) : s.Z.timing(D, {
      toValue: 1,
      duration: O ? 1 : 350,
      easing: s.Z.Easing.quad,
      delay: 400
    }).start()
  }, [b, D, C, O]), i.useEffect(() => {
    b && R && s.Z.timing(w, {
      toValue: 1,
      duration: 350 * !O,
      easing: s.Z.Easing.quad,
      delay: 400
    }).start()
  }, [b, w, R, O]);
  let x = i.useCallback(() => {
    null != y && (0, m.gp)(f, y.channelId)
  }, [f, y]);
  return null == h || C && !R ? null : (0, r.jsx)("div", {
    className: o()(I.container, p),
    children: R && null != y ? (0, r.jsx)(s.Z.div, {
      style: {
        marginBottom: w.interpolate({
          inputRange: [0, 1],
          outputRange: [-T, 0]
        })
      },
      children: (0, r.jsxs)(c.P3F, {
        className: o()(I.banner, I.clickable),
        onClick: x,
        children: [(0, r.jsx)(A, {
          channelId: y.channelId,
          emojiId: null == (t = y.emoji) ? true : t.id,
          emojiName: null == y || null == (n = y.emoji) ? true : n.name
        }), (0, r.jsxs)("div", {
          className: I.text,
          children: [(0, r.jsx)(c.Text, {
            variant: "text-md/semibold",
            color: "header-primary",
            children: v.intl.format(v.t["/beONw"], {
              step: y.title
            })
          }), (0, r.jsx)(S, {
            action: y
          })]
        }), (0, r.jsx)("div", {
          className: I.iconCircle,
          children: (0, r.jsx)(c.ZSh, {
            size: "xs",
            color: N.hex(),
            className: I.nextIcon
          })
        })]
      })
    }) : (0, r.jsxs)(s.Z.div, {
      className: I.banner,
      style: {
        marginBottom: D.interpolate({
          inputRange: [0, 1],
          outputRange: [-T, 0]
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
          color: "header-primary",
          children: h.title
        }), (0, r.jsx)(c.Text, {
          variant: "text-xxs/normal",
          color: "text-muted",
          children: v.intl.string(v.t["ElGg8+"])
        })]
      }), b ? (0, r.jsx)(c.owK, {
        size: "custom",
        color: "currentColor",
        className: I.completed,
        secondaryColor: N.hex(),
        width: 20,
        height: 20
      }) : null]
    })
  })
}

function N(e) {
  let {
    guildId: t,
    channel: n,
    className: i
  } = e, a = (0, b.g)(t), o = (0, l.e7)([p.ZP], () => {
    var e;
    return (null == (e = p.ZP.getSelfMember(t)) ? true : e.isPending) === true
  }), s = (0, E.PE)(t), c = (0, l.e7)([h.Z], () => {
    var e;
    return null == (e = h.Z.getGuild(t)) ? true : e.features.has(O.GuildFeatures.GUILD_SERVER_GUIDE)
  });
  return s || o || !a || !c ? null : (0, r.jsx)(C, {
    guildId: t,
    channel: n,
    className: i
  })
}