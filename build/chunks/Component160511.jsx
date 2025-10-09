/** Chunk was on 52030 **/
/** chunk id: 160511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658550 = require("./658550.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function u(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: u,
    onClose: h,
    isSlideReady: f,
    headerAlignStart: g
  } = e, [m, p] = r.useState(false), [x, b] = r.useState(null), [S, j] = r.useState(false), [y, v] = r.useState(null), [C, Z] = r.useState(""), w = r.useRef(null);
  r.useEffect(() => {
    p(true), s.tn.post({
      url: d.ANM.LOGIN_SMS_SEND,
      body: {
        ticket: t.ticket
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      b(e.body.phone)
    }).catch(e => {
      var t, n;
      v(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
    }).finally(() => {
      p(false)
    })
  }, [t.ticket]), r.useEffect(() => {
    if (f) {
      var e;
      null == (e = w.current) || e.focus()
    }
  }, [f]);
  let k = null == x ? c.intl.string(c.t.LQdCQE) : c.intl.formatToPlainString(c.t["8r6h7+"], {
    phoneNumber: x
  });
  return (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), j(true), n({
        mfaType: "sms",
        data: C
      }).catch(e => {
        var t, n;
        v(null != (n = e.message) ? n : null == (t = e.body) ? true : t.message)
      }).finally(() => {
        j(false)
      })
    },
    children: [(0, l.jsx)(o.Z.SlideHeader, {
      subtitle: k,
      onClose: h,
      headerAlignStart: g
    }), (0, l.jsx)(o.Z.SlideContent, {
      children: (0, l.jsxs)(a.NIo, {
        children: [(0, l.jsx)(a.oil, {
          label: c.intl.string(c.t.HZPBOT),
          inputRef: w,
          onChange: Z,
          placeholder: c.intl.string(c.t.tARzgo),
          maxLength: 10,
          value: C,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: S,
          error: y
        }), (0, l.jsx)(a.zxk, {
          variant: "secondary",
          text: c.intl.string(c.t.ZF29Ly),
          loading: m,
          onClick: () => {
            s.tn.post({
              url: d.ANM.LOGIN_SMS_SEND,
              body: {
                ticket: t.ticket
              },
              oldFormErrors: true,
              rejectWithError: false
            }).then(e => {
              b(e.body.phone)
            }).catch(e => {
              var t;
              v(e.message || (null == (t = e.body) ? true : t.message))
            })
          }
        })]
      })
    }), (0, l.jsx)(o.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: u,
      showConfirm: true,
      disabled: C.length !== i.Gz,
      submitting: S
    })]
  })
}