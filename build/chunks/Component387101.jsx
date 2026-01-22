/** Chunk was on 82318 **/
/** chunk id: 387101, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk499979 = require("./499979.js"),
  Chunk397927 = require("./397927.js"),
  Chunk964486 = require("./964486.js"),
  Chunk77729 = require("./77729.js"),
  Chunk15285 = require("./15285.js"),
  Chunk760751 = require("./760751.js"),
  Chunk954571 = require("./954571.js"),
  Chunk41984 = require("./41984.js"),
  Chunk833551 = require("./833551.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk521797 = require("./521797.js");

function x(t) {
  let {
    onClose: e,
    transitionState: a,
    clientSettingType: x,
    gameId: b
  } = t, [f, k] = l.useState("unreported"), [w, A] = l.useState(""), [C, S] = l.useState(false), [j, M] = l.useState(false), [N, P] = l.useState(false), [R, z] = l.useState(false), D = (0, r.bG)([m.A, c.Ay], () => {
    var t;
    let e = null != b ? b : null == (t = c.Ay.getCurrentGameForAnalytics()) ? true : t.id;
    return null == e ? null : m.A.getDetectableGame(e)
  }), E = (0, r.bG)([v.default], () => {
    var t;
    let e = null != (t = null === v.default || true === v.default ? true : v.default.getMostRecentOverlayRenderMethod()) ? t : true;
    return null != e ? h.Ue[e] : true
  }), F = l.useMemo(() => {
    let t = {
      not_working: g.t.CHXHFX,
      not_useful: g.t.a95skc,
      game_crashes_occurred: g.t.IFZ0Sa,
      poor_performance: g.t.exRczv,
      too_many_notifications: g.t.XuBFBM,
      multiple_monitors: g.t.p8Ekyz,
      in_the_way_of_game: g.t.YP7Pin,
      other: g.t["YP/Ttl"]
    };
    return Object.keys(t).map(e => ({
      name: g.intl.string(t[e]),
      value: e
    }))
  }, []), L = l.useCallback(async () => {
    var t, a, n;
    if ("unreported" === f && 0 === w.length) {
      P(true), await (0, s.yy)(100), P(false), z(true);
      return
    }
    S(true), await _.default.track(y.HAw.OVERLAY_DISABLED_SURVEY, {
      reason: f,
      comment: w,
      client_setting_type: x,
      application_id: null == D ? true : D.id,
      application_name: null == D ? true : D.name,
      most_recent_overlay_render_method: E,
      hardware_display_count: null != (t = await (null === u.A || true === u.A || null == (n = u.A.hardware) || null == (a = n.getDisplayCount) ? true : a.call(n))) ? t : null
    }), await (0, s.yy)(1e3), S(false), M(true), await (0, s.yy)(1500), e()
  }, [f, w, x, null == D ? true : D.id, null == D ? true : D.name, E, e]);
  (0, d.Ay)(() => {
    _.default.track(y.HAw.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  });
  let O = l.useMemo(() => [{
    variant: "secondary",
    text: g.intl.string(g.t["5Wxrcd"]),
    onClick: e,
    disabled: C
  }, {
    variant: N ? "secondary" : "primary",
    text: j ? g.intl.string(g.t.bxiZU6) : g.intl.string(g.t.geKm7t),
    onClick: L,
    disabled: C || j,
    loading: C,
    autoFocus: false
  }], [e, C, j, L, N]);
  return (0, n.jsxs)(i.Modal, {
    onClose: e,
    transitionState: a,
    title: g.intl.string(g.t["9JKzxe"]),
    subtitle: g.intl.string(g.t["2yjnmb"]),
    actions: O,
    children: [(0, n.jsxs)("div", {
      children: [(0, n.jsx)(o.bfh, {
        isShaking: N,
        intensity: 1,
        className: p.lm,
        children: (0, n.jsx)(o.Text, {
          variant: "text-sm/semibold",
          color: R ? "text-feedback-critical" : "text-muted",
          children: g.intl.string(g.t.yhUvdd)
        })
      }), (0, n.jsx)(o.z6M, {
        value: f,
        options: F,
        onChange: t => {
          k(t), z(false), P(false)
        }
      })]
    }), (0, n.jsxs)("div", {
      className: p.xi,
      children: [(0, n.jsx)(o.Text, {
        variant: "text-sm/semibold",
        color: "text-muted",
        className: p.NP,
        children: g.intl.string(g.t.LYnrhc)
      }), (0, n.jsx)(o.fs1, {
        autosize: true,
        value: w,
        maxLength: 1e3,
        showRemainingCharacterCount: false,
        placeholder: g.intl.string(g.t["gU+bVJ"]),
        onChange: A
      })]
    })]
  })
}