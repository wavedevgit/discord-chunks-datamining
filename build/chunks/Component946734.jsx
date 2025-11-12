/** Chunk was on 40029 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => S
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  o = require.n(Chunk392711),
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
class k {
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
  renderNicknamePairs(e) {
    return this.getNicknameGuildPairs().map((t, n) => {
      let [a, o] = t, l = (0, r.jsx)(d.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: a
      });
      return o.length > 0 && (l = (0, r.jsx)(c.u, {
        asContainer: true,
        tag: "span",
        text: o.join(", "),
        position: "bottom",
        shouldShow: e,
        delay: 50,
        children: l
      })), (0, r.jsxs)(i.Fragment, {
        children: [0 !== n ? ", " : null, l]
      }, n)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: i
  }) {
    P(this, "userId", true), P(this, "user", true), P(this, "channelId", true), P(this, "analyticsLocations", true), P(this, "generateNicknameGuildPairs", (0, j.oH)(e => {
      var t;
      return o()(g.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = m.Z.getGuild(e)) ? true : t.name
        }).filter(x.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), P(this, "renderMoreAvatars", () => (0, r.jsx)(c.u, {
      asContainer: true,
      tag: "span",
      text: C.intl.string(C.t["UTjRE/"]),
      position: "bottom",
      children: (0, r.jsx)(d.P3F, {
        className: O.moreAvatars,
        onClick: this.handleClick,
        children: (0, r.jsx)(d.oFk, {
          size: "xs",
          color: "currentColor",
          className: O.plusIcon
        })
      })
    }, "more-avatars")), P(this, "handleClick", () => {
      (0, f.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: y.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function S(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), a = (0, b.gc)(n), o = Array(a.length).fill(null), {
    analyticsLocations: f
  } = (0, p.ZP)(h.Z.AKA), g = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, a = (0, l.e7)([_.default], () => _.default.getUser(t), [t]), [o] = i.useState(() => new k({
      user: a,
      userId: t,
      channelId: n,
      analyticsLocations: r
    }));
    return o.updateData({
      userId: t,
      user: a,
      channelId: n,
      analyticsLocations: r
    }), o
  }({
    userId: n,
    analyticsLocations: f,
    channelId: t.id
  }), [j, x] = i.useState(false), y = i.useCallback(() => {
    x(true)
  }, [x]), P = i.useCallback(() => {
    x(false)
  }, [x]);
  return 0 === g.getNicknameGuildPairs().length && 0 === a.length ? (0, r.jsx)("div", {
    className: O.spacer
  }) : (0, r.jsxs)(p.Gt, {
    value: f,
    children: [(0, r.jsx)(v.iz, {
      className: O.divider
    }), (0, r.jsx)(d.IGR, {
      text: C.intl.string(C.t.l1QVfj),
      disableColor: true,
      className: O.akaBadge
    }), a.length > 0 ? (0, r.jsx)(u.ZP, {
      size: 16,
      users: o,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let o = g.user,
          l = a[n];
        return null == l || null == o ? null : (0, r.jsx)(c.u, {
          asContainer: true,
          text: null == (i = m.Z.getGuild(l)) ? true : i.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: O.avatar,
            onClick: g.handleClick,
            src: o.getAvatarURL(l, 16),
            "aria-hidden": true
          })
        }, l[1])
      },
      renderMoreUsers: g.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: O.avatars
    }) : null, g.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(s.Z, {
      position: "bottom",
      className: O.nicknames,
      delay: 0,
      onTooltipShow: y,
      onTooltipHide: P,
      children: g.renderNicknamePairs(!j)
    }) : null]
  })
}