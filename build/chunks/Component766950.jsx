/** Chunk was on 47495 **/
/** chunk id: 766950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => R
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk990547 = require("./990547.js"),
  Chunk522942 = require("./522942.js"),
  Chunk342905 = require("./342905.js"),
  Chunk442837 = require("./442837.js"),
  Chunk902704 = require("./902704.js"),
  Chunk481060 = require("./481060.js"),
  Chunk100527 = require("./100527.js"),
  Chunk906732 = require("./906732.jsx"),
  Chunk213609 = require("./213609.js"),
  Chunk150039 = require("./150039.js"),
  Chunk430824 = require("./430824.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk364747 = require("./364747.js"),
  Chunk131016 = require("./131016.js"),
  Chunk489511 = require("./489511.js"),
  Chunk768446 = require("./768446.js"),
  Chunk166614 = require("./166614.js"),
  Chunk579346 = require("./579346.jsx"),
  Chunk438759 = require("./438759.jsx"),
  Chunk512070 = require("./512070.jsx"),
  Chunk299939 = require("./299939.jsx"),
  Chunk305813 = require("./305813.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk88406 = require("./88406.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300119 = require("./300119.js");

function R(e) {
  var t, n, R;
  let {
    transitionState: A,
    analyticsLocations: I,
    guildId: L,
    onClose: w
  } = e, B = (0, s.e7)([h.default], () => h.default.getCurrentUser()), Z = (0, C.t)(B, L), M = (0, s.e7)([g.Z], () => g.Z.getGuild(L)), {
    userDisplayNameStyles: G,
    guildDisplayNameStyles: Y,
    pendingDisplayNameStyles: H
  } = (0, f.mD)(B, L), z = true !== H ? H : null != Y ? Y : G, [F, U] = o.useState(null != (t = null == z ? true : z.fontId) ? t : a.C.DEFAULT), [q, K] = o.useState(null != (n = null == z ? true : z.effectId) ? n : i.m.SOLID), X = (0, S.R)(q), V = (0, S.R)(i.m.GRADIENT), W = null != (R = null == z ? true : z.colors) ? R : [], [$, J] = o.useState(W.length > 0 && q !== i.m.GRADIENT ? W[0] : X.defaultColors[0]), [Q, ee] = o.useState(W.length > 0 && q === i.m.GRADIENT ? W : V.defaultColors);
  (0, m.Z)({
    type: r.ImpressionTypes.POPOUT,
    name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: et
  } = (0, p.ZP)(I, u.Z.EDIT_DISPLAY_NAME_STYLES_MODAL), en = o.useMemo(() => q === i.m.GRADIENT ? Q : [$], [q, Q, $]), el = o.useMemo(() => {
    var e;
    return F !== (null == z ? true : z.fontId) || q !== (null == z ? true : z.effectId) || !(0, c.E)(en, null != (e = null == z ? true : z.colors) ? e : [])
  }, [z, F, q, en]), eo = (0, j.z)({
    hasChanges: el,
    selectedFontId: F,
    selectedEffectId: q,
    selectedColors: en,
    defaultColor: X.defaultColors[0],
    guildId: L,
    onClose: w
  }), er = o.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: n
    } = (0, _.aY)();
    U(e), K(t), t === i.m.GRADIENT ? ee(n) : J(n[0]), x.default.track(O.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [ee, J]), ei = o.useCallback(e => {
    K(e)
  }, [K]), ea = o.useCallback(e => {
    q === i.m.GRADIENT ? ee(e) : J(e[0])
  }, [q, ee, J]);
  return null == B ? null : (0, l.jsx)(p.Gt, {
    value: et,
    children: (0, l.jsx)(b.k.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, l.jsxs)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: A,
        size: d.CgR.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: D.modalRoot,
        children: [(0, l.jsxs)(d.hzk, {
          "data-migration-pending": true,
          className: D.modalContent,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, l.jsxs)("div", {
            className: D.selectionSection,
            children: [(0, l.jsx)(d.xBx, {
              "data-migration-pending": true,
              separator: false,
              className: D.sectionHeader,
              children: (0, l.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: E.intl.string(T.default.ZPMAlX)
              })
            }), (0, l.jsx)(N.Z, {
              selectedFontId: F,
              setSelectedFontId: U,
              displayName: Z,
              className: D.selectionSubSection
            }), (0, l.jsx)(P.Z, {
              selectedEffectId: q,
              setSelectedEffectId: ei,
              className: D.selectionSubSection
            }), (0, l.jsx)(v.Z, {
              selectedColors: en,
              setSelectedColors: ea,
              selectedEffectId: q,
              className: D.selectionSubSection,
              defaultColor: X.defaultColors[0]
            })]
          }), (0, l.jsx)(y.Z, {
            user: B,
            guild: M,
            displayName: Z,
            selectedFontId: F,
            selectedEffectId: q,
            selectedColors: q === i.m.SOLID && (0, c.E)(en, X.defaultColors) ? [] : en,
            onClose: w
          })]
        }), (0, l.jsx)(k.B, {
          onApply: eo,
          onSurpriseMe: er,
          onClose: w,
          canApply: el,
          analyticsLocations: et
        })]
      })
    })
  })
}