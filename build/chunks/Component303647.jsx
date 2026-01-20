/** Chunk was on 34191 **/
/** chunk id: 303647, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk99325 = require("./99325.js"),
  Chunk486527 = require("./486527.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk666863 = require("./666863.js");

function p(t) {
  var e, a;
  let {
    transitionState: p,
    onClose: b,
    entry: g
  } = t, [h, C] = n.useState(null != (e = g.description) ? e : ""), [m, x] = n.useState(null != (a = g.primaryCategoryId) ? a : s.AR.UNCATEGORIZED), [I, f] = n.useState(false), [v, y] = n.useState(null), k = async () => {
    if (y(null), h !== g.description || m !== g.primaryCategoryId) {
      f(true);
      try {
        await (0, o.Dr)(g.channelId, g.guildId, h, m), f(false), b()
      } catch (t) {
        f(false), y(new d.Z(t))
      }
    }
  };
  return (0, l.jsx)(i.Modal, {
    transitionState: p,
    "aria-label": c.intl.string(c.t.eQ2bLp),
    onClose: b,
    title: c.intl.formatToPlainString(c.t.w9tsNk, {
      guildName: g.name
    }),
    subtitle: c.intl.string(c.t["vEkX/8"]),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t["R3BPH+"]),
      onClick: k,
      loading: I
    }],
    children: (0, l.jsxs)("div", {
      className: u.createGuild,
      children: [(0, l.jsx)(r.Kx8, {
        label: c.intl.string(c.t.FFFAGt),
        value: h,
        maxLength: 200,
        placeholder: c.intl.string(c.t.VzuITC),
        onChange: C,
        error: null == v ? true : v.getAnyErrorMessage()
      }), (0, l.jsx)(r.PhF, {
        selectionMode: "single",
        label: c.intl.string(c.t.Olo8FB),
        placeholder: c.intl.string(c.t.XqMe3N),
        options: (0, s.b7)(g.channelId),
        clearable: false,
        value: m,
        onSelectionChange: x,
        maxOptionsVisible: 4
      })]
    })
  })
}