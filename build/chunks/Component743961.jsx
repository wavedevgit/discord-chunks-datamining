/** Chunk was on web.js **/
/** chunk id: 743961, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk641324 = require("./641324.jsx"),
  Chunk112715 = require("./112715.js"),
  Chunk577806 = require("./577806.jsx"),
  Chunk279423 = require("./279423.jsx");

function u(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useTitleTrailingIcon: i,
    useSubnavLabel: u,
    useSubtitle: d,
    layout: f,
    initialize: p,
    useNotice: _
  } = t, h = null == n ? true : n(), m = null == i ? true : i(), g = null == d ? true : d(), E = null == _ ? true : _(), b = null != n || null != u;
  return (0, o.Z)(p), (0, r.jsxs)(r.Fragment, {
    children: [null != h && (0, r.jsx)(l._, {
      title: h,
      titleTrailingIcon: m,
      subtitle: g
    }), (0, r.jsx)("div", {
      "data-settings-category-key": b ? t.key : true,
      "aria-hidden": true,
      style: {
        height: 1
      }
    }), (0, r.jsxs)(a.BJc, {
      gap: 16,
      children: [null != E && (0, r.jsx)(c.A, {
        notice: E
      }), f.map(e => (0, r.jsx)(s.A, {
        node: e
      }, e.key))]
    })]
  })
}
let d = Chunk64700.memo(u)