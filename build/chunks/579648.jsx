/** Chunk was on 22988 **/
/** chunk id: 579648, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b
}), require("./953529.js"), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk570140 = require("./570140.js"),
  Chunk596454 = require("./596454.js"),
  Chunk524329 = require("./524329.js"),
  Chunk823379 = require("./823379.js"),
  Chunk999382 = require("./999382.js"),
  Chunk413584 = require("./413584.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk673305 = require("./673305.js"),
  Chunk62311 = require("./62311.js");
let f = e => {
    let {
      setWelcomeView: t,
      setShowCreateModal: i
    } = e, l = [{
      emoji: "\uD83D\uDCAC",
      description: g.intl.string(g.t["s/ent7"]),
      name: g.intl.string(g.t["v/gQ4e"])
    }, {
      emoji: "\uD83C\uDFF9",
      description: g.intl.string(g.t.Y9So0N),
      name: g.intl.string(g.t["7mUf0d"])
    }, {
      emoji: "\uD83D\uDDDE",
      description: g.intl.string(g.t.wsJcws),
      name: g.intl.string(g.t.vrGLjo)
    }];
    return <a.hjN title={g.intl.string(g.t["2rkmDg"])} tag={"h1"}>{<div className={p.welcomeDescription}>{<a.Text variant={"text-sm/normal"}>{g.intl.format(g.t.a59UeH, {})}</a.Text>}{<a.zxk variant={"primary"} text={g.intl.string(g.t.RWdjPz)} onClick={() => {
            i(true), t(2)
          }} />}</div>}{<div className={p.exampleContainer}>{<div className={p.exampleWumpus}>{<img className={p.wumpus} alt={""} src={n(663346)} />}{<div className={p.tooltipPointer} />}{<div className={p.tooltip}>{g.intl.string(g.t.aHNFSE)}</div>}</div>}{<div className={p.exampleModal}>{<img alt={""} className={h.guildIcon} src={n(691466)} width={64} height={64} />}{<a.X6q variant={"heading-xl/semibold"} className={p.header}>{g.intl.format(g.t["5NJlXl"], {})}</a.X6q>}{<a.Text variant={"text-sm/normal"} color={"header-secondary"} className={h.guildDescription}>{g.intl.string(g.t.Xvsuk5)}</a.Text>}{<a.vwX className={h.choiceHeader}>{g.intl.string(g.t["haj5+v"])}</a.vwX>}{<div className={h.options}>{l.map(e => (0, r.jsxs)("div", {
              className: p.optionContainer,
              children: [(0, r.jsx)(o.Z, {
                emojiName: e.emoji,
                className: h.optionEmoji
              }), (0, r.jsxs)("div", {
                className: h.optionTextContainer,
                children: [(0, r.jsx)(a.Text, {
                  variant: "text-md/semibold",
                  className: h.channelDescription,
                  children: e.description
                }), (0, r.jsx)(a.Text, {
                  variant: "text-xs/normal",
                  color: "header-secondary",
                  children: "#".concat(e.name)
                })]
              })]
            }, e.name))}</div>}</div>}</div>}</a.hjN>
  },
  b = () => {
    let {
      guild: e
    } = (0, Chunk442837.e7)([Chunk999382.Z], () => Chunk999382.Z.getProps()), [t, n] = Chunk73800.useState(0), [o, g] = Chunk73800.useState(false);
    switch (Chunk73800.useEffect(() => {
        null != module && Chunk570140.Z.wait(() => {
          (0, Chunk524329.RM)(module.id).then(e => {
            n(null == e ? 1 : 2)
          })
        })
      }, [module]), exports) {
      case 0:
        return <Chunk481060.$jN type={Chunk481060.$jN.Type.SPINNING_CIRCLE} />;
      case 1:
        return <f setWelcomeView={require} setShowCreateModal={Chunk388032} />;
      case 2:
        return <Chunk413584.Z guild={module} showCreateModal={Chunk596454} />;
      default:
        return (0, Chunk823379.vE)(exports)
    }
  }