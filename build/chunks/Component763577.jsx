/** Chunk was on 91394 **/
/** chunk id: 763577, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./853839.js"), require("./570086.js"), require("./479048.js"), require("./410992.js"), require("./227481.js"), require("./730884.js"), require("./20464.js"), require("./341884.js"), require("./364341.js"), require("./629680.js"), require("./505025.js"), require("./918970.js"), require("./121784.js"), require("./644351.js"), require("./146733.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk164617 = require("./164617.js"),
  Chunk793030 = require("./793030.js"),
  Chunk692547 = require("./692547.js"),
  Chunk333200 = require("./333200.jsx"),
  Chunk159691 = require("./159691.js"),
  Chunk481060 = require("./481060.js");

function u() {
  let e = Object.keys(Chunk164617).map(e => (0, a.jsx)(h, {
    riveName: e
  }, e));
  return (0, Chunk54381.jsx)(Chunk793030.w0Z, {
    style: {
      maxHeight: "100%"
    },
    children: (0, Chunk54381.jsxs)(Chunk793030.Kqy, {
      gap: 24,
      padding: 8,
      style: {
        boxSizing: "border-box"
      },
      children: [(0, Chunk54381.jsx)(Chunk793030.X6q, {
        variant: "heading-lg/medium",
        children: "Rive Inspector"
      }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
        variant: "text-md/normal",
        children: "Upload a .riv file to view the animation and interact with its data binding configuration."
      }), (0, Chunk54381.jsx)(m, {}), (0, Chunk54381.jsx)(Chunk793030.X6q, {
        variant: "heading-lg/medium",
        children: "Rive Overrides"
      }), (0, Chunk54381.jsx)(Chunk793030.xvT, {
        variant: "text-md/normal",
        children: "Upload a .riv file to replace an existing Rive animation in the app with the new one. Useful for previewing updated versions of existing animations before uploading them via the Rive pipeline."
      }), module]
    })
  })
}

function m() {
  let [e, t] = Chunk473749.useState(null), [n, i] = Chunk473749.useState(null), [s, o] = Chunk473749.useState(null), [c, u] = Chunk473749.useState([]), m = Chunk473749.useRef(null), [x, g] = Chunk473749.useState(400), [f, b] = Chunk473749.useState(400), v = Chunk473749.useCallback(() => {
    setTimeout(() => {
      var e, t, n, a;
      Chunk333200(null != (n = null == (e = m.current) ? true : module.getProperties()) ? require : {}), u(null != (a = null == (t = m.current) ? true : exports.getArtboards()) ? Chunk54381 : []), Chunk164617({})
    }, 1e3)
  }, []), j = Chunk473749.useCallback((e, t) => {
    null != n && i(n => {
      var a, l, i;
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
      }({}, n), i = i = {
        [e]: {
          type: null == s || null == (a = s[e]) ? true : a.type,
          value: t
        }
      }, Object.getOwnPropertyDescriptors ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(i)) : (function(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n.push.apply(n, a)
        }
        return n
      })(Object(i)).forEach(function(e) {
        Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(i, e))
      }), l
    })
  }, [Chunk692547, require]), _ = Chunk473749.useCallback(e => {
    o(null), i(null), t(e)
  }, []);
  return (0, Chunk54381.jsxs)(Chunk793030.Kqy, {
    gap: 16,
    children: [(0, Chunk54381.jsx)(h, {
      riveName: "Rive inspector",
      onRiveLoad: _
    }), null != module && (0, Chunk54381.jsx)("div", {
      style: {
        width: x,
        height: f
      },
      children: (0, Chunk54381.jsx)(Chunk481060.BmE, {
        src: module,
        ref: m,
        onLoad: v,
        dynamicDataBinding: null != require ? require : {}
      })
    }), null != module && null == require ? (0, Chunk54381.jsx)(Chunk793030.$jN, {}) : null, null != require && (0, Chunk54381.jsxs)(Chunk793030.Kqy, {
      children: [(0, Chunk54381.jsxs)(Chunk793030.Kqy, {
        gap: 8,
        children: [(0, Chunk54381.jsx)(Chunk793030.X6q, {
          variant: "heading-lg/medium",
          children: "Dimensions"
        }), (0, Chunk54381.jsx)(Chunk481060.oil, {
          type: "number",
          label: "width",
          value: x.toString(),
          onChange: e => g(parseInt(e))
        }), (0, Chunk54381.jsx)(Chunk481060.oil, {
          type: "number",
          label: "height",
          value: f.toString(),
          onChange: e => b(parseInt(e))
        })]
      }), (0, Chunk54381.jsxs)(Chunk793030.Kqy, {
        gap: 8,
        children: [(0, Chunk54381.jsx)(Chunk793030.X6q, {
          variant: "heading-lg/medium",
          children: "Data Binding"
        }), Object.keys(null != Chunk692547 ? Chunk692547 : {}).map(e => {
          var t, l, i, r;
          return (0, a.jsx)(p, {
            property: e,
            type: null == s || null == (t = s[e]) ? true : t.type,
            value: null != (r = null == n || null == (l = n[e]) ? true : l.value) ? r : null == s || null == (i = s[e]) ? true : i.value,
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
    onChange: i,
    artboards: c
  } = e;
  return "string" === n ? (0, a.jsx)(d.oil, {
    label: t,
    value: l,
    onChange: e => i(e)
  }) : "number" === n ? (0, a.jsx)(d.oil, {
    type: "number",
    label: t,
    value: l,
    onChange: e => i(parseInt(e))
  }) : "boolean" === n ? (0, a.jsx)(r.rsf, {
    label: t,
    checked: l,
    onChange: e => i(e)
  }) : "trigger" === n ? (0, a.jsx)(r.zxk, {
    text: "Trigger ".concat(t),
    onClick: () => i(Number.isSafeInteger(l) ? l + 1 : 1)
  }) : "image" === n ? (0, a.jsx)(d.oil, {
    label: t,
    value: l,
    onChange: e => i(e)
  }) : "color" === n ? (0, a.jsx)(o.V, {
    selectionMode: "single",
    label: t,
    value: l,
    onSelectionChange: e => i(e),
    closeOnSelect: true,
    placeholder: "Select a color...",
    options: Object.entries(s.Z.colors).map(e => {
      let [t, n] = e;
      return {
        label: t,
        value: n,
        id: t
      }
    })
  }) : "artboard" === n ? (0, a.jsx)(o.V, {
    selectionMode: "single",
    label: t,
    value: l,
    onSelectionChange: e => i(e),
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
  } = e, o = null == (t = i[n]) ? true : t.riveSrc, u = null == o, m = l.useRef(null), p = (0, d.o8M)(o);
  return (0, a.jsxs)(r.Kqy, {
    gap: 8,
    children: [(0, a.jsx)("label", {
      children: n
    }), (0, a.jsxs)(r.Kqy, {
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
            null != o && (0, d.JGI)(o, n), null == s || s("data:application/octet-stream;base64,".concat(btoa(new Uint8Array(n).reduce((e, t) => e + String.fromCharCode(t), ""))))
          }, a.readAsArrayBuffer(n)
        },
        ref: m
      }), (0, a.jsx)(c.hU, {
        "aria-label": "Clear override for ".concat(n),
        onClick: () => {
          null != m.current && (m.current.value = ""), null != o && (0, d.JGI)(o, null), null == s || s(null)
        },
        icon: d.XHJ,
        variant: "critical-primary",
        size: "sm",
        disabled: null == p && !u
      })]
    })]
  }, n)
}