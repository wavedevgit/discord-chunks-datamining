/** Chunk was on 34191 **/
/** chunk id: 303647, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk99325 = require("./99325.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk203739 = require("./203739.js");

function h(t) {
  var e, a;
  let {
    transitionState: h,
    onClose: m,
    entry: p
  } = t, [x, b] = i.useState(null != (e = p.description) ? e : ""), [g, I] = i.useState(null != (a = p.primaryCategoryId) ? a : o.AR.UNCATEGORIZED), [j, y] = i.useState(false), [_, f] = i.useState(null), k = async () => {
    if (f(null), x !== p.description || g !== p.primaryCategoryId) {
      y(true);
      try {
        await (0, c.Dr)(p.channelId, p.guildId, x, g), y(false), m()
      } catch (t) {
        y(false), f(new r.Z(t))
      }
    }
  };
  return (0, n.jsxs)(l.Y0X, {
    transitionState: h,
    "aria-label": d.intl.string(d.t.eQ2bLi),
    parentComponent: "UpdateEntryModal",
    children: [(0, n.jsxs)(l.xBx, {
      direction: s.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, n.jsx)(l.X6q, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: d.intl.format(d.t.w9tsNj, {
          guildName: p.name
        })
      }), (0, n.jsx)(l.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: d.intl.string(d.t["vEkX//"])
      }), null != m && (0, n.jsx)(l.olH, {
        className: u.closeButton,
        onClick: m
      })]
    }), (0, n.jsxs)(l.hzk, {
      className: u.createGuild,
      paddingFix: false,
      children: [(0, n.jsx)(l.xJW, {
        title: d.intl.string(d.t.FFFAGh),
        children: (0, n.jsx)(l.Kx8, {
          value: x,
          maxLength: 200,
          placeholder: d.intl.string(d.t.VzuITE),
          onChange: b,
          error: null == _ ? true : _.getAnyErrorMessage()
        })
      }), (0, n.jsx)(l.xJW, {
        className: u.formItemSpaced,
        title: d.intl.string(d.t.Olo8FB),
        children: (0, n.jsx)(l.q4e, {
          placeholder: d.intl.string(d.t.XqMe3N),
          options: (0, o.b7)(p.channelId),
          clearable: false,
          value: g,
          onChange: I,
          maxVisibleItems: 4
        })
      })]
    }), (0, n.jsx)(l.mzw, {
      justify: s.Z.Justify.BETWEEN,
      children: (0, n.jsx)(l.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.R3BPHx),
        onClick: k,
        loading: j
      })
    })]
  })
}