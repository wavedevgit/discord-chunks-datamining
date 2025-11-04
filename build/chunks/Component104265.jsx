/** Chunk was on 58121 **/
/** chunk id: 104265, original params: e,n,t (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
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

function _(e) {
  let {
    guildId: n,
    option: t,
    selected: i,
    onSelect: _,
    hideMemberCount: C,
    canBeNew: b
  } = e, j = (0, d.wj)((0, h.ZP)()), [v, y] = r.useState(false), O = v && !C, N = r.useRef(null), {
    reducedMotion: Z
  } = r.useContext(u.Sfi), I = (0, s.e7)([p.ZP], () => {
    var e, n, l, r;
    return (null == (e = t.emoji) ? true : e.id) != null && null != (r = null == (n = p.ZP.getCustomEmojiById(null == (l = t.emoji) ? true : l.id)) ? true : n.animated) && r
  }), w = (0, f.Z)(n, 1e3), P = null == w || null == t.roleIds ? 0 : Math.max(...t.roleIds.map(e => w[e])), E = b && !i && t.isUnseen, S = (0, u.q_F)({
    transform: i || Z.enabled ? "scale(1)" : "scale(0.7)",
    opacity: +!!i,
    config: {
      duration: 150
    }
  }, "animate-always"), T = (0, u.dQu)(c.Z.colors.BORDER_SUBTLE), B = (0, u.dQu)(c.Z.unsafe_rawColors.BRAND_500), A = (0, u.q_F)({
    from: {
      color: B.spring()
    },
    color: T.spring({
      opacity: j ? .5 : .25
    }),
    config: {
      duration: 300
    },
    delay: 500
  }, "animate-always"), R = (0, u.Yzy)(O, {
    from: {
      transform: Z.enabled ? "translateX(0)" : "translateX(8px)",
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
  }, "animate-always"), [k, D] = r.useState(false);
  r.useEffect(() => {
    if (O) return N.current = setTimeout(() => {
      y(false), N.current = null
    }, 3e3), () => {
      null != N.current && clearTimeout(N.current)
    }
  }, [O]);
  let L = a()(x.optionButtonWrapper, {
      [x.selected]: i,
      [x.pressed]: k
    }),
    M = E ? {
      borderColor: A.color
    } : {};
  return (0, l.jsx)(o.animated.div, {
    style: M,
    className: L,
    children: (0, l.jsxs)(u.P3F, {
      className: x.optionButton,
      onClick: () => {
        y(!i), _(!i)
      },
      onMouseDown: () => D(true),
      onMouseUp: () => D(false),
      children: [null != t.emoji && (null != t.emoji.id || null != t.emoji.name) ? (0, l.jsx)(m.Z, {
        animated: t.emoji.animated || I,
        className: x.buttonEmoji,
        emojiId: t.emoji.id,
        emojiName: t.emoji.name
      }) : null, (0, l.jsxs)("div", {
        className: x.buttonText,
        children: [(0, l.jsx)(u.Text, {
          variant: "text-md/medium",
          color: "header-primary",
          children: t.title
        }), t.description.length > 0 ? (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "header-secondary",
          children: t.description
        }) : null]
      }), (0, l.jsx)(o.animated.div, {
        className: x.checkIcon,
        style: S,
        children: (0, l.jsx)(u.dz2, {
          size: "custom",
          width: 10,
          height: 10,
          color: c.Z.unsafe_rawColors.WHITE_500.css
        })
      }), R((e, n) => P > 0 && n && (0, l.jsx)(o.animated.div, {
        className: x.memberCount,
        style: e,
        children: (0, l.jsx)(u.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: g.intl.format(g.t.EgKsZA, {
            memberCount: P
          })
        })
      })), E && (0, l.jsx)(u.IGR, {
        color: c.Z.unsafe_rawColors.BRAND_260.css,
        text: g.intl.string(g.t.y2b7CA),
        className: x.newBadge
      })]
    })
  })
}