/** Chunk was on 81498 **/
/** chunk id: 78451, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  IF: () => u,
  LJ: () => a,
  MF: () => c,
  c7: () => d
});
var Chunk524437 = require("./524437.js"),
  Chunk900089 = require("./900089.js"),
  Chunk2150 = require("./2150.js"),
  Chunk981631 = require("./981631.js");
require("./973005.js");
var Chunk388032 = require("./388032.jsx");

function a(e) {
  return e.map(e => ({
    title: e.name,
    description: e.desc,
    highlightColor: function(e) {
      switch (e) {
        case (0, r.Fw)("PRIMARY_400"):
          return s.q.ACCENT;
        case (0, r.Fw)("GREEN_360"):
          return s.q.GREEN;
        case (0, r.Fw)("YELLOW_360"):
          return s.q.YELLOW;
        case (0, r.Fw)("ORANGE_345"):
          return s.q.ORANGE;
        case (0, r.Fw)("RED_400"):
          return s.q.RED;
        default:
          return s.q.NONE
      }
    }(e.color),
    value: e.value,
    disabled: e.disabled
  }))
}

function u() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0],
    t = arguments.length > 1 && true !== arguments[1] && arguments[1];
  return [{
    name: Chunk388032.intl.string(Chunk388032.t.PEzffn),
    desc: Chunk388032.intl.string(Chunk388032.t.nDQy0t),
    value: Chunk981631.sFg.NONE,
    disabled: module,
    tooltipText: module ? Chunk388032.intl.string(Chunk388032.t.j9WtHx) : null
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.SsCK8P),
    desc: Chunk388032.intl.string(Chunk388032.t["8GCOX1"]),
    value: Chunk981631.sFg.LOW,
    color: exports ? true : (0, Chunk900089.Fw)("GREEN_360")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.WwNoR0),
    desc: Chunk388032.intl.formatToPlainString(Chunk388032.t.VS14gY, {
      min: Chunk981631.YeM.ACCOUNT_AGE
    }),
    value: Chunk981631.sFg.MEDIUM,
    color: exports ? true : (0, Chunk900089.Fw)("YELLOW_360")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.I2jMUF),
    desc: Chunk388032.intl.formatToPlainString(Chunk388032.t["r+b3Iy"], {
      min: Chunk981631.YeM.MEMBER_AGE
    }),
    value: Chunk981631.sFg.HIGH,
    color: exports ? true : (0, Chunk900089.Fw)("ORANGE_345")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.cJY8w8),
    desc: Chunk388032.intl.string(Chunk388032.t.PWaKmZ),
    value: Chunk981631.sFg.VERY_HIGH,
    color: exports ? true : (0, Chunk900089.Fw)("RED_400")
  }]
}

function c() {
  let e = arguments.length > 0 && true !== arguments[0] && arguments[0];
  return [{
    name: Chunk388032.intl.string(Chunk388032.t.iHuPEx),
    desc: Chunk388032.intl.string(Chunk388032.t["Z+yUWF"]),
    value: Chunk981631.lxg.ALL_MEMBERS,
    color: (0, Chunk900089.Fw)("RED_400")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.ynfFaG),
    desc: Chunk388032.intl.string(Chunk388032.t["3fRINz"]),
    value: Chunk981631.lxg.MEMBERS_WITHOUT_ROLES,
    disabled: module,
    tooltipText: module ? Chunk388032.intl.string(Chunk388032.t.j9WtHx) : null,
    color: (0, Chunk900089.Fw)("YELLOW_360")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t.VbSyAw),
    desc: Chunk388032.intl.string(Chunk388032.t.M6GNsL),
    value: Chunk981631.lxg.DISABLED,
    disabled: module,
    tooltipText: module ? Chunk388032.intl.string(Chunk388032.t.j9WtHx) : null,
    color: (0, Chunk900089.Fw)("PRIMARY_400")
  }]
}

function d() {
  return [{
    name: Chunk388032.intl.string(Chunk388032.t["4IaoCA"]),
    desc: Chunk388032.intl.string(Chunk388032.t.TgipjI),
    value: Chunk524437.Xr.FRIENDS_AND_NON_FRIENDS,
    color: (0, Chunk900089.Fw)("GREEN_360")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t["6NnX6O"]),
    desc: Chunk388032.intl.string(Chunk388032.t["+dw1qq"]),
    value: Chunk524437.Xr.NON_FRIENDS,
    color: (0, Chunk900089.Fw)("YELLOW_360")
  }, {
    name: Chunk388032.intl.string(Chunk388032.t["1tiAFx"]),
    desc: Chunk388032.intl.string(Chunk388032.t.LKTyeH),
    value: Chunk524437.Xr.DISABLED,
    color: (0, Chunk900089.Fw)("RED_400")
  }]
}