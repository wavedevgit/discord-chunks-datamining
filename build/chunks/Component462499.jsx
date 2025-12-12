/** Chunk was on 84725 **/
/** chunk id: 462499, original params: n,e,l (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  r = require.n(Chunk658722),
  Chunk793030 = require("./793030.js"),
  Chunk399606 = require("./399606.js"),
  Chunk668339 = require("./668339.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk734893 = require("./734893.js"),
  Chunk208567 = require("./208567.jsx"),
  Chunk592125 = require("./592125.js"),
  Chunk984933 = require("./984933.js"),
  Chunk430824 = require("./430824.js"),
  Chunk768581 = require("./768581.js"),
  Chunk969632 = require("./969632.js"),
  Chunk580357 = require("./580357.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk353441 = require("./353441.js");

function f(n, e, l, a) {
  return {
    channelId: n.value,
    title: e,
    description: l,
    emoji: null,
    icon: null != a ? a : null
  }
}

function b(n) {
  var e, l;
  let {
    transitionState: i,
    onClose: b,
    resourceChannel: N,
    guildId: _,
    onSave: Z,
    onDelete: G,
    onIconUpload: S
  } = n, [y, P] = t.useState(null != (e = null == N ? true : N.title) ? e : ""), [U, H] = t.useState(null != (l = null == N ? true : N.description) ? l : ""), [K, L] = t.useState(function(n) {
    if (null == n) return null;
    let e = g.Z.getChannel(n.channelId);
    return null == e ? null : {
      value: e.id,
      label: e.name
    }
  }(N)), M = (0, o.e7)([C.Z], () => {
    var n;
    return null == (n = C.Z.getResourceChannel(null == N ? true : N.channelId)) ? true : n.icon
  }), R = (0, o.Wu)([C.Z], () => {
    var n, e;
    return (null != (e = null == (n = C.Z.getSettings()) ? true : n.resourceChannels) ? e : []).map(n => n.channelId)
  }), E = y.length < m.n || null == K, T = t.useCallback(() => {
    null == K || y.length <= 0 || (Z(f(K, y, U, M)), b())
  }, [Z, b, y, K, M, U]), w = t.useCallback(() => {
    null == G || G(), b()
  }, [G, b]), z = t.useCallback(n => {
    L(n)
  }, [L]), B = t.useCallback(n => Promise.resolve(x.ZP.getSelectableChannels(_).filter(e => (0, m.k3)(e.channel) && !R.includes(e.channel.id) && r()(n, e.channel.name)).map(n => ({
    value: n.channel.id,
    label: n.channel.name
  }))), [_, R]), O = t.useCallback(n => {
    if (null == n || null == _) return null;
    let e = g.Z.getChannel(n.value),
      l = p.Z.getGuild(_);
    if (null == e || null == l) return null;
    let t = (0, d.KS)(e, l);
    return null == t ? null : (0, a.jsx)(t, {
      size: "xs",
      color: "currentColor",
      className: I.channelIcon
    })
  }, [_]), X = t.useCallback(n => {
    null != S && null != K && S(f(K, y, U), n)
  }, [K, y, S, U]), D = t.useCallback(() => null == M || null == K ? null : v.ZP.getResourceChannelIconURL({
    channelId: K.value,
    icon: M
  }), [K, M]), F = t.useMemo(() => [{
    variant: "secondary",
    text: k.intl.string(k.t["ETE/oC"]),
    onClick: b
  }, {
    variant: "primary",
    text: k.intl.string(k.t["R3BPH+"]),
    onClick: T,
    disabled: E
  }], [T, E, b]);
  return (0, a.jsxs)(s.Modal, {
    title: k.intl.string(k.t.SNMXYt),
    transitionState: i,
    onClose: b,
    actions: F,
    actionBarInput: null != N ? (0, a.jsx)(c.Avr, {
      text: k.intl.string(k.t.N86XcP),
      onClick: w,
      variant: "critical"
    }) : true,
    children: [(0, a.jsxs)("div", {
      className: I.formGroup,
      children: [(0, a.jsxs)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [k.intl.string(k.t.nPa4Ju), (0, a.jsx)(j.Z, {})]
      }), (0, a.jsx)(u.d, {
        value: K,
        renderOptionPrefix: O,
        options: B,
        onChange: z
      }), (0, a.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: k.intl.string(k.t.eNDtJK)
      })]
    }), (0, a.jsx)("div", {
      className: I.separator
    }), (0, a.jsxs)("div", {
      className: I.formGroup,
      children: [(0, a.jsxs)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [k.intl.string(k.t["lFy+aW"]), (0, a.jsx)(j.Z, {})]
      }), (0, a.jsx)(c.oil, {
        value: y,
        onChange: P,
        placeholder: k.intl.string(k.t.XKUimI),
        maxLength: m.am
      })]
    }), (0, a.jsx)("div", {
      className: I.separator
    }), (0, a.jsxs)("div", {
      className: I.formGroup,
      children: [(0, a.jsx)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: k.intl.string(k.t.CnkilH)
      }), (0, a.jsx)(c.Kx8, {
        value: U,
        onChange: H,
        placeholder: k.intl.string(k.t.na0V4E),
        maxLength: m.Vu
      })]
    }), (0, a.jsx)("div", {
      className: I.separator
    }), (0, a.jsxs)("div", {
      className: I.splitGroup,
      children: [(0, a.jsxs)("div", {
        children: [(0, a.jsx)(c.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: k.intl.string(k.t.CB6dyu)
        }), (0, a.jsx)(c.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: k.intl.string(k.t.Kcdk7D)
        })]
      }), (0, a.jsx)("div", {
        children: (0, a.jsx)(h.Z, {
          className: I.uploader,
          imageClassName: I.uploadImage,
          image: M,
          makeURL: D,
          icon: (0, a.jsx)(c.rG2, {
            size: "md",
            color: "currentColor"
          }),
          hideSize: true,
          onChange: X,
          iconClassName: I.uploadImageIcon,
          showIcon: null == M
        })
      })]
    })]
  })
}