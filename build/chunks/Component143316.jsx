/** Chunk was on 10023 **/
/** chunk id: 143316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk288552 = require("./288552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk629775 = require("./629775.js");

function p(e) {
  let {
    type: t,
    onClick: n
  } = e, [l, p] = i.useState(false), h = () => {
    n(), a.default.track(c.rMx.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: true,
      num_unread_channels_remaining: 0
    })
  }, g = e => {
    e.shiftKey ? h() : p(true)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [l ? (0, r.jsx)(f, {
      confirm: h,
      cancel: () => p(false)
    }) : null, "bottom-floating" === t ? (0, r.jsx)(s.a, {
      text: u.intl.string(u.t["8k+6QY"]),
      icon: o.W6s,
      onClick: g
    }) : (0, r.jsx)(o.M0o, {
      tooltip: u.intl.string(u.t["8k+6QY"]),
      color: o.YX$.TERTIARY,
      icon: (0, r.jsx)(o.W6s, {
        size: "xs",
        color: "currentColor"
      }),
      className: d.controlButton,
      onClick: g
    })]
  })
}

function f(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, r.jsx)(o.sYh, {
    dismissable: true,
    header: u.intl.string(u.t.h4bVZ2),
    confirmText: u.intl.string(u.t.e6RscS),
    cancelText: u.intl.string(u.t["ETE/oC"]),
    confirmButtonColor: l.zx.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, r.jsx)(o.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: u.intl.string(u.t["0MQ0Bf"])
    })
  })
}