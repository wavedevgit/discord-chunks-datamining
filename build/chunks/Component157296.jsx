/** Chunk was on 97492 **/
/** chunk id: 157296, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => d
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk435371 = require("./435371.js"),
  Chunk421380 = require("./421380.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function d(e) {
  let {
    onClick: t
  } = e, [n, a] = l.useState(false), d = () => {
    t(), o.default.track(c.HAw.INBOX_CHANNEL_ACKED, {
      marked_all_channels_as_read: true,
      num_unread_channels_remaining: 0
    })
  };
  return (0, r.jsxs)(r.Fragment, {
    children: [n ? (0, r.jsx)(f, {
      confirm: d,
      cancel: () => a(false)
    }) : null, (0, r.jsx)(i.m_, {
      text: u.intl.string(u.t["8k+6QY"]),
      children: (0, r.jsx)(s.K0, {
        variant: "secondary",
        "aria-label": u.intl.string(u.t["8k+6QY"]),
        size: "sm",
        icon: s.iA$,
        onClick: e => {
          e.shiftKey ? d() : a(true)
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
  return (0, r.jsx)(s.MJ3, {
    dismissable: true,
    header: u.intl.string(u.t.h4bVZ2),
    confirmText: u.intl.string(u.t.e6RscS),
    cancelText: u.intl.string(u.t["ETE/oC"]),
    confirmButtonColor: a.$n.Colors.BRAND,
    onCancel: t,
    onConfirm: n,
    children: (0, r.jsx)(s.Text, {
      color: "text-default",
      variant: "text-sm/normal",
      children: u.intl.string(u.t["0MQ0Bf"])
    })
  })
}