/** Chunk was on 82961 **/
/** chunk id: 751744, original params: e,n,t (module,exports,require) **/
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
let h = [{
    title: Chunk388032.intl.string(Chunk388032.t["1+E7LC"]),
    description: Chunk388032.intl.string(Chunk388032.t.BXiat7)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t.iMQXtL),
    description: Chunk388032.intl.string(Chunk388032.t.oQ0vws)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t["oY/z1d"]),
    description: Chunk388032.intl.string(Chunk388032.t.wtj02d)
  }],
  p = function(e) {
    let {
      onClose: n,
      transitionState: t,
      classificationId: p
    } = e, v = (0, l.e7)([b.Z], () => b.Z.getAgeVerificationWebviewUrl()), g = (0, l.e7)([b.Z], () => b.Z.getIsLoadingAgeVerification()), _ = r.useCallback(() => {
      n(), x.Z.close()
    }, [n]), y = r.useCallback(() => {
      x.Z.success(), _(), x.Z.start_verification_check()
    }, [_]);
    return r.useEffect(() => {
      "" !== v && s.Z.showAgeVerification({
        webviewUrl: v,
        onComplete: y,
        useV1: true,
        entryPoint: a.cU.AUTOMATED_UNDERAGE_APPEALS
      })
    }, [v, y]), (0, i.jsx)(o.Modal, {
      onClose: n,
      transitionState: t,
      title: j.intl.string(j.t["9SDLnp"]),
      subtitle: j.intl.string(j.t["yvx///"]),
      actions: [{
        text: j.intl.string(j.t.dKacJy),
        onClick: _,
        variant: "secondary"
      }, {
        text: j.intl.string(j.t["54b8V1"]),
        onClick: () => (0, m.FN)(p),
        loading: g
      }],
      children: (0, i.jsxs)(c.Kqy, {
        gap: 8,
        direction: "vertical",
        children: [(0, i.jsx)(d.z, {
          children: h.map((e, n) => {
            let {
              title: t,
              description: r
            } = e;
            return (0, i.jsx)(d.q, {
              title: t,
              description: r,
              index: n,
              listType: "numbered"
            }, n)
          })
        }), (0, i.jsxs)(c.Kqy, {
          gap: 8,
          direction: "vertical",
          children: [(0, i.jsx)(u.rT, {
            title: j.intl.string(j.t.WPwp1d),
            children: (0, i.jsx)(u.JZ, {
              title: j.intl.string(j.t.N9WJMD),
              description: j.intl.string(j.t["NHq38/"]),
              buttonText: j.intl.string(j.t["9iy4lJ"]),
              titleVariant: "text-md/medium",
              onButtonPress: () => window.open(f.sQ.AGE_VERIFICATION_LINK, "_blank")
            })
          }), (0, i.jsx)(c.Kqy, {
            align: "center",
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              children: j.intl.format(j.t.ZbWsOD, {
                learnMoreLink: f.sQ.LEARN_MORE_UU_APPEAL_LINK
              })
            })
          })]
        })]
      })
    })
  }