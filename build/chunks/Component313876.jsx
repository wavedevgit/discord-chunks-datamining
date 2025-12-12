/** Chunk was on web.js **/
/** chunk id: 313876, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => c
}), require("./953529.js");
var Chunk54381 = require("./54381.js");
require("./473749.js");
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
  } = e, d = (0, i.e7)([a.default], () => a.default.getId()) === c.id ? l.intl.string(l.t.C89OLE) : l.intl.string(l.t.YVub5y), f = (0, s.l)(null == u ? true : u.code);
  return (0, r.jsxs)(o.Z, {
    children: [(0, r.jsx)(o.Z.Header, {
      text: d
    }), (0, r.jsxs)(o.Z.Body, {
      children: [(0, r.jsx)(o.Z.Icon, {
        expired: true
      }), (0, r.jsx)(o.Z.Info, {
        expired: true,
        title: null != (t = null == f ? true : f.title) ? t : l.intl.string(l.t["Jhx/ud"]),
        children: null != (n = null == f ? true : f.description) ? n : null == u ? true : u.message
      })]
    })]
  })
}