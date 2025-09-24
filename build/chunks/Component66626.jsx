/** Chunk was on 79764 **/
/** chunk id: 66626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./953529.js"), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960780 = require("./960780.js");

function u(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: u,
    categoryId: m,
    onCategoryIdChange: x,
    onSubmit: C,
    onClose: p,
    onBack: h
  } = e, [g, f] = s.useState(false), [j, _] = s.useState(null), b = async () => {
    f(true);
    try {
      await C()
    } catch (e) {
      _(new r.Z(e))
    }
    f(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(l.xBx, {
      direction: a.Z.Direction.VERTICAL,
      className: d.header,
      separator: false,
      children: [(0, i.jsx)(l.X6q, {
        className: d.title,
        variant: "heading-xl/semibold",
        children: c.intl.string(c.t["5bQcoa"])
      }), (0, i.jsx)(l.Text, {
        className: d.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: c.intl.string(c.t.Ie60WV)
      }), null != p && (0, i.jsx)(l.olH, {
        className: d.closeButton,
        onClick: p
      })]
    }), (0, i.jsxs)(l.hzk, {
      className: d.createGuild,
      paddingFix: false,
      children: [(0, i.jsx)(l.Kx8, {
        label: c.intl.string(c.t.FFFAGh),
        value: n,
        maxLength: 200,
        placeholder: c.intl.string(c.t.VzuITE),
        onChange: u,
        error: null == j ? true : j.getAnyErrorMessage()
      }), (0, i.jsx)(l.q4e, {
        label: c.intl.string(c.t.Olo8FB),
        placeholder: c.intl.string(c.t.XqMe3N),
        options: (0, o.b7)(t),
        clearable: false,
        value: m,
        onChange: x,
        maxVisibleItems: 4
      })]
    }), (0, i.jsxs)(l.mzw, {
      className: d.footer,
      children: [(0, i.jsx)(l.zxk, {
        variant: "primary",
        text: c.intl.string(c.t.H9jxS0),
        onClick: b,
        loading: g,
        disabled: "" === n || m === o.AR.UNCATEGORIZED
      }), (0, i.jsx)(l.Avr, {
        size: "sm",
        variant: "secondary",
        text: c.intl.string(c.t["13/7kZ"]),
        onClick: h
      })]
    })]
  })
}