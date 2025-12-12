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
  Chunk609442 = require("./609442.js");

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
    guildId: Z,
    onSave: G,
    onDelete: S,
    onIconUpload: y
  } = n, [P, U] = t.useState(null != (e = null == N ? true : N.title) ? e : ""), [H, K] = t.useState(null != (l = null == N ? true : N.description) ? l : ""), [L, M] = t.useState(function(n) {
    if (null == n) return null;
    let e = g.Z.getChannel(n.channelId);
    return null == e ? null : {
      value: e.id,
      label: e.name
    }
  }(N)), R = (0, o.e7)([C.Z], () => {
    var n;
    return null == (n = C.Z.getResourceChannel(null == N ? true : N.channelId)) ? true : n.icon
  }), E = (0, o.Wu)([C.Z], () => {
    var n, e;
    return (null != (e = null == (n = C.Z.getSettings()) ? true : n.resourceChannels) ? e : []).map(n => n.channelId)
  }), T = P.length < m.n || null == L, w = t.useCallback(() => {
    null == L || P.length <= 0 || (G(f(L, P, H, R)), b())
  }, [G, b, P, L, R, H]), z = t.useCallback(() => {
    null == S || S(), b()
  }, [S, b]), B = t.useCallback(n => {
    M(n)
  }, [M]), O = t.useCallback(n => Promise.resolve(x.ZP.getSelectableChannels(Z).filter(e => (0, m.k3)(e.channel) && !E.includes(e.channel.id) && r()(n, e.channel.name)).map(n => ({
    value: n.channel.id,
    label: n.channel.name
  }))), [Z, E]), X = t.useCallback(n => {
    if (null == n || null == Z) return null;
    let e = g.Z.getChannel(n.value),
      l = p.Z.getGuild(Z);
    if (null == e || null == l) return null;
    let t = (0, d.KS)(e, l);
    return null == t ? null : (0, a.jsx)(t, {
      size: "xs",
      color: "currentColor",
      className: I.channelIcon
    })
  }, [Z]), _ = t.useCallback(n => {
    null != y && null != L && y(f(L, P, H), n)
  }, [L, P, y, H]), D = t.useCallback(() => null == R || null == L ? null : v.ZP.getResourceChannelIconURL({
    channelId: L.value,
    icon: R
  }), [L, R]), F = t.useMemo(() => [{
    variant: "secondary",
    text: k.intl.string(k.t["ETE/oC"]),
    onClick: b
  }, {
    variant: "primary",
    text: k.intl.string(k.t["R3BPH+"]),
    onClick: w,
    disabled: T
  }], [w, T, b]);
  return (0, a.jsxs)(s.Modal, {
    title: k.intl.string(k.t.SNMXYt),
    transitionState: i,
    onClose: b,
    actions: F,
    actionBarInput: null != N ? (0, a.jsx)(c.Avr, {
      text: k.intl.string(k.t.N86XcP),
      onClick: z,
      variant: "critical"
    }) : true,
    children: [(0, a.jsxs)("div", {
      className: I.formGroup,
      children: [(0, a.jsxs)(c.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [k.intl.string(k.t.nPa4Ju), (0, a.jsx)(j.Z, {})]
      }), (0, a.jsx)(u.d, {
        value: L,
        renderOptionPrefix: X,
        options: O,
        onChange: B
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
        value: P,
        onChange: U,
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
        value: H,
        onChange: K,
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
          image: R,
          makeURL: D,
          icon: (0, a.jsx)(c.rG2, {
            size: "md",
            color: "currentColor"
          }),
          hideSize: true,
          onChange: _,
          iconClassName: I.uploadImageIcon,
          showIcon: null == R
        })
      })]
    })]
  })
}