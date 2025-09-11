/** Chunk was on 47495 **/
/** chunk id: 766950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => T
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
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk364747 = require("./364747.js"),
  Chunk131016 = require("./131016.js"),
  Chunk579346 = require("./579346.jsx"),
  Chunk438759 = require("./438759.jsx"),
  Chunk512070 = require("./512070.jsx"),
  Chunk299939 = require("./299939.jsx"),
  Chunk305813 = require("./305813.jsx"),
  Chunk203872 = require("./203872.js"),
  Chunk981631 = require("./981631.js"),
  Chunk62222 = require("./62222.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845378 = require("./845378.js");

function T(e) {
  var t, n, T;
  let {
    transitionState: D,
    analyticsLocations: R,
    guild: A,
    onClose: I
  } = e, w = (0, s.e7)([h.default], () => h.default.getCurrentUser()), L = (0, s.e7)([g.Z], () => g.Z.getAllPending().pendingDisplayNameStyles), B = true !== L ? L : null == w ? true : w.displayNameStyles, [M, G] = o.useState(null != (t = null == B ? true : B.fontId) ? t : i.C.DEFAULT), [Z, Y] = o.useState(null != (n = null == B ? true : B.effectId) ? n : a.m.SOLID), H = (0, y.R)(Z), z = (0, y.R)(a.m.GRADIENT), F = null != (T = null == B ? true : B.colors) ? T : [], [U, q] = o.useState(F.length > 0 && Z !== a.m.GRADIENT ? F[0] : H.defaultColors[0]), [K, X] = o.useState(F.length > 0 && Z === a.m.GRADIENT ? F : z.defaultColors);
  (0, m.Z)({
    type: l.ImpressionTypes.POPOUT,
    name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: V
  } = (0, f.ZP)(R, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL), W = o.useMemo(() => Z === a.m.GRADIENT ? K : [U], [Z, K, U]), $ = o.useMemo(() => {
    var e;
    return M !== (null == B ? true : B.fontId) || Z !== (null == B ? true : B.effectId) || !(0, c.E)(W, null != (e = null == B ? true : B.colors) ? e : [])
  }, [B, M, Z, W]), J = o.useCallback(() => {
    if ($) {
      let e = W;
      Z === a.m.SOLID && W.length > 0 && W[0] === H.defaultColors[0] && (e = []), (0, u.NI)({
        fontId: M,
        effectId: Z,
        colors: e
      }), b.default.track(P.rMx.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: i.C[M],
        effect_name: a.m[Z],
        colors: W
      }), I()
    }
  }, [$, M, Z, W, H, I]), Q = o.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: n
    } = (0, j.aY)();
    G(e), Y(t), t === a.m.GRADIENT ? X(n) : q(n[0]), b.default.track(P.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [X, q]), ee = o.useCallback(e => {
    Y(e)
  }, [Y]), et = o.useCallback(e => {
    Z === a.m.GRADIENT ? X(e) : q(e[0])
  }, [Z, X, q]);
  return null == w ? null : (0, r.jsx)(f.Gt, {
    value: V,
    children: (0, r.jsx)(x.k.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, r.jsxs)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: D,
        size: d.CgR.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: E.modalRoot,
        children: [(0, r.jsxs)(d.hzk, {
          "data-migration-pending": true,
          className: E.modalContent,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, r.jsxs)("div", {
            className: E.selectionSection,
            children: [(0, r.jsx)(d.xBx, {
              "data-migration-pending": true,
              separator: false,
              className: E.sectionHeader,
              children: (0, r.jsx)(d.X6q, {
                variant: "heading-lg/semibold",
                children: N.intl.string(k.default.ZPMAlZ)
              })
            }), (0, r.jsx)(C.Z, {
              selectedFontId: M,
              setSelectedFontId: G,
              className: E.selectionSubSection
            }), (0, r.jsx)(S.Z, {
              selectedEffectId: Z,
              setSelectedEffectId: ee,
              className: E.selectionSubSection
            }), (0, r.jsx)(_.Z, {
              selectedColors: W,
              setSelectedColors: et,
              selectedEffectId: Z,
              className: E.selectionSubSection,
              defaultColor: H.defaultColors[0]
            })]
          }), (0, r.jsx)(v.Z, {
            user: w,
            selectedFontId: M,
            selectedEffectId: Z,
            selectedColors: Z === a.m.SOLID && (0, c.E)(W, H.defaultColors) ? [] : W,
            onClose: I
          })]
        }), (0, r.jsx)(O.B, {
          onApply: J,
          onSurpriseMe: Q,
          onClose: I,
          canApply: $,
          analyticsLocations: V
        })]
      })
    })
  })
}