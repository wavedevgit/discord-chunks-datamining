/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => N
});
var r = n(200651);
n(192379);
var i = n(120356),
  s = n.n(i),
  a = n(481060),
  l = n(596454),
  o = n(782568),
  A = n(377171),
  c = n(565138),
  d = n(601964),
  u = n(526717),
  g = n(594278),
  f = n(549631),
  m = n(388032),
  p = n(679035);

function h(e) {
  let {
    subscribers: t
  } = e;
  return (0, r.jsxs)("div", {
    className: p.guildSubscriberCount,
    children: [(0, r.jsx)("div", {
      className: p.subscriberCountValue,
      children: (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t
      })
    }), (0, r.jsxs)("div", {
      className: p.subscriberCountText,
      children: [(0, r.jsx)(f.Z, {
        color: A.Z.WHITE
      }), (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: m.NW.string(m.t["3NNXPT"])
      })]
    })]
  })
}

function C(e) {
  let {
    guildName: t,
    guildIcon: n,
    guildAvatarUrl: i,
    subscriberCount: s
  } = e, l = new d.ZP({
    name: t,
    icon: n
  });
  return (0, r.jsxs)("div", {
    className: p.guildCardHeader,
    children: [(0, r.jsx)(c.Z, {
      className: p.guildCardHeaderAvatar,
      iconSrc: i,
      guild: l,
      size: c.Z.Sizes.LARGE
    }), (0, r.jsxs)("div", {
      className: p.guildCardHeaderTitle,
      children: [(0, r.jsx)(a.X6q, {
        variant: "heading-lg/semibold",
        color: "header-primary",
        children: t
      }), null != s && (0, r.jsx)(h, {
        subscribers: s
      })]
    })]
  })
}

function b(e) {
  let {
    quote: t,
    quoteAttribution: n,
    quoteAttributionTitle: i
  } = e;
  return (0, r.jsxs)("div", {
    className: p.guildCardQuote,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-lg/normal",
      color: "interactive-active",
      children: t
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "interactive-active",
      children: m.NW.format(m.t.m0b6Ki, {
        attributionName: n,
        attributionTitle: null != i ? i : m.NW.string(m.t.pclUFB)
      })
    })]
  })
}

function v(e) {
  let {
    emojisToShow: t,
    notShownEmojiCount: n,
    storePageUrl: i
  } = e, A = null != t && t.length > 0, c = () => {
    null != i && (0, o.Z)(i)
  };
  return (0, r.jsx)("div", {
    className: p.guildPremiumEmojis,
    children: A ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "header-primary",
        className: p.premiumEmojisTitle,
        children: m.NW.string(m.t.wg53Ly)
      }), (0, r.jsxs)("div", {
        className: p.premiumEmojisRow,
        children: [(0, r.jsxs)("div", {
          className: s()(p.emojisContainer, null != n && p.fullEmojisContainer),
          children: [t.map(e => (0, r.jsx)(l.Z, {
            className: p.emoji,
            emojiId: e.id,
            emojiName: e.name,
            animated: e.animated
          }, e.id)), null != n && (0, r.jsx)("div", {
            className: p.extraEmojiCount,
            children: (0, r.jsxs)(a.Text, {
              variant: "text-md/semibold",
              color: "text-normal",
              children: ["+", n]
            })
          })]
        }), (0, r.jsx)("div", {
          children: (0, r.jsx)(a.zxk, {
            className: p.viewServerButton,
            innerClassName: p.viewServerButtonText,
            color: a.zxk.Colors.CUSTOM,
            disabled: null == i,
            onClick: c,
            children: m.NW.string(m.t.mQ2IGR)
          })
        })]
      })]
    }) : (0, r.jsx)(a.zxk, {
      className: s()(p.viewServerButton, p.roundedEdges),
      innerClassName: p.viewServerButtonText,
      color: a.zxk.Colors.CUSTOM,
      disabled: null == i,
      onClick: c,
      children: m.NW.string(m.t.mQ2IGR)
    })
  })
}

function x(e) {
  let {
    highlightedCreatorGuild: t
  } = e, {
    guild_id: n,
    quote: i,
    quote_attribution: s,
    quote_attribution_title: l
  } = t, o = (0, u.Z)(n, 4, 60), {
    isLoading: A,
    hasAllImperativeDetails: c
  } = o;
  if (A) return (0, r.jsx)("div", {
    className: p.guildCard,
    children: (0, r.jsx)(a.$jN, {})
  });
  if (!c) return null;
  let {
    guildIcon: d,
    guildName: g,
    guildAvatarUrl: f,
    subscriberCount: m,
    emojisToShow: h,
    notShownEmojiCount: x,
    storePageUrl: N
  } = o.details;
  return (0, r.jsxs)("div", {
    className: p.guildCard,
    children: [(0, r.jsx)(C, {
      guildIcon: d,
      guildName: g,
      guildAvatarUrl: f,
      subscriberCount: m
    }), (0, r.jsx)(b, {
      quote: i,
      quoteAttribution: s,
      quoteAttributionTitle: l
    }), (0, r.jsx)(v, {
      emojisToShow: h,
      notShownEmojiCount: x,
      storePageUrl: N
    })]
  })
}

function N(e) {
  let {
    highlightedCreators: t
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.X6q, {
      variant: "heading-lg/semibold",
      color: "header-primary",
      children: m.NW.string(m.t["tJp+QU"])
    }), (0, r.jsx)(a.LZC, {
      size: 24
    }), (0, r.jsx)(g.Z, {
      carouselClassName: p.creatorGuildCarousel,
      items: t,
      renderItem: e => (0, r.jsx)(x, {
        highlightedCreatorGuild: e
      }),
      intervalBetweenAutomaticItemRotations: 7e3
    })]
  })
}