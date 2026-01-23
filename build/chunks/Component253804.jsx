/** Chunk was on 22477 **/
/** chunk id: 253804, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./801460.js"), require("./508300.js"), require("./650828.js"), require("./927092.js"), require("./212978.js"), require("./201528.js"), require("./393431.js"), require("./752391.js"), require("./532706.js"), require("./42231.js"), require("./232424.js"), require("./757074.js"), require("./949626.js"), require("./767709.js"), require("./65162.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk18051 = require("./18051.js"),
  Chunk158954 = require("./158954.js"),
  Chunk827734 = require("./827734.js"),
  Chunk783878 = require("./783878.jsx"),
  Chunk732955 = require("./732955.js"),
  Chunk397927 = require("./397927.js");

function u() {
  let e = Object.keys(r).map(e => (0, a.jsx)(h, {
    riveName: e
  }, e));
  return (0, a.jsx)(i.ArX, {
    style: {
      maxHeight: "100%"
    },
    children: (0, a.jsxs)(i.BJc, {
      gap: 24,
      padding: 8,
      style: {
        boxSizing: "border-box"
      },
      children: [(0, a.jsx)(i.DZT, {
        variant: "heading-lg/medium",
        children: "Rive Inspector"
      }), (0, a.jsx)(i.EYj, {
        variant: "text-md/normal",
        children: "Upload a .riv file to view the animation and interact with its data binding configuration."
      }), (0, a.jsx)(m, {}), (0, a.jsx)(i.DZT, {
        variant: "heading-lg/medium",
        children: "Rive Overrides"
      }), (0, a.jsx)(i.EYj, {
        variant: "text-md/normal",
        children: "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline."
      }), e]
    })
  })
}

function m() {
  let [e, t] = l.useState(null), [n, r] = l.useState(null), [s, o] = l.useState(null), [c, u] = l.useState([]), m = l.useRef(null), [x, g] = l.useState(400), [f, b] = l.useState(400), v = l.useCallback(() => {
    setTimeout(() => {
      var e, t, n, a;
      o(null != (e = null == (n = m.current) ? true : n.getProperties()) ? e : {}), u(null != (t = null == (a = m.current) ? true : a.getArtboards()) ? t : []), r({})
    }, 1e3)
  }, []), j = l.useCallback((e, t) => {
    null != n && r(n => {
      var a, l, r;
      return l = function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {},
            a = Object.keys(n);
          "function" == typeof Object.getOwnPropertySymbols && (a = a.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
            return Object.getOwnPropertyDescriptor(n, e).enumerable
          }))), a.forEach(function(t) {
            var a;
            a = n[t], t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: true,
              configurable: true,
              writable: true
            }) : e[t] = a
          })
        }
        return e
      }({}, n), r = r = {
        [e]: {
          type: null == s || null == (a = s[e]) ? true : a.type,
          value: t
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(r)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(r)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(r, e))
      }), l
    })
  }, [s, n]), _ = l.useCallback(e => {
    o(null), r(null), t(e)
  }, []);
  return (0, a.jsxs)(i.BJc, {
    gap: 16,
    children: [(0, a.jsx)(h, {
      riveName: "Rive inspector",
      onRiveLoad: _
    }), null != e && (0, a.jsx)("div", {
      style: {
        width: x,
        height: f
      },
      children: (0, a.jsx)(d._7m, {
        src: e,
        ref: m,
        onLoad: v,
        dynamicDataBinding: null != n ? n : {}
      })
    }), null != e && null == n ? (0, a.jsx)(i.y$y, {}) : null, null != n && (0, a.jsxs)(i.BJc, {
      children: [(0, a.jsxs)(i.BJc, {
        gap: 8,
        children: [(0, a.jsx)(i.DZT, {
          variant: "heading-lg/medium",
          children: "Dimensions"
        }), (0, a.jsx)(d.ksK, {
          type: "number",
          label: "width",
          value: x.toString(),
          onChange: e => g(parseInt(e))
        }), (0, a.jsx)(d.ksK, {
          type: "number",
          label: "height",
          value: f.toString(),
          onChange: e => b(parseInt(e))
        })]
      }), (0, a.jsxs)(i.BJc, {
        gap: 8,
        children: [(0, a.jsx)(i.DZT, {
          variant: "heading-lg/medium",
          children: "Data Binding"
        }), Object.keys(null != s ? s : {}).map(e => {
          var t, l, r, i;
          return (0, a.jsx)(p, {
            property: e,
            type: null == s || null == (l = s[e]) ? true : l.type,
            value: null != (t = null == n || null == (r = n[e]) ? true : r.value) ? t : null == s || null == (i = s[e]) ? true : i.value,
            onChange: t => j(e, t),
            artboards: c
          }, e)
        })]
      })]
    })]
  })
}

function p(e) {
  let {
    property: t,
    type: n,
    value: l,
    onChange: r,
    artboards: c
  } = e;
  return "string" === n ? (0, a.jsx)(d.ksK, {
    label: t,
    value: l,
    onChange: e => r(e)
  }) : "number" === n ? (0, a.jsx)(d.ksK, {
    type: "number",
    label: t,
    value: l,
    onChange: e => r(parseInt(e))
  }) : "boolean" === n ? (0, a.jsx)(i.dOG, {
    label: t,
    checked: l,
    onChange: e => r(e)
  }) : "trigger" === n ? (0, a.jsx)(i.$nd, {
    text: "Trigger ".concat(t),
    onClick: () => r(Number.isSafeInteger(l) ? l + 1 : 1)
  }) : "image" === n ? (0, a.jsx)(d.ksK, {
    label: t,
    value: l,
    onChange: e => r(e)
  }) : "color" === n ? (0, a.jsx)(o.Z, {
    selectionMode: "single",
    label: t,
    value: l,
    onSelectionChange: e => r(e),
    closeOnSelect: true,
    placeholder: "Select a color...",
    options: Object.entries(s.A.colors).map(e => {
      let [t, n] = e;
      return {
        label: t,
        value: n,
        id: t
      }
    })
  }) : "artboard" === n ? (0, a.jsx)(o.Z, {
    selectionMode: "single",
    label: t,
    value: l,
    onSelectionChange: e => r(e),
    closeOnSelect: true,
    placeholder: "Select an artboard...",
    options: c.map(e => ({
      label: e,
      value: e,
      id: e
    }))
  }) : null
}

function h(e) {
  var t;
  let {
    riveName: n,
    onRiveLoad: s
  } = e, o = null == (t = r[n]) ? true : t.riveSrc, u = null == o, m = l.useRef(null), p = (0, d.GyQ)(o);
  return (0, a.jsxs)(i.BJc, {
    gap: 8,
    children: [(0, a.jsx)("label", {
      children: n
    }), (0, a.jsxs)(i.BJc, {
      justify: "space-between",
      direction: "horizontal",
      align: "center",
      children: [(0, a.jsx)("input", {
        type: "file",
        accept: ".riv",
        onChange: e => {
          var t;
          let n = null == (t = e.target.files) ? true : t[0];
          if (null == n) return;
          let a = new FileReader;
          a.onload = e => {
            var t;
            let n = null == (t = e.target) ? true : t.result;
            null != o && (0, d.DSP)(o, n), null == s || s("data:application/octet-stream;base64,".concat(btoa(new Uint8Array(n).reduce((e, t) => e + String.fromCharCode(t), ""))))
          }, a.readAsArrayBuffer(n)
        },
        ref: m
      }), (0, a.jsx)(c.K0, {
        "aria-label": "Clear override for ".concat(n),
        onClick: () => {
          null != m.current && (m.current.value = ""), null != o && (0, d.DSP)(o, null), null == s || s(null)
        },
        icon: d.ucK,
        variant: "critical-primary",
        size: "sm",
        disabled: null == p && !u
      })]
    })]
  }, n)
}