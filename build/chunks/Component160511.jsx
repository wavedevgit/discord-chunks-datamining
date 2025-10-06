/** Chunk was on 52030 **/
/** chunk id: 160511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => h
}), require("./388685.js"), require("./457542.js");
var Chunk951288 = require("./951288.js"),
  Chunk647438 = require("./647438.js"),
  Chunk658550 = require("./658550.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk888898 = require("./888898.js");

function h(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: h,
    onClose: f,
    isSlideReady: g,
    headerAlignStart: m
  } = e, [p, x] = r.useState(false), [S, b] = r.useState(null), [j, y] = r.useState(false), [v, C] = r.useState(null), [Z, w] = r.useState(""), k = r.useRef(null);
  r.useEffect(() => {
    x(true), s.tn.post({
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
      C(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
    }).finally(() => {
      x(false)
    })
  }, [t.ticket]), r.useEffect(() => {
    if (g) {
      var e;
      null == (e = k.current) || e.focus()
    }
  }, [g]);
  let E = null == S ? c.intl.string(c.t.LQdCQE) : c.intl.formatToPlainString(c.t["8r6h7+"], {
    phoneNumber: S
  });
  return (0, l.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), y(true), n({
        mfaType: "sms",
        data: Z
      }).catch(e => {
        var t, n;
        C(null != (n = e.message) ? n : null == (t = e.body) ? true : t.message)
      }).finally(() => {
        y(false)
      })
    },
    children: [(0, l.jsx)(o.Z.SlideHeader, {
      subtitle: E,
      onClose: f,
      headerAlignStart: m
    }), (0, l.jsx)(o.Z.SlideContent, {
      children: (0, l.jsxs)(a.xJW, {
        title: c.intl.string(c.t.HZPBOT),
        children: [(0, l.jsxs)("div", {
          className: u.smsInputContainer,
          children: [(0, l.jsx)(a.oil, {
            inputRef: k,
            onChange: w,
            placeholder: c.intl.string(c.t.tARzgo),
            maxLength: 10,
            value: Z,
            autoComplete: "one-time-code",
            spellCheck: "false",
            disabled: j
          }), (0, l.jsx)(a.zxk, {
            variant: "secondary",
            text: c.intl.string(c.t.ZF29Ly),
            loading: p,
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
                C(e.message || (null == (t = e.body) ? true : t.message))
              })
            }
          })]
        }), (0, l.jsx)(o.Z.SlideError, {
          error: v
        })]
      })
    }), (0, l.jsx)(o.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: h,
      showConfirm: true,
      disabled: Z.length !== i.Gz,
      submitting: j
    })]
  })
}