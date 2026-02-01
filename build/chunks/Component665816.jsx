/** Chunk was on 9753 **/
/** chunk id: 665816, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  i: () => b
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  l = require.n(Chunk503698),
  Chunk835245 = require("./835245.js"),
  Chunk397927 = require("./397927.js"),
  Chunk954571 = require("./954571.js"),
  Chunk18437 = require("./18437.js"),
  Chunk590202 = require("./590202.js"),
  Chunk545986 = require("./545986.jsx"),
  Chunk394900 = require("./394900.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk933674 = require("./933674.js"),
  Chunk956324 = require("./956324.js");

function h(e) {
  let {
    questId: t,
    questContent: n,
    fullWidth: i
  } = e;
  return (0, r.jsx)("div", {
    className: g.UD,
    children: (0, r.jsx)(s.Button, {
      fullWidth: i,
      variant: "primary",
      onClick: () => {
        (0, d.navigateToQuestHome)({
          fromContent: n
        }), o.default.track(m.HAw.QUEST_CONTENT_CLICKED, function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {},
              r = Object.keys(n);
            "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
              return Object.getOwnPropertyDescriptor(n, e).enumerable
            }))), r.forEach(function(t) {
              var r;
              r = n[t], t in e ? Object.defineProperty(e, t, {
                value: r,
                enumerable: true,
                configurable: true,
                writable: true
              }) : e[t] = r
            })
          }
          return e
        }({
          quest_id: t,
          click_id: (0, a.A)(),
          cta_name: u.Cy.VIEW_QUESTS,
          is_targeted: false
        }, (0, u.fF)(n)))
      },
      text: f.intl.string(f.t.GURBQl)
    })
  })
}

function b(e) {
  let {
    questId: t,
    fallbackReason: n,
    bodyText: i,
    questContent: a
  } = e, {
    containerRef: o,
    size: u
  } = (0, p.L)();
  return (0, c.Ii)(n, t), (0, r.jsxs)("div", {
    ref: e => {
      o.current = e
    },
    className: l()(g.kL, {
      [g.U]: "lg" === u,
      [g.SP]: "lg" !== u
    }),
    children: [(0, r.jsxs)("div", {
      className: g.hQ,
      children: [(0, r.jsx)(s.Heading, {
        variant: "lg" === u ? "heading-xl/bold" : "heading-lg/bold",
        color: "text-strong",
        children: f.intl.string(f.t.vnP31W)
      }), (0, r.jsx)(s.Text, {
        variant: "lg" === u ? "text-sm/medium" : "text-xs/medium",
        color: "text-default",
        className: g.__invalid_mobileWebCopy,
        children: i
      }), (0, r.jsx)(h, {
        questId: t,
        questContent: a,
        fullWidth: "lg" !== u
      })]
    }), (0, r.jsx)("div", {
      className: g.Dg,
      children: (0, r.jsx)("img", {
        src: _,
        alt: "",
        className: g.Wg
      })
    })]
  })
}