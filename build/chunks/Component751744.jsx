/** Chunk was on 82961 **/
/** chunk id: 751744, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk331692 = require("./331692.jsx"),
  Chunk103879 = require("./103879.js"),
  Chunk236289 = require("./236289.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx");
let _ = [{
    title: Chunk388032.intl.string(Chunk388032.t["1+E7LC"]),
    description: Chunk388032.intl.string(Chunk388032.t.BXiat7)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t.iMQXtL),
    description: Chunk388032.intl.string(Chunk388032.t.oQ0vws)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t["oY/z1d"]),
    description: Chunk388032.intl.string(Chunk388032.t.wtj02d)
  }],
  j = function(t) {
    let {
      onClose: n,
      transitionState: e,
      classificationId: j
    } = t, p = (0, l.e7)([m.Z], () => m.Z.getAgeVerificationWebviewUrl()), v = (0, l.e7)([m.Z], () => m.Z.getIsLoadingAgeVerification()), b = r.useCallback(() => {
      n(), x.Z.close()
    }, [n]), g = r.useCallback(() => {
      x.Z.success(), b(), x.Z.start_verification_check()
    }, [b]);
    return r.useEffect(() => {
      "" !== p && a.Z.showAgeVerification({
        webviewUrl: p,
        onComplete: g,
        useV1: true
      })
    }, [p, g]), (0, i.jsx)(o.Modal, {
      onClose: n,
      transitionState: e,
      title: f.intl.string(f.t["9SDLnp"]),
      subtitle: f.intl.string(f.t["yvx///"]),
      actions: [{
        text: f.intl.string(f.t.dKacJy),
        onClick: b,
        variant: "secondary"
      }, {
        text: f.intl.string(f.t["54b8V1"]),
        onClick: () => (0, u.FN)(j),
        loading: v
      }],
      children: (0, i.jsxs)(s.Kqy, {
        gap: 8,
        direction: "vertical",
        children: [(0, i.jsx)(c.z, {
          children: _.map((t, n) => {
            let {
              title: e,
              description: r
            } = t;
            return (0, i.jsx)(c.q, {
              title: e,
              description: r,
              index: n,
              listType: "numbered"
            }, n)
          })
        }), (0, i.jsxs)(s.Kqy, {
          gap: 8,
          direction: "vertical",
          children: [(0, i.jsx)(d.rT, {
            title: f.intl.string(f.t.WPwp1d),
            children: (0, i.jsx)(d.JZ, {
              title: f.intl.string(f.t.N9WJMD),
              description: f.intl.string(f.t["NHq38/"]),
              buttonText: f.intl.string(f.t["9iy4lJ"]),
              titleVariant: "text-md/medium",
              onButtonPress: () => window.open(h.sQ.AGE_VERIFICATION_LINK, "_blank")
            })
          }), (0, i.jsx)(s.Kqy, {
            align: "center",
            children: (0, i.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              children: f.intl.format(f.t.ZbWsOD, {
                learnMoreLink: h.sQ.LEARN_MORE_UU_APPEAL_LINK
              })
            })
          })]
        })]
      })
    })
  }