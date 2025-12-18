/** Chunk was on 51343 **/
/** chunk id: 921869, original params: e,t,a (module,exports,require) **/
require.d(exports, {
  m: () => m
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk553795 = require("./553795.js"),
  Chunk424071 = require("./424071.jsx"),
  Chunk239358 = require("./239358.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk926375 = require("./926375.js");

function m(e) {
  let {
    platformType: t,
    onContinue: a,
    onClose: m,
    img: h,
    headerConnect: N,
    headerReconnect: p,
    body: g,
    learnMoreLink: C,
    valueProps: j
  } = e, v = (0, i.e7)([o.Z], () => {
    let e = o.Z.getAccount(null, t);
    return (null == e ? true : e.twoWayLink) === false
  });
  return (0, n.jsxs)(c.Z, {
    children: [(0, n.jsxs)(l.xBx, {
      "data-migration-pending": true,
      direction: s.Z.Direction.VERTICAL,
      className: x.header,
      separator: false,
      children: [(0, n.jsxs)("div", {
        className: x.illustration,
        children: [h, " "]
      }), (0, n.jsx)(l.Heading, {
        className: x.title,
        variant: "heading-xl/extrabold",
        children: v && null != p ? p : N
      }), (0, n.jsx)(l.olH, {
        className: x.closeButton,
        onClick: m
      })]
    }), (0, n.jsxs)(l.hzk, {
      "data-migration-pending": true,
      className: x.body,
      children: [(0, n.jsx)(l.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: g
      }), (0, n.jsx)("div", {
        className: x.valueProps,
        children: j.map((e, t) => {
          let {
            label: a,
            subLabel: i,
            icon: l
          } = e;
          return (0, n.jsxs)(r.Fragment, {
            children: [(0, n.jsx)(d.Z, {
              label: a,
              subLabel: i,
              icon: l
            }, a), t !== j.length - 1 && (0, n.jsx)("div", {
              className: x.valuePropDivider
            })]
          }, a)
        })
      }), null != C ? (0, n.jsx)(l.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "text-default",
        children: u.intl.format(u.t["/l3n+1"], {
          helpCenterLink: C
        })
      }) : null]
    }), (0, n.jsx)(l.mzw, {
      "data-migration-pending": true,
      className: x.footer,
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: x.footerButton,
        children: (0, n.jsx)(l.Button, {
          variant: "primary",
          text: u.intl.string(u.t["3PatSz"]),
          onClick: a
        })
      })
    })]
  })
}