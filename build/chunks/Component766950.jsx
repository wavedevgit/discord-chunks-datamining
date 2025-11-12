/** Chunk was on 47495 **/
/** chunk id: 766950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => L
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
  Chunk778825 = require("./778825.js"),
  Chunk150039 = require("./150039.js"),
  Chunk271383 = require("./271383.js"),
  Chunk430824 = require("./430824.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk364747 = require("./364747.js"),
  Chunk131016 = require("./131016.js"),
  Chunk489511 = require("./489511.js"),
  Chunk768446 = require("./768446.js"),
  Chunk579346 = require("./579346.jsx"),
  Chunk438759 = require("./438759.jsx"),
  Chunk512070 = require("./512070.jsx"),
  Chunk299939 = require("./299939.jsx"),
  Chunk305813 = require("./305813.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk352609 = require("./352609.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk300119 = require("./300119.js");

function L(e) {
  var t, n, L, w;
  let {
    transitionState: B,
    analyticsLocations: Z,
    guildId: M,
    onClose: G
  } = e, Y = (0, s.e7)([_.default], () => _.default.getCurrentUser()), H = null != (t = j.ZP.useName(Y)) ? t : "", z = (0, s.e7)([f.Z, b.Z, h.ZP], () => {
    var e, t, n;
    return null != M ? null != (t = null != (e = f.Z.getPendingNickname()) ? e : h.ZP.getNick(M, null == Y ? true : Y.id)) ? t : H : null != (n = b.Z.getPendingGlobalName()) ? n : H
  }, [M, Y, H]), F = (0, s.e7)([x.Z], () => x.Z.getGuild(M)), {
    userDisplayNameStyles: U,
    guildDisplayNameStyles: q,
    pendingDisplayNameStyles: K
  } = (0, g.mD)(Y, M), X = true !== K ? K : null != q ? q : U, [V, W] = o.useState(null != (n = null == X ? true : X.fontId) ? n : a.C.DEFAULT), [$, J] = o.useState(null != (L = null == X ? true : X.effectId) ? L : i.m.SOLID), Q = (0, P.R)($), ee = (0, P.R)(i.m.GRADIENT), et = null != (w = null == X ? true : X.colors) ? w : [], [en, el] = o.useState(et.length > 0 && $ !== i.m.GRADIENT ? et[0] : Q.defaultColors[0]), [eo, er] = o.useState(et.length > 0 && $ === i.m.GRADIENT ? et : ee.defaultColors);
  (0, m.Z)({
    type: r.ImpressionTypes.POPOUT,
    name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: ei
  } = (0, p.ZP)(Z, u.Z.EDIT_DISPLAY_NAME_STYLES_MODAL), ea = o.useMemo(() => $ === i.m.GRADIENT ? eo : [en], [$, eo, en]), es = o.useMemo(() => {
    var e;
    return V !== (null == X ? true : X.fontId) || $ !== (null == X ? true : X.effectId) || !(0, c.E)(ea, null != (e = null == X ? true : X.colors) ? e : [])
  }, [X, V, $, ea]), ec = (0, N.z)({
    hasChanges: es,
    selectedFontId: V,
    selectedEffectId: $,
    selectedColors: ea,
    defaultColor: Q.defaultColors[0],
    guildId: M,
    onClose: G
  }), ed = o.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: n
    } = (0, v.aY)();
    W(e), J(t), t === i.m.GRADIENT ? er(n) : el(n[0]), S.default.track(D.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [er, el]), eu = o.useCallback(e => {
    J(e)
  }, [J]), ep = o.useCallback(e => {
    $ === i.m.GRADIENT ? er(e) : el(e[0])
  }, [$, er, el]);
  return null == Y ? null : (0, l.jsx)(p.Gt, {
    value: ei,
    children: (0, l.jsx)(C.k.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, l.jsxs)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: B,
        size: d.CgR.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: I.modalRoot,
        children: [(0, l.jsxs)(d.hzk, {
          "data-migration-pending": true,
          className: I.modalContent,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, l.jsxs)("div", {
            className: I.selectionSection,
            children: [(0, l.jsx)(d.xBx, {
              "data-migration-pending": true,
              separator: false,
              className: I.sectionHeader,
              children: (0, l.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: A.intl.string(R.default.ZPMAlX)
              })
            }), (0, l.jsx)(O.Z, {
              selectedFontId: V,
              setSelectedFontId: W,
              displayName: z,
              className: I.selectionSubSection
            }), (0, l.jsx)(y.Z, {
              selectedEffectId: $,
              setSelectedEffectId: eu,
              className: I.selectionSubSection
            }), (0, l.jsx)(k.Z, {
              selectedColors: ea,
              setSelectedColors: ep,
              selectedEffectId: $,
              className: I.selectionSubSection,
              defaultColor: Q.defaultColors[0]
            })]
          }), (0, l.jsx)(E.Z, {
            user: Y,
            guild: F,
            displayName: z,
            selectedFontId: V,
            selectedEffectId: $,
            selectedColors: $ === i.m.SOLID && (0, c.E)(ea, Q.defaultColors) ? [] : ea,
            onClose: G
          })]
        }), (0, l.jsx)(T.B, {
          onApply: ec,
          onSurpriseMe: ed,
          onClose: G,
          canApply: es,
          analyticsLocations: ei
        })]
      })
    })
  })
}