/** Chunk was on 79764 **/
/** chunk id: 66626, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960780 = require("./960780.js");

function m(e) {
  let {
    directoryChannelId: t,
    description: n,
    onDescriptionChange: m,
    categoryId: x,
    onCategoryIdChange: C,
    onSubmit: h,
    onClose: p,
    onBack: g
  } = e, [f, j] = s.useState(false), [_, b] = s.useState(null), L = async () => {
    j(true);
    try {
      await h()
    } catch (e) {
      b(new r.Z(e))
    }
    j(false)
  };
  return (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(a.xBx, {
      direction: o.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, i.jsx)(a.X6q, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: d.intl.string(d.t["5bQcoa"])
      }), (0, i.jsx)(a.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: d.intl.string(d.t.Ie60WV)
      }), null != p && (0, i.jsx)(a.olH, {
        className: u.closeButton,
        onClick: p
      })]
    }), (0, i.jsxs)(a.hzk, {
      className: u.createGuild,
      paddingFix: false,
      children: [(0, i.jsx)(a.xJW, {
        title: d.intl.string(d.t.FFFAGh),
        children: (0, i.jsx)(a.Kx8, {
          value: n,
          maxLength: 200,
          placeholder: d.intl.string(d.t.VzuITE),
          onChange: m,
          error: null == _ ? true : _.getAnyErrorMessage()
        })
      }), (0, i.jsx)(a.xJW, {
        className: u.formItemSpaced,
        title: d.intl.string(d.t.Olo8FB),
        children: (0, i.jsx)(a.q4e, {
          placeholder: d.intl.string(d.t.XqMe3N),
          options: (0, c.b7)(t),
          clearable: false,
          value: x,
          onChange: C,
          maxVisibleItems: 4
        })
      })]
    }), (0, i.jsxs)(a.mzw, {
      justify: o.Z.Justify.BETWEEN,
      children: [(0, i.jsx)(a.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.H9jxS0),
        onClick: L,
        loading: f,
        disabled: "" === n || x === c.AR.UNCATEGORIZED
      }), (0, i.jsx)(l.zx, {
        className: u.backButton,
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.MIN,
        onClick: g,
        children: d.intl.string(d.t["13/7kZ"])
      })]
    })]
  })
}