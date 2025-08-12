/** Chunk was on 95257 **/
/** chunk id: 178125, original params: e,n,l (module,exports,require) **/
require.d(exports, {
  default: () => p
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
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
  Chunk105448 = require("./105448.js");

function p(e) {
  let {
    transitionState: n,
    onClose: l,
    parentId: a
  } = e, c = (0, d.e7)([h.ZP], () => h.ZP.getFlattenedGuildIds()[0]), [u, v] = i.useState(c), [f, m] = i.useState(false);
  return (0, t.jsxs)(r.Y0X, {
    transitionState: n,
    parentComponent: "AddFavoriteChannelModal",
    children: [(0, t.jsxs)(r.xBx, {
      className: j.modalHeader,
      children: [(0, t.jsxs)("div", {
        className: j.modalHeaderTitle,
        children: [(0, t.jsx)(r.X6q, {
          variant: "text-lg/semibold",
          children: g.intl.string(g.t["4wcdEx"])
        }), (0, t.jsx)(r.olH, {
          onClick: l
        })]
      }), (0, t.jsx)("div", {
        className: j.guildSelector,
        children: (0, t.jsx)(s.q, {
          guildId: u,
          onChange: function(e) {
            null != e && v(e.id)
          }
        })
      })]
    }), (0, t.jsx)(r.hzk, {
      className: j.modalContent,
      children: (0, t.jsx)(C, {
        guildId: u,
        hideMutedChannels: f,
        parentId: a
      })
    }), (0, t.jsxs)(r.mzw, {
      className: j.modalFooter,
      children: [(0, t.jsx)(o.zx, {
        className: j.goBackButton,
        look: o.iL.BLANK,
        color: o.Tt.PRIMARY,
        size: o.Ph.SMALL,
        onClick: l,
        children: g.intl.string(g.t["/g10LC"])
      }), (0, t.jsx)("div", {
        children: (0, t.jsx)(r.XZJ, {
          type: r.XZJ.Types.INVERTED,
          value: f,
          onChange: (e, n) => m(n),
          children: (0, t.jsx)(r.Text, {
            variant: "text-sm/medium",
            color: "interactive-normal",
            children: g.intl.string(g.t.UwOLJC)
          })
        })
      })]
    })]
  })
}

function C(e) {
  let {
    guildId: n,
    hideMutedChannels: l,
    parentId: o
  } = e, r = (0, d.e7)([u.Z], () => u.Z.getCategories(n)), c = (0, x.Z)(r), s = i.useRef(null);
  return i.useEffect(() => {
    var e;
    null == s || null == (e = s.current) || e.scroll({
      top: 0
    })
  }, [n]), (0, t.jsx)("div", {
    ref: s,
    children: c.map(e => e.type === a.d.GUILD_CATEGORY ? (0, t.jsx)(Z, {
      name: e.name
    }, e.id) : (0, t.jsx)(_, {
      channel: e,
      hideMutedChannels: l,
      parentId: o
    }, e.id))
  })
}

function Z(e) {
  let {
    name: n
  } = e;
  return (0, t.jsx)(r.Text, {
    className: j.categoryRow,
    variant: "eyebrow",
    color: "interactive-normal",
    children: n
  })
}

function _(e) {
  let {
    channel: n,
    hideMutedChannels: l,
    parentId: i
  } = e, a = (0, m.s4)(n.id);
  if ((0, d.e7)([v.ZP], () => v.ZP.isChannelMuted(n.guild_id, n.id)) && l) return null;
  let o = (0, c.KS)(n);
  return (0, t.jsxs)("div", {
    className: j.channelRow,
    children: [(0, t.jsxs)("div", {
      className: j.channelName,
      children: [null != o && (0, t.jsx)("div", {
        className: j.channelIconContainer,
        children: (0, t.jsx)(o, {
          className: j.channelIcon,
          size: "custom",
          color: "currentColor",
          height: 20,
          width: 20
        })
      }), (0, t.jsx)(r.Text, {
        variant: "text-md/medium",
        color: "interactive-normal",
        children: n.name
      })]
    }), null != a ? (0, t.jsx)(b, {
      channelId: n.id
    }) : (0, t.jsx)(I, {
      channelId: n.id,
      parentId: i
    })]
  }, n.id)
}

function I(e) {
  let {
    channelId: n,
    parentId: l
  } = e;
  return (0, t.jsx)(o.zx, {
    look: o.iL.OUTLINED,
    size: o.Ph.SMALL,
    color: o.Tt.BRAND,
    onClick: function() {
      (0, f.kj)(n, l)
    },
    children: g.intl.string(g.t.OYkgVl)
  })
}

function b(e) {
  let {
    channelId: n
  } = e;
  return (0, t.jsx)(r.zxk, {
    variant: "secondary",
    size: "sm",
    text: g.intl.string(g.t.N86XcH),
    onClick: function() {
      (0, f.oC)(n)
    }
  })
}