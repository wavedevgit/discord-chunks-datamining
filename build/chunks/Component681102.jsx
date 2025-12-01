/** Chunk was on web.js **/
/** chunk id: 681102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk97028 = require("./97028.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk214288 = require("./214288.js"),
  Chunk638912 = require("./638912.js");
let m = 10,
  h = 2;

function g(e) {
  let {
    game: t,
    activityLevel: n,
    hideTooltip: i
  } = e, a = t.getIconURL(24), o = (0, p.B)(), g = (0, f.Z)({
    location: "GuildProfile",
    source: d.m1.GuildProfile,
    trackEntryPointImpression: true,
    applicationId: t.id
  });
  if (null == a) return null;
  let E = !i,
    b = (null == n ? true : n.level) === s.m.HIGH,
    y = (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "interactive-active",
      children: t.name
    }),
    O = (0, r.jsx)(l.u, {
      __unsupportedReactNodeAsText: y,
      position: "bottom",
      "aria-label": t.name,
      shouldShow: E,
      children: (0, r.jsxs)("div", {
        className: _.gameIcon,
        children: [(0, r.jsx)("img", {
          className: _.gameIconImage,
          src: a,
          alt: t.name
        }), b && (0, r.jsx)(u.ZP, {
          mask: u.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
          width: m + 2 * h,
          height: m + 2 * h,
          className: _.gameActivityLevel,
          children: (0, r.jsx)("div", {
            className: _.gameActivityLevelInner,
            children: (0, r.jsx)(c.YqE, {
              color: c.TVs.unsafe_rawColors.ORANGE_330.css,
              width: m,
              height: m,
              size: "custom"
            })
          })
        })]
      })
    });
  return o ? (0, r.jsx)(c.P3F, {
    onClick: g,
    className: _.gameIconWrapper,
    children: O
  }) : O
}

function E(e) {
  let {
    games: t,
    activity: n
  } = e;
  return (0, r.jsx)("div", {
    className: _.extraGamesContainer,
    children: t.map(e => (0, r.jsxs)("div", {
      className: _.extraGameRow,
      children: [(0, r.jsx)(g, {
        game: e,
        activityLevel: n[e.id]
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "interactive-active",
        children: e.name
      })]
    }, e.id))
  })
}

function b(e) {
  let {
    game: t,
    activityLevel: n
  } = e;
  return (0, r.jsxs)("div", {
    className: _.favoriteGameContainer,
    children: [(0, r.jsx)(g, {
      game: t,
      activityLevel: n,
      hideTooltip: true
    }), (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "text-default",
      children: t.name
    })]
  })
}

function y(e) {
  let {
    gamesToDisplay: t,
    lastGameToDisplay: n,
    remainingGames: a,
    activity: s
  } = e, u = i.useMemo(() => {
    if (null == n) return null;
    let e = n.getIconURL(24);
    if (null == e) return null;
    if (0 === a.length) return (0, r.jsx)(g, {
      game: n,
      activityLevel: s[n.id]
    });
    let t = a;
    return (0, r.jsx)(l.u, {
      "aria-label": "",
      position: "bottom",
      __unsupportedReactNodeAsText: (0, r.jsx)(E, {
        games: t,
        activity: s
      }),
      children: (0, r.jsxs)("div", {
        className: o()(_.gameIcon, _.extraGameItem),
        children: [(0, r.jsx)("img", {
          className: o()(_.gameIconImage, _.extraGameIconImage),
          src: e,
          alt: n.name
        }), (0, r.jsx)("div", {
          className: _.extraGameOverlay
        }), (0, r.jsx)("div", {
          className: _.extraGameText,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: "+".concat(t.length)
          })
        })]
      })
    })
  }, [n, a, s]);
  return null == t || 0 === t.length ? null : 1 === t.length ? (0, r.jsx)("div", {
    className: _.container,
    children: (0, r.jsx)(b, {
      game: t[0],
      activityLevel: s[t[0].id]
    })
  }) : (0, r.jsxs)("div", {
    className: _.container,
    children: [t.map(e => (0, r.jsx)(g, {
      game: e,
      activityLevel: s[e.id]
    }, e.id)), u]
  })
}