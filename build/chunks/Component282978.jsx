/** Chunk was on 78528 **/
/** chunk id: 282978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  s = require.n(Chunk735438),
  Chunk311907 = require("./311907.js"),
  Chunk3026 = require("./3026.jsx"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk919395 = require("./919395.js"),
  Chunk657331 = require("./657331.js"),
  Chunk696451 = require("./696451.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk583613 = require("./583613.js"),
  Chunk403362 = require("./403362.js"),
  Chunk58736 = require("./58736.jsx"),
  Chunk518477 = require("./518477.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk940688 = require("./940688.js");

function E(e, t, n) {
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
      analyticsLocations: l
    } = e;
    this.userId = t, this.user = n, this.channelId = r, this.analyticsLocations = l
  }
  getNicknameGuildPairs() {
    return this.generateNicknameGuildPairs(this.user)
  }
  renderNicknamePairs(e) {
    return this.getNicknameGuildPairs().map((t, n) => {
      let [i, s] = t, a = (0, r.jsx)(u.DUT, {
        tag: "span",
        onClick: this.handleClick,
        children: i
      });
      return s.length > 0 && (a = (0, r.jsx)(c.m, {
        asContainer: true,
        tag: "span",
        text: s.join(", "),
        position: "bottom",
        shouldShow: e,
        delay: 50,
        children: a
      })), (0, r.jsxs)(l.Fragment, {
        children: [0 !== n ? ", " : null, a]
      }, n)
    })
  }
  constructor({
    userId: e,
    user: t,
    channelId: n,
    analyticsLocations: l
  }) {
    E(this, "userId", true), E(this, "user", true), E(this, "channelId", true), E(this, "analyticsLocations", true), E(this, "generateNicknameGuildPairs", (0, y.L_)(e => {
      var t;
      return s()(m.Ay.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = b.A.getGuild(e)) ? true : t.name
        }).filter(_.Vq)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), E(this, "renderMoreAvatars", () => (0, r.jsx)(c.m, {
      asContainer: true,
      tag: "span",
      text: v.intl.string(v.t["UTjRE/"]),
      position: "bottom",
      children: (0, r.jsx)(u.DUT, {
        className: x.OZ,
        onClick: this.handleClick,
        children: (0, r.jsx)(u.U1e, {
          size: "xs",
          color: "currentColor",
          className: x.WW
        })
      })
    }, "more-avatars")), E(this, "handleClick", () => {
      (0, g.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        tabSection: j.RP.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = l
  }
}

function S(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), i = (0, f.EI)(n), s = Array(i.length).fill(null), {
    analyticsLocations: g
  } = (0, h.Ay)(p.A.AKA), m = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, i = (0, a.bG)([A.default], () => A.default.getUser(t), [t]), [s] = l.useState(() => new C({
      user: i,
      userId: t,
      channelId: n,
      analyticsLocations: r
    }));
    return s.updateData({
      userId: t,
      user: i,
      channelId: n,
      analyticsLocations: r
    }), s
  }({
    userId: n,
    analyticsLocations: g,
    channelId: t.id
  }), [y, _] = l.useState(false), j = l.useCallback(() => {
    _(true)
  }, [_]), E = l.useCallback(() => {
    _(false)
  }, [_]);
  return 0 === m.getNicknameGuildPairs().length && 0 === i.length ? (0, r.jsx)("div", {
    className: x.jH
  }) : (0, r.jsxs)(h.f5, {
    value: g,
    children: [(0, r.jsx)(O.cG, {
      className: x.yF
    }), (0, r.jsx)(u.LpS, {
      text: v.intl.string(v.t.l1QVfj),
      disableColor: true,
      className: x.RV
    }), i.length > 0 ? (0, r.jsx)(d.Ay, {
      size: 16,
      users: s,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var l;
        let s = m.user,
          a = i[n];
        return null == a || null == s ? null : (0, r.jsx)(c.m, {
          asContainer: true,
          text: null == (l = b.A.getGuild(a)) ? true : l.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: x.my,
            onClick: m.handleClick,
            src: s.getAvatarURL(a, 16),
            "aria-hidden": true
          })
        }, a[1])
      },
      renderMoreUsers: m.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: x.HD
    }) : null, m.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(o.A, {
      position: "bottom",
      className: x.wm,
      delay: 0,
      onTooltipShow: j,
      onTooltipHide: E,
      children: m.renderNicknamePairs(!y)
    }) : null]
  })
}