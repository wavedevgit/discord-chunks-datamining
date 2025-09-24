/** Chunk was on 95257 **/
/** chunk id: 610617, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk82659 = require("./82659.jsx"),
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
  Chunk345986 = require("./345986.js");

function p(e) {
  let {
    transitionState: n,
    onClose: t,
    parentId: l
  } = e, o = (0, r.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]), [u, f] = i.useState(o), [v, x] = i.useState(false);
  return (0, a.jsx)(d.Modal, {
    title: g.intl.string(g.t["4wcdEx"]),
    actions: [],
    transitionState: n,
    onClose: t,
    input: (0, a.jsx)(s.q, {
      guildId: u,
      onChange: function(e) {
        null != e && f(e.id)
      }
    }),
    actionBarInput: (0, a.jsx)(c.XZJ, {
      checked: v,
      onChange: e => x(e),
      label: g.intl.string(g.t.UwOLJC)
    }),
    children: (0, a.jsx)(j, {
      guildId: u,
      hideMutedChannels: v,
      parentId: l
    })
  })
}

function j(e) {
  let {
    guildId: n,
    hideMutedChannels: t,
    parentId: d
  } = e, c = (0, r.e7)([u.Z], () => u.Z.getCategories(n)), o = (0, m.Z)(c), s = i.useRef(null);
  return i.useEffect(() => {
    var e;
    null == s || null == (e = s.current) || e.scroll({
      top: 0
    })
  }, [n]), (0, a.jsx)("div", {
    ref: s,
    children: o.map(e => e.type === l.d.GUILD_CATEGORY ? (0, a.jsx)(I, {
      name: e.name
    }, e.id) : (0, a.jsx)(_, {
      channel: e,
      hideMutedChannels: t,
      parentId: d
    }, e.id))
  })
}

function I(e) {
  let {
    name: n
  } = e;
  return (0, a.jsx)(c.Text, {
    className: C.categoryRow,
    variant: "eyebrow",
    color: "interactive-normal",
    children: n
  })
}

function _(e) {
  let {
    channel: n,
    hideMutedChannels: t,
    parentId: i
  } = e, l = (0, x.s4)(n.id);
  if ((0, r.e7)([f.ZP], () => f.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
  let d = (0, o.KS)(n);
  return (0, a.jsxs)("div", {
    className: C.channelRow,
    children: [(0, a.jsxs)("div", {
      className: C.channelName,
      children: [null != d && (0, a.jsx)("div", {
        className: C.channelIconContainer,
        children: (0, a.jsx)(d, {
          className: C.channelIcon,
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20
        })
      }), (0, a.jsx)(c.Text, {
        variant: "text-md/medium",
        color: "interactive-normal",
        children: n.name
      })]
    }), null != l ? (0, a.jsx)(k, {
      channelId: n.id
    }) : (0, a.jsx)(Z, {
      channelId: n.id,
      parentId: i
    })]
  }, n.id)
}

function Z(e) {
  let {
    channelId: n,
    parentId: t
  } = e;
  return (0, a.jsx)(c.zxk, {
    variant: "primary",
    size: "sm",
    text: g.intl.string(g.t.OYkgVl),
    onClick: function() {
      (0, v.kj)(n, t)
    }
  })
}

function k(e) {
  let {
    channelId: n
  } = e;
  return (0, a.jsx)(c.zxk, {
    variant: "secondary",
    size: "sm",
    text: g.intl.string(g.t.N86XcH),
    onClick: function() {
      (0, v.oC)(n)
    }
  })
}