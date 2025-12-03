/** Chunk was on 52030 **/
/** chunk id: 160511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => c
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658550 = require("./658550.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function c(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: c,
    onClose: h,
    isSlideReady: f,
    headerAlignStart: g
  } = e, [m, p] = r.useState(false), [b, x] = r.useState(null), [S, j] = r.useState(false), [y, v] = r.useState(null), [C, Z] = r.useState(""), w = r.useRef(null);
  r.useEffect(() => {
    p(true), s.tn.post({
      url: d.ANM.LOGIN_SMS_SEND,
      body: {
        ticket: t.ticket
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      x(e.body.phone)
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
  let k = null == b ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t["8r6h7+"], {
    phoneNumber: b
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
    }), (0, l.jsxs)(o.Z.SlideContent, {
      children: [(0, l.jsxs)(a.NIo, {
        children: [(0, l.jsx)(a.oil, {
          label: u.intl.string(u.t.HZPBOd),
          inputRef: w,
          onChange: Z,
          placeholder: u.intl.string(u.t.tARzgo),
          maxLength: 10,
          value: C,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: S
        }), (0, l.jsx)(a.Button, {
          variant: "secondary",
          text: u.intl.string(u.t.ZF29L6),
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
              x(e.body.phone)
            }).catch(e => {
              var t;
              v(e.message || (null == (t = e.body) ? true : t.message))
            })
          }
        })]
      }), (0, l.jsx)(o.Z.SlideError, {
        error: y
      })]
    }), (0, l.jsx)(o.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: c,
      showConfirm: true,
      disabled: C.length !== i.Gz,
      submitting: S
    })]
  })
}