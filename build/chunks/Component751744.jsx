/** Chunk was on 82961 **/
/** chunk id: 751744, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk480916 = require("./480916.js"),
  Chunk819557 = require("./819557.jsx"),
  Chunk138201 = require("./138201.jsx"),
  Chunk331692 = require("./331692.jsx"),
  Chunk103879 = require("./103879.js"),
  Chunk236289 = require("./236289.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx");
let j = [{
    title: Chunk388032.intl.string(Chunk388032.t["1+E7LC"]),
    description: Chunk388032.intl.string(Chunk388032.t.BXiat7)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t.iMQXtL),
    description: Chunk388032.intl.string(Chunk388032.t.oQ0vws)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t["oY/z1d"]),
    description: Chunk388032.intl.string(Chunk388032.t.wtj02d)
  }],
  p = function(t) {
    let {
      onClose: n,
      transitionState: e,
      classificationId: p
    } = t, v = (0, l.e7)([h.Z], () => h.Z.getAgeVerificationWebviewUrl()), b = (0, l.e7)([h.Z], () => h.Z.getIsLoadingAgeVerification()), g = r.useCallback(() => {
      n(), u.Z.close()
    }, [n]), N = r.useCallback(() => {
      u.Z.success(), g(), u.Z.start_verification_check()
    }, [g]);
    return r.useEffect(() => {
      "" !== v && c.Z.showAgeVerification({
        webviewUrl: v,
        onComplete: N,
        useV1: true,
        entryPoint: a.cU.AUTOMATED_UNDERAGE_APPEALS
      })
    }, [v, N]), (0, i.jsx)(o.Modal, {
      onClose: n,
      transitionState: e,
      title: _.intl.string(_.t["9SDLnp"]),
      subtitle: _.intl.string(_.t["yvx///"]),
      actions: [{
        text: _.intl.string(_.t.dKacJy),
        onClick: g,
        variant: "secondary"
      }, {
        text: _.intl.string(_.t["54b8V1"]),
        onClick: () => (0, m.FN)(p),
        loading: b
      }],
      children: (0, i.jsxs)(s.Kqy, {
        gap: 8,
        direction: "vertical",
        children: [(0, i.jsx)(d.z, {
          children: j.map((t, n) => {
            let {
              title: e,
              description: r
            } = t;
            return (0, i.jsx)(d.q, {
              title: e,
              description: r,
              index: n,
              listType: "numbered"
            }, n)
          })
        }), (0, i.jsxs)(s.Kqy, {
          gap: 8,
          direction: "vertical",
          children: [(0, i.jsx)(x.rT, {
            title: _.intl.string(_.t.WPwp1d),
            children: (0, i.jsx)(x.JZ, {
              title: _.intl.string(_.t.N9WJMD),
              description: _.intl.string(_.t["NHq38/"]),
              buttonText: _.intl.string(_.t["9iy4lJ"]),
              titleVariant: "text-md/medium",
              onButtonPress: () => window.open(f.sQ.AGE_VERIFICATION_LINK, "_blank")
            })
          }), (0, i.jsx)(s.Kqy, {
            align: "center",
            children: (0, i.jsx)(s.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              children: _.intl.format(_.t.ZbWsOD, {
                learnMoreLink: f.sQ.LEARN_MORE_UU_APPEAL_LINK
              })
            })
          })]
        })]
      })
    })
  }