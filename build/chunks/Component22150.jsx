/** Chunk was on 9343 **/
/** chunk id: 22150, original params: t,n,e (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk393869 = require("./393869.js"),
  Chunk594174 = require("./594174.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk780187 = require("./780187.js"),
  Chunk800010 = require("./800010.js");

function _(t) {
  let {
    onNext: n,
    onClose: e,
    transitionState: _
  } = t, [C, d] = i.useState(false), x = (0, a.e7)([c.default], () => c.default.getCurrentUser()), N = async t => {
    t.preventDefault(), d(true);
    try {
      await (0, o.i)(), n()
    } catch (n) {
      let t = new s.Z(n).getAnyErrorMessage();
      null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
    } finally {
      d(false)
    }
  };
  return (0, r.jsx)(l.Ioy, {
    graphic: {
      type: "image",
      src: A
    },
    title: u.intl.string(u.t.uFxYq0),
    onClose: e,
    transitionState: _,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: e
    }, {
      variant: "primary",
      text: u.intl.string(u.t.rXV81H),
      loading: C,
      onClick: N
    }],
    children: (0, r.jsx)(l.Text, {
      className: E.description,
      variant: "text-md/normal",
      children: u.intl.format(u.t.oMFSgi, {
        oldEmail: null == x ? true : x.email
      })
    })
  })
}