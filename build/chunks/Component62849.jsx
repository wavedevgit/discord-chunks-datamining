/** Chunk was on 72756 **/
/** chunk id: 62849, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  A: () => T,
  P: () => M
}), require("./896048.js"), require("./747238.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk442433 = require("./442433.js"),
  Chunk956793 = require("./956793.js"),
  Chunk352505 = require("./352505.js"),
  Chunk721592 = require("./721592.js"),
  Chunk235393 = require("./235393.js"),
  Chunk376943 = require("./376943.js"),
  Chunk22007 = require("./22007.js"),
  Chunk990474 = require("./990474.jsx"),
  Chunk232042 = require("./232042.jsx"),
  Chunk31995 = require("./31995.jsx"),
  Chunk906754 = require("./906754.jsx"),
  Chunk332173 = require("./332173.jsx"),
  Chunk37632 = require("./37632.jsx"),
  Chunk593284 = require("./593284.jsx"),
  Chunk288539 = require("./288539.jsx"),
  Chunk78377 = require("./78377.js"),
  Chunk95701 = require("./95701.js"),
  Chunk734057 = require("./734057.js"),
  Chunk317525 = require("./317525.js"),
  Chunk71393 = require("./71393.js"),
  Chunk147036 = require("./147036.js"),
  Chunk403362 = require("./403362.js"),
  Chunk449054 = require("./449054.js"),
  Chunk652215 = require("./652215.js"),
  Chunk73510 = require("./73510.js"),
  Chunk985018 = require("./985018.jsx");
async function _(e, n, t) {
  if (null == n) return;
  if (d.A.trackDiscordLinkClicked({
      guildId: e,
      channelId: n,
      messageId: t
    }), null != e) {
    let r = P.A.getGuild(e);
    if ((null == r ? true : r.joinedAt) == null) try {
      await N.Z2(e, {}, {
        channelId: n,
        messageId: t
      });
      return
    } catch (e) {}
  }
  let r = I.A.getChannel(n);
  null != r && null == t && (0, w.ay)(r.type) && (0, h.nc)(r) ? o.default.selectVoiceChannel(r.id) : (0, p.A)(S.BVt.CHANNEL(e, n, t))
}

function M(e) {
  let {
    type: n,
    value: t
  } = e;
  switch (n) {
    case "channel":
      return (0, r.jsx)(T, {
        channelId: t
      });
    case "user":
      return (0, r.jsx)(z, {
        id: t
      });
    case "role":
      return (0, r.jsx)(G, {
        id: t
      });
    case "everyone":
      return (0, r.jsx)(R, {
        roleName: "@everyone"
      });
    case "here":
      return (0, r.jsx)(R, {
        roleName: "@here"
      });
    case "game":
      return (0, r.jsx)(H, {
        id: t
      });
    case "command":
      return (0, r.jsx)(B, {
        id: t.id,
        name: t.name
      })
  }(0, C.xb)(n)
}

function T(e) {
  let {
    channelId: n,
    guildId: l,
    messageId: o
  } = e, s = (0, u.A)(n), {
    name: d,
    iconType: p,
    isForumPost: j,
    hasAccess: m
  } = (0, c.cf)([I.A], () => {
    let e = I.A.getChannel(n);
    return {
      name: null == e ? true : e.name,
      iconType: (0, k.QG)(e),
      isForumPost: null == e ? true : e.isForumPost(),
      hasAccess: null == e || (0, h.nc)(e)
    }
  }, [n]), y = (0, O.p)();
  if (null == p) return;
  let v = l === (null == y ? true : y.guildId) || null == l,
    x = m || s.isSubscriptionGated ? v || null == d ? (0, r.jsx)(f.A, {
      iconType: p,
      children: null != d ? d : (0, r.jsx)("em", {
        children: D.intl.string(D.t.J90oLW)
      })
    }) : (0, r.jsx)(L, {
      guildId: l,
      children: d
    }) : (0, r.jsx)(f.A, {
      iconType: "locked",
      children: D.intl.string(D.t["/YzI63"])
    }),
    w = null;
  return null != o && (w = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.A, {}), (0, r.jsx)(f.A, {
      iconType: j ? "post" : "message"
    })]
  })), (0, r.jsxs)(b.A, {
    role: "link",
    onClick: e => {
      null == e || e.stopPropagation(), _(l, n, o), (0, a.s7G)()
    },
    onContextMenu: e => {
      let l = I.A.getChannel(n);
      (0, i.L3)(e, async () => {
        let {
          default: e
        } = await t.e("99041").then(t.bind(t, 612856));
        return t => {
          var c, a, i;
          return (0, r.jsx)(e, (a = function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                r = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), r.forEach(function(n) {
                var r;
                r = t[n], n in e ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[n] = r
              })
            }
            return e
          }({}, t), i = i = {
            channel: l,
            channelId: null != (c = null == l ? true : l.id) ? c : n,
            originalLink: null,
            messageId: o
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(i)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t.push.apply(t, r)
            }
            return t
          })(Object(i)).forEach(function(e) {
            Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(i, e))
          }), a))
        }
      })
    },
    className: "channelMention",
    children: [x, w]
  })
}

function L(e) {
  let {
    guildId: n,
    children: t
  } = e, l = (0, c.bG)([P.A], () => P.A.getGuild(n), [n]);
  return (0, r.jsxs)(y.A, {
    guild: l,
    children: [null == l ? true : l.name, null != l ? (0, r.jsx)(g.A, {}) : null, t]
  })
}

function z(e) {
  let {
    id: n
  } = e, t = (0, O.p)();
  return (0, r.jsx)(x.A, {
    className: "mention",
    userId: n,
    channelId: null == t ? true : t.channelId,
    viewingChannelId: null == t ? true : t.viewingChannelId,
    parsedUserId: n,
    content: "<@".concat(n, ">")
  })
}

function G(e) {
  let {
    id: n
  } = e, t = (0, O.p)(), l = null == t ? true : t.guildId, a = (0, c.bG)([A.A], () => {
    var e, t;
    return null != (e = null != l ? null == (t = A.A.getRole(l, n)) ? true : t.name : null) ? e : D.intl.string(D.t.sKdZ6U)
  }, [l, n]);
  return (0, r.jsx)(v.A, {
    roleId: n,
    channelId: null == t ? true : t.channelId,
    guildId: null == t ? true : t.guildId,
    children: "@".concat(a)
  })
}

function H(e) {
  let {
    id: n
  } = e, t = (0, O.p)();
  return s.m.useExperiment({
    location: "native markdown"
  }).enabled ? (0, r.jsx)(m.A, {
    gameId: n,
    channelId: null == t ? true : t.channelId
  }) : (0, r.jsx)("span", {
    children: "<@$".concat(n, ">")
  })
}

function R(e) {
  let {
    roleName: n
  } = e, t = (0, O.p)();
  return (0, r.jsx)(v.A, {
    roleName: n,
    channelId: null == t ? true : t.channelId,
    guildId: null == t ? true : t.guildId,
    children: n
  })
}

function B(e) {
  let {
    id: n,
    name: t
  } = e, c = (0, O.p)(), a = l.useMemo(() => {
    let [, ...e] = t.split(" ");
    return "".concat(n).concat([...e].map(e => "".concat(E.v4).concat(e)).join(""))
  }, [n, t]), i = l.useMemo(() => ({
    type: "commandMention",
    channelId: null == c ? true : c.channelId,
    commandId: n,
    commandName: t,
    commandKey: a
  }), [null == c ? true : c.channelId, a, n, t]);
  return (0, r.jsx)(j.gn, {
    node: i,
    children: t
  })
}