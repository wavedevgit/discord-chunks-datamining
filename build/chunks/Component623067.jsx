/** Chunk was on 81288 **/
/** chunk id: 623067, original params: t,n,a (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./896048.js"), require("./65821.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk573648 = require("./573648.js"),
  Chunk777574 = require("./777574.js"),
  Chunk738104 = require("./738104.js"),
  Chunk985018 = require("./985018.jsx");

function d(t) {
  var n, a;
  let {
    onClose: d,
    transitionState: g,
    location: h,
    successRedirect: m,
    platformType: p
  } = t, [f, b] = i.useState(""), [x, S] = i.useState(null), [k, v] = i.useState(false), y = null != (n = null == (a = s.A.get(p)) ? true : a.name) ? n : c.intl.string(c.t["bU/GZm"]), C = async () => {
    v(true), S(null);
    try {
      let t = await (0, u.d)(p, {
        location: h,
        successRedirect: m,
        handle: f
      });
      if (null == t) throw Error();
      d()
    } catch (t) {
      S(c.intl.string(c.t["7wbPNl"])), v(false)
    }
  }, T = (0, o.X)(p), w = (0, o.x)(f, p);
  return (0, e.jsx)(l.Modal, {
    transitionState: g,
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
      loading: k,
      disabled: !w
    }],
    children: (0, e.jsx)("form", {
      onSubmit: t => {
        t.preventDefault(), C()
      },
      children: (0, e.jsx)(r.ksK, {
        label: c.intl.string(c.t.tZ9QFR),
        error: x,
        onChange: b,
        placeholder: T,
        value: f,
        disabled: k,
        autoFocus: true
      })
    })
  })
}