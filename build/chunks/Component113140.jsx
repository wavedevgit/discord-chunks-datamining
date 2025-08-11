/** Chunk was on 13878 **/
/** chunk id: 113140, original params: n,e,t (module,exports,require) **/
require.d(exports, {
  default: () => d
}), require("./953529.js");
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk471253 = require("./471253.js"),
  Chunk939863 = require("./939863.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk555501 = require("./555501.js");

function d(n) {
  let {
    transitionState: e,
    onClose: t,
    channel: d
  } = n, h = (0, i.Dt)(), f = n => {
    (0, s.RK)(d, n), t()
  };
  return (0, c.jsx)(a.Y0X, {
    size: a.CgR.SMALL,
    transitionState: e,
    "aria-labelledby": h,
    className: o.container,
    parentComponent: "InvitedToSpeakModal",
    children: (0, c.jsxs)(a.hzk, {
      className: o.content,
      children: [(0, c.jsx)(l.Z, {
        children: (0, c.jsx)("div", {
          className: o.iconBackground,
          children: (0, c.jsx)(a.S6n, {
            size: "custom",
            color: "currentColor",
            height: 40,
            width: 40,
            className: o.icon
          })
        })
      }), (0, c.jsx)(a.X6q, {
        className: o.header,
        variant: "heading-lg/semibold",
        children: r.intl.string(r.t.Ul1RJS)
      }), (0, c.jsx)(a.Text, {
        color: "header-secondary",
        className: o.description,
        variant: "text-sm/normal",
        children: r.intl.format(r.t["Z+3bW1"], {
          stageChannelHook: () => (0, c.jsxs)("div", {
            className: o.channel,
            children: [(0, c.jsx)(a.ewx, {
              size: "custom",
              color: "currentColor",
              height: 14,
              width: 14,
              className: o.channelIcon
            }), (0, c.jsx)(a.Text, {
              className: o.channelName,
              variant: "text-sm/normal",
              children: d.name
            })]
          })
        })
      }), (0, c.jsxs)("div", {
        className: o.buttons,
        children: [(0, c.jsx)(a.zxk, {
          variant: "active",
          text: r.intl.string(r.t.MMlhsr),
          fullWidth: true,
          onClick: () => f(false)
        }), (0, c.jsx)(a.zxk, {
          variant: "critical-primary",
          text: r.intl.string(r.t.BVN4pK),
          fullWidth: true,
          onClick: () => f(true)
        }), (0, c.jsx)(a.zxk, {
          variant: "secondary",
          text: r.intl.string(r.t.L5eIZ2),
          fullWidth: true,
          onClick: t
        })]
      })]
    })
  })
}