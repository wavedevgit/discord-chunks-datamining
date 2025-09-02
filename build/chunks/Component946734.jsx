/** Chunk was on 62987 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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

function E(e, t, n) {
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
      let [l, a] = t, o = (0, r.jsx)(c.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: l
      });
      return a.length > 0 && (o = (0, r.jsx)(s.u, {
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
    E(this, "userId", true), E(this, "user", true), E(this, "channelId", true), E(this, "analyticsLocations", true), E(this, "generateNicknameGuildPairs", (0, _.oH)(e => {
      var t;
      return a()(g.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = b.Z.getGuild(e)) ? true : t.name
        }).filter(C.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), E(this, "renderMoreAvatars", () => (0, r.jsx)(s.u, {
      asContainer: true,
      tag: "span",
      text: O.intl.string(O.t.UTjREx),
      position: "bottom",
      children: (0, r.jsx)(c.P3F, {
        className: j.moreAvatars,
        onClick: this.handleClick,
        children: (0, r.jsx)(c.oFk, {
          size: "xs",
          color: "currentColor",
          className: j.plusIcon
        })
      })
    }, "more-avatars")), E(this, "handleClick", () => {
      (0, m.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: v.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function I(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), l = (0, f.gc)(n), a = Array(l.length).fill(null), {
    analyticsLocations: m
  } = (0, p.ZP)(d.Z.AKA), g = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, l = (0, o.e7)([y.default], () => y.default.getUser(t), [t]), [a] = i.useState(() => new S({
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
    analyticsLocations: m,
    channelId: t.id
  }), [_, C] = i.useState(false), v = i.useCallback(() => {
    C(true)
  }, [C]), E = i.useCallback(() => {
    C(false)
  }, [C]);
  return 0 === g.getNicknameGuildPairs().length && 0 === l.length ? (0, r.jsx)("div", {
    className: j.spacer
  }) : (0, r.jsxs)(p.Gt, {
    value: m,
    children: [(0, r.jsx)(x.iz, {
      className: j.divider
    }), (0, r.jsx)(c.IGR, {
      text: O.intl.string(O.t.l1QVfn),
      disableColor: true,
      className: j.akaBadge
    }), l.length > 0 ? (0, r.jsx)(u.ZP, {
      size: 16,
      users: a,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let a = g.user,
          o = l[n];
        return null == o || null == a ? null : (0, r.jsx)(s.u, {
          asContainer: true,
          text: null == (i = b.Z.getGuild(o)) ? true : i.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: j.avatar,
            onClick: g.handleClick,
            src: a.getAvatarURL(o, 16),
            "aria-hidden": true
          })
        }, o[1])
      },
      renderMoreUsers: g.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: j.avatars
    }) : null, g.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(h.Z, {
      position: "bottom",
      className: j.nicknames,
      delay: 0,
      onTooltipShow: v,
      onTooltipHide: E,
      children: g.renderNicknamePairs(!_)
    }) : null]
  })
}