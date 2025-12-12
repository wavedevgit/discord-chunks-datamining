/** Chunk was on 79764 **/
/** chunk id: 66626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk486527 = require("./486527.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk69737 = require("./69737.js");

function f(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: f,
    categoryId: m,
    onCategoryIdChange: x,
    onSubmit: g,
    onBack: C
  } = e, [j, p] = a.useState(false), [b, h] = a.useState(null), L = async () => {
    p(true);
    try {
      await g()
    } catch (e) {
      h(new o.Z(e))
    }
    p(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.xBx, {
      title: d.intl.string(d.t["5bQcoa"]),
      subtitle: d.intl.string(d.t.Ie60Wc)
    }), (0, i.jsx)(l.fef, {
      children: (0, i.jsxs)("div", {
        className: u.modalBody,
        children: [(0, i.jsx)(s.Kx8, {
          label: d.intl.string(d.t.FFFAGt),
          value: n,
          maxLength: 200,
          placeholder: d.intl.string(d.t.VzuITC),
          onChange: f,
          error: null == b ? true : b.getAnyErrorMessage()
        }), (0, i.jsx)(r.y6, {
          label: d.intl.string(d.t.Olo8FB),
          placeholder: d.intl.string(d.t.XqMe3N),
          options: (0, c.b7)(t),
          clearable: false,
          value: m,
          onChange: x,
          maxVisibleItems: 4
        })]
      })
    }), (0, i.jsx)(l.Go$, {
      leading: (0, i.jsx)(s.Avr, {
        size: "sm",
        variant: "secondary",
        text: d.intl.string(d.t["13/7kX"]),
        onClick: C
      }),
      actions: [{
        variant: "primary",
        text: d.intl.string(d.t.H9jxS1),
        onClick: L,
        loading: j,
        disabled: "" === n || m === c.AR.UNCATEGORIZED
      }]
    })]
  })
}