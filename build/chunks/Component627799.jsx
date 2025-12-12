/** Chunk was on web.js **/
/** chunk id: 627799, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => f
}), require("./539854.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk243814 = require("./243814.js"),
  Chunk993365 = require("./993365.js"),
  Chunk481060 = require("./481060.js"),
  Chunk589414 = require("./589414.js"),
  Chunk63063 = require("./63063.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk411479 = require("./411479.js");

function f(e) {
  let t, {
      application: n,
      accountScopes: a
    } = e,
    f = [],
    _ = (0, s.Z)(n);
  return (a.includes(i.x.SDK_SOCIAL_LAYER) ? (t = _ ? u.intl.format(u.t.GxjwZM, {
    applicationName: n.name,
    learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS)
  }) : u.intl.format(u.t.DfBeUq, {
    learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS)
  }), f.push({
    icon: o.iFz,
    text: _ ? u.intl.formatToPlainString(u.t.z9peav, {
      maxFriends: c.L4X
    }) : u.intl.formatToPlainString(u.t.WNKzo9, {
      maxFriends: c.L4X
    })
  }, {
    icon: o.mrm,
    text: _ ? u.intl.string(u.t.daY6xj) : u.intl.string(u.t.j7peBh)
  }, {
    icon: o.iWm,
    text: _ ? u.intl.string(u.t["/bdaNN"]) : u.intl.string(u.t["feD3+i"])
  }, {
    icon: o.ewm,
    text: _ ? u.intl.string(u.t.mSqazC) : u.intl.string(u.t.YFFVM1)
  })) : a.includes(i.x.SDK_SOCIAL_LAYER_PRESENCE) && (t = _ ? u.intl.format(u.t.GxjwZM, {
    applicationName: n.name,
    learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS)
  }) : u.intl.format(u.t.DfBeUq, {
    learnMoreURL: l.Z.getArticleURL(c.BhN.SOCIAL_LAYER_CONNECTIONS)
  }), f.push({
    icon: o.iFz,
    text: _ ? u.intl.formatToPlainString(u.t.z9peav, {
      maxFriends: c.L4X
    }) : u.intl.formatToPlainString(u.t.WNKzo9, {
      maxFriends: c.L4X
    })
  }, {
    icon: o.iWm,
    text: _ ? u.intl.string(u.t["/bdaNN"]) : u.intl.string(u.t["feD3+i"])
  }, {
    icon: o.ewm,
    text: _ ? u.intl.string(u.t.mSqazC) : u.intl.string(u.t.YFFVM1)
  })), 0 === f.length) ? null : (0, r.jsxs)("div", {
    className: d.applicationEducation,
    children: [null != t ? (0, r.jsx)(o.Heading, {
      variant: "heading-sm/normal",
      className: d.sectionLabel,
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
    className: d.entry,
    children: [(0, r.jsx)(t, {
      className: d.entryIcon,
      color: "currentColor"
    }), (0, r.jsx)(a.x, {
      variant: "text-md/normal",
      className: d.entryText,
      children: n
    })]
  })
}