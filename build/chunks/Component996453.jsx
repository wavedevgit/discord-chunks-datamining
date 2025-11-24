/** Chunk was on 79764 **/
/** chunk id: 996453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => p,
  Z: () => f
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk749210 = require("./749210.js"),
  Chunk820160 = require("./820160.jsx"),
  Chunk600164 = require("./600164.jsx"),
  Chunk313201 = require("./313201.js"),
  Chunk594174 = require("./594174.js"),
  Chunk892880 = require("./892880.js"),
  Chunk458879 = require("./458879.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk960780 = require("./960780.js");

function p(e) {
  var t;
  let {
    guildTemplate: n,
    onClose: p,
    onBack: f,
    onHubGuildInfoSet: j,
    onGuildCreated: h,
    isSlideReady: _,
    hasFooter: b = true,
    isCommunity: L = false
  } = e, [v, I] = l.useState(u.Z.getGuildNameSuggestion()), [y, O] = l.useState(null), [Z, S] = l.useState(false), [N, T] = l.useState(null), E = !!(null == (t = d.default.getCurrentUser()) ? true : t.isStaff()), [M, H] = l.useState(E), G = (0, c.Dt)(), U = l.useRef(null);
  l.useEffect(() => {
    var e;
    _ && (null == (e = U.current) || e.focus())
  }, [_]);
  let D = l.useCallback(async e => {
      if (e.preventDefault(), null != n) {
        S(true), T(null);
        try {
          if (null != j) j(v, y);
          else {
            let e = await m.Z.createGuildFromTemplate(v, y, n, L, M);
            s.Z.transitionToGuildSync(e.id), null == h || h(e.id)
          }
        } catch (e) {
          T(e)
        }
        S(false)
      }
    }, [n, j, v, y, L, M, h]),
    w = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(r.Button, {
        variant: "primary",
        text: null != j ? g.intl.string(g.t.PDTjLN) : g.intl.string(g.t.CumH4u),
        onClick: D,
        disabled: 0 === v.length,
        loading: Z
      }), (0, i.jsx)(r.Avr, {
        size: "sm",
        variant: "secondary",
        text: g.intl.string(g.t["13/7kX"]),
        onClick: f
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(r.xBx, {
        "data-migration-pending": true,
        direction: o.Z.Direction.VERTICAL,
        className: C.header,
        separator: false,
        children: [(0, i.jsx)(r.Heading, {
          className: C.title,
          variant: "heading-xl/semibold",
          children: g.intl.string(g.t["2H6Nij"])
        }), (0, i.jsx)(r.Text, {
          className: C.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: g.intl.string(g.t.AAfVqR)
        }), null != p && (0, i.jsx)(r.olH, {
          "data-migration-pending": true,
          className: C.closeButton,
          onClick: p
        })]
      }), (0, i.jsxs)(r.hzk, {
        "data-migration-pending": true,
        className: C.createGuild,
        children: [(0, i.jsx)("div", {
          className: C.uploadIcon,
          children: (0, i.jsx)(a.Z, {
            icon: y,
            onChange: O
          })
        }), (0, i.jsx)("form", {
          onSubmit: D,
          children: (0, i.jsxs)(r.Kqy, {
            gap: 16,
            children: [(0, i.jsx)(r.oil, {
              label: g.intl.string(g.t.dBih7e),
              required: true,
              error: null == N ? true : N.getFirstFieldErrorMessage("name"),
              value: v,
              maxLength: 100,
              onChange: I,
              inputRef: U,
              id: G
            }), E && (0, i.jsx)(r.rsf, {
              label: "Staff Only",
              description: g.intl.string(g.t.edQ5va),
              checked: M,
              onChange: e => H(e)
            }), (0, i.jsx)(r.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: g.intl.format(g.t["2bprXx"], {
                guidelinesURL: x.EYA.GUIDELINES
              })
            })]
          })
        }), null == N || N.hasFieldErrors() ? null : (0, i.jsx)(r.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: N.message
        })]
      }), b && (0, i.jsx)(r.mzw, {
        "data-migration-pending": true,
        className: C.footer,
        children: w
      })]
    }),
    footer: w
  }
}

function f(e) {
  let {
    content: t
  } = p(e);
  return t
}