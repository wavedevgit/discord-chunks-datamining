/** Chunk was on 84725 **/
/** chunk id: 462499, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => b
}), require("./388685.js"), require("./953529.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658722 = require("./658722.js"),
  i = require.n(Chunk658722),
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

function f(e, n, l, a) {
  return {
    channelId: e.value,
    title: n,
    description: l,
    emoji: null,
    icon: null != a ? a : null
  }
}

function b(e) {
  var n, l;
  let {
    transitionState: t,
    onClose: b,
    resourceChannel: N,
    guildId: Z,
    onSave: y,
    onDelete: G,
    onIconUpload: S
  } = e, [P, U] = r.useState(null != (n = null == N ? true : N.title) ? n : ""), [H, K] = r.useState(null != (l = null == N ? true : N.description) ? l : ""), [L, M] = r.useState(function(e) {
    if (null == e) return null;
    let n = p.Z.getChannel(e.channelId);
    return null == n ? null : {
      value: n.id,
      label: n.name
    }
  }(N)), R = (0, o.e7)([C.Z], () => {
    var e;
    return null == (e = C.Z.getResourceChannel(null == N ? true : N.channelId)) ? true : e.icon
  }), E = (0, o.Wu)([C.Z], () => {
    var e, n;
    return (null != (n = null == (e = C.Z.getSettings()) ? true : e.resourceChannels) ? n : []).map(e => e.channelId)
  }), T = P.length < m.n || null == L, w = r.useCallback(() => {
    null == L || P.length <= 0 || (y(f(L, P, H, R)), b())
  }, [y, b, P, L, R, H]), z = r.useCallback(() => {
    null == G || G(), b()
  }, [G, b]), B = r.useCallback(e => {
    M(e)
  }, [M]), O = r.useCallback(e => Promise.resolve(g.ZP.getSelectableChannels(Z).filter(n => (0, m.k3)(n.channel) && !E.includes(n.channel.id) && i()(e, n.channel.name)).map(e => ({
    value: e.channel.id,
    label: e.channel.name
  }))), [Z, E]), X = r.useCallback(e => {
    if (null == e || null == Z) return null;
    let n = p.Z.getChannel(e.value),
      l = x.Z.getGuild(Z);
    if (null == n || null == l) return null;
    let r = (0, d.KS)(n, l);
    return null == r ? null : (0, a.jsx)(r, {
      size: "xs",
      color: "currentColor",
      className: I.channelIcon
    })
  }, [Z]), _ = r.useCallback(e => {
    null != S && null != L && S(f(L, P, H), e)
  }, [L, P, S, H]), D = r.useCallback(() => null == R || null == L ? null : v.ZP.getResourceChannelIconURL({
    channelId: L.value,
    icon: R
  }), [L, R]), F = r.useMemo(() => [{
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
    transitionState: t,
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
        color: "header-primary",
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
        color: "header-primary",
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
        color: "header-primary",
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
          color: "header-primary",
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