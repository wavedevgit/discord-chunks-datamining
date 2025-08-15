/** Chunk was on 53512 **/
/** chunk id: 753521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
    myUsage: f
  } = e, [v, _] = r.useState(d.O.Intro), {
    submitted: p,
    submitting: N,
    saveSettings: y
  } = (0, l.vo)(t), {
    guildPlans: O,
    overrideGuild: C,
    getDebug: w
  } = (0, l.F6)(g, f), T = r.useRef(null);
  return r.useEffect(() => {
    a.default.track(x.rMx.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []), (0, i.jsxs)(s.Y0X, {
    className: j.__invalid_modal,
    transitionState: n,
    "aria-label": h.intl.string(h.t.HcoRu7),
    size: s.CgR.DYNAMIC,
    parentComponent: "NotificationMigrationModal",
    children: [(0, i.jsx)(d.Z, {
      selectedTab: v,
      onClick: _,
      submitted: p
    }), v === d.O.Intro ? (0, i.jsx)(o.Z, {
      ref: T
    }) : v === d.O.Customize ? (0, i.jsx)(b, {
      guildPlans: O,
      overrideGuild: C,
      getDebug: w
    }) : (0, i.jsx)(m.Z, {
      count: Object.values(O).filter(e => {
        var t;
        return (null != (t = e.overrideMode) ? t : e.mode) === u.AR.UseGreyDot
      }).length
    }), (0, i.jsxs)(s.mzw, {
      className: j.buttons,
      children: [(0, i.jsxs)("div", {
        className: j.__invalid_left,
        children: [c || v !== d.O.Tips && v !== d.O.Customize ? null : (0, i.jsx)(s.eee, {
          className: j.dismiss,
          href: "https://dis.gd/better-muting",
          children: (0, i.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: h.intl.string(h.t.hvVgAQ)
          })
        }), c && v === d.O.Intro ? (0, i.jsx)(s.P3F, {
          className: j.dismiss,
          onClick: t,
          children: (0, i.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: h.intl.string(h.t.WAI6xs)
          })
        }) : null, c && v === d.O.Customize ? (0, i.jsx)(s.P3F, {
          className: j.dismiss,
          onClick: t,
          children: (0, i.jsx)(s.Text, {
            variant: "text-sm/semibold",
            color: "interactive-normal",
            children: h.intl.string(h.t["ETE/oK"])
          })
        }) : null]
      }), (0, i.jsxs)("div", {
        className: j.right,
        children: [v === d.O.Customize ? (0, i.jsx)(s.Text, {
          className: j.warning,
          variant: "text-xs/medium",
          color: "text-muted",
          children: h.intl.string(h.t.nlpqxM)
        }) : null, v !== d.O.Customize || p ? null : (0, i.jsx)(s.zxk, {
          icon: s.whL,
          onClick: () => _(d.O.Intro),
          variant: "secondary",
          text: h.intl.string(h.t["13/7kZ"])
        }), v === d.O.Intro ? (0, i.jsx)(s.zxk, {
          icon: s.ZSh,
          iconPosition: "end",
          onClick: () => {
            var e;
            (null == (e = T.current) ? true : e.maybeChangeToAfterTab()) && _(d.O.Customize)
          },
          text: h.intl.string(h.t.uw9zIy)
        }) : v === d.O.Customize ? (0, i.jsx)(s.zxk, {
          icon: s.dz2,
          iconPosition: "end",
          onClick: () => {
            _(d.O.Tips), y(O)
          },
          text: h.intl.string(h.t["1Qm829"])
        }) : (0, i.jsx)(s.zxk, {
          variant: "primary",
          text: h.intl.string(h.t.cpT0Cg),
          loading: N,
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
  return (0, i.jsxs)(s.Ttm, {
    className: j.content,
    children: [(0, i.jsxs)("div", {
      className: j.header,
      children: [(0, i.jsx)(s.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: h.intl.string(h.t["zBC2+f"])
      }), (0, i.jsx)(s.Text, {
        className: j.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: h.intl.string(h.t["zE9e//"])
      })]
    }), (0, i.jsx)(c.Z, {
      guildPlans: t,
      overrideGuild: n
    })]
  })
}