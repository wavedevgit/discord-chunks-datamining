/** Chunk was on 90237 **/
/** chunk id: 29681, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => g
}), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk158954 = require("./158954.js"),
  Chunk311907 = require("./311907.js"),
  Chunk397927 = require("./397927.js"),
  Chunk97260 = require("./97260.js"),
  Chunk117178 = require("./117178.jsx"),
  Chunk775121 = require("./775121.js"),
  Chunk532624 = require("./532624.js"),
  Chunk350535 = require("./350535.js"),
  Chunk980504 = require("./980504.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk316173 = require("./316173.js");

function g(e) {
  var t;
  let {
    transitionState: n,
    onClose: g
  } = e, h = (0, l.bG)([b.Ay], () => b.Ay.getKeybindForAction(O.hCu.SOUNDBOARD_HOLD)), [j, m] = i.useState(null != (t = null == h ? true : h.shortcut) ? t : []), x = i.useCallback(() => {
    if (0 === j.length) return null != h && c.A.deleteKeybind(h.id), g();
    if (null == h) c.A.addKeybind({
      action: O.hCu.SOUNDBOARD_HOLD,
      shortcut: j,
      enabled: true,
      params: {}
    });
    else {
      var e, t;
      c.A.setKeybind((e = function(e) {
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
      }({}, h), t = t = {
        shortcut: j
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
    g()
  }, [h, g, j]);
  i.useEffect(() => (u.A.disable(), () => {
    u.A.enable()
  }), []);
  let v = i.useMemo(() => [{
    text: y.intl.string(y.t["ETE/oC"]),
    onClick: g,
    variant: "secondary"
  }, {
    text: y.intl.string(y.t["R3BPH+"]),
    onClick: x,
    variant: "primary"
  }], [g, x]);
  return (0, r.jsxs)(a.Modal, {
    transitionState: n,
    title: y.intl.string(y.t["0Osu3x"]),
    actions: v,
    onClose: g,
    children: [(0, r.jsx)(s.po8, {
      className: f.$e,
      messageType: s.YCn.WARNING,
      children: y.intl.string(y.t["O2v/eP"])
    }), (0, r.jsx)(s.Heading, {
      className: f._5,
      variant: "eyebrow",
      color: "text-default",
      children: y.intl.string(y.t.UUpAD6)
    }), (0, r.jsx)(s.Text, {
      className: f.XI,
      variant: "text-md/normal",
      children: y.intl.string(y.t["1xFbP/"])
    }), (0, r.jsx)(s.Text, {
      className: f.lf,
      variant: "text-sm/normal",
      children: y.intl.string(y.t.laNlTl)
    }), (0, r.jsx)(s.Heading, {
      className: f._5,
      variant: "eyebrow",
      color: "text-default",
      children: y.intl.string(y.t["1La4tC"])
    }), (0, r.jsx)(o.A, {
      defaultValue: j,
      onChange: m
    }), (0, r.jsx)(s.MzZ, {
      className: f.WA,
      onClick: () => m((0, d.OH)(p.XF)),
      children: y.intl.string(y.t["s7+2rQ"])
    })]
  })
}