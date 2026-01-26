/** Chunk was on web.js **/
/** chunk id: 139730, original params: e,t,n (module,exports,re quire) **/
"use strict";
require.d(exports, {
  A: () => p
});
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk503698 = require("./503698.js"),
  s = require.n(Chunk503698),
  Chunk158954 = require("./158954.js"),
  Chunk619517 = require("./619517.jsx"),
  Chunk183555 = require("./183555.jsx"),
  Chunk946356 = require("./946356.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk208952 = require("./208952.js");

function p(e) {
  let {
    previewData: t,
    className: n,
    onClick: a
  } = e, {
    trackUserProfileAction: p
  } = (0, c.NJ)(), _ = i.useRef(false);
  return i.useEffect(() => {
    _.current || (p({
      action: "VIEW_APPLICATION_WIDGET_PREVIEW",
      applicationId: t.application.id
    }), _.current = true)
  }, [p, t.application.id]), (0, r.jsx)(o.sqX, {
    onClick: () => {
      p({
        action: "PRESS_APPLICATION_WIDGET_PREVIEW",
        applicationId: t.application.id
      }), null == a || a()
    },
    "aria-label": t.application.name,
    children: (0, r.jsxs)(u.A.Overlay, {
      className: s()(f.kL, n),
      children: [(0, r.jsxs)(o.BJc, {
        gap: 8,
        padding: 8,
        className: f.Qs,
        children: [(0, r.jsxs)(o.BJc, {
          direction: "horizontal",
          gap: 4,
          children: [(0, r.jsx)(l.Ay, {
            width: 16,
            height: 16,
            src: t.application.icon,
            className: f.In
          }), (0, r.jsx)(o.EYj, {
            variant: "text-xs/medium",
            children: t.application.name
          })]
        }), (0, r.jsxs)("div", {
          className: f.P_,
          children: [(0, r.jsxs)(o.DZT, {
            variant: "heading-sm/semibold",
            lineClamp: 2,
            children: [t.previewText, null != t.previewIcon && (0, r.jsxs)(r.Fragment, {
              children: [" ", (0, r.jsx)("div", {
                className: f.mP,
                children: (0, r.jsx)(l.Ay, {
                  src: t.previewIcon.proxyUrl,
                  width: t.previewIcon.width,
                  height: t.previewIcon.height,
                  responsive: true
                })
              })]
            })]
          }), (0, r.jsx)(o.QWc, {
            textVariant: "text-xs/normal",
            text: d.intl.string(d.t.qI8ZP6),
            variant: "secondary"
          })]
        })]
      }), (0, r.jsx)("div", {
        className: f.Pq,
        children: (0, r.jsx)(l.Ay, {
          src: t.previewImage.proxyUrl,
          width: t.previewImage.width,
          height: t.previewImage.height,
          responsive: true,
          className: f.oz
        })
      })]
    })
  })
}