/** Chunk was on 82961 **/
/** chunk id: 751744, original params: t,i,n (module,exports,require) **/
require.d(exports, {
  default: () => k
}), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk168107 = require("./168107.jsx"),
  Chunk819557 = require("./819557.js"),
  Chunk138201 = require("./138201.jsx"),
  Chunk331692 = require("./331692.jsx"),
  Chunk103879 = require("./103879.js"),
  Chunk236289 = require("./236289.js"),
  Chunk800530 = require("./800530.js"),
  Chunk388032 = require("./388032.jsx");
let b = [{
    title: Chunk388032.intl.string(Chunk388032.t["1+E7LC"]),
    description: Chunk388032.intl.string(Chunk388032.t.BXiat7)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t.iMQXtL),
    description: Chunk388032.intl.string(Chunk388032.t.oQ0vws)
  }, {
    title: Chunk388032.intl.string(Chunk388032.t["oY/z1d"]),
    description: Chunk388032.intl.string(Chunk388032.t.wtj02d)
  }],
  k = function(t) {
    let {
      onClose: i,
      transitionState: n,
      classificationId: k
    } = t, _ = (0, r.e7)([u.Z], () => u.Z.getAgeVerificationWebviewUrl()), f = (0, r.e7)([u.Z], () => u.Z.getIsLoadingAgeVerification()), j = s.useCallback(() => {
      i(), g.Z.close()
    }, [i]), m = s.useCallback(() => {
      g.Z.success(), j(), g.Z.start_verification_check()
    }, [j]);
    return s.useEffect(() => {
      "" !== _ && o.Z.showAgeVerification({
        webviewUrl: _,
        onComplete: m,
        useV1: true
      })
    }, [_, m]), <l.Modal onClose={i} transitionState={n} title={h.intl.string(h.t["9SDLnp"])} subtitle={h.intl.string(h.t["yvx///"])} actions={[{
        text: h.intl.string(h.t.dKacJy),
        onClick: j,
        variant: "secondary"
      }, {
        text: h.intl.string(h.t["54b8V1"]),
        onClick: () => (0, p.FN)(k),
        loading: f
      }]}><c.Kqy gap={8} direction={"vertical"}>{<a.z>{b.map((t, i) => {
            let {
              title: n,
              description: s
            } = t;
            return (0, e.jsx)(a.q, {
              title: n,
              description: s,
              index: i,
              listType: "numbered"
            }, i)
          })}</a.z>}{<c.Kqy gap={8} direction={"vertical"}>{<d.rT title={h.intl.string(h.t.WPwp1d)}><d.JZ title={h.intl.string(h.t.N9WJMD)} description={h.intl.string(h.t["NHq38/"])} buttonText={h.intl.string(h.t["9iy4lJ"])} titleVariant={"text-md/medium"} onButtonPress={() => window.open(x.sQ.AGE_VERIFICATION_LINK, "_blank")} /></d.rT>}{<c.Kqy align={"center"}><c.Text variant={"text-sm/medium"} color={"text-secondary"}>{h.intl.format(h.t.ZbWsOD, {
                learnMoreLink: x.sQ.LEARN_MORE_UU_APPEAL_LINK
              })}</c.Text></c.Kqy>}</c.Kqy>}</c.Kqy></l.Modal>
  }