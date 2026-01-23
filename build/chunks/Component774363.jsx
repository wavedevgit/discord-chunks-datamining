/** Chunk was on web.js **/
/** chunk id: 774363, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => y
}), require("./938796.js"), require("./896048.js"), require("./693327.js"), require("./554719.js"), require("./680155.js"), require("./323874.js"), require("./14289.js"), require("./35956.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk503698 = require("./503698.js"),
  a = require.n(Chunk503698),
  Chunk179771 = require("./179771.js"),
  Chunk665260 = require("./665260.js"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk537569 = require("./537569.js"),
  Chunk224750 = require("./224750.js"),
  Chunk661191 = require("./661191.js"),
  Chunk510783 = require("./510783.js"),
  Chunk647053 = require("./647053.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk934715 = require("./934715.js");
let E = e => {
  switch (e) {
    case d.yW.IP_LOCATION:
      return c.L_e;
    case d.yW.DISPLAYS_ADVERTISEMENTS:
      return c.JD7;
    default:
      return null
  }
};

function y(e) {
  var t;
  let n, {
      application: i,
      scopes: l,
      redirectUri: y,
      approximateGuildCount: O,
      isEmbeddedFlow: v,
      disclosures: A
    } = e,
    I = new Date(f.default.extractTimestamp(i.id)),
    S = (0, _.i4)(l),
    T = (0, o.Lt)(null != (t = i.flags) ? t : 0, h.gfo.EMBEDDED);
  if (null != y && !T && !v) try {
    let e = new URL(y);
    n = null != e.host && e.host.length > 0 ? e.origin : e.href
  } catch (e) {
    n = null
  }
  let C = u.v.useExperiment({
    location: "oauth2_authorize"
  });
  return (0, r.jsxs)("div", {
    className: a()(g.B_, {
      [g.pN]: C.enabled
    }),
    children: [null != n ? (0, r.jsx)(b, {
      icon: c.qYV,
      text: m.intl.format(m.t["5k5OKD"], {
        origin: n
      })
    }) : null, (0, r.jsx)(b, {
      icon: c.XAi,
      text: (0, p.w)(i)
    }), (0, r.jsx)(b, {
      icon: c.O4,
      text: m.intl.formatToPlainString(m.t["+1bjc8"], {
        date: I
      })
    }), l.includes(s.F.BOT) && null != O ? (0, r.jsx)(b, {
      icon: c.CnV,
      text: m.intl.formatToPlainString(m.t.UHGHSP, {
        guildCount: O
      })
    }) : null, (0, r.jsx)(b, {
      icon: c.lmn,
      text: S
    }), null != A ? A.map(e => {
      let t = (0, d.wI)(e),
        n = E(e);
      return null != n && null != t ? (0, r.jsx)(b, {
        icon: n,
        text: t
      }) : null
    }) : null]
  })
}

function b(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: g.f_,
    children: [(0, r.jsx)(t, {
      className: g.u7,
      color: "currentColor"
    }), (0, r.jsx)(l.E, {
      variant: "text-xs/normal",
      className: g.z9,
      children: n
    })]
  })
}