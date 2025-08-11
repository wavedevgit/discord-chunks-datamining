/** Chunk was on 94005 **/
/** chunk id: 144462, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk273504 = require("./273504.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk831242 = require("./831242.js");

function h(e) {
  let {
    initialCustomMessage: t,
    onSubmit: n,
    onClose: h,
    transitionState: x
  } = e, m = (0, r.Dt)(), [u, g] = s.useState(t);
  return (0, a.jsxs)(o.Y0X, {
    transitionState: x,
    "aria-labelledby": m,
    size: o.CgR.SMALL,
    parentComponent: "AutomodActionBlockMessageModal",
    children: [(0, a.jsxs)(o.hzk, {
      className: d.actionContentContainer,
      children: [(0, a.jsx)(o.X6q, {
        id: m,
        color: "header-primary",
        variant: "heading-md/semibold",
        className: d.header,
        children: c.intl.string(c.t.Df4aUF)
      }), (0, a.jsx)(o.Text, {
        color: "header-secondary",
        variant: "text-sm/normal",
        children: c.intl.string(c.t.eOWEmJ)
      }), (0, a.jsx)(i.iS, {
        className: d.customMessageTextArea,
        placeholder: c.intl.string(c.t.gDZw7O),
        value: u,
        onChange: g,
        maxLength: l._6
      })]
    }), (0, a.jsxs)(o.mzw, {
      children: [(0, a.jsx)(o.zxk, {
        variant: "primary",
        size: "sm",
        text: c.intl.string(c.t.bt75u7),
        onClick: () => {
          n(u)
        }
      }), (0, a.jsx)(i.zx, {
        onClick: () => {
          h()
        },
        color: i.zx.Colors.TRANSPARENT,
        look: i.zx.Looks.LINK,
        children: c.intl.string(c.t["ETE/oK"])
      })]
    })]
  })
}