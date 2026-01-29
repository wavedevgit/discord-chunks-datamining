/** Chunk was on 15682 **/
/** chunk id: 619481, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => w
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk110259 = require("./110259.js"),
  Chunk508425 = require("./508425.js"),
  Chunk559949 = require("./559949.js"),
  Chunk311907 = require("./311907.js"),
  Chunk52133 = require("./52133.js"),
  Chunk397927 = require("./397927.js"),
  Chunk793574 = require("./793574.js"),
  Chunk688810 = require("./688810.jsx"),
  Chunk139286 = require("./139286.js"),
  Chunk919395 = require("./919395.js"),
  Chunk71393 = require("./71393.js"),
  Chunk287809 = require("./287809.js"),
  Chunk954571 = require("./954571.js"),
  Chunk871162 = require("./871162.js"),
  Chunk945096 = require("./945096.js"),
  Chunk898985 = require("./898985.js"),
  Chunk415299 = require("./415299.js"),
  Chunk897661 = require("./897661.js"),
  Chunk18396 = require("./18396.jsx"),
  Chunk242853 = require("./242853.jsx"),
  Chunk32246 = require("./32246.jsx"),
  Chunk879164 = require("./879164.jsx"),
  Chunk30925 = require("./30925.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk927961 = require("./927961.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk753565 = require("./753565.js");

function w(e) {
  var t, l, w;
  let {
    transitionState: I,
    analyticsLocations: L,
    guildId: k,
    onClose: R
  } = e, G = (0, i.bG)([_.default], () => _.default.getCurrentUser()), z = (0, N.b)(G, k), M = (0, i.bG)([g.A], () => g.A.getGuild(k)), {
    userDisplayNameStyles: H,
    guildDisplayNameStyles: U,
    pendingDisplayNameStyles: Y
  } = (0, f.B0)(G, k), B = true !== Y ? Y : null != U ? U : H, [J, F] = r.useState(null != (t = null == B ? true : B.fontId) ? t : o.x.DEFAULT), [V, K] = r.useState(null != (l = null == B ? true : B.effectId) ? l : a.z.SOLID), q = (0, j._)(V), X = (0, j._)(a.z.GRADIENT), Q = null != (w = null == B ? true : B.colors) ? w : [], [Z, W] = r.useState(Q.length > 0 && V !== a.z.GRADIENT ? Q[0] : q.defaultColors[0]), [$, ee] = r.useState(Q.length > 0 && V === a.z.GRADIENT ? Q : X.defaultColors);
  (0, p.A)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: et
  } = (0, m.Ay)(L, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL), el = r.useMemo(() => V === a.z.GRADIENT ? $ : [Z], [V, $, Z]), en = r.useMemo(() => {
    var e;
    return J !== (null == B ? true : B.fontId) || V !== (null == B ? true : B.effectId) || !(0, c.v)(el, null != (e = null == B ? true : B.colors) ? e : [])
  }, [B, J, V, el]), er = (0, v.v)({
    hasChanges: en,
    selectedFontId: J,
    selectedEffectId: V,
    selectedColors: el,
    defaultColor: q.defaultColors[0],
    guildId: k,
    onClose: R
  }), es = r.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: l
    } = (0, h.gN)();
    F(e), K(t), t === a.z.GRADIENT ? ee(l) : W(l[0]), x.default.track(E.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [ee, W]), ea = r.useCallback(e => {
    K(e)
  }, [K]), eo = r.useCallback(e => {
    V === a.z.GRADIENT ? ee(e) : W(e[0])
  }, [V, ee, W]);
  return null == G ? null : (0, n.jsx)(m.f5, {
    value: et,
    children: (0, n.jsx)(b.l.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, n.jsxs)(d.EOs, {
        "data-migration-pending": true,
        transitionState: I,
        size: d.rIJ.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: D.CR,
        children: [(0, n.jsxs)(d.$mQ, {
          "data-migration-pending": true,
          className: D.jE,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, n.jsxs)("div", {
            className: D.w1,
            children: [(0, n.jsx)(d.rQ0, {
              "data-migration-pending": true,
              separator: false,
              className: D.bV,
              children: (0, n.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: P.intl.string(T.default.ZPMAlX)
              })
            }), (0, n.jsx)(S.A, {
              selectedFontId: J,
              setSelectedFontId: F,
              displayName: z,
              className: D._
            }), (0, n.jsx)(C.A, {
              selectedEffectId: V,
              setSelectedEffectId: ea,
              className: D._
            }), (0, n.jsx)(A.A, {
              selectedColors: el,
              setSelectedColors: eo,
              selectedEffectId: V,
              className: D._,
              defaultColor: q.defaultColors[0]
            })]
          }), (0, n.jsx)(O.A, {
            user: G,
            guild: M,
            displayName: z,
            selectedFontId: J,
            selectedEffectId: V,
            selectedColors: V === a.z.SOLID && (0, c.v)(el, q.defaultColors) ? [] : el,
            onClose: R
          })]
        }), (0, n.jsx)(y._, {
          onApply: er,
          onSurpriseMe: es,
          onClose: R,
          canApply: en,
          analyticsLocations: et
        })]
      })
    })
  })
}