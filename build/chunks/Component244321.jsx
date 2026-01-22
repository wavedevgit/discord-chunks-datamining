/** Chunk was on 93530 **/
/** chunk id: 244321, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk935649 = require("./935649.jsx"),
  Chunk847599 = require("./847599.js"),
  Chunk754302 = require("./754302.jsx"),
  Chunk632738 = require("./632738.jsx"),
  Chunk67521 = require("./67521.jsx"),
  Chunk308645 = require("./308645.js"),
  Chunk207913 = require("./207913.js"),
  Chunk239093 = require("./239093.js"),
  Chunk985018 = require("./985018.jsx");
let h = [{
    title: Chunk985018.intl.string(Chunk985018.t["1+E7LP"]),
    description: Chunk985018.intl.string(Chunk985018.t["BXiat/"])
  }, {
    title: Chunk985018.intl.string(Chunk985018.t.iMQXtK),
    description: Chunk985018.intl.string(Chunk985018.t.oQ0vwu)
  }, {
    title: Chunk985018.intl.string(Chunk985018.t["oY/z1Q"]),
    description: Chunk985018.intl.string(Chunk985018.t.wtj02W)
  }],
  g = function(t) {
    let {
      onClose: e,
      transitionState: i,
      classificationId: g
    } = t, P = (0, c.bG)([u.A], () => u.A.getAgeVerificationWebviewUrl()), O = (0, c.bG)([u.A], () => u.A.getIsLoadingAgeVerification()), T = r.useCallback(() => {
      e(), d.A.close()
    }, [e]), f = r.useCallback(() => {
      d.A.success(), T(), d.A.start_verification_check()
    }, [T]);
    return r.useEffect(() => {
      "" !== P && a.A.showAgeVerification({
        webviewUrl: P,
        onComplete: f,
        entryPoint: o.q1.AUTOMATED_UNDERAGE_APPEALS
      })
    }, [P, f]), (0, n.jsx)(s.Modal, {
      onClose: e,
      transitionState: i,
      title: b.intl.string(b.t["9SDLnj"]),
      subtitle: b.intl.string(b.t["yvx//1"]),
      actions: [{
        text: b.intl.string(b.t.dKacJ8),
        onClick: T,
        variant: "secondary"
      }, {
        text: b.intl.string(b.t["54b8V0"]),
        onClick: () => (0, E.k9)(g),
        loading: O
      }],
      children: (0, n.jsxs)(l.BJc, {
        gap: 8,
        direction: "vertical",
        children: [(0, n.jsx)(A.q, {
          children: h.map((t, e) => {
            let {
              title: i,
              description: r
            } = t;
            return (0, n.jsx)(A.B, {
              title: i,
              description: r,
              index: e,
              listType: "numbered"
            }, e)
          })
        }), (0, n.jsxs)(l.BJc, {
          gap: 8,
          direction: "vertical",
          children: [(0, n.jsx)(_.Y0, {
            title: b.intl.string(b.t.WPwp1b),
            children: (0, n.jsx)(_.PQ, {
              title: b.intl.string(b.t.N9WJMM),
              description: b.intl.string(b.t.NHq382),
              buttonText: b.intl.string(b.t["9iy4lB"]),
              titleVariant: "text-md/medium",
              onButtonPress: () => window.open(p.d$.AGE_VERIFICATION_LINK, "_blank")
            })
          }), (0, n.jsx)(l.BJc, {
            align: "center",
            children: (0, n.jsx)(l.Text, {
              variant: "text-sm/medium",
              color: "text-subtle",
              children: b.intl.format(b.t.ZbWsOF, {
                learnMoreLink: p.d$.LEARN_MORE_UU_APPEAL_LINK
              })
            })
          })]
        })]
      })
    })
  }