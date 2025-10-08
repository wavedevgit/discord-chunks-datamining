/** Chunk was on web.js **/
/** chunk id: 681102, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => y
});
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk97028 = require("./97028.js"),
  Chunk28664 = require("./28664.jsx"),
  Chunk481060 = require("./481060.js"),
  Chunk686546 = require("./686546.jsx"),
  Chunk810568 = require("./810568.js"),
  Chunk168524 = require("./168524.js"),
  Chunk214288 = require("./214288.js"),
  Chunk753299 = require("./753299.js");
let h = 10,
  m = 2;

function g(e) {
  let {
    game: t,
    activityLevel: n,
    hideTooltip: i
  } = e, a = t.getIconURL(24), o = (0, _.B)(), g = (0, f.Z)({
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
        className: p.gameIcon,
        children: [(0, r.jsx)("img", {
          className: p.gameIconImage,
          src: a,
          alt: t.name
        }), b && (0, r.jsx)(u.ZP, {
          mask: u.QS.GAMEPLAY_HIGH_ACTIVITY_ICON,
          width: h + 2 * m,
          height: h + 2 * m,
          className: p.gameActivityLevel,
          children: (0, r.jsx)("div", {
            className: p.gameActivityLevelInner,
            children: (0, r.jsx)(c.YqE, {
              color: c.TVs.unsafe_rawColors.ORANGE_330.css,
              width: h,
              height: h,
              size: "custom"
            })
          })
        })]
      })
    });
  return o ? (0, r.jsx)(c.P3F, {
    onClick: g,
    className: p.gameIconWrapper,
    children: O
  }) : O
}

function E(e) {
  let {
    games: t,
    activity: n
  } = e;
  return (0, r.jsx)("div", {
    className: p.extraGamesContainer,
    children: t.map(e => (0, r.jsxs)("div", {
      className: p.extraGameRow,
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
    className: p.favoriteGameContainer,
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
        className: o()(p.gameIcon, p.extraGameItem),
        children: [(0, r.jsx)("img", {
          className: o()(p.gameIconImage, p.extraGameIconImage),
          src: e,
          alt: n.name
        }), (0, r.jsx)("div", {
          className: p.extraGameOverlay
        }), (0, r.jsx)("div", {
          className: p.extraGameText,
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
    className: p.container,
    children: (0, r.jsx)(b, {
      game: t[0],
      activityLevel: s[t[0].id]
    })
  }) : (0, r.jsxs)("div", {
    className: p.container,
    children: [t.map(e => (0, r.jsx)(g, {
      game: e,
      activityLevel: s[e.id]
    }, e.id)), u]
  })
}