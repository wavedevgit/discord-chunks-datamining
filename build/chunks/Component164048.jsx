/** Chunk was on 16939 **/
/** chunk id: 164048, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => y
}), require("./896048.js"), require("./228524.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk92674 = require("./92674.js"),
  Chunk417597 = require("./417597.js"),
  Chunk827734 = require("./827734.js"),
  Chunk582754 = require("./582754.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk736653 = require("./736653.js"),
  Chunk508675 = require("./508675.js"),
  Chunk386784 = require("./386784.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk603414 = require("./603414.js");

function y(e) {
  let {
    guildId: t,
    option: n,
    selected: i,
    onSelect: y,
    hideMemberCount: j,
    canBeNew: x
  } = e, A = (0, u.Mw)((0, p.Ay)()), [b, C] = r.useState(false), O = b && !j, w = r.useRef(null), {
    reducedMotion: _
  } = r.useContext(d.CZY), N = (0, c.bG)([h.Ay], () => {
    var e, t, l, r;
    return (null == (t = n.emoji) ? true : t.id) != null && null != (e = null == (l = h.Ay.getCustomEmojiById(null == (r = n.emoji) ? true : r.id)) ? true : l.animated) && e
  }), P = (0, f.A)(t, 1e3), E = null == P || null == n.roleIds ? 0 : Math.max(...n.roleIds.map(e => P[e])), k = x && !i && n.isUnseen, I = (0, d.zhh)({
    transform: i || _.enabled ? "scale(1)" : "scale(0.7)",
    opacity: +!!i,
    config: {
      duration: 150
    }
  }, "animate-always"), D = (0, d.rdh)(s.A.colors.BORDER_SUBTLE), M = (0, d.rdh)(s.A.unsafe_rawColors.BRAND_500), T = (0, d.zhh)({
    from: {
      color: M.spring()
    },
    color: D.spring({
      opacity: A ? .5 : .25
    }),
    config: {
      duration: 300
    },
    delay: 500
  }, "animate-always"), R = (0, d.pnh)(O, {
    from: {
      transform: _.enabled ? "translateX(0)" : "translateX(8px)",
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
  }, "animate-always"), [S, L] = r.useState(false);
  r.useEffect(() => {
    if (O) return w.current = setTimeout(() => {
      C(false), w.current = null
    }, 3e3), () => {
      null != w.current && clearTimeout(w.current)
    }
  }, [O]);
  let K = a()(v.RH, {
      [v.wH]: i,
      [v.Vq]: S
    }),
    G = k ? {
      borderColor: T.color
    } : {};
  return (0, l.jsx)(o.animated.div, {
    style: G,
    className: K,
    children: (0, l.jsxs)(d.DUT, {
      className: v.AP,
      onClick: () => {
        C(!i), y(!i)
      },
      onMouseDown: () => L(true),
      onMouseUp: () => L(false),
      children: [null != n.emoji && (null != n.emoji.id || null != n.emoji.name) ? (0, l.jsx)(m.A, {
        animated: n.emoji.animated || N,
        className: v.t0,
        emojiId: n.emoji.id,
        emojiName: n.emoji.name
      }) : null, (0, l.jsxs)("div", {
        className: v._d,
        children: [(0, l.jsx)(d.Text, {
          variant: "text-md/medium",
          color: "text-strong",
          children: n.title
        }), n.description.length > 0 ? (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          children: n.description
        }) : null]
      }), (0, l.jsx)(o.animated.div, {
        className: v.oE,
        style: I,
        children: (0, l.jsx)(d.A9s, {
          size: "custom",
          width: 10,
          height: 10,
          color: s.A.unsafe_rawColors.WHITE.css
        })
      }), R((e, t) => E > 0 && t && (0, l.jsx)(o.animated.div, {
        className: v.Kl,
        style: e,
        children: (0, l.jsx)(d.Text, {
          variant: "text-xs/normal",
          color: "always-white",
          children: g.intl.format(g.t.EgKsZA, {
            memberCount: E
          })
        })
      })), k && (0, l.jsx)(d.LpS, {
        color: s.A.unsafe_rawColors.BRAND_260.css,
        text: g.intl.string(g.t.y2b7CA),
        className: v.Ad
      })]
    })
  })
}