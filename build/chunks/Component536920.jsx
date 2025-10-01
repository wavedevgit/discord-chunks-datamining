/** Chunk was on 20114 **/
/** chunk id: 536920, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  default: () => C
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

function C(e) {
  let {
    onClose: t,
    transitionState: a,
    clientSettingType: C,
    gameId: j
  } = e, [y, k] = r.useState("unreported"), [b, f] = r.useState(""), [N, S] = r.useState(false), [w, R] = r.useState(false), [z, Z] = r.useState(false), [I, P] = r.useState(false), A = (0, i.e7)([m.Z, u.ZP], () => {
    var e;
    let t = null != j ? j : null == (e = u.ZP.getCurrentGameForAnalytics()) ? true : e.id;
    return null == t ? null : m.Z.getDetectableGame(t)
  }), B = (0, i.e7)([x.default], () => {
    var e;
    let t = null != (e = null === x.default || true === x.default ? true : x.default.getMostRecentOverlayRenderMethod()) ? e : true;
    return null != t ? h.gl[t] : true
  }), H = r.useMemo(() => {
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
  }, []), M = async () => {
    var e, a, n;
    if ("unreported" === y && 0 === b.length) {
      Z(true), await (0, o._v)(100), Z(false), P(true);
      return
    }
    S(true), await _.default.track(p.rMx.OVERLAY_DISABLED_SURVEY, {
      reason: y,
      comment: b,
      client_setting_type: C,
      application_id: null == A ? true : A.id,
      application_name: null == A ? true : A.name,
      most_recent_overlay_render_method: B,
      hardware_display_count: null != (n = await (null === c.Z || true === c.Z || null == (a = c.Z.hardware) || null == (e = a.getDisplayCount) ? true : e.call(a))) ? n : null
    }), await (0, o._v)(1e3), S(false), R(true), await (0, o._v)(1500), t()
  };
  return (0, d.ZP)(() => {
    _.default.track(p.rMx.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  }), (0, n.jsxs)(l.Y0X, {
    transitionState: a,
    "aria-label": g.intl.string(g.t.bomhnZ),
    size: l.CgR.DYNAMIC,
    className: v.root,
    parentComponent: "OverlayDisabledSurveyModal",
    children: [(0, n.jsxs)(l.xBx, {
      children: [(0, n.jsxs)("div", {
        className: v.header,
        children: [(0, n.jsx)(l.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: g.intl.string(g.t["9JKzxc"])
        }), (0, n.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          className: v.description,
          children: g.intl.string(g.t["2yjnmZ"])
        })]
      }), (0, n.jsx)(l.olH, {
        onClick: t,
        className: v.closeButton
      })]
    }), (0, n.jsx)(l.hzk, {
      className: v.reasonContainer,
      children: (0, n.jsxs)(l.Ttm, {
        children: [(0, n.jsxs)("div", {
          children: [(0, n.jsx)(l.UkV, {
            isShaking: z,
            intensity: 1,
            className: v.radioHeader,
            children: (0, n.jsx)(l.Text, {
              variant: "text-sm/semibold",
              color: I ? "text-danger" : "text-muted",
              children: g.intl.string(g.t.yhUvdX)
            })
          }), (0, n.jsx)(s.Gu, {
            value: y,
            radioItemClassName: v.radioItem,
            className: v.radioGroup,
            radioPosition: "right",
            options: H,
            onChange: e => {
              let {
                value: t
              } = e;
              k(t), P(false), Z(false)
            }
          })]
        }), (0, n.jsxs)("div", {
          className: v.commentContainer,
          children: [(0, n.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            className: v.commentHeader,
            children: g.intl.string(g.t.LYnrhY)
          }), (0, n.jsx)(l.Kx8, {
            autosize: true,
            value: b,
            maxLength: 1e3,
            showRemainingCharacterCount: false,
            placeholder: g.intl.string(g.t["gU+bVF"]),
            onChange: f
          })]
        })]
      })
    }), (0, n.jsxs)(l.mzw, {
      className: v.buttons,
      children: [(0, n.jsx)(l.zxk, {
        variant: "secondary",
        text: g.intl.string(g.t["5WxrcX"]),
        disabled: N,
        onClick: () => {
          t()
        }
      }), (0, n.jsx)(l.UkV, {
        isShaking: z,
        intensity: 1,
        children: (0, n.jsx)(s.zx, {
          disabled: N,
          submitting: N,
          onClick: M,
          color: (() => {
            switch (true) {
              case w:
                return s.zx.Colors.GREEN;
              case z:
                return s.zx.Colors.PRIMARY;
              default:
                return s.zx.Colors.BRAND
            }
          })(),
          children: (() => {
            switch (true) {
              case w:
                return (0, n.jsx)(l.kmB, {});
              case N:
                return (0, n.jsx)(l.$jN, {
                  type: l.RAz.PULSING_ELLIPSIS
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