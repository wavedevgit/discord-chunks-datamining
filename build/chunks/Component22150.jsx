/** Chunk was on 9343 **/
/** chunk id: 22150, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780187 = require("./780187.js"),
  Chunk800010 = require("./800010.js");

function d(t) {
  let {
    onNext: e,
    onClose: n,
    transitionState: d
  } = t, [A, x] = r.useState(false), C = (0, i.e7)([c.default], () => c.default.getCurrentUser()), g = async t => {
    t.preventDefault(), x(true);
    try {
      await (0, o.i)(), e()
    } catch (e) {
      let t = new s.Z(e).getAnyErrorMessage();
      null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
    } finally {
      x(false)
    }
  };
  return (0, a.jsx)(l.Ioy, {
    graphic: {
      type: "image",
      src: _
    },
    title: u.intl.string(u.t.uFxYq0),
    onClose: n,
    transitionState: d,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: u.intl.string(u.t.rXV81H),
      loading: A,
      onClick: g
    }],
    children: (0, a.jsx)(l.Text, {
      className: E.description,
      variant: "text-md/normal",
      children: u.intl.format(u.t.oMFSgi, {
        oldEmail: null == C ? true : C.email
      })
    })
  })
}