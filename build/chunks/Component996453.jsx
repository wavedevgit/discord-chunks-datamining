/** Chunk was on 79764 **/
/** chunk id: 996453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => p,
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
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
  Chunk800268 = require("./800268.js");

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
            r.Z.transitionToGuildSync(e.id), null == h || h(e.id)
          }
        } catch (e) {
          T(e)
        }
        S(false)
      }
    }, [n, j, v, y, L, M, h]),
    w = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(s.Button, {
        variant: "primary",
        text: null != j ? C.intl.string(C.t.PDTjLN) : C.intl.string(C.t.CumH4u),
        onClick: D,
        disabled: 0 === v.length,
        loading: Z
      }), (0, i.jsx)(s.Avr, {
        size: "sm",
        variant: "secondary",
        text: C.intl.string(C.t["13/7kX"]),
        onClick: f
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(s.xBx, {
        direction: o.Z.Direction.VERTICAL,
        className: g.header,
        separator: false,
        children: [(0, i.jsx)(s.Heading, {
          className: g.title,
          variant: "heading-xl/semibold",
          children: C.intl.string(C.t["2H6Nij"])
        }), (0, i.jsx)(s.Text, {
          className: g.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: C.intl.string(C.t.AAfVqR)
        }), null != p && (0, i.jsx)(s.olH, {
          className: g.closeButton,
          onClick: p
        })]
      }), (0, i.jsxs)(s.hzk, {
        className: g.createGuild,
        children: [(0, i.jsx)("div", {
          className: g.uploadIcon,
          children: (0, i.jsx)(a.Z, {
            icon: y,
            onChange: O
          })
        }), (0, i.jsx)("form", {
          onSubmit: D,
          children: (0, i.jsxs)(s.Kqy, {
            gap: 16,
            children: [(0, i.jsx)(s.oil, {
              label: C.intl.string(C.t.dBih7e),
              required: true,
              error: null == N ? true : N.getFirstFieldErrorMessage("name"),
              value: v,
              maxLength: 100,
              onChange: I,
              inputRef: U,
              id: G
            }), E && (0, i.jsx)(s.rsf, {
              label: "Staff Only",
              description: C.intl.string(C.t.edQ5va),
              checked: M,
              onChange: e => H(e)
            }), (0, i.jsx)(s.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: C.intl.format(C.t["2bprXx"], {
                guidelinesURL: x.EYA.GUIDELINES
              })
            })]
          })
        }), null == N || N.hasFieldErrors() ? null : (0, i.jsx)(s.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: N.message
        })]
      }), b && (0, i.jsx)(s.mzw, {
        className: g.footer,
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