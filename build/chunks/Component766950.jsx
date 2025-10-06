/** Chunk was on 47495 **/
/** chunk id: 766950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => I
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

function I(e) {
  var t, n, I, w;
  let {
    transitionState: B,
    analyticsLocations: M,
    guildId: Z,
    onClose: G
  } = e, Y = (0, s.e7)([S.default], () => S.default.getCurrentUser()), H = null != (t = C.ZP.useName(Y)) ? t : "", z = (0, s.e7)([h.Z, b.Z, _.ZP], () => {
    var e, t, n;
    return null != Z ? null != (t = null != (e = h.Z.getPendingNickname()) ? e : _.ZP.getNick(Z, null == Y ? true : Y.id)) ? t : H : null != (n = b.Z.getPendingGlobalName()) ? n : H
  }, [Z, Y, H]), {
    currentDisplayNameStyles: F,
    pendingDisplayNameStyles: U
  } = (0, x.mD)(Y, Z), q = true !== U ? U : F, [K, X] = l.useState(null != (n = null == q ? true : q.fontId) ? n : i.C.DEFAULT), [V, W] = l.useState(null != (I = null == q ? true : q.effectId) ? I : a.m.SOLID), $ = (0, E.R)(V), J = (0, E.R)(a.m.GRADIENT), Q = null != (w = null == q ? true : q.colors) ? w : [], [ee, et] = l.useState(Q.length > 0 && V !== a.m.GRADIENT ? Q[0] : $.defaultColors[0]), [en, eo] = l.useState(Q.length > 0 && V === a.m.GRADIENT ? Q : J.defaultColors);
  (0, f.Z)({
    type: r.ImpressionTypes.POPOUT,
    name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: el
  } = (0, m.ZP)(M, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL), er = l.useMemo(() => V === a.m.GRADIENT ? en : [ee], [V, en, ee]), ea = l.useMemo(() => {
    var e;
    return K !== (null == q ? true : q.fontId) || V !== (null == q ? true : q.effectId) || !(0, c.E)(er, null != (e = null == q ? true : q.colors) ? e : [])
  }, [q, K, V, er]), ei = l.useCallback(() => {
    if (ea) {
      let e = er;
      V === a.m.SOLID && er.length > 0 && er[0] === $.defaultColors[0] && (e = []);
      let t = {
        fontId: K,
        effectId: V,
        colors: e
      };
      null != Z ? (0, g.N_)(t) : (0, u.NI)(t), j.default.track(D.rMx.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: i.C[K],
        effect_name: a.m[V],
        colors: er
      }), G()
    }
  }, [ea, K, V, er, $, G, Z]), es = l.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: n
    } = (0, P.aY)();
    X(e), W(t), t === a.m.GRADIENT ? eo(n) : et(n[0]), j.default.track(D.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [eo, et]), ec = l.useCallback(e => {
    W(e)
  }, [W]), ed = l.useCallback(e => {
    V === a.m.GRADIENT ? eo(e) : et(e[0])
  }, [V, eo, et]);
  return null == Y ? null : (0, o.jsx)(m.Gt, {
    value: el,
    children: (0, o.jsx)(v.k.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, o.jsxs)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: B,
        size: d.CgR.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: A.modalRoot,
        children: [(0, o.jsxs)(d.hzk, {
          "data-migration-pending": true,
          className: A.modalContent,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, o.jsxs)("div", {
            className: A.selectionSection,
            children: [(0, o.jsx)(d.xBx, {
              "data-migration-pending": true,
              separator: false,
              className: A.sectionHeader,
              children: (0, o.jsx)(d.X6q, {
                variant: "heading-lg/semibold",
                children: L.intl.string(R.default.ZPMAlZ)
              })
            }), (0, o.jsx)(y.Z, {
              selectedFontId: K,
              setSelectedFontId: X,
              displayName: z,
              className: A.selectionSubSection
            }), (0, o.jsx)(k.Z, {
              selectedEffectId: V,
              setSelectedEffectId: ec,
              className: A.selectionSubSection
            }), (0, o.jsx)(N.Z, {
              selectedColors: er,
              setSelectedColors: ed,
              selectedEffectId: V,
              className: A.selectionSubSection,
              defaultColor: $.defaultColors[0]
            })]
          }), (0, o.jsx)(T.Z, {
            user: Y,
            displayName: z,
            selectedFontId: K,
            selectedEffectId: V,
            selectedColors: V === a.m.SOLID && (0, c.E)(er, $.defaultColors) ? [] : er,
            onClose: G
          })]
        }), (0, o.jsx)(O.B, {
          onApply: ei,
          onSurpriseMe: es,
          onClose: G,
          canApply: ea,
          analyticsLocations: el
        })]
      })
    })
  })
}