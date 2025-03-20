/** Chunk was on 10396 **/
"use strict";
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651);
n(192379);
var i = n(442837),
  s = n(692547),
  a = n(481060),
  l = n(45966),
  o = n(637853),
  A = n(889369),
  c = n(974513),
  d = n(290511),
  u = n(388032),
  g = n(652212);

function f(e) {
  let {
    guildId: t,
    scrollToQuestions: n
  } = e, f = (0, i.e7)([l.Z], () => l.Z.isAdvancedMode(t)), m = (0, i.e7)([A.Z], () => A.Z.editedDefaultChannelIds), [p, h] = (0, o.VF)(t, m), [C, b] = (0, c.OA)(t, [...m]), v = f ? b.length : h.length, x = f ? C.length : p.length, N = v < d.md, j = x >= d.X, E = b.length - h.length, I = (0, r.jsx)(a.owK, {
    size: "sm",
    color: s.Z.unsafe_rawColors.BRAND_500.css,
    secondaryColor: s.Z.unsafe_rawColors.WHITE_100.css,
    className: g.icon
  }), O = (0, r.jsx)(a.k$p, {
    size: "sm",
    className: g.icon,
    color: s.Z.colors.WHITE.css,
    secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css
  }), y = [Math.min(d.X, x) / d.md * 100, Math.min(d.md, v) / d.md * 100], w = !N && j ? [s.Z.colors.TEXT_POSITIVE.css, s.Z.colors.TEXT_POSITIVE.css] : [s.Z.colors.TEXT_BRAND.css, s.Z.colors.TEXT_MUTED.css];
  return (0, r.jsxs)("div", {
    className: g.container,
    children: [(0, r.jsxs)("div", {
      className: g.header,
      children: [(0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-brand",
        children: u.NW.format(u.t.kvroKC, {
          count: x
        })
      }), (0, r.jsx)(a.Text, {
        variant: "text-xs/bold",
        color: "text-muted",
        children: u.NW.format(u.t["0MjxJy"], {
          count: v
        })
      })]
    }), (0, r.jsx)(a.yGy, {
      foregroundColors: w,
      percents: y,
      size: a.yGy.Sizes.XSMALL
    }), (0, r.jsxs)("div", {
      className: g.requiredItem,
      children: [N ? O : I, (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: u.NW.format(u.t.k0COZW, {
          count: d.md
        })
      })]
    }), (0, r.jsxs)("div", {
      className: g.requiredItem,
      children: [j ? I : O, (0, r.jsx)(a.Text, {
        variant: "text-xs/normal",
        color: "text-muted",
        children: u.NW.format(u.t.PwXgS0, {
          count: d.X
        })
      })]
    }), f && (0, r.jsxs)(r.Fragment, {
      children: [(0, r.jsxs)("div", {
        className: g.requiredItem,
        children: [(0, r.jsx)(a.d3s, {
          size: "sm",
          color: s.Z.colors.WHITE.css,
          secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css,
          className: g.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: u.NW.string(u.t.AyvkOD)
        })]
      }), (0, r.jsxs)("div", {
        className: g.requiredItem,
        children: [(0, r.jsx)(a.d3s, {
          size: "sm",
          color: s.Z.colors.WHITE.css,
          secondaryColor: s.Z.colors.BACKGROUND_ACCENT.css,
          className: g.icon
        }), (0, r.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-muted",
          children: u.NW.format(u.t["8Geut7"], {
            count: E,
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