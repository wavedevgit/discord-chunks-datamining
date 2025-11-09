/** Chunk was on 94709 **/
/** chunk id: 946734, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => I
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
  Chunk129387 = require("./129387.js");

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
      let [l, o] = t, a = (0, r.jsx)(u.P3F, {
        tag: "span",
        onClick: this.handleClick,
        children: l
      });
      return o.length > 0 && (a = (0, r.jsx)(c.u, {
        asContainer: true,
        tag: "span",
        text: o.join(", "),
        position: "bottom",
        shouldShow: e,
        delay: 50,
        children: a
      })), (0, r.jsxs)(i.Fragment, {
        children: [0 !== n ? ", " : null, a]
      }, n)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: i
  }) {
    E(this, "userId", true), E(this, "user", true), E(this, "channelId", true), E(this, "analyticsLocations", true), E(this, "generateNicknameGuildPairs", (0, y.oH)(e => {
      var t;
      return o()(m.ZP.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = b.Z.getGuild(e)) ? true : t.name
        }).filter(O.lm)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), E(this, "renderMoreAvatars", () => (0, r.jsx)(c.u, {
      asContainer: true,
      tag: "span",
      text: x.intl.string(x.t["UTjRE/"]),
      position: "bottom",
      children: (0, r.jsx)(u.P3F, {
        className: C.moreAvatars,
        onClick: this.handleClick,
        children: (0, r.jsx)(u.oFk, {
          size: "xs",
          color: "currentColor",
          className: C.plusIcon
        })
      })
    }, "more-avatars")), E(this, "handleClick", () => {
      (0, g.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        section: j.oh.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = i
  }
}

function I(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), l = (0, f.gc)(n), o = Array(l.length).fill(null), {
    analyticsLocations: g
  } = (0, h.ZP)(p.Z.AKA), m = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, l = (0, a.e7)([_.default], () => _.default.getUser(t), [t]), [o] = i.useState(() => new S({
      user: l,
      userId: t,
      channelId: n,
      analyticsLocations: r
    }));
    return o.updateData({
      userId: t,
      user: l,
      channelId: n,
      analyticsLocations: r
    }), o
  }({
    userId: n,
    analyticsLocations: g,
    channelId: t.id
  }), [y, O] = i.useState(false), j = i.useCallback(() => {
    O(true)
  }, [O]), E = i.useCallback(() => {
    O(false)
  }, [O]);
  return 0 === m.getNicknameGuildPairs().length && 0 === l.length ? (0, r.jsx)("div", {
    className: C.spacer
  }) : (0, r.jsxs)(h.Gt, {
    value: g,
    children: [(0, r.jsx)(v.iz, {
      className: C.divider
    }), (0, r.jsx)(u.IGR, {
      text: x.intl.string(x.t.l1QVfj),
      disableColor: true,
      className: C.akaBadge
    }), l.length > 0 ? (0, r.jsx)(d.ZP, {
      size: 16,
      users: o,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var i;
        let o = m.user,
          a = l[n];
        return null == a || null == o ? null : (0, r.jsx)(c.u, {
          asContainer: true,
          text: null == (i = b.Z.getGuild(a)) ? true : i.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: C.avatar,
            onClick: m.handleClick,
            src: o.getAvatarURL(a, 16),
            "aria-hidden": true
          })
        }, a[1])
      },
      renderMoreUsers: m.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: C.avatars
    }) : null, m.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(s.Z, {
      position: "bottom",
      className: C.nicknames,
      delay: 0,
      onTooltipShow: j,
      onTooltipHide: E,
      children: m.renderNicknamePairs(!y)
    }) : null]
  })
}