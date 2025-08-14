/** Chunk was on 7384 **/
/** chunk id: 430131, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => m
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk993413 = require("./993413.jsx"),
  Chunk496675 = require("./496675.js"),
  Chunk52597 = require("./52597.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk473385 = require("./473385.js");

function m(e) {
  let {
    errors: t,
    pendingNick: n,
    currentNick: m,
    username: p,
    guild: g
  } = e, h = null != n ? n : m, f = (0, r.e7)([l.Z], () => l.Z.can(c.Plq.CHANGE_NICKNAME, g) || l.Z.can(c.Plq.MANAGE_NICKNAMES, g));
  return (0, i.jsxs)(a.Z, {
    title: d.intl.string(d.t.me1lRk),
    errors: t,
    children: [(0, i.jsx)(s.oil, {
      value: null != h ? h : "",
      placeholder: p,
      maxLength: c.l$U,
      onChange: function(e) {
        (0, o.wi)(e, m)
      },
      disabled: !f
    }), !f && (0, i.jsx)(s.R94, {
      className: u.nicknameDisabled,
      type: s.R94.Types.DESCRIPTION,
      children: d.intl.string(d.t.gzjxQk)
    })]
  })
}