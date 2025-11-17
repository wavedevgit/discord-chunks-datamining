/** Chunk was on 54934 **/
/** chunk id: 701460, original params: t,n,i (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./388685.js"), require("./415506.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    transitionState: h,
    location: m,
    successRedirect: p,
    platformType: f
  } = t, [b, g] = l.useState(""), [S, v] = l.useState(null), [x, k] = l.useState(false), y = null != (i = null == (n = o.Z.get(f)) ? true : n.name) ? i : c.intl.string(c.t["bU/GZm"]), C = async () => {
    k(true), v(null);
    try {
      let t = await (0, u.H)(f, {
        location: m,
        successRedirect: p,
        handle: b
      });
      if (null == t) throw Error();
      d()
    } catch (t) {
      v(c.intl.string(c.t["7wbPNl"])), k(false)
    }
  }, T = (0, s.r)(f), j = (0, s.j)(b, f);
  return (0, a.jsx)(e.Modal, {
    transitionState: h,
    title: c.intl.formatToPlainString(c.t["ImMhq+"], {
      serviceName: y
    }),
    subtitle: c.intl.formatToPlainString(c.t["7TByKh"], {
      serviceName: y
    }),
    onClose: d,
    actions: [{
      variant: "secondary",
      text: c.intl.string(c.t["ETE/oC"]),
      onClick: d
    }, {
      variant: "primary",
      text: c.intl.string(c.t.PDTjLN),
      onClick: C,
      loading: x,
      disabled: !j
    }],
    children: (0, a.jsx)("form", {
      onSubmit: t => {
        t.preventDefault(), C()
      },
      children: (0, a.jsx)(r.oil, {
        label: c.intl.string(c.t.tZ9QFR),
        error: S,
        onChange: g,
        placeholder: T,
        value: b,
        disabled: x,
        autoFocus: true
      })
    })
  })
}