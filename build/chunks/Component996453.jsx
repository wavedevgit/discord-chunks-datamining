/** Chunk was on 79764 **/
/** chunk id: 996453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  G: () => h,
  Z: () => g
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
  Chunk960780 = require("./960780.js");

function h(e) {
  var t;
  let {
    guildTemplate: n,
    onClose: h,
    onBack: g,
    onHubGuildInfoSet: f,
    onGuildCreated: j,
    isSlideReady: _,
    hasFooter: b = true,
    isCommunity: L = false
  } = e, [v, I] = s.useState(u.Z.getGuildNameSuggestion()), [N, y] = s.useState(null), [Z, O] = s.useState(false), [T, E] = s.useState(null), S = !!(null == (t = d.default.getCurrentUser()) ? true : t.isStaff()), [M, H] = s.useState(S), G = (0, c.Dt)(), k = s.useRef(null);
  s.useEffect(() => {
    var e;
    _ && (null == (e = k.current) || e.focus())
  }, [_]);
  let D = s.useCallback(async e => {
      if (e.preventDefault(), null != n) {
        O(true), E(null);
        try {
          if (null != f) f(v, N);
          else {
            let e = await m.Z.createGuildFromTemplate(v, N, n, L, M);
            r.Z.transitionToGuildSync(e.id), null == j || j(e.id)
          }
        } catch (e) {
          E(e)
        }
        O(false)
      }
    }, [n, f, v, N, L, M, j]),
    w = (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsx)(l.zxk, {
        variant: "primary",
        text: null != f ? C.intl.string(C.t.PDTjLC) : C.intl.string(C.t.CumH4u),
        onClick: D,
        disabled: 0 === v.length,
        loading: Z
      }), (0, i.jsx)(l.Avr, {
        size: "sm",
        variant: "secondary",
        text: C.intl.string(C.t["13/7kZ"]),
        onClick: g
      })]
    });
  return {
    content: (0, i.jsxs)(i.Fragment, {
      children: [(0, i.jsxs)(l.xBx, {
        direction: o.Z.Direction.VERTICAL,
        className: p.header,
        separator: false,
        children: [(0, i.jsx)(l.X6q, {
          className: p.title,
          variant: "heading-xl/semibold",
          children: C.intl.string(C.t["2H6Nio"])
        }), (0, i.jsx)(l.Text, {
          className: p.subtitle,
          color: "header-secondary",
          variant: "text-md/normal",
          children: C.intl.string(C.t.AAfVqa)
        }), null != h && (0, i.jsx)(l.olH, {
          className: p.closeButton,
          onClick: h
        })]
      }), (0, i.jsxs)(l.hzk, {
        className: p.createGuild,
        children: [(0, i.jsx)("div", {
          className: p.uploadIcon,
          children: (0, i.jsx)(a.Z, {
            icon: N,
            onChange: y
          })
        }), (0, i.jsxs)("form", {
          onSubmit: D,
          children: [(0, i.jsx)(l.oil, {
            label: C.intl.string(C.t.dBih7e),
            required: true,
            error: null == T ? true : T.getFirstFieldErrorMessage("name"),
            value: v,
            maxLength: 100,
            onChange: I,
            inputRef: k,
            id: G
          }), S && (0, i.jsx)(l.j7V, {
            hideBorder: true,
            value: M,
            onChange: e => H(e),
            note: C.intl.string(C.t.edQ5vb),
            className: p.formItemSpaced,
            children: (0, i.jsx)(l.vwX, {
              children: "Staff Only"
            })
          }), (0, i.jsx)(l.Text, {
            variant: "text-xs/normal",
            color: "text-muted",
            className: p.guidelines,
            children: C.intl.format(C.t["2bprX1"], {
              guidelinesURL: x.EYA.GUIDELINES
            })
          })]
        }), null == T || T.hasFieldErrors() ? null : (0, i.jsx)(l.Text, {
          variant: "text-xs/normal",
          color: "text-danger",
          children: T.message
        })]
      }), b && (0, i.jsx)(l.mzw, {
        className: p.footer,
        children: w
      })]
    }),
    footer: w
  }
}

function g(e) {
  let {
    content: t
  } = h(e);
  return t
}