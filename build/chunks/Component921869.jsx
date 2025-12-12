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
  Chunk771831 = require("./771831.js");

function m(e) {
  let {
    platformType: t,
    onContinue: a,
    onClose: m,
    img: h,
    headerConnect: N,
    headerReconnect: C,
    body: j,
    learnMoreLink: p,
    valueProps: v
  } = e, f = (0, s.e7)([o.Z], () => {
    let e = o.Z.getAccount(null, t);
    return (null == e ? true : e.twoWayLink) === false
  });
  return (0, l.jsxs)(c.Z, {
    children: [(0, l.jsxs)(r.xBx, {
      direction: i.Z.Direction.VERTICAL,
      className: x.header,
      separator: false,
      children: [(0, l.jsxs)("div", {
        className: x.illustration,
        children: [h, " "]
      }), (0, l.jsx)(r.Heading, {
        className: x.title,
        variant: "heading-xl/extrabold",
        children: f && null != C ? C : N
      }), (0, l.jsx)(r.olH, {
        className: x.closeButton,
        onClick: m
      })]
    }), (0, l.jsxs)(r.hzk, {
      className: x.body,
      children: [(0, l.jsx)(r.Text, {
        tag: "p",
        variant: "text-md/normal",
        color: "text-default",
        children: j
      }), (0, l.jsx)("div", {
        className: x.valueProps,
        children: v.map((e, t) => {
          let {
            label: a,
            subLabel: s,
            icon: r
          } = e;
          return (0, l.jsxs)(n.Fragment, {
            children: [(0, l.jsx)(d.Z, {
              label: a,
              subLabel: s,
              icon: r
            }, a), t !== v.length - 1 && (0, l.jsx)("div", {
              className: x.valuePropDivider
            })]
          }, a)
        })
      }), null != p ? (0, l.jsx)(r.Text, {
        tag: "p",
        variant: "text-sm/normal",
        color: "text-default",
        children: u.intl.format(u.t["/l3n+1"], {
          helpCenterLink: p
        })
      }) : null]
    }), (0, l.jsx)(r.mzw, {
      className: x.footer,
      children: (0, l.jsx)("div", {
        "data-button-hoisted-classname-wrapper": true,
        className: x.footerButton,
        children: (0, l.jsx)(r.Button, {
          variant: "primary",
          text: u.intl.string(u.t["3PatSz"]),
          onClick: a
        })
      })
    })]
  })
}