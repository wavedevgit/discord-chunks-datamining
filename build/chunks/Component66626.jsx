/** Chunk was on 79764 **/
/** chunk id: 66626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk369585 = require("./369585.jsx"),
  Chunk103866 = require("./103866.jsx"),
  Chunk37148 = require("./37148.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx");

function m(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: m,
    categoryId: x,
    onCategoryIdChange: C,
    onSubmit: g,
    onBack: p
  } = e, [f, j] = l.useState(false), [h, _] = l.useState(null), b = async () => {
    j(true);
    try {
      await g()
    } catch (e) {
      _(new c.Z(e))
    }
    j(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsx)(a.x, {
      title: u.intl.string(u.t["5bQcoa"]),
      subtitle: u.intl.string(u.t.Ie60WV)
    }), (0, i.jsxs)(r.f, {
      children: [(0, i.jsx)(o.Kx8, {
        label: u.intl.string(u.t.FFFAGh),
        value: n,
        maxLength: 200,
        placeholder: u.intl.string(u.t.VzuITE),
        onChange: m,
        error: null == h ? true : h.getAnyErrorMessage()
      }), (0, i.jsx)(o.q4e, {
        label: u.intl.string(u.t.Olo8FB),
        placeholder: u.intl.string(u.t.XqMe3N),
        options: (0, d.b7)(t),
        clearable: false,
        value: x,
        onChange: C,
        maxVisibleItems: 4
      })]
    }), (0, i.jsx)(s.G, {
      leading: (0, i.jsx)(o.Avr, {
        size: "sm",
        variant: "secondary",
        text: u.intl.string(u.t["13/7kZ"]),
        onClick: p
      }),
      actions: [{
        variant: "primary",
        text: u.intl.string(u.t.H9jxS0),
        onClick: b,
        loading: f,
        disabled: "" === n || x === d.AR.UNCATEGORIZED
      }]
    })]
  })
}