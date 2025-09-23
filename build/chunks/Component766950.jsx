/** Chunk was on 47495 **/
/** chunk id: 766950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => D
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
  Chunk150039 = require("./150039.js"),
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

function D(e) {
  var t, n, D;
  let {
    transitionState: R,
    analyticsLocations: w,
    guildId: A,
    onClose: I
  } = e, L = (0, s.e7)([b.default], () => b.default.getCurrentUser()), {
    currentDisplayNameStyles: B,
    pendingDisplayNameStyles: M
  } = (0, h.mD)(L, A), G = true !== M ? M : B, [Z, Y] = o.useState(null != (t = null == G ? true : G.fontId) ? t : i.C.DEFAULT), [H, z] = o.useState(null != (n = null == G ? true : G.effectId) ? n : a.m.SOLID), F = (0, y.R)(H), U = (0, y.R)(a.m.GRADIENT), q = null != (D = null == G ? true : G.colors) ? D : [], [K, X] = o.useState(q.length > 0 && H !== a.m.GRADIENT ? q[0] : F.defaultColors[0]), [V, W] = o.useState(q.length > 0 && H === a.m.GRADIENT ? q : U.defaultColors);
  (0, m.Z)({
    type: l.ImpressionTypes.POPOUT,
    name: l.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: $
  } = (0, f.ZP)(w, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL), J = o.useMemo(() => H === a.m.GRADIENT ? V : [K], [H, V, K]), Q = o.useMemo(() => {
    var e;
    return Z !== (null == G ? true : G.fontId) || H !== (null == G ? true : G.effectId) || !(0, c.E)(J, null != (e = null == G ? true : G.colors) ? e : [])
  }, [G, Z, H, J]), ee = o.useCallback(() => {
    if (Q) {
      let e = J;
      H === a.m.SOLID && J.length > 0 && J[0] === F.defaultColors[0] && (e = []);
      let t = {
        fontId: Z,
        effectId: H,
        colors: e
      };
      null != A ? (0, g.N_)(t) : (0, u.NI)(t), x.default.track(k.rMx.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: i.C[Z],
        effect_name: a.m[H],
        colors: J
      }), I()
    }
  }, [Q, Z, H, J, F, I, A]), et = o.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: n
    } = (0, _.aY)();
    Y(e), z(t), t === a.m.GRADIENT ? W(n) : X(n[0]), x.default.track(k.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [W, X]), en = o.useCallback(e => {
    z(e)
  }, [z]), er = o.useCallback(e => {
    H === a.m.GRADIENT ? W(e) : X(e[0])
  }, [H, W, X]);
  return null == L ? null : (0, r.jsx)(f.Gt, {
    value: $,
    children: (0, r.jsx)(j.k.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, r.jsxs)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: R,
        size: d.CgR.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: T.modalRoot,
        children: [(0, r.jsxs)(d.hzk, {
          "data-migration-pending": true,
          className: T.modalContent,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, r.jsxs)("div", {
            className: T.selectionSection,
            children: [(0, r.jsx)(d.xBx, {
              "data-migration-pending": true,
              separator: false,
              className: T.sectionHeader,
              children: (0, r.jsx)(d.X6q, {
                variant: "heading-lg/semibold",
                children: E.intl.string(N.default.ZPMAlZ)
              })
            }), (0, r.jsx)(O.Z, {
              selectedFontId: Z,
              setSelectedFontId: Y,
              className: T.selectionSubSection
            }), (0, r.jsx)(C.Z, {
              selectedEffectId: H,
              setSelectedEffectId: en,
              className: T.selectionSubSection
            }), (0, r.jsx)(S.Z, {
              selectedColors: J,
              setSelectedColors: er,
              selectedEffectId: H,
              className: T.selectionSubSection,
              defaultColor: F.defaultColors[0]
            })]
          }), (0, r.jsx)(P.Z, {
            user: L,
            selectedFontId: Z,
            selectedEffectId: H,
            selectedColors: H === a.m.SOLID && (0, c.E)(J, F.defaultColors) ? [] : J,
            onClose: I
          })]
        }), (0, r.jsx)(v.B, {
          onApply: ee,
          onSurpriseMe: et,
          onClose: I,
          canApply: Q,
          analyticsLocations: $
        })]
      })
    })
  })
}