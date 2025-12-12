/** Chunk was on 64722 **/
/** chunk id: 143316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk681715 = require("./681715.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    onClick: t
  } = e, [n, o] = i.useState(false), d = () => {
    t(), s.default.track(c.rMx.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: true,
      num_unread_channels_remaining: 0
    })
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [n ? (0, r.jsx)(f, {
      confirm: d,
      cancel: () => o(false)
    }) : null, (0, r.jsx)(l.u, {
      text: u.intl.string(u.t["8k+6QY"]),
      children: (0, r.jsx)(a.hU, {
        variant: "secondary",
        "aria-label": u.intl.string(u.t["8k+6QY"]),
        size: "sm",
        icon: a.W6s,
        onClick: e => {
          e.shiftKey ? d() : o(true)
        }
      })
    })]
  })
}

function f(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, r.jsx)(a.SR, {
    dismissable: true,
    header: u.intl.string(u.t.h4bVZ2),
    confirmText: u.intl.string(u.t.e6RscS),
    cancelText: u.intl.string(u.t["ETE/oC"]),
    confirmButtonColor: o.zx.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, r.jsx)(a.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: u.intl.string(u.t["0MQ0Bf"])
    })
  })
}