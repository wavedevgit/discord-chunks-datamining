/** Chunk was on web.js **/
/** chunk id: 245529, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  d: () => s
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk540391 = require("./540391.jsx");
let o = () => (0, r.jsx)("div", {
    style: {
      background: "rgba(255, 255, 255, 0.6)",
      height: 120
    }
  }),
  s = {
    name: "Section",
    id: "section",
    component: e => {
      let {
        verticalMargin: t,
        padding: n
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.Text, {
          variant: "text-lg/semibold",
          children: "Section is used to space out sections of the page. It takes a vertical margin to apply margin above and below, as well as padding to inset its children."
        }), (0, r.jsxs)("div", {
          children: [(0, r.jsx)("div", {
            style: {
              background: "red"
            },
            children: (0, r.jsx)(a.A, {
              verticalMargin: t,
              padding: n,
              children: (0, r.jsx)(o, {})
            })
          }), (0, r.jsx)("div", {
            style: {
              background: "orange"
            },
            children: (0, r.jsx)(a.A, {
              verticalMargin: t,
              padding: n,
              children: (0, r.jsx)(o, {})
            })
          }), (0, r.jsx)("div", {
            style: {
              background: "yellow"
            },
            children: (0, r.jsx)(a.A, {
              verticalMargin: t,
              padding: n,
              children: (0, r.jsx)(o, {})
            })
          }), (0, r.jsx)("div", {
            style: {
              background: "green"
            },
            children: (0, r.jsx)(a.A, {
              verticalMargin: t,
              padding: n,
              children: (0, r.jsx)(o, {})
            })
          }), (0, r.jsx)("div", {
            style: {
              background: "blue"
            },
            children: (0, r.jsx)(a.A, {
              verticalMargin: t,
              padding: n,
              children: (0, r.jsx)(o, {})
            })
          }), (0, r.jsx)("div", {
            style: {
              background: "violet"
            },
            children: (0, r.jsx)(a.A, {
              verticalMargin: t,
              padding: n,
              children: (0, r.jsx)(o, {})
            })
          })]
        })]
      })
    },
    controls: {
      verticalMargin: {
        label: "Vertical Margin",
        type: "number",
        defaultValue: 16
      },
      padding: {
        label: "Padding",
        type: "number",
        defaultValue: 8
      }
    }
  }