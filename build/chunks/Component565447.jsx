/** Chunk was on 47841 **/
/** chunk id: 565447, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => v
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk827734 = require("./827734.js"),
  Chunk397927 = require("./397927.js"),
  Chunk565645 = require("./565645.jsx"),
  Chunk975807 = require("./975807.js"),
  Chunk263063 = require("./263063.jsx"),
  Chunk860689 = require("./860689.js"),
  Chunk452499 = require("./452499.js"),
  Chunk477470 = require("./477470.jsx"),
  Chunk35275 = require("./35275.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk518863 = require("./518863.js");

function h(e) {
  let {
    subscribers: t
  } = e;
  return (0, r.jsxs)("div", {
    className: b.D$,
    children: [(0, r.jsx)("div", {
      className: b.DM,
      children: (0, r.jsx)(a.Text, {
        variant: "text-md/normal",
        color: "always-white",
        children: t
      })
    }), (0, r.jsxs)("div", {
      className: b.Dn,
      children: [(0, r.jsx)(p.A, {
        color: s.A.colors.WHITE.css
      }), (0, r.jsx)(a.Text, {
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
  } = e, s = (0, u.dangerouslyConstructGuildRecordFromUntypedObject)({
    name: t,
    icon: n
  });
  return (0, r.jsxs)("div", {
    className: b.hz,
    children: [(0, r.jsx)(d.A, {
      className: b.al,
      iconSrc: i,
      guild: s,
      size: d.A.Sizes.LARGE
    }), (0, r.jsxs)("div", {
      className: b.PY,
      children: [(0, r.jsx)(a.Heading, {
        variant: "heading-lg/semibold",
        color: "text-strong",
        children: t
      }), null != l && (0, r.jsx)(h, {
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
    className: b.GX,
    children: [(0, r.jsx)(a.Text, {
      variant: "text-lg/normal",
      color: "interactive-text-active",
      children: t
    }), (0, r.jsx)(a.Text, {
      variant: "text-md/normal",
      color: "interactive-text-active",
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
  } = e, s = null != t && t.length > 0, d = () => {
    null != i && (0, c.A)(i)
  };
  return (0, r.jsx)("div", {
    className: b.AC,
    children: s ? (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/semibold",
        color: "text-strong",
        className: b.JE,
        children: f.intl.string(f.t.wg53L8)
      }), (0, r.jsxs)("div", {
        className: b.lZ,
        children: [(0, r.jsxs)("div", {
          className: l()(b.fP, null != n && b.ow),
          children: [t.map(e => (0, r.jsx)(o.A, {
            className: b.Zg,
            emojiId: e.id,
            emojiName: e.name,
            animated: e.animated
          }, e.id)), null != n && (0, r.jsx)("div", {
            className: b.Ss,
            children: (0, r.jsxs)(a.Text, {
              variant: "text-md/semibold",
              color: "text-default",
              children: ["+", n]
            })
          })]
        }), (0, r.jsx)("div", {
          className: b.Yy,
          children: (0, r.jsx)(a.Button, {
            variant: "secondary",
            disabled: null == i,
            onClick: d,
            text: f.intl.string(f.t.mQ2IGa),
            fullWidth: true
          })
        })]
      })]
    }) : (0, r.jsx)("div", {
      className: b.Yy,
      children: (0, r.jsx)(a.Button, {
        variant: "secondary",
        disabled: null == i,
        onClick: d,
        text: f.intl.string(f.t.mQ2IGa),
        fullWidth: true
      })
    })
  })
}

function O(e) {
  let {
    highlightedCreatorGuild: t
  } = e, {
    guild_id: n,
    quote: i,
    quote_attribution: l,
    quote_attribution_title: s
  } = t, o = (0, g.A)(n, 4, 60), {
    isLoading: c,
    hasAllImperativeDetails: d
  } = o;
  if (c) return (0, r.jsx)("div", {
    className: b.w_,
    children: (0, r.jsx)(a.y$y, {})
  });
  if (!d) return null;
  let {
    guildIcon: u,
    guildName: m,
    guildAvatarUrl: p,
    subscriberCount: f,
    emojisToShow: h,
    notShownEmojiCount: O,
    storePageUrl: v
  } = o.details;
  return (0, r.jsxs)("div", {
    className: b.w_,
    children: [(0, r.jsx)(x, {
      guildIcon: u,
      guildName: m,
      guildAvatarUrl: p,
      subscriberCount: f
    }), (0, r.jsx)(j, {
      quote: i,
      quoteAttribution: l,
      quoteAttributionTitle: s
    }), (0, r.jsx)(_, {
      emojisToShow: h,
      notShownEmojiCount: O,
      storePageUrl: v
    })]
  })
}

function v(e) {
  let {
    highlightedCreators: t
  } = e;
  return (0, r.jsxs)("div", {
    children: [(0, r.jsx)(a.Heading, {
      variant: "heading-lg/semibold",
      color: "text-strong",
      children: f.intl.string(f.t["tJp+QV"])
    }), (0, r.jsx)(a.hKd, {
      size: 24
    }), (0, r.jsx)(m.A, {
      carouselClassName: b.g9,
      items: t,
      renderItem: e => (0, r.jsx)(O, {
        highlightedCreatorGuild: e
      }),
      intervalBetweenAutomaticItemRotations: 7e3
    })]
  })
}