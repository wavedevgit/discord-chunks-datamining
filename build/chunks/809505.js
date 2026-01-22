/** Chunk was on web.js **/
/** chunk id: 809505, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  QL: () => d,
  YS: () => f,
  vd: () => u,
  w3: () => c
});
var Chunk873298 = require("./873298.js"),
  Chunk374994 = require("./374994.js"),
  Chunk620216 = require("./620216.js"),
  Chunk652215 = require("./652215.js");
require("./656402.js");
var Chunk985018 = require("./985018.jsx");

function l(e) {
  switch (e) {
    case (0, i.dE)("PRIMARY_400"):
      return a.t.ACCENT;
    case (0, i.dE)("GREEN_360"):
      return a.t.GREEN;
    case (0, i.dE)("YELLOW_360"):
      return a.t.YELLOW;
    case (0, i.dE)("ORANGE_345"):
      return a.t.ORANGE;
    case (0, i.dE)("RED_400"):
      return a.t.RED;
    default:
      return a.t.NONE
  }
}

function c(e) {
  return e.map(e => ({
    title: e.name,
    description: e.desc,
    highlightColor: l(e.color),
    value: e.value,
    disabled: e.disabled
  }))
}

function u() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return [{
    name: o.intl.string(o.t.PEzffq),
    desc: e ? o.intl.string(o.t.j9WtHx) : o.intl.string(o.t.nDQy0p),
    value: s.PvD.NONE,
    disabled: e
  }, {
    name: o.intl.string(o.t.SsCK8I),
    desc: o.intl.string(o.t["8GCOX6"]),
    value: s.PvD.LOW,
    color: t ? true : (0, i.dE)("GREEN_360")
  }, {
    name: o.intl.string(o.t.WwNoR4),
    desc: o.intl.formatToPlainString(o.t.VS14ga, {
      min: s.$8o.ACCOUNT_AGE
    }),
    value: s.PvD.MEDIUM,
    color: t ? true : (0, i.dE)("YELLOW_360")
  }, {
    name: o.intl.string(o.t.I2jMUF),
    desc: o.intl.formatToPlainString(o.t["r+b3I4"], {
      min: s.$8o.MEMBER_AGE
    }),
    value: s.PvD.HIGH,
    color: t ? true : (0, i.dE)("ORANGE_345")
  }, {
    name: o.intl.string(o.t.cJY8w9),
    desc: o.intl.string(o.t.PWaKme),
    value: s.PvD.VERY_HIGH,
    color: t ? true : (0, i.dE)("RED_400")
  }]
}

function d() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return [{
    name: o.intl.string(o.t.iHuPE6),
    desc: o.intl.string(o.t["Z+yUWF"]),
    value: s.gh6.ALL_MEMBERS,
    color: (0, i.dE)("RED_400")
  }, {
    name: o.intl.string(o.t.ynfFaI),
    desc: e ? o.intl.string(o.t.j9WtHx) : o.intl.string(o.t["3fRIN4"]),
    value: s.gh6.MEMBERS_WITHOUT_ROLES,
    disabled: e,
    color: (0, i.dE)("YELLOW_360")
  }, {
    name: o.intl.string(o.t.VbSyAx),
    desc: e ? o.intl.string(o.t.j9WtHx) : o.intl.string(o.t.M6GNsJ),
    value: s.gh6.DISABLED,
    disabled: e,
    color: (0, i.dE)("PRIMARY_400")
  }]
}

function f() {
  return [{
    name: o.intl.string(o.t["4IaoCI"]),
    desc: o.intl.string(o.t.TgipjE),
    value: r.he.FRIENDS_AND_NON_FRIENDS
  }, {
    name: o.intl.string(o.t["6NnX6F"]),
    desc: o.intl.string(o.t["+dw1qu"]),
    value: r.he.NON_FRIENDS
  }, {
    name: o.intl.string(o.t["1tiAFz"]),
    desc: o.intl.string(o.t.LKTyeA),
    value: r.he.DISABLED
  }]
}