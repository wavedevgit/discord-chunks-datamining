/** Chunk was on 47495 **/
/** chunk id: 766950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk481060 = require("./481060.js"),
  Chunk809206 = require("./809206.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk18438 = require("./18438.js"),
  Chunk778825 = require("./778825.js"),
  Chunk150039 = require("./150039.js"),
  Chunk271383 = require("./271383.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk364747 = require("./364747.js"),
  Chunk131016 = require("./131016.js"),
  Chunk579346 = require("./579346.jsx"),
  Chunk438759 = require("./438759.jsx"),
  Chunk512070 = require("./512070.jsx"),
  Chunk299939 = require("./299939.jsx"),
  Chunk305813 = require("./305813.jsx"),
  Chunk203872 = require("./203872.js"),
  Chunk981631 = require("./981631.js"),
  Chunk693450 = require("./693450.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300119 = require("./300119.js");

function A(e) {
  var t, n, A, I;
  let {
    transitionState: B,
    analyticsLocations: M,
    guildId: Z,
    onClose: G
  } = e, Y = (0, s.e7)([_.default], () => _.default.getCurrentUser()), H = null != (t = C.ZP.useName(Y)) ? t : "", z = (0, s.e7)([h.Z, j.Z, x.ZP], () => {
    var e, t, n;
    return null != Z ? null != (t = null != (e = h.Z.getPendingNickname()) ? e : x.ZP.getNick(Z, null == Y ? true : Y.id)) ? t : H : null != (n = j.Z.getPendingGlobalName()) ? n : H
  }, [Z, Y, H]), {
    currentDisplayNameStyles: F,
    pendingDisplayNameStyles: U
  } = (0, b.mD)(Y, Z), q = true !== U ? U : F, [K, X] = o.useState(null != (n = null == q ? true : q.fontId) ? n : i.C.DEFAULT), [V, W] = o.useState(null != (A = null == q ? true : q.effectId) ? A : a.m.SOLID), $ = (0, T.R)(V), J = (0, T.R)(a.m.GRADIENT), Q = null != (I = null == q ? true : q.colors) ? I : [], [ee, et] = o.useState(Q.length > 0 && V !== a.m.GRADIENT ? Q[0] : $.defaultColors[0]), [en, er] = o.useState(Q.length > 0 && V === a.m.GRADIENT ? Q : J.defaultColors);
  (0, f.Z)({
    type: l.ImpressionTypes.POPOUT,
    name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: eo
  } = (0, m.ZP)(M, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL), el = o.useMemo(() => V === a.m.GRADIENT ? en : [ee], [V, en, ee]), ea = o.useMemo(() => {
    var e;
    return K !== (null == q ? true : q.fontId) || V !== (null == q ? true : q.effectId) || !(0, c.E)(el, null != (e = null == q ? true : q.colors) ? e : [])
  }, [q, K, V, el]), ei = o.useCallback(() => {
    if (ea) {
      let e = el;
      V === a.m.SOLID && el.length > 0 && el[0] === $.defaultColors[0] && (e = []);
      let t = {
        fontId: K,
        effectId: V,
        colors: e
      };
      null != Z ? (0, g.N_)(t) : (0, u.NI)(t), S.default.track(D.rMx.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: i.C[K],
        effect_name: a.m[V],
        colors: el
      }), G()
    }
  }, [ea, K, V, el, $, G, Z]), es = o.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: n
    } = (0, v.aY)();
    X(e), W(t), t === a.m.GRADIENT ? er(n) : et(n[0]), S.default.track(D.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [er, et]), ec = o.useCallback(e => {
    W(e)
  }, [W]), ed = o.useCallback(e => {
    V === a.m.GRADIENT ? er(e) : et(e[0])
  }, [V, er, et]);
  return null == Y ? null : (0, r.jsx)(m.Gt, {
    value: eo,
    children: (0, r.jsx)(O.k.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, r.jsxs)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: B,
        size: d.CgR.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: w.modalRoot,
        children: [(0, r.jsxs)(d.hzk, {
          "data-migration-pending": true,
          className: w.modalContent,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, r.jsxs)("div", {
            className: w.selectionSection,
            children: [(0, r.jsx)(d.xBx, {
              "data-migration-pending": true,
              separator: false,
              className: w.sectionHeader,
              children: (0, r.jsx)(d.X6q, {
                variant: "heading-lg/semibold",
                children: L.intl.string(R.default.ZPMAlZ)
              })
            }), (0, r.jsx)(k.Z, {
              selectedFontId: K,
              setSelectedFontId: X,
              displayName: z,
              className: w.selectionSubSection
            }), (0, r.jsx)(P.Z, {
              selectedEffectId: V,
              setSelectedEffectId: ec,
              className: w.selectionSubSection
            }), (0, r.jsx)(y.Z, {
              selectedColors: el,
              setSelectedColors: ed,
              selectedEffectId: V,
              className: w.selectionSubSection,
              defaultColor: $.defaultColors[0]
            })]
          }), (0, r.jsx)(E.Z, {
            user: Y,
            displayName: z,
            selectedFontId: K,
            selectedEffectId: V,
            selectedColors: V === a.m.SOLID && (0, c.E)(el, $.defaultColors) ? [] : el,
            onClose: G
          })]
        }), (0, r.jsx)(N.B, {
          onApply: ei,
          onSurpriseMe: es,
          onClose: G,
          canApply: ea,
          analyticsLocations: eo
        })]
      })
    })
  })
}