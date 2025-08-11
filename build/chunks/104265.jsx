/** Chunk was on 58121 **/
/** chunk id: 104265, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
}), require("./388685.js"), require("./953529.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk399606 = require("./399606.js"),
  Chunk692547 = require("./692547.js"),
  Chunk780384 = require("./780384.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk410030 = require("./410030.js"),
  Chunk339085 = require("./339085.js"),
  Chunk14263 = require("./14263.js"),
  Chunk388032 = require("./388032.js"),
  Chunk136338 = require("./136338.js");

function _(e) {
  let {
    guildId: t,
    option: n,
    selected: i,
    onSelect: _,
    hideMemberCount: C,
    canBeNew: b
  } = e, j = (0, d.wj)((0, h.ZP)()), [v, y] = r.useState(false), O = v && !C, Z = r.useRef(null), {
    reducedMotion: N
  } = r.useContext(u.Sfi), I = (0, s.e7)([p.ZP], () => {
    var e, t, l, r;
    return (null == (e = n.emoji) ? true : e.id) != null && null != (r = null == (t = p.ZP.getCustomEmojiById(null == (l = n.emoji) ? true : l.id)) ? true : t.animated) && r
  }), w = (0, f.Z)(t, 1e3), P = null == w || null == n.roleIds ? 0 : Math.max(...n.roleIds.map(e => w[e])), E = b && !i && n.isUnseen, S = (0, u.q_F)({
    transform: i || N.enabled ? "scale(1)" : "scale(0.7)",
    opacity: +!!i,
    config: {
      duration: 150
    }
  }, "animate-always"), T = (0, u.dQu)(c.Z.colors.BORDER_SUBTLE), A = (0, u.dQu)(c.Z.unsafe_rawColors.BRAND_500), k = (0, u.q_F)({
    from: {
      color: A.spring()
    },
    color: T.spring({
      opacity: j ? .5 : .25
    }),
    config: {
      duration: 300
    },
    delay: 500
  }, "animate-always"), B = (0, u.Yzy)(O, {
    from: {
      transform: N.enabled ? "translateX(0)" : "translateX(8px)",
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
  }, "animate-always"), [R, D] = r.useState(false);
  r.useEffect(() => {
    if (O) return Z.current = setTimeout(() => {
      y(false), Z.current = null
    }, 3e3), () => {
      null != Z.current && clearTimeout(Z.current)
    }
  }, [O]);
  let L = a()(x.optionButtonWrapper, {
      [x.selected]: i,
      [x.pressed]: R
    }),
    M = E ? {
      borderColor: k.color
    } : {};
  return <o.animated.div style={M} className={L}><u.P3F className={x.optionButton} onClick={() => {
        y(!i), _(!i)
      }} onMouseDown={() => D(true)} onMouseUp={() => D(false)}>{null != n.emoji && (null != n.emoji.id || null != n.emoji.name) ? <m.Z animated={n.emoji.animated || I} className={x.buttonEmoji} emojiId={n.emoji.id} emojiName={n.emoji.name} /> : null}{<div className={x.buttonText}>{<u.Text variant={"text-md/medium"} color={"header-primary"}>{n.title}</u.Text>}{n.description.length > 0 ? <u.Text variant={"text-xs/normal"} color={"header-secondary"}>{n.description}</u.Text> : null}</div>}{<o.animated.div className={x.checkIcon} style={S}><u.dz2 size={"custom"} width={10} height={10} color={c.Z.unsafe_rawColors.WHITE_500.css} /></o.animated.div>}{B((e, t) => P > 0 && t && <o.animated.div className={x.memberCount} style={e}><u.Text variant={"text-xs/normal"} color={"always-white"}>{g.intl.format(g.t.EgKsZG, {
            memberCount: P
          })}</u.Text></o.animated.div>)}{E && <u.IGR color={c.Z.unsafe_rawColors.BRAND_260.css} text={g.intl.string(g.t.y2b7CA)} className={x.newBadge} />}</u.P3F></o.animated.div>
}