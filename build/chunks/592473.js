/** Chunk was on 54082 **/
n.d(t, {
  Z: () => f
}), n(47120);
var r = n(200651),
  i = n(192379),
  l = n(120356),
  o = n.n(l),
  a = n(772848),
  s = n(481060),
  c = n(871499),
  u = n(388032),
  d = n(342031);

function p(e) {
  let {
    width: t = 24,
    height: n = 24,
    isBadged: l = !1
  } = e, [o] = i.useState(() => (0, a.Z)()), c = (0, s.bWb)().enabled;
  return (0, r.jsxs)("svg", {
    width: t,
    height: n,
    viewBox: "0 0 24 24",
    children: [(0, r.jsx)("defs", {
      children: (0, r.jsxs)("mask", {
        id: o,
        children: [(0, r.jsx)("rect", {
          fill: "white",
          width: "100%",
          height: "100%"
        }), l && (0, r.jsx)("circle", {
          cx: "20",
          cy: "19",
          r: "10",
          fill: "black"
        })]
      })
    }), c ? (0, r.jsx)("g", {
      mask: "url(#".concat(o, ")"),
      children: (0, r.jsx)(s.E0I, {})
    }) : (0, r.jsx)("path", {
      fill: "currentColor",
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M20.53 7.76998C20.455 7.60998 20.31 7.48998 20.135 7.44498C20.075 7.42832 20.0106 7.41165 19.9462 7.39498L19.85 7.36998C19.305 7.22998 18.635 7.56498 18.35 8.11498L17.37 9.99998C17.085 10.55 16.725 10.51 16.57 9.90998L14.395 1.38498C14.24 0.779981 13.64 0.459981 13.05 0.664981C12.46 0.869981 12.095 1.52498 12.225 2.13498L13.495 7.95998C13.63 8.56998 13.575 9.11498 13.375 9.18498C13.175 9.25498 12.85 8.83498 12.65 8.24498L10.55 2.07498C10.35 1.48498 9.71004 1.17498 9.12004 1.37998C8.53004 1.58498 8.21504 2.22998 8.41004 2.81998L10.47 8.99998C10.665 9.58998 10.665 10.125 10.465 10.195C10.265 10.265 9.88504 9.86498 9.62504 9.29998L7.27504 4.29998C7.01004 3.73998 6.32004 3.44498 5.73004 3.64998C5.14504 3.85498 4.87504 4.47498 5.14004 5.03998L8.10004 11.045C8.36004 11.61 8.41004 12.125 8.21004 12.195C8.01004 12.265 7.53004 11.93 7.14004 11.445L5.10504 8.82498C4.71504 8.33998 4.04004 8.07498 3.59504 8.22998C3.15504 8.38498 3.04004 8.94498 3.34504 9.48998L5.84504 13.865C5.90004 14.02 7.35504 16.8 7.46004 16.915C8.50004 18.565 10.145 19.51 12.23 18.79L12.96 18.5372V15.84C12.96 14.2494 14.2494 12.96 15.84 12.96H18.3887C18.763 12.143 19.1735 11.2467 19.5492 10.4262L19.5592 10.4045L19.5647 10.3926L19.5648 10.3922L19.5702 10.3804L19.581 10.3569C19.9595 9.53048 20.3003 8.78624 20.53 8.28498C20.605 8.11498 20.605 7.92998 20.53 7.76998ZM11.81 20.51L12.96 20.0792V23.395H11.815L11.185 22.03C11.055 21.75 11.045 21.425 11.165 21.135C11.285 20.845 11.52 20.62 11.81 20.51ZM14.4 16.32C14.4 15.2596 15.2596 14.4 16.32 14.4H22.08C23.1404 14.4 24 15.2596 24 16.32V22.08C24 23.1404 23.1404 24 22.08 24H16.32C15.2596 24 14.4 23.1404 14.4 22.08V16.32ZM16.32 16.56H22.08V17.52H16.32V16.56ZM22.08 18.72H16.32V19.68H22.08V18.72ZM16.32 20.88H22.08V21.84H16.32V20.88Z",
      mask: "url(#".concat(o, ")")
    })]
  })
}

function h(e) {
  let {
    className: t,
    numRequestToSpeak: n
  } = e, i = n > 0;
  return (0, r.jsxs)("div", {
    className: o()(d.raisedHandIcon, t),
    children: [(0, r.jsx)(p, {
      isBadged: i
    }), i ? (0, r.jsx)(s.Text, {
      className: d.raisedHandCount,
      variant: "text-xs/semibold",
      children: n > 99 ? "99+" : n
    }) : null]
  })
}

function f(e) {
  var {
    toggleRequestToSpeakSidebar: t,
    showRequestToSpeakSidebar: n,
    className: l,
    numRequestToSpeak: o,
    onClick: a
  } = e, s = function(e, t) {
    if (null == e) return {};
    var n, r, i = function(e, t) {
      if (null == e) return {};
      var n, r, i = {},
        l = Object.keys(e);
      for (r = 0; r < l.length; r++) n = l[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
      return i
    }(e, t);
    if (Object.getOwnPropertySymbols) {
      var l = Object.getOwnPropertySymbols(e);
      for (r = 0; r < l.length; r++) n = l[r], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
    }
    return i
  }(e, ["toggleRequestToSpeakSidebar", "showRequestToSpeakSidebar", "className", "numRequestToSpeak", "onClick"]);
  let d = i.useCallback(() => {
    null == a || a(), t()
  }, [a, t]);
  return (0, r.jsx)(c.Z, function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {},
        r = Object.keys(n);
      "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
        return Object.getOwnPropertyDescriptor(n, e).enumerable
      }))), r.forEach(function(t) {
        var r;
        r = n[t], t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r
      })
    }
    return e
  }({
    onClick: d,
    label: n ? u.NW.string(u.t.gKGz7O) : u.NW.string(u.t.ImQ4dX),
    className: l,
    iconComponent: () => (0, r.jsx)(h, {
      numRequestToSpeak: o,
      className: l
    })
  }, s))
}