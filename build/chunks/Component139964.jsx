/** Chunk was on 73217 **/
/** chunk id: 139964, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => O
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk812206 = require("./812206.js"),
  Chunk231757 = require("./231757.jsx"),
  Chunk511010 = require("./511010.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk430824 = require("./430824.js"),
  Chunk979192 = require("./979192.js"),
  Chunk647529 = require("./647529.jsx"),
  Chunk986398 = require("./986398.jsx"),
  Chunk463031 = require("./463031.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk751848 = require("./751848.js");

function O(e) {
  var t, n, {
      guildId: l,
      leaderboard: c
    } = e,
    m = function(e, t) {
      if (null == e) return {};
      var n, r, i = function(e, t) {
        if (null == e) return {};
        var n, r, i = {},
          o = Object.keys(e);
        for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
        return i
      }(e, t);
      if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) n = o[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
      }
      return i
    }(e, ["guildId", "leaderboard"]);
  let g = (0, o.e7)([x.Z], () => x.Z.getGuild(l)),
    O = (0, o.e7)([d.Z], () => d.Z.getApplication(c.settings.application_id));
  return (i.useEffect(() => {
    null != l && s.ZP.trackWithMetadata(b.rMx.OPEN_MODAL, {
      type: b.jXE.GUILD_LEADERBOARD_ACCESS_MODAL,
      guild_id: l
    })
  }, [l]), null == g || null == O) ? null : (0, r.jsx)(j.Z, (t = function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: true,
          configurable: true,
          writable: true
        }) : e[t] = r
      })
    }
    return e
  }({
    guildId: l,
    title: _.intl.formatToPlainString(_.t["3BZonp"], {
      applicationName: O.name
    })
  }, m), n = n = {
    children: (0, r.jsxs)(a.hzk, {
      className: h.modalContent,
      children: [(0, r.jsxs)("div", {
        className: h.subtitleContainer,
        children: [(0, r.jsx)(a.Text, {
          variant: "text-md/normal",
          color: "text-secondary",
          children: _.intl.string(_.t.OBuzJi)
        }), (0, r.jsx)(p.Z, {
          className: h.winnerImage,
          leaderboard: c
        })]
      }), (0, r.jsxs)("div", {
        className: h.notes,
        children: [c.leaderboard_id === f.z ? (0, r.jsxs)(r.Fragment, {
          children: [(0, r.jsx)(y, {}), (0, r.jsx)(a.LZC, {
            size: 4
          }), (0, r.jsx)(u.Z, {
            className: h.divider
          })]
        }) : null, null != g && (0, r.jsx)(C, {
          guild: g,
          leaderboardId: c.leaderboard_id
        })]
      })]
    })
  }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      n.push.apply(n, r)
    }
    return n
  })(Object(n)).forEach(function(e) {
    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
  }), t))
}

function y() {
  return (0, Chunk255367.jsxs)("div", {
    className: Chunk751848.row,
    children: [(0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-md/medium",
      children: Chunk388032.intl.string(Chunk388032.t.PL48CA)
    }), (0, Chunk255367.jsx)(v, {})]
  })
}

function v() {
  return null != (0, Chunk442837.e7)([Chunk553795.Z], () => Chunk553795.Z.getAccount(null, Chunk981631.ABu.RIOT_GAMES)) ? (0, Chunk255367.jsxs)(Chunk755721.zx, {
    disabled: true,
    color: Chunk755721.zx.Colors.TRANSPARENT,
    look: Chunk755721.zx.Looks.OUTLINED,
    innerClassName: Chunk751848.doneButton,
    children: [(0, Chunk255367.jsx)(Chunk481060.kmB, {}), (0, Chunk255367.jsx)(Chunk481060.Text, {
      variant: "text-sm/medium",
      children: Chunk388032.intl.string(Chunk388032.t.i4jeWV)
    })]
  }) : (0, Chunk255367.jsx)(Chunk481060.zxk, {
    variant: "secondary",
    size: "sm",
    text: Chunk388032.intl.string(Chunk388032.t.To26Nj),
    onClick: () => (0, Chunk231757.Z)({
      platformType: Chunk981631.ABu.RIOT_GAMES
    })
  })
}

function C(e) {
  let {
    guild: t,
    leaderboardId: n
  } = e, {
    leaderboardsDisabled: i,
    toggleGuildLeaderboardsDisabled: o
  } = (0, g.O)(t.id, n);
  return (0, r.jsx)(a.j7V, {
    hideBorder: true,
    onChange: o,
    value: !i,
    className: h.guildOptoutSwitch,
    children: _.intl.string(_.t.eZhXQU)
  })
}