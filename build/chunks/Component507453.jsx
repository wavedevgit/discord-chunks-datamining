/** Chunk was on 52030 **/
/** chunk id: 507453, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => o
});
var Chunk54381 = require("./54381.js");
require("./473749.js");
var Chunk481060 = require("./481060.js"),
  Chunk600164 = require("./600164.jsx"),
  Chunk388032 = require("./388032.jsx"),
  Chunk802371 = require("./802371.js");
let o = {
  SlideContent: function(e) {
    let {
      children: t,
      scrollbarType: n
    } = e;
    return (0, r.jsx)(l.hzk, {
      className: a.content,
      scrollbarType: n,
      children: t
    })
  },
  SlideError: function(e) {
    let {
      error: t
    } = e;
    return null == t ? null : (0, r.jsx)(l.Text, {
      className: a.error,
      variant: "text-sm/normal",
      color: "text-feedback-critical",
      children: t
    })
  },
  SlideFooter: function(e) {
    let {
      mfaChallenge: t,
      setSlide: n,
      trailingButton: i,
      showConfirm: a = false,
      disabled: o,
      submitting: c
    } = e, u = t.methods.length > 1;
    return null != i || u || a ? (0, r.jsx)(l.mzw, {
      children: (0, r.jsxs)(l.ButtonGroup, {
        fullWidth: true,
        direction: "vertical",
        children: [u && (0, r.jsx)(l.Button, {
          variant: "secondary",
          text: s.intl.string(s.t.Tot4EC),
          onClick: () => n("select")
        }), a && (0, r.jsx)(l.Button, {
          type: "submit",
          variant: "primary",
          text: s.intl.string(s.t["cY+Oob"]),
          disabled: o,
          loading: c
        }), i]
      })
    }) : null
  },
  SlideHeader: function(e) {
    let {
      subtitle: t,
      onClose: n,
      headerAlignStart: o
    } = e;
    return (0, r.jsxs)(l.xBx, {
      direction: i.Z.Direction.VERTICAL,
      className: a.header,
      separator: false,
      align: o ? i.Z.Align.START : true,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        children: s.intl.string(s.t.saHocI)
      }), null != t && (0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        className: a.subtitle,
        children: t
      }), (0, r.jsx)(l.olH, {
        className: a.closeButton,
        onClick: n
      })]
    })
  }
}