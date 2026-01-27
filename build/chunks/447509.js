/** Chunk was on web.js **/
/** chunk id: 447509, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  DN: () => f
});
var Chunk825913 = require("./825913.js"),
  Chunk803082 = require("./803082.js"),
  Chunk59845 = require("./59845.js"),
  Chunk178375 = require("./178375.js"),
  Chunk6494 = require("./6494.js"),
  Chunk216055 = require("./216055.js"),
  Chunk290424 = require("./290424.js"),
  Chunk64700 = require("./64700.js");
let d = null,
  f = (0, Chunk64700.createContext)(null);

function p(e, t, n, r = "react-aria-ListBoxSection") {
  var i;
  let a = $e8Bmu$useContext(f),
    {
      dragAndDropHooks: o,
      dropState: s
    } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783),
    {
      CollectionBranch: l
    } = $e8Bmu$useContext($7135fc7d473fd974$export$4feb769f8ddf26c5),
    [c, u] = $64fa3d84918910a7$export$9d4c57ee4c6ffdd8(),
    {
      headingProps: d,
      groupProps: _
    } = $e8Bmu$useListBoxSection({
      heading: u,
      "aria-label": null != (i = e["aria-label"]) ? i : true
    }),
    h = $64fa3d84918910a7$export$4d86445c2cf5e3({
      defaultClassName: r,
      className: e.className,
      style: e.style,
      values: {}
    }),
    m = $e8Bmu$filterDOMProps(e, {
      global: true
    });
  return delete m.id, $e8Bmu$react.createElement("section", {
    ...$e8Bmu$mergeProps(m, h, _),
    ref: t
  }, $e8Bmu$react.createElement($72a5793c14baf454$export$e0e4026c12a8bdbb.Provider, {
    value: {
      ...d,
      ref: c
    }
  }, $e8Bmu$react.createElement(l, {
    collection: a.collection,
    parent: n,
    renderDropIndicator: $612b8eb6cb90e02d$export$971707d8a129a1f7(o, s)
  })))
}

function _(e, t) {
  t = $e8Bmu$useObjectRef(t);
  let {
    dragAndDropHooks: n,
    dropState: r
  } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783), {
    dropIndicatorProps: i,
    isHidden: a,
    isDropTarget: o
  } = n.useDropIndicator(e, r, t);
  return a ? null : $e8Bmu$react.createElement(h, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    ref: t
  })
}
let h = null;
(0, Chunk59845.KU)(Chunk178375.OJ, function(e, t, n) {
  let a = (0, u.useContext)(f),
    {
      isLoading: o,
      onLoadMore: d,
      scrollOffset: p,
      ..._
    } = e,
    h = (0, u.useRef)(null),
    m = (0, u.useMemo)(() => ({
      onLoadMore: d,
      collection: null == a ? true : a.collection,
      sentinelRef: h,
      scrollOffset: p
    }), [d, p, null == a ? true : a.collection]);
  (0, s.n)(m, h);
  let g = (0, r.Sl)({
      ..._,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-ListBoxLoadingIndicator",
      values: null
    }),
    E = {
      tabIndex: false
    };
  return u.createElement(u.Fragment, null, u.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: (0, l.Y)(true)
  }, u.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: h,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), o && g.children && u.createElement("div", {
    ...(0, i.v)((0, c.$)(e, {
      global: true
    }), E),
    ...g,
    role: "option",
    ref: t
  }, g.children))
})