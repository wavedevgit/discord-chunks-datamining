/** Chunk was on 91173 **/
/** chunk id: 313876, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk442837 = require("./442837.js"),
  Chunk955415 = require("./955415.jsx"),
  Chunk314897 = require("./314897.js"),
  Chunk782605 = require("./782605.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  var t, n;
  let {
    author: c,
    inviteError: u
  } = e, d = (0, i.e7)([a.default], () => a.default.getId()) === c.id ? s.intl.string(s.t.C89OLC) : s.intl.string(s.t["YVub5+"]), p = (0, o.l)(null == u ? true : u.code);
  return (0, r.jsxs)(l.Z, {
    children: [(0, r.jsx)(l.Z.Header, {
      text: d
    }), (0, r.jsxs)(l.Z.Body, {
      children: [(0, r.jsx)(l.Z.Icon, {
        expired: true
      }), (0, r.jsx)(l.Z.Info, {
        expired: true,
        title: null != (t = null == p ? true : p.title) ? t : s.intl.string(s.t["Jhx/ub"]),
        children: null != (n = null == p ? true : p.description) ? n : null == u ? true : u.message
      })]
    })]
  })
}