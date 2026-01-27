/** Chunk was on web.js **/
/** chunk id: 404035, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => f
}), require("./321073.js");
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk179771 = require("./179771.js"),
  Chunk571356 = require("./571356.js"),
  Chunk397927 = require("./397927.js"),
  Chunk62447 = require("./62447.js"),
  Chunk975571 = require("./975571.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk968363 = require("./968363.js");

function f(e) {
  let t, {
      application: n,
      accountScopes: a
    } = e,
    f = [],
    _ = (0, s.A)(n);
  return (a.includes(i.F.SDK_SOCIAL_LAYER) ? (t = _ ? u.intl.format(u.t.GxjwZM, {
    applicationName: n.name,
    learnMoreURL: l.A.getArticleURL(c.MVz.SOCIAL_LAYER_CONNECTIONS)
  }) : u.intl.format(u.t.DfBeUq, {
    learnMoreURL: l.A.getArticleURL(c.MVz.SOCIAL_LAYER_CONNECTIONS)
  }), f.push({
    icon: o.$yI,
    text: _ ? u.intl.formatToPlainString(u.t.z9peav, {
      maxFriends: c.$4X
    }) : u.intl.formatToPlainString(u.t.WNKzo9, {
      maxFriends: c.$4X
    })
  }, {
    icon: o.SYr,
    text: _ ? u.intl.string(u.t.daY6xj) : u.intl.string(u.t.j7peBh)
  }, {
    icon: o._xR,
    text: _ ? u.intl.string(u.t["/bdaNN"]) : u.intl.string(u.t["feD3+i"])
  }, {
    icon: o.Zes,
    text: _ ? u.intl.string(u.t.mSqazC) : u.intl.string(u.t.YFFVM1)
  })) : a.includes(i.F.SDK_SOCIAL_LAYER_PRESENCE) && (t = _ ? u.intl.format(u.t.GxjwZM, {
    applicationName: n.name,
    learnMoreURL: l.A.getArticleURL(c.MVz.SOCIAL_LAYER_CONNECTIONS)
  }) : u.intl.format(u.t.DfBeUq, {
    learnMoreURL: l.A.getArticleURL(c.MVz.SOCIAL_LAYER_CONNECTIONS)
  }), f.push({
    icon: o.$yI,
    text: _ ? u.intl.formatToPlainString(u.t.z9peav, {
      maxFriends: c.$4X
    }) : u.intl.formatToPlainString(u.t.WNKzo9, {
      maxFriends: c.$4X
    })
  }, {
    icon: o._xR,
    text: _ ? u.intl.string(u.t["/bdaNN"]) : u.intl.string(u.t["feD3+i"])
  }, {
    icon: o.Zes,
    text: _ ? u.intl.string(u.t.mSqazC) : u.intl.string(u.t.YFFVM1)
  })), 0 === f.length) ? null : (0, r.jsxs)("div", {
    className: d.b9,
    children: [null != t ? (0, r.jsx)(o.Heading, {
      variant: "heading-sm/normal",
      className: d.a9,
      children: t
    }) : null, f.map((e, t) => {
      let {
        icon: n,
        text: i
      } = e;
      return (0, r.jsx)(p, {
        icon: n,
        text: i
      }, t)
    })]
  })
}

function p(e) {
  let {
    icon: t,
    text: n
  } = e;
  return (0, r.jsxs)("div", {
    className: d.f_,
    children: [(0, r.jsx)(t, {
      className: d.u7,
      color: "currentColor"
    }), (0, r.jsx)(a.E, {
      variant: "text-md/normal",
      className: d.u0,
      children: n
    })]
  })
}