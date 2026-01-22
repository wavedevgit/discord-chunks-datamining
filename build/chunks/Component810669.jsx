/** Chunk was on 16864 **/
/** chunk id: 810669, original params: e,t,r (module,exports,require) **/
"use strict";
require.d(exports, {
  e: () => b
}), require("./747238.js"), require("./896048.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk414121 = require("./414121.jsx"),
  Chunk981355 = require("./981355.js"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk120509 = require("./120509.js");
let Chunk196390 = require("./196390.js"),
  Chunk906118 = require("./906118.js"),
  p = "".concat(window.GLOBAL_ENV.WEBAPP_ENDPOINT.split("//")[1]).concat(Chunk652215.BVt.ACTIVATE),
  h = "".concat(location.protocol, "//").concat(p);

function x(e) {
  let {
    text: t = ""
  } = e, [r, l] = n.useState(false);
  return n.useEffect(() => {
    let e = new Image;
    e.src = f, e.onload = () => l(true), e.onerror = () => l(true)
  }, [f]), "" !== t && r ? (0, a.jsxs)(a.Fragment, {
    children: [(0, a.jsx)(i.Ay, {
      size: 288,
      text: t
    }), (0, a.jsx)("div", {
      className: d.xi,
      children: (0, a.jsx)("img", {
        src: f,
        alt: ""
      })
    })]
  }) : (0, a.jsx)("div", {
    className: d.Yp,
    children: (0, a.jsx)(s.y$y, {
      type: s.y$y.Type.WANDERING_CUBES
    })
  })
}
let b = e => {
  var t;
  let {
    code: r
  } = e, {
    width: n,
    height: i
  } = (0, l.A)();
  return null == r || 0 === r.length ? null : (0, a.jsxs)("div", {
    className: d.nd,
    style: {
      zoom: Math.min(n / 1460, i / 1080, 1)
    },
    children: [(0, a.jsx)("div", {
      className: d.Iv,
      children: (0, a.jsx)("div", {
        className: d.wm
      })
    }), (0, a.jsxs)("div", {
      className: d.SV,
      children: [(0, a.jsxs)("div", {
        className: d._c,
        children: [(0, a.jsx)("div", {
          className: d.fn,
          children: (0, a.jsx)(x, {
            text: "".concat(h, "?user_code=").concat(encodeURIComponent(r))
          })
        }), (0, a.jsxs)("div", {
          className: d.E7,
          children: [(0, a.jsx)(s.Heading, {
            variant: "heading-xxl/semibold",
            color: "text-strong",
            className: d.MM,
            children: o.intl.string(o.t.llDCid)
          }), (0, a.jsx)(s.Heading, {
            variant: "heading-xxl/normal",
            color: "text-default",
            children: o.intl.string(o.t.JfHzXG)
          })]
        })]
      }), (0, a.jsxs)("div", {
        className: d.$G,
        children: [(0, a.jsx)("div", {
          className: d.yF
        }), (0, a.jsx)(s.Heading, {
          variant: "heading-lg/semibold",
          color: "text-strong",
          className: d.Bw,
          children: o.intl.string(o.t.arEHn4)
        }), (0, a.jsx)("div", {
          className: d.yF
        })]
      }), (0, a.jsxs)("div", {
        className: d.Y7,
        children: [(0, a.jsxs)("div", {
          className: d.WX,
          children: [(0, a.jsx)(s.Heading, {
            variant: "heading-xxl/semibold",
            color: "text-strong",
            className: d.GP,
            children: o.intl.string(o.t["Eu8rJ/"])
          }), (0, a.jsx)(s.Heading, {
            variant: "heading-xxl/normal",
            color: "text-default",
            children: o.intl.string(o.t.BkEMJ1)
          })]
        }), (0, a.jsxs)("div", {
          className: d.u5,
          children: [(0, a.jsx)(s.Heading, {
            variant: "heading-xxl/semibold",
            color: "text-strong",
            className: d.GP,
            children: p
          }), (0, a.jsxs)("div", {
            className: d.WX,
            children: [(0, a.jsx)(s.Heading, {
              variant: "heading-xxl/normal",
              color: "text-default",
              children: o.intl.string(o.t.RyDxBX)
            }), (0, a.jsx)(s.Heading, {
              variant: "heading-xxl/bold",
              color: "text-strong",
              className: d.H$,
              children: null == (t = r.match(/.{1,4}/g)) ? true : t.join(" ")
            })]
          })]
        })]
      }), (0, a.jsx)("img", {
        className: d.kX,
        src: u,
        alt: ""
      })]
    })]
  })
}