/** Chunk was on 26494 **/
/** chunk id: 104265, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => v
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk689628 = require("./689628.js"),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk410030 = require("./410030.js"),
  Chunk339085 = require("./339085.js"),
  Chunk14263 = require("./14263.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk830626 = require("./830626.js");

function v(e) {
  let {
    guildId: n,
    option: t,
    selected: a,
    onSelect: v,
    hideMemberCount: j,
    canBeNew: C
  } = e, Z = (0, c.wj)((0, h.ZP)()), [y, w] = i.useState(false), N = y && !j, _ = i.useRef(null), {
    reducedMotion: b
  } = i.useContext(d.Sfi), k = (0, s.e7)([x.ZP], () => {
    var e, n, l, i;
    return (null == (e = t.emoji) ? true : e.id) != null && null != (i = null == (n = x.ZP.getCustomEmojiById(null == (l = t.emoji) ? true : l.id)) ? true : n.animated) && i
  }), M = (0, f.Z)(n, 1e3), R = null == M || null == t.roleIds ? 0 : Math.max(...t.roleIds.map(e => M[e])), T = C && !a && t.isUnseen, A = (0, d.q_F)({
    transform: a || b.enabled ? "scale(1)" : "scale(0.7)",
    opacity: +!!a,
    config: {
      duration: 150
    }
  }, "animate-always"), E = (0, d.dQu)(u.Z.colors.BORDER_SUBTLE), I = (0, d.dQu)(u.Z.unsafe_rawColors.BRAND_500), P = (0, d.q_F)({
    from: {
      color: I.spring()
    },
    color: E.spring({
      opacity: Z ? .5 : .25
    }),
    config: {
      duration: 300
    },
    delay: 500
  }, "animate-always"), z = (0, d.Yzy)(N, {
    from: {
      transform: b.enabled ? "translateX(0)" : "translateX(8px)",
      opacity: 0
    },
    enter: {
      transform: "translateX(0)",
      opacity: 1
    },
    leave: {
      opacity: 0
    },
    trail: 400,
    config: {
      duration: 150
    }
  }, "animate-always"), [B, S] = i.useState(false);
  i.useEffect(() => {
    if (N) return _.current = setTimeout(() => {
      w(false), _.current = null
    }, 3e3), () => {
      null != _.current && clearTimeout(_.current)
    }
  }, [N]);
  let W = o()(p.optionButtonWrapper, {
      [p.selected]: a,
      [p.pressed]: B
    }),
    O = T ? {
      borderColor: P.color
    } : {};
  return (0, l.jsx)(r.animated.div, {
    style: O,
    className: W,
    children: (0, l.jsxs)(d.P3F, {
      className: p.optionButton,
      onClick: () => {
        w(!a), v(!a)
      },
      onMouseDown: () => S(true),
      onMouseUp: () => S(false),
      children: [null != t.emoji && (null != t.emoji.id || null != t.emoji.name) ? (0, l.jsx)(m.Z, {
        animated: t.emoji.animated || k,
        className: p.buttonEmoji,
        emojiId: t.emoji.id,
        emojiName: t.emoji.name
      }) : null, (0, l.jsxs)("div", {
        className: p.buttonText,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: t.title
        }), t.description.length > 0 ? (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: t.description
        }) : null]
      }), (0, l.jsx)(r.animated.div, {
        className: p.checkIcon,
        style: A,
        children: (0, l.jsx)(d.dz2, {
          size: "custom",
          width: 10,
          height: 10,
          color: u.Z.unsafe_rawColors.WHITE_500.css
        })
      }), z((e, n) => R > 0 && n && (0, l.jsx)(r.animated.div, {
        className: p.memberCount,
        style: e,
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: g.intl.format(g.t.EgKsZA, {
            memberCount: R
          })
        })
      })), T && (0, l.jsx)(d.IGR, {
        color: u.Z.unsafe_rawColors.BRAND_260.css,
        text: g.intl.string(g.t.y2b7CA),
        className: p.newBadge
      })]
    })
  })
}