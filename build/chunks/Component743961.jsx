/** Chunk was on 60667 **/
/** chunk id: 743961, original params: e,t,n (module,exports,require) **/
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
let d = Chunk64700.memo(function(e) {
  let {
    node: t
  } = e, {
    useTitle: n,
    useTitleTrailingIcon: i,
    useSubnavLabel: d,
    useSubtitle: u,
    layout: _,
    initialize: p,
    useNotice: m
  } = t, g = null == n ? true : n(), A = null == i ? true : i(), f = null == u ? true : u(), h = null == m ? true : m();
  return (0, a.Z)(p), (0, r.jsxs)(r.Fragment, {
    children: [null != g && (0, r.jsx)(o._, {
      title: g,
      titleTrailingIcon: A,
      subtitle: f
    }), (0, r.jsx)("div", {
      "data-settings-category-key": null != n || null != d ? t.key : true,
      "aria-hidden": true,
      style: {
        height: 1
      }
    }), (0, r.jsxs)(l.BJc, {
      gap: 16,
      children: [null != h && (0, r.jsx)(c.A, {
        notice: h
      }), _.map(e => (0, r.jsx)(s.A, {
        node: e
      }, e.key))]
    })]
  })
})