/** Chunk was on web.js **/
/** chunk id: 834349, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  a$: () => d
});
var Chunk477831 = require("./477831.js"),
  Chunk506523 = require("./506523.js"),
  Chunk873954 = require("./873954.js"),
  Chunk932807 = require("./932807.js"),
  Chunk620021 = require("./620021.js"),
  Chunk753125 = require("./753125.js"),
  Chunk647438 = require("./647438.js");
let u = null,
  d = (0, Chunk647438.createContext)(null);

function f(e, t, n, r = "react-aria-ListBoxSection") {
  var i;
  let a = $e8Bmu$useContext(d),
    {
      dragAndDropHooks: o,
      dropState: s
    } = $e8Bmu$useContext($612b8eb6cb90e02d$export$d188a835a7bc5783),
    {
      CollectionBranch: l
    } = $e8Bmu$useContext($7135fc7d473fd974$export$4feb769f8ddf26c5),
    [c, u] = $64fa3d84918910a7$export$9d4c57ee4c6ffdd8(),
    {
      headingProps: _,
      groupProps: p
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
    ...$e8Bmu$mergeProps(m, h, p),
    ref: t
  }, $e8Bmu$react.createElement($72a5793c14baf454$export$e0e4026c12a8bdbb.Provider, {
    value: {
      ..._,
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
  return a ? null : $e8Bmu$react.createElement(p, {
    ...e,
    dropIndicatorProps: i,
    isDropTarget: o,
    ref: t
  })
}
let p = null;
(0, Chunk873954.G5)("loader", function(e, t, n) {
  let a = (0, c.useContext)(d),
    {
      isLoading: u,
      onLoadMore: f,
      scrollOffset: _,
      ...p
    } = e,
    h = (0, c.useRef)(null),
    m = (0, c.useMemo)(() => ({
      onLoadMore: f,
      collection: null == a ? true : a.collection,
      sentinelRef: h,
      scrollOffset: _
    }), [f, _, null == a ? true : a.collection]);
  (0, o.B)(m, h);
  let g = (0, r.aX)({
      ...p,
      id: true,
      children: n.rendered,
      defaultClassName: "react-aria-ListBoxLoadingIndicator",
      values: null
    }),
    E = {
      tabIndex: false
    };
  return c.createElement(c.Fragment, null, c.createElement("div", {
    style: {
      position: "relative",
      width: 0,
      height: 0
    },
    inert: (0, s.P)(true)
  }, c.createElement("div", {
    "data-testid": "loadMoreSentinel",
    ref: h,
    style: {
      position: "absolute",
      height: 1,
      width: 1
    }
  })), u && g.children && c.createElement("div", {
    ...(0, i.d)((0, l.z)(e, {
      global: true
    }), E),
    ...g,
    role: "option",
    ref: t
  }, g.children))
})