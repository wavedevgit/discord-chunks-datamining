/** Chunk was on 79764 **/
/** chunk id: 66626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk199849 = require("./199849.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: u,
    categoryId: m,
    onCategoryIdChange: x,
    onSubmit: C,
    onBack: g
  } = e, [p, f] = l.useState(false), [j, h] = l.useState(null), b = async () => {
    f(true);
    try {
      await C()
    } catch (e) {
      h(new o.Z(e))
    }
    f(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.xBx, {
      title: d.intl.string(d.t["5bQcoa"]),
      subtitle: d.intl.string(d.t.Ie60Wc)
    }), (0, i.jsxs)(s.fef, {
      children: [(0, i.jsx)(a.Kx8, {
        label: d.intl.string(d.t.FFFAGt),
        value: n,
        maxLength: 200,
        placeholder: d.intl.string(d.t.VzuITC),
        onChange: u,
        error: null == j ? true : j.getAnyErrorMessage()
      }), (0, i.jsx)(r.y6, {
        label: d.intl.string(d.t.Olo8FB),
        placeholder: d.intl.string(d.t.XqMe3N),
        options: (0, c.b7)(t),
        clearable: false,
        value: m,
        onChange: x,
        maxVisibleItems: 4
      })]
    }), (0, i.jsx)(s.Go$, {
      leading: (0, i.jsx)(a.Avr, {
        size: "sm",
        variant: "secondary",
        text: d.intl.string(d.t["13/7kX"]),
        onClick: g
      }),
      actions: [{
        variant: "primary",
        text: d.intl.string(d.t.H9jxS1),
        onClick: b,
        loading: p,
        disabled: "" === n || m === c.AR.UNCATEGORIZED
      }]
    })]
  })
}