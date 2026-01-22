/** Chunk was on 47841 **/
/** chunk id: 139497, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => d
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk397927 = require("./397927.js"),
  Chunk713654 = require("./713654.js"),
  Chunk199940 = require("./199940.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk659233 = require("./659233.js");
let d = function(e) {
  var t;
  let {
    channel: n,
    end: d
  } = e, u = i.useCallback(() => {
    (0, a.px)({
      channelId: n.id,
      title: n.name,
      description: "",
      emoji: null,
      icon: null
    })
  }, [n]), f = null != (t = (0, s.gU)(n)) ? t : l.N$i;
  return (0, r.jsxs)(r.Fragment, {
    children: [(0, r.jsxs)("div", {
      className: o.TG,
      children: [(0, r.jsx)(f, {
        className: o.cC
      }), (0, r.jsx)(l.Text, {
        className: o.g7,
        variant: "text-sm/normal",
        children: n.name
      }), (0, r.jsx)(l.Button, {
        size: "sm",
        variant: "primary",
        onClick: u,
        text: c.intl.string(c.t.OYkgVk)
      })]
    }), d && (0, r.jsx)("div", {
      className: o.p3
    })]
  })
}