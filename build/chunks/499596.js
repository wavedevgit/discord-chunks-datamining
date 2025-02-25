/** Chunk was on 79477 **/
n.d(t, {
  Z: () => g
});
var l = n(200651);
n(192379);
var r = n(120356),
  s = n.n(r),
  i = n(481060),
  a = n(884338),
  o = n(933557),
  c = n(471445),
  u = n(5192),
  d = n(388032),
  m = n(371232);

function g(e) {
  let {
    channel: t,
    users: n,
    selected: r = !1
  } = e, g = (0, o.ZP)(t), h = null;
  null != n && n.length > 0 && (h = (0, l.jsx)(a.Z, {
    guildId: t.guild_id,
    className: m.voiceUserList,
    users: n,
    renderUser: e => {
      if (null == e) return null;
      let n = u.ZP.getName(t.guild_id, t.id, e),
        r = e.getAvatarURL(t.guild_id, 24);
      return (0, l.jsx)(i.DY3, {
        text: n,
        children: (0, l.jsx)("img", {
          src: null != r ? r : void 0,
          "aria-label": e.username,
          alt: "",
          className: m.avatar
        })
      })
    },
    renderMoreUsers: e => {
      let r = function(e, t) {
        let n = t.id,
          l = t.guild_id;
        return e.length <= 1 ? null : 2 === e.length ? d.NW.formatToPlainString(d.t.MlgLFx, {
          nickname0: u.ZP.getName(l, n, e[0]),
          nickname1: u.ZP.getName(l, n, e[1])
        }) : 3 === e.length ? d.NW.formatToPlainString(d.t.sihix8, {
          nickname0: u.ZP.getName(l, n, e[0]),
          nickname1: u.ZP.getName(l, n, e[1]),
          nickname2: u.ZP.getName(l, n, e[2])
        }) : d.NW.formatToPlainString(d.t["824IXV"], {
          nickname0: u.ZP.getName(l, n, e[0]),
          nickname1: u.ZP.getName(l, n, e[1]),
          remainingCount: e.length - 2
        })
      }(n.slice(4), t);
      return (0, l.jsx)("div", {
        children: (0, l.jsx)(i.DY3, {
          text: r,
          children: (0, l.jsx)("div", {
            className: m.userListOverflow,
            children: e
          })
        })
      })
    },
    max: 5,
    showUserPopout: !1
  }));
  let x = (0, c.KS)(t);
  return (0, l.jsxs)("div", {
    className: s()(m.channelInfo, {
      [m.selected]: r
    }),
    children: [(0, l.jsx)(x, {
      className: m.channelIcon
    }), (0, l.jsx)("div", {
      className: m.channelName,
      children: g
    }), h]
  })
}