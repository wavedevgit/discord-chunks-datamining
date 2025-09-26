/** Chunk was on 34191 **/
/** chunk id: 303647, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk82659 = require("./82659.jsx"),
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
    onClose: g,
    entry: p
  } = t, [h, m] = l.useState(null != (e = p.description) ? e : ""), [I, _] = l.useState(null != (a = p.primaryCategoryId) ? a : c.AR.UNCATEGORIZED), [f, x] = l.useState(false), [C, v] = l.useState(null), y = async () => {
    if (v(null), h !== p.description || I !== p.primaryCategoryId) {
      x(true);
      try {
        await (0, o.Dr)(p.channelId, p.guildId, h, I), x(false), g()
      } catch (t) {
        x(false), v(new s.Z(t))
      }
    }
  };
  return (0, i.jsx)(n.Modal, {
    transitionState: b,
    "aria-label": u.intl.string(u.t.eQ2bLi),
    onClose: g,
    title: u.intl.formatToPlainString(u.t.w9tsNj, {
      guildName: p.name
    }),
    subtitle: u.intl.string(u.t["vEkX//"]),
    actions: [{
      variant: "primary",
      text: u.intl.string(u.t.R3BPHx),
      onClick: y,
      loading: f
    }],
    children: (0, i.jsxs)("div", {
      className: d.createGuild,
      children: [(0, i.jsx)(r.Kx8, {
        label: u.intl.string(u.t.FFFAGh),
        value: h,
        maxLength: 200,
        placeholder: u.intl.string(u.t.VzuITE),
        onChange: m,
        error: null == C ? true : C.getAnyErrorMessage()
      }), (0, i.jsx)(r.q4e, {
        label: u.intl.string(u.t.Olo8FB),
        placeholder: u.intl.string(u.t.XqMe3N),
        options: (0, c.b7)(p.channelId),
        clearable: false,
        value: I,
        onChange: _,
        maxVisibleItems: 4
      })]
    })
  })
}