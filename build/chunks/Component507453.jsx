/** Chunk was on 52030 **/
/** chunk id: 507453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk951288 = require("./951288.js");
require("./647438.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk357507 = require("./357507.js");
let o = {
  SlideContent: function(e) {
    let {
      children: t,
      scrollbarType: n
    } = e;
    return (0, l.jsx)(r.hzk, {
      className: a.content,
      scrollbarType: n,
      children: t
    })
  },
  SlideError: function(e) {
    let {
      error: t
    } = e;
    return null == t ? null : (0, l.jsx)(r.Text, {
      className: a.error,
      variant: "text-sm/normal",
      color: "text-danger",
      children: t
    })
  },
  SlideFooter: function(e) {
    let {
      mfaChallenge: t,
      setSlide: n,
      leadingButton: i,
      showConfirm: a = false,
      disabled: o,
      submitting: d
    } = e, c = t.methods.length > 1;
    return null != i || c || a ? (0, l.jsx)(r.mzw, {
      children: (0, l.jsxs)(r.hE2, {
        fullWidth: true,
        direction: "vertical",
        children: [i, c && (0, l.jsx)(r.zxk, {
          variant: "secondary",
          text: s.intl.string(s.t.Tot4EB),
          onClick: () => n("select")
        }), a && (0, l.jsx)(r.zxk, {
          type: "submit",
          variant: "primary",
          text: s.intl.string(s.t["cY+Ooa"]),
          disabled: o,
          loading: d
        })]
      })
    }) : null
  },
  SlideHeader: function(e) {
    let {
      subtitle: t,
      onClose: n,
      headerAlignStart: o
    } = e;
    return (0, l.jsxs)(r.xBx, {
      direction: i.Z.Direction.VERTICAL,
      className: a.header,
      separator: false,
      align: o ? i.Z.Align.START : true,
      children: [(0, l.jsx)(r.X6q, {
        variant: "heading-xl/semibold",
        color: "header-primary",
        children: s.intl.string(s.t.saHocH)
      }), null != t && (0, l.jsx)(r.Text, {
        color: "header-secondary",
        variant: "text-md/normal",
        className: a.subtitle,
        children: t
      }), (0, l.jsx)(r.olH, {
        className: a.closeButton,
        onClick: n
      })]
    })
  }
}