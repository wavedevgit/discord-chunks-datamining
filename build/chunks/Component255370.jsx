/** Chunk was on 46875 **/
/** chunk id: 255370, original params: e,t,n (module,exports,require) **/
"use strict";
require.d(exports, {
  A: () => h
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk417597 = require("./417597.js"),
  Chunk397927 = require("./397927.js"),
  Chunk355622 = require("./355622.js"),
  Chunk349688 = require("./349688.jsx"),
  Chunk914905 = require("./914905.jsx"),
  Chunk302487 = require("./302487.jsx"),
  Chunk522602 = require("./522602.js"),
  Chunk985018 = require("./985018.jsx"),
  Chunk941448 = require("./941448.js");

function h(e) {
  let {
    parentChannel: t
  } = e, n = (0, r.yK)([d.A], () => {
    let e = d.A.getUploads(t.id, i.oU.CREATE_FORUM_POST.drafts.type);
    return null == e ? true : e.filter(e => true !== e.isThumbnail)
  });
  return (0, l.jsxs)("div", {
    className: m.kL,
    children: [(0, l.jsx)(a.Text, {
      variant: "text-md/semibold",
      color: "text-muted",
      children: u.intl.string(u.t.omKGKu)
    }), (0, l.jsx)(a.Text, {
      variant: "text-sm/normal",
      color: "text-muted",
      children: u.intl.string(u.t["zUjLl+"])
    }), (0, l.jsx)("div", {
      children: (0, l.jsx)(a.IpV, {
        className: m.mw,
        orientation: "horizontal",
        paddingFix: false,
        fade: true,
        children: (0, l.jsxs)("div", {
          className: m.p8,
          children: [n.map(e => (0, l.jsx)(c.A, {
            channelId: t.id,
            draftType: i.oU.CREATE_FORUM_POST.drafts.type,
            upload: e,
            keyboardModeEnabled: true,
            hideFileName: true,
            size: s.L.SMALL
          }, e.id)), (0, l.jsx)(o.A, {
            channelId: t.id
          })]
        })
      })
    })]
  })
}