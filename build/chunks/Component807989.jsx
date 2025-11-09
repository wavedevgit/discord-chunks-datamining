/** Chunk was on web.js **/
/** chunk id: 807989, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => b
}), require("./997841.js"), require("./190126.js"), require("./368063.js"), require("./65234.js"), require("./111804.js"), require("./490233.js"), require("./97749.js"), require("./388685.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk120356 = require("./120356.js"),
  a = require.n(Chunk120356),
  Chunk243814 = require("./243814.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk162685 = require("./162685.js"),
  Chunk979200 = require("./979200.js"),
  Chunk630388 = require("./630388.js"),
  Chunk709054 = require("./709054.js"),
  Chunk941532 = require("./941532.js"),
  Chunk713938 = require("./713938.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk239522 = require("./239522.js");
let E = e => {
  switch (e) {
    case u.ZC.IP_LOCATION:
      return l.enf;
    case u.ZC.DISPLAYS_ADVERTISEMENTS:
      return l.FLu;
    default:
      return null
  }
};

function b(e) {
  var t;
  let n, {
      application: i,
      scopes: s,
      redirectUri: b,
      approximateGuildCount: O,
      isEmbeddedFlow: v,
      disclosures: I
    } = e,
    S = new Date(f.default.extractTimestamp(i.id)),
    T = (0, p.W3)(s),
    A = (0, d.yE)(null != (t = i.flags) ? t : 0, h.udG.EMBEDDED);
  if (null != b && !A && !v) try {
    let e = new URL(b);
    n = null != e.host && e.host.length > 0 ? e.origin : e.href
  } catch (e) {
    n = null
  }
  let C = c.w.useExperiment({
    location: "oauth2_authorize"
  });
  return (0, r.jsxs)("div", {
    className: a()(g.applicationDetails, {
      [g.noPadding]: C.enabled
    }),
    children: [null != n ? (0, r.jsx)(y, {
      icon: l.xPt,
      text: m.intl.format(m.t["5k5OKD"], {
        origin: n
      })
    }) : null, (0, r.jsx)(y, {
      icon: l.mBM,
      text: (0, _.i)(i)
    }), (0, r.jsx)(y, {
      icon: l.T39,
      text: m.intl.formatToPlainString(m.t["+1bjc8"], {
        date: S
      })
    }), s.includes(o.x.BOT) && null != O ? (0, r.jsx)(y, {
      icon: l.wGt,
      text: m.intl.formatToPlainString(m.t.UHGHSP, {
        guildCount: O
      })
    }) : null, (0, r.jsx)(y, {
      icon: l.b7C,
      text: T
    }), null != I ? I.map(e => {
      let t = (0, u.PM)(e),
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
    }), (0, r.jsx)(s.x, {
      variant: "text-xs/normal",
      className: g.entryInner,
      children: n
    })]
  })
}