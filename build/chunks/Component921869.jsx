/** Chunk was on 51343 **/
/** chunk id: 921869, original params: e,a,t (module,exports,require) **/
require.d(exports, {
  m: () => h
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
  Chunk771831 = require("./771831.js");

function h(e) {
  let {
    platformType: a,
    onContinue: t,
    onClose: h,
    img: m,
    headerConnect: N,
    headerReconnect: C,
    body: j,
    learnMoreLink: p,
    valueProps: v
  } = e, b = (0, s.e7)([o.Z], () => {
    let e = o.Z.getAccount(null, a);
    return (null == e ? true : e.twoWayLink) === false
  });
  return (0, n.jsxs)(c.Z, {
    children: [(0, n.jsxs)(l.xBx, {
      direction: i.Z.Direction.VERTICAL,
      className: u.header,
      separator: false,
      children: [(0, n.jsxs)("div", {
        className: u.illustration,
        children: [m, " "]
      }), (0, n.jsx)(l.Heading, {
        className: u.title,
        variant: "heading-xl/extrabold",
        children: b && null != C ? C : N
      }), (0, n.jsx)(l.olH, {
        className: u.closeButton,
        onClick: h
      })]
    }), (0, n.jsxs)(l.hzk, {
      className: u.body,
      children: [(0, n.jsx)(l.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "header-secondary",
        children: j
      }), (0, n.jsx)("div", {
        className: u.valueProps,
        children: v.map((e, a) => {
          let {
            label: t,
            subLabel: s,
            icon: l
          } = e;
          return (0, n.jsxs)(r.Fragment, {
            children: [(0, n.jsx)(d.Z, {
              label: t,
              subLabel: s,
              icon: l
            }, t), a !== v.length - 1 && (0, n.jsx)("div", {
              className: u.valuePropDivider
            })]
          }, t)
        })
      }), null != p ? (0, n.jsx)(l.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "header-secondary",
        children: x.intl.format(x.t["/l3n+1"], {
          helpCenterLink: p
        })
      }) : null]
    }), (0, n.jsx)(l.mzw, {
      className: u.footer,
      children: (0, n.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: u.footerButton,
        children: (0, n.jsx)(l.Button, {
          variant: "primary",
          text: x.intl.string(x.t["3PatSz"]),
          onClick: t
        })
      })
    })]
  })
}