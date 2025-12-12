/** Chunk was on web.js **/
/** chunk id: 78451, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  IF: () => u,
  LJ: () => c,
  MF: () => d,
  c7: () => f
});
var Chunk524437 = require("./524437.js"),
  Chunk900089 = require("./900089.js"),
  Chunk137510 = require("./137510.js"),
  Chunk981631 = require("./981631.js");
require("./973005.js");
var Chunk388032 = require("./388032.jsx");

function l(e) {
  switch (e) {
    case (0, i.Fw)("PRIMARY_400"):
      return o.q.ACCENT;
    case (0, i.Fw)("GREEN_360"):
      return o.q.GREEN;
    case (0, i.Fw)("YELLOW_360"):
      return o.q.YELLOW;
    case (0, i.Fw)("ORANGE_345"):
      return o.q.ORANGE;
    case (0, i.Fw)("RED_400"):
      return o.q.RED;
    default:
      return o.q.NONE
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
    name: Chunk388032.intl.string(Chunk388032.t.PEzffq),
    desc: module ? Chunk388032.intl.string(Chunk388032.t.j9WtHx) : Chunk388032.intl.string(Chunk388032.t.nDQy0p),
    value: Chunk981631.sFg.NONE,
    disabled: module
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.SsCK8I),
    desc: Chunk388032.intl.string(Chunk388032.t["8GCOX6"]),
    value: Chunk981631.sFg.LOW,
    color: exports ? true : (0, Chunk900089.Fw)("GREEN_360")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.WwNoR4),
    desc: Chunk388032.intl.formatToPlainString(Chunk388032.t.VS14ga, {
      min: Chunk981631.YeM.ACCOUNT_AGE
    }),
    value: Chunk981631.sFg.MEDIUM,
    color: exports ? true : (0, Chunk900089.Fw)("YELLOW_360")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.I2jMUF),
    desc: Chunk388032.intl.formatToPlainString(Chunk388032.t["r+b3I4"], {
      min: Chunk981631.YeM.MEMBER_AGE
    }),
    value: Chunk981631.sFg.HIGH,
    color: exports ? true : (0, Chunk900089.Fw)("ORANGE_345")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.cJY8w9),
    desc: Chunk388032.intl.string(Chunk388032.t.PWaKme),
    value: Chunk981631.sFg.VERY_HIGH,
    color: exports ? true : (0, Chunk900089.Fw)("RED_400")
  }]
}

function d() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return [{
    name: Chunk388032.intl.string(Chunk388032.t.iHuPE6),
    desc: Chunk388032.intl.string(Chunk388032.t["Z+yUWF"]),
    value: Chunk981631.lxg.ALL_MEMBERS,
    color: (0, Chunk900089.Fw)("RED_400")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.ynfFaI),
    desc: module ? Chunk388032.intl.string(Chunk388032.t.j9WtHx) : Chunk388032.intl.string(Chunk388032.t["3fRIN4"]),
    value: Chunk981631.lxg.MEMBERS_WITHOUT_ROLES,
    disabled: module,
    color: (0, Chunk900089.Fw)("YELLOW_360")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.VbSyAx),
    desc: module ? Chunk388032.intl.string(Chunk388032.t.j9WtHx) : Chunk388032.intl.string(Chunk388032.t.M6GNsJ),
    value: Chunk981631.lxg.DISABLED,
    disabled: module,
    color: (0, Chunk900089.Fw)("PRIMARY_400")
  }]
}

function f() {
  return [{
    name: Chunk388032.intl.string(Chunk388032.t["4IaoCI"]),
    desc: Chunk388032.intl.string(Chunk388032.t.TgipjE),
    value: Chunk524437.Xr.FRIENDS_AND_NON_FRIENDS
  }, {
    name: Chunk388032.intl.string(Chunk388032.t["6NnX6F"]),
    desc: Chunk388032.intl.string(Chunk388032.t["+dw1qu"]),
    value: Chunk524437.Xr.NON_FRIENDS
  }, {
    name: Chunk388032.intl.string(Chunk388032.t["1tiAFz"]),
    desc: Chunk388032.intl.string(Chunk388032.t.LKTyeA),
    value: Chunk524437.Xr.DISABLED
  }]
}