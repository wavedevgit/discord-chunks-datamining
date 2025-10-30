/** Chunk was on 85496 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => P
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
  Chunk129387 = require("./129387.js");

function C(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class T {
  updateData(e) {
    let {
      userId: t,
      user: n,
      channelId: l,
      analyticsLocations: i
    } = e;
    this.userId = t, this.user = n, this.channelId = l, this.analyticsLocations = i
  }
  getNicknameGuildPairs() {
    return this.generateNicknameGuildPairs(this.user)
  }
  renderNicknamePairs(e) {
    return this.getNicknameGuildPairs().map((t, n) => {
      let [r, a] = t, s = (0, l.jsx)(u.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: r
      });
      return a.length > 0 && (s = (0, l.jsx)(c.u, {
        asContainer: true,
        tag: "span",
        text: a.join(", "),
        position: "bottom",
        shouldShow: e,
        delay: 50,
        children: s
      })), (0, l.jsxs)(i.Fragment, {
        children: [0 !== n ? ", " : null, s]
      }, n)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: i
  }) {
    C(this, "userId", true), C(this, "user", true), C(this, "channelId", true), C(this, "analyticsLocations", true), C(this, "generateNicknameGuildPairs", (0, j.oH)(e => {
      var t;
      return a()(g.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = b.Z.getGuild(e)) ? true : t.name
        }).filter(O.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), C(this, "renderMoreAvatars", () => (0, l.jsx)(c.u, {
      asContainer: true,
      tag: "span",
      text: Z.intl.string(Z.t["UTjRE/"]),
      position: "bottom",
      children: (0, l.jsx)(u.P3F, {
        className: I.moreAvatars,
        onClick: this.handleClick,
        children: (0, l.jsx)(u.oFk, {
          size: "xs",
          color: "currentColor",
          className: I.plusIcon
        })
      })
    }, "more-avatars")), C(this, "handleClick", () => {
      (0, m.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: x.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function P(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), r = (0, f.gc)(n), a = Array(r.length).fill(null), {
    analyticsLocations: m
  } = (0, h.ZP)(p.Z.AKA), g = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: l
    } = e, r = (0, s.e7)([v.default], () => v.default.getUser(t), [t]), [a] = i.useState(() => new T({
      user: r,
      userId: t,
      channelId: n,
      analyticsLocations: l
    }));
    return a.updateData({
      userId: t,
      user: r,
      channelId: n,
      analyticsLocations: l
    }), a
  }({
    userId: n,
    analyticsLocations: m,
    channelId: t.id
  }), [j, O] = i.useState(false), x = i.useCallback(() => {
    O(true)
  }, [O]), C = i.useCallback(() => {
    O(false)
  }, [O]);
  return 0 === g.getNicknameGuildPairs().length && 0 === r.length ? (0, l.jsx)("div", {
    className: I.spacer
  }) : (0, l.jsxs)(h.Gt, {
    value: m,
    children: [(0, l.jsx)(y.iz, {
      className: I.divider
    }), (0, l.jsx)(u.IGR, {
      text: Z.intl.string(Z.t.l1QVfj),
      disableColor: true,
      className: I.akaBadge
    }), r.length > 0 ? (0, l.jsx)(d.ZP, {
      size: 16,
      users: a,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let a = g.user,
          s = r[n];
        return null == s || null == a ? null : (0, l.jsx)(c.u, {
          asContainer: true,
          text: null == (i = b.Z.getGuild(s)) ? true : i.name,
          position: "bottom",
          children: (0, l.jsx)("img", {
            alt: "",
            className: I.avatar,
            onClick: g.handleClick,
            src: a.getAvatarURL(s, 16),
            "aria-hidden": true
          })
        }, s[1])
      },
      renderMoreUsers: g.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: I.avatars
    }) : null, g.getNicknameGuildPairs().length > 0 ? (0, l.jsx)(o.Z, {
      position: "bottom",
      className: I.nicknames,
      delay: 0,
      onTooltipShow: x,
      onTooltipHide: C,
      children: g.renderNicknamePairs(!j)
    }) : null]
  })
}