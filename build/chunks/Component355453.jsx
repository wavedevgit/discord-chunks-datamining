/** Chunk was on 58120 **/
/** chunk id: 355453, original params: t,e,n (module,exports,require) **/
require.d(exports, {
  default: () => y
}), require("./388685.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk793030 = require("./793030.js"),
  Chunk442837 = require("./442837.js"),
  Chunk481060 = require("./481060.js"),
  Chunk660216 = require("./660216.js"),
  Chunk825209 = require("./825209.jsx"),
  Chunk714338 = require("./714338.js"),
  Chunk556296 = require("./556296.js"),
  Chunk13140 = require("./13140.js"),
  Chunk710111 = require("./710111.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk687213 = require("./687213.js");

function y(t) {
  var e;
  let {
    transitionState: n,
    onClose: y
  } = t, m = (0, o.e7)([b.ZP], () => b.ZP.getKeybindForAction(f.kg4.SOUNDBOARD_HOLD)), [h, j] = i.useState(null != (e = null == m ? true : m.shortcut) ? e : []), x = i.useCallback(() => {
    if (0 === h.length) return null != m && s.Z.deleteKeybind(m.id), y();
    if (null == m) s.Z.addKeybind({
      action: f.kg4.SOUNDBOARD_HOLD,
      shortcut: h,
      enabled: true,
      params: {}
    });
    else {
      var t, e;
      s.Z.setKeybind((t = function(t) {
        for (var e = 1; e < arguments.length; e++) {
          var n = null != arguments[e] ? arguments[e] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(t) {
            return Object.getOwnPropertyDescriptor(n, t).enumerable
          }))), r.forEach(function(e) {
            var r;
            r = n[e], e in t ? Object.defineProperty(t, e, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : t[e] = r
          })
        }
        return t
      }({}, m), e = e = {
        shortcut: h
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(e)) : (function(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          n.push.apply(n, r)
        }
        return n
      })(Object(e)).forEach(function(n) {
        Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(e, n))
      }), t))
    }
    y()
  }, [m, y, h]);
  i.useEffect(() => (u.Z.disable(), () => {
    u.Z.enable()
  }), []);
  let v = i.useMemo(() => [{
    text: g.intl.string(g.t["ETE/oC"]),
    onClick: y,
    variant: "secondary"
  }, {
    text: g.intl.string(g.t["R3BPH+"]),
    onClick: x,
    variant: "primary"
  }], [y, x]);
  return (0, r.jsxs)(a.Modal, {
    transitionState: n,
    title: g.intl.string(g.t["0Osu3x"]),
    actions: v,
    onClose: y,
    children: [(0, r.jsx)(c.Wn, {
      className: O.warning,
      messageType: c.QYI.WARNING,
      children: g.intl.string(g.t["O2v/eP"])
    }), (0, r.jsx)(c.Heading, {
      className: O.formHeader,
      variant: "eyebrow",
      color: "text-default",
      children: g.intl.string(g.t.UUpAD6)
    }), (0, r.jsx)(c.Text, {
      className: O.action,
      variant: "text-md/normal",
      children: g.intl.string(g.t["1xFbP/"])
    }), (0, r.jsx)(c.Text, {
      className: O.actionDescription,
      variant: "text-sm/normal",
      children: g.intl.string(g.t.laNlTl)
    }), (0, r.jsx)(c.Heading, {
      className: O.formHeader,
      variant: "eyebrow",
      color: "text-default",
      children: g.intl.string(g.t["1La4tC"])
    }), (0, r.jsx)(l.Z, {
      defaultValue: h,
      onChange: j
    }), (0, r.jsx)(c.Anchor, {
      className: O.resetButton,
      onClick: () => j((0, d.Kd)(p.D_)),
      children: g.intl.string(g.t["s7+2rQ"])
    })]
  })
}