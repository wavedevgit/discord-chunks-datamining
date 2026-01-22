/** Chunk was on 48817 **/
/** chunk id: 943357, original params: e,t,l (module,exports,require) **/
require.d(exports, {
  Fo: () => s,
  Wn: () => A,
  v$: () => c
});
var a, i, Chunk562465 = require("./562465.js"),
  Chunk652215 = require("./652215.js"),
  s = ((a = {}).HCAPTCHA_RQDATA = "hCaptchaRqdata", a.SMITE_RQDATA = "SmiteRqdata", a.RECAPTCHA = "Recaptcha", a.RECAPTCHA_ENTERPRISE = "RecaptchaEnterprise", a),
  A = ((i = {})[i.EASY = 1] = "EASY", i[i.MODERATE = 2] = "MODERATE", i[i.DIFFICULT = 3] = "DIFFICULT", i[i.VERY_DIFFICULT = 4] = "VERY_DIFFICULT", i);
async function c(e, t) {
  await n.Bo.post({
    url: o.Rsh.CAPTCHA_TEST,
    body: {
      decider: e,
      options: t
    },
    rejectWithError: false
  })
}