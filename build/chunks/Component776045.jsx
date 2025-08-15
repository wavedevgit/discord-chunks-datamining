/** Chunk was on 73628 **/
/** chunk id: 776045, original params: e,t,A (module,exports,require) **/
require.d(exports, {
  A: () => c,
  default: () => d
}), require("./388685.js");
var n, Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk86054 = require("./86054.js"),
  c = ((n = {}).DANGER = "danger", n.WARNING = "warning", n);

function d(e) {
  let {
    transitionState: t,
    onClose: A,
    title: n,
    body: c,
    cta: d,
    closeLabel: u,
    onConfirm: g,
    iconVariant: f = "warning"
  } = e, [p, h] = a.useState(false), m = async () => {
    h(true);
    try {
      await g(), A()
    } finally {
      h(false)
    }
  }, v = null != n ? n : o.intl.string(o.t.D94rwc);
  return (0, r.jsxs)(i.Y0X, {
    className: s.__invalid_container,
    size: i.CgR.DYNAMIC,
    transitionState: t,
    "aria-label": v,
    parentComponent: "WarningModal",
    children: [(0, r.jsxs)(i.hzk, {
      className: s.content,
      children: [(0, r.jsxs)("div", {
        className: s.header,
        children: [(0, r.jsx)(i.Mgn, {
          size: "custom",
          color: "currentColor",
          width: 20,
          height: 20,
          className: function(e) {
            switch (e) {
              case "danger":
                return s.dangerIcon;
              case "warning":
                return s.warningIcon
            }
          }(f)
        }), (0, r.jsx)(i.LZC, {
          size: 8,
          horizontal: true
        }), (0, r.jsx)(i.X6q, {
          variant: "heading-xl/semibold",
          color: "header-primary",
          children: v
        })]
      }), (0, r.jsx)(i.LZC, {
        size: 12
      }), (0, r.jsx)(i.Text, {
        variant: "text-md/normal",
        color: "text-muted",
        className: s.__invalid_body,
        children: c
      })]
    }), (0, r.jsxs)(i.mzw, {
      children: [(0, r.jsx)(i.zxk, {
        variant: "primary",
        text: d,
        onClick: m,
        loading: p
      }), (0, r.jsx)(i.LZC, {
        size: 12,
        horizontal: true
      }), null != u && (0, r.jsx)(l.zx, {
        color: l.zx.Colors.PRIMARY,
        look: l.zx.Looks.OUTLINED,
        onClick: A,
        children: u
      })]
    })]
  })
}