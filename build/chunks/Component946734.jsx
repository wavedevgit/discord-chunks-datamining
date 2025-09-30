/** Chunk was on 93338 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => k
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk392711 = require("./392711.js"),
  a = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
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

function w(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}
class C {
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
      let [o, a] = t, l = (0, r.jsx)(c.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: o
      });
      return a.length > 0 && (l = (0, r.jsx)(s.u, {
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
    w(this, "userId", true), w(this, "user", true), w(this, "channelId", true), w(this, "analyticsLocations", true), w(this, "generateNicknameGuildPairs", (0, y.oH)(e => {
      var t;
      return a()(m.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = g.Z.getGuild(e)) ? true : t.name
        }).filter(j.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), w(this, "renderMoreAvatars", () => (0, r.jsx)(s.u, {
      asContainer: true,
      tag: "span",
      text: x.intl.string(x.t.UTjREx),
      position: "bottom",
      children: (0, r.jsx)(c.P3F, {
        className: P.moreAvatars,
        onClick: this.handleClick,
        children: (0, r.jsx)(c.oFk, {
          size: "xs",
          color: "currentColor",
          className: P.plusIcon
        })
      })
    }, "more-avatars")), w(this, "handleClick", () => {
      (0, h.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: O.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function k(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), o = (0, f.gc)(n), a = Array(o.length).fill(null), {
    analyticsLocations: h
  } = (0, b.ZP)(d.Z.AKA), m = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, o = (0, l.e7)([_.default], () => _.default.getUser(t), [t]), [a] = i.useState(() => new C({
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
  }), [y, j] = i.useState(false), O = i.useCallback(() => {
    j(true)
  }, [j]), w = i.useCallback(() => {
    j(false)
  }, [j]);
  return 0 === m.getNicknameGuildPairs().length && 0 === o.length ? (0, r.jsx)("div", {
    className: P.spacer
  }) : (0, r.jsxs)(b.Gt, {
    value: h,
    children: [(0, r.jsx)(v.iz, {
      className: P.divider
    }), (0, r.jsx)(c.IGR, {
      text: x.intl.string(x.t.l1QVfn),
      disableColor: true,
      className: P.akaBadge
    }), o.length > 0 ? (0, r.jsx)(u.ZP, {
      size: 16,
      users: a,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let a = m.user,
          l = o[n];
        return null == l || null == a ? null : (0, r.jsx)(s.u, {
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
    }) : null, m.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(p.Z, {
      position: "bottom",
      className: P.nicknames,
      delay: 0,
      onTooltipShow: O,
      onTooltipHide: w,
      children: m.renderNicknamePairs(!y)
    }) : null]
  })
}