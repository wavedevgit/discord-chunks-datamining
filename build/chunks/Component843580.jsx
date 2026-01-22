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
    categoryId: x,
    onCategoryIdChange: m,
    onSubmit: g,
    onBack: C
  } = e, [j, b] = i.useState(false), [f, h] = i.useState(null), p = async () => {
    b(true);
    try {
      await g()
    } catch (e) {
      h(new r.A(e))
    }
    b(false)
  };
  return (0, l.jsxs)(l.Fragment, {
    children: [(0, l.jsx)(s.rQ0, {
      title: d.intl.string(d.t["5bQcoa"]),
      subtitle: d.intl.string(d.t.Ie60Wc)
    }), (0, l.jsx)(s.cwr, {
      children: (0, l.jsxs)("div", {
        className: o.S,
        children: [(0, l.jsx)(a.fs1, {
          label: d.intl.string(d.t.FFFAGt),
          value: n,
          maxLength: 200,
          placeholder: d.intl.string(d.t.VzuITC),
          onChange: u,
          error: null == f ? true : f.getAnyErrorMessage()
        }), (0, l.jsx)(a.l6P, {
          selectionMode: "single",
          label: d.intl.string(d.t.Olo8FB),
          placeholder: d.intl.string(d.t.XqMe3N),
          options: (0, c.g2)(t),
          value: x,
          onSelectionChange: m,
          maxOptionsVisible: 4
        })]
      })
    }), (0, l.jsx)(s.H7u, {
      leading: (0, l.jsx)(a.QWc, {
        size: "sm",
        variant: "secondary",
        text: d.intl.string(d.t["13/7kX"]),
        onClick: C
      }),
      actions: [{
        variant: "primary",
        text: d.intl.string(d.t.H9jxS1),
        onClick: p,
        loading: j,
        disabled: "" === n || x === c.mU.UNCATEGORIZED
      }]
    })]
  })
}