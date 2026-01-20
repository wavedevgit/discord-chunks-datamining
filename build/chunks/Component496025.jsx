/** Chunk was on 22979 **/
/** chunk id: 496025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk602715 = require("./602715.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk493683 = require("./493683.js"),
  Chunk43267 = require("./43267.js"),
  Chunk933557 = require("./933557.js"),
  Chunk258732 = require("./258732.js"),
  Chunk592125 = require("./592125.js"),
  Chunk699516 = require("./699516.js"),
  Chunk594174 = require("./594174.js"),
  Chunk55589 = require("./55589.js"),
  Chunk98357 = require("./98357.js"),
  Chunk432877 = require("./432877.js"),
  Chunk37812 = require("./37812.js"),
  Chunk769633 = require("./769633.js"),
  Chunk663618 = require("./663618.js");

function S() {
  var e;
  let t = (0, c.Wu)([g.Z], () => g.Z.getSortedChannels()[1]),
    [n, i] = r.useState(t.length > 0 ? t[0].channelId : true),
    {
      selectedChannel: l,
      options: u
    } = (0, c.cj)([f.Z, x.default, b.Z], () => ({
      selectedChannel: f.Z.getChannel(n),
      options: t.map(e => {
        let t = f.Z.getChannel(e.channelId);
        return {
          id: e.channelId,
          value: e.channelId,
          label: null != t ? (0, p.F6)(t, x.default, b.Z) : e.channelId,
          leading: null != t ? (0, a.jsx)(d.qEK, {
            src: (0, m.x)(t),
            "aria-hidden": true,
            size: d.EFr.SIZE_16
          }) : true
        }
      })
    })),
    v = r.useCallback(() => {
      var e;
      if (null == l || !l.isPrivate()) return;
      let t = (0, o.x9)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
      h.Z.updatePrivateChannelRecipientFlags(l.id, t)
    }, [l]),
    j = null != l && !!l.isPrivate() && (0, o.yE)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
  return (0, a.jsxs)("div", {
    className: C.inGameNuxContainer,
    children: [(0, a.jsx)(d.VcW, {
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

function E() {
  let e = r.useCallback(() => {
    u.Z.openPrivateChannel({
      recipientIds: [y.I]
    })
  }, []);
  return (0, a.jsx)(d.Button, {
    variant: "primary",
    size: "sm",
    text: "Open System DM",
    onClick: e
  })
}

function T() {
  let e = (0, c.e7)([j.ZP], () => j.ZP.allByCategory(j.zU.MESSAGING), [], c.pF).map(e => {
    let [t, n, {
      label: r
    }] = e;
    return (0, a.jsx)(d.rsf, {
      label: r,
      description: t,
      checked: n,
      onChange: e => (0, v.Z)(t, e)
    }, t)
  });
  return (0, a.jsxs)("div", {
    className: l()(_.panel, C.panel),
    children: [e, (0, a.jsx)("div", {
      className: C.divider
    }), (0, a.jsx)(S, {}), (0, a.jsx)("div", {
      className: C.divider
    }), (0, a.jsx)(E, {})]
  })
}