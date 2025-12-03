/** Chunk was on 44153 **/
/** chunk id: 760949, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk703656 = require("./703656.js"),
  Chunk695346 = require("./695346.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk744038 = require("./744038.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    transitionState: n,
    onClose: e
  } = t, [p, x] = a.useState(false), [k, S] = a.useState(null), C = async () => {
    S(null), x(true);
    try {
      await o.Ex.updateSetting(false), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), e()
    } catch (t) {
      S(new c.Z(t).getAnyErrorMessage())
    } finally {
      x(false)
    }
  }, g = () => {
    (0, s.uL)(d.Z5c.SETTINGS("family-center")), e()
  };
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    onClose: e,
    title: h.intl.string(f.default.VGB30H),
    subtitle: h.intl.format(f.default["CrZZ+p"], {
      openSettingsHook: (t, n) => (0, i.jsx)(r.Anchor, {
        onClick: g,
        children: t
      }, n)
    }),
    actions: [{
      variant: "secondary",
      text: h.intl.string(h.t["ETE/oC"]),
      onClick: e
    }, {
      text: h.intl.string(f.default.cSb7U0),
      onClick: C,
      loading: p,
      variant: "critical-primary"
    }],
    children: (0, i.jsx)("div", {
      children: null != k && (0, i.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: k
      })
    })
  })
}