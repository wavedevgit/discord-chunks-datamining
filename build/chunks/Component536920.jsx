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
  Chunk361902 = require("./361902.js");

function j(e) {
  let {
    onClose: t,
    transitionState: n,
    clientSettingType: j,
    gameId: C
  } = e, [y, k] = r.useState("unreported"), [b, f] = r.useState(""), [S, w] = r.useState(false), [N, R] = r.useState(false), [Z, z] = r.useState(false), [B, H] = r.useState(false), P = (0, i.e7)([m.Z, u.ZP], () => {
    var e;
    let t = null != C ? C : null == (e = u.ZP.getCurrentGameForAnalytics()) ? true : e.id;
    return null == t ? null : m.Z.getDetectableGame(t)
  }), A = (0, i.e7)([x.default], () => {
    var e;
    let t = null != (e = null === x.default || true === x.default ? true : x.default.getMostRecentOverlayRenderMethod()) ? e : true;
    return null != t ? h.gl[t] : true
  }), M = r.useMemo(() => {
    let e = {
      not_working: v.t.CHXHFR,
      not_useful: v.t.a95skZ,
      game_crashes_occurred: v.t.IFZ0SU,
      poor_performance: v.t.exRczs,
      too_many_notifications: v.t.XuBFBA,
      multiple_monitors: v.t.p8Eky8,
      in_the_way_of_game: v.t.YP7Pio,
      other: v.t["YP/Ttr"]
    };
    return Object.keys(e).map(t => ({
      name: v.intl.string(e[t]),
      value: t
    }))
  }, []), Y = async () => {
    var e, n, a;
    if ("unreported" === y && 0 === b.length) {
      z(true), await (0, s._v)(100), z(false), H(true);
      return
    }
    w(true), await _.default.track(g.rMx.OVERLAY_DISABLED_SURVEY, {
      reason: y,
      comment: b,
      client_setting_type: j,
      application_id: null == P ? true : P.id,
      application_name: null == P ? true : P.name,
      most_recent_overlay_render_method: A,
      hardware_display_count: null != (a = await (null === d.Z || true === d.Z || null == (n = d.Z.hardware) || null == (e = n.getDisplayCount) ? true : e.call(n))) ? a : null
    }), await (0, s._v)(1e3), w(false), R(true), await (0, s._v)(1500), t()
  };
  return (0, c.ZP)(() => {
    _.default.track(g.rMx.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  }), (0, a.jsxs)(o.Y0X, {
    transitionState: n,
    "aria-label": v.intl.string(v.t.bomhnZ),
    size: o.CgR.DYNAMIC,
    className: p.root,
    parentComponent: "OverlayDisabledSurveyModal",
    children: [(0, a.jsxs)(o.xBx, {
      children: [(0, a.jsxs)("div", {
        className: p.header,
        children: [(0, a.jsx)(o.Heading, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: v.intl.string(v.t["9JKzxc"])
        }), (0, a.jsx)(o.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          className: p.description,
          children: v.intl.string(v.t["2yjnmZ"])
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
            isShaking: Z,
            intensity: 1,
            className: p.radioHeader,
            children: (0, a.jsx)(o.Text, {
              variant: "text-sm/semibold",
              color: B ? "text-danger" : "text-muted",
              children: v.intl.string(v.t.yhUvdX)
            })
          }), (0, a.jsx)(o.FXm, {
            value: y,
            options: M,
            onChange: e => {
              k(e), H(false), z(false)
            }
          })]
        }), (0, a.jsxs)("div", {
          className: p.commentContainer,
          children: [(0, a.jsx)(o.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            className: p.commentHeader,
            children: v.intl.string(v.t.LYnrhY)
          }), (0, a.jsx)(o.Kx8, {
            autosize: true,
            value: b,
            maxLength: 1e3,
            showRemainingCharacterCount: false,
            placeholder: v.intl.string(v.t["gU+bVF"]),
            onChange: f
          })]
        })]
      })
    }), (0, a.jsxs)(o.mzw, {
      className: p.buttons,
      children: [(0, a.jsx)(o.Button, {
        variant: "secondary",
        text: v.intl.string(v.t["5WxrcX"]),
        disabled: S,
        onClick: () => {
          t()
        }
      }), (0, a.jsx)(o.UkV, {
        isShaking: Z,
        intensity: 1,
        children: (0, a.jsx)(l.zx, {
          disabled: S,
          submitting: S,
          onClick: Y,
          color: (() => {
            switch (true) {
              case N:
                return l.zx.Colors.GREEN;
              case Z:
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
                return v.intl.string(v.t.geKm7u)
            }
          })()
        })
      })]
    })]
  })
}