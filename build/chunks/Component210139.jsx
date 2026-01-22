/** Chunk was on 89479 **/
/** chunk id: 210139, original params: a,e,t (module,exports,require) **/
require.d(exports, {
  B: () => u
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk962173 = require("./962173.js"),
  Chunk185311 = require("./185311.jsx"),
  Chunk370834 = require("./370834.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk689588 = require("./689588.js");

function u(a) {
  let {
    platformType: e,
    onContinue: t,
    onClose: u,
    img: N,
    headerConnect: h,
    headerReconnect: p,
    body: j,
    learnMoreLink: C,
    valueProps: g
  } = a, v = (0, s.bG)([c.A], () => {
    let a = c.A.getAccount(null, e);
    return (null == a ? true : a.twoWayLink) === false
  });
  return (0, n.jsxs)(o.A, {
    children: [(0, n.jsxs)(i.rQ0, {
      "data-migration-pending": true,
      direction: l.A.Direction.VERTICAL,
      className: m.wx,
      separator: false,
      children: [(0, n.jsxs)("div", {
        className: m.bm,
        children: [N, " "]
      }), (0, n.jsx)(i.Heading, {
        className: m.DD,
        variant: "heading-xl/extrabold",
        children: v && null != p ? p : h
      }), (0, n.jsx)(i.s_y, {
        className: m.b,
        onClick: u
      })]
    }), (0, n.jsxs)(i.$mQ, {
      "data-migration-pending": true,
      className: m.rf,
      children: [(0, n.jsx)(i.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: j
      }), (0, n.jsx)("div", {
        className: m.Mh,
        children: g.map((a, e) => {
          let {
            label: t,
            subLabel: s,
            icon: i
          } = a;
          return (0, n.jsxs)(r.Fragment, {
            children: [(0, n.jsx)(d.A, {
              label: t,
              subLabel: s,
              icon: i
            }, t), e !== g.length - 1 && (0, n.jsx)("div", {
              className: m.Cs
            })]
          }, t)
        })
      }), null != C ? (0, n.jsx)(i.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "text-default",
        children: x.intl.format(x.t["/l3n+1"], {
          helpCenterLink: C
        })
      }) : null]
    }), (0, n.jsx)(i.jlY, {
      "data-migration-pending": true,
      className: m.qr,
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: m.wC,
        children: (0, n.jsx)(i.Button, {
          variant: "primary",
          text: x.intl.string(x.t["3PatSz"]),
          onClick: t
        })
      })
    })]
  })
}