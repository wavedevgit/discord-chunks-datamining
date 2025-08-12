/** Chunk was on 46746 **/
/** chunk id: 499596, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk575315 = require("./575315.js");

function m(e) {
  let {
    channel: t,
    users: n,
    selected: i = false
  } = e, m = (0, a.ZP)(t), h = null;
  null != n && n.length > 0 && (h = (0, r.jsx)(o.ZP, {
    guildId: t.guild_id,
    className: f.voiceUserList,
    users: n,
    renderUser: e => {
      if (null == e || e === o.ag) return null;
      let n = d.ZP.getName(t.guild_id, t.id, e),
        i = e.getAvatarURL(t.guild_id, 24);
      return (0, r.jsx)(s.DY3, {
        text: n,
        children: (0, r.jsx)("img", {
          src: null != i ? i : true,
          "aria-label": e.username,
          alt: "",
          className: f.avatar
        })
      })
    },
    renderMoreUsers: e => {
      let i = function(e, t) {
        let n = t.id,
          r = t.guild_id;
        return e.length <= 1 ? null : 2 === e.length ? u.intl.formatToPlainString(u.t.MlgLFx, {
          nickname0: d.ZP.getName(r, n, e[0]),
          nickname1: d.ZP.getName(r, n, e[1])
        }) : 3 === e.length ? u.intl.formatToPlainString(u.t.sihix8, {
          nickname0: d.ZP.getName(r, n, e[0]),
          nickname1: d.ZP.getName(r, n, e[1]),
          nickname2: d.ZP.getName(r, n, e[2])
        }) : u.intl.formatToPlainString(u.t["824IXV"], {
          nickname0: d.ZP.getName(r, n, e[0]),
          nickname1: d.ZP.getName(r, n, e[1]),
          remainingCount: e.length - 2
        })
      }(n.slice(4), t);
      return (0, r.jsx)("div", {
        children: (0, r.jsx)(s.DY3, {
          text: i,
          children: (0, r.jsx)("div", {
            className: f.userListOverflow,
            children: e
          })
        })
      })
    },
    max: 5,
    showUserPopout: false
  }));
  let p = (0, c.KS)(t);
  return (0, r.jsxs)("div", {
    className: l()(f.channelInfo, {
      [f.selected]: i
    }),
    children: [(0, r.jsx)(p, {
      className: f.channelIcon
    }), (0, r.jsx)("div", {
      className: f.channelName,
      children: m
    }), h]
  })
}