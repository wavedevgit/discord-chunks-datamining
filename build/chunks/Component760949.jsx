/** Chunk was on 44153 **/
/** chunk id: 760949, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => h
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
  Chunk412297 = require("./412297.js"),
  Chunk388032 = require("./388032.jsx");

function h(t) {
  let {
    transitionState: e,
    onClose: n
  } = t, [h, p] = a.useState(false), [S, g] = a.useState(null), k = async () => {
    g(null), p(true);
    try {
      await o.Ex.updateSetting(false), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), n()
    } catch (t) {
      g(new c.Z(t).getAnyErrorMessage())
    } finally {
      p(false)
    }
  }, y = () => {
    (0, s.uL)(d.Z5c.SETTINGS("family-center")), n()
  };
  return (0, i.jsx)(l.Modal, {
    transitionState: e,
    onClose: n,
    title: f.intl.string(x.default.VGB30N),
    subtitle: f.intl.format(x.default["CrZZ+v"], {
      openSettingsHook: (t, e) => (0, i.jsx)(r.eee, {
        onClick: y,
        children: t
      }, e)
    }),
    actions: [{
      variant: "secondary",
      text: f.intl.string(f.t["ETE/oK"]),
      onClick: n
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