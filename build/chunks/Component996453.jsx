/** Chunk was on 79764 **/
/** chunk id: 996453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => f,
  Z: () => j
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

function f(e) {
  var t;
  let {
    guildTemplate: n,
    onClose: f,
    onBack: j,
    onHubGuildInfoSet: p,
    onGuildCreated: b,
    isSlideReady: h,
    hasFooter: L = true,
    isCommunity: _ = false
  } = e, [v, y] = l.useState(u.Z.getGuildNameSuggestion()), [Z, O] = l.useState(null), [I, S] = l.useState(false), [T, N] = l.useState(null), E = !!(null == (t = d.default.getCurrentUser()) ? true : t.isStaff()), [H, M] = l.useState(E), G = (0, c.Dt)(), w = l.useRef(null);
  l.useEffect(() => {
    var e;
    h && (null == (e = w.current) || e.focus())
  }, [h]);
  let k = l.useCallback(async e => {
      if (e.preventDefault(), null != n) {
        S(true), N(null);
        try {
          if (null != p) p(v, Z);
          else {
            let e = await m.Z.createGuildFromTemplate(v, Z, n, _, H);
            r.Z.transitionToGuildSync(e.id), null == b || b(e.id)
          }
        } catch (e) {
          N(e)
        }
        S(false)
      }
    }, [n, p, v, Z, _, H, b]),
    U = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.Button, {
        variant: "primary",
        text: null != p ? g.intl.string(g.t.PDTjLN) : g.intl.string(g.t.CumH4u),
        onClick: k,
        disabled: 0 === v.length,
        loading: I
      }), (0, i.jsx)(a.Avr, {
        size: "sm",
        variant: "secondary",
        text: g.intl.string(g.t["13/7kX"]),
        onClick: j
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(a.xBx, {
        "data-migration-pending": true,
        direction: o.Z.Direction.VERTICAL,
        className: C.header,
        separator: false,
        children: [(0, i.jsx)(a.Heading, {
          className: C.title,
          variant: "heading-xl/semibold",
          children: g.intl.string(g.t["2H6Nij"])
        }), (0, i.jsx)(a.Text, {
          className: C.subtitle,
          color: "text-default",
          variant: "text-md/normal",
          children: g.intl.string(g.t.AAfVqR)
        }), null != f && (0, i.jsx)(a.olH, {
          "data-migration-pending": true,
          className: C.closeButton,
          onClick: f
        })]
      }), (0, i.jsxs)(a.hzk, {
        "data-migration-pending": true,
        className: C.createGuild,
        children: [(0, i.jsx)("div", {
          className: C.uploadIcon,
          children: (0, i.jsx)(s.Z, {
            icon: Z,
            onChange: O
          })
        }), (0, i.jsx)("form", {
          onSubmit: k,
          children: (0, i.jsxs)(a.Kqy, {
            gap: 16,
            children: [(0, i.jsx)(a.oil, {
              label: g.intl.string(g.t.dBih7e),
              required: true,
              error: null == T ? true : T.getFirstFieldErrorMessage("name"),
              value: v,
              maxLength: 100,
              onChange: y,
              inputRef: w,
              id: G
            }), E && (0, i.jsx)(a.rsf, {
              label: "Staff Only",
              description: g.intl.string(g.t.edQ5va),
              checked: H,
              onChange: e => M(e)
            }), (0, i.jsx)(a.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: g.intl.format(g.t["2bprXx"], {
                guidelinesURL: x.EYA.GUIDELINES
              })
            })]
          })
        }), null == T || T.hasFieldErrors() ? null : (0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: T.message
        })]
      }), L && (0, i.jsx)(a.mzw, {
        "data-migration-pending": true,
        className: C.footer,
        children: U
      })]
    }),
    footer: U
  }
}

function j(e) {
  let {
    content: t
  } = f(e);
  return t
}