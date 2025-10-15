/** Chunk was on 54934 **/
/** chunk id: 701460, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk823985 = require("./823985.js"),
  Chunk202120 = require("./202120.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  var n, i;
  let {
    onClose: d,
    transitionState: m,
    location: p,
    successRedirect: h,
    platformType: f
  } = t, [b, g] = e.useState(""), [S, v] = e.useState(null), [x, j] = e.useState(false), k = null != (i = null == (n = o.Z.get(f)) ? true : n.name) ? i : c.intl.string(c.t["bU/GZm"]), y = async () => {
    j(true), v(null);
    try {
      let t = await (0, u.H)(f, {
        location: p,
        successRedirect: h,
        handle: b
      });
      if (null == t) throw Error();
      d()
    } catch (t) {
      v(c.intl.string(c.t["7wbPNj"])), j(false)
    }
  }, C = (0, s.r)(f), T = (0, s.j)(b, f);
  return (0, a.jsx)(l.Modal, {
    transitionState: m,
    title: c.intl.formatToPlainString(c.t.ImMhq6, {
      serviceName: k
    }),
    subtitle: c.intl.formatToPlainString(c.t["7TByKi"], {
      serviceName: k
    }),
    onClose: d,
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oK"]),
      onClick: d
    }, {
      variant: "primary",
      text: c.intl.string(c.t.PDTjLC),
      onClick: y,
      loading: x,
      disabled: !T
    }],
    children: (0, a.jsx)("form", {
      onSubmit: t => {
        t.preventDefault(), y()
      },
      children: (0, a.jsx)(r.oil, {
        label: c.intl.string(c.t.tZ9QFR),
        error: S,
        onChange: g,
        placeholder: C,
        value: b,
        disabled: x,
        autoFocus: true
      })
    })
  })
}