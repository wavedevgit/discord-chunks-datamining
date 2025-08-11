/** Chunk was on 69773 **/
/** chunk id: 521937, original params: e,t,n (module,exports,require) **/
require.d(exports, {
  v: () => m
}), require("./388685.js"), require("./35282.js");
var Chunk255367 = require("./255367.js"),
  Chunk73800 = require("./73800.js"),
  Chunk120356 = require("./120356.js"),
  i = require.n(Chunk120356),
  Chunk593473 = require("./593473.js"),
  Chunk114858 = require("./114858.js"),
  Chunk755721 = require("./755721.js"),
  Chunk481060 = require("./481060.js"),
  Chunk489863 = require("./489863.js"),
  Chunk511540 = require("./511540.js"),
  Chunk828878 = require("./828878.js"),
  Chunk388032 = require("./388032.jsx"),
  Chunk949463 = require("./949463.js");

function m(e) {
  let {
    onUserCodeAccepted: t,
    usePrefilledCode: n
  } = e, [o, m] = r.useState(() => {
    let {
      user_code: e
    } = l.parse(window.location.search);
    return n && null != e ? e : ""
  }), v = (0, s.TH)(), b = r.useCallback(() => {
    (0, u.c$)(v, "user_code_input_unauthorized")
  }, [v]), {
    manualSubmit: _,
    error: g,
    submitting: C
  } = (0, f.c)(o, t, b);
  return <div className={x.content}>{<div className={x.innerContent}>{<d.X6q variant={"heading-xl/extrabold"} className={x.text}>{h.intl.string(h.t.KYPNUl)}</d.X6q>}{<d.Text variant={"text-md/medium"} color={"header-secondary"} className={x.text}>{h.intl.string(h.t.xRHk7e)}</d.Text>}{<c.Is placeholder={h.intl.formatToPlainString(h.t["0tbz6+"], {
          number: p.A.USER_CODE_LENGTH
        })} maxLength={p.A.USER_CODE_LENGTH} className={x.textInputContainer} inputClassName={i()(x.textInput, {
          [x.textInputError]: null != g
        })} autoComplete={"off"} autoFocus={true} value={o} onChange={m} error={g} />}</div>}{<d.zxk fullWidth={true} variant={"primary"} text={h.intl.string(h.t["3PatS0"])} onClick={_} loading={C} disabled={o.length !== p.A.USER_CODE_LENGTH} />}</div>
}