/** Chunk was on 34191 **/
/** chunk id: 303647, original params: e,t,a (module,exports,require) **/
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

function h(e) {
  var t, a;
  let {
    transitionState: h,
    onClose: p,
    entry: m
  } = e, [x, b] = i.useState(null != (t = m.description) ? t : ""), [g, I] = i.useState(null != (a = m.primaryCategoryId) ? a : o.AR.UNCATEGORIZED), [f, j] = i.useState(false), [y, C] = i.useState(null), _ = async () => {
    if (C(null), x !== m.description || g !== m.primaryCategoryId) {
      j(true);
      try {
        await (0, c.Dr)(m.channelId, m.guildId, x, g), j(false), p()
      } catch (e) {
        j(false), C(new r.Z(e))
      }
    }
  };
  return (0, l.jsxs)(n.Y0X, {
    transitionState: h,
    "aria-label": d.intl.string(d.t.eQ2bLi),
    parentComponent: "UpdateEntryModal",
    children: [(0, l.jsxs)(n.xBx, {
      direction: s.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, l.jsx)(n.X6q, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: d.intl.format(d.t.w9tsNj, {
          guildName: m.name
        })
      }), (0, l.jsx)(n.Text, {
        className: u.subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: d.intl.string(d.t["vEkX//"])
      }), null != p && (0, l.jsx)(n.olH, {
        className: u.closeButton,
        onClick: p
      })]
    }), (0, l.jsxs)(n.hzk, {
      className: u.createGuild,
      paddingFix: false,
      children: [(0, l.jsx)(n.Kx8, {
        label: d.intl.string(d.t.FFFAGh),
        value: x,
        maxLength: 200,
        placeholder: d.intl.string(d.t.VzuITE),
        onChange: b,
        error: null == y ? true : y.getAnyErrorMessage()
      }), (0, l.jsx)(n.q4e, {
        label: d.intl.string(d.t.Olo8FB),
        placeholder: d.intl.string(d.t.XqMe3N),
        options: (0, o.b7)(m.channelId),
        clearable: false,
        value: g,
        onChange: I,
        maxVisibleItems: 4
      })]
    }), (0, l.jsx)(n.mzw, {
      justify: s.Z.Justify.BETWEEN,
      children: (0, l.jsx)(n.zxk, {
        variant: "primary",
        text: d.intl.string(d.t.R3BPHx),
        onClick: _,
        loading: f
      })
    })]
  })
}