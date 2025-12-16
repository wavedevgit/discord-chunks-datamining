/** Chunk was on 52030 **/
/** chunk id: 160511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => u
}), require("./388685.js"), require("./457542.js");
var Chunk54381 = require("./54381.js"),
  Chunk473749 = require("./473749.js"),
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
    onClose: f,
    isSlideReady: h,
    headerAlignStart: g
  } = e, [m, p] = l.useState(false), [b, j] = l.useState(null), [x, y] = l.useState(false), [S, v] = l.useState(null), [C, O] = l.useState(""), Z = l.useRef(null);
  l.useEffect(() => {
    p(true), s.tn.post({
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
      p(false)
    })
  }, [t.ticket]), l.useEffect(() => {
    if (h) {
      var e;
      null == (e = Z.current) || e.focus()
    }
  }, [h]);
  let w = null == b ? d.intl.string(d.t.LQdCQE) : d.intl.formatToPlainString(d.t["8r6h7+"], {
    phoneNumber: b
  });
  return (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), y(true), n({
        mfaType: "sms",
        data: C
      }).catch(e => {
        var t, n;
        v(null != (n = e.message) ? n : null == (t = e.body) ? true : t.message)
      }).finally(() => {
        y(false)
      })
    },
    children: [(0, r.jsx)(o.Z.SlideHeader, {
      subtitle: w,
      onClose: f,
      headerAlignStart: g
    }), (0, r.jsxs)(o.Z.SlideContent, {
      children: [(0, r.jsxs)(a.NIo, {
        children: [(0, r.jsx)(a.oil, {
          label: d.intl.string(d.t.HZPBOd),
          inputRef: Z,
          onChange: O,
          placeholder: d.intl.string(d.t.tARzgo),
          maxLength: 10,
          value: C,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: x
        }), (0, r.jsx)(a.Button, {
          variant: "secondary",
          text: d.intl.string(d.t.ZF29L6),
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
      setSlide: u,
      showConfirm: true,
      disabled: C.length !== i.Gz,
      submitting: x
    })]
  })
}