/** Chunk was on 53512 **/
/** chunk id: 57927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk367907 = require("./367907.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk430824 = require("./430824.js"),
  Chunk771845 = require("./771845.js"),
  Chunk9156 = require("./9156.js"),
  Chunk626135 = require("./626135.js"),
  Chunk789662 = require("./789662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk865311 = require("./865311.js");

function N(e) {
  let {
    guildPlans: t,
    overrideGuild: n
  } = e, r = (0, d.e7)([j.ZP], () => j.ZP.getFlattenedGuildIds()), [a, l] = s.useMemo(() => c()(t).values().sortBy(e => {
    let t = r.indexOf(e.guildId);
    return false === t ? r.length : t
  }).partition(e => {
    var t;
    return (null != (t = e.overrideMode) ? t : e.mode) === b.AR.UseGreyDot
  }).value(), [t, r]), o = s.useCallback(e => {
    var i;
    return n(e, (null != (i = t[e].overrideMode) ? i : t[e].mode) === b.AR.UseGreyDot ? b.AR.KeepAsIs : b.AR.UseGreyDot)
  }, [n, t]);
  return (0, i.jsxs)("div", {
    className: p.container,
    children: [(0, i.jsx)(C, {
      header: v.intl.string(v.t.tGGAdX),
      subheader: v.intl.string(v.t["e+d/vr"]),
      guildPlans: l,
      onClick: o
    }), (0, i.jsx)(C, {
      header: v.intl.string(v.t.f6pf39),
      subheader: v.intl.string(v.t.izeB6e),
      guildPlans: a,
      onClick: o
    })]
  })
}

function C(e) {
  let {
    header: t,
    subheader: n,
    guildPlans: s,
    onClick: r
  } = e;
  return (0, i.jsxs)("div", {
    className: p.column,
    children: [(0, i.jsxs)("div", {
      className: p.header,
      children: [(0, i.jsxs)(m.Text, {
        className: p.__invalid_sectionTitle,
        variant: "text-md/medium",
        color: "header-primary",
        children: [t, " (", s.length, ")"]
      }), (0, i.jsx)(m.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: n
      })]
    }), (0, i.jsx)(m.Ttm, {
      className: p.scroller,
      children: (0, i.jsx)("div", {
        className: p.guilds,
        children: s.map(e => (0, i.jsx)(y, {
          plan: e,
          onClick: r
        }, e.guildId))
      })
    })]
  })
}

function y(e) {
  var t;
  let {
    plan: n,
    onClick: s
  } = e, r = (0, d.e7)([u.Z], () => u.Z.getGuild(n.guildId));
  if (null == r) return null;
  let l = (null != (t = n.overrideMode) ? t : n.mode) === b.AR.UseGreyDot;
  return (0, i.jsx)(o.u, {
    asContainer: true,
    __unsupportedReactNodeAsText: (0, i.jsxs)("div", {
      children: [(0, i.jsx)(m.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: r.name
      }), (0, i.jsxs)("div", {
        className: p.tooltipRow,
        children: [(0, i.jsx)(m.kBi, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(m.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: n.messagePain ? v.intl.string(v.t["3EQSoK"]) : v.intl.string(v.t["CaR/Eh"])
        })]
      }), (0, i.jsxs)("div", {
        className: p.tooltipRow,
        children: [(0, i.jsx)(m.iFz, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(m.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: n.visitsALot ? v.intl.string(v.t["6dgvsb"]) : v.intl.string(v.t.fgedbG)
        })]
      }), (0, i.jsxs)("div", {
        className: p.tooltipRow,
        children: [(0, i.jsx)(m.Dkj, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(m.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: n.muted ? v.intl.string(v.t.rdTrHx) : v.intl.string(v.t.sdFUj4)
        })]
      })]
    }),
    "aria-label": n.debugReason,
    children: (0, i.jsxs)(m.P3F, {
      className: a()(p.guild, l ? p.selected : true),
      onClick: function() {
        var e, t;
        _.default.track(f.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED, (e = function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              i = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (i = i.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), i.forEach(function(t) {
              var i;
              i = n[t], t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = i
            })
          }
          return e
        }({}, (0, x.hH)(n.guildId)), t = t = {
          is_selected: !l,
          is_muted: g.ZP.isMuted(n.guildId),
          notification_setting: g.ZP.getMessageNotifications(n.guildId)
        }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
          var n = Object.keys(e);
          if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(e);
            n.push.apply(n, i)
          }
          return n
        })(Object(t)).forEach(function(n) {
          Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
        }), e)), s(n.guildId)
      },
      children: [(0, i.jsx)(m.owK, {
        size: "xs",
        color: "currentColor",
        className: p.checkmark,
        secondaryColor: "white"
      }), (0, i.jsx)(h.Z, {
        "aria-hidden": true,
        className: p.guildIcon,
        guild: r,
        size: h.Z.Sizes.MEDIUM,
        active: true,
        tabIndex: false
      })]
    })
  })
}