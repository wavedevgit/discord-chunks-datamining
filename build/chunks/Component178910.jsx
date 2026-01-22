/** Chunk was on web.js **/
/** chunk id: 178910, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  $: () => c,
  y: () => u
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk104171 = require("./104171.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk958505 = require("./958505.js");

function c(e) {
  let {
    activityUsers: t,
    guildId: n,
    activityText: s
  } = e;
  return (0, r.jsxs)("div", {
    className: l.i,
    children: [(0, r.jsx)(a.Ay, {
      guildId: n,
      users: t,
      max: 6,
      size: a.DN.SIZE_16
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "none",
      children: s
    })]
  })
}

function u(e) {
  let {
    activity: t,
    activityUsersCount: n
  } = e;
  switch (null == t ? true : t.type) {
    case s.$pd.STREAMING:
      return {
        text: o.intl.formatToPlainString(o.t.tyCw2q, {
          count: n
        }), Icon: i.ofK
      };
    case s.$pd.LISTENING:
      return {
        text: o.intl.formatToPlainString(o.t["2l8yka"], {
          count: n
        }), Icon: i.T7G
      };
    default:
      return {
        text: o.intl.formatToPlainString(o.t.yJj035, {
          count: n
        }), Icon: i._xR
      }
  }
}