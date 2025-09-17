/** Chunk was on 20114 **/
/** chunk id: 536920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493773 = require("./493773.js"),
  Chunk594190 = require("./594190.js"),
  Chunk77498 = require("./77498.js"),
  Chunk626135 = require("./626135.js"),
  Chunk837268 = require("./837268.js"),
  Chunk371651 = require("./371651.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk361902 = require("./361902.js");

function v(e) {
  let {
    onClose: t,
    transitionState: n,
    clientSettingType: v,
    gameId: j
  } = e, [C, y] = r.useState("unreported"), [k, b] = r.useState(""), [f, N] = r.useState(false), [S, R] = r.useState(false), [w, z] = r.useState(false), [I, P] = r.useState(false), A = (0, i.e7)([u.Z, c.ZP], () => {
    var e;
    let t = null != j ? j : null == (e = c.ZP.getCurrentGameForAnalytics()) ? true : e.id;
    return null == t ? null : u.Z.getDetectableGame(t)
  }), B = (0, i.e7)([x.default], () => {
    var e;
    let t = null != (e = null === x.default || true === x.default ? true : x.default.getMostRecentOverlayRenderMethod()) ? e : true;
    return null != t ? _.gl[t] : true
  }), H = r.useMemo(() => {
    let e = {
      not_working: p.t.CHXHFR,
      not_useful: p.t.a95skZ,
      game_crashes_occurred: p.t.IFZ0SU,
      poor_performance: p.t.exRczs,
      too_many_notifications: p.t.XuBFBA,
      multiple_monitors: p.t.p8Eky8,
      in_the_way_of_game: p.t.YP7Pio,
      other: p.t["YP/Ttr"]
    };
    return Object.keys(e).map(t => ({
      name: p.intl.string(e[t]),
      value: t
    }))
  }, []), M = async () => {
    if ("unreported" === C && 0 === k.length) {
      z(true), await (0, s._v)(100), z(false), P(true);
      return
    }
    N(true), await m.default.track(h.rMx.OVERLAY_DISABLED_SURVEY, {
      reason: C,
      comment: k,
      client_setting_type: v,
      application_id: null == A ? true : A.id,
      application_name: null == A ? true : A.name,
      most_recent_overlay_render_method: B
    }), await (0, s._v)(1e3), N(false), R(true), await (0, s._v)(1500), t()
  };
  return (0, d.ZP)(() => {
    m.default.track(h.rMx.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  }), (0, a.jsxs)(l.Y0X, {
    transitionState: n,
    "aria-label": p.intl.string(p.t.bomhnZ),
    size: l.CgR.DYNAMIC,
    className: g.root,
    parentComponent: "OverlayDisabledSurveyModal",
    children: [(0, a.jsxs)(l.xBx, {
      children: [(0, a.jsxs)("div", {
        className: g.header,
        children: [(0, a.jsx)(l.X6q, {
          variant: "heading-lg/semibold",
          color: "header-primary",
          children: p.intl.string(p.t["9JKzxc"])
        }), (0, a.jsx)(l.Text, {
          variant: "text-sm/medium",
          color: "text-secondary",
          className: g.description,
          children: p.intl.string(p.t["2yjnmZ"])
        })]
      }), (0, a.jsx)(l.olH, {
        onClick: t,
        className: g.closeButton
      })]
    }), (0, a.jsx)(l.hzk, {
      className: g.reasonContainer,
      children: (0, a.jsxs)(l.Ttm, {
        children: [(0, a.jsxs)("div", {
          children: [(0, a.jsx)(l.UkV, {
            isShaking: w,
            intensity: 1,
            className: g.radioHeader,
            children: (0, a.jsx)(l.Text, {
              variant: "text-sm/semibold",
              color: I ? "text-danger" : "text-muted",
              children: p.intl.string(p.t.yhUvdX)
            })
          }), (0, a.jsx)(o.Gu, {
            value: C,
            radioItemClassName: g.radioItem,
            className: g.radioGroup,
            radioPosition: "right",
            options: H,
            onChange: e => {
              let {
                value: t
              } = e;
              y(t), P(false), z(false)
            }
          })]
        }), (0, a.jsxs)("div", {
          className: g.commentContainer,
          children: [(0, a.jsx)(l.Text, {
            variant: "text-sm/semibold",
            color: "text-muted",
            className: g.commentHeader,
            children: p.intl.string(p.t.LYnrhY)
          }), (0, a.jsx)(l.Kx8, {
            autosize: true,
            value: k,
            maxLength: 1e3,
            showRemainingCharacterCount: false,
            placeholder: p.intl.string(p.t["gU+bVF"]),
            onChange: b
          })]
        })]
      })
    }), (0, a.jsxs)(l.mzw, {
      className: g.buttons,
      children: [(0, a.jsx)(l.zxk, {
        variant: "secondary",
        text: p.intl.string(p.t["5WxrcX"]),
        disabled: f,
        onClick: () => {
          t()
        }
      }), (0, a.jsx)(l.UkV, {
        isShaking: w,
        intensity: 1,
        children: (0, a.jsx)(o.zx, {
          disabled: f,
          submitting: f,
          onClick: M,
          color: (() => {
            switch (true) {
              case S:
                return o.zx.Colors.GREEN;
              case w:
                return o.zx.Colors.PRIMARY;
              default:
                return o.zx.Colors.BRAND
            }
          })(),
          children: (() => {
            switch (true) {
              case S:
                return (0, a.jsx)(l.kmB, {});
              case f:
                return (0, a.jsx)(l.$jN, {
                  type: l.RAz.PULSING_ELLIPSIS
                });
              default:
                return p.intl.string(p.t.geKm7u)
            }
          })()
        })
      })]
    })]
  })
}