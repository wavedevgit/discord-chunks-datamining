/** Chunk was on 22988 **/
/** chunk id: 81509, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.js"),
  Chunk782568 = require("./782568.js"),
  Chunk377171 = require("./377171.js"),
  Chunk565138 = require("./565138.js"),
  Chunk411198 = require("./411198.js"),
  Chunk526717 = require("./526717.js"),
  Chunk594278 = require("./594278.js"),
  Chunk549631 = require("./549631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk748812 = require("./748812.js");

function b(e) {
  let {
    subscribers: t
  } = e;
  return <div className={f.guildSubscriberCount}>{<div className={f.subscriberCountValue}><a.Text variant={"text-md/normal"} color={"always-white"}>{t}</a.Text></div>}{<div className={f.subscriberCountText}>{<p.Z color={c.Z.WHITE} />}{<a.Text variant={"text-md/normal"} color={"always-white"}>{h.intl.string(h.t["3NNXPT"])}</a.Text>}</div>}</div>
}

function x(e) {
  let {
    guildName: t,
    guildIcon: n,
    guildAvatarUrl: i,
    subscriberCount: l
  } = e, s = (0, u.Jh)({
    name: t,
    icon: n
  });
  return <div className={f.guildCardHeader}>{<d.Z className={f.guildCardHeaderAvatar} iconSrc={i} guild={s} size={d.Z.Sizes.LARGE} />}{<div className={f.guildCardHeaderTitle}>{<a.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{t}</a.X6q>}{null != l && <b subscribers={l} />}</div>}</div>
}

function j(e) {
  let {
    quote: t,
    quoteAttribution: n,
    quoteAttributionTitle: i
  } = e;
  return <div className={f.guildCardQuote}>{<a.Text variant={"text-lg/normal"} color={"interactive-active"}>{t}</a.Text>}{<a.Text variant={"text-md/normal"} color={"interactive-active"}>{h.intl.format(h.t.m0b6Ki, {
        attributionName: n,
        attributionTitle: null != i ? i : h.intl.string(h.t.pclUFB)
      })}</a.Text>}</div>
}

function v(e) {
  let {
    emojisToShow: t,
    notShownEmojiCount: n,
    storePageUrl: i
  } = e, c = null != t && t.length > 0, d = () => {
    null != i && (0, o.Z)(i)
  };
  return <div className={f.guildPremiumEmojis}>{c ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "header-primary",
        className: f.premiumEmojisTitle,
        children: h.intl.string(h.t.wg53Ly)
      }), (0, r.jsxs)("div", {
        className: f.premiumEmojisRow,
        children: [(0, r.jsxs)("div", {
          className: l()(f.emojisContainer, null != n && f.fullEmojisContainer),
          children: [t.map(e => (0, r.jsx)(s.Z, {
            className: f.emoji,
            emojiId: e.id,
            emojiName: e.name,
            animated: e.animated
          }, e.id)), null != n && (0, r.jsx)("div", {
            className: f.extraEmojiCount,
            children: (0, r.jsxs)(a.Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: ["+", n]
            })
          })]
        }), (0, r.jsx)("div", {
          className: f.viewServerButtonContainer,
          children: (0, r.jsx)(a.zxk, {
            variant: "secondary",
            disabled: null == i,
            onClick: d,
            text: h.intl.string(h.t.mQ2IGR),
            fullWidth: true
          })
        })]
      })]
    }) : (0, r.jsx)("div", {
      className: f.viewServerButtonContainer,
      children: (0, r.jsx)(a.zxk, {
        variant: "secondary",
        disabled: null == i,
        onClick: d,
        text: h.intl.string(h.t.mQ2IGR),
        fullWidth: true
      })
    })}</div>
}

function _(e) {
  let {
    highlightedCreatorGuild: t
  } = e, {
    guild_id: n,
    quote: i,
    quote_attribution: l,
    quote_attribution_title: s
  } = t, o = (0, m.Z)(n, 4, 60), {
    isLoading: c,
    hasAllImperativeDetails: d
  } = o;
  if (c) return <div className={f.guildCard}><a.$jN /></div>;
  if (!d) return null;
  let {
    guildIcon: u,
    guildName: g,
    guildAvatarUrl: p,
    subscriberCount: h,
    emojisToShow: b,
    notShownEmojiCount: _,
    storePageUrl: O
  } = o.details;
  return <div className={f.guildCard}>{<x guildIcon={u} guildName={g} guildAvatarUrl={p} subscriberCount={h} />}{<j quote={i} quoteAttribution={l} quoteAttributionTitle={s} />}{<v emojisToShow={b} notShownEmojiCount={_} storePageUrl={O} />}</div>
}

function O(e) {
  let {
    highlightedCreators: t
  } = e;
  return <div>{<a.X6q variant={"heading-lg/semibold"} color={"header-primary"}>{h.intl.string(h.t["tJp+QU"])}</a.X6q>}{<a.LZC size={24} />}{<g.Z carouselClassName={f.creatorGuildCarousel} items={t} renderItem={e => (0, r.jsx)(_, {
        highlightedCreatorGuild: e
      })} intervalBetweenAutomaticItemRotations={7e3} />}</div>
}