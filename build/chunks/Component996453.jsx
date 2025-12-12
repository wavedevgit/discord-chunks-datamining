/** Chunk was on 79764 **/
/** chunk id: 996453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => C,
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
  Chunk666863 = require("./666863.js");

function C(e) {
  var t;
  let {
    guildTemplate: n,
    onClose: C,
    onBack: j,
    onHubGuildInfoSet: p,
    onGuildCreated: b,
    isSlideReady: h,
    hasFooter: L = true,
    isCommunity: v = false
  } = e, [y, Z] = a.useState(u.Z.getGuildNameSuggestion()), [O, I] = a.useState(null), [S, T] = a.useState(false), [N, _] = a.useState(null), E = !!(null == (t = d.default.getCurrentUser()) ? true : t.isStaff()), [H, M] = a.useState(E), G = (0, c.Dt)(), w = a.useRef(null);
  a.useEffect(() => {
    var e;
    h && (null == (e = w.current) || e.focus())
  }, [h]);
  let k = a.useCallback(async e => {
      if (e.preventDefault(), null != n) {
        T(true), _(null);
        try {
          if (null != p) p(y, O);
          else {
            let e = await f.Z.createGuildFromTemplate(y, O, n, v, H);
            r.Z.transitionToGuildSync(e.id), null == b || b(e.id)
          }
        } catch (e) {
          _(e)
        }
        T(false)
      }
    }, [n, p, y, O, v, H, b]),
    U = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.Button, {
        variant: "primary",
        text: null != p ? x.intl.string(x.t.PDTjLN) : x.intl.string(x.t.CumH4u),
        onClick: k,
        disabled: 0 === y.length,
        loading: S
      }), (0, i.jsx)(l.Avr, {
        size: "sm",
        variant: "secondary",
        text: x.intl.string(x.t["13/7kX"]),
        onClick: j
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.xBx, {
        "data-migration-pending": true,
        direction: o.Z.Direction.VERTICAL,
        className: g.header,
        separator: false,
        children: [(0, i.jsx)(l.Heading, {
          className: g.title,
          variant: "heading-xl/semibold",
          children: x.intl.string(x.t["2H6Nij"])
        }), (0, i.jsx)(l.Text, {
          className: g.subtitle,
          color: "text-default",
          variant: "text-md/normal",
          children: x.intl.string(x.t.AAfVqR)
        }), null != C && (0, i.jsx)(l.olH, {
          "data-migration-pending": true,
          className: g.closeButton,
          onClick: C
        })]
      }), (0, i.jsxs)(l.hzk, {
        "data-migration-pending": true,
        className: g.createGuild,
        children: [(0, i.jsx)("div", {
          className: g.uploadIcon,
          children: (0, i.jsx)(s.Z, {
            icon: O,
            onChange: I
          })
        }), (0, i.jsx)("form", {
          onSubmit: k,
          children: (0, i.jsxs)(l.Kqy, {
            gap: 16,
            children: [(0, i.jsx)(l.oil, {
              label: x.intl.string(x.t.dBih7e),
              required: true,
              error: null == N ? true : N.getFirstFieldErrorMessage("name"),
              value: y,
              maxLength: 100,
              onChange: Z,
              inputRef: w,
              id: G
            }), E && (0, i.jsx)(l.rsf, {
              label: "Staff Only",
              description: x.intl.string(x.t.edQ5va),
              checked: H,
              onChange: e => M(e)
            }), (0, i.jsx)(l.Text, {
              variant: "text-xs/normal",
              color: "text-muted",
              children: x.intl.format(x.t["2bprXx"], {
                guidelinesURL: m.EYA.GUIDELINES
              })
            })]
          })
        }), null == N || N.hasFieldErrors() ? null : (0, i.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-feedback-critical",
          children: N.message
        })]
      }), L && (0, i.jsx)(l.mzw, {
        "data-migration-pending": true,
        className: g.footer,
        children: U
      })]
    }),
    footer: U
  }
}

function j(e) {
  let {
    content: t
  } = C(e);
  return t
}