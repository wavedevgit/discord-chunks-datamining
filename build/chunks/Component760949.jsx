/** Chunk was on 44153 **/
/** chunk id: 760949, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => x
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk703656 = require("./703656.js"),
  Chunk695346 = require("./695346.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk597754 = require("./597754.js"),
  Chunk388032 = require("./388032.jsx");

function x(t) {
  let {
    transitionState: n,
    onClose: e
  } = t, [x, f] = a.useState(false), [S, g] = a.useState(null), k = async () => {
    g(null), f(true);
    try {
      await o.Ex.updateSetting(false), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), e()
    } catch (t) {
      g(new c.Z(t).getAnyErrorMessage())
    } finally {
      f(false)
    }
  }, C = () => {
    (0, s.uL)(d.Z5c.SETTINGS("family-center")), e()
  };
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    onClose: e,
    title: p.intl.string(h.default.VGB30H),
    subtitle: p.intl.format(h.default["CrZZ+p"], {
      openSettingsHook: (t, n) => (0, i.jsx)(r.Anchor, {
        onClick: C,
        children: t
      }, n)
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: e
    }, {
      text: p.intl.string(h.default.cSb7U0),
      onClick: k,
      loading: x,
      variant: "critical-primary"
    }],
    children: (0, i.jsx)("div", {
      children: null != S && (0, i.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-danger",
        children: S
      })
    })
  })
}