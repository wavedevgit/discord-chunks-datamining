/** Chunk was on 34191 **/
/** chunk id: 303647, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk99325 = require("./99325.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960780 = require("./960780.js");

function b(t) {
  var e, a;
  let {
    transitionState: b,
    onClose: p,
    entry: g
  } = t, [h, m] = n.useState(null != (e = g.description) ? e : ""), [C, I] = n.useState(null != (a = g.primaryCategoryId) ? a : c.AR.UNCATEGORIZED), [x, _] = n.useState(false), [f, v] = n.useState(null), y = async () => {
    if (v(null), h !== g.description || C !== g.primaryCategoryId) {
      _(true);
      try {
        await (0, o.Dr)(g.channelId, g.guildId, h, C), _(false), p()
      } catch (t) {
        _(false), v(new s.Z(t))
      }
    }
  };
  return (0, l.jsx)(i.Modal, {
    transitionState: b,
    "aria-label": u.intl.string(u.t.eQ2bLp),
    onClose: p,
    title: u.intl.formatToPlainString(u.t.w9tsNk, {
      guildName: g.name
    }),
    subtitle: u.intl.string(u.t["vEkX/8"]),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t["R3BPH+"]),
      onClick: y,
      loading: x
    }],
    children: (0, l.jsxs)("div", {
      className: d.createGuild,
      children: [(0, l.jsx)(r.Kx8, {
        label: u.intl.string(u.t.FFFAGt),
        value: h,
        maxLength: 200,
        placeholder: u.intl.string(u.t.VzuITC),
        onChange: m,
        error: null == f ? true : f.getAnyErrorMessage()
      }), (0, l.jsx)(r.q4e, {
        label: u.intl.string(u.t.Olo8FB),
        placeholder: u.intl.string(u.t.XqMe3N),
        options: (0, c.b7)(g.channelId),
        clearable: false,
        value: C,
        onChange: I,
        maxVisibleItems: 4
      })]
    })
  })
}