/** Chunk was on 15682 **/
/** chunk id: 619481, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  default: () => I
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

function I(e) {
  var t, l, I;
  let {
    transitionState: P,
    analyticsLocations: L,
    guildId: k,
    onClose: R
  } = e, G = (0, o.bG)([x.default], () => x.default.getCurrentUser()), z = (0, A.b)(G, k), M = (0, o.bG)([p.A], () => p.A.getGuild(k)), {
    userDisplayNameStyles: U,
    guildDisplayNameStyles: H,
    pendingDisplayNameStyles: Y
  } = (0, b.B0)(G, k), J = true !== Y ? Y : null != H ? H : U, [F, B] = a.useState(null != (t = null == J ? true : J.fontId) ? t : i.x.DEFAULT), [V, K] = a.useState(null != (l = null == J ? true : J.effectId) ? l : r.z.SOLID), q = (0, v._)(V), X = (0, v._)(r.z.GRADIENT), Q = null != (I = null == J ? true : J.colors) ? I : [], [Z, W] = a.useState(Q.length > 0 && V !== r.z.GRADIENT ? Q[0] : q.defaultColors[0]), [$, ee] = a.useState(Q.length > 0 && V === r.z.GRADIENT ? Q : X.defaultColors);
  (0, m.A)({
    type: s.ImpressionTypes.POPOUT,
    name: s.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: et
  } = (0, f.Ay)(L, u.A.EDIT_DISPLAY_NAME_STYLES_MODAL), el = a.useMemo(() => V === r.z.GRADIENT ? $ : [Z], [V, $, Z]), en = a.useMemo(() => {
    var e;
    return F !== (null == J ? true : J.fontId) || V !== (null == J ? true : J.effectId) || !(0, c.v)(el, null != (e = null == J ? true : J.colors) ? e : [])
  }, [J, F, V, el]), ea = (0, N.v)({
    hasChanges: en,
    selectedFontId: F,
    selectedEffectId: V,
    selectedColors: el,
    defaultColor: q.defaultColors[0],
    guildId: k,
    onClose: R
  }), es = a.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: l
    } = (0, h.gN)();
    B(e), K(t), t === r.z.GRADIENT ? ee(l) : W(l[0]), g.default.track(E.HAw.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [ee, W]), er = a.useCallback(e => {
    K(e)
  }, [K]), ei = a.useCallback(e => {
    V === r.z.GRADIENT ? ee(e) : W(e[0])
  }, [V, ee, W]);
  return null == G ? null : (0, n.jsx)(f.f5, {
    value: et,
    children: (0, n.jsx)(j.l.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, n.jsxs)(d.EOs, {
        "data-migration-pending": true,
        transitionState: P,
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
                children: w.intl.string(T.default.ZPMAlX)
              })
            }), (0, n.jsx)(S.A, {
              selectedFontId: F,
              setSelectedFontId: B,
              displayName: z,
              className: D._
            }), (0, n.jsx)(_.A, {
              selectedEffectId: V,
              setSelectedEffectId: er,
              className: D._
            }), (0, n.jsx)(y.A, {
              selectedColors: el,
              setSelectedColors: ei,
              selectedEffectId: V,
              className: D._,
              defaultColor: q.defaultColors[0]
            })]
          }), (0, n.jsx)(C.A, {
            user: G,
            guild: M,
            displayName: z,
            selectedFontId: F,
            selectedEffectId: V,
            selectedColors: V === r.z.SOLID && (0, c.v)(el, q.defaultColors) ? [] : el,
            onClose: R
          })]
        }), (0, n.jsx)(O._, {
          onApply: ea,
          onSurpriseMe: es,
          onClose: R,
          canApply: en,
          analyticsLocations: et
        })]
      })
    })
  })
}