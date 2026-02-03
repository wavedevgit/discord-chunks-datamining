/** Chunk was on web.js **/
/** chunk id: 792849, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  g: () => l
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk261225 = require("./261225.jsx"),
  Chunk970488 = require("./970488.jsx");
let s = e => {
    let {
      color: t,
      children: n
    } = e;
    return (0, r.jsx)("div", {
      style: {
        background: t,
        minHeight: 120,
        height: "100%",
        borderRadius: 8,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        fontWeight: "bold"
      },
      children: n
    })
  },
  l = {
    name: "Grid",
    id: "grid",
    component: e => {
      let {
        columns: t,
        gridItemColumns: n,
        gridItemRows: l
      } = e;
      return (0, r.jsxs)(r.Fragment, {
        children: [(0, r.jsx)(i.Text, {
          variant: "text-lg/semibold",
          children: "Grid is used to create a responsive grid layout. It takes a columns prop to define the number of columns (1-6). The grid automatically becomes responsive on smaller screens."
        }), (0, r.jsx)("br", {}), (0, r.jsx)(i.Text, {
          variant: "text-lg/semibold",
          children: "GridItem is (optionally) used to set the size of a grid itme in the grid."
        }), (0, r.jsx)("div", {
          style: {
            marginTop: 24
          },
          children: (0, r.jsxs)(a.A, {
            columns: t,
            children: [(0, r.jsx)(s, {
              color: "red"
            }), (0, r.jsx)(o.A, {
              columns: n,
              rows: l,
              children: (0, r.jsx)(s, {
                color: "orange",
                children: (0, r.jsx)(i.Text, {
                  variant: "text-lg/semibold",
                  children: "GridItem"
                })
              })
            }), (0, r.jsx)(s, {
              color: "yellow"
            }), (0, r.jsx)(s, {
              color: "green"
            }), (0, r.jsx)(s, {
              color: "blue"
            }), (0, r.jsx)(s, {
              color: "violet"
            }), (0, r.jsx)(s, {
              color: "red"
            }), (0, r.jsx)(s, {
              color: "orange"
            }), (0, r.jsx)(s, {
              color: "yellow"
            }), (0, r.jsx)(s, {
              color: "green"
            }), (0, r.jsx)(s, {
              color: "blue"
            }), (0, r.jsx)(s, {
              color: "violet"
            }), (0, r.jsx)(s, {
              color: "red"
            }), (0, r.jsx)(s, {
              color: "orange"
            }), (0, r.jsx)(s, {
              color: "yellow"
            }), (0, r.jsx)(s, {
              color: "green"
            }), (0, r.jsx)(s, {
              color: "blue"
            }), (0, r.jsx)(s, {
              color: "violet"
            }), (0, r.jsx)(s, {
              color: "red"
            }), (0, r.jsx)(s, {
              color: "orange"
            }), (0, r.jsx)(s, {
              color: "yellow"
            }), (0, r.jsx)(s, {
              color: "green"
            }), (0, r.jsx)(s, {
              color: "blue"
            }), (0, r.jsx)(s, {
              color: "violet"
            })]
          })
        })]
      })
    },
    controls: {
      columns: {
        label: "Columns",
        type: "number",
        defaultValue: 3
      },
      gridItemColumns: {
        label: "Grid Item Columns",
        type: "number",
        defaultValue: 1
      },
      gridItemRows: {
        label: "Grid Item Rows",
        type: "number",
        defaultValue: 1
      }
    }
  }