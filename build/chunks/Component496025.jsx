/** Chunk was on 65347 **/
/** chunk id: 496025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => T
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  r = require.n(Chunk120356),
  Chunk602715 = require("./602715.js"),
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
  Chunk630388 = require("./630388.js"),
  Chunk98357 = require("./98357.js"),
  Chunk432877 = require("./432877.js"),
  Chunk246992 = require("./246992.js"),
  Chunk37812 = require("./37812.js"),
  Chunk462689 = require("./462689.js"),
  Chunk866403 = require("./866403.js");

function E() {
  var e;
  let t = (0, Chunk442837.Wu)([Chunk55589.Z], () => Chunk55589.Z.getSortedChannels()[1]),
    [n, i] = Chunk473749.useState(exports.length > 0 ? exports[0].channelId : true),
    {
      selectedChannel: r,
      options: d
    } = (0, Chunk442837.cj)([Chunk592125.Z, Chunk594174.default, Chunk699516.Z], () => ({
      selectedChannel: Chunk592125.Z.getChannel(require),
      options: exports.map(e => {
        let t = h.Z.getChannel(e.channelId);
        return {
          value: e.channelId,
          label: null != t ? (0, m.F6)(t, g.default, x.Z) : e.channelId
        }
      })
    })),
    v = Chunk473749.useCallback(() => {
      var e;
      if (null == r || !r.isPrivate()) return;
      let t = (0, Chunk630388.x9)(null != (e = r.recipientFlags) ? module : 0, Chunk602715.V.DISMISSED_IN_GAME_MESSAGE_NUX);
      Chunk258732.Z.updatePrivateChannelRecipientFlags(r.id, exports)
    }, [r]),
    j = null != r && !!r.isPrivate() && (0, Chunk630388.yE)(null != (e = r.recipientFlags) ? module : 0, Chunk602715.V.DISMISSED_IN_GAME_MESSAGE_NUX);
  return (0, Chunk54381.jsxs)(Chunk54381.Fragment, {
    children: [(0, Chunk54381.jsx)(Chunk481060.Text, {
      variant: "text-md/semibold",
      children: "In-Game NUX Message for DMs"
    }), (0, Chunk54381.jsxs)("div", {
      className: Chunk462689.inGameNuxContainer,
      children: [(0, Chunk54381.jsx)(Chunk481060.VcW, {
        wrapperClassName: Chunk462689.search,
        options: Chunk493683,
        placeholder: "Select DM",
        value: require,
        onChange: Chunk120356,
        renderOptionPrefix: e => {
          if (null == e) return null;
          let t = h.Z.getChannel(e.value);
          return null == t ? null : (0, a.jsx)(c.qEK, {
            src: (0, u.x)(t),
            "aria-hidden": true,
            size: c.EFr.SIZE_16
          })
        },
        popoutLayerContext: Chunk246992.O$
      }), (0, Chunk54381.jsx)(Chunk481060.Button, {
        variant: "primary",
        size: "sm",
        text: Chunk432877 ? "Clear NUX Flag" : "Set NUX Flag",
        onClick: Chunk98357,
        disabled: null == require
      })]
    })]
  })
}

function N() {
  let e = Chunk473749.useCallback(() => {
    Chunk493683.Z.openPrivateChannel({
      recipientIds: [Chunk37812.I]
    })
  }, []);
  return (0, Chunk54381.jsx)(Chunk481060.Button, {
    variant: "primary",
    size: "sm",
    text: "Open System DM",
    onClick: module
  })
}

function T() {
  let e = (0, Chunk442837.e7)([Chunk432877.ZP], () => Chunk432877.ZP.allByCategory(Chunk432877.zU.MESSAGING), [], Chunk442837.pF).map(e => {
    let [t, n, {
      label: l
    }] = e;
    return (0, a.jsx)(c.rsf, {
      label: l,
      description: t,
      checked: n,
      onChange: e => (0, v.Z)(t, e)
    }, t)
  });
  return (0, Chunk54381.jsxs)("div", {
    className: r()(Chunk866403.panel, Chunk462689.panel),
    children: [module, (0, Chunk54381.jsx)("div", {
      className: Chunk462689.divider
    }), (0, Chunk54381.jsx)(E, {}), (0, Chunk54381.jsx)("div", {
      className: Chunk462689.divider
    }), (0, Chunk54381.jsx)(N, {})]
  })
}