/** Chunk was on 61080 **/
r.d(t, {
  Z: () => y
});
var n = r(200651),
  a = r(192379),
  o = r(120356),
  i = r.n(o),
  l = r(442837),
  s = r(481060),
  c = r(178762),
  u = r(91140),
  d = r(297781),
  p = r(592125),
  f = r(944486),
  m = r(594174),
  g = r(5192),
  b = r(810568),
  _ = r(388032),
  O = r(996401),
  h = r(384370);
let y = e => {
  let {
    entry: t,
    viewId: r,
    officialGuildId: o,
    onClose: y
  } = e, v = (0, l.e7)([f.Z, p.Z], () => p.Z.getChannel(f.Z.getChannelId())), j = (0, l.e7)([m.default], () => m.default.getUser(t.author_id)), {
    nick: x,
    avatar: P
  } = a.useMemo(() => {
    let e = null == j ? void 0 : j.getAvatarURL(null == v ? void 0 : v.guild_id, 48, !1);
    return {
      nick: g.ZP.getName(null == v ? void 0 : v.guild_id, null == v ? void 0 : v.id, j),
      avatar: e
    }
  }, [j, v]);
  return null == j ? null : (0, n.jsx)(s.yRy, {
    position: "right",
    renderPopout: e => {
      let {
        closePopout: a,
        updatePosition: i
      } = e;
      return (0, n.jsx)(c.J, {
        entry: t,
        closePopout: a,
        updatePopoutPosition: i,
        onReaction: () => {
          (0, b.UE)({
            action: b.as.SendMessageUser,
            applicationId: t.extra.application_id,
            gameName: t.extra.game_name,
            recipientUserId: t.author_id,
            viewId: r,
            officialGuildId: o
          }), y(), a()
        },
        onUserPopoutClosed: () => a(),
        disableGameProfileLinks: !0
      })
    },
    positionKey: "game-profile-entry-".concat(t.id),
    onRequestOpen: () => {
      (0, b.UE)({
        action: b.as.ClickMessageUser,
        applicationId: t.extra.application_id,
        gameName: t.extra.game_name,
        recipientUserId: t.author_id,
        viewId: r,
        officialGuildId: o
      })
    },
    children: e => {
      var r, a;
      return (0, n.jsx)(s.P3F, (r = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
          "function" == typeof Object.getOwnPropertySymbols && (n = n.concat(Object.getOwnPropertySymbols(r).filter(function(e) {
            return Object.getOwnPropertyDescriptor(r, e).enumerable
          }))), n.forEach(function(t) {
            var n;
            n = r[t], t in e ? Object.defineProperty(e, t, {
              value: n,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : e[t] = n
          })
        }
        return e
      }({}, e), a = a = {
        className: O.profileEntryCard,
        children: (0, n.jsx)(s.tEY, {
          offset: {
            top: 4,
            bottom: 4,
            left: 4,
            right: 4
          },
          children: (0, n.jsxs)(n.Fragment, {
            children: [(0, n.jsx)("img", {
              className: O.avatar,
              src: P,
              alt: _.NW.formatToPlainString(_.t.IzVXxc, {
                userName: x
              })
            }), (0, n.jsx)("div", {
              className: i()(O.playerInfo),
              children: (0, n.jsxs)("div", {
                className: i()(h.column, h.gapXs),
                children: [(0, n.jsx)(s.Text, {
                  variant: "text-md/medium",
                  color: "text-primary",
                  lineClamp: 1,
                  children: x
                }), (0, n.jsx)(d.Gk, {
                  location: d.Gt.GAME_PROFILE,
                  children: u.W.map((e, r) => (0, n.jsx)(e, {
                    entry: t
                  }, r))
                })]
              })
            }), (0, n.jsx)("div", {
              className: O.reactions,
              children: (0, n.jsx)(s.n$P, {
                size: "sm"
              })
            })]
          })
        })
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : (function(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e);
          r.push.apply(r, n)
        }
        return r
      })(Object(a)).forEach(function(e) {
        Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(a, e))
      }), r))
    }
  })
}