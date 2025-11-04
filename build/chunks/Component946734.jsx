/** Chunk was on 65100 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => E
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk194983 = require("./194983.jsx"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk884338 = require("./884338.jsx"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
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

function P(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class I {
  updateData(e) {
    let {
      userId: t,
      user: n,
      channelId: i,
      analyticsLocations: l
    } = e;
    this.userId = t, this.user = n, this.channelId = i, this.analyticsLocations = l
  }
  getNicknameGuildPairs() {
    return this.generateNicknameGuildPairs(this.user)
  }
  renderNicknamePairs(e) {
    return this.getNicknameGuildPairs().map((t, n) => {
      let [r, a] = t, s = (0, i.jsx)(u.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: r
      });
      return a.length > 0 && (s = (0, i.jsx)(c.u, {
        asContainer: true,
        tag: "span",
        text: a.join(", "),
        position: "bottom",
        shouldShow: e,
        delay: 50,
        children: s
      })), (0, i.jsxs)(l.Fragment, {
        children: [0 !== n ? ", " : null, s]
      }, n)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: l
  }) {
    P(this, "userId", true), P(this, "user", true), P(this, "channelId", true), P(this, "analyticsLocations", true), P(this, "generateNicknameGuildPairs", (0, j.oH)(e => {
      var t;
      return a()(g.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = v.Z.getGuild(e)) ? true : t.name
        }).filter(y.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), P(this, "renderMoreAvatars", () => (0, i.jsx)(c.u, {
      asContainer: true,
      tag: "span",
      text: C.intl.string(C.t["UTjRE/"]),
      position: "bottom",
      children: (0, i.jsx)(u.P3F, {
        className: Z.moreAvatars,
        onClick: this.handleClick,
        children: (0, i.jsx)(u.oFk, {
          size: "xs",
          color: "currentColor",
          className: Z.plusIcon
        })
      })
    }, "more-avatars")), P(this, "handleClick", () => {
      (0, f.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: O.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = l
  }
}

function E(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), r = (0, m.gc)(n), a = Array(r.length).fill(null), {
    analyticsLocations: f
  } = (0, h.ZP)(p.Z.AKA), g = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: i
    } = e, r = (0, s.e7)([b.default], () => b.default.getUser(t), [t]), [a] = l.useState(() => new I({
      user: r,
      userId: t,
      channelId: n,
      analyticsLocations: i
    }));
    return a.updateData({
      userId: t,
      user: r,
      channelId: n,
      analyticsLocations: i
    }), a
  }({
    userId: n,
    analyticsLocations: f,
    channelId: t.id
  }), [j, y] = l.useState(false), O = l.useCallback(() => {
    y(true)
  }, [y]), P = l.useCallback(() => {
    y(false)
  }, [y]);
  return 0 === g.getNicknameGuildPairs().length && 0 === r.length ? (0, i.jsx)("div", {
    className: Z.spacer
  }) : (0, i.jsxs)(h.Gt, {
    value: f,
    children: [(0, i.jsx)(x.iz, {
      className: Z.divider
    }), (0, i.jsx)(u.IGR, {
      text: C.intl.string(C.t.l1QVfj),
      disableColor: true,
      className: Z.akaBadge
    }), r.length > 0 ? (0, i.jsx)(d.ZP, {
      size: 16,
      users: a,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var l;
        let a = g.user,
          s = r[n];
        return null == s || null == a ? null : (0, i.jsx)(c.u, {
          asContainer: true,
          text: null == (l = v.Z.getGuild(s)) ? true : l.name,
          position: "bottom",
          children: (0, i.jsx)("img", {
            alt: "",
            className: Z.avatar,
            onClick: g.handleClick,
            src: a.getAvatarURL(s, 16),
            "aria-hidden": true
          })
        }, s[1])
      },
      renderMoreUsers: g.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: Z.avatars
    }) : null, g.getNicknameGuildPairs().length > 0 ? (0, i.jsx)(o.Z, {
      position: "bottom",
      className: Z.nicknames,
      delay: 0,
      onTooltipShow: O,
      onTooltipHide: P,
      children: g.renderNicknamePairs(!j)
    }) : null]
  })
}