/** Chunk was on 37082 **/
/** chunk id: 303385, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk126663 = require("./126663.js"),
  Chunk481060 = require("./481060.js"),
  Chunk497505 = require("./497505.js"),
  Chunk644646 = require("./644646.js"),
  Chunk46140 = require("./46140.js"),
  Chunk388032 = require("./388032.js"),
  Chunk420444 = require("./420444.js");
let d = e => {
  let {
    quest: t,
    expansionSpring: n,
    isFullyExpanded: d,
    partnerBranding: p,
    useReducedMotion: m
  } = e;
  return <r.Fragment>{<div className={u.rewardTileSpacer} />}{<s.animated.div className={u.rewardTileContainer} style={{
        transform: (0, s.to)([n.to({
          range: [0, 1],
          output: [false, 0]
        }), n.to({
          range: [0, 1],
          output: [0, 92]
        }), n.to({
          range: [1, 0],
          output: [1, .75]
        })], (e, t, n) => "translate(".concat(e, "px, ").concat(t, "px) scale(").concat(n, ")"))
      }}><i.Z learnMoreStyle={"text"} quest={t} questContent={a.jn.QUEST_BAR_V2} location={l.dr.QUESTS_BAR} autoplay={d && !m} sourceQuestContent={a.jn.QUEST_BAR_V2} /></s.animated.div>}{<s.animated.div className={u.rewardHighlightLogoCTA} style={{
        transform: (0, s.to)([n.to({
          range: [0, 1],
          output: [0, false]
        }), n.to({
          range: [0, 1],
          output: [0, 8]
        })], (e, t) => "translate(".concat(e, "px, ").concat(t, "px)"))
      }}>{<div className={u.partnerBranding}>{p}</div>}{<s.animated.div className={u.rewardHighlightCTA} style={{
          opacity: n.to({
            range: [0, 1],
            output: [.7, 0]
          })
        }}><o.Text color={"always-white"} variant={"text-xs/medium"}>{c.intl.string(c.t["1Wvve3"])}</o.Text></s.animated.div>}</s.animated.div>}</r.Fragment>
}