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
    onClose: p,
    entry: b
  } = t, [h, m] = l.useState(null != (e = b.description) ? e : ""), [C, x] = l.useState(null != (a = b.primaryCategoryId) ? a : c.mU.UNCATEGORIZED), [_, v] = l.useState(false), [y, I] = l.useState(null), k = async () => {
    if (I(null), h !== b.description || C !== b.primaryCategoryId) {
      v(true);
      try {
        await (0, o.FA)(b.channelId, b.guildId, h, C), v(false), p()
      } catch (t) {
        v(false), I(new s.A(t))
      }
    }
  };
  return (0, i.jsx)(n.Modal, {
    transitionState: g,
    "aria-label": d.intl.string(d.t.eQ2bLp),
    onClose: p,
    title: d.intl.formatToPlainString(d.t.w9tsNk, {
      guildName: b.name
    }),
    subtitle: d.intl.string(d.t["vEkX/8"]),
    actions: [{
      variant: "primary",
      text: d.intl.string(d.t["R3BPH+"]),
      onClick: k,
      loading: _
    }],
    children: (0, i.jsxs)("div", {
      className: u.iW,
      children: [(0, i.jsx)(r.fs1, {
        label: d.intl.string(d.t.FFFAGt),
        value: h,
        maxLength: 200,
        placeholder: d.intl.string(d.t.VzuITC),
        onChange: m,
        error: null == y ? true : y.getAnyErrorMessage()
      }), (0, i.jsx)(r.l6P, {
        selectionMode: "single",
        label: d.intl.string(d.t.Olo8FB),
        placeholder: d.intl.string(d.t.XqMe3N),
        options: (0, c.g2)(b.channelId),
        clearable: false,
        value: C,
        onSelectionChange: x,
        maxOptionsVisible: 4
      })]
    })
  })
}