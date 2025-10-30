/** Chunk was on 4093 **/
/** chunk id: 499596, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk28664 = require("./28664.jsx"),
  Chunk884338 = require("./884338.jsx"),
  Chunk933557 = require("./933557.js"),
  Chunk471445 = require("./471445.js"),
  Chunk5192 = require("./5192.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk661197 = require("./661197.js");

function x(e) {
  let {
    channel: n,
    users: t,
    selected: r = false
  } = e, x = (0, c.ZP)(n), g = null;
  null != t && t.length > 0 && (g = (0, l.jsx)(a.ZP, {
    guildId: n.guild_id,
    className: m.voiceUserList,
    users: t,
    renderUser: e => {
      if (null == e || e === a.ag) return null;
      let t = u.ZP.getName(n.guild_id, n.id, e),
        r = e.getAvatarURL(n.guild_id, 24);
      return (0, l.jsx)(s.u, {
        asContainer: true,
        text: t,
        children: (0, l.jsx)("img", {
          src: null != r ? r : true,
          "aria-label": e.username,
          alt: "",
          className: m.avatar
        })
      })
    },
    renderMoreUsers: e => {
      let r = function(e, n) {
        let t = n.id,
          l = n.guild_id;
        return e.length <= 1 ? null : 2 === e.length ? d.intl.formatToPlainString(d.t.MlgLF2, {
          nickname0: u.ZP.getName(l, t, e[0]),
          nickname1: u.ZP.getName(l, t, e[1])
        }) : 3 === e.length ? d.intl.formatToPlainString(d.t.sihixx, {
          nickname0: u.ZP.getName(l, t, e[0]),
          nickname1: u.ZP.getName(l, t, e[1]),
          nickname2: u.ZP.getName(l, t, e[2])
        }) : d.intl.formatToPlainString(d.t["824IXR"], {
          nickname0: u.ZP.getName(l, t, e[0]),
          nickname1: u.ZP.getName(l, t, e[1]),
          remainingCount: e.length - 2
        })
      }(t.slice(4), n);
      return (0, l.jsx)("div", {
        children: (0, l.jsx)(s.u, {
          asContainer: true,
          text: r,
          children: (0, l.jsx)("div", {
            className: m.userListOverflow,
            children: e
          })
        })
      })
    },
    max: 5,
    showUserPopout: false
  }));
  let h = (0, o.KS)(n);
  return (0, l.jsxs)("div", {
    className: i()(m.channelInfo, {
      [m.selected]: r
    }),
    children: [(0, l.jsx)(h, {
      className: m.channelIcon
    }), (0, l.jsx)("div", {
      className: m.channelName,
      children: x
    }), g]
  })
}