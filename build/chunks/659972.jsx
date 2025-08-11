/** Chunk was on 24231 **/
/** chunk id: 659972, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => b,
  k: () => g
}), require("./953529.js");
var r, Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk372769 = require("./372769.jsx"),
  Chunk857395 = require("./857395.js"),
  Chunk131154 = require("./131154.jsx"),
  Chunk38981 = require("./38981.jsx"),
  Chunk7394 = require("./7394.js"),
  g = ((r = {})[r.UNSPECIFIED = 0] = "UNSPECIFIED", r[r.TRENDING = 1] = "TRENDING", r[r.PERSONALIZED = 2] = "PERSONALIZED", r[r.USER_GUILDS = 3] = "USER_GUILDS", r[r.FRIENDS_GUILDS = 4] = "FRIENDS_GUILDS", r[r.INTRO_CARD = 5] = "INTRO_CARD", r[r.FEATURED = 6] = "FEATURED", r);

function b(e) {
  let {
    guild: t,
    stageInstance: n,
    showGuildPopout: r,
    setShowGuildPopout: a,
    handleGuildNameClick: g,
    source: b,
    speakers: p,
    speakerCount: f,
    audienceCount: v,
    channelName: _
  } = e, j = l.useRef(null), N = t.id;
  return <div className={h.contentContainer}><div className={h.headerContainer}>{<div className={h.guildInfoContainer}>{<u.Z guildId={N} shouldShow={r} onRequestClose={() => a(false)} targetElementRef={j}>{() => (0, i.jsxs)(s.P3F, {
            className: h.flexContainerRow,
            onClick: g,
            innerRef: j,
            children: [(0, i.jsx)(c.Z, {
              guild: t,
              size: c.Z.Sizes.MINI,
              className: h.guildIcon
            }), (0, i.jsxs)("div", {
              className: h.flexContainerRow,
              children: [(0, i.jsx)(s.Text, {
                color: "header-secondary",
                variant: "text-sm/normal",
                className: o()(h.guildName, {
                  [h.disabled]: null == g
                }),
                children: t.name
              }), (0, i.jsx)(d.Z, {
                guild: t
              })]
            })]
          })}</u.Z>}{<div className={h.rightJustifiedContent}>{6 === b && <div className={h.featuredTag}><s.Text variant={"text-sm/normal"} className={h.featuredTagText}>{"Featured"}</s.Text></div>}{<m.Z count={v} className={h.__invalid_audienceCount} />}</div>}</div>}{<s.Text color={"header-primary"} variant={"text-lg/semibold"} className={h.topicText}>{n.topic}</s.Text>}{<s.Text color={"header-secondary"} className={h.description} variant={"text-sm/normal"}>{n.description}</s.Text>}{<x.Z guild={t} speakers={p} speakerCount={f} className={h.speakers} />}{null != _ && <i.Fragment>{<hr className={h.divider} />}{<div className={h.footer}>{<s.ewx size={"custom"} color={"currentColor"} width={20} height={20} className={h.icon} />}{<s.Text color={"header-secondary"} className={h.__invalid_label} variant={"text-sm/normal"}>{_}</s.Text>}</div>}</i.Fragment>}</div></div>
}