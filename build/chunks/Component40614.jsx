/** Chunk was on 11160 **/
/** chunk id: 40614, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  V: () => y
}), require("./388685.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk550532 = require("./550532.js"),
  Chunk371991 = require("./371991.jsx"),
  Chunk561308 = require("./561308.js"),
  Chunk594190 = require("./594190.js"),
  Chunk695346 = require("./695346.js"),
  Chunk885110 = require("./885110.js"),
  Chunk316496 = require("./316496.js"),
  Chunk933554 = require("./933554.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk973543 = require("./973543.js");

function b(e) {
  let {
    onClick: t
  } = e;
  return (0, r.jsx)(o.P3F, {
    className: m.container,
    onClick: t,
    children: (0, r.jsx)(o.Text, {
      className: m.textContent,
      variant: "text-xs/medium",
      color: "text-secondary",
      children: g.intl.string(g.t.jfrLLS)
    })
  })
}

function O(e) {
  var t;
  let {
    onClick: n
  } = e, p = (0, l.e7)([a.Z], () => a.Z.getFakeGameData()), f = (0, l.e7)([u.ZP], () => u.ZP.getVisibleGame()), b = null != (t = null == p ? true : p.start) ? t : null == f ? true : f.start, O = d.SE.useSetting().length > 0, {
    now: y
  } = (0, s.tS)(), _ = (0, i.useMemo)(() => null == b ? null : (0, c.T_)({
    start: b
  }, y), [b, y]);
  if (null == b) return null;
  let j = [...O ? [g.intl.string(h.default.jfDsyM)] : [], g.intl.string(g.t.BMTj29), _];
  return (0, r.jsx)(o.P3F, {
    className: m.container,
    onClick: n,
    children: (0, r.jsx)(o.Text, {
      className: m.textContent,
      variant: "text-xs/medium",
      color: "text-feedback-positive",
      lineClamp: 1,
      children: j.join(" \xb7 ")
    })
  })
}

function y(e) {
  let {
    onClick: t
  } = e, {
    isEnabled: n,
    showActivitySharingIndicatorWhenSharing: i
  } = (0, f.D)("not sharing link"), a = d.G6.useSetting(), s = (0, l.e7)([p.Z], () => p.Z.getStatus());
  return !n || __OVERLAY__ ? null : a && s !== o.Skl.INVISIBLE ? i ? (0, r.jsx)(O, {
    onClick: t
  }) : null : (0, r.jsx)(b, {
    onClick: t
  })
}