/** Chunk was on 85831 **/
t.d(n, {
  d: () => N,
  p: () => D
}), t(388685), t(35282);
var r = t(255367),
  l = t(73800),
  o = t(442837),
  i = t(481060),
  c = t(239091),
  a = t(287734),
  u = t(627050),
  s = t(66999),
  d = t(364640),
  f = t(754688),
  h = t(336197),
  b = t(69626),
  g = t(779699),
  _ = t(797874),
  p = t(359875),
  y = t(124072),
  m = t(891984),
  j = t(644956),
  v = t(819366),
  x = t(488968),
  w = t(131704),
  O = t(592125),
  k = t(485386),
  I = t(430824),
  P = t(934415),
  Z = t(823379),
  E = t(900849),
  C = t(981631),
  S = t(689079),
  T = t(388032);
async function A(e, n, t) {
  if (null == n) return;
  if (d.Z.trackDiscordLinkClicked({
      guildId: e,
      channelId: n,
      messageId: t
    }), null != e) {
    let r = I.Z.getGuild(e);
    if ((null == r ? void 0 : r.joinedAt) == null) try {
      await E.Ub(e, {}, {
        channelId: n,
        messageId: t
      });
      return
    } catch (e) {}
  }
  let r = O.Z.getChannel(n);
  if (null != r && null == t && (0, w.bw)(r.type) && (0, f.YO)(r)) return void a.default.selectVoiceChannel(r.id);
  (0, h.Z)(C.Z5c.CHANNEL(e, n, t))
}

function D(e) {
  let {
    type: n,
    value: t
  } = e;
  switch (n) {
    case "channel":
      return (0, r.jsx)(N, {
        channelId: t
      });
    case "user":
      return (0, r.jsx)(H, {
        id: t
      });
    case "role":
      return (0, r.jsx)(q, {
        id: t
      });
    case "everyone":
      return (0, r.jsx)(F, {
        roleName: "@everyone"
      });
    case "here":
      return (0, r.jsx)(F, {
        roleName: "@here"
      });
    case "game":
      return (0, r.jsx)(B, {
        id: t
      });
    case "command":
      return (0, r.jsx)(K, {
        id: t.id,
        name: t.name
      })
  }(0, Z.vE)(n)
}

function N(e) {
  let {
    channelId: n,
    guildId: l,
    messageId: a
  } = e, u = (0, s.Z)(n), {
    name: d,
    iconType: h,
    isForumPost: b,
    hasAccess: _
  } = (0, o.cj)([O.Z], () => {
    let e = O.Z.getChannel(n);
    return {
      name: null == e ? void 0 : e.name,
      iconType: (0, P.wl)(e),
      isForumPost: null == e ? void 0 : e.isForumPost(),
      hasAccess: null == e || (0, f.YO)(e)
    }
  }, [n]), p = (0, x.d)();
  if (null == h) return;
  let j = l === (null == p ? void 0 : p.guildId) || null == l,
    v = _ || u.isSubscriptionGated ? j || null == d ? (0, r.jsx)(g.Z, {
      iconType: h,
      children: null != d ? d : (0, r.jsx)("em", {
        children: T.intl.string(T.t.J90oLS)
      })
    }) : (0, r.jsx)(M, {
      guildId: l,
      children: d
    }) : (0, r.jsx)(g.Z, {
      iconType: "locked",
      children: T.intl.string(T.t["/YzI6+"])
    }),
    w = null;
  return null != a && (w = (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsx)(m.Z, {}), (0, r.jsx)(g.Z, {
      iconType: b ? "post" : "message"
    })]
  })), (0, r.jsxs)(y.Z, {
    role: "link",
    onClick: e => {
      null == e || e.stopPropagation(), A(l, n, a), (0, i.pTH)()
    },
    onContextMenu: e => {
      let l = O.Z.getChannel(n);
      (0, c.jW)(e, async () => {
        let {
          default: e
        } = await t.e("9573").then(t.bind(t, 546649));
        return t => {
          var o, i, c;
          return (0, r.jsx)(e, (i = function(e) {
            for (var n = 1; n < arguments.length; n++) {
              var t = null != arguments[n] ? arguments[n] : {},
                r = Object.keys(t);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(t).filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
              }))), r.forEach(function(n) {
                var r;
                r = t[n], n in e ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
                }) : e[n] = r
              })
            }
            return e
          }({}, t), c = c = {
            channel: l,
            channelId: null != (o = null == l ? void 0 : l.id) ? o : n,
            originalLink: null,
            messageId: a
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(c)) : (function(e, n) {
            var t = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              t.push.apply(t, r)
            }
            return t
          })(Object(c)).forEach(function(e) {
            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(c, e))
          }), i))
        }
      })
    },
    className: "channelMention",
    children: [v, w]
  })
}

function M(e) {
  let {
    guildId: n,
    children: t
  } = e, l = (0, o.e7)([I.Z], () => I.Z.getGuild(n), [n]);
  return (0, r.jsxs)(p.Z, {
    guild: l,
    children: [null == l ? void 0 : l.name, null != l ? (0, r.jsx)(m.Z, {}) : null, t]
  })
}

function H(e) {
  let {
    id: n
  } = e, t = (0, x.d)();
  return (0, r.jsx)(v.Z, {
    className: "mention",
    userId: n,
    channelId: null == t ? void 0 : t.channelId,
    viewingChannelId: null == t ? void 0 : t.viewingChannelId,
    parsedUserId: n,
    content: "<@".concat(n, ">")
  })
}

function q(e) {
  let {
    id: n
  } = e, t = (0, x.d)(), l = null == t ? void 0 : t.guildId, i = (0, o.e7)([k.Z], () => {
    var e, t;
    return null != (t = null != l ? null == (e = k.Z.getRole(l, n)) ? void 0 : e.name : null) ? t : T.intl.string(T.t.sKdZ6e)
  }, [l, n]);
  return (0, r.jsx)(j.Z, {
    roleId: n,
    channelId: null == t ? void 0 : t.channelId,
    guildId: null == t ? void 0 : t.guildId,
    children: "@".concat(i)
  })
}

function B(e) {
  let {
    id: n
  } = e, t = (0, x.d)();
  return u.d.useExperiment({
    location: "native markdown"
  }).enabled ? (0, r.jsx)(_.Z, {
    gameId: n,
    channelId: null == t ? void 0 : t.channelId
  }) : (0, r.jsx)("span", {
    children: "<@$".concat(n, ">")
  })
}

function F(e) {
  let {
    roleName: n
  } = e, t = (0, x.d)();
  return (0, r.jsx)(j.Z, {
    roleName: n,
    channelId: null == t ? void 0 : t.channelId,
    guildId: null == t ? void 0 : t.guildId,
    children: n
  })
}

function K(e) {
  let {
    id: n,
    name: t
  } = e, o = (0, x.d)(), i = l.useMemo(() => {
    let [, ...e] = t.split(" ");
    return "".concat(n).concat([...e].map(e => "".concat(S.oQ).concat(e)).join(""))
  }, [n, t]), c = l.useMemo(() => ({
    type: "commandMention",
    channelId: null == o ? void 0 : o.channelId,
    commandId: n,
    commandName: t,
    commandKey: i
  }), [null == o ? void 0 : o.channelId, i, n, t]);
  return (0, r.jsx)(b.Wf, {
    node: c,
    children: t
  })
}