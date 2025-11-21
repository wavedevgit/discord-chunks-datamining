/** Chunk was on web.js **/
/** chunk id: 579832, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => E
});
var Chunk54381 = require("./54381.js"),
  Chunk793030 = require("./793030.js"),
  Chunk481060 = require("./481060.js"),
  Chunk834129 = require("./834129.jsx"),
  Chunk594174 = require("./594174.js"),
  Chunk51144 = require("./51144.js"),
  Chunk282793 = require("./282793.js"),
  Chunk606097 = require("./606097.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk887819 = require("./887819.js"),
  Chunk617842 = require("./617842.js");
let p = () => {
    let e = () => {};
    return (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "expressive",
      size: "md",
      text: Chunk388032.intl.string(Chunk606097.default.rjuKse),
      icon: Chunk793030.SrA,
      onClick: module
    })
  },
  h = () => {
    let e = () => {};
    return (0, Chunk54381.jsx)(Chunk481060.Button, {
      variant: "expressive",
      size: "md",
      text: Chunk388032.intl.string(Chunk606097.default["eYHh+z"]),
      onClick: module
    })
  },
  m = (e, t) => {
    var n;
    let r = null == (n = t.recipients) ? true : n.find(t => t !== e.id),
      i = s.default.getUser(r);
    if (null == i) return null;
    let a = (0, l.XM)(i),
      o = (0, c.sO)(),
      f = d.intl.format(u.default["5uwv8J"], {
        receiverName: a,
        premiumGroupProductName: o
      });
    return {
      header: f,
      title: d.intl.format(u.default.DkycE7, {
        premiumGroupProductName: o
      }),
      body: d.intl.format(u.default["AmE0B/"], {
        receiverName: a
      })
    }
  },
  g = e => {
    let t = (0, l.XM)(e),
      n = (0, c.sO)(),
      r = d.intl.format(u.default.ssge1y, {
        senderName: t,
        premiumGroupProductName: n,
        helpCenterLink: c.j3
      });
    return {
      header: r,
      title: d.intl.string(u.default.SdOQ6w),
      body: d.intl.format(u.default.MkcdX8, {
        senderName: t
      })
    }
  },
  E = e => {
    let {
      message: t,
      channel: n,
      compact: l
    } = e, c = s.default.getCurrentUser();
    if (null == c) return null;
    let u = t.author,
      d = c.id === u.id,
      E = d ? m(u, n) : g(u);
    if (null == E) return null;
    let {
      header: b,
      title: y,
      body: O
    } = E;
    return (0, r.jsxs)(o.Z, {
      className: f.systemMessageContainer,
      compact: l,
      iconNode: (0, r.jsx)(i.SrA, {
        size: "md",
        color: "currentColor"
      }),
      children: [(0, r.jsx)(a.Text, {
        variant: "text-md/medium",
        color: "text-primary",
        children: b
      }), (0, r.jsxs)(a.Kqy, {
        direction: "horizontal",
        className: f.embedContainer,
        children: [(0, r.jsx)("img", {
          src: _,
          alt: "",
          className: f.image
        }), (0, r.jsxs)("div", {
          className: f.content,
          children: [(0, r.jsx)(a.Cts, {
            type: "beta",
            variant: "expressive"
          }), (0, r.jsx)("h2", {
            className: f.title,
            children: y
          }), (0, r.jsx)(a.Text, {
            variant: "text-md/medium",
            color: "text-secondary",
            children: O
          }), (0, r.jsx)("div", {
            className: f.buttonContainer,
            children: d ? (0, r.jsx)(h, {}) : (0, r.jsx)(p, {})
          })]
        })]
      })]
    })
  }