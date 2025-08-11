/** Chunk was on 20114 **/
/** chunk id: 536920, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => v
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk933150 = require("./933150.js");

function v(e) {
  let {
    onClose: t,
    transitionState: n,
    clientSettingType: v,
    gameId: j
  } = e, [C, k] = r.useState("unreported"), [b, y] = r.useState(""), [N, S] = r.useState(false), [f, R] = r.useState(false), [z, w] = r.useState(false), [I, M] = r.useState(false), A = (0, i.e7)([u.Z, c.ZP], () => {
    var e;
    let t = null != j ? j : null == (e = c.ZP.getCurrentGameForAnalytics()) ? true : e.id;
    return null == t ? null : u.Z.getDetectableGame(t)
  }), B = (0, i.e7)([x.default], () => {
    var e;
    let t = null != (e = null === x.default || true === x.default ? true : x.default.getMostRecentOverlayRenderMethod()) ? e : true;
    return null != t ? _.gl[t] : true
  }), H = r.useMemo(() => {
    let e = {
      not_working: g.t.CHXHFR,
      not_useful: g.t.a95skZ,
      dont_like_changes: g.t.vgqMGx,
      game_crashes_occurred: g.t.IFZ0SU,
      poor_performance: g.t.exRczs,
      bad_experience: g.t.qOm5R0,
      too_many_notifications: g.t.XuBFBA,
      other: g.t["YP/Ttr"]
    };
    return Object.keys(e).map(t => ({
      name: g.intl.string(e[t]),
      value: t
    }))
  }, []), P = async () => {
    if ("unreported" === C && 0 === b.length) {
      w(true), await (0, s._v)(100), w(false), M(true);
      return
    }
    S(true), await m.default.track(h.rMx.OVERLAY_DISABLED_SURVEY, {
      reason: C,
      comment: b,
      client_setting_type: v,
      application_id: null == A ? true : A.id,
      application_name: null == A ? true : A.name,
      most_recent_overlay_render_method: B
    }), await (0, s._v)(1e3), S(false), R(true), await (0, s._v)(1500), t()
  };
  return (0, d.ZP)(() => {
    m.default.track(h.rMx.OPEN_MODAL, {
      type: "overlay_disabled_questionnaire_modal"
    })
  }), <l.Y0X transitionState={n} aria-label={g.intl.string(g.t.bomhnZ)} size={l.CgR.DYNAMIC} className={p.root} parentComponent={"OverlayDisabledSurveyModal"}>{<l.xBx>{<div className={p.header}>{<l.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{g.intl.string(g.t["9JKzxc"])}</l.X6q>}{<l.Text variant={"text-sm/medium"} color={"text-secondary"} className={p.description}>{g.intl.string(g.t["2yjnmZ"])}</l.Text>}</div>}{<l.olH onClick={t} className={p.closeButton} />}</l.xBx>}{<l.hzk className={p.reasonContainer}><l.Ttm>{<div>{<l.UkV isShaking={z} intensity={1} className={p.radioHeader}><l.Text variant={"text-sm/semibold"} color={I ? "text-danger" : "text-muted"}>{g.intl.string(g.t.yhUvdX)}</l.Text></l.UkV>}{<l.FXm value={C} radioItemClassName={p.radioItem} className={p.radioGroup} radioPosition={"right"} options={H} onChange={e => {
              let {
                value: t
              } = e;
              k(t), M(false), w(false)
            }} />}</div>}{<div className={p.commentContainer}>{<l.Text variant={"text-sm/semibold"} color={"text-muted"} className={p.commentHeader}>{g.intl.string(g.t.LYnrhY)}</l.Text>}{<o.iS autosize={true} value={b} maxLength={1e3} showRemainingCharacterCount={false} placeholder={g.intl.string(g.t["gU+bVF"])} onChange={y} />}</div>}</l.Ttm></l.hzk>}{<l.mzw className={p.buttons}>{<l.zxk variant={"secondary"} text={g.intl.string(g.t["5WxrcX"])} disabled={N} onClick={() => {
          t()
        }} />}{<l.UkV isShaking={z} intensity={1}><o.zx disabled={N} submitting={N} onClick={P} color={(() => {
            switch (true) {
              case f:
                return o.zx.Colors.GREEN;
              case z:
                return o.zx.Colors.PRIMARY;
              default:
                return o.zx.Colors.BRAND
            }
          })()}>{(() => {
            switch (true) {
              case f:
                return (0, a.jsx)(l.kmB, {});
              case N:
                return (0, a.jsx)(l.$jN, {
                  type: l.RAz.PULSING_ELLIPSIS
                });
              default:
                return g.intl.string(g.t.geKm7u)
            }
          })()}</o.zx></l.UkV>}</l.mzw>}</l.Y0X>
}