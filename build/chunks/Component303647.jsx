/** Chunk was on 34191 **/
/** chunk id: 303647, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk99325 = require("./99325.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960780 = require("./960780.js");

function p(t) {
  var e, a;
  let {
    transitionState: p,
    onClose: g,
    entry: h
  } = t, [m, C] = n.useState(null != (e = h.description) ? e : ""), [I, x] = n.useState(null != (a = h.primaryCategoryId) ? a : u.AR.UNCATEGORIZED), [y, _] = n.useState(false), [f, v] = n.useState(null), k = async () => {
    if (v(null), m !== h.description || I !== h.primaryCategoryId) {
      _(true);
      try {
        await (0, c.Dr)(h.channelId, h.guildId, m, I), _(false), g()
      } catch (t) {
        _(false), v(new o.Z(t))
      }
    }
  };
  return (0, l.jsx)(i.Modal, {
    transitionState: p,
    "aria-label": d.intl.string(d.t.eQ2bLp),
    onClose: g,
    title: d.intl.formatToPlainString(d.t.w9tsNk, {
      guildName: h.name
    }),
    subtitle: d.intl.string(d.t["vEkX/8"]),
    actions: [{
      variant: "primary",
      text: d.intl.string(d.t["R3BPH+"]),
      onClick: k,
      loading: y
    }],
    children: (0, l.jsxs)("div", {
      className: b.createGuild,
      children: [(0, l.jsx)(s.Kx8, {
        label: d.intl.string(d.t.FFFAGt),
        value: m,
        maxLength: 200,
        placeholder: d.intl.string(d.t.VzuITC),
        onChange: C,
        error: null == f ? true : f.getAnyErrorMessage()
      }), (0, l.jsx)(r.y6, {
        label: d.intl.string(d.t.Olo8FB),
        placeholder: d.intl.string(d.t.XqMe3N),
        options: (0, u.b7)(h.channelId),
        clearable: false,
        value: I,
        onChange: x,
        maxVisibleItems: 4
      })]
    })
  })
}