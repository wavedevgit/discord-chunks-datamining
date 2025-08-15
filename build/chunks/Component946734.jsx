/** Chunk was on 86357 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk111028 = require("./111028.jsx"),
  Chunk150039 = require("./150039.js"),
  Chunk892001 = require("./892001.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk251625 = require("./251625.js"),
  Chunk823379 = require("./823379.js"),
  Chunk665149 = require("./665149.jsx"),
  Chunk228168 = require("./228168.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk130370 = require("./130370.js");

function O(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class E {
  updateData(e) {
    let {
      userId: t,
      user: n,
      channelId: r,
      analyticsLocations: i
    } = e;
    this.userId = t, this.user = n, this.channelId = r, this.analyticsLocations = i
  }
  getNicknameGuildPairs() {
    return this.generateNicknameGuildPairs(this.user)
  }
  renderNicknamePairs() {
    return this.getNicknameGuildPairs().map((e, t) => {
      let [n, l] = e, a = (0, r.jsx)(s.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: n
      });
      return l.length > 0 && (a = (0, r.jsx)(s.DY3, {
        className: j.tooltip,
        text: l.join(", "),
        position: "bottom",
        children: a
      })), (0, r.jsxs)(i.Fragment, {
        children: [0 !== t ? ", " : null, a]
      }, t)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: i
  }) {
    O(this, "userId", true), O(this, "user", true), O(this, "channelId", true), O(this, "analyticsLocations", true), O(this, "generateNicknameGuildPairs", (0, y.oH)(e => {
      var t;
      return a()(m.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = g.Z.getGuild(e)) ? true : t.name
        }).filter(_.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), O(this, "renderMoreAvatars", () => (0, r.jsx)(s.DY3, {
      text: v.intl.string(v.t.UTjREx),
      position: "bottom",
      children: (0, r.jsx)(s.P3F, {
        className: j.moreAvatars,
        onClick: this.handleClick,
        children: (0, r.jsx)(s.oFk, {
          size: "xs",
          color: "currentColor",
          className: j.plusIcon
        })
      })
    }, "more-avatars")), O(this, "handleClick", () => {
      (0, f.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: x.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function S(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), l = (0, h.gc)(n), a = Array(l.length).fill(null), {
    analyticsLocations: f
  } = (0, d.ZP)(u.Z.AKA), m = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, l = (0, o.e7)([b.default], () => b.default.getUser(t), [t]), [a] = i.useState(() => new E({
      user: l,
      userId: t,
      channelId: n,
      analyticsLocations: r
    }));
    return a.updateData({
      userId: t,
      user: l,
      channelId: n,
      analyticsLocations: r
    }), a
  }({
    userId: n,
    analyticsLocations: f,
    channelId: t.id
  });
  return 0 === m.getNicknameGuildPairs().length && 0 === l.length ? (0, r.jsx)("div", {
    className: j.spacer
  }) : (0, r.jsxs)(d.Gt, {
    value: f,
    children: [(0, r.jsx)(C.iz, {
      className: j.divider
    }), (0, r.jsx)(s.IGR, {
      text: v.intl.string(v.t.l1QVfn),
      disableColor: true,
      className: j.akaBadge
    }), l.length > 0 ? (0, r.jsx)(c.ZP, {
      size: 16,
      users: a,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let a = m.user,
          o = l[n];
        return null == o || null == a ? null : (0, r.jsx)(s.DY3, {
          text: null == (i = g.Z.getGuild(o)) ? true : i.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: j.avatar,
            onClick: m.handleClick,
            src: a.getAvatarURL(o, 16),
            "aria-hidden": true
          })
        }, o[1])
      },
      renderMoreUsers: m.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: j.avatars
    }) : null, m.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(p.Z, {
      position: "bottom",
      className: j.nicknames,
      children: m.renderNicknamePairs()
    }) : null]
  })
}