/** Chunk was on 193 **/
/** chunk id: 284182, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  Z: () => f
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk399606 = require("./399606.js"),
  Chunk481060 = require("./481060.js"),
  Chunk541716 = require("./541716.js"),
  Chunk859235 = require("./859235.jsx"),
  Chunk898463 = require("./898463.jsx"),
  Chunk76451 = require("./76451.jsx"),
  Chunk117530 = require("./117530.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk279890 = require("./279890.js");

function f(e) {
  let {
    parentChannel: t
  } = e, n = (0, r.Wu)([d.Z], () => {
    let e = d.Z.getUploads(t.id, l.Ie.CREATE_FORUM_POST.drafts.type);
    return null == e ? true : e.filter(e => true !== e.isThumbnail)
  });
  return (0, a.jsxs)("div", {
    className: m.container,
    children: [(0, a.jsx)(i.Text, {
      variant: "text-md/semibold",
      color: "text-muted",
      children: u.intl.string(u.t.omKGKu)
    }), (0, a.jsx)(i.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: u.intl.string(u.t["zUjLl+"])
    }), (0, a.jsx)("div", {
      children: (0, a.jsx)(i.zJl, {
        className: m.uploadsContainer,
        orientation: "horizontal",
        paddingFix: false,
        fade: true,
        children: (0, a.jsxs)("div", {
          className: m.uploads,
          children: [n.map(e => (0, a.jsx)(o.Z, {
            channelId: t.id,
            draftType: l.Ie.CREATE_FORUM_POST.drafts.type,
            upload: e,
            keyboardModeEnabled: true,
            hideFileName: true,
            size: s.q.SMALL
          }, e.id)), (0, a.jsx)(c._, {
            channelId: t.id
          })]
        })
      })
    })]
  })
}