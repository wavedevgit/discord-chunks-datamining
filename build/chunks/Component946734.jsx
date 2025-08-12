/** Chunk was on web.js **/
/** chunk id: 946734, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => N
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
  Chunk454255 = require("./454255.js");

function T(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class S {
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
      let [n, o] = e, a = (0, r.jsx)(l.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: n
      });
      return o.length > 0 && (a = (0, r.jsx)(l.DY3, {
        className: I.tooltip,
        text: o.join(", "),
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
    T(this, "userId", true), T(this, "user", true), T(this, "channelId", true), T(this, "analyticsLocations", true), T(this, "generateNicknameGuildPairs", (0, E.oH)(e => {
      var t;
      return a()(h.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = m.Z.getGuild(e)) ? true : t.name
        }).filter(b.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), T(this, "renderMoreAvatars", () => (0, r.jsx)(l.DY3, {
      text: v.intl.string(v.t.UTjREx),
      position: "bottom",
      children: (0, r.jsx)(l.P3F, {
        className: I.moreAvatars,
        onClick: this.handleClick,
        children: (0, r.jsx)(l.oFk, {
          size: "xs",
          color: "currentColor",
          className: I.plusIcon
        })
      })
    }, "more-avatars")), T(this, "handleClick", () => {
      (0, p.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: O.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function A(e) {
  let {
    userId: t,
    channelId: n,
    analyticsLocations: r
  } = e, o = (0, s.e7)([g.default], () => g.default.getUser(t), [t]), [a] = i.useState(() => new S({
    user: o,
    userId: t,
    channelId: n,
    analyticsLocations: r
  }));
  return a.updateData({
    userId: t,
    user: o,
    channelId: n,
    analyticsLocations: r
  }), a
}

function N(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), i = (0, _.gc)(n), o = Array(i.length).fill(null), {
    analyticsLocations: a
  } = (0, d.ZP)(u.Z.AKA), s = A({
    userId: n,
    analyticsLocations: a,
    channelId: t.id
  }), p = (e, t, n) => {
    var o;
    let a = s.user,
      c = i[n];
    return null == c || null == a ? null : (0, r.jsx)(l.DY3, {
      text: null == (o = m.Z.getGuild(c)) ? true : o.name,
      position: "bottom",
      children: (0, r.jsx)("img", {
        alt: "",
        className: I.avatar,
        onClick: s.handleClick,
        src: a.getAvatarURL(c, 16),
        "aria-hidden": true
      })
    }, c[1])
  };
  return 0 === s.getNicknameGuildPairs().length && 0 === i.length ? (0, r.jsx)("div", {
    className: I.spacer
  }) : (0, r.jsxs)(d.Gt, {
    value: a,
    children: [(0, r.jsx)(y.iz, {
      className: I.divider
    }), (0, r.jsx)(l.IGR, {
      text: v.intl.string(v.t.l1QVfn),
      disableColor: true,
      className: I.akaBadge
    }), i.length > 0 ? (0, r.jsx)(c.ZP, {
      size: 16,
      users: o,
      showUserPopout: false,
      renderUser: p,
      renderMoreUsers: s.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: I.avatars
    }) : null, s.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(f.Z, {
      position: "bottom",
      className: I.nicknames,
      children: s.renderNicknamePairs()
    }) : null]
  })
}