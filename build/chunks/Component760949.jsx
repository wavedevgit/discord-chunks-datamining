/** Chunk was on 44153 **/
/** chunk id: 760949, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk37234 = require("./37234.js"),
  Chunk479531 = require("./479531.js"),
  Chunk703656 = require("./703656.js"),
  Chunk695346 = require("./695346.js"),
  Chunk981631 = require("./981631.js"),
  Chunk345909 = require("./345909.js"),
  Chunk388032 = require("./388032.jsx");

function h(t) {
  let {
    transitionState: n,
    onClose: e
  } = t, [h, p] = a.useState(false), [S, g] = a.useState(null), k = async () => {
    g(null), p(true);
    try {
      await u.Ex.updateSetting(false), (0, o.uL)(d.Z5c.FRIENDS), (0, c.xf)(), e()
    } catch (t) {
      g(new s.Z(t).getAnyErrorMessage())
    } finally {
      p(false)
    }
  }, y = () => {
    (0, o.uL)(d.Z5c.SETTINGS("family-center")), e()
  };
  return (0, i.jsx)(l.Modal, {
    transitionState: n,
    onClose: e,
    title: f.intl.string(x.default.VGB30N),
    subtitle: f.intl.format(x.default["CrZZ+v"], {
      openSettingsHook: (t, n) => (0, i.jsx)(r.eee, {
        onClick: y,
        children: t
      }, n)
    }),
    actions: [{
      variant: "secondary",
      text: f.intl.string(f.t["ETE/oK"]),
      onClick: e
    }, {
      text: f.intl.string(x.default.cSb7U1),
      onClick: k,
      loading: h,
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