/** Chunk was on web.js **/
/** chunk id: 807989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./997841.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk120356 = require("./120356.js"),
  o = require.n(Chunk120356),
  Chunk243814 = require("./243814.js"),
  Chunk95015 = require("./95015.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk162685 = require("./162685.js"),
  Chunk979200 = require("./979200.js"),
  Chunk709054 = require("./709054.js"),
  Chunk941532 = require("./941532.js"),
  Chunk713938 = require("./713938.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk852303 = require("./852303.js");
let E = e => {
  switch (e) {
    case d.ZC.IP_LOCATION:
      return c.enf;
    case d.ZC.DISPLAYS_ADVERTISEMENTS:
      return c.FLu;
    default:
      return null
  }
};

function b(e) {
  var t;
  let n, {
      application: i,
      scopes: l,
      redirectUri: b,
      approximateGuildCount: O,
      isEmbeddedFlow: v,
      disclosures: S
    } = e,
    I = new Date(f.default.extractTimestamp(i.id)),
    T = (0, _.W3)(l),
    C = (0, s.yE)(null != (t = i.flags) ? t : 0, m.udG.EMBEDDED);
  if (null != b && !C && !v) try {
    let e = new URL(b);
    n = null != e.host && e.host.length > 0 ? e.origin : e.href
  } catch (e) {
    n = null
  }
  let A = u.w.useExperiment({
    location: "oauth2_authorize"
  });
  return (0, r.jsxs)("div", {
    className: o()(g.applicationDetails, {
      [g.noPadding]: A.enabled
    }),
    children: [null != n ? (0, r.jsx)(y, {
      icon: c.xPt,
      text: h.intl.format(h.t["5k5OKD"], {
        origin: n
      })
    }) : null, (0, r.jsx)(y, {
      icon: c.mBM,
      text: (0, p.i)(i)
    }), (0, r.jsx)(y, {
      icon: c.T39,
      text: h.intl.formatToPlainString(h.t["+1bjc8"], {
        date: I
      })
    }), l.includes(a.x.BOT) && null != O ? (0, r.jsx)(y, {
      icon: c.wGt,
      text: h.intl.formatToPlainString(h.t.UHGHSP, {
        guildCount: O
      })
    }) : null, (0, r.jsx)(y, {
      icon: c.b7C,
      text: T
    }), null != S ? S.map(e => {
      let t = (0, d.PM)(e),
        n = E(e);
      return null != n && null != t ? (0, r.jsx)(y, {
        icon: n,
        text: t
      }) : null
    }) : null]
  })
}

function y(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: g.entry,
    children: [(0, r.jsx)(t, {
      className: g.entryIcon,
      color: "currentColor"
    }), (0, r.jsx)(l.x, {
      variant: "text-xs/normal",
      className: g.entryInner,
      children: n
    })]
  })
}