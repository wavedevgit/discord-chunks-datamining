/** Chunk was on 53512 **/
/** chunk id: 753521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk920178 = require("./920178.js");

function g(e) {
  let {
    onClose: t,
    transitionState: n,
    dismissable: c,
    guildPain: g,
    myUsage: b
  } = e, [v, f] = s.useState(d.O.Intro), {
    submitted: p,
    submitting: N,
    saveSettings: C
  } = (0, l.vo)(t), {
    guildPlans: y,
    overrideGuild: w,
    getDebug: T
  } = (0, l.F6)(g, b), O = s.useRef(null);
  return s.useEffect(() => {
    r.default.track(h.rMx.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []), (0, i.jsxs)(a.Y0X, {
    className: j.__invalid_modal,
    transitionState: n,
    "aria-label": u.intl.string(u.t.HcoRu7),
    size: a.CgR.DYNAMIC,
    parentComponent: "NotificationMigrationModal",
    children: [(0, i.jsx)(d.Z, {
      selectedTab: v,
      onClick: f,
      submitted: p
    }), v === d.O.Intro ? (0, i.jsx)(o.Z, {
      ref: O
    }) : v === d.O.Customize ? (0, i.jsx)(_, {
      guildPlans: y,
      overrideGuild: w,
      getDebug: T
    }) : (0, i.jsx)(m.Z, {
      count: Object.values(y).filter(e => {
        var t;
        return (null != (t = e.overrideMode) ? t : e.mode) === x.AR.UseGreyDot
      }).length
    }), (0, i.jsxs)(a.mzw, {
      className: j.buttons,
      children: [(0, i.jsxs)("div", {
        className: j.__invalid_left,
        children: [c || v !== d.O.Tips && v !== d.O.Customize ? null : (0, i.jsx)(a.eee, {
          className: j.dismiss,
          href: "https://dis.gd/better-muting",
          children: (0, i.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: u.intl.string(u.t.hvVgAQ)
          })
        }), c && v === d.O.Intro ? (0, i.jsx)(a.P3F, {
          className: j.dismiss,
          onClick: t,
          children: (0, i.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: u.intl.string(u.t.WAI6xs)
          })
        }) : null, c && v === d.O.Customize ? (0, i.jsx)(a.P3F, {
          className: j.dismiss,
          onClick: t,
          children: (0, i.jsx)(a.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: u.intl.string(u.t["ETE/oK"])
          })
        }) : null]
      }), (0, i.jsxs)("div", {
        className: j.right,
        children: [v === d.O.Customize ? (0, i.jsx)(a.Text, {
          className: j.warning,
          variant: "text-xs/medium",
          color: "text-muted",
          children: u.intl.string(u.t.nlpqxM)
        }) : null, v !== d.O.Customize || p ? null : (0, i.jsx)(a.zxk, {
          icon: a.whL,
          onClick: () => f(d.O.Intro),
          variant: "secondary",
          text: u.intl.string(u.t["13/7kZ"])
        }), v === d.O.Intro ? (0, i.jsx)(a.zxk, {
          icon: a.ZSh,
          iconPosition: "end",
          onClick: () => {
            var e;
            (null == (e = O.current) ? true : e.maybeChangeToAfterTab()) && f(d.O.Customize)
          },
          text: u.intl.string(u.t.uw9zIy)
        }) : v === d.O.Customize ? (0, i.jsx)(a.zxk, {
          icon: a.dz2,
          iconPosition: "end",
          onClick: () => {
            f(d.O.Tips), C(y)
          },
          text: u.intl.string(u.t["1Qm829"])
        }) : (0, i.jsx)(a.zxk, {
          variant: "primary",
          text: u.intl.string(u.t.cpT0Cg),
          loading: N,
          onClick: t
        })]
      })]
    })]
  })
}

function _(e) {
  let {
    guildPlans: t,
    overrideGuild: n
  } = e;
  return (0, i.jsxs)(a.Ttm, {
    className: j.content,
    children: [(0, i.jsxs)("div", {
      className: j.header,
      children: [(0, i.jsx)(a.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: u.intl.string(u.t["zBC2+f"])
      }), (0, i.jsx)(a.Text, {
        className: j.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: u.intl.string(u.t["zE9e//"])
      })]
    }), (0, i.jsx)(c.Z, {
      guildPlans: t,
      overrideGuild: n
    })]
  })
}