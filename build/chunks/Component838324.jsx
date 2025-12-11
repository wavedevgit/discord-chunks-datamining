/** Chunk was on 9536 **/
/** chunk id: 838324, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => m
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

function m(e) {
  let {
    guildId: t,
    scrollToQuestions: n
  } = e, m = (0, i.e7)([s.Z], () => s.Z.isAdvancedMode(t)), b = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds), [p, h] = (0, o.VF)(t, b), [x, j] = (0, d.OA)(t, [...b]), v = m ? j.length : h.length, O = m ? x.length : p.length, C = v < u.md, y = O >= u.X, N = j.length - h.length, E = (0, r.jsx)(a.owK, {
    size: "sm",
    color: l.Z.unsafe_rawColors.BRAND_500.css,
    secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
    className: f.icon
  }), I = (0, r.jsx)(a.k$p, {
    size: "sm",
    className: f.icon,
    color: l.Z.colors.WHITE.css,
    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css
  }), S = [Math.min(u.X, O) / u.md * 100, Math.min(u.md, v) / u.md * 100], _ = !C && y ? [l.Z.colors.TEXT_FEEDBACK_POSITIVE.css, l.Z.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
  return (0, r.jsxs)("div", {
    className: f.container,
    children: [(0, r.jsxs)("div", {
      className: f.header,
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
      foregroundColors: _,
      percents: S,
      size: a.yGy.Sizes.XSMALL
    }), (0, r.jsxs)("div", {
      className: f.requiredItem,
      children: [C ? I : E, (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g.intl.format(g.t.k0COZY, {
          count: u.md
        })
      })]
    }), (0, r.jsxs)("div", {
      className: f.requiredItem,
      children: [y ? E : I, (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: g.intl.format(g.t.PwXgSy, {
          count: u.X
        })
      })]
    }), m && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: f.requiredItem,
        children: [(0, r.jsx)(a.d3s, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: f.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.string(g.t.AyvkOK)
        })]
      }), (0, r.jsxs)("div", {
        className: f.requiredItem,
        children: [(0, r.jsx)(a.d3s, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: f.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: g.intl.format(g.t["8Geut3"], {
            count: N,
            prejoinHook: e => (0, r.jsx)(a.Anchor, {
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