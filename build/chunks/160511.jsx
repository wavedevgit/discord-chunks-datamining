/** Chunk was on 52030 **/
/** chunk id: 160511, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  Z: () => f
}), require("./388685.js"), require("./457542.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk658550 = require("./658550.js"),
  Chunk544891 = require("./544891.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk507453 = require("./507453.js"),
  Chunk981631 = require("./981631.js"),
  Chunk388032 = require("./388032.js"),
  Chunk895453 = require("./895453.js");

function f(e) {
  let {
    mfaChallenge: t,
    finish: n,
    setSlide: f,
    onClose: m,
    isSlideReady: g,
    headerAlignStart: x
  } = e, [p, S] = r.useState(false), [j, b] = r.useState(null), [y, v] = r.useState(false), [C, Z] = r.useState(null), [w, k] = r.useState(""), E = r.useRef(null);
  r.useEffect(() => {
    S(true), s.tn.post({
      url: c.ANM.LOGIN_SMS_SEND,
      body: {
        ticket: t.ticket
      },
      oldFormErrors: true,
      rejectWithError: false
    }).then(e => {
      b(e.body.phone)
    }).catch(e => {
      var t, n;
      Z(null != (n = null == (t = e.body) ? true : t.message) ? n : e.message)
    }).finally(() => {
      S(false)
    })
  }, [t.ticket]), r.useEffect(() => {
    if (g) {
      var e;
      null == (e = E.current) || e.focus()
    }
  }, [g]);
  let O = null == j ? u.intl.string(u.t.LQdCQE) : u.intl.formatToPlainString(u.t["8r6h7+"], {
    phoneNumber: j
  });
  return <form onSubmit={e => {
      e.preventDefault(), v(true), n({
        mfaType: "sms",
        data: w
      }).catch(e => {
        var t, n;
        Z(null != (n = e.message) ? n : null == (t = e.body) ? true : t.message)
      }).finally(() => {
        v(false)
      })
    }}>{<d.Z.SlideHeader subtitle={O} onClose={m} headerAlignStart={x} />}{<d.Z.SlideContent><o.xJW title={u.intl.string(u.t.HZPBOT)}>{<div className={h.smsInputContainer}>{<a.Is className={h.smsInput} inputRef={E} onChange={k} placeholder={u.intl.string(u.t.tARzgo)} maxLength={10} value={w} autoComplete={"one-time-code"} spellCheck={"false"} disabled={y} />}{<o.zxk variant={"secondary"} text={u.intl.string(u.t.ZF29Ly)} loading={p} onClick={() => {
              s.tn.post({
                url: c.ANM.LOGIN_SMS_SEND,
                body: {
                  ticket: t.ticket
                },
                oldFormErrors: true,
                rejectWithError: false
              }).then(e => {
                b(e.body.phone)
              }).catch(e => {
                var t;
                Z(e.message || (null == (t = e.body) ? true : t.message))
              })
            }} />}</div>}{<d.Z.SlideError error={C} />}</o.xJW></d.Z.SlideContent>}{<d.Z.SlideFooter mfaChallenge={t} setSlide={f} showConfirm={true} disabled={w.length !== i.Gz} submitting={y} />}</form>
}