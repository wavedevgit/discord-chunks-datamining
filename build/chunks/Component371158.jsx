/** Chunk was on 67195 **/
/** chunk id: 371158, original params: t,e,i (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk976860 = require("./976860.js"),
  Chunk253932 = require("./253932.js"),
  Chunk12901 = require("./12901.js"),
  Chunk652215 = require("./652215.js"),
  Chunk842130 = require("./842130.js"),
  Chunk985018 = require("./985018.jsx");

function h(t) {
  let {
    transitionState: e,
    onClose: i
  } = t, [h, x] = a.useState(false), [k, S] = a.useState(null), C = async () => {
    S(null), x(true);
    try {
      await o.dm.updateSetting(false), (0, s.pX)(u.BVt.FRIENDS), (0, d.default)(), i()
    } catch (t) {
      S(new c.A(t).getAnyErrorMessage())
    } finally {
      x(false)
    }
  }, g = () => {
    (0, s.pX)(u.BVt.SETTINGS("family-center")), i()
  };
  return (0, n.jsx)(l.Modal, {
    transitionState: e,
    onClose: i,
    title: f.intl.string(p.default.VGB30H),
    subtitle: f.intl.format(p.default["CrZZ+p"], {
      openSettingsHook: (t, e) => (0, n.jsx)(r.MzZ, {
        onClick: g,
        children: t
      }, e)
    }),
    actions: [{
      variant: "secondary",
      text: f.intl.string(f.t["ETE/oC"]),
      onClick: i
    }, {
      text: f.intl.string(p.default.cSb7U0),
      onClick: C,
      loading: h,
      variant: "critical-primary"
    }],
    children: (0, n.jsx)("div", {
      children: null != k && (0, n.jsx)(r.Text, {
        variant: "text-xs/normal",
        color: "text-feedback-critical",
        children: k
      })
    })
  })
}