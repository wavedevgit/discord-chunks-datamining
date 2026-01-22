/** Chunk was on 97492 **/
/** chunk id: 282978, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => S
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk735438 = require("./735438.js"),
  a = require.n(Chunk735438),
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

function _(e, t, n) {
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
      let [i, a] = t, s = (0, r.jsx)(u.DUT, {
        tag: "span",
        onClick: this.handleClick,
        children: i
      });
      return a.length > 0 && (s = (0, r.jsx)(c.m, {
        asContainer: true,
        tag: "span",
        text: a.join(", "),
        position: "bottom",
        shouldShow: e,
        delay: 50,
        children: s
      })), (0, r.jsxs)(l.Fragment, {
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
    _(this, "userId", true), _(this, "user", true), _(this, "channelId", true), _(this, "analyticsLocations", true), _(this, "generateNicknameGuildPairs", (0, y.L_)(e => {
      var t;
      return a()(g.Ay.getNicknameGuildsMapping(null != (t = null == e ? true : e.id) ? t : this.userId)).toPairs().map(e => {
        let [t, n] = e;
        return [t, n.map(e => {
          var t;
          return null == (t = m.A.getGuild(e)) ? true : t.name
        }).filter(O.Vq)]
      }).filter(t => {
        let [n] = t;
        return n !== (null == e ? true : e.globalName)
      }).value()
    })), _(this, "renderMoreAvatars", () => (0, r.jsx)(c.m, {
      asContainer: true,
      tag: "span",
      text: x.intl.string(x.t["UTjRE/"]),
      position: "bottom",
      children: (0, r.jsx)(u.DUT, {
        className: E.OZ,
        onClick: this.handleClick,
        children: (0, r.jsx)(u.U1e, {
          size: "xs",
          color: "currentColor",
          className: E.WW
        })
      })
    }, "more-avatars")), _(this, "handleClick", () => {
      (0, b.openUserProfileModal)({
        userId: this.userId,
        channelId: this.channelId,
        sourceAnalyticsLocations: this.analyticsLocations,
        tabSection: v.RP.MUTUAL_GUILDS
      })
    }), this.userId = e, this.user = t, this.channelId = n, this.analyticsLocations = l
  }
}

function S(e) {
  let {
    channel: t
  } = e, n = t.getRecipientId(), i = (0, h.EI)(n), a = Array(i.length).fill(null), {
    analyticsLocations: b
  } = (0, p.Ay)(f.A.AKA), g = function(e) {
    let {
      userId: t,
      channelId: n,
      analyticsLocations: r
    } = e, i = (0, s.bG)([A.default], () => A.default.getUser(t), [t]), [a] = l.useState(() => new C({
      user: i,
      userId: t,
      channelId: n,
      analyticsLocations: r
    }));
    return a.updateData({
      userId: t,
      user: i,
      channelId: n,
      analyticsLocations: r
    }), a
  }({
    userId: n,
    analyticsLocations: b,
    channelId: t.id
  }), [y, O] = l.useState(false), v = l.useCallback(() => {
    O(true)
  }, [O]), _ = l.useCallback(() => {
    O(false)
  }, [O]);
  return 0 === g.getNicknameGuildPairs().length && 0 === i.length ? (0, r.jsx)("div", {
    className: E.jH
  }) : (0, r.jsxs)(p.f5, {
    value: b,
    children: [(0, r.jsx)(j.cG, {
      className: E.yF
    }), (0, r.jsx)(u.LpS, {
      text: x.intl.string(x.t.l1QVfj),
      disableColor: true,
      className: E.RV
    }), i.length > 0 ? (0, r.jsx)(d.Ay, {
      size: 16,
      users: a,
      showUserPopout: false,
      renderUser: (e, t, n) => {
        var l;
        let a = g.user,
          s = i[n];
        return null == s || null == a ? null : (0, r.jsx)(c.m, {
          asContainer: true,
          text: null == (l = m.A.getGuild(s)) ? true : l.name,
          position: "bottom",
          children: (0, r.jsx)("img", {
            alt: "",
            className: E.my,
            onClick: g.handleClick,
            src: a.getAvatarURL(s, 16),
            "aria-hidden": true
          })
        }, s[1])
      },
      renderMoreUsers: g.renderMoreAvatars,
      guildId: true,
      max: 3,
      className: E.HD
    }) : null, g.getNicknameGuildPairs().length > 0 ? (0, r.jsx)(o.A, {
      position: "bottom",
      className: E.wm,
      delay: 0,
      onTooltipShow: v,
      onTooltipHide: _,
      children: g.renderNicknamePairs(!y)
    }) : null]
  })
}