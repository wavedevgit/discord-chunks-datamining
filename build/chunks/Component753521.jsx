/** Chunk was on 53512 **/
/** chunk id: 753521, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk257465 = require("./257465.jsx"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
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
  Chunk434555 = require("./434555.js");

function f(e) {
  let {
    onClose: t,
    transitionState: n,
    dismissable: m,
    guildPain: f,
    myUsage: p
  } = e, [N, C] = s.useState(h.O.Intro), {
    submitted: y,
    submitting: T,
    saveSettings: w
  } = (0, o.vo)(t), {
    guildPlans: O,
    overrideGuild: I,
    getDebug: k
  } = (0, o.F6)(f, p), M = s.useRef(null);
  s.useEffect(() => {
    d.default.track(g.rMx.OPEN_MODAL, {
      type: "notification_migration_modal"
    })
  }, []);
  let P = (0, i.jsxs)(i.Fragment, {
      children: [m || N !== h.O.Tips && N !== h.O.Customize ? null : (0, i.jsx)(c.eee, {
        className: b.dismiss,
        href: "https://dis.gd/better-muting",
        children: (0, i.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: _.intl.string(_.t.hvVgAQ)
        })
      }), m && N === h.O.Intro ? (0, i.jsx)(c.P3F, {
        className: b.dismiss,
        onClick: t,
        children: (0, i.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: _.intl.string(_.t.WAI6xs)
        })
      }) : null, m && N === h.O.Customize ? (0, i.jsx)(c.P3F, {
        className: b.dismiss,
        onClick: t,
        children: (0, i.jsx)(c.Text, {
          variant: "text-sm/semibold",
          color: "interactive-normal",
          children: _.intl.string(_.t["ETE/oK"])
        })
      }) : null]
    }),
    z = function(e) {
      let {
        tab: t,
        submitted: n,
        setTab: i,
        saveSettings: s,
        guildPlans: r,
        maybeChangeToAfterTabRef: a,
        onClose: l,
        submitting: d
      } = e;
      return t === h.O.Intro ? [{
        icon: c.ZSh,
        iconPosition: "end",
        text: _.intl.string(_.t.uw9zIy),
        onClick: () => {
          var e;
          (null == (e = a.current) ? true : e.maybeChangeToAfterTab()) && i(h.O.Customize)
        }
      }] : t === h.O.Customize ? [...n ? [] : [{
        icon: c.whL,
        variant: "secondary",
        text: _.intl.string(_.t["13/7kZ"]),
        onClick: () => i(h.O.Intro)
      }], {
        icon: c.dz2,
        iconPosition: "end",
        text: _.intl.string(_.t["1Qm829"]),
        onClick: () => {
          i(h.O.Tips), s(r)
        }
      }] : [{
        variant: "primary",
        text: _.intl.string(_.t.cpT0Cg),
        loading: d,
        onClick: l
      }]
    }({
      tab: N,
      setTab: C,
      submitted: y,
      submitting: T,
      onClose: t,
      saveSettings: w,
      guildPlans: O,
      maybeChangeToAfterTabRef: M
    });
  return (0, i.jsxs)(r.IX, {
    transitionState: n,
    onClose: t,
    size: "xl",
    children: [(0, i.jsxs)(l.f, {
      children: [(0, i.jsx)(h.Z, {
        selectedTab: N,
        onClick: C,
        submitted: y
      }), (0, i.jsxs)(c.Kqy, {
        style: {
          margin: "auto",
          width: "fit-content"
        },
        children: [N === h.O.Intro ? (0, i.jsx)(x.Z, {
          ref: M
        }) : N === h.O.Customize ? (0, i.jsx)(v, {
          guildPlans: O,
          overrideGuild: I,
          getDebug: k
        }) : (0, i.jsx)(u.Z, {
          count: Object.values(O).filter(e => {
            var t;
            return (null != (t = e.overrideMode) ? t : e.mode) === j.AR.UseGreyDot
          }).length
        }), N === h.O.Customize ? (0, i.jsx)(c.Text, {
          className: b.warning,
          variant: "text-xs/medium",
          color: "text-muted",
          children: _.intl.string(_.t.nlpqxM)
        }) : null]
      })]
    }), (0, i.jsx)(a.G, {
      leading: P,
      actions: z
    })]
  })
}

function v(e) {
  let {
    guildPlans: t,
    overrideGuild: n
  } = e;
  return (0, i.jsxs)(c.Ttm, {
    className: b.content,
    children: [(0, i.jsxs)("div", {
      className: b.header,
      children: [(0, i.jsx)(c.X6q, {
        variant: "heading-xl/bold",
        color: "header-primary",
        children: _.intl.string(_.t["zBC2+f"])
      }), (0, i.jsx)(c.Text, {
        className: b.__invalid_subtitle,
        variant: "text-md/medium",
        color: "header-secondary",
        children: _.intl.string(_.t["zE9e//"])
      })]
    }), (0, i.jsx)(m.Z, {
      guildPlans: t,
      overrideGuild: n
    })]
  })
}