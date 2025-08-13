/** Chunk was on 41753 **/
/** chunk id: 143316, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk626135 = require("./626135.js"),
  Chunk288552 = require("./288552.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk808934 = require("./808934.js");

function h(e) {
  let {
    type: t,
    onClick: n
  } = e, [l, h] = i.useState(false), f = () => {
    n(), s.default.track(c.rMx.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: true,
      num_unread_channels_remaining: 0
    })
  }, g = e => {
    e.shiftKey ? f() : h(true)
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [l ? (0, r.jsx)(p, {
      confirm: f,
      cancel: () => h(false)
    }) : null, "bottom-floating" === t ? (0, r.jsx)(a.a, {
      text: u.intl.string(u.t["8k+6QU"]),
      icon: o.W6s,
      onClick: g
    }) : (0, r.jsx)(o.M0o, {
      tooltip: u.intl.string(u.t["8k+6QU"]),
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

function p(e) {
  let {
    cancel: t,
    confirm: n
  } = e;
  return (0, r.jsx)(o.sYh, {
    dismissable: true,
    header: u.intl.string(u.t.h4bVZ2),
    confirmText: u.intl.string(u.t.e6RscX),
    cancelText: u.intl.string(u.t["ETE/oK"]),
    confirmButtonColor: l.zx.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, r.jsx)(o.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: u.intl.string(u.t["0MQ0BQ"])
    })
  })
}