/** Chunk was on 92917 **/
/** chunk id: 178910, original params: e,t,n (module,exports,require) **/
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
    activityText: a
  } = e;
  return (0, r.jsxs)("div", {
    className: o.i,
    children: [(0, r.jsx)(l.Ay, {
      guildId: n,
      users: t,
      max: 6,
      size: l.DN.SIZE_16
    }), (0, r.jsx)(i.Text, {
      variant: "text-xs/normal",
      color: "none",
      children: a
    })]
  })
}

function u(e) {
  let {
    activity: t,
    activityUsersCount: n
  } = e;
  switch (null == t ? true : t.type) {
    case a.$pd.STREAMING:
      return {
        text: s.intl.formatToPlainString(s.t.tyCw2q, {
          count: n
        }), Icon: i.ofK
      };
    case a.$pd.LISTENING:
      return {
        text: s.intl.formatToPlainString(s.t["2l8yka"], {
          count: n
        }), Icon: i.T7G
      };
    default:
      return {
        text: s.intl.formatToPlainString(s.t.yJj035, {
          count: n
        }), Icon: i._xR
      }
  }
}