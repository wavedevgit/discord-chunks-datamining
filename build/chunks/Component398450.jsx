/** Chunk was on 88890 **/
/** chunk id: 398450, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => o
});
var Chunk627968 = require("./627968.js");
require("./64700.js");
var Chunk397927 = require("./397927.js"),
  Chunk235986 = require("./235986.jsx"),
  Chunk985018 = require("./985018.jsx"),
  Chunk288661 = require("./288661.js");
let o = {
  SlideContent: function(e) {
    let {
      children: t,
      scrollbarType: n
    } = e;
    return (0, r.jsx)(l.$mQ, {
      "data-migration-pending": true,
      className: a.Qs,
      scrollbarType: n,
      children: t
    })
  },
  SlideError: function(e) {
    let {
      error: t
    } = e;
    return null == t ? null : (0, r.jsx)(l.Text, {
      className: a.z3,
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
      submitting: d
    } = e, c = t.methods.length > 1;
    return null != i || c || a ? (0, r.jsx)(l.jlY, {
      "data-migration-pending": true,
      children: (0, r.jsxs)(l.ButtonGroup, {
        fullWidth: true,
        children: [c && (0, r.jsx)(l.Button, {
          variant: "secondary",
          text: s.intl.string(s.t.Tot4EC),
          onClick: () => n("select")
        }), a && (0, r.jsx)(l.Button, {
          type: "submit",
          variant: "primary",
          text: s.intl.string(s.t["cY+Oob"]),
          disabled: o,
          loading: d
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
    return (0, r.jsxs)(l.rQ0, {
      "data-migration-pending": true,
      direction: i.A.Direction.VERTICAL,
      className: a.wx,
      separator: false,
      align: o ? i.A.Align.START : true,
      children: [(0, r.jsx)(l.Heading, {
        variant: "heading-xl/semibold",
        color: "text-strong",
        children: s.intl.string(s.t.saHocI)
      }), null != t && (0, r.jsx)(l.Heading, {
        variant: "heading-lg/semibold",
        className: a.VA,
        children: t
      }), (0, r.jsx)(l.s_y, {
        className: a.b,
        onClick: n
      })]
    })
  }
}