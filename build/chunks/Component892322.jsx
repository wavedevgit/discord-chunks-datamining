/** Chunk was on 79764 **/
/** chunk id: 892322, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk512722 = require("./512722.js"),
  l = require.n(Chunk512722),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk565138 = require("./565138.jsx"),
  Chunk703656 = require("./703656.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk475608 = require("./475608.js");

function m(e) {
  let {
    directoryGuildName: t,
    guildToAdd: n,
    isExistingGuildFlow: s,
    onClose: m
  } = e;
  return l()(null != n, "Missing guild in Hub add guild confirmation"), (0, i.jsxs)(i.Fragment, {
    children: [(0, i.jsxs)(r.xBx, {
      direction: a.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [null != m && (0, i.jsx)(r.olH, {
        className: u.closeButton,
        onClick: m
      }), (0, i.jsx)(o.Z, {
        guild: n,
        size: o.Z.Sizes.XLARGE,
        active: true
      }), (0, i.jsx)(r.X6q, {
        className: u.title,
        variant: "heading-xl/semibold",
        children: d.intl.string(d.t.CueiPT)
      }), (0, i.jsx)(r.Text, {
        className: u.__invalid_subtitle,
        color: "header-secondary",
        variant: "text-md/normal",
        children: s ? d.intl.formatToPlainString(d.t.R7Pqn5, {
          guildName: t
        }) : d.intl.formatToPlainString(d.t.eIxPSk, {
          guildName: t
        })
      })]
    }), (0, i.jsx)(r.mzw, {
      className: u.buttonRow,
      children: s ? (0, i.jsx)(r.zxk, {
        text: d.intl.string(d.t["X0WK+/"]),
        fullWidth: true,
        variant: "primary",
        onClick: m
      }) : (0, i.jsxs)(i.Fragment, {
        children: [(0, i.jsx)(r.zxk, {
          fullWidth: true,
          text: d.intl.string(d.t["X/VABg"]),
          variant: "secondary",
          onClick: m
        }), (0, i.jsx)(r.zxk, {
          fullWidth: true,
          variant: "primary",
          onClick: () => {
            (0, c.XU)(n.id), null == m || m()
          },
          text: d.intl.string(d.t.DymAQk)
        })]
      })
    })]
  })
}