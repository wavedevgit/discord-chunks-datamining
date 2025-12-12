/** Chunk was on 58120 **/
/** chunk id: 355453, original params: e,t,n (module,exports,require) **/
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
  Chunk784677 = require("./784677.js");

function y(e) {
  var t;
  let {
    transitionState: n,
    onClose: y
  } = e, m = (0, o.e7)([u.ZP], () => u.ZP.getKeybindForAction(f.kg4.SOUNDBOARD_HOLD)), [h, j] = i.useState(null != (t = null == m ? true : m.shortcut) ? t : []), x = i.useCallback(() => {
    if (0 === h.length) return null != m && s.Z.deleteKeybind(m.id), y();
    if (null == m) s.Z.addKeybind({
      action: f.kg4.SOUNDBOARD_HOLD,
      shortcut: h,
      enabled: true,
      params: {}
    });
    else {
      var e, t;
      s.Z.setKeybind((e = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), r.forEach(function(t) {
            var r;
            r = n[t], t in e ? Object.defineProperty(e, t, {
              value: r,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = r
          })
        }
        return e
      }({}, m), t = t = {
        shortcut: h
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          n.push.apply(n, r)
        }
        return n
      })(Object(t)).forEach(function(n) {
        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
      }), e))
    }
    y()
  }, [m, y, h]);
  i.useEffect(() => (d.Z.disable(), () => {
    d.Z.enable()
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
      onClick: () => j((0, b.Kd)(p.D_)),
      children: g.intl.string(g.t["s7+2rQ"])
    })]
  })
}