/** Chunk was on 34191 **/
/** chunk id: 303647, original params: t,a,e (module,exports,require) **/
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
  Chunk486527 = require("./486527.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk666863 = require("./666863.js");

function p(t) {
  var a, e;
  let {
    transitionState: p,
    onClose: g,
    entry: h
  } = t, [m, C] = n.useState(null != (a = h.description) ? a : ""), [I, x] = n.useState(null != (e = h.primaryCategoryId) ? e : c.AR.UNCATEGORIZED), [y, f] = n.useState(false), [v, k] = n.useState(null), S = async () => {
    if (k(null), m !== h.description || I !== h.primaryCategoryId) {
      f(true);
      try {
        await (0, o.Dr)(h.channelId, h.guildId, m, I), f(false), g()
      } catch (t) {
        f(false), k(new s.Z(t))
      }
    }
  };
  return (0, l.jsx)(i.Modal, {
    transitionState: p,
    "aria-label": u.intl.string(u.t.eQ2bLp),
    onClose: g,
    title: u.intl.formatToPlainString(u.t.w9tsNk, {
      guildName: h.name
    }),
    subtitle: u.intl.string(u.t["vEkX/8"]),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t["R3BPH+"]),
      onClick: S,
      loading: y
    }],
    children: (0, l.jsxs)("div", {
      className: b.createGuild,
      children: [(0, l.jsx)(d.Kx8, {
        label: u.intl.string(u.t.FFFAGt),
        value: m,
        maxLength: 200,
        placeholder: u.intl.string(u.t.VzuITC),
        onChange: C,
        error: null == v ? true : v.getAnyErrorMessage()
      }), (0, l.jsx)(r.y6, {
        label: u.intl.string(u.t.Olo8FB),
        placeholder: u.intl.string(u.t.XqMe3N),
        options: (0, c.b7)(h.channelId),
        clearable: false,
        value: I,
        onChange: x,
        maxVisibleItems: 4
      })]
    })
  })
}