/** Chunk was on 37082 **/
/** chunk id: 308069, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => _
});
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk617136 = require("./617136.js"),
  Chunk915750 = require("./915750.js"),
  Chunk509212 = require("./509212.js"),
  Chunk497505 = require("./497505.js"),
  Chunk685613 = require("./685613.js"),
  Chunk110560 = require("./110560.jsx"),
  Chunk670638 = require("./670638.js"),
  Chunk303385 = require("./303385.jsx"),
  Chunk388032 = require("./388032.js"),
  Chunk74783 = require("./74783.js");
let _ = e => {
  let {
    quest: t,
    expansionSpring: n,
    onCtxMenuSelect: o,
    onCtxMenuOpen: _,
    onCtxMenuClose: b,
    useReducedMotion: v,
    isExpanded: C,
    isExpansionAnimationComplete: y
  } = e, O = (0, u.aM)(), E = s.useCallback(() => {
    (0, g.openDisclosureModal)(t, {
      content: p.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_DISCLOSURE,
      sourceQuestContent: p.jn.QUEST_BAR_V2
    })
  }, [t]), S = s.useCallback(() => {
    (0, d.nc)(t, {
      content: p.jn.QUEST_BAR_V2,
      ctaContent: c.jZ.OPEN_GAME_LINK,
      impressionId: O,
      sourceQuestContent: p.jn.QUEST_BAR_V2
    })
  }, [O, t]), T = C && y, w = <l.P3F onClick={S} className={a()(j.clickable, {
      [j.logo]: T
    })}><m.ZP quest={t} logotypeClassName={j.rewardHighlightLogotype} withGameTile={false} /></l.P3F>;
  return <i.animated.div className={a()(j.wrapper, j.rewardHighlightWrapper, {
      [j.interactable]: T
    })} style={{
      transform: (0, i.to)([n.to({
        range: [0, 1],
        output: [8, 0]
      })], e => "translateY(".concat(e, "px"))
    }}>{<i.animated.div className={j.opaqueExpandedBackground} style={{
        opacity: n.to({
          range: [0, 1],
          output: [0, 1]
        })
      }} />}{<x.Z quest={t} expansionSpring={n} isFullyExpanded={T} partnerBranding={w} useReducedMotion={v} />}{<i.animated.div className={j.promotedBadgeWrapper} style={{
        opacity: n.to({
          range: [0, 1],
          output: [0, 1]
        })
      }}>{<l.P3F className={j.promotedBadge} onClick={E}>{<l.Text color={"always-white"} variant={"text-xs/normal"}>{h.intl.string(h.t.o6FLcH)}</l.Text>}{<l.idN color={l.TVs.colors.WHITE} className={j.promotedBadgeIcon} />}</l.P3F>}{<f.r onOpen={_} onClose={b} onSelect={o} questContent={p.jn.QUEST_BAR_V2} quest={t} shouldShowDisclosure={true} showShareLink={true} sourceQuestContent={p.jn.QUEST_BAR_V2}>{e => {
          var t, n;
          return (0, r.jsx)(l.P3F, (t = function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = null != arguments[t] ? arguments[t] : {},
                r = Object.keys(n);
              "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
                return Object.getOwnPropertyDescriptor(n, e).enumerable
              }))), r.forEach(function(t) {
                var r;
                r = n[t], t in e ? Object.defineProperty(e, t, {
                  value: r,
                  enumerable: true,
                  configurable: true,
                  writable: true
                }) : e[t] = r
              })
            }
            return e
          }({}, e), n = n = {
            className: j.submenuWrapper,
            "aria-label": h.intl.string(h.t.DEoVWV),
            children: (0, r.jsx)(l.xhG, {
              size: "md",
              color: "currentColor",
              className: a()(j.submenuIcon, j.white)
            })
          }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : (function(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
              var r = Object.getOwnPropertySymbols(e);
              n.push.apply(n, r)
            }
            return n
          })(Object(n)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
          }), t))
        }}</f.r>}</i.animated.div>}</i.animated.div>
}