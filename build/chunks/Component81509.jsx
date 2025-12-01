/** Chunk was on 384 **/
/** chunk id: 81509, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => O
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  l = require.n(Chunk120356),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk596454 = require("./596454.jsx"),
  Chunk782568 = require("./782568.js"),
  Chunk565138 = require("./565138.jsx"),
  Chunk411198 = require("./411198.js"),
  Chunk526717 = require("./526717.js"),
  Chunk594278 = require("./594278.jsx"),
  Chunk549631 = require("./549631.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk980989 = require("./980989.js");

function b(e) {
  let {
    subscribers: t
  } = e;
  return (0, r.jsxs)("div", {
    className: h.guildSubscriberCount,
    children: [(0, r.jsx)("div", {
      className: h.subscriberCountValue,
      children: (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t
      })
    }), (0, r.jsxs)("div", {
      className: h.subscriberCountText,
      children: [(0, r.jsx)(p.Z, {
        color: a.Z.colors.WHITE.css
      }), (0, r.jsx)(s.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: f.intl.string(f.t["3NNXPW"])
      })]
    })]
  })
}

function x(e) {
  let {
    guildName: t,
    guildIcon: n,
    guildAvatarUrl: i,
    subscriberCount: l
  } = e, a = (0, u.dangerouslyConstructGuildRecordFromUntypedObject)({
    name: t,
    icon: n
  });
  return (0, r.jsxs)("div", {
    className: h.guildCardHeader,
    children: [(0, r.jsx)(d.Z, {
      className: h.guildCardHeaderAvatar,
      iconSrc: i,
      guild: a,
      size: d.Z.Sizes.LARGE
    }), (0, r.jsxs)("div", {
      className: h.guildCardHeaderTitle,
      children: [(0, r.jsx)(s.Heading, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: t
      }), null != l && (0, r.jsx)(b, {
        subscribers: l
      })]
    })]
  })
}

function j(e) {
  let {
    quote: t,
    quoteAttribution: n,
    quoteAttributionTitle: i
  } = e;
  return (0, r.jsxs)("div", {
    className: h.guildCardQuote,
    children: [(0, r.jsx)(s.Text, {
      variant: "text-lg/normal",
      color: "interactive-active",
      children: t
    }), (0, r.jsx)(s.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      children: f.intl.format(f.t.m0b6Kj, {
        attributionName: n,
        attributionTitle: null != i ? i : f.intl.string(f.t.pclUFJ)
      })
    })]
  })
}

function _(e) {
  let {
    emojisToShow: t,
    notShownEmojiCount: n,
    storePageUrl: i
  } = e, a = null != t && t.length > 0, d = () => {
    null != i && (0, c.Z)(i)
  };
  return (0, r.jsx)("div", {
    className: h.guildPremiumEmojis,
    children: a ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/semibold",
        color: "header-primary",
        className: h.premiumEmojisTitle,
        children: f.intl.string(f.t.wg53L8)
      }), (0, r.jsxs)("div", {
        className: h.premiumEmojisRow,
        children: [(0, r.jsxs)("div", {
          className: l()(h.emojisContainer, null != n && h.fullEmojisContainer),
          children: [t.map(e => (0, r.jsx)(o.Z, {
            className: h.emoji,
            emojiId: e.id,
            emojiName: e.name,
            animated: e.animated
          }, e.id)), null != n && (0, r.jsx)("div", {
            className: h.extraEmojiCount,
            children: (0, r.jsxs)(s.Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: ["+", n]
            })
          })]
        }), (0, r.jsx)("div", {
          className: h.viewServerButtonContainer,
          children: (0, r.jsx)(s.Button, {
            variant: "secondary",
            disabled: null == i,
            onClick: d,
            text: f.intl.string(f.t.mQ2IGa),
            fullWidth: true
          })
        })]
      })]
    }) : (0, r.jsx)("div", {
      className: h.viewServerButtonContainer,
      children: (0, r.jsx)(s.Button, {
        variant: "secondary",
        disabled: null == i,
        onClick: d,
        text: f.intl.string(f.t.mQ2IGa),
        fullWidth: true
      })
    })
  })
}

function v(e) {
  let {
    highlightedCreatorGuild: t
  } = e, {
    guild_id: n,
    quote: i,
    quote_attribution: l,
    quote_attribution_title: a
  } = t, o = (0, g.Z)(n, 4, 60), {
    isLoading: c,
    hasAllImperativeDetails: d
  } = o;
  if (c) return (0, r.jsx)("div", {
    className: h.guildCard,
    children: (0, r.jsx)(s.$jN, {})
  });
  if (!d) return null;
  let {
    guildIcon: u,
    guildName: m,
    guildAvatarUrl: p,
    subscriberCount: f,
    emojisToShow: b,
    notShownEmojiCount: v,
    storePageUrl: O
  } = o.details;
  return (0, r.jsxs)("div", {
    className: h.guildCard,
    children: [(0, r.jsx)(x, {
      guildIcon: u,
      guildName: m,
      guildAvatarUrl: p,
      subscriberCount: f
    }), (0, r.jsx)(j, {
      quote: i,
      quoteAttribution: l,
      quoteAttributionTitle: a
    }), (0, r.jsx)(_, {
      emojisToShow: b,
      notShownEmojiCount: v,
      storePageUrl: O
    })]
  })
}

function O(e) {
  let {
    highlightedCreators: t
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(s.Heading, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: f.intl.string(f.t["tJp+QV"])
    }), (0, r.jsx)(s.LZC, {
      size: 24
    }), (0, r.jsx)(m.Z, {
      carouselClassName: h.creatorGuildCarousel,
      items: t,
      renderItem: e => (0, r.jsx)(v, {
        highlightedCreatorGuild: e
      }),
      intervalBetweenAutomaticItemRotations: 7e3
    })]
  })
}