/** Chunk was on 53512 **/
/** chunk id: 753521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => _
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk115345 = require("./115345.js"),
  Chunk57927 = require("./57927.jsx"),
  Chunk273236 = require("./273236.jsx"),
  Chunk931839 = require("./931839.jsx"),
  Chunk905987 = require("./905987.jsx"),
  Chunk789662 = require("./789662.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk699343 = require("./699343.js");

function _(e) {
  let {
    onClose: t,
    transitionState: n,
    dismissable: o,
    guildPain: _,
    myUsage: v
  } = e, [f, N] = s.useState(m.O.Intro), {
    submitted: p,
    submitting: C,
    saveSettings: y
  } = (0, c.vo)(t), {
    guildPlans: T,
    overrideGuild: w,
    getDebug: O
  } = (0, c.F6)(_, v), I = s.useRef(null);
  return s.useEffect(() => {
    l.default.track(u.rMx.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []), (0, i.jsxs)(a.Y0X, {
    className: g.__invalid_modal,
    transitionState: n,
    "aria-label": j.intl.string(j.t.HcoRu7),
    size: a.CgR.DYNAMIC,
    parentComponent: "NotificationMigrationModal",
    children: [(0, i.jsx)(m.Z, {
      selectedTab: f,
      onClick: N,
      submitted: p
    }), f === m.O.Intro ? (0, i.jsx)(d.Z, {
      ref: I
    }) : f === m.O.Customize ? (0, i.jsx)(b, {
      guildPlans: T,
      overrideGuild: w,
      getDebug: O
    }) : (0, i.jsx)(x.Z, {
      count: Object.values(T).filter(e => {
        var t;
        return (null != (t = e.overrideMode) ? t : e.mode) === h.AR.UseGreyDot
      }).length
    }), (0, i.jsxs)(a.mzw, {
      className: g.buttons,
      children: [(0, i.jsxs)("div", {
        className: g.__invalid_left,
        children: [o || f !== m.O.Tips && f !== m.O.Customize ? null : (0, i.jsx)(a.eee, {
          className: g.dismiss,
          href: "https://dis.gd/better-muting",
          children: (0, i.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: j.intl.string(j.t.hvVgAQ)
          })
        }), o && f === m.O.Intro ? (0, i.jsx)(a.P3F, {
          className: g.dismiss,
          onClick: t,
          children: (0, i.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: j.intl.string(j.t.WAI6xs)
          })
        }) : null, o && f === m.O.Customize ? (0, i.jsx)(a.P3F, {
          className: g.dismiss,
          onClick: t,
          children: (0, i.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: j.intl.string(j.t["ETE/oK"])
          })
        }) : null]
      }), (0, i.jsxs)("div", {
        className: g.right,
        children: [f === m.O.Customize ? (0, i.jsx)(a.Text, {
          className: g.warning,
          variant: "text-xs/medium",
          color: "text-muted",
          children: j.intl.string(j.t.nlpqxM)
        }) : null, f !== m.O.Customize || p ? null : (0, i.jsxs)(r.zx, {
          onClick: () => N(m.O.Intro),
          color: r.zx.Colors.TRANSPARENT,
          children: [(0, i.jsx)(a.whL, {
            size: "xs",
            color: "currentColor"
          }), " ", j.intl.string(j.t["13/7kZ"])]
        }), f === m.O.Intro ? (0, i.jsxs)(r.zx, {
          onClick: () => {
            var e;
            (null == (e = I.current) ? true : e.maybeChangeToAfterTab()) && N(m.O.Customize)
          },
          children: [j.intl.string(j.t.uw9zIy), " ", (0, i.jsx)(a.ZSh, {
            size: "xs",
            color: "currentColor"
          })]
        }) : f === m.O.Customize ? (0, i.jsxs)(r.zx, {
          onClick: () => {
            N(m.O.Tips), y(T)
          },
          children: [j.intl.string(j.t["1Qm829"]), " ", (0, i.jsx)(a.dz2, {
            size: "xs",
            color: "currentColor"
          })]
        }) : (0, i.jsx)(a.zxk, {
          variant: "primary",
          text: j.intl.string(j.t.cpT0Cg),
          loading: C,
          onClick: t
        })]
      })]
    })]
  })
}

function b(e) {
  let {
    guildPlans: t,
    overrideGuild: n
  } = e;
  return (0, i.jsxs)(a.Ttm, {
    className: g.content,
    children: [(0, i.jsxs)("div", {
      className: g.header,
      children: [(0, i.jsx)(a.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: j.intl.string(j.t["zBC2+f"])
      }), (0, i.jsx)(a.Text, {
        className: g.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: j.intl.string(j.t["zE9e//"])
      })]
    }), (0, i.jsx)(o.Z, {
      guildPlans: t,
      overrideGuild: n
    })]
  })
}