/** Chunk was on 95257 **/
/** chunk id: 610617, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => A
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk106351 = require("./106351.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk471445 = require("./471445.js"),
  Chunk856768 = require("./856768.jsx"),
  Chunk324067 = require("./324067.js"),
  Chunk771845 = require("./771845.js"),
  Chunk9156 = require("./9156.js"),
  Chunk117984 = require("./117984.js"),
  Chunk593214 = require("./593214.js"),
  Chunk378337 = require("./378337.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk566192 = require("./566192.js");

function A(e) {
  let {
    transitionState: n,
    onClose: t,
    parentId: l
  } = e, c = (0, o.e7)([f.ZP], () => f.ZP.getFlattenedGuildIds()[0]), [u, h] = i.useState(c), [v, C] = i.useState(false);
  return (0, a.jsx)(r.Modal, {
    title: I.intl.string(I.t["4wcdE/"]),
    actions: [],
    transitionState: n,
    onClose: t,
    input: (0, a.jsx)(s.q, {
      guildId: u,
      onChange: function(e) {
        null != e && h(e.id)
      }
    }),
    actionBarInput: (0, a.jsx)(d.rsf, {
      checked: v,
      onChange: e => C(e),
      label: I.intl.string(I.t.UwOLJO)
    }),
    children: (0, a.jsx)(m, {
      guildId: u,
      hideMutedChannels: v,
      parentId: l
    })
  })
}

function m(e) {
  let {
    guildId: n,
    hideMutedChannels: t,
    parentId: r
  } = e, d = (0, o.e7)([u.Z], () => u.Z.getCategories(n)), c = (0, p.Z)(d), s = i.useRef(null);
  return i.useEffect(() => {
    var e;
    null == s || null == (e = s.current) || e.scroll({
      top: 0
    })
  }, [n]), (0, a.jsx)("div", {
    ref: s,
    children: c.map(e => e.type === l.d.GUILD_CATEGORY ? (0, a.jsx)(_, {
      name: e.name
    }, e.id) : (0, a.jsx)(R, {
      channel: e,
      hideMutedChannels: t,
      parentId: r
    }, e.id))
  })
}

function _(e) {
  let {
    name: n
  } = e;
  return (0, a.jsx)(d.Text, {
    className: E.categoryRow,
    variant: "eyebrow",
    color: "interactive-text-default",
    children: n
  })
}

function R(e) {
  let {
    channel: n,
    hideMutedChannels: t,
    parentId: i
  } = e, l = (0, C.s4)(n.id);
  if ((0, o.e7)([h.ZP], () => h.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
  let r = (0, c.KS)(n);
  return (0, a.jsxs)("div", {
    className: E.channelRow,
    children: [(0, a.jsxs)("div", {
      className: E.channelName,
      children: [null != r && (0, a.jsx)("div", {
        className: E.channelIconContainer,
        children: (0, a.jsx)(r, {
          className: E.channelIcon,
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20
        })
      }), (0, a.jsx)(d.Text, {
        variant: "text-md/medium",
        color: "interactive-text-default",
        children: n.name
      })]
    }), null != l ? (0, a.jsx)(y, {
      channelId: n.id
    }) : (0, a.jsx)(N, {
      channelId: n.id,
      parentId: i
    })]
  }, n.id)
}

function N(e) {
  let {
    channelId: n,
    parentId: t
  } = e;
  return (0, a.jsx)(d.Button, {
    variant: "primary",
    size: "sm",
    text: I.intl.string(I.t.OYkgVk),
    onClick: function() {
      (0, v.kj)(n, t)
    }
  })
}

function y(e) {
  let {
    channelId: n
  } = e;
  return (0, a.jsx)(d.Button, {
    variant: "secondary",
    size: "sm",
    text: I.intl.string(I.t.N86XcP),
    onClick: function() {
      (0, v.oC)(n)
    }
  })
}