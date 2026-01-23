/** Chunk was on web.js **/
/** chunk id: 438842, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => b
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk47762 = require("./47762.js"),
  Chunk990078 = require("./990078.jsx"),
  Chunk397927 = require("./397927.js"),
  Chunk573435 = require("./573435.jsx"),
  Chunk409626 = require("./409626.js"),
  Chunk692969 = require("./692969.js"),
  Chunk424225 = require("./424225.js"),
  Chunk14532 = require("./14532.js");
let h = 10,
  m = 2;

function g(e) {
  let {
    game: t,
    activityLevel: n,
    hideTooltip: i
  } = e, a = t.getIconURL(24), s = (0, p.$)(), g = (0, f.A)({
    location: "GuildProfile",
    source: d.Ob.GuildProfile,
    trackEntryPointImpression: true,
    applicationId: t.id
  });
  if (null == a) return null;
  let E = !i,
    y = (null == n ? true : n.level) === o._.HIGH,
    b = (0, r.jsx)(c.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-active",
      children: t.name
    }),
    O = (0, r.jsx)(l.m, {
      __unsupportedReactNodeAsText: b,
      position: "bottom",
      "aria-label": t.name,
      shouldShow: E,
      children: (0, r.jsxs)("div", {
        className: _.Gt,
        children: [(0, r.jsx)("img", {
          className: _.T_,
          src: a,
          alt: t.name
        }), y && (0, r.jsx)(u.Ay, {
          mask: u.hW.GAMEPLAY_HIGH_ACTIVITY_ICON,
          width: h + 2 * m,
          height: h + 2 * m,
          className: _.Sy,
          children: (0, r.jsx)("div", {
            className: _._8,
            children: (0, r.jsx)(c.Y3C, {
              color: c.LU0.unsafe_rawColors.ORANGE_330.css,
              width: h,
              height: h,
              size: "custom"
            })
          })
        })]
      })
    });
  return s ? (0, r.jsx)(c.DUT, {
    onClick: g,
    className: _.f9,
    children: O
  }) : O
}

function E(e) {
  let {
    games: t,
    activity: n
  } = e;
  return (0, r.jsx)("div", {
    className: _.Fz,
    children: t.map(e => (0, r.jsxs)("div", {
      className: _.ZS,
      children: [(0, r.jsx)(g, {
        game: e,
        activityLevel: n[e.id]
      }), (0, r.jsx)(c.Text, {
        variant: "text-xs/medium",
        color: "interactive-text-active",
        children: e.name
      })]
    }, e.id))
  })
}

function y(e) {
  let {
    game: t,
    activityLevel: n
  } = e;
  return (0, r.jsxs)("div", {
    className: _.E,
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

function b(e) {
  let {
    gamesToDisplay: t,
    lastGameToDisplay: n,
    remainingGames: a,
    activity: o
  } = e, u = i.useMemo(() => {
    if (null == n) return null;
    let e = n.getIconURL(24);
    if (null == e) return null;
    if (0 === a.length) return (0, r.jsx)(g, {
      game: n,
      activityLevel: o[n.id]
    });
    let t = a;
    return (0, r.jsx)(l.m, {
      "aria-label": "",
      position: "bottom",
      __unsupportedReactNodeAsText: (0, r.jsx)(E, {
        games: t,
        activity: o
      }),
      children: (0, r.jsxs)("div", {
        className: s()(_.Gt, _.oL),
        children: [(0, r.jsx)("img", {
          className: s()(_.T_, _.tJ),
          src: e,
          alt: n.name
        }), (0, r.jsx)("div", {
          className: _.Fg
        }), (0, r.jsx)("div", {
          className: _.AZ,
          children: (0, r.jsx)(c.Text, {
            variant: "text-xs/normal",
            color: "always-white",
            children: "+".concat(t.length)
          })
        })]
      })
    })
  }, [n, a, o]);
  return null == t || 0 === t.length ? null : 1 === t.length ? (0, r.jsx)("div", {
    className: _.kL,
    children: (0, r.jsx)(y, {
      game: t[0],
      activityLevel: o[t[0].id]
    })
  }) : (0, r.jsxs)("div", {
    className: _.kL,
    children: [t.map(e => (0, r.jsx)(g, {
      game: e,
      activityLevel: o[e.id]
    }, e.id)), u]
  })
}