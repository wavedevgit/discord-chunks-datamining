/** Chunk was on 9536 **/
/** chunk id: 838324, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk889369 = require("./889369.js"),
  Chunk974513 = require("./974513.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk212781 = require("./212781.js");

function f(e) {
  let {
    guildId: t,
    scrollToQuestions: n
  } = e, f = (0, i.e7)([s.Z], () => s.Z.isAdvancedMode(t)), b = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds), [p, h] = (0, o.VF)(t, b), [x, j] = (0, d.OA)(t, [...b]), v = f ? j.length : h.length, O = f ? x.length : p.length, y = O >= u.X, C = j.length - h.length, N = (0, r.jsx)(a.owK, {
    size: "sm",
    color: l.Z.unsafe_rawColors.BRAND_500.css,
    secondaryColor: l.Z.unsafe_rawColors.WHITE.css,
    className: m.icon
  }), E = (0, r.jsx)(a.k$p, {
    size: "sm",
    className: m.icon,
    color: l.Z.colors.WHITE.css,
    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css
  }), I = [Math.min(u.X, O) / u.X * 100], S = y ? [l.Z.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css];
  return (0, r.jsxs)("div", {
    className: m.container,
    children: [(0, r.jsxs)("div", {
      className: m.header,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-brand",
        children: g.intl.format(g.t.kvroKO, {
          count: O
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: g.intl.format(g.t["0MjxJ5"], {
          count: v
        })
      })]
    }), (0, r.jsx)(a.yGy, {
      foregroundColors: S,
      percents: I,
      size: a.yGy.Sizes.XSMALL
    }), (0, r.jsxs)("div", {
      className: m.requiredItem,
      children: [y ? N : E, (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g.intl.format(g.t.PwXgSy, {
          count: u.X
        })
      })]
    }), f && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: m.requiredItem,
        children: [(0, r.jsx)(a.d3s, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: m.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.string(g.t.AyvkOK)
        })]
      }), (0, r.jsxs)("div", {
        className: m.requiredItem,
        children: [(0, r.jsx)(a.d3s, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: m.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.format(g.t["8Geut3"], {
            count: C,
            prejoinHook: e => (0, r.jsx)(a.eee, {
              onClick: n,
              children: (0, r.jsx)(a.Text, {
                tag: "span",
                variant: "text-xs/normal",
                color: "text-link",
                children: e
              })
            })
          })
        })]
      })]
    })]
  })
}