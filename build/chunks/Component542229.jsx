/** Chunk was on 88890 **/
/** chunk id: 542229, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  A: () => u
}), require("./896048.js"), require("./492834.js");
var Chunk627968 = require("./627968.js"),
  Chunk64700 = require("./64700.js"),
  Chunk533925 = require("./533925.js"),
  Chunk562465 = require("./562465.js"),
  Chunk397927 = require("./397927.js"),
  Chunk398450 = require("./398450.jsx"),
  Chunk652215 = require("./652215.js"),
  Chunk985018 = require("./985018.jsx");

function u(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: u,
    onClose: f,
    isSlideReady: h,
    headerAlignStart: g
  } = e, [p, m] = l.useState(false), [b, j] = l.useState(null), [y, S] = l.useState(false), [x, v] = l.useState(null), [A, C] = l.useState(""), O = l.useRef(null);
  l.useEffect(() => {
    m(true), s.Bo.post({
      url: d.Rsh.LOGIN_SMS_SEND,
      body: {
        ticket: t.ticket
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      j(e.body.phone)
    }).catch(e => {
      var t, n;
      v(null != (t = null == (n = e.body) ? true : n.message) ? t : e.message)
    }).finally(() => {
      m(false)
    })
  }, [t.ticket]), l.useEffect(() => {
    if (h) {
      var e;
      null == (e = O.current) || e.focus()
    }
  }, [h]);
  let w = null == b ? c.intl.string(c.t.LQdCQE) : c.intl.formatToPlainString(c.t["8r6h7+"], {
    phoneNumber: b
  });
  return (0, r.jsxs)("form", {
    onSubmit: e => {
      e.preventDefault(), S(true), n({
        mfaType: "sms",
        data: A
      }).catch(e => {
        var t, n;
        v(null != (t = e.message) ? t : null == (n = e.body) ? true : n.message)
      }).finally(() => {
        S(false)
      })
    },
    children: [(0, r.jsx)(o.A.SlideHeader, {
      subtitle: w,
      onClose: f,
      headerAlignStart: g
    }), (0, r.jsxs)(o.A.SlideContent, {
      children: [(0, r.jsxs)(a.M_l, {
        children: [(0, r.jsx)(a.ksK, {
          label: c.intl.string(c.t.HZPBOd),
          inputRef: O,
          onChange: C,
          placeholder: c.intl.string(c.t.tARzgo),
          maxLength: 10,
          value: A,
          autoComplete: "one-time-code",
          spellCheck: "false",
          disabled: y
        }), (0, r.jsx)(a.Button, {
          variant: "secondary",
          text: c.intl.string(c.t.ZF29L6),
          loading: p,
          onClick: () => {
            s.Bo.post({
              url: d.Rsh.LOGIN_SMS_SEND,
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
      }), (0, r.jsx)(o.A.SlideError, {
        error: x
      })]
    }), (0, r.jsx)(o.A.SlideFooter, {
      mfaChallenge: t,
      setSlide: u,
      showConfirm: true,
      disabled: A.length !== i.$A,
      submitting: y
    })]
  })
}