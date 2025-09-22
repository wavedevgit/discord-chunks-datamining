/** Chunk was on 34191 **/
/** chunk id: 303647, original params: t,e,a (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk481060 = require("./481060.js"),
  Chunk479531 = require("./479531.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk99325 = require("./99325.js"),
  Chunk75666 = require("./75666.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960780 = require("./960780.js");

function h(t) {
  var e, a;
  let {
    transitionState: h,
    onClose: p,
    entry: b
  } = t, [m, x] = l.useState(null != (e = b.description) ? e : ""), [g, I] = l.useState(null != (a = b.primaryCategoryId) ? a : o.AR.UNCATEGORIZED), [j, y] = l.useState(false), [k, C] = l.useState(null), _ = async () => {
    if (C(null), m !== b.description || g !== b.primaryCategoryId) {
      y(true);
      try {
        await (0, c.Dr)(b.channelId, b.guildId, m, g), y(false), p()
      } catch (t) {
        y(false), C(new r.Z(t))
      }
    }
  };
  return (0, n.jsxs)(i.Y0X, {
    transitionState: h,
    "aria-label": d.intl.string(d.t.eQ2bLi),
    parentComponent: "UpdateEntryModal",
    children: [(0, n.jsxs)(i.xBx, {
      direction: s.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, n.jsx)(i.X6q, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: d.intl.format(d.t.w9tsNj, {
          guildName: b.name
        })
      }), (0, n.jsx)(i.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: d.intl.string(d.t["vEkX//"])
      }), null != p && (0, n.jsx)(i.olH, {
        className: u.closeButton,
        onClick: p
      })]
    }), (0, n.jsxs)(i.hzk, {
      className: u.createGuild,
      paddingFix: false,
      children: [(0, n.jsx)(i.Kx8, {
        label: d.intl.string(d.t.FFFAGh),
        value: m,
        maxLength: 200,
        placeholder: d.intl.string(d.t.VzuITE),
        onChange: x,
        error: null == k ? true : k.getAnyErrorMessage()
      }), (0, n.jsx)(i.q4e, {
        label: d.intl.string(d.t.Olo8FB),
        placeholder: d.intl.string(d.t.XqMe3N),
        options: (0, o.b7)(b.channelId),
        clearable: false,
        value: g,
        onChange: I,
        maxVisibleItems: 4
      })]
    }), (0, n.jsx)(i.mzw, {
      justify: s.Z.Justify.BETWEEN,
      children: (0, n.jsx)(i.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.R3BPHx),
        onClick: _,
        loading: j
      })
    })]
  })
}