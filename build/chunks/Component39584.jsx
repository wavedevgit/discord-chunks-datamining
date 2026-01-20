/** Chunk was on web.js **/
/** chunk id: 39584, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  V: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk320161 = require("./320161.jsx"),
  Chunk395108 = require("./395108.jsx"),
  Chunk388032 = require("./388032.jsx");

function l(e, t, n) {
  return t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[t] = n, e
}

function c(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {},
      r = Object.keys(n);
    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(e) {
      return Object.getOwnPropertyDescriptor(n, e).enumerable
    }))), r.forEach(function(t) {
      l(e, t, n[t])
    })
  }
  return e
}

function u(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(t) {
      return Object.getOwnPropertyDescriptor(e, t).enumerable
    })), n.push.apply(n, r)
  }
  return n
}

function d(e, t) {
  return t = null != t ? t : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(n) {
    Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
  }), e
}
let f = {
  title: "SkuPreview",
  stories: [{
    name: "SkuPreview",
    id: "skupreview",
    component: e => {
      let {
        skuId: t
      } = e;
      return (0, r.jsxs)("div", {
        children: [(0, r.jsx)(o.Z, {
          skuId: t
        }), (0, r.jsx)("hr", {}), (0, r.jsx)(i.Text, {
          variant: "text-md/bold",
          children: "Sample Skus:"
        }), (0, r.jsxs)(i.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/bold",
            children: "Avatar Decoration"
          }), (0, r.jsx)(a.Z, {
            text: s.intl.string(s.t.OpuAlK),
            delay: 0,
            "aria-label": false,
            copyValue: "1458472704192811088",
            children: e => (0, r.jsx)(i.P3F, d(c({}, e), {
              style: {
                cursor: "pointer"
              },
              children: (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: "1458472704192811088"
              })
            }))
          })]
        }), (0, r.jsxs)(i.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/bold",
            children: "Profile Effect"
          }), (0, r.jsx)(a.Z, {
            text: s.intl.string(s.t.OpuAlK),
            delay: 0,
            "aria-label": false,
            copyValue: "1458479739110166560",
            children: e => (0, r.jsx)(i.P3F, d(c({}, e), {
              style: {
                cursor: "pointer"
              },
              children: (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: "1458479739110166560"
              })
            }))
          })]
        }), (0, r.jsxs)(i.Kqy, {
          direction: "horizontal",
          children: [(0, r.jsx)(i.Text, {
            variant: "text-sm/bold",
            children: "Nameplate"
          }), (0, r.jsx)(a.Z, {
            text: s.intl.string(s.t.OpuAlK),
            delay: 0,
            "aria-label": false,
            copyValue: "1458472704524156959",
            children: e => (0, r.jsx)(i.P3F, d(c({}, e), {
              style: {
                cursor: "pointer"
              },
              children: (0, r.jsx)(i.Text, {
                variant: "text-sm/normal",
                children: "1458472704524156959"
              })
            }))
          })]
        })]
      })
    },
    controls: {
      skuId: {
        label: "SKU Id",
        type: "text",
        defaultValue: "1458472704192811088"
      }
    }
  }]
}