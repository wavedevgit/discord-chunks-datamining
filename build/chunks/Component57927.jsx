/** Chunk was on 53512 **/
/** chunk id: 57927, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => C
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk392711 = require("./392711.js"),
  c = require.n(Chunk392711),
  Chunk442837 = require("./442837.js"),
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
  Chunk558368 = require("./558368.js");

function N(e) {
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
}

function p(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      n.push.apply(n, i)
    }
    return n
  })(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}

function C(e) {
  let {
    guildPlans: t,
    overrideGuild: n
  } = e, r = (0, o.e7)([u.ZP], () => u.ZP.getFlattenedGuildIds()), [a, l] = s.useMemo(() => c()(t).values().sortBy(e => {
    let t = r.indexOf(e.guildId);
    return false === t ? r.length : t
  }).partition(e => {
    var t;
    return (null != (t = e.overrideMode) ? t : e.mode) === _.AR.UseGreyDot
  }).value(), [t, r]), d = s.useCallback(e => {
    var i;
    return n(e, (null != (i = t[e].overrideMode) ? i : t[e].mode) === _.AR.UseGreyDot ? _.AR.KeepAsIs : _.AR.UseGreyDot)
  }, [n, t]);
  return (0, i.jsxs)("div", {
    className: f.container,
    children: [(0, i.jsx)(y, {
      header: v.intl.string(v.t.tGGAdX),
      subheader: v.intl.string(v.t["e+d/vr"]),
      guildPlans: l,
      onClick: d
    }), (0, i.jsx)(y, {
      header: v.intl.string(v.t.f6pf39),
      subheader: v.intl.string(v.t.izeB6e),
      guildPlans: a,
      onClick: d
    })]
  })
}

function y(e) {
  let {
    header: t,
    subheader: n,
    guildPlans: s,
    onClick: r
  } = e;
  return (0, i.jsxs)("div", {
    className: f.column,
    children: [(0, i.jsxs)("div", {
      className: f.header,
      children: [(0, i.jsxs)(d.Text, {
        className: f.__invalid_sectionTitle,
        variant: "text-md/medium",
        color: "header-primary",
        children: [t, " (", s.length, ")"]
      }), (0, i.jsx)(d.Text, {
        variant: "text-xs/normal",
        color: "header-secondary",
        children: n
      })]
    }), (0, i.jsx)(d.Ttm, {
      className: f.scroller,
      children: (0, i.jsx)("div", {
        className: f.guilds,
        children: s.map(e => (0, i.jsx)(T, {
          plan: e,
          onClick: r
        }, e.guildId))
      })
    })]
  })
}

function T(e) {
  var t;
  let {
    plan: n,
    onClick: s
  } = e, r = (0, o.e7)([h.Z], () => h.Z.getGuild(n.guildId));
  if (null == r) return null;
  let l = (null != (t = n.overrideMode) ? t : n.mode) === _.AR.UseGreyDot;

  function c() {
    g.default.track(b.rMx.NOTIFICATION_MIGRATION_GUILD_CHANGED, p(N({}, (0, m.hH)(n.guildId)), {
      is_selected: !l,
      is_muted: j.ZP.isMuted(n.guildId),
      notification_setting: j.ZP.getMessageNotifications(n.guildId)
    })), s(n.guildId)
  }
  return (0, i.jsx)(d.ua7, {
    text: (0, i.jsxs)("div", {
      children: [(0, i.jsx)(d.Text, {
        variant: "text-md/semibold",
        color: "header-primary",
        children: r.name
      }), (0, i.jsxs)("div", {
        className: f.tooltipRow,
        children: [(0, i.jsx)(d.kBi, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: n.messagePain ? v.intl.string(v.t["3EQSoK"]) : v.intl.string(v.t["CaR/Eh"])
        })]
      }), (0, i.jsxs)("div", {
        className: f.tooltipRow,
        children: [(0, i.jsx)(d.iFz, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: n.visitsALot ? v.intl.string(v.t["6dgvsb"]) : v.intl.string(v.t.fgedbG)
        })]
      }), (0, i.jsxs)("div", {
        className: f.tooltipRow,
        children: [(0, i.jsx)(d.Dkj, {
          size: "xxs",
          color: "currentColor"
        }), (0, i.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: n.muted ? v.intl.string(v.t.rdTrHx) : v.intl.string(v.t.sdFUj4)
        })]
      })]
    }),
    "aria-label": n.debugReason,
    tooltipClassName: f.tooltip,
    children: e => (0, i.jsxs)(d.P3F, p(N({}, e), {
      className: a()(f.guild, l ? f.selected : true),
      onClick: c,
      children: [(0, i.jsx)(d.owK, {
        size: "xs",
        color: "currentColor",
        className: f.checkmark,
        secondaryColor: "white"
      }), (0, i.jsx)(x.Z, {
        "aria-hidden": true,
        className: f.guildIcon,
        guild: r,
        size: x.Z.Sizes.MEDIUM,
        active: true,
        tabIndex: false
      })]
    }))
  })
}