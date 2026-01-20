/** Chunk was on 79764 **/
/** chunk id: 66626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js"), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk486527 = require("./486527.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk69737 = require("./69737.js");

function u(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: u,
    categoryId: f,
    onCategoryIdChange: m,
    onSubmit: x,
    onBack: g
  } = e, [C, j] = a.useState(false), [p, b] = a.useState(null), h = async () => {
    j(true);
    try {
      await x()
    } catch (e) {
      b(new s.Z(e))
    }
    j(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(l.xBx, {
      title: c.intl.string(c.t["5bQcoa"]),
      subtitle: c.intl.string(c.t.Ie60Wc)
    }), (0, i.jsx)(l.fef, {
      children: (0, i.jsxs)("div", {
        className: d.modalBody,
        children: [(0, i.jsx)(r.Kx8, {
          label: c.intl.string(c.t.FFFAGt),
          value: n,
          maxLength: 200,
          placeholder: c.intl.string(c.t.VzuITC),
          onChange: u,
          error: null == p ? true : p.getAnyErrorMessage()
        }), (0, i.jsx)(r.PhF, {
          selectionMode: "single",
          label: c.intl.string(c.t.Olo8FB),
          placeholder: c.intl.string(c.t.XqMe3N),
          options: (0, o.b7)(t),
          value: f,
          onSelectionChange: m,
          maxOptionsVisible: 4
        })]
      })
    }), (0, i.jsx)(l.Go$, {
      leading: (0, i.jsx)(r.Avr, {
        size: "sm",
        variant: "secondary",
        text: c.intl.string(c.t["13/7kX"]),
        onClick: g
      }),
      actions: [{
        variant: "primary",
        text: c.intl.string(c.t.H9jxS1),
        onClick: h,
        loading: C,
        disabled: "" === n || f === o.AR.UNCATEGORIZED
      }]
    })]
  })
}