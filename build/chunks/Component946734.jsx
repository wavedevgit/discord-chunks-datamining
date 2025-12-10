/** Chunk was on 27454 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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

function S(e, t, n) {
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
      let [a, o] = t, l = (0, r.jsx)(u.P3F, {
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
    S(this, "userId", true), S(this, "user", true), S(this, "channelId", true), S(this, "analyticsLocations", true), S(this, "generateNicknameGuildPairs", (0, v.oH)(e => {
      var t;
      return o()(m.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = g.Z.getGuild(e)) ? true : t.name
        }).filter(y.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), S(this, "renderMoreAvatars", () => (0, r.jsx)(c.u, {
      asContainer: true,
      tag: "span",
      text: _.intl.string(_.t["UTjRE/"]),
      position: "bottom",
      children: (0, r.jsx)(u.P3F, {
        className: P.moreAvatars,
        onClick: this.handleClick,
        children: (0, r.jsx)(u.oFk, {
          size: "xs",
          color: "currentColor",
          className: P.plusIcon
        })
      })
    }, "more-avatars")), S(this, "handleClick", () => {
      (0, p.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: x.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function C(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), a = (0, b.gc)(n), o = Array(a.length).fill(null), {
    analyticsLocations: p
  } = (0, h.ZP)(f.Z.AKA), m = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, a = (0, l.e7)([j.default], () => j.default.getUser(t), [t]), [o] = i.useState(() => new I({
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
    analyticsLocations: p,
    channelId: t.id
  }), [v, y] = i.useState(false), x = i.useCallback(() => {
    y(true)
  }, [y]), S = i.useCallback(() => {
    y(false)
  }, [y]);
  return 0 === m.getNicknameGuildPairs().length && 0 === a.length ? (0, r.jsx)("div", {
    className: P.spacer
  }) : (0, r.jsxs)(h.Gt, {
    value: p,
    children: [(0, r.jsx)(O.iz, {
      className: P.divider
    }), (0, r.jsx)(u.IGR, {
      text: _.intl.string(_.t.l1QVfj),
      disableColor: true,
      className: P.akaBadge
    }), a.length > 0 ? (0, r.jsx)(d.ZP, {
      size: 16,
      users: o,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let o = m.user,
          l = a[n];
        return null == l || null == o ? null : (0, r.jsx)(c.u, {
          asContainer: true,
          text: null == (i = g.Z.getGuild(l)) ? true : i.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: P.avatar,
            onClick: m.handleClick,
            src: o.getAvatarURL(l, 16),
            "aria-hidden": true
          })
        }, l[1])
      },
      renderMoreUsers: m.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: P.avatars
    }) : null, m.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(s.Z, {
      position: "bottom",
      className: P.nicknames,
      delay: 0,
      onTooltipShow: x,
      onTooltipHide: S,
      children: m.renderNicknamePairs(!v)
    }) : null]
  })
}