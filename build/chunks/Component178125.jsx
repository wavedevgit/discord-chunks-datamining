/** Chunk was on 95257 **/
/** chunk id: 178125, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  default: () => j
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk106351 = require("./106351.js"),
  Chunk442837 = require("./442837.js"),
  Chunk755721 = require("./755721.js"),
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

function j(e) {
  let {
    transitionState: n,
    onClose: t,
    parentId: i
  } = e, c = (0, d.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]), [u, m] = a.useState(c), [x, f] = a.useState(false);
  return (0, l.jsxs)(o.Y0X, {
    transitionState: n,
    parentComponent: "AddFavoriteChannelModal",
    children: [(0, l.jsxs)(o.xBx, {
      className: C.modalHeader,
      children: [(0, l.jsxs)("div", {
        className: C.modalHeaderTitle,
        children: [(0, l.jsx)(o.X6q, {
          variant: "text-lg/semibold",
          children: g.intl.string(g.t["4wcdEx"])
        }), (0, l.jsx)(o.olH, {
          onClick: t
        })]
      }), (0, l.jsx)("div", {
        className: C.guildSelector,
        children: (0, l.jsx)(s.q, {
          guildId: u,
          onChange: function(e) {
            null != e && m(e.id)
          }
        })
      })]
    }), (0, l.jsx)(o.hzk, {
      className: C.modalContent,
      children: (0, l.jsx)(p, {
        guildId: u,
        hideMutedChannels: x,
        parentId: i
      })
    }), (0, l.jsxs)(o.mzw, {
      className: C.modalFooter,
      children: [(0, l.jsx)(r.zx, {
        className: C.goBackButton,
        look: r.iL.BLANK,
        color: r.Tt.PRIMARY,
        size: r.Ph.SMALL,
        onClick: t,
        children: g.intl.string(g.t["/g10LC"])
      }), (0, l.jsx)("div", {
        children: (0, l.jsx)(o.XZJ, {
          type: o.XZJ.Types.INVERTED,
          value: x,
          onChange: (e, n) => f(n),
          children: (0, l.jsx)(o.Text, {
            variant: "text-sm/medium",
            color: "interactive-normal",
            children: g.intl.string(g.t.UwOLJC)
          })
        })
      })]
    })]
  })
}

function p(e) {
  let {
    guildId: n,
    hideMutedChannels: t,
    parentId: r
  } = e, o = (0, d.e7)([u.Z], () => u.Z.getCategories(n)), c = (0, v.Z)(o), s = a.useRef(null);
  return a.useEffect(() => {
    var e;
    null == s || null == (e = s.current) || e.scroll({
      top: 0
    })
  }, [n]), (0, l.jsx)("div", {
    ref: s,
    children: c.map(e => e.type === i.d.GUILD_CATEGORY ? (0, l.jsx)(_, {
      name: e.name
    }, e.id) : (0, l.jsx)(I, {
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
  return (0, l.jsx)(o.Text, {
    className: C.categoryRow,
    variant: "eyebrow",
    color: "interactive-normal",
    children: n
  })
}

function I(e) {
  let {
    channel: n,
    hideMutedChannels: t,
    parentId: a
  } = e, i = (0, f.s4)(n.id);
  if ((0, d.e7)([m.ZP], () => m.ZP.isChannelMuted(n.guild_id, n.id)) && t) return null;
  let r = (0, c.KS)(n);
  return (0, l.jsxs)("div", {
    className: C.channelRow,
    children: [(0, l.jsxs)("div", {
      className: C.channelName,
      children: [null != r && (0, l.jsx)("div", {
        className: C.channelIconContainer,
        children: (0, l.jsx)(r, {
          className: C.channelIcon,
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20
        })
      }), (0, l.jsx)(o.Text, {
        variant: "text-md/medium",
        color: "interactive-normal",
        children: n.name
      })]
    }), null != i ? (0, l.jsx)(A, {
      channelId: n.id
    }) : (0, l.jsx)(k, {
      channelId: n.id,
      parentId: a
    })]
  }, n.id)
}

function k(e) {
  let {
    channelId: n,
    parentId: t
  } = e;
  return (0, l.jsx)(r.zx, {
    look: r.iL.OUTLINED,
    size: r.Ph.SMALL,
    color: r.Tt.BRAND,
    onClick: function() {
      (0, x.kj)(n, t)
    },
    children: g.intl.string(g.t.OYkgVl)
  })
}

function A(e) {
  let {
    channelId: n
  } = e;
  return (0, l.jsx)(o.zxk, {
    variant: "secondary",
    size: "sm",
    text: g.intl.string(g.t.N86XcH),
    onClick: function() {
      (0, x.oC)(n)
    }
  })
}