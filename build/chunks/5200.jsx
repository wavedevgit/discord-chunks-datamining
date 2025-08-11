/** Chunk was on web.js **/
/** chunk id: 5200, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Y: () => y
}), require("./388685.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk126663 = require("./126663.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk542094 = require("./542094.js"),
  Chunk182906 = require("./182906.js"),
  Chunk556505 = require("./556505.js"),
  Chunk513202 = require("./513202.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk968216 = require("./968216.js");
let g = ["embedded_cover"],
  E = {
    tension: 800,
    friction: 24
  };
var b = function(e) {
  return e[e.THIRTEEN_BY_ELEVEN = 0] = "THIRTEEN_BY_ELEVEN", e[e.SIXTEEN_BY_NINE = 1] = "SIXTEEN_BY_NINE", e
}(b || {});

function y(e) {
  var t;
  let {
    context: n,
    activityItem: o,
    onClick: b,
    aspectRatio: y = 0,
    animatedDivClass: O,
    commandOrigin: v
  } = e, {
    onActivityItemSelected: I,
    imageBackground: T,
    activityAction: S,
    labelType: A
  } = (0, u.ZP)({
    context: n,
    activityItem: o,
    guildId: null != (t = n.channel.getGuildId()) ? t : true,
    locationObject: {},
    onActivityItemSelected: b,
    embeddedActivitiesManager: _.Z,
    assetNames: g,
    commandOrigin: v
  }), [N, C] = i.useState(false), R = i.useCallback(() => {
    C(true)
  }, [C]), P = i.useCallback(() => {
    C(false)
  }, [C]), w = i.useMemo(() => <div className={m.overlayBadge}><div className={m.badgeContainer}><f.Z labelType={A} /></div></div>, [A]), D = i.useMemo(() => {
    switch (S) {
      case u.JS.JOIN:
        return <div className={m.activityAction}><div className={m.activityActionButton}><c.Text variant={"text-sm/medium"} color={"always-white"}>{h.intl.string(h.t.VJlc0d)}</c.Text></div></div>;
      case u.JS.LEAVE:
        return <div className={m.activityAction}><div className={a()(m.activityActionButton, m.activityActionButtonDanger)}><c.Text variant={"text-sm/medium"} color={"always-white"}>{h.intl.string(h.t["wH/wDA"])}</c.Text></div></div>;
      case u.JS.START:
      default:
        return null
    }
  }, [S]);
  return <l.zx onClick={I} color={"transparent"} look={l.zx.Looks.BLANK} size={l.zx.Sizes.NONE} onFocus={R} onBlur={P} onMouseEnter={R} onMouseLeave={P} innerClassName={m.activityItemButtonInnerClass}><c.AMe config={E} from={{
        value: 0
      }} to={{
        value: +!!N
      }}>{e => {
        let {
          value: t
        } = e;
        return (0, r.jsx)(c.f6W, {
          theme: p.BRd.DARK,
          children: e => (0, r.jsxs)(s.animated.div, {
            className: a()(e, m.activityItem, O, {
              [m.activityItem_13_11]: 0 === y,
              [m.activityItem_16_9]: 1 === y
            }),
            style: {
              transform: t.to([0, 1], [1, 1.05]).to(e => "scale(".concat(e, ")"))
            },
            children: [(0, r.jsx)(d.Z, {
              imageBackground: T,
              applicationName: o.application.name,
              imageClassName: m.activitySuggestionImage,
              imageNotFoundClassName: m.brokenImageIconWrapper
            }), w, D]
          })
        })
      }}</c.AMe></l.zx>
}
y.AspectRatio = b