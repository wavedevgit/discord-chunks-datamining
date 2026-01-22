/** Chunk was on 12618 **/
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
  } = e, h = (0, l.bG)([d.Ay], () => d.Ay.getKeybindForAction(O.hCu.SOUNDBOARD_HOLD)), [j, m] = a.useState(null != (t = null == h ? true : h.shortcut) ? t : []), x = a.useCallback(() => {
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
  a.useEffect(() => (u.A.disable(), () => {
    u.A.enable()
  }), []);
  let v = a.useMemo(() => [{
    text: f.intl.string(f.t["ETE/oC"]),
    onClick: g,
    variant: "secondary"
  }, {
    text: f.intl.string(f.t["R3BPH+"]),
    onClick: x,
    variant: "primary"
  }], [g, x]);
  return (0, r.jsxs)(i.Modal, {
    transitionState: n,
    title: f.intl.string(f.t["0Osu3x"]),
    actions: v,
    onClose: g,
    children: [(0, r.jsx)(s.po8, {
      className: y.$e,
      messageType: s.YCn.WARNING,
      children: f.intl.string(f.t["O2v/eP"])
    }), (0, r.jsx)(s.Heading, {
      className: y._5,
      variant: "eyebrow",
      color: "text-default",
      children: f.intl.string(f.t.UUpAD6)
    }), (0, r.jsx)(s.Text, {
      className: y.XI,
      variant: "text-md/normal",
      children: f.intl.string(f.t["1xFbP/"])
    }), (0, r.jsx)(s.Text, {
      className: y.lf,
      variant: "text-sm/normal",
      children: f.intl.string(f.t.laNlTl)
    }), (0, r.jsx)(s.Heading, {
      className: y._5,
      variant: "eyebrow",
      color: "text-default",
      children: f.intl.string(f.t["1La4tC"])
    }), (0, r.jsx)(o.A, {
      defaultValue: j,
      onChange: m
    }), (0, r.jsx)(s.MzZ, {
      className: y.WA,
      onClick: () => m((0, b.OH)(p.XF)),
      children: f.intl.string(f.t["s7+2rQ"])
    })]
  })
}