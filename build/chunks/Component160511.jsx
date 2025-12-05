/** Chunk was on 52030 **/
/** chunk id: 160511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => d
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
  Chunk658550 = require("./658550.js"),
  Chunk544891 = require("./544891.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.jsx"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.jsx");

function d(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: d,
    onClose: f,
    isSlideReady: h,
    headerAlignStart: g
  } = e, [m, b] = l.useState(false), [p, j] = l.useState(null), [y, x] = l.useState(false), [S, v] = l.useState(null), [C, Z] = l.useState(""), O = l.useRef(null);
  l.useEffect(() => {
    b(true), s.tn.post({
      url: c.ANM.LOGIN_SMS_SEND,
      body: {
        ticket: t.ticket
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      j(e.body.phone)
    }).catch(e => {
      var t, n;
      v(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
    }).finally(() => {
      b(false)
    })
  }, [t.ticket]), l.useEffect(() => {
    if (h) {
      var e;
      null == (e = O.current) || e.focus()
    }
  }, [h]);
  let w = null == p ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t["8r6h7+"], {
    phoneNumber: p
  });
  return (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), x(true), n({
        mfaType: "sms",
        data: C
      }).catch(e => {
        var t, n;
        v(null != (n = e.message) ? n : null == (t = e.body) ? true : t.message)
      }).finally(() => {
        x(false)
      })
    },
    children: [(0, r.jsx)(o.Z.SlideHeader, {
      subtitle: w,
      onClose: f,
      headerAlignStart: g
    }), (0, r.jsxs)(o.Z.SlideContent, {
      children: [(0, r.jsxs)(a.NIo, {
        children: [(0, r.jsx)(a.oil, {
          label: u.intl.string(u.t.HZPBOd),
          inputRef: O,
          onChange: Z,
          placeholder: u.intl.string(u.t.tARzgo),
          maxLength: 10,
          value: C,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: y
        }), (0, r.jsx)(a.Button, {
          variant: "secondary",
          text: u.intl.string(u.t.ZF29L6),
          loading: m,
          onClick: () => {
            s.tn.post({
              url: c.ANM.LOGIN_SMS_SEND,
              body: {
                ticket: t.ticket
              },
              oldFormErrors: true,
              rejectWithError: false
            }).then(e => {
              j(e.body.phone)
            }).catch(e => {
              var t;
              v(e.message || (null == (t = e.body) ? true : t.message))
            })
          }
        })]
      }), (0, r.jsx)(o.Z.SlideError, {
        error: S
      })]
    }), (0, r.jsx)(o.Z.SlideFooter, {
      mfaChallenge: t,
      setSlide: d,
      showConfirm: true,
      disabled: C.length !== i.Gz,
      submitting: y
    })]
  })
}