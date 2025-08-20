/** Chunk was on 6049 **/
/** chunk id: 838324, original params: e,t,n (module,exports,require) **/
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
  } = e, p = (0, i.e7)([s.Z], () => s.Z.isAdvancedMode(t)), h = (0, i.e7)([c.Z], () => c.Z.editedDefaultChannelIds), [f, b] = (0, o.VF)(t, h), [x, j] = (0, d.OA)(t, [...h]), v = p ? j.length : b.length, _ = p ? x.length : f.length, O = v < u.md, y = _ >= u.X, C = j.length - b.length, N = (0, r.jsx)(a.owK, {
    size: "sm",
    color: l.Z.unsafe_rawColors.BRAND_500.css,
    secondaryColor: l.Z.unsafe_rawColors.WHITE_100.css,
    className: g.icon
  }), E = (0, r.jsx)(a.k$p, {
    size: "sm",
    className: g.icon,
    color: l.Z.colors.WHITE.css,
    secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css
  }), I = [Math.min(u.X, _) / u.md * 100, Math.min(u.md, v) / u.md * 100], S = !O && y ? [l.Z.colors.TEXT_FEEDBACK_POSITIVE.css, l.Z.colors.TEXT_FEEDBACK_POSITIVE.css] : [l.Z.colors.TEXT_BRAND.css, l.Z.colors.TEXT_MUTED.css];
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsxs)("div", {
      className: g.header,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-brand",
        children: m.intl.format(m.t.kvroKC, {
          count: _
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: m.intl.format(m.t["0MjxJy"], {
          count: v
        })
      })]
    }), (0, r.jsx)(a.yGy, {
      foregroundColors: S,
      percents: I,
      size: a.yGy.Sizes.XSMALL
    }), (0, r.jsxs)("div", {
      className: g.requiredItem,
      children: [O ? E : N, (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: m.intl.format(m.t.k0COZW, {
          count: u.md
        })
      })]
    }), (0, r.jsxs)("div", {
      className: g.requiredItem,
      children: [y ? N : E, (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: m.intl.format(m.t.PwXgS0, {
          count: u.X
        })
      })]
    }), p && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: g.requiredItem,
        children: [(0, r.jsx)(a.d3s, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: g.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: m.intl.string(m.t.AyvkOD)
        })]
      }), (0, r.jsxs)("div", {
        className: g.requiredItem,
        children: [(0, r.jsx)(a.d3s, {
          size: "sm",
          color: l.Z.colors.WHITE.css,
          secondaryColor: l.Z.colors.BACKGROUND_ACCENT.css,
          className: g.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: m.intl.format(m.t["8Geut7"], {
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