/** Chunk was on 79764 **/
/** chunk id: 892322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => x
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk377957 = require("./377957.js");

function x(e) {
  let {
    directoryGuildName: t,
    guildToAdd: n,
    isExistingGuildFlow: s,
    onClose: x
  } = e;
  return l()(null != n, "Missing guild in Hub add guild confirmation"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(r.xBx, {
      direction: o.Z.Direction.VERTICAL,
      className: m.header,
      separator: false,
      children: [null != x && (0, i.jsx)(r.olH, {
        className: m.closeButton,
        onClick: x
      }), (0, i.jsx)(c.Z, {
        guild: n,
        size: c.Z.Sizes.XLARGE,
        active: true
      }), (0, i.jsx)(r.X6q, {
        className: m.title,
        variant: "heading-xl/semibold",
        children: u.intl.string(u.t.CueiPT)
      }), (0, i.jsx)(r.Text, {
        className: m.__invalid_subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: s ? u.intl.formatToPlainString(u.t.R7Pqn5, {
          guildName: t
        }) : u.intl.formatToPlainString(u.t.eIxPSk, {
          guildName: t
        })
      })]
    }), (0, i.jsx)(r.mzw, {
      className: m.buttonRow,
      children: s ? (0, i.jsx)(a.zx, {
        className: m.addConfirmButton,
        color: a.zx.Colors.BRAND,
        onClick: x,
        children: u.intl.string(u.t["X0WK+/"])
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(a.zx, {
          className: m.createSecondaryButton,
          color: a.zx.Colors.PRIMARY,
          onClick: x,
          children: u.intl.string(u.t["X/VABg"])
        }), (0, i.jsx)(a.zx, {
          className: m.createConfirmButton,
          color: a.zx.Colors.BRAND,
          onClick: () => {
            (0, d.XU)(n.id), null == x || x()
          },
          children: u.intl.string(u.t.DymAQk)
        })]
      })
    })]
  })
}