/** Chunk was on 67000 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
  Chunk297742 = require("./297742.js");

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
      let [l, a] = t, o = (0, r.jsx)(u.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: l
      });
      return a.length > 0 && (o = (0, r.jsx)(c.u, {
        asContainer: true,
        tag: "span",
        text: a.join(", "),
        position: "bottom",
        shouldShow: e,
        delay: 50,
        children: o
      })), (0, r.jsxs)(i.Fragment, {
        children: [0 !== n ? ", " : null, o]
      }, n)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: i
  }) {
    S(this, "userId", true), S(this, "user", true), S(this, "channelId", true), S(this, "analyticsLocations", true), S(this, "generateNicknameGuildPairs", (0, O.oH)(e => {
      var t;
      return a()(b.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = m.Z.getGuild(e)) ? true : t.name
        }).filter(v.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), S(this, "renderMoreAvatars", () => (0, r.jsx)(c.u, {
      asContainer: true,
      tag: "span",
      text: x.intl.string(x.t["UTjRE/"]),
      position: "bottom",
      children: (0, r.jsx)(u.P3F, {
        className: E.moreAvatars,
        onClick: this.handleClick,
        children: (0, r.jsx)(u.oFk, {
          size: "xs",
          color: "currentColor",
          className: E.plusIcon
        })
      })
    }, "more-avatars")), S(this, "handleClick", () => {
      (0, g.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        tabSection: C.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function _(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), l = (0, p.gc)(n), a = Array(l.length).fill(null), {
    analyticsLocations: g
  } = (0, h.ZP)(f.Z.AKA), b = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, l = (0, o.e7)([y.default], () => y.default.getUser(t), [t]), [a] = i.useState(() => new I({
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
    analyticsLocations: g,
    channelId: t.id
  }), [O, v] = i.useState(false), C = i.useCallback(() => {
    v(true)
  }, [v]), S = i.useCallback(() => {
    v(false)
  }, [v]);
  return 0 === b.getNicknameGuildPairs().length && 0 === l.length ? (0, r.jsx)("div", {
    className: E.spacer
  }) : (0, r.jsxs)(h.Gt, {
    value: g,
    children: [(0, r.jsx)(j.iz, {
      className: E.divider
    }), (0, r.jsx)(u.IGR, {
      text: x.intl.string(x.t.l1QVfj),
      disableColor: true,
      className: E.akaBadge
    }), l.length > 0 ? (0, r.jsx)(d.ZP, {
      size: 16,
      users: a,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let a = b.user,
          o = l[n];
        return null == o || null == a ? null : (0, r.jsx)(c.u, {
          asContainer: true,
          text: null == (i = m.Z.getGuild(o)) ? true : i.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: E.avatar,
            onClick: b.handleClick,
            src: a.getAvatarURL(o, 16),
            "aria-hidden": true
          })
        }, o[1])
      },
      renderMoreUsers: b.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: E.avatars
    }) : null, b.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(s.Z, {
      position: "bottom",
      className: E.nicknames,
      delay: 0,
      onTooltipShow: C,
      onTooltipHide: S,
      children: b.renderNicknamePairs(!O)
    }) : null]
  })
}