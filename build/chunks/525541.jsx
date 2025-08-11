/** Chunk was on web.js **/
/** chunk id: 525541, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  Z: () => u
});
var Chunk255367 = require("./255367.js");
require("./73800.js");
var Chunk755721 = require("./755721.js"),
  Chunk493683 = require("./493683.js"),
  Chunk726521 = require("./726521.js"),
  Chunk213010 = require("./213010.js"),
  Chunk718538 = require("./718538.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    otherUserId: t,
    channel: n,
    buttonSize: u = i.Ph.TINY,
    className: d,
    buttonText: f,
    navigateAwayOnReportSuccess: _ = true,
    onReportClick: p,
    onReportSubmit: h,
    onMouseEnter: m,
    onMouseLeave: g
  } = e, E = (0, s.Q)(t), b = (0, l.V)(n.id, t);
  if (!E || null == b) return null;
  let y = () => {
      null == h || h(), o.Z.closePrivateChannel(n.id, _)
    },
    O = () => {
      null == p || p(), (0, a.WL)(b, y)
    };
  return <i.zx className={d} size={u} color={i.zx.Colors.RED} disabled={null == b} onClick={O} onMouseEnter={m} onMouseLeave={g}>{null != f ? f : c.intl.string(c.t.HHZmDg)}</i.zx>
}