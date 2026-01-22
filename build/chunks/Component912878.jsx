/** Chunk was on 22477 **/
/** chunk id: 912878, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => O
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  r = require.n(Chunk503698),
  Chunk253506 = require("./253506.js"),
  Chunk665260 = require("./665260.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk308528 = require("./308528.js"),
  Chunk571694 = require("./571694.js"),
  Chunk47167 = require("./47167.js"),
  Chunk704844 = require("./704844.js"),
  Chunk734057 = require("./734057.js"),
  Chunk994500 = require("./994500.js"),
  Chunk287809 = require("./287809.js"),
  Chunk645959 = require("./645959.js"),
  Chunk263834 = require("./263834.js"),
  Chunk865116 = require("./865116.js"),
  Chunk716371 = require("./716371.js"),
  Chunk701940 = require("./701940.js"),
  Chunk661251 = require("./661251.js");

function C() {
  var e;
  let t = (0, c.yK)([g.A], () => g.A.getSortedChannels()[1]),
    [n, i] = l.useState(t.length > 0 ? t[0].channelId : true),
    {
      selectedChannel: r,
      options: u
    } = (0, c.cf)([f.A, b.default, x.A], () => ({
      selectedChannel: f.A.getChannel(n),
      options: t.map(e => {
        let t = f.A.getChannel(e.channelId);
        return {
          id: e.channelId,
          value: e.channelId,
          label: null != t ? (0, p.m1)(t, b.default, x.A) : e.channelId,
          leading: null != t ? (0, a.jsx)(d.euF, {
            src: (0, m.Y)(t),
            "aria-hidden": true,
            size: d._3J.SIZE_16
          }) : true
        }
      })
    })),
    v = l.useCallback(() => {
      var e;
      if (null == r || !r.isPrivate()) return;
      let t = (0, o.PQ)(null != (e = r.recipientFlags) ? e : 0, s.o.DISMISSED_IN_GAME_MESSAGE_NUX);
      h.A.updatePrivateChannelRecipientFlags(r.id, t)
    }, [r]),
    j = null != r && !!r.isPrivate() && (0, o.Lt)(null != (e = r.recipientFlags) ? e : 0, s.o.DISMISSED_IN_GAME_MESSAGE_NUX);
  return (0, a.jsxs)("div", {
    className: _.gs,
    children: [(0, a.jsx)(d.ZiE, {
      label: "In-Game NUX Message for DMs",
      selectionMode: "single",
      options: u,
      placeholder: "Select DM",
      value: n,
      onSelectionChange: i
    }), (0, a.jsx)(d.Button, {
      variant: "primary",
      size: "sm",
      text: j ? "Clear NUX Flag" : "Set NUX Flag",
      onClick: v,
      disabled: null == n
    })]
  })
}

function S() {
  let e = l.useCallback(() => {
    u.A.openPrivateChannel({
      recipientIds: [y.K]
    })
  }, []);
  return (0, a.jsx)(d.Button, {
    variant: "primary",
    size: "sm",
    text: "Open System DM",
    onClick: e
  })
}

function O() {
  let e = (0, c.bG)([j.Ay], () => j.Ay.allByCategory(j.xW.MESSAGING), [], c.My).map(e => {
    let [t, n, {
      label: l
    }] = e;
    return (0, a.jsx)(d.dOG, {
      label: l,
      description: t,
      checked: n,
      onChange: e => (0, v.L)(t, e)
    }, t)
  });
  return (0, a.jsxs)("div", {
    className: r()(A.nd, _.nd),
    children: [e, (0, a.jsx)("div", {
      className: _.yF
    }), (0, a.jsx)(C, {}), (0, a.jsx)("div", {
      className: _.yF
    }), (0, a.jsx)(S, {})]
  })
}