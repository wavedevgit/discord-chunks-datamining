/** Chunk was on 79764 **/
/** chunk id: 996453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => g,
  Z: () => f
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
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

function g(e) {
  var t;
  let {
    guildTemplate: n,
    onClose: g,
    onBack: f,
    onHubGuildInfoSet: j,
    onGuildCreated: _,
    isSlideReady: b,
    hasFooter: L = true,
    isCommunity: N = false
  } = e, [I, y] = s.useState(m.Z.getGuildNameSuggestion()), [v, Z] = s.useState(null), [S, E] = s.useState(false), [T, O] = s.useState(null), B = !!(null == (t = u.default.getCurrentUser()) ? true : t.isStaff()), [M, k] = s.useState(B), H = (0, d.Dt)(), D = s.useRef(null);
  s.useEffect(() => {
    var e;
    b && (null == (e = D.current) || e.focus())
  }, [b]);
  let G = s.useCallback(async e => {
      if (e.preventDefault(), null != n) {
        E(true), O(null);
        try {
          if (null != j) j(I, v);
          else {
            let e = await x.Z.createGuildFromTemplate(I, v, n, N, M);
            r.Z.transitionToGuildSync(e.id), null == _ || _(e.id)
          }
        } catch (e) {
          O(e)
        }
        E(false)
      }
    }, [n, j, I, v, N, M, _]),
    w = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(a.zxk, {
        variant: "primary",
        text: null != j ? h.intl.string(h.t.PDTjLC) : h.intl.string(h.t.CumH4u),
        onClick: G,
        disabled: 0 === I.length,
        loading: S
      }), (0, i.jsx)(l.zx, {
        className: p.backButton,
        look: l.zx.Looks.BLANK,
        size: l.zx.Sizes.MIN,
        onClick: f,
        children: h.intl.string(h.t["13/7kZ"])
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(a.xBx, {
        direction: c.Z.Direction.VERTICAL,
        className: p.header,
        separator: false,
        children: [(0, i.jsx)(a.X6q, {
          className: p.title,
          variant: "heading-xl/semibold",
          children: h.intl.string(h.t["2H6Nio"])
        }), (0, i.jsx)(a.Text, {
          className: p.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: h.intl.string(h.t.AAfVqa)
        }), null != g && (0, i.jsx)(a.olH, {
          className: p.closeButton,
          onClick: g
        })]
      }), (0, i.jsxs)(a.hzk, {
        className: p.createGuild,
        children: [(0, i.jsx)("div", {
          className: p.uploadIcon,
          children: (0, i.jsx)(o.Z, {
            icon: v,
            onChange: Z
          })
        }), (0, i.jsxs)("form", {
          onSubmit: G,
          children: [(0, i.jsxs)(a.xJW, {
            className: p.nameInput,
            error: null == T ? true : T.getFirstFieldErrorMessage("name"),
            children: [(0, i.jsx)(a.vwX, {
              tag: "label",
              htmlFor: H,
              children: h.intl.string(h.t.dBih7e)
            }), (0, i.jsx)(a.oil, {
              type: "text",
              value: I,
              maxLength: 100,
              onChange: y,
              inputRef: D,
              id: H
            })]
          }), B && (0, i.jsx)(a.j7V, {
            hideBorder: true,
            value: M,
            onChange: e => k(e),
            note: h.intl.string(h.t.edQ5vb),
            className: p.formItemSpaced,
            children: (0, i.jsx)(a.vwX, {
              tag: "label",
              children: "Staff Only"
            })
          }), (0, i.jsx)(a.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: p.guidelines,
            children: h.intl.format(h.t["2bprX1"], {
              guidelinesURL: C.EYA.GUIDELINES
            })
          })]
        }), null == T || T.hasFieldErrors() ? null : (0, i.jsx)(a.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: T.message
        })]
      }), L && (0, i.jsx)(a.mzw, {
        justify: c.Z.Justify.BETWEEN,
        children: w
      })]
    }),
    footer: w
  }
}

function f(e) {
  let {
    content: t
  } = g(e);
  return t
}