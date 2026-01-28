/** Chunk was on 83269 **/
/** chunk id: 405015, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  A: () => _
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk780333 = require("./780333.js"),
  Chunk287809 = require("./287809.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk297002 = require("./297002.js"),
  Chunk222872 = require("./222872.js");

function _(t) {
  let {
    onNext: e,
    onClose: n,
    transitionState: _
  } = t, [C, d] = r.useState(false), g = (0, i.bG)([c.default], () => c.default.getCurrentUser()), N = async t => {
    t.preventDefault(), d(true);
    try {
      await (0, o.B)(), e()
    } catch (e) {
      let t = new s.A(e).getAnyErrorMessage();
      null != t && (0, l.showToast)((0, l.createToast)(t, l.ToastType.FAILURE))
    } finally {
      d(false)
    }
  };
  return (0, a.jsx)(l.kpP, {
    graphic: {
      type: "image",
      src: A
    },
    title: u.intl.string(u.t.uFxYq0),
    onClose: n,
    transitionState: _,
    actions: [{
      variant: "secondary",
      text: u.intl.string(u.t["ETE/oC"]),
      onClick: n
    }, {
      variant: "primary",
      text: u.intl.string(u.t.rXV81H),
      loading: C,
      onClick: N
    }],
    children: (0, a.jsx)(l.Text, {
      className: E.h_,
      variant: "text-md/normal",
      children: u.intl.format(u.t.oMFSgi, {
        oldEmail: null == g ? true : g.email
      })
    })
  })
}