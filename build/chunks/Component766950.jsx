/** Chunk was on 47495 **/
/** chunk id: 766950, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => w
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
  Chunk430824 = require("./430824.js"),
  Chunk25990 = require("./25990.js"),
  Chunk594174 = require("./594174.js"),
  Chunk626135 = require("./626135.js"),
  Chunk51144 = require("./51144.js"),
  Chunk364747 = require("./364747.js"),
  Chunk131016 = require("./131016.js"),
  Chunk489511 = require("./489511.js"),
  Chunk579346 = require("./579346.jsx"),
  Chunk438759 = require("./438759.jsx"),
  Chunk512070 = require("./512070.jsx"),
  Chunk299939 = require("./299939.jsx"),
  Chunk305813 = require("./305813.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk593082 = require("./593082.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk845378 = require("./845378.js");

function w(e) {
  var t, n, w, B;
  let {
    transitionState: Z,
    analyticsLocations: M,
    guildId: G,
    onClose: Y
  } = e, H = (0, s.e7)([j.default], () => j.default.getCurrentUser()), F = null != (t = v.ZP.useName(H)) ? t : "", z = (0, s.e7)([h.Z, S.Z, b.ZP], () => {
    var e, t, n;
    return null != G ? null != (t = null != (e = h.Z.getPendingNickname()) ? e : b.ZP.getNick(G, null == H ? true : H.id)) ? t : F : null != (n = S.Z.getPendingGlobalName()) ? n : F
  }, [G, H, F]), U = (0, s.e7)([_.Z], () => _.Z.getGuild(G)), {
    userDisplayNameStyles: q,
    guildDisplayNameStyles: K,
    pendingDisplayNameStyles: X
  } = (0, x.mD)(H, G), V = true !== X ? X : null != K ? K : q, [W, $] = o.useState(null != (n = null == V ? true : V.fontId) ? n : a.C.DEFAULT), [J, Q] = o.useState(null != (w = null == V ? true : V.effectId) ? w : i.m.SOLID), ee = (0, y.R)(J), et = (0, y.R)(i.m.GRADIENT), en = null != (B = null == V ? true : V.colors) ? B : [], [el, eo] = o.useState(en.length > 0 && J !== i.m.GRADIENT ? en[0] : ee.defaultColors[0]), [er, ei] = o.useState(en.length > 0 && J === i.m.GRADIENT ? en : et.defaultColors);
  (0, f.Z)({
    type: r.ImpressionTypes.POPOUT,
    name: r.ImpressionNames.DISPLAY_NAME_STYLES_MODAL
  }, {
    trackOnInitialLoad: true
  });
  let {
    analyticsLocations: ea
  } = (0, m.ZP)(M, p.Z.EDIT_DISPLAY_NAME_STYLES_MODAL), es = o.useMemo(() => J === i.m.GRADIENT ? er : [el], [J, er, el]), ec = o.useMemo(() => {
    var e;
    return W !== (null == V ? true : V.fontId) || J !== (null == V ? true : V.effectId) || !(0, c.E)(es, null != (e = null == V ? true : V.colors) ? e : [])
  }, [V, W, J, es]), ed = o.useCallback(() => {
    if (ec) {
      let e = es;
      J === i.m.SOLID && es.length > 0 && es[0] === ee.defaultColors[0] && (e = []);
      let t = {
        fontId: W,
        effectId: J,
        colors: e
      };
      null != G ? (0, g.N_)(t) : (0, u.NI)(t), C.default.track(R.rMx.DISPLAY_NAME_STYLES_APPLIED, {
        font_name: a.C[W],
        effect_name: i.m[J],
        colors: es
      }), Y()
    }
  }, [ec, W, J, es, ee, Y, G]), eu = o.useCallback(() => {
    let {
      fontId: e,
      effectId: t,
      colors: n
    } = (0, N.aY)();
    $(e), Q(t), t === i.m.GRADIENT ? ei(n) : eo(n[0]), C.default.track(R.rMx.DISPLAY_NAME_STYLES_SURPRISE_ME)
  }, [ei, eo]), ep = o.useCallback(e => {
    Q(e)
  }, [Q]), em = o.useCallback(e => {
    J === i.m.GRADIENT ? ei(e) : eo(e[0])
  }, [J, ei, eo]);
  return null == H ? null : (0, l.jsx)(m.Gt, {
    value: ea,
    children: (0, l.jsx)(P.k.Provider, {
      value: {
        overrideSettings: true
      },
      children: (0, l.jsxs)(d.Y0X, {
        "data-migration-pending": true,
        transitionState: Z,
        size: d.CgR.LARGE,
        parentComponent: "DisplayNameStylesModal",
        className: L.modalRoot,
        children: [(0, l.jsxs)(d.hzk, {
          "data-migration-pending": true,
          className: L.modalContent,
          style: {
            overflow: "hidden auto"
          },
          children: [(0, l.jsxs)("div", {
            className: L.selectionSection,
            children: [(0, l.jsx)(d.xBx, {
              "data-migration-pending": true,
              separator: false,
              className: L.sectionHeader,
              children: (0, l.jsx)(d.Heading, {
                variant: "heading-lg/semibold",
                children: I.intl.string(A.default.ZPMAlX)
              })
            }), (0, l.jsx)(T.Z, {
              selectedFontId: W,
              setSelectedFontId: $,
              displayName: z,
              className: L.selectionSubSection
            }), (0, l.jsx)(O.Z, {
              selectedEffectId: J,
              setSelectedEffectId: ep,
              className: L.selectionSubSection
            }), (0, l.jsx)(k.Z, {
              selectedColors: es,
              setSelectedColors: em,
              selectedEffectId: J,
              className: L.selectionSubSection,
              defaultColor: ee.defaultColors[0]
            })]
          }), (0, l.jsx)(D.Z, {
            user: H,
            guild: U,
            displayName: z,
            selectedFontId: W,
            selectedEffectId: J,
            selectedColors: J === i.m.SOLID && (0, c.E)(es, ee.defaultColors) ? [] : es,
            onClose: Y
          })]
        }), (0, l.jsx)(E.B, {
          onApply: ed,
          onSurpriseMe: eu,
          onClose: Y,
          canApply: ec,
          analyticsLocations: ea
        })]
      })
    })
  })
}