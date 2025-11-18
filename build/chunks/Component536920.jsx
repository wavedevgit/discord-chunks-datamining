/** Chunk was on 20114 **/
/** chunk id: 536920, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk379649 = require("./379649.js"),
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

function y(t) {
  let {
    onClose: e,
    transitionState: n,
    clientSettingType: y,
    gameId: C
  } = t, [f, k] = i.useState("unreported"), [b, w] = i.useState(""), [S, j] = i.useState(false), [Z, M] = i.useState(false), [H, P] = i.useState(false), [F, R] = i.useState(false), D = (0, r.e7)([m.Z, c.ZP], () => {
    var t;
    let e = null != C ? C : null == (t = c.ZP.getCurrentGameForAnalytics()) ? true : t.id;
    return null == e ? null : m.Z.getDetectableGame(e)
  }), E = (0, r.e7)([g.default], () => {
    var t;
    let e = null != (t = null === g.default || true === g.default ? true : g.default.getMostRecentOverlayRenderMethod()) ? t : true;
    return null != e ? v.gl[e] : true
  }), L = i.useMemo(() => {
    let t = {
      not_working: p.t.CHXHFX,
      not_useful: p.t.a95skc,
      game_crashes_occurred: p.t.IFZ0Sa,
      poor_performance: p.t.exRczv,
      too_many_notifications: p.t.XuBFBM,
      multiple_monitors: p.t.p8Ekyz,
      in_the_way_of_game: p.t.YP7Pin,
      other: p.t["YP/Ttl"]
    };
    return Object.keys(t).map(e => ({
      name: p.intl.string(t[e]),
      value: e
    }))
  }, []), O = i.useCallback(async () => {
    var t, n, a;
    if ("unreported" === f && 0 === b.length) {
      P(true), await (0, o._v)(100), P(false), R(true);
      return
    }
    j(true), await _.default.track(h.rMx.OVERLAY_DISABLED_SURVEY, {
      reason: f,
      comment: b,
      client_setting_type: y,
      application_id: null == D ? true : D.id,
      application_name: null == D ? true : D.name,
      most_recent_overlay_render_method: E,
      hardware_display_count: null != (a = await (null === u.Z || true === u.Z || null == (n = u.Z.hardware) || null == (t = n.getDisplayCount) ? true : t.call(n))) ? a : null
    }), await (0, o._v)(1e3), j(false), M(true), await (0, o._v)(1500), e()
  }, [f, b, y, null == D ? true : D.id, null == D ? true : D.name, E, e]);
  (0, d.ZP)(() => {
    _.default.track(h.rMx.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  });
  let U = i.useMemo(() => [{
    variant: "secondary",
    text: p.intl.string(p.t["5Wxrcd"]),
    onClick: e,
    disabled: S
  }, {
    variant: H ? "secondary" : "primary",
    text: Z ? p.intl.string(p.t.bxiZU6) : p.intl.string(p.t.geKm7t),
    onClick: O,
    disabled: S || Z,
    loading: S,
    autoFocus: false
  }], [e, S, Z, O, H]);
  return (0, a.jsxs)(l.Modal, {
    onClose: e,
    transitionState: n,
    title: p.intl.string(p.t["9JKzxe"]),
    subtitle: p.intl.string(p.t["2yjnmb"]),
    actions: U,
    children: [(0, a.jsxs)("div", {
      children: [(0, a.jsx)(s.UkV, {
        isShaking: H,
        intensity: 1,
        className: x.radioHeader,
        children: (0, a.jsx)(s.Text, {
          variant: "text-sm/semibold",
          color: F ? "text-danger" : "text-muted",
          children: p.intl.string(p.t.yhUvdd)
        })
      }), (0, a.jsx)(s.FXm, {
        value: f,
        options: L,
        onChange: t => {
          k(t), R(false), P(false)
        }
      })]
    }), (0, a.jsxs)("div", {
      className: x.commentContainer,
      children: [(0, a.jsx)(s.Text, {
        variant: "text-sm/semibold",
        color: "text-muted",
        className: x.commentHeader,
        children: p.intl.string(p.t.LYnrhc)
      }), (0, a.jsx)(s.Kx8, {
        autosize: true,
        value: b,
        maxLength: 1e3,
        showRemainingCharacterCount: false,
        placeholder: p.intl.string(p.t["gU+bVJ"]),
        onChange: w
      })]
    })]
  })
}