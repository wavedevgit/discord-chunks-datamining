/** Chunk was on 88869 **/
/** chunk id: 201700, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk208882 = require("./208882.js"),
  Chunk946116 = require("./946116.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk550886 = require("./550886.js");

function g(t) {
  var e, a;
  let {
    transitionState: g,
    onClose: b,
    entry: p
  } = t, [h, f] = n.useState(null != (e = p.description) ? e : ""), [m, C] = n.useState(null != (a = p.primaryCategoryId) ? a : o.mU.UNCATEGORIZED), [x, v] = n.useState(false), [y, k] = n.useState(null), I = async () => {
    if (k(null), h !== p.description || m !== p.primaryCategoryId) {
      v(true);
      try {
        await (0, d.FA)(p.channelId, p.guildId, h, m), v(false), b()
      } catch (t) {
        v(false), k(new s.A(t))
      }
    }
  };
  return (0, i.jsx)(l.Modal, {
    transitionState: g,
    "aria-label": c.intl.string(c.t.eQ2bLp),
    onClose: b,
    title: c.intl.formatToPlainString(c.t.w9tsNk, {
      guildName: p.name
    }),
    subtitle: c.intl.string(c.t["vEkX/8"]),
    actions: [{
      variant: "primary",
      text: c.intl.string(c.t["R3BPH+"]),
      onClick: I,
      loading: x
    }],
    children: (0, i.jsxs)("div", {
      className: u.iW,
      children: [(0, i.jsx)(r.fs1, {
        label: c.intl.string(c.t.FFFAGt),
        value: h,
        maxLength: 200,
        placeholder: c.intl.string(c.t.VzuITC),
        onChange: f,
        error: null == y ? true : y.getAnyErrorMessage()
      }), (0, i.jsx)(r.l6P, {
        selectionMode: "single",
        label: c.intl.string(c.t.Olo8FB),
        placeholder: c.intl.string(c.t.XqMe3N),
        options: (0, o.g2)(p.channelId),
        clearable: false,
        value: m,
        onSelectionChange: C,
        maxOptionsVisible: 4
      })]
    })
  })
}