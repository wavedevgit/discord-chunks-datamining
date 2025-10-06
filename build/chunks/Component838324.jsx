/** Chunk was on 64982 **/
/** chunk id: 838324, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => p
}), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk692547 = require("./692547.js"),
  Chunk481060 = require("./481060.js"),
  Chunk45966 = require("./45966.js"),
  Chunk637853 = require("./637853.js"),
  Chunk889369 = require("./889369.js"),
  Chunk974513 = require("./974513.jsx"),
  Chunk290511 = require("./290511.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk636942 = require("./636942.js");

function p(e) {
  let {
    guildId: t,
    scrollToQuestions: n
  } = e, p = (0, i.e7)([a.Z], () => a.Z.isAdvancedMode(t)), f = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds), [h, x] = (0, o.VF)(t, f), [b, j] = (0, d.OA)(t, [...f]), _ = p ? j.length : x.length, v = p ? b.length : h.length, C = _ < u.md, O = v >= u.X, y = j.length - x.length, N = (0, r.jsx)(s.owK, {
    size: "sm",
    color: l.Z.unsafe_rawColors.BRAND_500.css,
    secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
    className: g.icon
  }), E = (0, r.jsx)(s.k$p, {
    size: "sm",
    className: g.icon,
    color: l.Z.colors.WHITE.css,
    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css
  }), I = [Math.min(u.X, v) / u.md * 100, Math.min(u.md, _) / u.md * 100], S = !C && O ? [l.Z.colors.TEXT_FEEDBACK_POSITIVE.css, l.Z.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsxs)("div", {
      className: g.header,
      children: [(0, r.jsx)(s.Text, {
        variant: "text-xs/bold",
        color: "text-brand",
        children: m.intl.format(m.t.kvroKC, {
          count: v
        })
      }), (0, r.jsx)(s.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: m.intl.format(m.t["0MjxJy"], {
          count: _
        })
      })]
    }), (0, r.jsx)(s.yGy, {
      foregroundColors: S,
      percents: I,
      size: s.yGy.Sizes.XSMALL
    }), (0, r.jsxs)("div", {
      className: g.requiredItem,
      children: [C ? E : N, (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: m.intl.format(m.t.k0COZW, {
          count: u.md
        })
      })]
    }), (0, r.jsxs)("div", {
      className: g.requiredItem,
      children: [O ? N : E, (0, r.jsx)(s.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: m.intl.format(m.t.PwXgS0, {
          count: u.X
        })
      })]
    }), p && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: g.requiredItem,
        children: [(0, r.jsx)(s.d3s, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: g.icon
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: m.intl.string(m.t.AyvkOD)
        })]
      }), (0, r.jsxs)("div", {
        className: g.requiredItem,
        children: [(0, r.jsx)(s.d3s, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: g.icon
        }), (0, r.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: m.intl.format(m.t["8Geut7"], {
            count: y,
            prejoinHook: e => (0, r.jsx)(s.eee, {
              onClick: n,
              children: (0, r.jsx)(s.Text, {
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