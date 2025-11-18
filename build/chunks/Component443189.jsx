/** Chunk was on 6074 **/
/** chunk id: 443189, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  default: () => h
});
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk481060 = require("./481060.js"),
  Chunk313201 = require("./313201.js"),
  Chunk626135 = require("./626135.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk990919 = require("./990919.js"),
  Chunk963705 = require("./963705.js");

function h(e) {
  let {
    source: t,
    onClose: n,
    transitionState: h
  } = e;
  c.useEffect(() => {
    o.default.track(i.rMx.OPEN_MODAL, {
      type: i.jXE.CONTACT_SYNC_NC_MODAL,
      source: {
        location: t
      }
    })
  }, [t]);
  let u = (0, s.Dt)();
  return (0, a.jsxs)(r.Y0X, {
    className: d.contactSync,
    transitionState: h,
    "aria-labelledby": u,
    parentComponent: "ContactSyncModal",
    children: [(0, a.jsx)(r.olH, {
      onClick: n,
      className: d.modalCloseButton
    }), (0, a.jsxs)("div", {
      className: d.inner,
      children: [(0, a.jsx)(r.Heading, {
        variant: "heading-xl/extrabold",
        color: "header-primary",
        className: d.header,
        children: l.intl.string(l.t.fdR8Hf)
      }), (0, a.jsx)(r.Text, {
        variant: "text-md/normal",
        color: "header-secondary",
        children: l.intl.string(l.t["JXyNq+"])
      })]
    }), (0, a.jsx)("div", {
      className: d.container,
      children: (0, a.jsx)("img", {
        alt: "",
        src: b
      })
    })]
  })
}