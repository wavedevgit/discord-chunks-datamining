/** Chunk was on 22979 **/
/** chunk id: 496025, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => N
}), require("./388685.js"), require("./35282.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk602715 = require("./602715.js"),
  Chunk95015 = require("./95015.js"),
  Chunk442837 = require("./442837.js"),
  Chunk668339 = require("./668339.jsx"),
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
  Chunk246992 = require("./246992.js"),
  Chunk37812 = require("./37812.js"),
  Chunk769633 = require("./769633.js"),
  Chunk663618 = require("./663618.js");

function T() {
  var e;
  let t = (0, c.Wu)([v.Z], () => v.Z.getSortedChannels()[1]),
    [n, i] = r.useState(t.length > 0 ? t[0].channelId : true),
    {
      selectedChannel: l,
      options: m
    } = (0, c.cj)([x.Z, g.default, b.Z], () => ({
      selectedChannel: x.Z.getChannel(n),
      options: t.map(e => {
        let t = x.Z.getChannel(e.channelId);
        return {
          value: e.channelId,
          label: null != t ? (0, h.F6)(t, g.default, b.Z) : e.channelId
        }
      })
    })),
    j = r.useCallback(() => {
      var e;
      if (null == l || !l.isPrivate()) return;
      let t = (0, o.x9)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
      f.Z.updatePrivateChannelRecipientFlags(l.id, t)
    }, [l]),
    y = null != l && !!l.isPrivate() && (0, o.yE)(null != (e = l.recipientFlags) ? e : 0, s.V.DISMISSED_IN_GAME_MESSAGE_NUX);
  return (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(u.Text, {
      variant: "text-md/semibold",
      children: "In-Game NUX Message for DMs"
    }), (0, a.jsxs)("div", {
      className: S.inGameNuxContainer,
      children: [(0, a.jsx)(d.d, {
        wrapperClassName: S.search,
        options: m,
        placeholder: "Select DM",
        value: n,
        onChange: i,
        renderOptionPrefix: e => {
          if (null == e) return null;
          let t = x.Z.getChannel(e.value);
          return null == t ? null : (0, a.jsx)(u.qEK, {
            src: (0, p.x)(t),
            "aria-hidden": true,
            size: u.EFr.SIZE_16
          })
        },
        popoutLayerContext: C.O$
      }), (0, a.jsx)(u.Button, {
        variant: "primary",
        size: "sm",
        text: y ? "Clear NUX Flag" : "Set NUX Flag",
        onClick: j,
        disabled: null == n
      })]
    })]
  })
}

function O() {
  let e = r.useCallback(() => {
    m.Z.openPrivateChannel({
      recipientIds: [_.I]
    })
  }, []);
  return (0, a.jsx)(u.Button, {
    variant: "primary",
    size: "sm",
    text: "Open System DM",
    onClick: e
  })
}

function N() {
  let e = (0, c.e7)([y.ZP], () => y.ZP.allByCategory(y.zU.MESSAGING), [], c.pF).map(e => {
    let [t, n, {
      label: r
    }] = e;
    return (0, a.jsx)(u.rsf, {
      label: r,
      description: t,
      checked: n,
      onChange: e => (0, j.Z)(t, e)
    }, t)
  });
  return (0, a.jsxs)("div", {
    className: l()(E.panel, S.panel),
    children: [e, (0, a.jsx)("div", {
      className: S.divider
    }), (0, a.jsx)(T, {}), (0, a.jsx)("div", {
      className: S.divider
    }), (0, a.jsx)(O, {})]
  })
}