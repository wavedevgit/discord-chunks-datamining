/** Chunk was on 82961 **/
/** chunk id: 751744, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
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
    title: Chunk388032.intl.string(Chunk388032.t["1+E7LP"]),
    description: Chunk388032.intl.string(Chunk388032.t["BXiat/"])
  }, {
    title: Chunk388032.intl.string(Chunk388032.t.iMQXtK),
    description: Chunk388032.intl.string(Chunk388032.t.oQ0vwu)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t["oY/z1Q"]),
    description: Chunk388032.intl.string(Chunk388032.t.wtj02W)
  }],
  j = function(t) {
    let {
      onClose: e,
      transitionState: n,
      classificationId: j
    } = t, _ = (0, s.e7)([p.Z], () => p.Z.getAgeVerificationWebviewUrl()), b = (0, s.e7)([p.Z], () => p.Z.getIsLoadingAgeVerification()), v = r.useCallback(() => {
      e(), u.Z.close()
    }, [e]), N = r.useCallback(() => {
      u.Z.success(), v(), u.Z.start_verification_check()
    }, [v]);
    return r.useEffect(() => {
      "" !== _ && o.Z.showAgeVerification({
        webviewUrl: _,
        onComplete: N,
        entryPoint: a.cU.AUTOMATED_UNDERAGE_APPEALS
      })
    }, [_, N]), (0, i.jsx)(l.Modal, {
      onClose: e,
      transitionState: n,
      title: f.intl.string(f.t["9SDLnj"]),
      subtitle: f.intl.string(f.t["yvx//1"]),
      actions: [{
        text: f.intl.string(f.t.dKacJ8),
        onClick: v,
        variant: "secondary"
      }, {
        text: f.intl.string(f.t["54b8V0"]),
        onClick: () => (0, m.FN)(j),
        loading: b
      }],
      children: (0, i.jsxs)(c.Kqy, {
        gap: 8,
        direction: "vertical",
        children: [(0, i.jsx)(d.z, {
          children: h.map((t, e) => {
            let {
              title: n,
              description: r
            } = t;
            return (0, i.jsx)(d.q, {
              title: n,
              description: r,
              index: e,
              listType: "numbered"
            }, e)
          })
        }), (0, i.jsxs)(c.Kqy, {
          gap: 8,
          direction: "vertical",
          children: [(0, i.jsx)(x.rT, {
            title: f.intl.string(f.t.WPwp1b),
            children: (0, i.jsx)(x.JZ, {
              title: f.intl.string(f.t.N9WJMM),
              description: f.intl.string(f.t.NHq382),
              buttonText: f.intl.string(f.t["9iy4lB"]),
              titleVariant: "text-md/medium",
              onButtonPress: () => window.open(g.sQ.AGE_VERIFICATION_LINK, "_blank")
            })
          }), (0, i.jsx)(c.Kqy, {
            align: "center",
            children: (0, i.jsx)(c.Text, {
              variant: "text-sm/medium",
              color: "text-secondary",
              children: f.intl.format(f.t.ZbWsOF, {
                learnMoreLink: g.sQ.LEARN_MORE_UU_APPEAL_LINK
              })
            })
          })]
        })]
      })
    })
  }