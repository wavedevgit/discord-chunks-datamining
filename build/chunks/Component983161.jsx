/** Chunk was on 36354 **/
/** chunk id: 983161, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk91871 = require("./91871.js"),
  s = require.n(Chunk91871),
  Chunk158954 = require("./158954.js"),
  Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk374084 = require("./374084.js"),
  Chunk342298 = require("./342298.jsx"),
  Chunk734057 = require("./734057.js"),
  Chunk808728 = require("./808728.js"),
  Chunk71393 = require("./71393.js"),
  Chunk486020 = require("./486020.js"),
  Chunk132514 = require("./132514.js"),
  Chunk721228 = require("./721228.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk43079 = require("./43079.js");

function k(e, n, l, t) {
  return {
    channelId: e,
    title: n,
    description: l,
    emoji: null,
    icon: null != t ? t : null
  }
}

function p(e) {
  var n, l;
  let {
    transitionState: i,
    onClose: p,
    resourceChannel: N,
    guildId: A,
    onSave: H,
    onDelete: S,
    onIconUpload: I
  } = e, [_, y] = a.useState(null != (n = null == N ? true : N.title) ? n : ""), [E, M] = a.useState(null != (l = null == N ? true : N.description) ? l : ""), [K, w] = a.useState(function(e) {
    if (null == e) return null;
    let n = h.A.getChannel(e.channelId);
    return null == n ? null : n.id
  }(N)), L = (0, c.bG)([j.A], () => {
    var e;
    return null == (e = j.A.getResourceChannel(null == N ? true : N.channelId)) ? true : e.icon
  }), R = (0, c.yK)([j.A], () => {
    var e, n;
    return (null != (e = null == (n = j.A.getSettings()) ? true : n.resourceChannels) ? e : []).map(e => e.channelId)
  }), J = _.length < u.SM || null == K, P = a.useCallback(() => {
    null == K || _.length <= 0 || (H(k(K, _, E, L)), p())
  }, [H, p, _, K, L, E]), T = a.useCallback(() => {
    null == S || S(), p()
  }, [S, p]), U = a.useCallback(e => {
    w(e)
  }, [w]), W = a.useCallback(e => {
    let n = m.Ay.getSelectableChannels(A),
      l = g.A.getGuild(A);
    return Promise.resolve(n.filter(n => (0, u.Yt)(n.channel) && !R.includes(n.channel.id) && s()(e, n.channel.name)).map(e => {
      let n = (0, o.gU)(e.channel, l);
      return {
        id: e.channel.id,
        value: e.channel.id,
        label: e.channel.name,
        leading: null != n ? (0, t.jsx)(n, {
          size: "xs",
          color: "currentColor",
          className: f.p
        }) : true
      }
    }))
  }, [A, R]), z = a.useCallback(e => {
    null != I && null != K && I(k(K, _, E), e)
  }, [K, _, I, E]), B = a.useCallback(() => null == L || null == K ? null : v.Ay.getResourceChannelIconURL({
    channelId: K,
    icon: L
  }), [K, L]), V = a.useMemo(() => [{
    variant: "secondary",
    text: b.intl.string(b.t["ETE/oC"]),
    onClick: p
  }, {
    variant: "primary",
    text: b.intl.string(b.t["R3BPH+"]),
    onClick: P,
    disabled: J
  }], [P, J, p]);
  return (0, t.jsxs)(r.Modal, {
    title: b.intl.string(b.t.SNMXYt),
    transitionState: i,
    onClose: p,
    actions: V,
    actionBarInput: null != N ? (0, t.jsx)(d.QWc, {
      text: b.intl.string(b.t.N86XcP),
      onClick: T,
      variant: "critical"
    }) : true,
    children: [(0, t.jsxs)("div", {
      className: f.eH,
      children: [(0, t.jsxs)(d.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [b.intl.string(b.t.nPa4Ju), (0, t.jsx)(C.A, {})]
      }), (0, t.jsx)(d.ZiE, {
        selectionMode: "single",
        value: null != K ? K : true,
        options: W,
        onSelectionChange: U
      }), (0, t.jsx)(d.Text, {
        variant: "text-xs/medium",
        color: "text-muted",
        children: b.intl.string(b.t.eNDtJK)
      })]
    }), (0, t.jsx)("div", {
      className: f.me
    }), (0, t.jsxs)("div", {
      className: f.eH,
      children: [(0, t.jsxs)(d.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: [b.intl.string(b.t["lFy+aW"]), (0, t.jsx)(C.A, {})]
      }), (0, t.jsx)(d.ksK, {
        value: _,
        onChange: y,
        placeholder: b.intl.string(b.t.XKUimI),
        maxLength: u.oW
      })]
    }), (0, t.jsx)("div", {
      className: f.me
    }), (0, t.jsxs)("div", {
      className: f.eH,
      children: [(0, t.jsx)(d.Heading, {
        variant: "heading-md/semibold",
        color: "text-strong",
        children: b.intl.string(b.t.CnkilH)
      }), (0, t.jsx)(d.fs1, {
        value: E,
        onChange: M,
        placeholder: b.intl.string(b.t.na0V4E),
        maxLength: u.Mu
      })]
    }), (0, t.jsx)("div", {
      className: f.me
    }), (0, t.jsxs)("div", {
      className: f.kE,
      children: [(0, t.jsxs)("div", {
        children: [(0, t.jsx)(d.Heading, {
          variant: "heading-md/semibold",
          color: "text-strong",
          children: b.intl.string(b.t.CB6dyu)
        }), (0, t.jsx)(d.Text, {
          variant: "text-xs/medium",
          color: "text-muted",
          children: b.intl.string(b.t.Kcdk7D)
        })]
      }), (0, t.jsx)("div", {
        children: (0, t.jsx)(x.A, {
          className: f.xp,
          imageClassName: f.V6,
          image: L,
          makeURL: B,
          icon: (0, t.jsx)(d.JMY, {
            size: "md",
            color: "currentColor"
          }),
          hideSize: true,
          onChange: z,
          iconClassName: f.Ow,
          showIcon: null == L
        })
      })]
    })]
  })
}