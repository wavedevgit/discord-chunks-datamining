/** Chunk was on 44153 **/
/** chunk id: 760949, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => x
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
  Chunk517319 = require("./517319.js"),
  Chunk388032 = require("./388032.jsx");

function x(t) {
  let {
    transitionState: e,
    onClose: n
  } = t, [x, h] = a.useState(false), [k, S] = a.useState(null), C = async () => {
    S(null), h(true);
    try {
      await o.Ex.updateSetting(false), (0, s.uL)(d.Z5c.FRIENDS), (0, u.default)(), n()
    } catch (t) {
      S(new c.Z(t).getAnyErrorMessage())
    } finally {
      h(false)
    }
  }, g = () => {
    (0, s.uL)(d.Z5c.SETTINGS("family-center")), n()
  };
  return (0, i.jsx)(l.Modal, {
    transitionState: e,
    onClose: n,
    title: p.intl.string(f.default.VGB30H),
    subtitle: p.intl.format(f.default["CrZZ+p"], {
      openSettingsHook: (t, e) => (0, i.jsx)(r.eee, {
        onClick: g,
        children: t
      }, e)
    }),
    actions: [{
      variant: "secondary",
      text: p.intl.string(p.t["ETE/oC"]),
      onClick: n
    }, {
      text: p.intl.string(f.default.cSb7U0),
      onClick: C,
      loading: x,
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