/** Chunk was on 54934 **/
/** chunk id: 701460, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js"), require("./415506.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk726542 = require("./726542.js"),
  Chunk823985 = require("./823985.js"),
  Chunk202120 = require("./202120.js"),
  Chunk388032 = require("./388032.jsx");

function d(t) {
  var n, i;
  let {
    onClose: d,
    transitionState: h,
    location: m,
    successRedirect: p,
    platformType: f
  } = t, [g, x] = a.useState(""), [S, b] = a.useState(null), [j, v] = a.useState(false), k = null != (i = null == (n = o.Z.get(f)) ? true : n.name) ? i : c.intl.string(c.t["bU/GZm"]), y = async () => {
    v(true), b(null);
    try {
      let t = await (0, u.H)(f, {
        location: m,
        successRedirect: p,
        handle: g
      });
      if (null == t) throw Error();
      d()
    } catch (t) {
      b(c.intl.string(c.t["7wbPNj"])), v(false)
    }
  }, C = (0, s.r)(f), T = (0, s.j)(g, f);
  return (0, e.jsx)(l.Modal, {
    transitionState: h,
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
      loading: j,
      disabled: !T
    }],
    children: (0, e.jsx)("form", {
      onSubmit: t => {
        t.preventDefault(), y()
      },
      children: (0, e.jsx)(r.xJW, {
        title: c.intl.string(c.t.tZ9QFR),
        error: S,
        children: (0, e.jsx)(r.oil, {
          onChange: x,
          placeholder: C,
          value: g,
          disabled: j,
          autoFocus: true
        })
      })
    })
  })
}