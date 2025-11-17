/** Chunk was on 85831 **/
/** chunk id: 312539, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  d: () => D,
  p: () => M
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk239091 = require("./239091.js"),
  Chunk287734 = require("./287734.js"),
  Chunk627050 = require("./627050.js"),
  Chunk66999 = require("./66999.js"),
  Chunk364640 = require("./364640.js"),
  Chunk754688 = require("./754688.js"),
  Chunk336197 = require("./336197.js"),
  Chunk69626 = require("./69626.jsx"),
  Chunk779699 = require("./779699.jsx"),
  Chunk797874 = require("./797874.jsx"),
  Chunk359875 = require("./359875.jsx"),
  Chunk124072 = require("./124072.jsx"),
  Chunk891984 = require("./891984.jsx"),
  Chunk644956 = require("./644956.jsx"),
  Chunk819366 = require("./819366.jsx"),
  Chunk488968 = require("./488968.js"),
  Chunk131704 = require("./131704.js"),
  Chunk592125 = require("./592125.js"),
  Chunk485386 = require("./485386.js"),
  Chunk430824 = require("./430824.js"),
  Chunk934415 = require("./934415.js"),
  Chunk823379 = require("./823379.js"),
  Chunk900849 = require("./900849.js"),
  Chunk981631 = require("./981631.js"),
  Chunk689079 = require("./689079.js"),
  Chunk388032 = require("./388032.jsx");
async function _(e, n, t) {
  if (null == n) return;
  if (d.Z.trackDiscordLinkClicked({
      guildId: e,
      channelId: n,
      messageId: t
    }), null != e) {
    let r = k.Z.getGuild(e);
    if ((null == r ? true : r.joinedAt) == null) try {
      await N.Ub(e, {}, {
        channelId: n,
        messageId: t
      });
      return
    } catch (e) {}
  }
  let r = w.Z.getChannel(n);
  if (null != r && null == t && (0, O.bw)(r.type) && (0, h.YO)(r)) return void o.default.selectVoiceChannel(r.id);
  (0, j.Z)(E.Z5c.CHANNEL(e, n, t))
}

function M(e) {
  let {
    type: n,
    value: t
  } = e;
  switch (n) {
    case "channel":
      return (0, r.jsx)(D, {
        channelId: t
      });
    case "user":
      return (0, r.jsx)(L, {
        id: t
      });
    case "role":
      return (0, r.jsx)(Y, {
        id: t
      });
    case "everyone":
      return (0, r.jsx)(G, {
        roleName: "@everyone"
      });
    case "here":
      return (0, r.jsx)(G, {
        roleName: "@here"
      });
    case "game":
      return (0, r.jsx)(F, {
        id: t
      });
    case "command":
      return (0, r.jsx)(q, {
        id: t.id,
        name: t.name
      })
  }(0, C.vE)(n)
}

function D(e) {
  let {
    channelId: n,
    guildId: l,
    messageId: o
  } = e, s = (0, u.Z)(n), {
    name: d,
    iconType: j,
    isForumPost: m,
    hasAccess: p
  } = (0, c.cj)([w.Z], () => {
    let e = w.Z.getChannel(n);
    return {
      name: null == e ? true : e.name,
      iconType: (0, P.wl)(e),
      isForumPost: null == e ? true : e.isForumPost(),
      hasAccess: null == e || (0, h.YO)(e)
    }
  }, [n]), x = (0, I.d)();
  if (null == j) return;
  let b = l === (null == x ? true : x.guildId) || null == l,
    y = p || s.isSubscriptionGated ? b || null == d ? (0, r.jsx)(f.Z, {
      iconType: j,
      children: null != d ? d : (0, r.jsx)("em", {
        children: T.intl.string(T.t.J90oLW)
      })
    }) : (0, r.jsx)(H, {
      guildId: l,
      children: d
    }) : (0, r.jsx)(f.Z, {
      iconType: "locked",
      children: T.intl.string(T.t["/YzI63"])
    }),
    O = null;
  return null != o && (O = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(g.Z, {}), (0, r.jsx)(f.Z, {
      iconType: m ? "post" : "message"
    })]
  })), (0, r.jsxs)(v.Z, {
    role: "link",
    onClick: e => {
      null == e || e.stopPropagation(), _(l, n, o), (0, a.pTH)()
    },
    onContextMenu: e => {
      let l = w.Z.getChannel(n);
      (0, i.jW)(e, async () => {
        let {
          default: e
        } = await t.e("9573").then(t.bind(t, 546649));
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
    children: [y, O]
  })
}

function H(e) {
  let {
    guildId: n,
    children: t
  } = e, l = (0, c.e7)([k.Z], () => k.Z.getGuild(n), [n]);
  return (0, r.jsxs)(x.Z, {
    guild: l,
    children: [null == l ? true : l.name, null != l ? (0, r.jsx)(g.Z, {}) : null, t]
  })
}

function L(e) {
  let {
    id: n
  } = e, t = (0, I.d)();
  return (0, r.jsx)(y.Z, {
    className: "mention",
    userId: n,
    channelId: null == t ? true : t.channelId,
    viewingChannelId: null == t ? true : t.viewingChannelId,
    parsedUserId: n,
    content: "<@".concat(n, ">")
  })
}

function Y(e) {
  let {
    id: n
  } = e, t = (0, I.d)(), l = null == t ? true : t.guildId, a = (0, c.e7)([Z.Z], () => {
    var e, t;
    return null != (t = null != l ? null == (e = Z.Z.getRole(l, n)) ? true : e.name : null) ? t : T.intl.string(T.t.sKdZ6U)
  }, [l, n]);
  return (0, r.jsx)(b.Z, {
    roleId: n,
    channelId: null == t ? true : t.channelId,
    guildId: null == t ? true : t.guildId,
    children: "@".concat(a)
  })
}

function F(e) {
  let {
    id: n
  } = e, t = (0, I.d)();
  return s.d.useExperiment({
    location: "native markdown"
  }).enabled ? (0, r.jsx)(p.Z, {
    gameId: n,
    channelId: null == t ? true : t.channelId
  }) : (0, r.jsx)("span", {
    children: "<@$".concat(n, ">")
  })
}

function G(e) {
  let {
    roleName: n
  } = e, t = (0, I.d)();
  return (0, r.jsx)(b.Z, {
    roleName: n,
    channelId: null == t ? true : t.channelId,
    guildId: null == t ? true : t.guildId,
    children: n
  })
}

function q(e) {
  let {
    id: n,
    name: t
  } = e, c = (0, I.d)(), a = l.useMemo(() => {
    let [, ...e] = t.split(" ");
    return "".concat(n).concat([...e].map(e => "".concat(S.oQ).concat(e)).join(""))
  }, [n, t]), i = l.useMemo(() => ({
    type: "commandMention",
    channelId: null == c ? true : c.channelId,
    commandId: n,
    commandName: t,
    commandKey: a
  }), [null == c ? true : c.channelId, a, n, t]);
  return (0, r.jsx)(m.Wf, {
    node: i,
    children: t
  })
}