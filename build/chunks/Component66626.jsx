/** Chunk was on 79764 **/
/** chunk id: 66626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: d,
    categoryId: u,
    onCategoryIdChange: m,
    onSubmit: x,
    onBack: C
  } = e, [g, p] = l.useState(false), [f, j] = l.useState(null), h = async () => {
    p(true);
    try {
      await x()
    } catch (e) {
      j(new a.Z(e))
    }
    p(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(s.xBx, {
      title: c.intl.string(c.t["5bQcoa"]),
      subtitle: c.intl.string(c.t.Ie60Wc)
    }), (0, i.jsxs)(s.fef, {
      children: [(0, i.jsx)(r.Kx8, {
        label: c.intl.string(c.t.FFFAGt),
        value: n,
        maxLength: 200,
        placeholder: c.intl.string(c.t.VzuITC),
        onChange: d,
        error: null == f ? true : f.getAnyErrorMessage()
      }), (0, i.jsx)(r.q4e, {
        label: c.intl.string(c.t.Olo8FB),
        placeholder: c.intl.string(c.t.XqMe3N),
        options: (0, o.b7)(t),
        clearable: false,
        value: u,
        onChange: m,
        maxVisibleItems: 4
      })]
    }), (0, i.jsx)(s.Go$, {
      leading: (0, i.jsx)(r.Avr, {
        size: "sm",
        variant: "secondary",
        text: c.intl.string(c.t["13/7kX"]),
        onClick: C
      }),
      actions: [{
        variant: "primary",
        text: c.intl.string(c.t.H9jxS1),
        onClick: h,
        loading: g,
        disabled: "" === n || u === o.AR.UNCATEGORIZED
      }]
    })]
  })
}