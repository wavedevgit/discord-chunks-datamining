/** Chunk was on 6759 **/
/** chunk id: 843580, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./228524.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk397927 = require("./397927.js"),
  Chunk181658 = require("./181658.js"),
  Chunk946116 = require("./946116.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk577114 = require("./577114.js");

function u(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: u,
    categoryId: m,
    onCategoryIdChange: x,
    onSubmit: g,
    onBack: C
  } = e, [j, h] = i.useState(false), [p, f] = i.useState(null), b = async () => {
    h(true);
    try {
      await g()
    } catch (e) {
      f(new a.A(e))
    }
    h(false)
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.rQ0, {
      title: o.intl.string(o.t["5bQcoa"]),
      subtitle: o.intl.string(o.t.Ie60Wc)
    }), (0, l.jsx)(s.cwr, {
      children: (0, l.jsxs)("div", {
        className: d.S,
        children: [(0, l.jsx)(r.fs1, {
          label: o.intl.string(o.t.FFFAGt),
          value: n,
          maxLength: 200,
          placeholder: o.intl.string(o.t.VzuITC),
          onChange: u,
          error: null == p ? true : p.getAnyErrorMessage()
        }), (0, l.jsx)(r.l6P, {
          selectionMode: "single",
          label: o.intl.string(o.t.Olo8FB),
          placeholder: o.intl.string(o.t.XqMe3N),
          options: (0, c.g2)(t),
          value: m,
          onSelectionChange: x,
          maxOptionsVisible: 4
        })]
      })
    }), (0, l.jsx)(s.H7u, {
      leading: (0, l.jsx)(r.QWc, {
        size: "sm",
        variant: "secondary",
        text: o.intl.string(o.t["13/7kX"]),
        onClick: C
      }),
      actions: [{
        variant: "primary",
        text: o.intl.string(o.t.H9jxS1),
        onClick: b,
        loading: j,
        disabled: "" === n || m === c.mU.UNCATEGORIZED
      }]
    })]
  })
}