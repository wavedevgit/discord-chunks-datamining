/** Chunk was on 82697 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
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
  Chunk130370 = require("./130370.js");

function I(e, t, n) {
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
  renderNicknamePairs(e) {
    return this.getNicknameGuildPairs().map((t, n) => {
      let [o, a] = t, l = (0, r.jsx)(u.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: o
      });
      return a.length > 0 && (l = (0, r.jsx)(c.u, {
        asContainer: true,
        tag: "span",
        text: a.join(", "),
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
    I(this, "userId", true), I(this, "user", true), I(this, "channelId", true), I(this, "analyticsLocations", true), I(this, "generateNicknameGuildPairs", (0, O.oH)(e => {
      var t;
      return a()(m.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = g.Z.getGuild(e)) ? true : t.name
        }).filter(y.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), I(this, "renderMoreAvatars", () => (0, r.jsx)(c.u, {
      asContainer: true,
      tag: "span",
      text: x.intl.string(x.t["UTjRE/"]),
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
    }, "more-avatars")), I(this, "handleClick", () => {
      (0, h.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: _.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function C(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), o = (0, p.gc)(n), a = Array(o.length).fill(null), {
    analyticsLocations: h
  } = (0, b.ZP)(f.Z.AKA), m = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, o = (0, l.e7)([j.default], () => j.default.getUser(t), [t]), [a] = i.useState(() => new S({
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
  }({
    userId: n,
    analyticsLocations: h,
    channelId: t.id
  }), [O, y] = i.useState(false), _ = i.useCallback(() => {
    y(true)
  }, [y]), I = i.useCallback(() => {
    y(false)
  }, [y]);
  return 0 === m.getNicknameGuildPairs().length && 0 === o.length ? (0, r.jsx)("div", {
    className: P.spacer
  }) : (0, r.jsxs)(b.Gt, {
    value: h,
    children: [(0, r.jsx)(v.iz, {
      className: P.divider
    }), (0, r.jsx)(u.IGR, {
      text: x.intl.string(x.t.l1QVfj),
      disableColor: true,
      className: P.akaBadge
    }), o.length > 0 ? (0, r.jsx)(d.ZP, {
      size: 16,
      users: a,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let a = m.user,
          l = o[n];
        return null == l || null == a ? null : (0, r.jsx)(c.u, {
          asContainer: true,
          text: null == (i = g.Z.getGuild(l)) ? true : i.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: P.avatar,
            onClick: m.handleClick,
            src: a.getAvatarURL(l, 16),
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
      onTooltipShow: _,
      onTooltipHide: I,
      children: m.renderNicknamePairs(!O)
    }) : null]
  })
}