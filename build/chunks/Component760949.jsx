/** Chunk was on 44153 **/
/** chunk id: 760949, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk703656 = require("./703656.js"),
  Chunk695346 = require("./695346.js"),
  Chunk342386 = require("./342386.js"),
  Chunk981631 = require("./981631.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx");

function p(t) {
  let {
    transitionState: n,
    onClose: e
  } = t, [p, f] = a.useState(false), [S, g] = a.useState(null), k = async () => {
    g(null), f(true);
    try {
      await o.Ex.updateSetting(false), (0, s.uL)(d.Z5c.FRIENDS), (0, u.Z)(), e()
    } catch (t) {
      g(new c.Z(t).getAnyErrorMessage())
    } finally {
      f(false)
    }
  }, y = () => {
    (0, s.uL)(d.Z5c.SETTINGS("family-center")), e()
  };
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    onClose: e,
    title: h.intl.string(x.default.VGB30N),
    subtitle: h.intl.format(x.default["CrZZ+v"], {
      openSettingsHook: (t, n) => (0, i.jsx)(r.eee, {
        onClick: y,
        children: t
      }, n)
    }),
    actions: [{
      variant: "secondary",
      text: h.intl.string(h.t["ETE/oK"]),
      onClick: e
    }, {
      text: h.intl.string(x.default.cSb7U1),
      onClick: k,
      loading: p,
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