/** Chunk was on 20114 **/
/** chunk id: 536920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk579806 = require("./579806.js"),
  Chunk594190 = require("./594190.js"),
  Chunk77498 = require("./77498.js"),
  Chunk626135 = require("./626135.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk94092 = require("./94092.js");

function j(e) {
  let {
    onClose: t,
    transitionState: n,
    clientSettingType: j,
    gameId: C
  } = e, [y, k] = r.useState("unreported"), [b, f] = r.useState(""), [S, w] = r.useState(false), [N, R] = r.useState(false), [z, Z] = r.useState(false), [P, A] = r.useState(false), B = (0, i.e7)([m.Z, u.ZP], () => {
    var e;
    let t = null != C ? C : null == (e = u.ZP.getCurrentGameForAnalytics()) ? true : e.id;
    return null == t ? null : m.Z.getDetectableGame(t)
  }), H = (0, i.e7)([x.default], () => {
    var e;
    let t = null != (e = null === x.default || true === x.default ? true : x.default.getMostRecentOverlayRenderMethod()) ? e : true;
    return null != t ? h.gl[t] : true
  }), M = r.useMemo(() => {
    let e = {
      not_working: g.t.CHXHFR,
      not_useful: g.t.a95skZ,
      game_crashes_occurred: g.t.IFZ0SU,
      poor_performance: g.t.exRczs,
      too_many_notifications: g.t.XuBFBA,
      multiple_monitors: g.t.p8Eky8,
      in_the_way_of_game: g.t.YP7Pio,
      other: g.t["YP/Ttr"]
    };
    return Object.keys(e).map(t => ({
      name: g.intl.string(e[t]),
      value: t
    }))
  }, []), Y = async () => {
    var e, n, a;
    if ("unreported" === y && 0 === b.length) {
      Z(true), await (0, s._v)(100), Z(false), A(true);
      return
    }
    w(true), await _.default.track(v.rMx.OVERLAY_DISABLED_SURVEY, {
      reason: y,
      comment: b,
      client_setting_type: j,
      application_id: null == B ? true : B.id,
      application_name: null == B ? true : B.name,
      most_recent_overlay_render_method: H,
      hardware_display_count: null != (a = await (null === d.Z || true === d.Z || null == (n = d.Z.hardware) || null == (e = n.getDisplayCount) ? true : e.call(n))) ? a : null
    }), await (0, s._v)(1e3), w(false), R(true), await (0, s._v)(1500), t()
  };
  return (0, c.ZP)(() => {
    _.default.track(v.rMx.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  }), (0, a.jsxs)(o.Y0X, {
    transitionState: n,
    "aria-label": g.intl.string(g.t.bomhnZ),
    size: o.CgR.DYNAMIC,
    className: p.root,
    parentComponent: "OverlayDisabledSurveyModal",
    children: [(0, a.jsxs)(o.xBx, {
      children: [(0, a.jsxs)("div", {
        className: p.header,
        children: [(0, a.jsx)(o.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: g.intl.string(g.t["9JKzxc"])
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          className: p.description,
          children: g.intl.string(g.t["2yjnmZ"])
        })]
      }), (0, a.jsx)(o.olH, {
        onClick: t,
        className: p.closeButton
      })]
    }), (0, a.jsx)(o.hzk, {
      className: p.reasonContainer,
      children: (0, a.jsxs)(o.Ttm, {
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(o.UkV, {
            isShaking: z,
            intensity: 1,
            className: p.radioHeader,
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/semibold",
              color: P ? "text-danger" : "text-muted",
              children: g.intl.string(g.t.yhUvdX)
            })
          }), (0, a.jsx)(o.FXm, {
            value: y,
            options: M,
            onChange: e => {
              k(e), A(false), Z(false)
            }
          })]
        }), (0, a.jsxs)("div", {
          className: p.commentContainer,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            className: p.commentHeader,
            children: g.intl.string(g.t.LYnrhY)
          }), (0, a.jsx)(o.Kx8, {
            autosize: true,
            value: b,
            maxLength: 1e3,
            showRemainingCharacterCount: false,
            placeholder: g.intl.string(g.t["gU+bVF"]),
            onChange: f
          })]
        })]
      })
    }), (0, a.jsxs)(o.mzw, {
      className: p.buttons,
      children: [(0, a.jsx)(o.zxk, {
        variant: "secondary",
        text: g.intl.string(g.t["5WxrcX"]),
        disabled: S,
        onClick: () => {
          t()
        }
      }), (0, a.jsx)(o.UkV, {
        isShaking: z,
        intensity: 1,
        children: (0, a.jsx)(l.zx, {
          disabled: S,
          submitting: S,
          onClick: Y,
          color: (() => {
            switch (true) {
              case N:
                return l.zx.Colors.GREEN;
              case z:
                return l.zx.Colors.PRIMARY;
              default:
                return l.zx.Colors.BRAND
            }
          })(),
          children: (() => {
            switch (true) {
              case N:
                return (0, a.jsx)(o.kmB, {});
              case S:
                return (0, a.jsx)(o.$jN, {
                  type: o.RAz.PULSING_ELLIPSIS
                });
              default:
                return g.intl.string(g.t.geKm7u)
            }
          })()
        })
      })]
    })]
  })
}